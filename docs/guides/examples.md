# Примеры кода (10)

> Каждый пример — запускаемый скрипт (начинается с `"use strict"`).
> Используются только API из протестированных скриптов `scripts/*`
> и JSLib-примеров `docs/JSLib/examples/`.

## 1. Информация о документе

```js
"use strict";
const { Document } = require('/document.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
console.log('Title: ' + doc.title);
console.log('Spreads: ' + doc.spreads.length);
console.log('Units: ' + doc.units + ' DPI: ' + doc.dpi);
```

## 2. Обход всех узлов спреда

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.currentSpread;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
function walk(node, fn) {
  fn(node);
  if (node.children) for (const ch of node.children) walk(ch, fn);
}
let n = 0;
for (const child of spread.children) walk(child, () => { n++; });
console.log('Nodes: ' + n);
```

## 3. Подсчёт текстовых полей (все спреды)

```js
"use strict";
const { Document } = require('/document.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
let texts = 0, total = 0;
for (const spread of doc.spreads) {
  const stack = [...spread.children];
  while (stack.length) {
    const node = stack.pop();
    total++;
    if (node.isTextNode) texts++;
    if (node.children) for (const ch of node.children) stack.push(ch);
  }
}
console.log('Text fields: ' + texts + ' of ' + total);
```

## 4. Чтение текста фрейма

```js
"use strict";
// node — текстовый узел, story/range — его интерфейсы (см. hanging-chars)
const originalText = story.getText(range.begin, range.end - range.begin);
console.log('Chars: ' + originalText.length);
console.log(originalText.slice(0, 200));
```

## 5. Замена текста одной командой на поле

```js
"use strict";
const { Selection, TextSelection } = require('/selections.js');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
// NBSP — замена одиночного пробела в позиции pos текстового узла node:
const compound = CompoundCommandBuilder.create();
for (const pos of positions) {
  const storyPos = range.begin + pos;
  const textSel = TextSelection.create([{ begin: storyPos, end: storyPos + 1 }]);
  const sel = Selection.create(doc, node);
  sel.addSubSelectionForNode(node, textSel);
  compound.addCommand(DocumentCommand.createSetText(sel, ' '));
}
doc.executeCommand(compound.createCommand());
// Полный рабочий код: scripts/hanging-chars/source/hanging-chars.js
```

## 6. Сканирование заливок и обводок

```js
"use strict";
// hasBrushFill/brushFillDescriptor, hasPenFill/penFillDescriptor (+lineWeightPts)
try { if (node.children) { for (const ch of node.children) collectFromNode(ch, fills, strokes, gradients); } } catch (_) {}
// Полный рабочий код: scripts/color-palette-gen/source/color-palette-gen.js
```

## 7. Группа-контейнер и новые узлы

```js
"use strict";
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType } = require('/commands.js');
const { ContainerNodeDefinition } = require('/nodes.js');
const cmd = builder.createCommand(true, NodeChildType.Main);
const groupNode = [...cmd.newNodes][0];
// Второй батч: содержимое с целью вставки в группу (InsertionMode.InsertAtEnd)
```

## 8. Диалог-результат

```js
"use strict";
const { Dialog, DialogResult } = require('/dialog.js');
// const result = dialog.runModal();
// if ((result?.value ?? result) == DialogResult.Ok.value) { ... }
// Полный пример: scripts/hanging-chars (диалог 'No-Orphan Fix')
```

## 9. Цвета: RGB/CMYK/HSL/HEX метки

```js
"use strict";
const { Colour, ColourProfileSet } = require('/colours.js');
// CMYK через ColourProfileSet.default; fallback-метки 'C:? M:? Y:? K:?' при ошибке
// Полный рабочий код: scripts/color-palette-gen/source/color-palette-gen.js
```

## 10. Проверка undo одной командой

```js
"use strict";
// После выполнения скрипта: Ctrl+Z должен вернуть документ назад.
// hanging-chars: одно поле = один undo-шаг (compound).
// chart-builder: два шага (группа + содержимое).
```

Связанные файлы: [patterns.md](patterns.md) · `../sdk/` · `../textbook/textbook-ru.md`
