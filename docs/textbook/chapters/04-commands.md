# Глава 4. Команды, undo и preview

## 4.1. Золотое правило: мутации только командами

Узлы **нельзя** менять напрямую присваиванием. Любое изменение —
это команда, выполненная через документ:

```js
doc.executeCommand(какаяТоКоманда);
```

Команды создаются фабриками `DocumentCommand.create*` — их 363 штуки,
полный каталог: `sdk/commands-catalog.md`. Узлы для команды заворачиваются
в выделение: `Selection.create(doc, nodes)` (`sdk/dom-selections.md`).

## 4.2. Один undo-шаг на батч

Создание нескольких узлов упаковывается в `AddChildNodesCommandBuilder`
(`sdk/commands.md`): один `executeCommand` — один шаг Ctrl+Z.
Разнородные изменения — в `CompoundCommandBuilder` (пример: hanging-chars
кладёт десятки `createSetText` в один undo-шаг на текстовое поле).

```js
"use strict";
const { DocumentCommand, AddChildNodesCommandBuilder, CompoundCommandBuilder } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { ShapeRectangle, ShapeEllipse } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');

function addCmd(x, y, w, h, shapeObj) {
  const def = ShapeNodeDefinition.createDefault();
  def.shape = shapeObj;
  def.setBoundingRectangle(new Rectangle(x, y, w, h));
  const b = AddChildNodesCommandBuilder.create();
  b.addNode(def);
  return b.createCommand(false);   // команда, но БЕЗ выполнения
}
const compound = CompoundCommandBuilder.create();
compound.addCommand(addCmd(10, 10, 80, 60, ShapeRectangle.create()));
compound.addCommand(addCmd(120, 10, 80, 60, ShapeEllipse.create()));
doc.executeCommand(compound.createCommand());  // один вызов — один undo-шаг
```
Проверено в Affinity: создано 2 узла, история выросла на **1** шаг
(`children: 2 history + 1`), откат удалил оба.

Важно: имена методов JSLib и raw-SDK различаются! Сырой
`DocumentCommandApi.createDeleteNodesCommand` в JSLib называется
`DocumentCommand.createDeleteSelection(selection, ignoreRasterSelection)`.
Точные имена всегда сверяйте с `docs/JSLib/commands.js`, а не только
с онлайн-справочником (`sdk/commands-catalog.md` даёт raw-имена).

## 4.3. Preview без порчи документа

Интерактивные скрипты показывают результат до нажатия OK:

```js
const historyStart = doc.history.position;
doc.executeCommand(cmd, true);   // true = предпросмотр
// OK:     createClearPreviews() + финальное применение
// Cancel: createClearPreviews() + doc.history.position = historyStart
```

## 4.4. Чтение результата команды

После `builder.createCommand(...)` созданные узлы доступны как
`[...cmd.newNodes][0]` — так chart-builder и color-palette-gen забирают
группу, чтобы потом сложить в неё содержимое вторым батчем.

## Упражнения

1. Объясните, почему прямой `node.userDescription = 'x'` не сработает.
2. Соберите compound из двух команд и убедитесь, что Ctrl+Z откатывает обе сразу.
3. Реализуйте preview: примените команду с `true`, затем откатите через history.
