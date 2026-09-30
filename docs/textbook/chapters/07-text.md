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

Запись — только командой `createSetText` через `TextSelection`:

```js
"use strict";
const { Selection, TextSelection } = require('/selections.js');
const sel = Selection.create(doc, node);
sel.addSubSelectionForNode(/* TextSelection: начало range.begin + pos, длина 1 */);
compound.addCommand(DocumentCommand.createSetText(sel, ' '));
```

NBSP (`U+00A0`) вместо обычного пробела после одиночных букв и предлогов —
разбор трёх паттернов (`findOrphanSpacePositions`) см. в hanging-chars.

## 7.4. Построение текста с нуля

`StoryBuilder.addText(utf8Text)` (сигнатура сверена с онлайн-SDK),
разметка — `GlyphAtts`. Так color-palette-gen печатает подписи свотчей,
а chart-builder — подписи осей и легенды.

## Упражнения

1. Выведите первые 200 символов каждого текстового поля документа.
2. Найдите все позиции `…на …` и замените пробел на NBSP одним compound.
3. Создайте текстовый фрейм через `FrameTextNodeDefinition` + `StoryBuilder`.
