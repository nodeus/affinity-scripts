# Контент-узлы: фигуры, текст, изображения (SDK 33000)

> API-референс `affinity:dom` · Модуль `affinity:dom`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (30), методов: 177.

## ArtTextNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArtTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ArtTextNodeHandle |

## ArtTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArtTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(position, storyBuilder)` | position: Point, storyBuilder: StoryBuilderHandle | ArtTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ArtTextNodeDefinitionHandle |

## ContainerNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/ContainerNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ContainerNodeHandle |

## ContainerNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ContainerNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createDefault()` | — | ContainerNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ContainerNodeDefinitionHandle |

## CurvePathTextNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvePathTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | CurvePathTextNodeHandle |

## CurvePathTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvePathTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(polyCurve, storyBuilder)` | polyCurve: PolyCurveHandle, storyBuilder: StoryBuilderHandle | CurvePathTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | CurvePathTextNodeDefinitionHandle |

## EmbeddedDocumentNodeApi

> Модуль `affinity:dom` · методов: 27 · [SDK](https://sdk.affinity.studio/33000/js/apis/EmbeddedDocumentNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canEditEmbeddedImage()` | — | Boolean |
| `canMakeLinked()` | — | Boolean |
| `canSetPDFPassthrough()` | — | Boolean |
| `embeddedDocumentHasArtboards()` | — | Boolean |
| `embeddedDocumentHasLayers()` | — | Boolean |
| `embeddedDocumentHasPageBoundingBoxes()` | — | Boolean |
| `embeddedDocumentHasSpreads()` | — | Boolean |
| `enumerateArtboards(callback)` | callback: Function | — |
| `enumerateLayerVisibilities(callback)` | callback: Function | — |
| `enumeratePageBoundingBoxes(callback)` | callback: Function | — |
| `enumerateSpreads(includeMasters, callback)` | includeMasters: Boolean, callback: Function | — |
| `fromNode(node)` | node: NodeHandle | EmbeddedDocumentNodeHandle |
| `getImageResourceInterface()` | — | ImageResourceInterfaceHandle |
| `getLoadDocumentOptions()` | — | LoadDocumentOptionsHandle |
| `getOriginalHostDPI()` | — | Number |
| `getPDFPassthrough()` | — | Boolean |
| `getPageBoundingBoxType()` | — | PageBoundingBoxType |
| `getRasterDPI()` | — | Number |
| `getSelectedArtboardId()` | — | String |
| `getSelectedArtboardOffset()` | — | Point |
| `getSelectedSpreadId()` | — | String |
| `getTransparencyInterface()` | — | TransparencyInterfaceHandle |
| `isAffinityFile()` | — | Boolean |
| `isArtboardDoc()` | — | Boolean |
| `isArtboardSelected()` | — | Boolean |
| `needsPassword()` | — | Boolean |
| `shouldAllowSelectDocument()` | — | Boolean |

## FrameTextNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/FrameTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | FrameTextNodeHandle |

## FrameTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/FrameTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(frameBox, storyBuilder)` | frameBox: Rectangle, storyBuilder: StoryBuilderHandle | FrameTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | FrameTextNodeDefinitionHandle |

## GroupNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/GroupNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | GroupNodeHandle |

## ImageNodeApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/ImageNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ImageNodeHandle |
| `getBitmapBrushFillDescriptor()` | — | FillDescriptorHandle |
| `getExtendType()` | — | RasterExtendType |
| `getImageResourceInterface()` | — | ImageResourceInterfaceHandle |
| `getLastRendered()` | — | Number |
| `getRasterInterface()` | — | RasterInterfaceHandle |
| `getStockAuthor()` | — | String |
| `getStockURL()` | — | String |
| `getStockUserProfileURL()` | — | String |
| `getUpsamplerType()` | — | RasterResamplerType |
| `isKOnly()` | — | Boolean |

## ImageNodeDefinitionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ImageNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(format)` | format: RasterFormat | ImageNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ImageNodeDefinitionHandle |
| `getBitmap()` | — | RasterObjectHandle |
| `setBitmap(bitmap)` | bitmap: RasterObjectHandle | — |

## ImageResourceInterfaceApi

> Модуль `affinity:dom` · методов: 23 · [SDK](https://sdk.affinity.studio/33000/js/apis/ImageResourceInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canEditOriginalImage()` | — | Boolean |
| `createFileTypeName()` | — | String |
| `fromNode(nodeHandle)` | nodeHandle: NodeHandle | ImageResourceInterfaceHandle |
| `getArtboard()` | — | String |
| `getColourFormat(allowRemote)` | allowRemote: Boolean | RasterFormat |
| `getFileType()` | — | FileType |
| `getFileTypeName()` | — | String |
| `getICCProfile()` | — | String |
| `getImageFilePath()` | — | String |
| `getImageFileSize(asBigInt)` | asBigInt: Boolean | Number |
| `getImagePlacement()` | — | ImagePlacement |
| `getLargeThumbnail(format, colourProfileSet)` | format: RasterFormat, colourProfileSet: ColourProfileSetHandle | RasterObjectHandle |
| `getMasterPage()` | — | String |
| `getModifiedTime(asBigInt)` | asBigInt: Boolean | Number |
| `getNode()` | — | NodeHandle |
| `getOriginalDPI()` | — | Number |
| `getOriginalSize()` | — | Size |
| `getPage()` | — | Number |
| `getPlacedSize()` | — | Size |
| `getResourceNode()` | — | NodeHandle |
| `getSmallThumbnail(format, colourProfileSet)` | format: RasterFormat, colourProfileSet: ColourProfileSetHandle | RasterObjectHandle |
| `isOnArtboard()` | — | Boolean |
| `saveOriginalFile(path)` | path: String | String |

## MeasurementNodeApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/MeasurementNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | MeasurementNodeHandle |
| `getAnnotationOffset()` | — | Number |
| `getDecimalPlaces()` | — | Number |
| `getDisplayUnitType()` | — | UnitType |
| `getFactor()` | — | Number |
| `getScaledUnitType()` | — | UnitType |
| `getShowEndpointMarkers()` | — | Boolean |
| `getSpreadDistance()` | — | Number |
| `getSpreadEndpoints()` | — | Endpoints |
| `getUseDocumentPrecision()` | — | Boolean |

## MeasurementNodeDefinitionApi

> Модуль `affinity:dom` · методов: 17 · [SDK](https://sdk.affinity.studio/33000/js/apis/MeasurementNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(start, end, factor, unitType)` | start: Point, end: Point, factor: Number, unitType: UnitType | MeasurementNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | MeasurementNodeDefinitionHandle |
| `getAnnotationOffset()` | — | Number |
| `getDecimalPlaces()` | — | Number |
| `getEndpoints()` | — | Endpoints |
| `getFactor()` | — | Number |
| `getLabelGlyphAtts()` | — | GlyphAttsHandle |
| `getScaledUnitType()` | — | UnitType |
| `getShowEndpointMarkers()` | — | Boolean |
| `getUseDocumentPrecision()` | — | Boolean |
| `setAnnotationOffset(offset)` | offset: Number | — |
| `setDisplayPrecision(useDocumentPrecision, decimalPlaces)` | useDocumentPrecision: Boolean, decimalPlaces: Number | — |
| `setEndpoints(start, end)` | start: Point, end: Point | — |
| `setFactor(factor)` | factor: Number | — |
| `setLabelGlyphAtts(glyphAttsOrNull)` | glyphAttsOrNull: GlyphAttsHandle | — |
| `setScaledUnitType(unitType)` | unitType: UnitType | — |
| `setShowEndpointMarkers(show)` | show: Boolean | — |

## PictureFrameInterfaceApi

> Модуль `affinity:dom` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/PictureFrameInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `calculateAnchor(childNode, hintAnchor)` | childNode: NodeHandle, hintAnchor: SpatialAnchor | SpatialAnchor |
| `calculateConstraints(childNode, hintConstraintType)` | childNode: NodeHandle, hintConstraintType: ConstraintType | ConstraintType |
| `fromNode(node)` | node: NodeHandle | PictureFrameInterfaceHandle |
| `getAnchor()` | — | SpatialAnchor |
| `getDataMergeFieldId()` | — | String |
| `getDescription()` | — | String |
| `getFrameContents()` | — | NodeHandle |
| `getNode()` | — | NodeHandle |
| `getOriginalContentRectangle()` | — | Rectangle |
| `hasFrameContents()` | — | Boolean |
| `isClearFillOnPopulate()` | — | Boolean |
| `isEnabled()` | — | Boolean |

## PolyCurveTextNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyCurveTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PolyCurveTextNodeHandle |

## PolyCurveTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyCurveTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(polyCurve, storyBuilder)` | polyCurve: PolyCurveHandle, storyBuilder: StoryBuilderHandle | PolyCurveTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PolyCurveTextNodeDefinitionHandle |

## ShapeInterfaceApi

> Модуль `affinity:dom` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShapeInterfaceHandle |
| `getDomainTransform()` | — | Transform |
| `getNode()` | — | NodeHandle |
| `getShape()` | — | ShapeHandle |
| `getShapeBoundingBox()` | — | Rectangle |
| `getType()` | — | ShapeType |

## ShapeNodeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShapeNodeHandle |
| `getArtboardInterface()` | — | ArtboardInterfaceHandle |
| `getShapeInterface()` | — | ShapeInterfaceHandle |

## ShapeNodeDefinitionApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(shape, rectangle, brushFillDescriptorOrNull, lineFillDescriptorOrNull, lineStyleDescriptorOrNull, transparencyFillDescriptorOrNull)` | shape: ShapeHandle, rectangle: Rectangle, brushFillDescriptorOrNull: FillDescriptorHandle, lineFillDescriptorOrNull: FillDescriptorHandle, lineStyleDescriptorOrNull: LineStyleDescriptorHandle, transparencyFillDescriptorOrNull: FillDescriptorHandle | ShapeNodeDefinitionHandle |
| `createDefault()` | — | ShapeNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ShapeNodeDefinitionHandle |
| `getBoundingRectangle()` | — | Rectangle |
| `getShape()` | — | ShapeHandle |
| `setBoundingRectangle(rectangle)` | rectangle: Rectangle | — |
| `setShape(shape)` | shape: ShapeHandle | — |

## ShapePathTextNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapePathTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShapePathTextNodeHandle |
| `getShapeInterface()` | — | ShapeInterfaceHandle |

## ShapePathTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapePathTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(shape, boundingRect, storyBuilder)` | shape: ShapeHandle, boundingRect: Rectangle, storyBuilder: StoryBuilderHandle | ShapePathTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ShapePathTextNodeDefinitionHandle |

## ShapeTextNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShapeTextNodeHandle |
| `getShapeInterface()` | — | ShapeInterfaceHandle |

## ShapeTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createFromStoryBuilder(shape, boundingRect, storyBuilder)` | shape: ShapeHandle, boundingRect: Rectangle, storyBuilder: StoryBuilderHandle | ShapeTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ShapeTextNodeDefinitionHandle |

## TableTextNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/TableTextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TableTextNodeHandle |

## TableTextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/TableTextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(box, size)` | box: Rectangle, size: Size | TableTextNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | TableTextNodeDefinitionHandle |

## TextFrameInterfaceApi

> Модуль `affinity:dom` · методов: 20 · [SDK](https://sdk.affinity.studio/33000/js/apis/TextFrameInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canHideOverflow()` | — | Boolean |
| `canUseBaselineGrid()` | — | Boolean |
| `canUseTextWraps()` | — | Boolean |
| `enumerateTextFlowNodes(callback)` | callback: Function | — |
| `fromNode(node)` | node: NodeHandle | TextFrameInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `getScalarStoryToDomainTransform()` | — | Transform |
| `getSpreadNode()` | — | SpreadNodeHandle |
| `getStoryToDomainTransform()` | — | Transform |
| `getTextBegin()` | — | Number |
| `getTextFlowIndex()` | — | Number |
| `getTextRenderScale()` | — | Transform |
| `getTextUiScale()` | — | Transform |
| `hasScaledText()` | — | Boolean |
| `ignoreBaselineGrid()` | — | Boolean |
| `ignoreTextWraps()` | — | Boolean |
| `isMultiFrameTextFlow()` | — | Boolean |
| `isTextFlowBack()` | — | Boolean |
| `isTextFlowFront()` | — | Boolean |
| `isWrappingText()` | — | Boolean |

## TextNodeApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/TextNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TextNodeHandle |
| `getArtboardInterface()` | — | ArtboardInterfaceHandle |
| `getBrushFillInterface()` | — | BrushFillInterfaceHandle |
| `getCompoundOperationInterface()` | — | CompoundOperationInterfaceHandle |
| `getCurvesInterface()` | — | CurvesInterfaceHandle |
| `getLineStyleInterface()` | — | LineStyleInterfaceHandle |
| `getStoryInterface()` | — | StoryInterfaceHandle |
| `getTextFrameInterface()` | — | TextFrameInterfaceHandle |
| `getTransparencyInterface()` | — | TransparencyInterfaceHandle |

## TextNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/TextNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | TextNodeDefinitionHandle |

