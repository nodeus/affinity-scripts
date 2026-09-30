# Глава 7. Текст: Story, глифы, абзацы

## 7.1. Анатомия текста

Текстовый узел (`isTextNode`) — это рамка. Внутри: `storyInterface.story` —
`Story`, у неё `getText(begin, length)` для чтения. Форматирование бывает
двух уровней: `GlyphAtts` (символ: шрифт, размер, цвет) и `ParagraphAtts`
(абзац: выравнивание, интервалы). Полный референс: `sdk/story-text.md`
(34 API, 332 метода).

## 7.2. Чтение

```js
const originalText = story.getText(range.begin, range.end - range.begin);
```

Так hanging-chars читает каждое текстовое поле на каждом спреде.

## 7.3. Точечная запись

Запись — только командой `createSetText` через `TextSelection`
(точная форма — из протестированного `hanging-chars`):

```js
"use strict";
const { Selection, TextSelection } = require('/selections.js');
const storyPos = range.begin + pos;   // pos — позиция пробела в тексте поля
const textSel = TextSelection.create([{ begin: storyPos, end: storyPos + 1 }]);
const sel = Selection.create(doc, node);
sel.addSubSelectionForNode(node, textSel);
compound.addCommand(DocumentCommand.createSetText(sel, ' '));
```

Так ставятся NBSP (`U+00A0`) после одиночных букв и предлогов;
разбор трёх паттернов позиций (`findOrphanSpacePositions`) см. в hanging-chars.

## 7.4. Построение текста с нуля

`StoryBuilder.addText(utf8Text)` (сигнатура сверена с онлайн-SDK).
Проверенный пример целиком — создание фрейма, чтение обратно,
жирное начертание:

```js
"use strict";
const { FrameTextNodeDefinition } = require('/nodes.js');
const { Rectangle } = require('/geometry.js');
const { StoryBuilder } = require('/storybuilder.js');  // НЕ '/story.js'!
const { StoryDelta } = require('/storydelta.js');
const { FontWeight } = require('/fonts.js');
const { Selection, TextSelection } = require('/selections.js');

// Создать фрейм с текстом:
const sb = StoryBuilder.create();
sb.setToFrameTextDefaultStyle(doc.dpi, doc.rasterFormat);
sb.addText('Hello textbook');
const def = FrameTextNodeDefinition.createFromStoryBuilder(
  new Rectangle(50, 50, 300, 100), sb);
const builder = AddChildNodesCommandBuilder.create();
builder.addNode(def);
const cmd = builder.createCommand(false);
doc.executeCommand(cmd);
const node = [...cmd.newNodes][0];

// Прочитать обратно:
const si = node.storyInterface;
const back = si.story.getText(si.storyRange.begin, si.storyRange.end - si.storyRange.begin);
console.log(back);   // Hello textbook

// Сделать весь текст жирным:
const sel = Selection.create(doc, node);
sel.addSubSelectionForNode(node,
  TextSelection.create([{ begin: si.storyRange.begin, end: si.storyRange.end }]));
doc.formatText(StoryDelta.createWeight(FontWeight.Bold), sel);
```
Проверено в Affinity: `Text node: true`, `Roundtrip: Hello textbook`,
форматирование применено без ошибок.

Жирность — это `StoryDelta.createWeight(FontWeight.Bold)` + `doc.formatText`
(образец — `docs/JSLib/examples/boldItalics.js`). `GlyphAtts.DoubleType.Bold`
не существует. Так color-palette-gen печатает подписи свотчей,
а chart-builder — подписи осей и легенды.

## Упражнения

1. Выведите первые 200 символов каждого текстового поля документа.
2. Найдите все позиции `…на …` и замените пробел на NBSP одним compound.
3. Создайте текстовый фрейм через `FrameTextNodeDefinition` + `StoryBuilder`.
