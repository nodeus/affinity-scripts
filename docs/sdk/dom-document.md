# Документ, спреды, история, экспорт (SDK 33000)

> API-референс `affinity:dom` · Модуль `affinity:dom`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (29), методов: 334.

## ArtboardDocumentPropertiesApi

> Модуль `affinity:dom` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArtboardDocumentPropertiesApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ArtboardDocumentPropertiesHandle |
| `create()` | — | ArtboardDocumentPropertiesHandle |
| `getAnchorType()` | — | SpatialAnchor |
| `getDimensions()` | — | Size |
| `getDrawingScale()` | — | DrawingScaleHandle |
| `getMargin()` | — | LTRB |
| `getMarginFill()` | — | FillDescriptorHandle |
| `getUseDrawingScale()` | — | Boolean |
| `getUseMargin()` | — | Boolean |
| `setAnchorType(anchorType)` | anchorType: SpatialAnchor | — |
| `setDimensions(dimensions)` | dimensions: Size | — |
| `setDrawingScale(drawingScale)` | drawingScale: DrawingScaleHandle | — |
| `setMargin(margin)` | margin: LTRB | — |
| `setMarginFill(marginFill)` | marginFill: FillDescriptorHandle | — |
| `setUseDrawingScale(useDrawingScale)` | useDrawingScale: Boolean | — |
| `setUseMargin(useMargin)` | useMargin: Boolean | — |

## ArtboardInterfaceApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArtboardInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ArtboardInterfaceHandle |
| `getArtboardBaseBox()` | — | Rectangle |
| `getArtboardDescription()` | — | String |
| `getArtboardProperties()` | — | ArtboardPropertiesHandle |
| `getArtboardSpreadBaseBox()` | — | Rectangle |
| `getNode()` | — | NodeHandle |
| `getPhysicalRootInterface()` | — | PhysicalRootInterfaceHandle |
| `getTopOfPageMargin()` | — | Number |
| `isArtboardEnabled()` | — | Boolean |
| `isSameObject(other)` | other: ArtboardInterfaceHandle | Boolean |

## ArtboardPropertiesApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArtboardPropertiesApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getMarginsInterface()` | — | MarginsInterfaceHandle |
| `getNode()` | — | NodeHandle |
| `getPhysicalRootPropertiesInterface()` | — | PhysicalRootPropertiesInterfaceHandle |

## DocumentApi

