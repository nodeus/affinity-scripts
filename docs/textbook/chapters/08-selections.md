# Глава 8. Выделения

## 8.1. Зачем Selection

Команды не принимают «голые» узлы: их заворачивают —
`Selection.create(doc, nodes)` (`sdk/dom-selections.md`, 14 API).
Подвыделения уточняют цель: `TextSelection` (диапазон текста),
кривые (`CurveNodeSubSelection`, `CurveEdgeSubSelection`),
таблицы (`TableSubSelection`), заливки и прозрачности.

## 8.2. Типичные связки

| Задача | Связка |
|--------|--------|
| Заменить символ | `Selection` + `TextSelection` + `createSetText` |
| Удалить узлы | `Selection` + `createDeleteNodesCommand` |
| Переместить в группу | `Selection` + `createMoveNodes` (`NodeMoveType.Inside`) |
| Текущее выделение пользователя | `doc.selection` / `getCurrentSelection` |

Чтение выделения — форма из примера SDK `makeGrid.js`;
удаление — проверено живьём в Affinity (`Deleted, children now: 0`):

```js
const nodes = doc.selection.nodes.toArray();  // форма из makeGrid
console.log('Selected: ' + nodes.length);
// Удалить выделенное одной командой (JSLib-имя! raw: createDeleteNodesCommand):
doc.executeCommand(DocumentCommand.createDeleteSelection(
  Selection.create(doc, nodes), false));
```

## 8.3. Проверка перед действием

`selection.isEmpty()`, `itemCount`, `firstNode` — Bail out, если пользователь
ничего не выделил (chart-builder требует выбранный FrameText-узел
и показывает `Select a text frame`, если его нет).

## Упражнения

1. Выведите число узлов в текущем выделении пользователя.
2. Программно выделите все текстовые узлы спреда.
3. Переместите выделенное в новую группу одним undo-шагом.
