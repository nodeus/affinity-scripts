# DocumentCommandApi — каталог фабрик команд (SDK 33000)

> 363 фабрик `create*`. Все мутации документа идут через эти команды + `doc.executeCommand()`.
> Сигнатуры `self` опущены.

| Фабрика | Аргументы | Возврат |
|---|---|---|
| `createAddArtboardCommand(artboardDefinition, copyProperties, copyGuides)` | artboardDefinition: NodeDefinitionHandle, copyProperties: Boolean, copyGuides: Boolean | DocumentCommandHandle |
| `createAddCurveCommand(curvesInterface, curve, select, preserveExistingSubSelection)` | curvesInterface: CurvesInterfaceHandle, curve: CurveHandle, select: Boolean, preserveExistingSubSelection: Boolean | DocumentCommandHandle |
| `createAddCurveNodeCommand(curvesInterface, curveHandle, parametricDistance)` | curvesInterface: CurvesInterfaceHandle, curveHandle: CurveNodeSubSelectionItem, parametricDistance: Number | DocumentCommandHandle |
| `createAddDocumentSnapshotCommand(description)` | description: String | DocumentCommandHandle |
| `createAddGuideCommand(horizontal, dPixels96)` | horizontal: Boolean, dPixels96: Number | DocumentCommandHandle |
| `createAddNoiseFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: AddNoiseFilterParametersHandle | DocumentCommandHandle |
| `createAddShapeCommand(shape, rectangle)` | shape: ShapeHandle, rectangle: Rectangle | DocumentCommandHandle |
| `createBilateralBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: BilateralBlurFilterParametersHandle | DocumentCommandHandle |
| `createBloomFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: BloomFilterParametersHandle | DocumentCommandHandle |
| `createBoolOpIntersectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createBoolOpSubtractCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createBoolOpUnionCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createBoolOpXorCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createBoxBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: BoxBlurFilterParametersHandle | DocumentCommandHandle |
| `createBreakCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createClarityFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: ClarityFilterParametersHandle | DocumentCommandHandle |
| `createClearMacroCommand()` | — | DocumentCommandHandle |
| `createClearPreviewsCommand()` | — | DocumentCommandHandle |
| `createColouriseCommand()` | — | DocumentCommandHandle |
| `createConvertDocumentFormatCommand(format)` | format: RasterFormat | DocumentCommandHandle |
| `createConvertToCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createCycleAlternateFuturesCommand(index)` | index: Number | DocumentCommandHandle |
| `createDefringeFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DefringeFilterParametersHandle | DocumentCommandHandle |
| `createDeleteCurveNodesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDeleteDocumentSnapshotCommand(snapshot)` | snapshot: DocumentSnapshotHandle | DocumentCommandHandle |
| `createDeleteNodesCommand(selection, ignoreRasterSelection)` | selection: SelectionHandle, ignoreRasterSelection: Boolean | DocumentCommandHandle |
| `createDenoiseFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DenoiseFilterParametersHandle | DocumentCommandHandle |
| `createDepthOfFieldFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DepthOfFieldFilterParametersHandle | DocumentCommandHandle |
| `createDetectDepthCommand()` | — | DocumentCommandHandle |
| `createDiffuseFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DiffuseFilterParametersHandle | DocumentCommandHandle |
| `createDiffuseGlowFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DiffuseGlowFilterParametersHandle | DocumentCommandHandle |
| `createDivideShapesCommand(selection, retainAllParts)` | selection: SelectionHandle, retainAllParts: Boolean | DocumentCommandHandle |
| `createDuplicateBevelEmbossLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDuplicateColourOverlayLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createDuplicateGaussianBlurLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDuplicateGradientOverlayLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createDuplicateInnerGlowLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDuplicateInnerShadowLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createDuplicateOuterGlowLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDuplicateOuterShadowLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createDuplicateOutlineLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createDuplicatePhongBevelLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createDustAndScratchFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: DustAndScratchFilterParametersHandle | DocumentCommandHandle |
| `createExportMacroCommand(macroPath)` | macroPath: String | DocumentCommandHandle |
| `createFeatherRasterSelectionCommand(radius)` | radius: Number | DocumentCommandHandle |
| `createFieldBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: FieldBlurFilterParametersHandle | DocumentCommandHandle |
| `createFlattenCommand()` | — | DocumentCommandHandle |
| `createFlipCanvasCommand(isHorizontal)` | isHorizontal: Boolean | DocumentCommandHandle |
| `createFormatTextCommand(selection, delta)` | selection: SelectionHandle, delta: StoryDeltaHandle | DocumentCommandHandle |
| `createGaussianBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: GaussianBlurFilterParametersHandle | DocumentCommandHandle |
| `createGenerateImageCommand(prompt)` | prompt: String | DocumentCommandHandle |
| `createGenerativeEditImageCommand(prompt)` | prompt: String | DocumentCommandHandle |
| `createGroupTransformCommand(selectionHandle, xDataOrNull, yDataOrNull)` | selectionHandle: SelectionHandle, xDataOrNull: GroupTransformData, yDataOrNull: GroupTransformData | DocumentCommandHandle |
| `createGrowShrinkRasterSelectionCommand(radius, circular)` | radius: Number, circular: Boolean | DocumentCommandHandle |
| `createHalftoneFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: HalftoneFilterParametersHandle | DocumentCommandHandle |
| `createHighPassFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: HighPassFilterParametersHandle | DocumentCommandHandle |
| `createImageTraceCommand(selection, edgeThreshold, curveFittingTolerance)` | selection: SelectionHandle, edgeThreshold: Number, curveFittingTolerance: Number | DocumentCommandHandle |
| `createImportMacroCommand(macroPath)` | macroPath: String | DocumentCommandHandle |
| `createInsertGlyphCommand(selection, glyph)` | selection: SelectionHandle, glyph: GlyphHandle | DocumentCommandHandle |
| `createJoinCurvesCommand(selection, isJoinStraight)` | selection: SelectionHandle, isJoinStraight: Boolean | DocumentCommandHandle |
| `createKnifeCutCommand(cutCurve, selection)` | cutCurve: CurveHandle, selection: SelectionHandle | DocumentCommandHandle |
| `createLensBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: LensBlurFilterParametersHandle | DocumentCommandHandle |
| `createLinkTextFrameCommand(srcNode, destNode)` | srcNode: TextNodeHandle, destNode: TextNodeHandle | DocumentCommandHandle |
| `createMaximumBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: MaximumBlurFilterParametersHandle | DocumentCommandHandle |
| `createMedianBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: MedianBlurFilterParametersHandle | DocumentCommandHandle |
| `createMergeCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createMergeDownCommand()` | — | DocumentCommandHandle |
| `createMergeSelectedCommand()` | — | DocumentCommandHandle |
| `createMergeVisibleCommand()` | — | DocumentCommandHandle |
| `createMinimumBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: MinimumBlurFilterParametersHandle | DocumentCommandHandle |
| `createMotionBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: MotionBlurFilterParametersHandle | DocumentCommandHandle |
| `createMoveColourOverlayLayerEffectCommand(selection, fromIndex, toIndex)` | selection: SelectionHandle, fromIndex: Number, toIndex: Number | DocumentCommandHandle |
| `createMoveGradientOverlayLayerEffectCommand(selection, fromIndex, toIndex)` | selection: SelectionHandle, fromIndex: Number, toIndex: Number | DocumentCommandHandle |
| `createMoveGuideCommand(horizontal, nIndex, dNewPixels96)` | horizontal: Boolean, nIndex: Number, dNewPixels96: Number | DocumentCommandHandle |
| `createMoveInnerShadowLayerEffectCommand(selection, fromIndex, toIndex)` | selection: SelectionHandle, fromIndex: Number, toIndex: Number | DocumentCommandHandle |
| `createMoveMappedNodesCommand(selection, fromNodes, toNodes, nodeMoveType)` | selection: SelectionHandle, fromNodes: NodeHandle[], toNodes: NodeHandle[], nodeMoveType: NodeMoveType | DocumentCommandHandle |
| `createMoveNodesCommand(selection, toNode, nodeMoveType, childType)` | selection: SelectionHandle, toNode: NodeHandle, nodeMoveType: NodeMoveType, childType: NodeChildType | DocumentCommandHandle |
| `createMoveOuterShadowLayerEffectCommand(selection, fromIndex, toIndex)` | selection: SelectionHandle, fromIndex: Number, toIndex: Number | DocumentCommandHandle |
| `createMoveOutlineLayerEffectCommand(selection, fromIndex, toIndex)` | selection: SelectionHandle, fromIndex: Number, toIndex: Number | DocumentCommandHandle |
| `createOutlineRasterSelectionCommand(radius, alignment, circular)` | radius: Number, alignment: RasterSelectionOutlineAlignment, circular: Boolean | DocumentCommandHandle |
| `createPinchPunchFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: PinchPunchFilterParametersHandle | DocumentCommandHandle |
| `createPixelateFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: PixelateFilterParametersHandle | DocumentCommandHandle |
| `createPopulatePictureFrameCommand(contentNode, selection)` | contentNode: NodeHandle, selection: SelectionHandle | DocumentCommandHandle |
| `createRadialBlurFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: RadialBlurFilterParametersHandle | DocumentCommandHandle |
| `createRasterAutoColoursCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterAutoContrastCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterAutoLevelsCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterAutoWhiteBalanceCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterDeselectCommand()` | — | DocumentCommandHandle |
| `createRasterEdgeDetectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterFillCommand(selection, mode, colourOrNull, opacity, blendMode)` | selection: SelectionHandle, mode: RasterFillMode, colourOrNull: ColourHandle, opacity: Number, blendMode: BlendMode | DocumentCommandHandle |
| `createRasterFloodFillCommand(selection, point, tolerance, isContiguous, antialias, samplingSource, blendMode, colourOrNull)` | selection: SelectionHandle, point: Point, tolerance: Number, isContiguous: Boolean, antialias: Boolean, samplingSource: RasterFloodFillSamplingSource, blendMode: BlendMode, colourOrNull: ColourHandle | DocumentCommandHandle |
| `createRasterFloodSelectCommand(point, tolerance, isContiguous, antialias, operation, samplingSource)` | point: Point, tolerance: Number, isContiguous: Boolean, antialias: Boolean, operation: RasterSelectionLogicalOperation, samplingSource: SamplingSource | DocumentCommandHandle |
| `createRasterHorizontalEdgeDetectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterInvertSelectionCommand()` | — | DocumentCommandHandle |
| `createRasterPolarToRectangularCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterRectangularToPolarCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasterReselectCommand()` | — | DocumentCommandHandle |
| `createRasterSelectAllCommand()` | — | DocumentCommandHandle |
| `createRasterSelectBluesCommand()` | — | DocumentCommandHandle |
| `createRasterSelectGreensCommand()` | — | DocumentCommandHandle |
| `createRasterSelectHighlightsCommand()` | — | DocumentCommandHandle |
| `createRasterSelectMidtonesCommand()` | — | DocumentCommandHandle |
| `createRasterSelectOpaqueCommand()` | — | DocumentCommandHandle |
| `createRasterSelectPartiallyTransparentCommand()` | — | DocumentCommandHandle |
| `createRasterSelectRedsCommand()` | — | DocumentCommandHandle |
| `createRasterSelectShadowsCommand()` | — | DocumentCommandHandle |
| `createRasterSelectTransparentCommand()` | — | DocumentCommandHandle |
| `createRasterVerticalEdgeDetectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRasteriseObjectsCommand(selection, rasteriseContentsOnly, clipToSpread)` | selection: SelectionHandle, rasteriseContentsOnly: Boolean, clipToSpread: Boolean | DocumentCommandHandle |
| `createRedoCommand()` | — | DocumentCommandHandle |
| `createRemoveAllLayerEffectsCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRemoveBackgroundCommand()` | — | DocumentCommandHandle |
| `createRemoveBevelEmbossLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRemoveColourOverlayLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createRemoveGaussianBlurLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRemoveGradientOverlayLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createRemoveGuideCommand(horizontal, nIndex)` | horizontal: Boolean, nIndex: Number | DocumentCommandHandle |
| `createRemoveInnerGlowLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRemoveInnerShadowLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createRemoveOuterGlowLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRemoveOuterShadowLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createRemoveOutlineLayerEffectCommand(selection, index)` | selection: SelectionHandle, index: Number | DocumentCommandHandle |
| `createRemovePhongBevelLayerEffectCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createReplaceBitmapCommand(selection, bitmap)` | selection: SelectionHandle, bitmap: RasterObjectHandle | DocumentCommandHandle |
| `createReplayMacroCommand()` | — | DocumentCommandHandle |
| `createRestoreDocumentSnapshotCommand(snapshot)` | snapshot: DocumentSnapshotHandle | DocumentCommandHandle |
| `createReverseCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createRippleFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: RippleFilterParametersHandle | DocumentCommandHandle |
| `createScissorCutCommand(node, polyCurveIndex, curveIndex, isParametric, distance)` | node: NodeHandle, polyCurveIndex: Number, curveIndex: Number, isParametric: Boolean, distance: Number | DocumentCommandHandle |
| `createSelectAllCommand(selectOnCurrentLayerOnly)` | selectOnCurrentLayerOnly: Boolean | DocumentCommandHandle |
| `createSelectSubjectCommand()` | — | DocumentCommandHandle |
| `createSeparateCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createSetAddNoiseFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: AddNoiseFilterParametersHandle | DocumentCommandHandle |
| `createSetAllLayerEffectsScaleWithObjectCommand(selection, scaleWithObject)` | selection: SelectionHandle, scaleWithObject: Boolean | DocumentCommandHandle |
| `createSetAntialiasingModeCommand(selection, antialiasingMode)` | selection: SelectionHandle, antialiasingMode: AntialiasingMode | DocumentCommandHandle |
| `createSetArtboardDocumentPropertiesCommand(artboardInterface, artboardDocumentProperties)` | artboardInterface: ArtboardInterfaceHandle, artboardDocumentProperties: ArtboardDocumentPropertiesHandle | DocumentCommandHandle |
| `createSetArtboardEnabledCommand(selection, isEnabled)` | selection: SelectionHandle, isEnabled: Boolean | DocumentCommandHandle |
| `createSetArtboardSizeWithAnchorCommand(artboardInterface, width, height, anchor)` | artboardInterface: ArtboardInterfaceHandle, width: Number, height: Number, anchor: SpatialAnchor | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectAzimuthCommand(selection, azimuth, enableIfDisabled)` | selection: SelectionHandle, azimuth: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectCommand(selection, layerEffect)` | selection: SelectionHandle, layerEffect: BevelEmbossLayerEffectHandle | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectDepthCommand(selection, depth, enableIfDisabled)` | selection: SelectionHandle, depth: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectDirectionCommand(selection, azimuth, elevation, enableIfDisabled)` | selection: SelectionHandle, azimuth: Number, elevation: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectElevationCommand(selection, elevation, enableIfDisabled)` | selection: SelectionHandle, elevation: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectEnabledCommand(selection, enabled)` | selection: SelectionHandle, enabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectHighlightBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectHighlightColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectHighlightOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectInvertedCommand(selection, inverted, enableIfDisabled)` | selection: SelectionHandle, inverted: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectLinkDepthCommand(selection, linkDepth, enableIfDisabled)` | selection: SelectionHandle, linkDepth: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectRadiusCommand(selection, radius, enableIfDisabled)` | selection: SelectionHandle, radius: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectScaleWithObjectCommand(selection, scaleWithObject, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectShadowBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectShadowColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectShadowOpacityCommand(selection, shadowOpacity, enableIfDisabled)` | selection: SelectionHandle, shadowOpacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectSoftenCommand(selection, soften, enableIfDisabled)` | selection: SelectionHandle, soften: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBevelEmbossLayerEffectTypeCommand(selection, bevelType, enableIfDisabled)` | selection: SelectionHandle, bevelType: BevelEmbossType, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetBilateralBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: BilateralBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetBlackAndWhiteAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: BlackAndWhiteAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetBlendGammaCommand(selection, gamma)` | selection: SelectionHandle, gamma: Number | DocumentCommandHandle |
| `createSetBlendModeCommand(selection, blendMode, setPassthrough)` | selection: SelectionHandle, blendMode: BlendMode, setPassthrough: Boolean | DocumentCommandHandle |
| `createSetBlendRangesCommand(selection, blendOptions)` | selection: SelectionHandle, blendOptions: BlendOptionsHandle | DocumentCommandHandle |
| `createSetBloomFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: BloomFilterParametersHandle | DocumentCommandHandle |
| `createSetBoxBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: BoxBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetBrightnessContrastAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: BrightnessContrastAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetBrushFillCommand(selection, fillDescriptor, contentType, fillMask, copyTransform, useTextSelection, maintainBlendMode, restoreAspectRatio)` | selection: SelectionHandle, fillDescriptor: FillDescriptorHandle, contentType: ContentType, fillMask: FillMask, copyTransform: Boolean, useTextSelection: Boolean, maintainBlendMode: Boolean, restoreAspectRatio: Boolean | DocumentCommandHandle |
| `createSetBrushFillIsAnchoredToSpreadCommand(selectionHandle, isAnchoredToSpread, contentType, useTextSelection, applyToAllFills)` | selectionHandle: SelectionHandle, isAnchoredToSpread: Boolean, contentType: ContentType, useTextSelection: Boolean, applyToAllFills: Boolean | DocumentCommandHandle |
| `createSetBrushFillOpacityCommand(selection, opacity, contentType, useTextSelection)` | selection: SelectionHandle, opacity: Number, contentType: ContentType, useTextSelection: Boolean | DocumentCommandHandle |
| `createSetClarityFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ClarityFilterParametersHandle | DocumentCommandHandle |
| `createSetColourBalanceAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ColourBalanceAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectBlendModeCommand(selection, blendMode, index, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectColourCommand(selection, colour, index, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectCommand(selection, layerEffect, index)` | selection: SelectionHandle, layerEffect: ColourOverlayLayerEffectHandle, index: Number | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectEnabledCommand(selection, enabled, index)` | selection: SelectionHandle, enabled: Boolean, index: Number | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectOpacityCommand(selection, opacity, index, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetColourOverlayLayerEffectScaleWithObjectCommand(selection, scaleWithObject, index, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetCurrentSnapshotCommand(snapshot)` | snapshot: DocumentSnapshotHandle | DocumentCommandHandle |
| `createSetCurrentSnapshotFromHistoryItemCommand(historyItem)` | historyItem: DocumentHistoryItemHandle | DocumentCommandHandle |
| `createSetCurrentSpreadCommand(spreadNode)` | spreadNode: SpreadNodeHandle | DocumentCommandHandle |
| `createSetCurveNodeStyleCommand(selection, style)` | selection: SelectionHandle, style: CurveNodeStyle | DocumentCommandHandle |
| `createSetCurvesAdjustmentColourSpaceCommand(selection, colourSpace)` | selection: SelectionHandle, colourSpace: ColourSpaceType | DocumentCommandHandle |
| `createSetCurvesAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: CurvesAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetCurvesCommand(curvesInterface, polyCurve)` | curvesInterface: CurvesInterfaceHandle, polyCurve: PolyCurveHandle | DocumentCommandHandle |
| `createSetDefringeFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DefringeFilterParametersHandle | DocumentCommandHandle |
| `createSetDenoiseFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DenoiseFilterParametersHandle | DocumentCommandHandle |
| `createSetDepthOfFieldFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DepthOfFieldFilterParametersHandle | DocumentCommandHandle |
| `createSetDescriptionCommand(selection, description)` | selection: SelectionHandle, description: String | DocumentCommandHandle |
| `createSetDevelopParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DevelopParametersHandle | DocumentCommandHandle |
| `createSetDiffuseFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DiffuseFilterParametersHandle | DocumentCommandHandle |
| `createSetDiffuseGlowFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DiffuseGlowFilterParametersHandle | DocumentCommandHandle |
| `createSetDocumentPropertiesCommand(documentProperties)` | documentProperties: DocumentPropertiesHandle | DocumentCommandHandle |
| `createSetDocumentUnitsCommand(units)` | units: UnitType | DocumentCommandHandle |
| `createSetDustAndScratchFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: DustAndScratchFilterParametersHandle | DocumentCommandHandle |
| `createSetEditableCommand(selection, isEditable)` | selection: SelectionHandle, isEditable: Boolean | DocumentCommandHandle |
| `createSetEmbeddedDocumentAllLayersVisibilityCommand(selection, isVisible)` | selection: SelectionHandle, isVisible: Boolean[] | DocumentCommandHandle |
| `createSetEmbeddedDocumentLayerVisibilityCommand(selection, layer, isVisible)` | selection: SelectionHandle, layer: Number, isVisible: Boolean | DocumentCommandHandle |
| `createSetEmbeddedDocumentPDFPassthroughCommand(selection, isSet)` | selection: SelectionHandle, isSet: Boolean | DocumentCommandHandle |
| `createSetEmbeddedDocumentPageBoundingBoxTypeCommand(selection, pageBoundingBoxType)` | selection: SelectionHandle, pageBoundingBoxType: PageBoundingBoxType | DocumentCommandHandle |
| `createSetEmbeddedDocumentSelectedArtboardIDCommand(selection, artboardID)` | selection: SelectionHandle, artboardID: String | DocumentCommandHandle |
| `createSetEmbeddedDocumentSelectedSpreadIDCommand(selection, spreadID)` | selection: SelectionHandle, spreadID: String | DocumentCommandHandle |
| `createSetExportConfigCommand(selection, exportConfig)` | selection: SelectionHandle, exportConfig: ExportConfigHandle | DocumentCommandHandle |
| `createSetExposureAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ExposureAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetFieldBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: FieldBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetGaussianBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: GaussianBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectCommand(selection, layerEffect)` | selection: SelectionHandle, layerEffect: GaussianBlurLayerEffectHandle | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectEnabledCommand(selection, enabled)` | selection: SelectionHandle, enabled: Boolean | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectPreserveAlphaCommand(selection, preserveAlpha, enableIfDisabled)` | selection: SelectionHandle, preserveAlpha: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectRadiusCommand(selection, radius, enableIfDisabled)` | selection: SelectionHandle, radius: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGaussianBlurLayerEffectScaleWithObjectCommand(selection, scaleWithObject, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectBlendModeCommand(selection, blendMode, index, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectCommand(selection, layerEffect, index)` | selection: SelectionHandle, layerEffect: GradientOverlayLayerEffectHandle, index: Number | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectEnabledCommand(selection, enabled, index)` | selection: SelectionHandle, enabled: Boolean, index: Number | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectFillCommand(selection, gradientFill, enableIfDisabled)` | selection: SelectionHandle, gradientFill: GradientFillHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectFillTransformCommand(selection, transform, enableIfDisabled)` | selection: SelectionHandle, transform: Transform, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectOpacityCommand(selection, opacity, index, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGradientOverlayLayerEffectScaleWithObjectCommand(selection, scaleWithObject, index, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetGuidesColourCommand(colour)` | colour: ColourHandle | DocumentCommandHandle |
| `createSetHSLShiftAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: HSLShiftAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetHalftoneFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: HalftoneFilterParametersHandle | DocumentCommandHandle |
| `createSetHighPassFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: HighPassFilterParametersHandle | DocumentCommandHandle |
| `createSetHistoryIndexCommand(index)` | index: Number | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectCommand(selection, layerEffect)` | selection: SelectionHandle, layerEffect: InnerGlowLayerEffectHandle | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectEnabledCommand(selection, enabled)` | selection: SelectionHandle, enabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectIntensityCommand(selection, intensity, enableIfDisabled)` | selection: SelectionHandle, intensity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectRadiusCommand(selection, radius, enableIfDisabled)` | selection: SelectionHandle, radius: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerGlowLayerEffectScaleWithObjectCommand(selection, scaleWithObject, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectBlendModeCommand(selection, blendMode, index, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectColourCommand(selection, colour, index, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectCommand(selection, layerEffect, index)` | selection: SelectionHandle, layerEffect: InnerShadowLayerEffectHandle, index: Number | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectEnabledCommand(selection, enabled, index)` | selection: SelectionHandle, enabled: Boolean, index: Number | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectIntensityCommand(selection, intensity, index, enableIfDisabled)` | selection: SelectionHandle, intensity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectOffsetAngleCommand(selection, offset, angle, index, enableIfDisabled)` | selection: SelectionHandle, offset: Number, angle: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectOpacityCommand(selection, opacity, index, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectRadiusCommand(selection, radius, index, enableIfDisabled)` | selection: SelectionHandle, radius: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetInnerShadowLayerEffectScaleWithObjectCommand(selection, scaleWithObject, index, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetLensBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: LensBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetLevelsAdjustmentColourSpaceCommand(selection, colourSpace)` | selection: SelectionHandle, colourSpace: ColourSpaceType | DocumentCommandHandle |
| `createSetLevelsAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: LevelsAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetLineFillOpacityCommand(selection, opacity, contentType, useTextSelection)` | selection: SelectionHandle, opacity: Number, contentType: ContentType, useTextSelection: Boolean | DocumentCommandHandle |
| `createSetLineStyleCommand(selection, lineStyle, lineStyleMask, contentType, useTextSelection, defaultsMode)` | selection: SelectionHandle, lineStyle: LineStyleHandle, lineStyleMask: LineStyleMask, contentType: ContentType, useTextSelection: Boolean, defaultsMode: LineCommandDefaultsMode | DocumentCommandHandle |
| `createSetLineStyleDescriptorCommand(selection, lineStyleDescriptor, lineStyleMask, contentType, useTextSelection, defaultsMode)` | selection: SelectionHandle, lineStyleDescriptor: LineStyleDescriptorHandle, lineStyleMask: LineStyleMask, contentType: ContentType, useTextSelection: Boolean, defaultsMode: LineCommandDefaultsMode | DocumentCommandHandle |
| `createSetMaximumBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: MaximumBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetMeasurementAnnotationOffsetCommand(node, offset)` | node: MeasurementNodeHandle, offset: Number | DocumentCommandHandle |
| `createSetMeasurementPrecisionCommand(useDocumentPrecision, decimalPlaces)` | useDocumentPrecision: Boolean, decimalPlaces: Number | DocumentCommandHandle |
| `createSetMeasurementShowEndpointMarkersCommand(show)` | show: Boolean | DocumentCommandHandle |
| `createSetMeasurementUnitsCommand(units)` | units: UnitType | DocumentCommandHandle |
| `createSetMedianBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: MedianBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetMinimumBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: MinimumBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetMotionBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: MotionBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetNormalsAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: NormalsAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetOpacityCommand(selection, opacity)` | selection: SelectionHandle, opacity: Number | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectBlendModeCommand(selection, blendMode, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectCommand(selection, layerEffect)` | selection: SelectionHandle, layerEffect: OuterGlowLayerEffectHandle | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectEnabledCommand(selection, enabled)` | selection: SelectionHandle, enabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectIntensityCommand(selection, intensity, enableIfDisabled)` | selection: SelectionHandle, intensity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectRadiusCommand(selection, radius, enableIfDisabled)` | selection: SelectionHandle, radius: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterGlowLayerEffectScaleWithObjectCommand(selection, scaleWithObject, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectBlendModeCommand(selection, blendMode, index, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectColourCommand(selection, colour, index, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectCommand(selection, layerEffect, index)` | selection: SelectionHandle, layerEffect: OuterShadowLayerEffectHandle, index: Number | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectEnabledCommand(selection, enabled, index)` | selection: SelectionHandle, enabled: Boolean, index: Number | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectIntensityCommand(selection, intensity, index, enableIfDisabled)` | selection: SelectionHandle, intensity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectKnocksOutCommand(selection, knocksOut, enableIfDisabled)` | selection: SelectionHandle, knocksOut: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectOffsetAngleCommand(selection, offset, angle, index, enableIfDisabled)` | selection: SelectionHandle, offset: Number, angle: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectOpacityCommand(selection, opacity, index, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectRadiusCommand(selection, radius, index, enableIfDisabled)` | selection: SelectionHandle, radius: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOuterShadowLayerEffectScaleWithObjectCommand(selection, scaleWithObject, index, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectAlignmentCommand(selection, alignment, enableIfDisabled)` | selection: SelectionHandle, alignment: StrokeAlignment, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectBlendModeCommand(selection, blendMode, index, enableIfDisabled)` | selection: SelectionHandle, blendMode: BlendMode, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectColourCommand(selection, colour, index, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectCommand(selection, layerEffect, index)` | selection: SelectionHandle, layerEffect: OutlineLayerEffectHandle, index: Number | DocumentCommandHandle |
| `createSetOutlineLayerEffectEnabledCommand(selection, enabled, index)` | selection: SelectionHandle, enabled: Boolean, index: Number | DocumentCommandHandle |
| `createSetOutlineLayerEffectFillCommand(selection, gradientFill, enableIfDisabled)` | selection: SelectionHandle, gradientFill: GradientFillHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectFillTransformCommand(selection, fillDescriptor, enableIfDisabled)` | selection: SelectionHandle, fillDescriptor: FillDescriptorHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectFillTypeCommand(selection, fillType, enableIfDisabled)` | selection: SelectionHandle, fillType: StrokeFillType, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectOpacityCommand(selection, opacity, index, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectRadiusCommand(selection, radius, index, enableIfDisabled)` | selection: SelectionHandle, radius: Number, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetOutlineLayerEffectScaleWithObjectCommand(selection, scaleWithObject, index, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, index: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPageDocumentPropertiesCommand(spreadNode, page, pageDocumentProperties)` | spreadNode: SpreadNodeHandle, page: Number, pageDocumentProperties: PageDocumentPropertiesHandle | DocumentCommandHandle |
| `createSetPenFillCommand(selection, fillDescriptor, contentType, fillMask, copyTransform, useTextSelection, maintainBlendMode, restoreAspectRatio)` | selection: SelectionHandle, fillDescriptor: FillDescriptorHandle, contentType: ContentType, fillMask: FillMask, copyTransform: Boolean, useTextSelection: Boolean, maintainBlendMode: Boolean, restoreAspectRatio: Boolean | DocumentCommandHandle |
| `createSetPenFillIsAnchoredToSpreadCommand(selectionHandle, isAnchoredToSpread, contentType, useTextSelection, applyToAllFills)` | selectionHandle: SelectionHandle, isAnchoredToSpread: Boolean, contentType: ContentType, useTextSelection: Boolean, applyToAllFills: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectAmbientColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectAmbientCommand(selection, ambient, enableIfDisabled)` | selection: SelectionHandle, ambient: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectCommand(selection, layerEffect)` | selection: SelectionHandle, layerEffect: PhongBevelLayerEffectHandle | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectDepthCommand(selection, depth, enableIfDisabled)` | selection: SelectionHandle, depth: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectDiffuseCommand(selection, diffuse, enableIfDisabled)` | selection: SelectionHandle, diffuse: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectEnabledCommand(selection, enabled)` | selection: SelectionHandle, enabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectLightsCommand(selection, lights, enableIfDisabled)` | selection: SelectionHandle, lights: PointLightHandle[], enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectLinkDepthCommand(selection, linkDepth, enableIfDisabled)` | selection: SelectionHandle, linkDepth: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectOpacityCommand(selection, opacity, enableIfDisabled)` | selection: SelectionHandle, opacity: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectRadiusCommand(selection, radius, enableIfDisabled)` | selection: SelectionHandle, radius: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectScaleWithObjectCommand(selection, scaleWithObject, enableIfDisabled)` | selection: SelectionHandle, scaleWithObject: Boolean, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectShininessCommand(selection, shininess, enableIfDisabled)` | selection: SelectionHandle, shininess: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectSoftenCommand(selection, soften, enableIfDisabled)` | selection: SelectionHandle, soften: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectSpecularColourCommand(selection, colour, enableIfDisabled)` | selection: SelectionHandle, colour: ColourHandle, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPhongBevelLayerEffectSpecularCommand(selection, specular, enableIfDisabled)` | selection: SelectionHandle, specular: Number, enableIfDisabled: Boolean | DocumentCommandHandle |
| `createSetPinchPunchFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: PinchPunchFilterParametersHandle | DocumentCommandHandle |
| `createSetPixelateFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: PixelateFilterParametersHandle | DocumentCommandHandle |
| `createSetPosteriseAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: PosteriseAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetRadialBlurFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: RadialBlurFilterParametersHandle | DocumentCommandHandle |
| `createSetRasterSelectionFromObjectCommand(nodeOrNull, useIntensity, operation)` | nodeOrNull: NodeHandle, useIntensity: Boolean, operation: RasterSelectionLogicalOperation | DocumentCommandHandle |
| `createSetRasterSelectionFromPolygonCommand(polygon, operation, isAntialias, featherRadius)` | polygon: PolygonHandle, operation: RasterSelectionLogicalOperation, isAntialias: Boolean, featherRadius: Number | DocumentCommandHandle |
| `createSetRecolourAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: RecolourAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetRippleFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: RippleFilterParametersHandle | DocumentCommandHandle |
| `createSetSelectionCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createSetSelectiveColourAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: SelectiveColourAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetShadowsHighlightsAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ShadowsHighlightsAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetShadowsHighlightsFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ShadowsHighlightsFilterParametersHandle | DocumentCommandHandle |
| `createSetShapeBoolParamCommand(selection, key, value)` | selection: SelectionHandle, key: ShapeBoolParam, value: Boolean | DocumentCommandHandle |
| `createSetShapeCommand(selection, shape, onlyReplaceLikeShapes)` | selection: SelectionHandle, shape: ShapeHandle, onlyReplaceLikeShapes: Boolean | DocumentCommandHandle |
| `createSetShapeEnumParamCommand(selection, key, value)` | selection: SelectionHandle, key: ShapeEnumParam, value: Number | DocumentCommandHandle |
| `createSetShapeFloatParamCommand(selection, key, value, isConstrained, isSymmetrical)` | selection: SelectionHandle, key: ShapeFloatParam, value: Number, isConstrained: Boolean, isSymmetrical: Boolean | DocumentCommandHandle |
| `createSetShapeIntParamCommand(selection, key, value)` | selection: SelectionHandle, key: ShapeIntParam, value: Number | DocumentCommandHandle |
| `createSetSphericalFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: SphericalFilterParametersHandle | DocumentCommandHandle |
| `createSetSplitToningAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: SplitToningAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetSpreadDocumentPropertiesCommand(spreadNode, spreadDocumentProperties)` | spreadNode: SpreadNodeHandle, spreadDocumentProperties: SpreadDocumentPropertiesHandle | DocumentCommandHandle |
| `createSetSpreadSizeWithAnchorCommand(spreadNode, width, height, anchor)` | spreadNode: SpreadNodeHandle, width: Number, height: Number, anchor: SpatialAnchor | DocumentCommandHandle |
| `createSetStrokeAlignmentCommand(selection, strokeAlignment, contentType, useTextSelection, defaultsMode)` | selection: SelectionHandle, strokeAlignment: StrokeAlignment, contentType: ContentType, useTextSelection: Boolean, defaultsMode: LineCommandDefaultsMode | DocumentCommandHandle |
| `createSetTagColourCommand(selection, colourOrNull)` | selection: SelectionHandle, colourOrNull: ColourHandle | DocumentCommandHandle |
| `createSetTagValueForKeyCommand(selection, tagKey, tagValue)` | selection: SelectionHandle, tagKey: String, tagValue: String | DocumentCommandHandle |
| `createSetTagValueForPredefinedKeyCommand(selection, key, tagValue)` | selection: SelectionHandle, key: PredefinedTagKey, tagValue: String | DocumentCommandHandle |
| `createSetTextCommand(selection, text)` | selection: SelectionHandle, text: String | DocumentCommandHandle |
| `createSetTextFrameIgnoreBaselineGridCommand(selection, ignoreBaselineGrid)` | selection: SelectionHandle, ignoreBaselineGrid: Boolean | DocumentCommandHandle |
| `createSetTextFrameIgnoreTextWrapsCommand(selection, ignoreTextWraps)` | selection: SelectionHandle, ignoreTextWraps: Boolean | DocumentCommandHandle |
| `createSetThresholdAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ThresholdAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetToneCompressionAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ToneCompressionAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetToneStretchAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: ToneStretchAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetTransparencyFillCommand(selection, fillDescriptor, contentType, fillMask, copyTransform, useTextSelection, maintainBlendMode, restoreAspectRatio)` | selection: SelectionHandle, fillDescriptor: FillDescriptorHandle, contentType: ContentType, fillMask: FillMask, copyTransform: Boolean, useTextSelection: Boolean, maintainBlendMode: Boolean, restoreAspectRatio: Boolean | DocumentCommandHandle |
| `createSetTransparencyFillIsAnchoredToSpreadCommand(selectionHandle, isAnchoredToSpread, contentType, useTextSelection, applyToAllFills)` | selectionHandle: SelectionHandle, isAnchoredToSpread: Boolean, contentType: ContentType, useTextSelection: Boolean, applyToAllFills: Boolean | DocumentCommandHandle |
| `createSetTwirlFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: TwirlFilterParametersHandle | DocumentCommandHandle |
| `createSetUnsharpMaskFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: UnsharpMaskFilterParametersHandle | DocumentCommandHandle |
| `createSetVibranceAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: VibranceAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetVignetteFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: VignetteFilterParametersHandle | DocumentCommandHandle |
| `createSetVisibilityCommand(selection, mode, isVisible)` | selection: SelectionHandle, mode: VisibilityMode, isVisible: Boolean | DocumentCommandHandle |
| `createSetVoronoiFilterParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: VoronoiFilterParametersHandle | DocumentCommandHandle |
| `createSetWhiteBalanceAdjustmentParametersCommand(selection, parameters)` | selection: SelectionHandle, parameters: WhiteBalanceAdjustmentParametersHandle | DocumentCommandHandle |
| `createSetWindingModeCommand(selection, windingOrder)` | selection: SelectionHandle, windingOrder: WindingOrder | DocumentCommandHandle |
| `createShadowsHighlightsFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: ShadowsHighlightsFilterParametersHandle | DocumentCommandHandle |
| `createShowAllCommand()` | — | DocumentCommandHandle |
| `createSmoothCurvesCommand(selection)` | selection: SelectionHandle | DocumentCommandHandle |
| `createSmoothRasterSelectionCommand(radius)` | radius: Number | DocumentCommandHandle |
| `createSphericalFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: SphericalFilterParametersHandle | DocumentCommandHandle |
| `createSplitCurveCommand(selection, parametricDistance)` | selection: SelectionHandle, parametricDistance: Number | DocumentCommandHandle |
| `createStartRecordingMacroCommand()` | — | DocumentCommandHandle |
| `createStopRecordingMacroCommand()` | — | DocumentCommandHandle |
| `createTransformCommand(selection, transform, isMergeable, cloneRaster, correctChildren, duplicateNodes)` | selection: SelectionHandle, transform: Transform, isMergeable: Boolean, cloneRaster: Boolean, correctChildren: Boolean, duplicateNodes: Boolean | DocumentCommandHandle |
| `createTwirlFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: TwirlFilterParametersHandle | DocumentCommandHandle |
| `createUndoCommand()` | — | DocumentCommandHandle |
| `createUnlinkTextFrameCommand(node)` | node: TextNodeHandle | DocumentCommandHandle |
| `createUnlockAllCommand()` | — | DocumentCommandHandle |
| `createUnsharpMaskFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: UnsharpMaskFilterParametersHandle | DocumentCommandHandle |
| `createVignetteFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: VignetteFilterParametersHandle | DocumentCommandHandle |
| `createVoronoiFilterCommand(selection, parameters)` | selection: SelectionHandle, parameters: VoronoiFilterParametersHandle | DocumentCommandHandle |
| `enumerateNewNodes(callback)` | callback: Function | — |