# Узлы: база, контейнеры, определения (SDK 33000)

> API-референс `affinity:dom` · Модуль `affinity:dom`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (34), методов: 320.

## BaseBoxInterfaceApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/BaseBoxInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BaseBoxInterfaceHandle |
| `getBaseBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getConstrainingBaseBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getNode(node)` | node: BaseBoxInterfaceHandle | NodeHandle |

## BlendModeInterfaceApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BlendModeInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BlendModeInterfaceHandle |
| `getAntialiasingMode()` | — | AntialiasingMode |
| `getBlendMode()` | — | BlendMode |
| `getBlendOptions()` | — | BlendOptionsHandle |
| `getNode()` | — | NodeHandle |

## BlendOptionsApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/BlendOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getChannelSourceLayerRanges(channel)` | channel: Number | SplineHandle |
| `getChannelUnderlyingCompositionRanges(channel)` | channel: Number | SplineHandle |
| `getGamma()` | — | Number |
| `getMasterSourceLayerRanges()` | — | SplineHandle |
| `getMasterUnderlyingCompositionRanges()` | — | SplineHandle |
| `setChannelSourceLayerRanges(channel, spline)` | channel: Number, spline: SplineHandle | — |
| `setChannelUnderlyingCompositionRanges(channel, spline)` | channel: Number, spline: SplineHandle | — |
| `setGamma(gamma)` | gamma: Number | — |
| `setMasterSourceLayerRanges(spline)` | spline: SplineHandle | — |
| `setMasterUnderlyingCompositionRanges(spline)` | spline: SplineHandle | — |

## BrushFillInterfaceApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/BrushFillInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateDescriptors(obeyScaleWithObject, callback)` | obeyScaleWithObject: Boolean, callback: Function | — |
| `fromNode(node)` | node: NodeHandle | BrushFillInterfaceHandle |
| `getContentType()` | — | ContentType |
| `getCurrentDescriptor(obeyScaleWithObject)` | obeyScaleWithObject: Boolean | FillDescriptorHandle |
| `getCurrentIndex()` | — | Number |
| `getDescriptor(index, obeyScaleWithObject)` | index: Number, obeyScaleWithObject: Boolean | FillDescriptorHandle |
| `getDescriptorCount()` | — | Number |
| `getDomainTransform()` | — | Transform |
| `getNode()` | — | NodeHandle |
| `getSubSelection(index)` | index: Number | SubSelectionHandle |
| `getSubSelectionCount()` | — | Number |
| `isBrushFillVisible(minAlpha)` | minAlpha: Number | Boolean |
| `isNoFill()` | — | Boolean |

## ColouredLogicalNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColouredLogicalNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ColouredLogicalNodeHandle |
| `getLayerColour(node)` | node: ColouredLogicalNodeHandle | ColourHandle |

## ColouredLogicalNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColouredLogicalNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ColouredLogicalNodeDefinitionHandle |

## CompoundOperationInterfaceApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/CompoundOperationInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | CompoundOperationInterfaceHandle |
| `getCompoundOperation()` | — | CompoundOperation |
| `getNode(node)` | node: CompoundOperationInterfaceHandle | NodeHandle |

## CurvesInterfaceApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvesInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | CurvesInterfaceHandle |
| `getCorneredCurves()` | — | PolyCurveHandle |
| `getCurves()` | — | PolyCurveHandle |
| `getDomainTransform()` | — | Transform |
| `getNode()` | — | NodeHandle |
| `getPolyPolyCurves()` | — | PolyPolyCurveHandle |
| `getSubSelection(subSelectionType, index)` | subSelectionType: SubSelectionType, index: Number | SubSelectionHandle |
| `getSubSelectionCount(subSelectionType)` | subSelectionType: SubSelectionType | Number |
| `getWindingOrder()` | — | WindingOrder |
| `isMutable()` | — | Boolean |

## DescriptionInterfaceApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DescriptionInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DescriptionInterfaceHandle |
| `getDefaultDescription()` | — | String |
| `getDefaultDescriptionForDisplay()` | — | String |
| `getDescription(getDefaultIfEmpty)` | getDefaultIfEmpty: Boolean | String |
| `getNode()` | — | NodeHandle |
| `getTagColour(inferFromAncestors)` | inferFromAncestors: Boolean | ColourHandle |
| `getUserDescription()` | — | String |

## EditabilityInterfaceApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/EditabilityInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | EditabilityInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `isEditable()` | — | Boolean |
| `isLocalEditable()` | — | Boolean |
| `isMasterEditable()` | — | Boolean |

## ExportableInterfaceApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExportableInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ExportableInterfaceHandle |
| `getExportConfig()` | — | ExportConfigHandle |
| `getNode()` | — | NodeHandle |

## LayerEffectsInterfaceApi

> Модуль `affinity:dom` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/LayerEffectsInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateEffects(callback)` | callback: Function | — |
| `fromNode(node)` | node: NodeHandle | LayerEffectsInterfaceHandle |
| `getEffect(index)` | index: Number | LayerEffectHandle |
| `getEffectCount()` | — | Number |
| `getNode()` | — | NodeHandle |
| `hasActiveEffects()` | — | Boolean |
| `hasAnyVisibleEffects()` | — | Boolean |
| `isScaleWithObject()` | — | Boolean |

## LineStyleInterfaceApi

> Модуль `affinity:dom` · методов: 18 · [SDK](https://sdk.affinity.studio/33000/js/apis/LineStyleInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateDescriptors(obeyScaleWithObject, callback)` | obeyScaleWithObject: Boolean, callback: Function | — |
| `enumerateFillDescriptors(obeyScaleWithObject, callback)` | obeyScaleWithObject: Boolean, callback: Function | — |
| `enumerateLineStyleDescriptors(callback)` | callback: Function | — |
| `fromNode(node)` | node: NodeHandle | LineStyleInterfaceHandle |
| `getContentType()` | — | ContentType |
| `getCurrentDescriptors(obeyScaleWithObject)` | obeyScaleWithObject: Boolean | LineDescriptors |
| `getCurrentFillDescriptor(obeyScaleWithObject)` | obeyScaleWithObject: Boolean | FillDescriptorHandle |
| `getCurrentIndex()` | — | Number |
| `getCurrentLineStyleDescriptor()` | — | LineStyleDescriptorHandle |
| `getDescriptorCount()` | — | Number |
| `getDescriptors(index, obeyScaleWithObject)` | index: Number, obeyScaleWithObject: Boolean | LineDescriptors |
| `getDomainTransform()` | — | Transform |
| `getFillDescriptor(index, obeyScaleWithObject)` | index: Number, obeyScaleWithObject: Boolean | FillDescriptorHandle |
| `getLineStyleDescriptor(index)` | index: Number | LineStyleDescriptorHandle |
| `getNode()` | — | NodeHandle |
| `getScalarDomainTransform()` | — | Transform |
| `isLineStyleVisible()` | — | Boolean |
| `isNoFill()` | — | Boolean |

## LogicalNodeApi

> Модуль `affinity:dom` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/LogicalNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | LogicalNodeHandle |
| `getBrushFillInterface()` | — | BrushFillInterfaceHandle |
| `getLineStyleInterface()` | — | LineStyleInterfaceHandle |
| `getTransparencyInterface()` | — | TransparencyInterfaceHandle |
| `hasNonMaskChildren()` | — | Boolean |
| `hasNonMaskOrAdjustmentChildren()` | — | Boolean |

## LogicalNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/LogicalNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | LogicalNodeDefinitionHandle |

## NodeApi