> Модуль `affinity:dom` · методов: 54 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `close()` | — | — |
| `closeAsync(callback)` | callback: Function | — |
| `createFromOptions(option)` | option: NewDocumentOptionsHandle | DocumentHandle |
| `createFromOptionsAsync(option, callback)` | option: NewDocumentOptionsHandle, callback: Function | — |
| `createFromPreset(preset, isLandscape)` | preset: DocumentPresetHandle, isLandscape: Boolean | DocumentHandle |
| `createFromPresetAsync(preset, isLandscape, callback)` | preset: DocumentPresetHandle, isLandscape: Boolean, callback: Function | — |
| `createFromSnapshot(snapshot)` | snapshot: DocumentSnapshotHandle | DocumentHandle |
| `createFromSnapshotAsync(snapshot, callback)` | snapshot: DocumentSnapshotHandle, callback: Function | — |
| `enumerateFontNames(callback)` | callback: Function | — |
| `enumerateOpen(callback)` | callback: Function | — |
| `enumerateSnapshots(callback)` | callback: Function | — |
| `executeCommand(command, preview)` | command: DocumentCommandHandle, preview: Boolean | — |
| `executeCommandAsync(command, preview, callback)` | command: DocumentCommandHandle, preview: Boolean, callback: Function | — |
| `export(path, options, exportArea, size)` | path: String, options: FileExportOptionsHandle, exportArea: FileExportAreaHandle, size: Size | DocumentExportRecordsHandle |
| `exportAsync(path, options, exportArea, size, callback)` | path: String, options: FileExportOptionsHandle, exportArea: FileExportAreaHandle, size: Size, callback: Function | — |
| `getColourProfile()` | — | ColourProfileHandle |
| `getCurrent()` | — | DocumentHandle |
| `getCurrentAsync(callback)` | callback: Function | — |
| `getCurrentSelection()` | — | SelectionHandle |
| `getCurrentSnapshot()` | — | DocumentSnapshotHandle |
| `getCurrentSnapshotHistoryIndex()` | — | Number |
| `getCurrentSnapshotIndex()` | — | Number |
| `getCurrentSpread()` | — | SpreadNodeHandle |
| `getDpi()` | — | Number |
| `getFormat()` | — | RasterFormat |
| `getHistory()` | — | DocumentHistoryHandle |
| `getInsertionMode()` | — | InsertionMode |
| `getMaskFormat()` | — | RasterFormat |
| `getPath()` | — | String |
| `getPersistentUuid()` | — | String |
| `getRasterSelection()` | — | RasterSelectionHandle |
| `getRootNode()` | — | DocumentNodeHandle |
| `getSessionUuid()` | — | String |
| `getSnapshot(index)` | index: Number | DocumentSnapshotHandle |
| `getSnapshotCount()` | — | Number |
| `getTitle()` | — | String |
| `getUnitValueConverter()` | — | UnitValueConverterHandle |
| `getUnits()` | — | UnitType |
| `getViewDpi()` | — | Number |
| `isDirty()` | — | Boolean |
| `isEmbedded()` | — | Boolean |
| `isOpen()` | — | Boolean |
| `isReadOnly()` | — | Boolean |
| `isSameObject(other)` | other: DocumentHandle | Boolean |
| `load(path, options)` | path: String, options: LoadDocumentOptionsHandle | DocumentLoadResult |
| `loadAsync(path, options, callback)` | path: String, options: LoadDocumentOptionsHandle, callback: Function | — |
| `mustSaveAs()` | — | Boolean |
| `needsSaving()` | — | Boolean |
| `save()` | — | — |
| `saveAs(path)` | path: String | — |
| `saveAsAsync(path, callback)` | path: String, callback: Function | — |
| `saveAsPackage(path, policy)` | path: String, policy: PackageResourcesPolicy | — |
| `saveAsPackageAsync(path, policy, callback)` | path: String, policy: PackageResourcesPolicy, callback: Function | — |
| `saveAsync(callback)` | callback: Function | — |

## DocumentExportRecordApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentExportRecordApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getErrorMessage()` | — | String |
| `getPath()` | — | String |
| `getResult()` | — | ErrorCode |
| `getWarningMessage()` | — | String |
| `hasWarnings()` | — | Boolean |

## DocumentExportRecordsApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentExportRecordsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerate(callback)` | callback: Function | — |
| `getCount()` | — | Number |

## DocumentHistoryApi

> Модуль `affinity:dom` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentHistoryApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canRedo()` | — | Boolean |
| `canUndo()` | — | Boolean |
| `enumerateItems(callback)` | callback: Function | — |
| `getItem(index)` | index: Number | DocumentHistoryItemHandle |
| `getRedoDescription()` | — | String |
| `getSize()` | — | Number |
| `getUndoDescription()` | — | String |
| `getUndoPosition()` | — | Number |

## DocumentHistoryItemApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentHistoryItemApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `dispose()` | — | — |
| `getCommand()` | — | DocumentCommandHandle |
| `getDescription()` | — | String |
| `getThumbnail()` | — | RasterObjectHandle |
| `hasAlternateFutures()` | — | Boolean |

## DocumentNodeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DocumentNodeHandle |
| `getPageCount()` | — | Number |
| `getSpreadCount()` | — | Number |

## DocumentPresetApi

> Модуль `affinity:dom` · методов: 22 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentPresetApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateAll(callback)` | callback: Function | — |
| `getBleed()` | — | LTRB |
| `getColourProfileName()` | — | String |
| `getCreateArtboard()` | — | Boolean |
| `getDoublePageStart()` | — | Boolean |
| `getDpi()` | — | Number |
| `getDrawingScale()` | — | DrawingScaleHandle |
| `getFacing()` | — | Boolean |
| `getHeight()` | — | Number |
| `getImagePlacement()` | — | ImagePlacement |
| `getIsFavourite()` | — | Boolean |
| `getIsMultiPage()` | — | Boolean |
| `getIsTransparentBackground()` | — | Boolean |
| `getMargins()` | — | LTRB |
| `getMarginsEnabled()` | — | Boolean |
| `getName()` | — | String |
| `getRasterFormat()` | — | RasterFormat |
| `getUnits()` | — | UnitType |
| `getUseDrawingScale()` | — | Boolean |
| `getVerticalStack()` | — | Boolean |
| `getViewDpi()` | — | Number |
| `getWidth()` | — | Number |

