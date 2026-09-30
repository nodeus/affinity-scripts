# Глава 2. Документ и спреды

## 2.1. Текущий документ

```js
"use strict";
const { Document } = require('/document.js');
const doc = Document.current;          // активный документ (DocumentApi.getCurrent)
if (!doc) { console.log('No document open'); return; }
console.log('Title: ' + doc.title);    // свойство JSLib над getTitle()
console.log('Spreads: ' + doc.spreads.length);
console.log('Units: ' + doc.units + ' DPI: ' + doc.dpi);
```

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

Вызов `createSetCurrentSpread` **обязателен перед любыми правками**:
без него цель вставки игнорируется и новые узлы ложатся плоско на документ
(реальный баг chart-builder 1.5.0, исправлен в 1.5.1).

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
3. Откройте второй документ и перечислите оба через `enumerateOpen()`.
