# Classes — все классы-значения (SDK 33000)

> 58 классов (точки, прямоугольники, цвета, параметры фильтров).

## BoundingBox

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/BoundingBox.html)

| Поле | Тип |
|---|---|
| `bounds` | Rectangle |
| `isSet` | Boolean |

## CMYKA8

> Модуль `affinity:colours` · полей: 5 · [SDK](https://sdk.affinity.studio/33000/js/classes/CMYKA8.html)

| Поле | Тип |
|---|---|
| `c` | Number |
| `m` | Number |
| `y` | Number |
| `k` | Number |
| `alpha` | Number |

## CMYKAf

> Модуль `affinity:colours` · полей: 5 · [SDK](https://sdk.affinity.studio/33000/js/classes/CMYKAf.html)

| Поле | Тип |
|---|---|
| `c` | Number |
| `m` | Number |
| `y` | Number |
| `k` | Number |
| `alpha` | Number |

## ColourBalanceValues

> Модуль `affinity:dom` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/ColourBalanceValues.html)

| Поле | Тип |
|---|---|
| `cyanRed (Number) â [-1.0, 1.0]` |  |
| `magentaGreen (Number) â [-1.0, 1.0]` |  |
| `yellowBlue (Number) â [-1.0, 1.0]` |  |

## ColourStop

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/ColourStop.html)

| Поле | Тип |
|---|---|
| `colour` | ColourHandle |
| `position (Number) â [0.0, 1.0]` |  |
| `midpoint (Number) â [0.0, 1.0]` |  |
| `smoothness (Number) â [0.0, 1.0]` |  |

## CubicBezier

> Модуль `affinity:geometry` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/CubicBezier.html)

| Поле | Тип |
|---|---|
| `start` | Point |
| `c1` | Point |
| `c2` | Point |
| `end` | Point |

## CubicBezierPair

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/CubicBezierPair.html)

| Поле | Тип |
|---|---|
| `left` | CubicBezier |
| `right` | CubicBezier |

## CurveCornerData

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/CurveCornerData.html)

| Поле | Тип |
|---|---|
| `type` | CurveCornerType |
| `radius` | Number |

## CurveEdgeSubSelectionItem

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/CurveEdgeSubSelectionItem.html)

| Поле | Тип |
|---|---|
| `curveID` | Number |
| `edgeID` | Number |

## CurveNode

> Модуль `affinity:geometry` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/CurveNode.html)

| Поле | Тип |
|---|---|
| `position` | Point |
| `type` | CurveNodeType |
| `style` | CurveNodeStyle |

## CurveNodeSubSelectionItem

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/CurveNodeSubSelectionItem.html)

| Поле | Тип |
|---|---|
| `curveID` | Number |
| `nodeID` | Number |

## CurvePair

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/CurvePair.html)

| Поле | Тип |
|---|---|
| `curveA` | CurveHandle |
| `curveB` | CurveHandle |

## DiffusionCurveParametric

> Модуль `affinity:fills` · полей: 6 · [SDK](https://sdk.affinity.studio/33000/js/classes/DiffusionCurveParametric.html)

| Поле | Тип |
|---|---|
| `centre` | Point |
| `radiusX` | Number |
| `radiusY` | Number |
| `rotation` | Number |
| `angle0` | Number |
| `angle1` | Number |

## DocumentLoadResult

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/DocumentLoadResult.html)

| Поле | Тип |
|---|---|
| `document` | DocumentHandle |
| `description` | String |

## EllipticalDepthOfFieldParameters

> Модуль `affinity:dom` · полей: 5 · [SDK](https://sdk.affinity.studio/33000/js/classes/EllipticalDepthOfFieldParameters.html)

| Поле | Тип |
|---|---|
| `position (Point) â [-1000000.0, 1000000.0]` |  |
| `radiusX` | Number |
| `radiusY` | Number |
| `inFocus (Number) â [0.0, 1.0]` |  |
| `rotation` | Number |

## Endpoints

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/Endpoints.html)

| Поле | Тип |
|---|---|
| `start` | Point |
| `end` | Point |

## FieldBlurItemParameters

> Модуль `affinity:dom` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/FieldBlurItemParameters.html)

| Поле | Тип |
|---|---|
| `position (Point) â [-1000000.0, 1000000.0]` |  |
| `level (Number) â [0.0, 1.0]` |  |
| `power (Number) â [0.5, 5.0]` |  |

## FileSystemSpace

> Модуль `affinity:fs` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/FileSystemSpace.html)

| Поле | Тип |
|---|---|
| `available` | Number |
| `free` | Number |
| `capacity` | Number |

## FocalPoint

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/FocalPoint.html)

| Поле | Тип |
|---|---|
| `point` | Point |
| `isValid` | Boolean |

## GroupTransformData