> Модуль `affinity:dom` · методов: 37 · [SDK](https://sdk.affinity.studio/33000/js/apis/NodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromSelectable(selectable)` | selectable: SelectableHandle | NodeHandle |
| `getBaseBoxInterface()` | — | BaseBoxInterfaceHandle |
| `getBaseToSpreadTransform()` | — | Transform |
| `getBlendModeInterface()` | — | BlendModeInterfaceHandle |
| `getContentExtentsBox(includeInvisible, includeOffCurvePoints)` | includeInvisible: Boolean, includeOffCurvePoints: Boolean | Rectangle |
| `getContentExtentsBoxOfChildren(includeInvisible, includeOffCurvePoints)` | includeInvisible: Boolean, includeOffCurvePoints: Boolean | Rectangle |
| `getDescriptionInterface()` | — | DescriptionInterfaceHandle |
| `getDocument()` | — | DocumentHandle |
| `getEditabilityInterface()` | — | EditabilityInterfaceHandle |
| `getExactSpreadBaseBox()` | — | Rectangle |
| `getExactSpreadVisibleBox(includeParentEffects, considerParentClips)` | includeParentEffects: Boolean, considerParentClips: Boolean | Rectangle |
| `getExportableInterface()` | — | ExportableInterfaceHandle |
| `getFirstChild(nodeChildType)` | nodeChildType: NodeChildType | NodeHandle |
| `getLastChild(nodeChildType)` | nodeChildType: NodeChildType | NodeHandle |
| `getLayerEffectsInterface()` | — | LayerEffectsInterfaceHandle |
| `getLineBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getLocalBaseBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getLocalLineBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getLocalToSpreadTransform()` | — | Transform |
| `getLocalVisibleBox()` | — | Rectangle |
| `getNextSibling()` | — | NodeHandle |
| `getParent()` | — | NodeHandle |
| `getPreviousSibling()` | — | NodeHandle |
| `getSpreadBaseBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getSpreadLineBox(includeClips)` | includeClips: Boolean | Rectangle |
| `getSpreadToBaseTransform()` | — | Transform |
| `getSpreadVisibleBox(includeParentEffects)` | includeParentEffects: Boolean | Rectangle |
| `getTagInterface()` | — | TagInterfaceHandle |
| `getTransformInterface()` | — | TransformInterfaceHandle |
| `getTransformedLineBox(transform, scalarTransform, includeClips)` | transform: Transform, scalarTransform: Transform, includeClips: Boolean | Rectangle |
| `getVisibilityInterface()` | — | VisibilityInterfaceHandle |
| `isSameNode(other)` | other: NodeHandle | Boolean |
| `moveToFirstChild(nodeChildType)` | nodeChildType: NodeChildType | — |
| `moveToLastChild(nodeChildType)` | nodeChildType: NodeChildType | — |
| `moveToNextSibling()` | — | — |
| `moveToParent()` | — | — |
| `moveToPreviousSibling()` | — | — |

## NodeCastApi

> Модуль `affinity:dom` · методов: 79 · [SDK](https://sdk.affinity.studio/33000/js/apis/NodeCastApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | NodeCastHandle |
| `exec(node)` | node: NodeHandle | — |
| `setAddNoiseFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setArtTextNodeHandler(handler)` | handler: Function | — |
| `setBilateralBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setBlackAndWhiteAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setBloomFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setBoxBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setBrightnessContrastAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setClarityFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setColourBalanceAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setColouredLogicalNodeHandler(handler)` | handler: Function | — |
| `setContainerNodeHandler(handler)` | handler: Function | — |
| `setCurvePathTextNodeHandler(handler)` | handler: Function | — |
| `setCurvesAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setDefringeFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setDenoiseFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setDepthOfFieldFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setDevelopNodeHandler(handler)` | handler: Function | — |
| `setDiffuseFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setDiffuseGlowFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setDocumentNodeHandler(handler)` | handler: Function | — |
| `setDustAndScratchFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setEmbeddedDocumentNodeHandler(handler)` | handler: Function | — |
| `setEnclosureRasterNodeHandler(handler)` | handler: Function | — |
| `setExposureAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setFieldBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setFrameTextNodeHandler(handler)` | handler: Function | — |
| `setGaussianBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setGroupNodeHandler(handler)` | handler: Function | — |
| `setHSLShiftAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setHalftoneFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setHighPassFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setImageNodeHandler(handler)` | handler: Function | — |
| `setInvertAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setLensBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setLevelsAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setLogicalNodeHandler(handler)` | handler: Function | — |
| `setMaximumBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setMeasurementNodeHandler(handler)` | handler: Function | — |
| `setMedianBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setMinimumBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setMotionBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setNodeHandler(handler)` | handler: Function | — |
| `setNormalsAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setPatternRasterNodeHandler(handler)` | handler: Function | — |
| `setPhysicalNodeHandler(handler)` | handler: Function | — |
| `setPinchPunchFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setPixelateFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setPolyCurveNodeHandler(handler)` | handler: Function | — |
| `setPolyCurveTextNodeHandler(handler)` | handler: Function | — |
| `setPosteriseAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setRadialBlurFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setRasterNodeHandler(handler)` | handler: Function | — |
| `setRecolourAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setRippleFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setSelectiveColourAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setShadowsHighlightsAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setShadowsHighlightsFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setShapeNodeHandler(handler)` | handler: Function | — |
| `setShapePathTextNodeHandler(handler)` | handler: Function | — |
| `setShapeTextNodeHandler(handler)` | handler: Function | — |
| `setSphericalFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setSplitToningAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setSpreadNodeHandler(handler)` | handler: Function | — |
| `setTableTextNodeHandler(handler)` | handler: Function | — |
| `setTextNodeHandler(handler)` | handler: Function | — |
| `setThresholdAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setToneCompressionAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setToneStretchAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setTwirlFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setUnsharpMaskFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setVectorNodeHandler(handler)` | handler: Function | — |
| `setVibranceAdjustmentRasterNodeHandler(handler)` | handler: Function | — |
| `setVignetteFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setVoronoiFilterRasterNodeHandler(handler)` | handler: Function | — |
| `setWhiteBalanceAdjustmentRasterNodeHandler(handler)` | handler: Function | — |

## NodeDefinitionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/NodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getTransform()` | — | Transform |
| `getUserDescription()` | — | String |
| `setTransform(transform)` | transform: Transform | — |
| `setUserDescription(description)` | description: String | — |

## PhysicalNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PhysicalNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canTransformWhileProtectingChildList(node, nodeChildType)` | node: PhysicalNodeHandle, nodeChildType: NodeChildType | Boolean |
| `fromNode(node)` | node: NodeHandle | PhysicalNodeHandle |

## PhysicalNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/PhysicalNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PhysicalNodeDefinitionHandle |

## PhysicalRootInterfaceApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PhysicalRootInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PhysicalRootInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `getPhysicalRootProperties()` | — | PhysicalRootPropertiesInterfaceHandle |

## PhysicalRootPropertiesInterfaceApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PhysicalRootPropertiesInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PhysicalRootPropertiesInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `getPageBoxInterface()` | — | PageBoxInterfaceHandle |
| `getPageCount()` | — | Number |

## PolyCurveNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyCurveNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PolyCurveNodeHandle |
| `getArtboardInterface(node)` | node: PolyCurveNodeHandle | ArtboardInterfaceHandle |

## PolyCurveNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyCurveNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(polyCurve, brushFillDescriptor, lineStyleDescriptor, lineFillDescriptor, transparencyFillDescriptor)` | polyCurve: PolyCurveHandle, brushFillDescriptor: FillDescriptorHandle, lineStyleDescriptor: LineStyleDescriptorHandle, lineFillDescriptor: FillDescriptorHandle, transparencyFillDescriptor: FillDescriptorHandle | PolyCurveNodeDefinitionHandle |
| `createDefault()` | — | PolyCurveNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PolyCurveNodeDefinitionHandle |
| `getCurves()` | — | PolyCurveHandle |
| `setCurves(polyCurve)` | polyCurve: PolyCurveHandle | — |

## RasterInterfaceApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `copyTo(rasterObject, destinationRectangle, sourceX, sourceY)` | rasterObject: RasterObjectHandle, destinationRectangle: Rectangle, sourceX: Number, sourceY: Number | — |
| `createCompatibleBitmap(copyContents)` | copyContents: Boolean | RasterObjectHandle |
| `createCompatibleBuffer(copyContents)` | copyContents: Boolean | RasterObjectHandle |
| `fromNode(node)` | node: NodeHandle | RasterInterfaceHandle |
| `getBitmap()` | — | RasterObjectHandle |
| `getDomainTransform()` | — | Transform |
| `getFormat()` | — | RasterFormat |
| `getHeight()` | — | Number |
| `getNode()` | — | NodeHandle |
| `getPixelSize()` | — | Number |
| `getWidth()` | — | Number |

## RasterNodeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | RasterNodeHandle |
| `getRasterInterface()` | — | RasterInterfaceHandle |
| `isExtendEmpty(node)` | node: RasterNodeHandle | Boolean |

## RasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(format)` | format: RasterFormat | RasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | RasterNodeDefinitionHandle |
| `getBitmap()` | — | RasterObjectHandle |
| `setBitmap(bitmap)` | bitmap: RasterObjectHandle | — |

## StoryInterfaceApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/StoryInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | StoryInterfaceHandle |
| `getDomainTransform()` | — | Transform |
| `getNode()` | — | NodeHandle |
| `getScalarDomainTransform()` | — | Transform |
| `getStory()` | — | StoryHandle |
| `getStoryRange()` | — | StoryRange |
| `getTextDefaultType()` | — | TextDefaultType |
| `getTextRenderScale()` | — | Transform |
| `getTextUiScale()` | — | Transform |
| `isMultiFrameTextFlow()` | — | Boolean |

## TagInterfaceApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/TagInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TagInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `getValueForKey(key)` | key: String | String |
| `getValueForPredefinedKey(key)` | key: PredefinedTagKey | String |
| `hasKey(key)` | key: String | Boolean |
| `hasPredefinedKey(key)` | key: PredefinedTagKey | Boolean |
| `isMarkAsDecoration()` | — | Boolean |

## TransformInterfaceApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/TransformInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TransformInterfaceHandle |
| `getDomainTransform()` | — | Transform |
| `getFocalPoint()` | — | FocalPoint |
| `getFrameTextScale()` | — | Transform |
| `getNode()` | — | NodeHandle |
| `getStoryPinPathTransform()` | — | Transform |
| `getTextFrameScaleToDomainTransform()` | — | Transform |
| `getTransform(forceConstraints)` | forceConstraints: Boolean | Transform |
| `getUnconstrainedTransform()` | — | Transform |
| `prefersAspectRatioLockedResize()` | — | Boolean |

## TransparencyInterfaceApi

> Модуль `affinity:dom` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/TransparencyInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TransparencyInterfaceHandle |
| `getContentType()` | — | ContentType |
| `getDomainTransform()` | — | Transform |
| `getFillDescriptor()` | — | FillDescriptorHandle |
| `getNode()` | — | NodeHandle |
| `isTransparencyNone()` | — | Boolean |

## VectorNodeApi

> Модуль `affinity:dom` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/VectorNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canBeExpressedAsVectorClip()` | — | Boolean |
| `fromNode(node)` | node: NodeHandle | VectorNodeHandle |
| `getBrushFillInterface()` | — | BrushFillInterfaceHandle |
| `getCompoundOperationInterface()` | — | CompoundOperationInterfaceHandle |
| `getCurvesInterface()` | — | CurvesInterfaceHandle |
| `getLineStyleInterface()` | — | LineStyleInterfaceHandle |
| `getPictureFrameInterface()` | — | PictureFrameInterfaceHandle |
| `getTransparencyInterface()` | — | TransparencyInterfaceHandle |

## VectorNodeDefinitionApi

> Модуль `affinity:dom` · методов: 21 · [SDK](https://sdk.affinity.studio/33000/js/apis/VectorNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addBrushFillDescriptor(brushFillDescriptorOrNull)` | brushFillDescriptorOrNull: FillDescriptorHandle | — |
| `addLineDescriptors(lineFillDescriptorOrNull, lineStyleDescriptorOrNull)` | lineFillDescriptorOrNull: FillDescriptorHandle, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | — |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | VectorNodeDefinitionHandle |
| `getBrushFillDescriptor(index)` | index: Number | FillDescriptorHandle |
| `getBrushFillDescriptorCount()` | — | Number |
| `getCurrentBrushFillIndex()` | — | Number |
| `getCurrentLineDescriptorsIndex()` | — | Number |
| `getLineDescriptors(index)` | index: Number | LineDescriptors |
| `getLineDescriptorsCount()` | — | Number |
| `getPictureFrameEnabled()` | — | Boolean |
| `getTransparencyDescriptor()` | — | FillDescriptorHandle |
| `insertBrushFillDescriptor(index, brushFillDescriptorOrNull)` | index: Number, brushFillDescriptorOrNull: FillDescriptorHandle | — |
| `insertLineDescriptors(index, lineFillDescriptorOrNull, lineStyleDescriptorOrNull)` | index: Number, lineFillDescriptorOrNull: FillDescriptorHandle, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | — |
| `removeBrushFillDescriptor(index)` | index: Number | — |
| `removeLineDescriptors(index)` | index: Number | — |
| `setBrushFillDescriptor(index, brushFillDescriptorOrNull)` | index: Number, brushFillDescriptorOrNull: FillDescriptorHandle | — |
| `setCurrentBrushFillIndex(index)` | index: Number | — |
| `setCurrentLineDescriptorsIndex(index)` | index: Number | — |
| `setLineDescriptors(index, lineFillDescriptorOrNull, lineStyleDescriptorOrNull)` | index: Number, lineFillDescriptorOrNull: FillDescriptorHandle, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | — |
| `setPictureFrameEnabled(pictureFrameEnabled)` | pictureFrameEnabled: Boolean | — |
| `setTransparencyDescriptor(transparencyFillDescriptorOrNull)` | transparencyFillDescriptorOrNull: FillDescriptorHandle | — |

## VisibilityInterfaceApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/VisibilityInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getFillOpacity()` | — | Number |
| `getGlobalOpacity()` | — | Number |
| `getNode()` | — | NodeHandle |
| `isVisible()` | — | Boolean |
| `isVisibleInDomain()` | — | Boolean |
| `isVisibleInExport()` | — | Boolean |
| `testVisibility(visibilityTestOptions)` | visibilityTestOptions: VisibilityTestOptionsHandle | Boolean |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `artboardGrid.js`
- `bitmapWriter.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cropMarks.js`
- `makeGrid.js`
- `pathEffects.js`
- `tableFromJson.js`
