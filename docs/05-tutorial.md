# Практический учебник: скриптинг Affinity (SDK 3.3.0)

> Консолидированный практикум. Все примеры — с импортами JSLib `/....js` (SDK ≥ 3.3.0).
> Старые развёрнутые учебники сохранены в `archive/old-docs/` (пути `/...` там устарели —
> сверяйтесь с [03-migration-guide.md](03-migration-guide.md)).
> API-справочник: [02-sdk-v3.3.0.md](02-sdk-v3.3.0.md).

---

## Глава 1. Как выполняются скрипты

- Скрипт — синхронный JS, выполняемый внутри Affinity через MCP (`affinity_execute_script`).
- **Нет `return`** — результат только через `console.log()`.
- **Нет `module.exports`** — файл должен выполняться сразу.
- Первая строка: `"use strict"`.
- Файлы: только Desktop (`app.userDesktopPath`).
- `NOT_ALLOWED` в ответе команды = пользователь запретил AI/FS/Network в настройках Affinity.

Минимальный скрипт:

```js
"use strict";
const { Document } = require('/document.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
console.log('Open: ' + doc.title);
```

---

## Глава 2. Документ и спред

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');

const doc = Document.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.currentSpread;            // текущий спред
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread)); // обязательно перед правками

console.log('Spreads: ' + doc.spreads.length);
console.log('Units: ' + doc.units);
console.log('DPI: ' + doc.dpi);
```

Обход узлов спреда (рекурсивно, включая вложенные):

```js
function walk(node, fn) {
  fn(node);
  if (node.children) {
    for (const ch of node.children) walk(ch, fn);
  }
}
for (const child of spread.children) walk(child, (n) => console.log(n.name));
```

---

## Глава 3. Выделение (Selection)

Чтение:

```js
const sel = doc.currentSelection;   // или doc.selection (JSLib)
for (const n of sel.nodes) console.log(n.name + ' frameText=' + n.isFrameTextNode);
```

Для команд узлы оборачиваются:

```js
const { Selection } = require('/selections.js');
const wrapped = Selection.create(doc, someNode);
```

Текстовое выделение (диапазон внутри story):

```js
const { Selection, TextSelection } = require('/selections.js');
const textSel = TextSelection.create([{ begin: pos, end: pos + 1 }]);
const sel = Selection.create(doc, textNode);
sel.addSubSelectionForNode(textNode, textSel);
```

---

## Глава 4. Команды: одиночные и составные

Все мутации — через `doc.executeCommand(...)`.

```js
"use strict";
const { Document } = require('/document.js');
const { Selection } = require('/selections.js');
const { DocumentCommand } = require('/commands.js');

const doc = Document.current;
const spread = doc.currentSpread;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const sel = Selection.create(doc, targetNode);
doc.executeCommand(DocumentCommand.createSetVisibility(sel, false)); // пример
```

Одна отмена на несколько команд — `CompoundCommandBuilder`:

```js
const { CompoundCommandBuilder } = require('/commands.js');
const compound = CompoundCommandBuilder.create();
compound.addCommand(cmd1);
compound.addCommand(cmd2);
doc.executeCommand(compound.createCommand());
```

Пакетное создание узлов — `AddChildNodesCommandBuilder`:

```js
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands.js');
const b = AddChildNodesCommandBuilder.create();
b.addNode(someNodeDefinition);
doc.executeCommand(b.createCommand(true, NodeChildType.Main));
```

---

## Глава 5. Preview / Cancel (диалоги с предпросмотром)

```js
const historyStart = doc.history.position;

function applyPreview() {
  doc.executeCommand(cmd, true); // true = preview
}
function onOK() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  doc.executeCommand(finalCmd); // финальное применение
}
function onCancel() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  doc.history.position = historyStart; // откат
}
```

---

## Глава 6. Фигуры

```js
"use strict";
const { Document } = require('/document.js');
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { Shape, ShapeType, ShapeRectangle, ShapeCornerType, Rectangle } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { BlendMode } = require('affinity:common');

const doc = Document.current;
const spread = doc.currentSpread;

const b = AddChildNodesCommandBuilder.create();
const shape = Shape.create(ShapeType.Rectangle);
const fill = FillDescriptor.createSolid(
  SolidFill.create(Colour.createRGBA8({ r: 255, g: 0, b: 0, alpha: 255 })),
  BlendMode.Normal
);
b.addNode(ShapeNodeDefinition.create(shape, new Rectangle(100, 100, 200, 120), fill, null, null, null));
doc.executeCommand(b.createCommand(true, NodeChildType.Main));
```

Скруглённые углы (`ShapeRectangle`):

```js
const sh = ShapeRectangle.create();
sh.setAbsoluteSizes(true, w, h);
sh.topLeft.cornerType = ShapeCornerType.Round;
sh.topLeft.setRadius(r, w, h);
// ... повторить для topRight / bottomLeft / bottomRight
```

См. рабочий пример: `scripts/chart-builder/source/chart-builder.js` (`addRect`).

---

## Глава 7. Кривые

```js
const { CurveBuilder, PolyCurve, Rectangle } = require('/geometry.js');
const { PolyCurveNodeDefinition } = require('/nodes.js');

const cb = CurveBuilder.create();
cb.begin({ x: x1, y: y1 });
cb.lineTo({ x: x2, y: y2 });
const curve = cb.createCurve();
const pc = PolyCurve.create();
pc.addCurve(curve);
const nd = PolyCurveNodeDefinition.create(pc, brushFillDesc, lineStyleDesc, penFillDesc, FillDescriptor.createNone());
b.addPolyCurveNode(nd);
```

Стили линий применяются отдельно (`LineStyleDescriptor.createDefault(weight)`),
см. `applyLineStyles()` в chart-builder.

---

## Глава 8. Цвета и заливки

```js
const { Colour, ColourProfileSet } = require('/colours.js');
const { FillDescriptor, SolidFill, FillType } = require('/fills.js');