## DocumentPropertiesApi

> Модуль `affinity:dom` · методов: 37 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentPropertiesApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DocumentPropertiesHandle |
| `create()` | — | DocumentPropertiesHandle |
| `getAssignColourProfile()` | — | Boolean |
| `getBleed()` | — | LTRB |
| `getBleedFill()` | — | FillDescriptorHandle |
| `getColourFormat()` | — | RasterFormat |
| `getColourProfile()` | — | ColourProfileHandle |
| `getDimensions()` | — | Size |
| `getDpi()` | — | Number |
| `getDrawingScale()` | — | DrawingScaleHandle |
| `getImageResourcePolicy()` | — | ImagePlacement |
| `getIsFacingPages()` | — | Boolean |
| `getIsFullSpreadStart()` | — | Boolean |
| `getIsTransparent()` | — | Boolean |
| `getIsVerticalStack()` | — | Boolean |
| `getLinkTextFiles()` | — | Boolean |
| `getPreserveTextStyles()` | — | Boolean |
| `getResamplerType()` | — | RasterResamplerType |
| `getShouldReflowPages()` | — | Boolean |
| `getUnits()` | — | UnitType |
| `setAssignColourProfile(assignColourProfile)` | assignColourProfile: Boolean | — |
| `setBleed(bleed)` | bleed: LTRB | — |
| `setBleedFill(bleedFill)` | bleedFill: FillDescriptorHandle | — |
| `setColourFormatAndProfile(format, colourProfile)` | format: RasterFormat, colourProfile: ColourProfileHandle | — |
| `setDimensions(dimensions)` | dimensions: Size | — |
| `setDpi(dpi)` | dpi: Number | — |
| `setDrawingScale(drawingScale)` | drawingScale: DrawingScaleHandle | — |
| `setImageResourcePolicy(imageResourcePolicy)` | imageResourcePolicy: ImagePlacement | — |
| `setIsFacingPages(isFacingPages)` | isFacingPages: Boolean | — |
| `setIsFullSpreadStart(isFullSpreadStart)` | isFullSpreadStart: Boolean | — |
| `setIsTransparent(isTransparent)` | isTransparent: Boolean | — |
| `setIsVerticalStack(isVerticalStack)` | isVerticalStack: Boolean | — |
| `setLinkTextFiles(linkTextFiles)` | linkTextFiles: Boolean | — |
| `setPreserveTextStyles(preserveTextStyles)` | preserveTextStyles: Boolean | — |
| `setResamplerType(resamplerType)` | resamplerType: RasterResamplerType | — |
| `setShouldReflowPages(shouldReflowPages)` | shouldReflowPages: Boolean | — |
| `setUnits(unitType)` | unitType: UnitType | — |

## DocumentSnapshotApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentSnapshotApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getDescription()` | — | String |
| `getFormat()` | — | RasterFormat |

## DrawingScaleApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DrawingScaleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(left, right)` | left: UnitValue, right: UnitValue | DrawingScaleHandle |
| `createFromIntegers(left, right, simplifyFaction)` | left: Number, right: Number, simplifyFaction: Boolean | DrawingScaleHandle |
| `createFromString(scaleString, simplifyFaction, simplifyDecimalPlaces, allowOneToOne)` | scaleString: String, simplifyFaction: Boolean, simplifyDecimalPlaces: Number, allowOneToOne: Boolean | DrawingScaleHandle |
| `enumerateDefaults(unitType, callback)` | unitType: UnitType, callback: Function | — |
| `getAsString(useTightFormat, showUnits, indicateApproximations)` | useTightFormat: Boolean, showUnits: Boolean, indicateApproximations: Boolean | String |
| `getLeftValue()` | — | UnitValue |
| `getRightValue()` | — | UnitValue |

## ExportConfigApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExportConfigApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `appendFormat(exportFormat)` | exportFormat: ExportFormatHandle | — |
| `deleteFormat(index)` | index: Number | — |
| `enumerateFormats(callback)` | callback: Function | — |
| `getFormatCount()` | — | Number |
| `replaceFormat(index, exportFormat)` | index: Number, exportFormat: ExportFormatHandle | — |

## ExportFormatApi

