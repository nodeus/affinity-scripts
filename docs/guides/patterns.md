# Паттерны скриптов

> Проверенные рецепты. Шаблоны: `.mimocode/skills/affinity-scripting/templates/`.
> Референс API: `../sdk/`.

## 1. Каркас любого скрипта

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.currentSpread;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
```

Без `createSetCurrentSpread` цель вставки игнорируется — узлы ложатся плоско
(см. chart-builder 1.5.1).

## 2. Создание узлов (один undo-шаг на батч)

```js
const builder = AddChildNodesCommandBuilder.createCommand();
builder.setInsertionTarget(/* ... */);   // куда вставлять
builder.add(nodeDefinition);             // что вставлять
doc.executeCommand(builder.build(NodeChildType.Main));
```

Группа-контейнер: создать группу, получить узел из `cmd.newNodes`,
вторым батчем положить содержимое с целью вставки в группу
(`InsertionMode.InsertAtEnd`) — итого два undo-шага.

## 3. Compound — несколько команд в один undo

```js
const compound = CompoundCommandBuilder.createCommand();
compound.add(cmd1);
compound.add(cmd2);
doc.executeCommand(compound.build());
```

Пример: замена пробелов на NBSP по одному `createSetText` на позицию —
см. `scripts/hanging-chars/source/hanging-chars.js`.

## 4. Диалог с Preview/Cancel

```js
const historyStart = doc.history.position;
function applyPreview() { doc.executeCommand(cmd, true); }  // true = preview
// OK:     doc.executeCommand(DocumentCommand.createClearPreviews()); + финальное применение
// Cancel: doc.executeCommand(DocumentCommand.createClearPreviews());
//         doc.history.position = historyStart;
```

Диалоги строятся через `require('/dialog.js')`, показ — `runModal()`
(`show()` deprecated). Шаблон: `templates/dialog-preview.js`.

## 5. Обход узлов спреда

```js
function walk(node, fn) {
  fn(node);
  if (node.children) for (const ch of node.children) walk(ch, fn);
}
for (const child of spread.children) walk(child, (n) => { /* ... */ });
```

Сканирование всех спредов и всех текстовых узлов — см. `hanging-chars`.
Сканирование заливок/обводок/градиентов — см. `color-palette-gen`.

## 6. Текст: чтение и запись

```js
const text = storyInterface.story.getText(range.begin, range.end - range.begin);
// запись — только командой createSetText через TextSelection на позиции:
const sel = Selection.create(doc, node);
sel.addSubSelectionForNode(/* TextSelection на range.begin + pos, длиной 1 */);
```

Позиции одиночных букв/предлогов — `findOrphanSpacePositions` в `hanging-chars`.
Построение текста с нуля — `StoryBuilder` (`addText`), см. `sdk/story-text.md`.

## 7. Стили линий без сюрпризов

`PolyCurveNodeDefinition.create` — порядок `(polyCurve, brushFill, lineFill, lineStyle, ...)`.
`lineStyle`/`lineFill` путать нельзя: ошибка `expected FillDescriptorHandle`
молча роняет скрипт (см. chart-builder 1.4.1). Серийные линии — простые, без стрелок.

## 8. Цвета и заливки

- `SolidFill` / `GradientFill` через `FillDescriptor`; клон градиента под новый трансформ — `cloneWithNewTransform`.
- Сбор использованных цветов: `hasBrushFill → brushFillDescriptor`, `hasPenFill → penFillDescriptor` (+`lineWeightPts`).
- RGB/CMYK/HSL/HEX-конверсии: `Colour`, `ColourProfileSet.default` (см. `color-palette-gen`).

## 9. Именование и повторный запуск

Имя группы проверять по `userDescription` на всех спредах; при коллизии —
суффикс `base_2`, `base_3` (функция `uniqueGroupName` в chart-builder).

## 10. Отладка

- `console.log('Fills: ' + n)` после каждого этапа; рендер спреда для визуалки.
- Типичные падения: нет `setCurrentSpread`, перепутан порядок аргументов Definition, `require` без `.js`, мутация узла напрямую вместо команды.