const c = Colour.createRGBA8({ r: 10, g: 20, b: 30, alpha: 255 });
const rgb = c.rgba8;                 // { r, g, b, alpha }
const hsl = c.hslaf;                 // { h, s, l, ... }
const cmyk = c.getCMYKA8(false, ColourProfileSet.default);

const solid = FillDescriptor.createSolid(SolidFill.create(c), BlendMode.Normal);
const none = FillDescriptor.createNone();

// чтение заливки узла:
if (node.hasBrushFill) {
  const d = node.brushFillDescriptor;
  if (d.fill.fillType.value === FillType.Solid.value) { /* d.fill.colour */ }
  if (d.fill.fillType.value === FillType.Gradient.value) { /* d.fill.gradient, d.fill.gradientFillType */ }
}
if (node.hasPenFill) { /* то же через penFillDescriptor + node.lineWeightPts */ }
```

См. рабочий пример: `scripts/color-palette-gen/source/color-palette-gen.js`.

---

## Глава 9. Текст: Story, GlyphAtts, форматирование

Чтение текста фрейма:

```js
const si = frameTextNode.storyInterface;
const story = si.story;
const range = si.storyRange;
const text = story.getText(range.begin, range.end - range.begin);
// или: story.getText(0, story.length)
```

Создание текстового фрейма:

```js
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');
const { ParagraphAtts } = require('/paragraphatts.js');

const ga = GlyphAtts.create();
ga.height = 12;
ga.brushFill = FillDescriptor.createSolid(SolidFill.create(mkColor), BlendMode.Normal);
const pa = ParagraphAtts.create();
pa.alignXType = 1; // center
const sb = StoryBuilder.create();
sb.setParagraphAtts(pa);
sb.setGlyphAtts(ga);
sb.addText('Hello');
b.addNode(FrameTextNodeDefinition.createFromStoryBuilder(new Rectangle(x, y, w, h), sb));
```

Замена фрагмента (неразрывный пробел и т.п.):

```js
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
const compound = CompoundCommandBuilder.create();
const textSel = TextSelection.create([{ begin: storyPos, end: storyPos + 1 }]);
const sel = Selection.create(doc, textNode);
sel.addSubSelectionForNode(textNode, textSel);
compound.addCommand(DocumentCommand.createSetText(sel, '\u00A0'));
doc.executeCommand(compound.createCommand());
```

См. рабочий пример: `scripts/hanging-chars/source/hanging-chars.js`.

---

## Глава 10. Диалоги

```js
const { Dialog, DialogResult } = require('/dialog.js');
const { UnitType } = require('/units.js');

const dlg = Dialog.create('My Dialog');
dlg.initialWidth = 350;
const col = dlg.addColumn();
const group = col.addGroup('Size');
const wEdit = group.addUnitValueEditor('W:', UnitType.Pixel, UnitType.Pixel);
wEdit.value = 500;
const typeBox = group.addComboBox('Type:', ['Line', 'Bar', 'Donut'], 0);
const legendBox = col.addGroup('').addCheckBox('Legend', true);

// показать/скрыть элементы:
dlg.setItemsVisibility([showId], [hideId]);

const result = dlg.runModal();
if (result !== DialogResult.Ok) { console.log('Cancelled'); return; }
console.log('W=' + wEdit.value + ' type=' + typeBox.selectedIndex);
```

Ошибки — модальным диалогом:

```js
function showError(msg) {
  const e = Dialog.create('Error');
  e.initialWidth = 250;
  e.addColumn().addGroup('').addStaticText('', msg);
  e.runModal();
}
```

---

## Глава 11. Экспорт

```js
// через пресеты экспорта документа (см. ExportConfigApi / FileExportOptionsApi в SDK):
doc.export(/* options */);
```

Пресеты и области экспорта зависят от сборки — уточняйте через
`affinity_search_sdk_hints(prompt="export preset FileExportOptions")`.

---

## Глава 12. AI-команды

```js
doc.generateImage(prompt, options);
doc.generativeEditImage(prompt, options);
doc.removeBackground();
doc.selectSubject();
doc.detectDepth();
doc.colourise();
// команды: createGenerateImageCommand, createRemoveBackgroundCommand, ...
```

Если команда вернула `NOT_ALLOWED` — пользователь ограничил AI в настройках Affinity.

---

## Глава 13. Файлы и сеть

```js
const { app } = require('/application.js');
const desktop = app.userDesktopPath; // ТОЛЬКО Desktop!

const { HttpRequest, RequestMethod } = require('/network.js');
const req = HttpRequest.create('https://api.example.com/data', RequestMethod.GET);
req.setTimeoutInSec(30);
const { response } = req.do();
console.log(response.statusCode + ' ' + response.content);
```

---

## Глава 14. Отладка

| Симптом | Причина / действие |
|---------|-------------------|
| `... is not a function` на `require` | неверный путь модуля → [03-migration-guide.md](03-migration-guide.md) |
| `Unknown module` в affinity-check | путь не из списка `affinity:*` |
| `NOT_ALLOWED` | ограничения в настройках Affinity (AI/FS/Network) |
| Пустой вывод | скрипт упал до `console.log` — добавить логи по шагам |
| Изменения не откатываются | команды выполнены вне `CompoundCommandBuilder` |
| Preview «залипает» | забыт `createClearPreviewsCommand` |
| Текст не читается | неверный диапазон `getText` — использовать `storyRange` |

После решения новой проблемы: `affinity_add_sdk_hint` — сохранить подсказку в базу MCP.
После исправления SDK-ошибки: `affinity_report_sdk_issue`.