> Модуль `affinity:dom` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExportFormatApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `appendSize(exportSize)` | exportSize: ExportSizeHandle | — |
| `createWithFileExportOptions(fileExportOptions)` | fileExportOptions: FileExportOptionsHandle | ExportFormatHandle |
| `deleteSize(index)` | index: Number | — |
| `enumerateSizes(callback)` | callback: Function | — |
| `getSizeCount()` | — | Number |
| `replaceSize(index, exportSize)` | index: Number, exportSize: ExportSizeHandle | — |

## ExportScaleApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExportScaleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createWithHeight(height)` | height: Number | ExportScaleHandle |
| `createWithMultiplier(multiplier)` | multiplier: Number | ExportScaleHandle |
| `createWithMultiplierSquare(multiplier, size)` | multiplier: Number, size: Number | ExportScaleHandle |
| `createWithPreset(scalePreset)` | scalePreset: ExportScalePreset | ExportScaleHandle |
| `createWithSquare(size)` | size: Number | ExportScaleHandle |
| `createWithWidth(width)` | width: Number | ExportScaleHandle |
| `createWithWidthHeight(width, height)` | width: Number, height: Number | ExportScaleHandle |
| `getHeight()` | — | Number |
| `getMultiplier()` | — | Number |
| `getSize()` | — | Number |
| `getSizeType()` | — | ExportScaleSizeType |
| `getWidth()` | — | Number |
| `hasMultiplier()` | — | Boolean |

## ExportSizeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExportSizeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createWithExportScale(exportScale)` | exportScale: ExportScaleHandle | ExportSizeHandle |
| `getExportScale()` | — | ExportScaleHandle |
| `setExportScale(exportScale)` | exportScale: ExportScaleHandle | — |

## FileExportAreaApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/FileExportAreaApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FileExportAreaHandle |
| `createForArtboard(artboard)` | artboard: ArtboardInterfaceHandle | FileExportAreaHandle |
| `createForCurrentPage()` | — | FileExportAreaHandle |
| `createForCurrentSpread()` | — | FileExportAreaHandle |
| `createForPages(pages)` | pages: String | FileExportAreaHandle |
| `createForSelection(selection)` | selection: SelectionHandle | FileExportAreaHandle |
| `createForSelectionArea(selection)` | selection: SelectionHandle | FileExportAreaHandle |
| `createForSpreads(pages)` | pages: String | FileExportAreaHandle |
| `createForWholeDocument()` | — | FileExportAreaHandle |

## FileExportOptionsApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/FileExportOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createForCanvaExport(dpi)` | dpi: Number | FileExportOptionsHandle |
| `createWithPresetName(presetName)` | presetName: String | FileExportOptionsHandle |
| `enumeratePresetNames(callback)` | callback: Function | — |

## ImportOptionsApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/ImportOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `asLoadDocumentOptions()` | — | LoadDocumentOptionsHandle |
| `createDefault()` | — | ImportOptionsHandle |
| `setBackgroundColour(backgroundColour)` | backgroundColour: ColourHandle | — |
| `setLayoutSelectionToAllPages()` | — | — |
| `setLayoutSelectionToModel()` | — | — |
| `setLayoutSelectionToSingle(layoutName)` | layoutName: String | — |
| `setModelUnits(unitType)` | unitType: UnitType | — |
| `setOverrideColour(overrideColour)` | overrideColour: ColourHandle | — |
| `setOverrideLineWeights(overrideLineWeights)` | overrideLineWeights: Boolean | — |
| `setRemoveHiddenItems(removeHiddenItems)` | removeHiddenItems: Boolean | — |
| `setShowHandles(showHandles)` | showHandles: Boolean | — |

## LoadDocumentOptionsApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/LoadDocumentOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createDefault()` | — | LoadDocumentOptionsHandle |
| `setColourSpace(colourSpace)` | colourSpace: ColourSpaceType | — |
| `setDpi(dpi)` | dpi: Number | — |
| `setFormat(format)` | format: RasterFormat | — |
| `setHostDpi(dpi)` | dpi: Number | — |
| `setLoadMode(loadMode)` | loadMode: DocumentLoadMode | — |
| `setPassword(password)` | password: String | — |

## MarginsInterfaceApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/MarginsInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getMarginFill()` | — | FillDescriptorHandle |
| `getMargins()` | — | LTRB |
| `getUseMargins()` | — | Boolean |

## NewDocumentOptionsApi

