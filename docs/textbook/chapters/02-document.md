# Глава 2. Документ и спреды

## 2.1. Текущий документ

```js
"use strict";
const { Document } = require('/document.js');
const { UnitType } = require('affinity:common');
const doc = Document.current;          // активный документ (DocumentApi.getCurrent)
if (!doc) { console.log('No document open'); return; }
console.log('Title: ' + doc.title);    // свойство JSLib над getTitle()
console.log('Spreads: ' + doc.spreads.length);
console.log('DPI: ' + doc.dpi + ' Path: ' + doc.path + ' Dirty: ' + doc.isDirty);
// Внимание: свойства-енаумы возвращают ОБЪЕКТЫ, а не числа:
console.log('typeof units: ' + typeof doc.units);  // 'object' (UnitType)
let uname = '?';
for (const [k, v] of UnitType.entries) { if (v == doc.units) uname = k; }
console.log('Units: ' + uname);        // Millimetre
```
Проверено в Affinity: `Title: <Untitled>, Spreads: 1, DPI: 300`.

`Document.current` нет — скрипт вежливо завершается через `console.log`,
а не падает с исключением. Так начинается **каждый** скрипт.

Другие способы получить документ: `Document.enumerateOpen()` (все открытые),
`Document.load(path)` (открыть с Desktop). Создание: `createFromOptions`,
`createFromPreset` (`affinity:dom`, см. `sdk/dom-document.md`).

## 2.2. Текущий спред

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.currentSpread;      // свойство над getCurrentSpread()
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
```

Вызов `createSetCurrentSpread` нужен один раз в начале, перед правками:
без него цель вставки игнорируется и новые узлы ложатся плоско на документ
(реальный баг chart-builder 1.5.0, исправлен в 1.5.1).
Нюанс из преамбулы SDK: повторная установка спреда **сбрасывает выделение** —
не вызывайте её, если спред уже текущий и вам нужно выделение пользователя.

## 2.3. Все спреды документа

```js
for (const spread of doc.spreads) {
  console.log('Children: ' + spread.children.length);
}
```

Пакетные скрипты (типа hanging-chars) обходят **все** спреды, а не только текущий.

## Упражнения

1. Выведите название, путь (`doc.path`) и флаг изменений (`doc.isDirty`) открытого документа.
2. Посчитайте суммарное число дочерних узлов по всем спредам.
3. Перечислите все открытые документы через `Document.all`.
