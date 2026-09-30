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
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
const compound = CompoundCommandBuilder.create();
compound.addCommand(DocumentCommand.createSetText(sel, ' '));
doc.executeCommand(compound.build());
```

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
