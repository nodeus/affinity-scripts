# Глава 3. Узлы и дерево документа

## 3.1. Что такое узел

Всё на спреде — узлы: фигуры, текстовые фреймы, изображения, группы,
направляющие. У каждого узла есть дети (`node.children`) — получается дерево.
Тип узла проверяется флагами: `node.isTextNode`, а имя для человека —
`node.userDescription` (именно по нему chart-builder ищет группы `line chart`).

## 3.2. Обход дерева

Два способа — рекурсия и явный стек:

```js
"use strict";
// Рекурсия (коротко):
function walk(node, fn) {
  fn(node);
  if (node.children) for (const ch of node.children) walk(ch, fn);
}
for (const child of spread.children) walk(child, (n) => { /* ... */ });

// Явный стек (hanging-chars обходит ВСЕ спреды именно так):
for (const spread of doc.spreads) {
  const stack = [...spread.children];
  while (stack.length) {
    const node = stack.pop();
    if (node.isTextNode) { /* ... */ }
    if (node.children) for (const ch of node.children) stack.push(ch);
  }
}
```

Проверено в Affinity на пустом документе: `Nodes: 0 Texts: 0`, ошибок нет.

## 3.3. Родители и корень

Узел знает родителя (`node.parent`), документ — корневой узел (`doc.rootNode`).
Полный перечень типов узлов и их методов — `sdk/dom-nodes.md`,
контентных (фигуры, текст, картинки) — `sdk/dom-content.md`.

## Упражнения

1. Соберите статистику: сколько узлов каждого типа на спреде
   (различайте хотя бы текстовые: `isTextNode` — и все остальные).
2. Найдите самый глубоко вложенный узел и выведите глубину.
3. Найдите все группы с `userDescription === 'line chart'`.