> Модуль `affinity:dom` · методов: 26 · [SDK](https://sdk.affinity.studio/33000/js/apis/NewDocumentOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | NewDocumentOptionsHandle |
| `createDefault()` | — | NewDocumentOptionsHandle |
| `createFromPreset(preset)` | preset: DocumentPresetHandle | NewDocumentOptionsHandle |
| `getMaxDpi(unit, dimension)` | unit: UnitType, dimension: Number | Number |
| `getMaxSize(unit, dpi)` | unit: UnitType, dpi: Number | Number |
| `setBleed(bleed)` | bleed: LTRB | — |
| `setColourProfile(colourProfile)` | colourProfile: ColourProfileHandle | — |
| `setCreateArtboard(createArtboard)` | createArtboard: Boolean | — |
| `setCreateMaster(createMaster)` | createMaster: Boolean | — |
| `setDpi(dpi)` | dpi: Number | — |
| `setDrawingScale(drawingScale)` | drawingScale: DrawingScaleHandle | — |
| `setHeight(height)` | height: Number | — |
| `setImagePlacement(imagePlacement)` | imagePlacement: ImagePlacement | — |
| `setIsDoublePageStart(isDoublePageStart)` | isDoublePageStart: Boolean | — |
| `setIsFacing(isFacing)` | isFacing: Boolean | — |
| `setIsMultiPage(isMultiPage)` | isMultiPage: Boolean | — |
| `setIsTransparentBackground(isTransparent)` | isTransparent: Boolean | — |
| `setIsVerticalStack(isVerticalStack)` | isVerticalStack: Boolean | — |
| `setMargins(margins)` | margins: LTRB | — |
| `setMarginsEnabled(marginsEnabled)` | marginsEnabled: Boolean | — |
| `setPageCount(pageCount)` | pageCount: Number | — |
| `setRasterFormat(format)` | format: RasterFormat | — |
| `setUnits(unitType)` | unitType: UnitType | — |
| `setUseDrawingScale(useDrawingScale)` | useDrawingScale: Boolean | — |
| `setViewDpi(viewDpi)` | viewDpi: Number | — |
| `setWidth(width)` | width: Number | — |

## PageBoxInterfaceApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/PageBoxInterfaceApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getPageBoundingBox(pageBoundingBoxType)` | pageBoundingBoxType: PageBoundingBoxType | Rectangle |

## PageDocumentPropertiesApi

> Модуль `affinity:dom` · методов: 18 · [SDK](https://sdk.affinity.studio/33000/js/apis/PageDocumentPropertiesApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PageDocumentPropertiesHandle |
| `create()` | — | PageDocumentPropertiesHandle |
| `getAnchorType()` | — | SpatialAnchor |
| `getDimensions()` | — | Size |
| `getMargin()` | — | LTRB |
| `getMarginFill()` | — | FillDescriptorHandle |
| `getMoveFollowingPages()` | — | Boolean |
| `getPageOriginDelta()` | — | PageOriginDelta |
| `getUseMargin()` | — | Boolean |
| `getUseMasterMargin()` | — | Boolean |
| `setAnchorType(anchorType)` | anchorType: SpatialAnchor | — |
| `setDimensions(dimensions)` | dimensions: Size | — |
| `setMargin(margin)` | margin: LTRB | — |
| `setMarginFill(marginFill)` | marginFill: FillDescriptorHandle | — |
| `setMoveFollowingPages(moveFollowingPages)` | moveFollowingPages: Boolean | — |
| `setPageOriginDelta(pageOriginDelta)` | pageOriginDelta: PageOriginDelta | — |
| `setUseMargin(useMargin)` | useMargin: Boolean | — |
| `setUseMasterMargin(useMasterMargin)` | useMasterMargin: Boolean | — |

## SpreadDocumentPropertiesApi

> Модуль `affinity:dom` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/SpreadDocumentPropertiesApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | SpreadDocumentPropertiesHandle |
| `create()` | — | SpreadDocumentPropertiesHandle |
| `getReflowPages()` | — | Boolean |
| `getResamplerType()` | — | RasterResamplerType |
| `getUseMasterDrawingScale()` | — | Boolean |
| `getUseMasterMargin()` | — | Boolean |
| `setReflowPages(reflowPages)` | reflowPages: Boolean | — |
| `setResamplerType(resamplerType)` | resamplerType: RasterResamplerType | — |
| `setUseMasterDrawingScale(useMasterDrawingScale)` | useMasterDrawingScale: Boolean | — |
| `setUseMasterMargin(useMasterMargin)` | useMasterMargin: Boolean | — |

## SpreadNodeApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/SpreadNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateArtboards(callback)` | callback: Function | — |
| `fromNode(node)` | node: NodeHandle | SpreadNodeHandle |
| `getArtboard(index)` | index: Number | ArtboardInterfaceHandle |
| `getArtboardCount()` | — | Number |
| `getFirstPageIndex()` | — | Number |
| `getLastPageIndex()` | — | Number |
| `getPageIndexOfBox(rect, relativeToSpread)` | rect: Rectangle, relativeToSpread: Boolean | Number |
| `getPageIndexOfPoint(point, relativeToSpread)` | point: Point, relativeToSpread: Boolean | Number |
| `getPhysicalRootInterface()` | — | PhysicalRootInterfaceHandle |
| `getPhysicalRootPropertiesInterface()` | — | PhysicalRootPropertiesInterfaceHandle |
| `getSpreadExtents(includeSpread, includeBleed, includeChildren)` | includeSpread: Boolean, includeBleed: Boolean, includeChildren: Boolean | Rectangle |
| `isFirstPage()` | — | Boolean |
| `isLastPage()` | — | Boolean |

## TextVisibilityOptionsApi

> Модуль `affinity:dom` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/TextVisibilityOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `anySet()` | — | Boolean |
| `clone()` | — | TextVisibilityOptionsHandle |
| `create()` | — | TextVisibilityOptionsHandle |
| `equals(other)` | other: TextVisibilityOptionsHandle | Boolean |
| `getHighlightFields()` | — | Boolean |
| `getShowAnchors()` | — | Boolean |
| `getShowIndexMarks()` | — | Boolean |
| `getShowNoteMarks()` | — | Boolean |
| `getShowSpecialCharacters()` | — | Boolean |
| `setHighlightFields(value)` | value: Boolean | — |
| `setNewViewDefaults()` | — | — |
| `setNone()` | — | — |
| `setShowAnchors(value)` | value: Boolean | — |
| `setShowIndexMarks(value)` | value: Boolean | — |
| `setShowNoteMarks(value)` | value: Boolean | — |
| `setShowSpecialCharacters(value)` | value: Boolean | — |

## VisibilityTestOptionsApi

> Модуль `affinity:dom` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/VisibilityTestOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | VisibilityTestOptionsHandle |
| `create()` | — | VisibilityTestOptionsHandle |
| `getAllowInvisibleLayers()` | — | Boolean |
| `getApplyExportableVisibility()` | — | Boolean |
| `getClipToSpread()` | — | Boolean |
| `getIgnoreVisibilityFlags()` | — | Boolean |
| `getShowEmptyRects()` | — | Boolean |
| `getShowPictureFrames()` | — | Boolean |
| `getTextVisibilityOptions()` | — | TextVisibilityOptionsHandle |
| `setAllowInvisibleLayers(value)` | value: Boolean | — |
| `setApplyExportableVisibility(value)` | value: Boolean | — |
| `setClipToSpread(value)` | value: Boolean | — |
| `setIgnoreVisibilityFlags(value)` | value: Boolean | — |
| `setShowEmptyRects(value)` | value: Boolean | — |
| `setShowPictureFrames(value)` | value: Boolean | — |
| `setTextVisibilityOptions(textVisibilityOptions)` | textVisibilityOptions: TextVisibilityOptionsHandle | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `addGuides.js`
- `addPoints.js`
- `adjustPageItems.js`
- `alignToPage.js`
- `arrowheads.js`
- `artboardGrid.js`
- `bitmapWriter.js`
- `boldItalics.js`
- `breakFrame.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cornerEffects.js`
- `countSelectedItems.js`
- `cropMarks.js`
- `divideLength.js`
- `makeGrid.js`
- `makeNumbersSequence.js`
- `opticalBackward.js`
- `opticalForward.js`
- `pathEffects.js`
- `randomise.js`
- `roundAnyCorner.js`
- `selectObjects.js`
- `setDocumentFormat.js`
- `splitStory.js`
- `stepAndRepeat.js`
- `strokesWeightDown.js`
- `strokesWeightUp.js`
- `swapObjects.js`
- `tableFromJson.js`