> Модуль `affinity:commands` · полей: 6 · [SDK](https://sdk.affinity.studio/33000/js/classes/GroupTransformData.html)

| Поле | Тип |
|---|---|
| `type` | GroupTransformType |
| `anchor` | GroupTransformAnchor |
| `order` | GroupTransformOrder |
| `spacing` | Number |
| `isAutoSpacing` | Boolean |
| `reorderSpaces` | Boolean |

## HSLAf

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/HSLAf.html)

| Поле | Тип |
|---|---|
| `h` | Number |
| `s` | Number |
| `l` | Number |
| `alpha` | Number |

## HSLShiftAdjustmentChannelParameters

> Модуль `affinity:dom` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/HSLShiftAdjustmentChannelParameters.html)

| Поле | Тип |
|---|---|
| `hueShift (Number) â [-Math.PI, Math.PI]` |  |
| `saturationShift (Number) â [-1.0, 1.0]` |  |
| `luminosityShift (Number) â [-1.0, 1.0]` |  |

## HSLShiftAdjustmentColourRange

> Модуль `affinity:dom` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/HSLShiftAdjustmentColourRange.html)

| Поле | Тип |
|---|---|
| `rampUpBegin` | Number |
| `rampUpEnd` | Number |
| `rampDownBegin` | Number |
| `rampDownEnd` | Number |

## HeapStatistics

> Модуль `affinity:application` · полей: 14 · [SDK](https://sdk.affinity.studio/33000/js/classes/HeapStatistics.html)

| Поле | Тип |
|---|---|
| `totalHeapSize` | Number |
| `totalHeapSizeExecutable` | Number |
| `totalPhysicalSize` | Number |
| `totalAvailableSize` | Number |
| `totalGlobalHandlesSize` | Number |
| `usedGlobalHandlesSize` | Number |
| `usedHeapSize` | Number |
| `heapSizeLimit` | Number |
| `mallocedMemory` | Number |
| `externalMemory` | Number |
| `peakMallocedMemory` | Number |
| `numberOfNativeContexts` | Number |
| `numberOfDetachedContexts` | Number |
| `doesZapGarbage` | Boolean |

## HttpRequestResult

> Модуль `affinity:network` · полей: 3 · [SDK](https://sdk.affinity.studio/33000/js/classes/HttpRequestResult.html)

| Поле | Тип |
|---|---|
| `state` | ErrorCode |
| `response` | HttpResponseHandle |
| `reason` | String |

## IA16

> Модуль `affinity:colours` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/IA16.html)

| Поле | Тип |
|---|---|
| `i` | Number |
| `alpha` | Number |

## IA8

> Модуль `affinity:colours` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/IA8.html)

| Поле | Тип |
|---|---|
| `i` | Number |
| `alpha` | Number |

## LABA16

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/LABA16.html)

| Поле | Тип |
|---|---|
| `l` | Number |
| `a` | Number |
| `b` | Number |
| `alpha` | Number |

## LTRB

> Модуль `affinity:dom` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/LTRB.html)

| Поле | Тип |
|---|---|
| `left` | Number |
| `top` | Number |
| `right` | Number |
| `bottom` | Number |

## LevelsAdjustmentChannelParameters

> Модуль `affinity:dom` · полей: 5 · [SDK](https://sdk.affinity.studio/33000/js/classes/LevelsAdjustmentChannelParameters.html)

| Поле | Тип |
|---|---|
| `blackLevel (Number) â [0.0, 1.0]` |  |
| `whiteLevel (Number) â [0.0, 1.0]` |  |
| `gamma (Number) â [0.0, 2.0]` |  |
| `outputBlackLevel (Number) â [0.0, 1.0]` |  |
| `outputWhiteLevel (Number) â [0.0, 1.0]` |  |

## LineDescriptors

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/LineDescriptors.html)

| Поле | Тип |
|---|---|
| `fill` | FillDescriptorHandle |
| `lineStyle` | LineStyleDescriptorHandle |

## M16

> Модуль `affinity:colours` · полей: 1 · [SDK](https://sdk.affinity.studio/33000/js/classes/M16.html)

| Поле | Тип |
|---|---|
| `alpha` | Number |

## M8

> Модуль `affinity:colours` · полей: 1 · [SDK](https://sdk.affinity.studio/33000/js/classes/M8.html)

| Поле | Тип |
|---|---|
| `alpha` | Number |

## MeshSize

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/MeshSize.html)

| Поле | Тип |
|---|---|
| `xSize` | Number |
| `ySize` | Number |

## MeshSubSelectionItem

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/MeshSubSelectionItem.html)

| Поле | Тип |
|---|---|
| `x` | Number |
| `y` | Number |

## Mf

> Модуль `affinity:colours` · полей: 1 · [SDK](https://sdk.affinity.studio/33000/js/classes/Mf.html)

| Поле | Тип |
|---|---|
| `alpha` | Number |

## PageOriginDelta

> Модуль `affinity:dom` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/PageOriginDelta.html)

