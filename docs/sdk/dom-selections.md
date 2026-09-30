# Выделения и подвыделения (SDK 33000)

> API-референс `affinity:dom` · Модуль `affinity:dom`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (14), методов: 90.

## CurveEdgeSubSelectionApi

> Модуль `affinity:dom` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurveEdgeSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CurveEdgeSubSelectionHandle |
| `cloneAndAddItems(items)` | items: CurveEdgeSubSelectionItem[] | CurveEdgeSubSelectionHandle |
| `cloneAndRemoveCurves(curveIDs)` | curveIDs: Number[] | CurveEdgeSubSelectionHandle |
| `cloneAndRemoveItems(items)` | items: CurveEdgeSubSelectionItem[] | CurveEdgeSubSelectionHandle |
| `cloneAsCurveEdgeSubSelection()` | — | CurveEdgeSubSelectionHandle |
| `create(itemsOrNull)` | itemsOrNull: CurveEdgeSubSelectionItem[] | CurveEdgeSubSelectionHandle |
| `enumerateItems(callback)` | callback: Function | — |
| `enumerateItemsWithCurveID(curveID, callback)` | curveID: Number, callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | CurveEdgeSubSelectionHandle |
| `getItem(index)` | index: Number | CurveEdgeSubSelectionItem |
| `getItemCount()` | — | Number |
| `isEmpty()` | — | Boolean |

## CurveNodeSubSelectionApi

> Модуль `affinity:dom` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurveNodeSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CurveNodeSubSelectionHandle |
| `cloneAndAddItems(items)` | items: CurveNodeSubSelectionItem[] | CurveNodeSubSelectionHandle |
| `cloneAndRemoveCurves(curveIDs)` | curveIDs: Number[] | CurveNodeSubSelectionHandle |
| `cloneAndRemoveItems(items)` | items: CurveNodeSubSelectionItem[] | CurveNodeSubSelectionHandle |
| `cloneAsCurveNodeSubSelection()` | — | CurveNodeSubSelectionHandle |
| `create(itemsOrNull)` | itemsOrNull: CurveNodeSubSelectionItem[] | CurveNodeSubSelectionHandle |
| `enumerateItems(callback)` | callback: Function | — |
| `enumerateItemsWithCurveID(curveID, callback)` | curveID: Number, callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | CurveNodeSubSelectionHandle |
| `getItem(index)` | index: Number | CurveNodeSubSelectionItem |
| `getItemCount()` | — | Number |
| `isEmpty()` | — | Boolean |

## FillMeshSubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/FillMeshSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateItems(callback)` | callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | FillMeshSubSelectionHandle |
| `getItemCount()` | — | Number |
| `isEmpty()` | — | Boolean |

## FillSubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/FillSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FillSubSelectionHandle |
| `cloneAsFillSubSelection()` | — | FillSubSelectionHandle |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | FillSubSelectionHandle |
| `getIndex()` | — | Number |

## LineFillMeshSubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/LineFillMeshSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateItems(callback)` | callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | LineFillMeshSubSelectionHandle |
| `getItemCount()` | — | Number |
| `isEmpty()` | — | Boolean |

## LineFillSubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/LineFillSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | LineFillSubSelectionHandle |
| `cloneAsLineFillSubSelection()` | — | LineFillSubSelectionHandle |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | LineFillSubSelectionHandle |
| `getIndex()` | — | Number |

## RasterSelectionApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `isCurrentPixelSelection()` | — | Boolean |
| `isSelectAllOrNone()` | — | Boolean |
| `isSelectNone()` | — | Boolean |

## SelectionApi

> Модуль `affinity:dom` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/SelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addItem(selectionItem)` | selectionItem: SelectionItemHandle | — |
| `addNode(node)` | node: NodeHandle | Boolean |
| `addSelectable(selectable)` | selectable: SelectableHandle | Boolean |
| `addSubSelectionForNode(node, subSelection)` | node: NodeHandle, subSelection: SubSelectionHandle | Boolean |
| `clear()` | — | — |
| `containsItem(iItem)` | iItem: SelectionItemHandle | Boolean |
| `containsNode(node)` | node: NodeHandle | Boolean |
| `createEmpty(document)` | document: DocumentHandle | SelectionHandle |
| `getCount()` | — | Number |
| `getFirstSubSelectionOfType(type)` | type: SubSelectionType | SubSelectionHandle |
| `getHasKeyObject()` | — | Boolean |
| `getItem(index)` | index: Number | SelectionItemHandle |
| `removeNested()` | — | — |
| `setHasKeyObject(hasKeyObject)` | hasKeyObject: Boolean | — |

## SelectionItemApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/SelectionItemApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateSubSelections(callback)` | callback: Function | — |
| `getNode()` | — | NodeHandle |
| `getSubSelection(index)` | index: Number | SubSelectionHandle |
| `getSubSelectionCount()` | — | Number |
| `getSubSelectionOfType(type)` | type: SubSelectionType | SubSelectionHandle |

## SubSelectionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/SubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getSubSelectionType()` | — | SubSelectionType |

## TableSubSelectionApi

> Модуль `affinity:dom` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/TableSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateCells(callback)` | callback: Function | — |
| `enumerateEdges(tableAxis, tableEdgeSelector, callback)` | tableAxis: TableAxis, tableEdgeSelector: TableEdgeSelector, callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | TableSubSelectionHandle |
| `getAnchor()` | — | Point |
| `getBoundingBox()` | — | Rectangle |
| `getCaret()` | — | Point |
| `isEmpty()` | — | Boolean |
| `isRectangle()` | — | Boolean |

## TextSelectionApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/TextSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(storyRangesOrNull)` | storyRangesOrNull: StoryRange[] | TextSelectionHandle |
| `enumerateRanges(callback)` | callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | TextSelectionHandle |
| `getAnchor()` | — | Number |
| `getCaret()` | — | Number |
| `getMarkedTextBegin()` | — | Number |
| `getMarkedTextEnd()` | — | Number |
| `getRange(index)` | index: Number | StoryRange |
| `getRangeCount()` | — | Number |
| `hasMarkedText()` | — | Boolean |
| `isEmpty()` | — | Boolean |

## TransparencyMeshSubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/TransparencyMeshSubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateItems(callback)` | callback: Function | — |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | TransparencyMeshSubSelectionHandle |
| `getItemCount()` | — | Number |
| `isEmpty()` | — | Boolean |

## TransparencySubSelectionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/TransparencySubSelectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | TransparencySubSelectionHandle |
| `cloneAsTransparencySubSelection()` | — | TransparencySubSelectionHandle |
| `fromSubSelection(subSelection)` | subSelection: SubSelectionHandle | TransparencySubSelectionHandle |
| `getIndex()` | — | Number |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `adjustPageItems.js`
- `arrowheads.js`
- `breakFrame.js`
- `makeGrid.js`
- `makeNumbersSequence.js`
- `randomise.js`
- `selectObjects.js`
- `splitStory.js`
- `strokesWeightDown.js`
- `strokesWeightUp.js`
- `swapObjects.js`
- `tableFromJson.js`