| Поле | Тип |
|---|---|
| `x` | Number |
| `y` | Number |

## Point

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/Point.html)

| Поле | Тип |
|---|---|
| `x` | Number |
| `y` | Number |

## PointIntMinMax

> Модуль `affinity:?` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/PointIntMinMax.html)

| Поле | Тип |
|---|---|
| `minPoint` | Point |
| `maxPoint` | Point |

## PointMinMax

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/PointMinMax.html)

| Поле | Тип |
|---|---|
| `minPoint` | Point |
| `maxPoint` | Point |

## RGBA16

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/RGBA16.html)

| Поле | Тип |
|---|---|
| `r` | Number |
| `g` | Number |
| `b` | Number |
| `alpha` | Number |

## RGBA8

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/RGBA8.html)

| Поле | Тип |
|---|---|
| `r` | Number |
| `g` | Number |
| `b` | Number |
| `alpha` | Number |

## RGBAuf

> Модуль `affinity:colours` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/RGBAuf.html)

| Поле | Тип |
|---|---|
| `r` | Number |
| `g` | Number |
| `b` | Number |
| `alpha` | Number |

## Rectangle

> Модуль `affinity:geometry` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/Rectangle.html)

| Поле | Тип |
|---|---|
| `x` | Number |
| `y` | Number |
| `width` | Number |
| `height` | Number |

## SelectiveColourWeights

> Модуль `affinity:dom` · полей: 4 · [SDK](https://sdk.affinity.studio/33000/js/classes/SelectiveColourWeights.html)

| Поле | Тип |
|---|---|
| `cyanWeight (Number) â [-1.0, 1.0]` |  |
| `magentaWeight (Number) â [-1.0, 1.0]` |  |
| `yellowWeight (Number) â [-1.0, 1.0]` |  |
| `blackWeight (Number) â [-1.0, 1.0]` |  |

## ShapeTrapezoidPositions

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/ShapeTrapezoidPositions.html)

| Поле | Тип |
|---|---|
| `left` | Number |
| `right` | Number |

## Size

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/Size.html)

| Поле | Тип |
|---|---|
| `width` | Number |
| `height` | Number |

## SplineFindPointResult

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/SplineFindPointResult.html)

| Поле | Тип |
|---|---|
| `index` | Number |
| `isValid` | Boolean |

## StoryRange

> Модуль `affinity:story` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/StoryRange.html)

| Поле | Тип |
|---|---|
| `begin` | Number |
| `end` | Number |

## TiltShiftDepthOfFieldParameters

> Модуль `affinity:dom` · полей: 6 · [SDK](https://sdk.affinity.studio/33000/js/classes/TiltShiftDepthOfFieldParameters.html)

| Поле | Тип |
|---|---|
| `position (Point) â [-1000000.0, 1000000.0]` |  |
| `top (Number) â [-1000000.0, -0.002]` |  |
| `bottom (Number) â [0.002, 1000000.0]` |  |
| `inFocusTop (Number) â [-1000000.0, -0.001]` |  |
| `inFocusBottom (Number) â [0.001, 1000000.0]` |  |
| `rotation` | Number |

## Transform

> Модуль `affinity:geometry` · полей: 1 · [SDK](https://sdk.affinity.studio/33000/js/classes/Transform.html)

| Поле | Тип |
|---|---|
| `data` | Number[6] |

## TransformData

> Модуль `affinity:geometry` · полей: 6 · [SDK](https://sdk.affinity.studio/33000/js/classes/TransformData.html)

| Поле | Тип |
|---|---|
| `scaleX` | Number |
| `scaleY` | Number |
| `shear` | Number |
| `rotation` | Number |
| `translateX` | Number |
| `translateY` | Number |

## TransformInfo

> Модуль `affinity:fills` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/TransformInfo.html)

| Поле | Тип |
|---|---|
| `transform` | Transform |
| `isAnchoredToSpread` | Boolean |

## UnitTypePower

> Модуль `affinity:?` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/UnitTypePower.html)

| Поле | Тип |
|---|---|
| `type` | UnitType |
| `power` | Number |

## UnitValue

> Модуль `affinity:common` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/UnitValue.html)

| Поле | Тип |
|---|---|
| `value` | Number |
| `units` | UnitTypePower |

## VariableFontBold

> Модуль `affinity:fonts` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/VariableFontBold.html)

| Поле | Тип |
|---|---|
| `regular` | Number |
| `bold` | Number |

## VariableFontItalic

> Модуль `affinity:fonts` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/VariableFontItalic.html)

| Поле | Тип |
|---|---|
| `regular` | Number |
| `italic` | Number |

## Vector

> Модуль `affinity:geometry` · полей: 2 · [SDK](https://sdk.affinity.studio/33000/js/classes/Vector.html)

| Поле | Тип |
|---|---|
| `x` | Number |
| `y` | Number |
