# Affinity SDK v3.3.0 — API Reference

> Source: https://sdk.affinity.studio/33000/ (fetched 2026-09-16).
> Scripting is in beta; this reference may contain errors and omissions.
> All script modules are imported with `require('affinity:<module>')`.

---

## 1. Modules Overview (20)

| Module | Contents |
|--------|----------|
| `affinity:application` | ApplicationApi, ApplicationSettingsApi, EnvironmentApi; enums `BuildKind`, `EnvironmentPermission`, `UiParadigm` |
| `affinity:brushes` | Brush APIs (raster/brush dynamics) |
| `affinity:buffer` | BufferApi |
| `affinity:colours` | ColourApi, ColourProfileApi, ColourProfileSetApi, GradientApi; classes `RGBA8`, `RGBA16`, `RGBAuf`, `CMYKA8`, `CMYKAf`, `IA8`, `IA16`, `LABA16`, `M8`, `M16`, `Mf`, `HSLAf`, `ColourStop`; enum `ColourSpaceType` |
| `affinity:commands` | AddChildNodesCommandBuilderApi, CommandApi, CompoundCommandBuilderApi, DocumentCommandApi, SetHatchFillAttributesCommandBuilderApi; enums `GroupTransformAnchor/Order/Type`, `InsertionMode`, `LineCommandDefaultsMode` |
| `affinity:common` | Shared enums: `BlendMode`, `UnitType`, `UnitCategory`, `UserUnitType`, `UnitTypePower`, `UnitValue`, classes `UnitValue`, `UnitValueConverter` consumers |
| `affinity:dom` | Document + all node/definition APIs, selections, spreads (largest module, ~200 APIs) |
| `affinity:fills` | FillApi, FillDescriptorApi, GradientFillApi, SolidFillApi, BitmapFillApi, HatchFillApi, MeshFillApi, DiffusionFillApi, ColourMeshApi, DiffusionCurveSetApi, NoFillApi; enums `FillType`, `FillMask`, `GradientFillType`, `DiffusionCurveKind/Side` |
| `affinity:fonts` | FontApi, FontCollectionApi, FontFamilyApi, PanoseApi; enums `FontField`, `FontMatch`, `FontWeight`, `FontWidth`, `PanoseType` |
| `affinity:fs` | FileApi, FileSystemApi, DirectoryIteratorApi; enums `FileOrigin`, `FilePermissions`, `FileType`, `PermOptions` |
| `affinity:geometry` | Curve/CurveBuilder/PolyCurve/Polygon/Spline/Transform/Rectangle/Point/Vector APIs + all Shape* APIs (Rectangle, Ellipse, Polygon, Star, Spiral, Pie, QRCode, Cat 1–4, Cog, Crescent, Tear, Trapezoid, Triangle, Diamond, Heart, Cloud, Callout, Arrow, Segment); classes `Point`, `Rectangle`, `Transform`, `Vector`, `CurveNode`, `CubicBezier`, `Size`, `BoundingBox`; enums `ShapeType`, `ShapeCornerType`, `ShapeCornerIndex`, `ShapeBool/Int/Float/EnumParam`, `CurveNodeType/Style`, `CurveCornerType`, `WindingOrder`, `QRPayloadType`, `WifiEncryptionType`, `SplineProfile`, `MeshDirection`, `ShapeArrowEndStyle`, `ShapeMajorAxis`, `ShapeSpiralStyle` |
| `affinity:hatches` | HatchFillApi, HatchLineApi, HatchPatternApi |
| `affinity:layereffects` | LayerEffectApi, LayerEffectsInterfaceApi + all effect APIs (BevelEmboss, Outline, PhongBevel, InnerShadow, InnerGlow, ColourOverlay, GradientOverlay, OuterGlow, OuterShadow, GaussianBlur); enum `LayerEffectType` |
| `affinity:linestyles` | LineStyleApi, LineStyleDescriptorApi, LineStyleInterfaceApi; enums `LineCap`, `LineJoin`, `LineType`, `LineStyleMask`, `StrokeAlignment`, `StrokeFillType`, `CapsType`, `ArrowHeadStyle` (+ ArrowHeadApi) |
| `affinity:network` | HttpRequestApi, HttpResponseApi; enums `RequestMethod`, `HttpStatusCode` |
| `affinity:os` | OSApi |
| `affinity:raster` | RasterObjectApi, raster node/brush/pixel-reader APIs, RasterSelectionApi; enums `RasterFormat`, `RasterFillMode`, `RasterIntent`, `RasterObjectType`, `RasterResamplerType`, `RasterExtendType`, `RasterSelectionLogicalOperation`, `RasterSelectionOutlineAlignment`, `RasterFloodFillSamplingSource`, `RasterBrushSubSyncMode`, `RasterBrushTextureMode`, `SamplingSource` |
| `affinity:story` | StoryApi, StoryBuilderApi, StoryDeltaApi, StoryInterfaceApi, StoryRangeApi, GlyphAttsApi, ParagraphAttsApi + all glyph APIs (Char, HardBreak, Pin, Field, FillerText, ListNumber, PageNumber, NoteNumber, IndexMark, IndentToHere, RightIndentTab, CrossReference, DataMerge, Rangenote, RunningHeader, SectionName, DocumentField, Anchor, CapturedDateTime, CustomField, GlyphIndex); class `StoryRange`; enums `GlyphType`, `GlyphAttDouble/StringType`, `ParagraphAlignXType`, `ParagraphAttDouble/StringType`, `ParagraphLeadingType`, `ParagraphLineBreakModeType`, `ParagraphUseSpaceBeforeMode`, `ParagraphStartAtHardBreakType`, `ParagraphPDFExportTagType`, `HardBreakType`, `SoftBreakType`, `SuperSubType`, `LeadingOverrideType`, `OpticalAlignmentType`, `TypographicLineType`, `WordPartType`, `StoryIoFormat`, `FillerTextType`, `FieldDataType`, `DocumentFieldType`, `DataMergeSourceType`, `NoteType`, `NotePosition`, `PageNumberType`, `TableAxis`, `TocRoleType`, `CrossReferenceSubGlyphType`, `CrossReferenceTargetType`, `CapsType` |
| `affinity:timers` | TimerApi |
| `affinity:ui` | DialogApi + all Dialog* control APIs (Column, ColumnStack, Group, ComboBox, CheckBox, Switch, TextBox, TextControl, BoolControl, EnumControl, UnitValueEditor, ColourPicker, FillEditor, StrokeEditor, FontPicker, RadioGroup, Button, ButtonSet, StaticText, SpatialAnchor); UiApi; enums `DialogItemType`, `DialogResult` |

---

## 2. Application (`affinity:application`)

Singleton access point. Typical usage:

```js
const { ... } = require('affinity:application'); // ApplicationApi surface
```

### ApplicationApi methods (getters)

`getArgC`, `getArgV`, `getBuildKind`, `getBuildVersion`, `getCompileDate`,
`getDocumentVersion`, `getMajorVersion`, `getMinorVersion`, `getPlatformName`,
`getProductCopyrightMessage`, `getProductFullName`, `getProductLongName`,
`getProductPrimaryFileExtension`, `getProductShortName`, `getProductVersionName`,
`getResourcesPath`, `getRevisionVersion`, `getShortVersion`, `getSuiteFullName`,
`getUiParadigm`, `getUserDesktopPath`, `getVersion`

In JSLib these surface as properties: `app.version`, `app.platformName`,
`app.userDesktopPath`, `app.documents`, `app.settings`, plus `app.alert /
app.confirm / app.prompt / app.chooseFile` (and `*Async` variants).

### ApplicationSettingsApi

`app.settings.loadPSDWithEditableText`, `app.settings.undoLimit`.

### EnvironmentApi / OSApi

`EnvironmentPermission` enum; `OSApi` in `affinity:os`.
If a command returns `NOT_ALLOWED`, the user restricted AI/FS/Network in settings.

---

## 3. Document (`affinity:dom` — DocumentApi)

### Methods

| Method | Notes |
|--------|-------|
| `getCurrent` / `getCurrentAsync` | active document |
| `enumerateOpen` | all open documents |
| `load` / `loadAsync` | open by path |
| `createFromOptions` / `createFromOptionsAsync` | new document |
| `createFromPreset` / `createFromPresetAsync` | new from preset |
| `createFromSnapshot` / `createFromSnapshotAsync` | new from snapshot |
| `save` / `saveAsync`, `saveAs` / `saveAsAsync`, `saveAsPackage` / `saveAsPackageAsync` | persistence |
| `close` / `closeAsync` | close |
| `export` / `exportAsync` | export |
| `executeCommand` / `executeCommandAsync` | **all mutations go through this** |
| `getCurrentSelection` | current selection |
| `getCurrentSpread` | spread being edited |
| `getRootNode` | document root |
| `getHistory` | undo history |
| `getRasterSelection` | pixel selection |
| `getUnits` / `getUnitValueConverter` | units |
| `getDpi` / `getViewDpi`, `getFormat`, `getMaskFormat` | document props |
| `getPath`, `getTitle`, `getColourProfile` | identity |
| `getSnapshot`, `getSnapshotCount`, `enumerateSnapshots`, `getCurrentSnapshot`, `getCurrentSnapshotIndex`, `getCurrentSnapshotHistoryIndex` | snapshots |
| `getInsertionMode` | insertion mode |
| `getPersistentUuid`, `getSessionUuid` | identity |
| `isDirty`, `isEmbedded`, `isOpen`, `isReadOnly`, `isSameObject`, `mustSaveAs`, `needsSaving` | state queries |
| `enumerateFontNames` | fonts in use |

### Critical rule

Set the current spread before editing:

```js
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
```

---

## 4. Commands (`affinity:commands` — DocumentCommandApi)

Factory methods are named `create<Name>Command`. Key groups:

**Structure / selection:** `createAddShapeCommand`, `createDeleteNodesCommand`,
`createSetSelectionCommand`, `createSelectAllCommand`, `createShowAllCommand`,
`createUnlockAllCommand`, `createMoveNodesCommand`, `createMoveMappedNodesCommand`,
`createGroupTransformCommand`, `createTransformCommand`, `createSetCurrentSpreadCommand`,
`createSetArtboardEnabledCommand`, `createAddArtboardCommand`,
`createSetSpreadSizeWithAnchorCommand`, `createSetArtboardSizeWithAnchorCommand`,
`createSetArtboardDocumentPropertiesCommand`, `createSetSpreadDocumentPropertiesCommand`,
`createSetPageDocumentPropertiesCommand`, `createSetDocumentPropertiesCommand`,
`createSetDocumentUnitsCommand`, `createConvertDocumentFormatCommand`.

**Appearance:** `createSetOpacityCommand`, `createSetBlendModeCommand`,
`createSetBlendGammaCommand`, `createSetBlendRangesCommand`,
`createSetBrushFillCommand`, `createSetPenFillCommand`,
`createSetTransparencyFillCommand`, (+ `...IsAnchoredToSpread`, `...Opacity` variants),
`createSetLineStyleCommand`, `createSetLineStyleDescriptorCommand`,
`createSetLineFillOpacityCommand`, `createSetStrokeAlignmentCommand`,
`createSetWindingModeCommand`, `createSetAntialiasingModeCommand`,
`createSetVisibilityCommand`, `createSetEditableCommand`, `createSetDescriptionCommand`.

**Shapes/curves:** `createSetShapeCommand`, `createSetShapeBool/Int/Float/EnumParamCommand`,
`createSetCurvesCommand`, `createAddCurveCommand`, `createAddCurveNodeCommand`,
`createDeleteCurveNodesCommand`, `createSetCurveNodeStyleCommand`,
`createSplitCurveCommand`, `createJoinCurvesCommand`, `createMergeCurvesCommand`,
`createSeparateCurvesCommand`, `createReverseCurvesCommand`, `createSmoothCurvesCommand`,
`createBreakCurvesCommand`, `createConvertToCurvesCommand`,
`createBoolOpUnion/Subtract/Intersect/XorCommand`, `createDivideShapesCommand`,
`createKnifeCutCommand`, `createScissorCutCommand`, `createFlattenCommand`,
`createMergeDown/Selected/VisibleCommand`, `createRasteriseObjectsCommand`.

**Text:** `createSetTextCommand`, `createInsertGlyphCommand`, `createFormatTextCommand`,
`createLinkTextFrameCommand`, `createUnlinkTextFrameCommand`,
`createPopulatePictureFrameCommand`, `createSetTextFrameIgnoreBaselineGridCommand`,
`createSetTextFrameIgnoreTextWrapsCommand`.

**History/preview:** `createUndoCommand`, `createRedoCommand`, `createSetHistoryIndexCommand`,
`createCycleAlternateFuturesCommand`, `createClearPreviewsCommand` (call after preview runs),
`createSetCurrentSnapshotCommand`, `createSetCurrentSnapshotFromHistoryItemCommand`,
`createAdd/Delete/RestoreDocumentSnapshotCommand`.

**Guides/tags/embedded:** `createAdd/Move/RemoveGuideCommand`, `createSetGuidesColourCommand`,
`createSetTagColourCommand`, `createSetTagValueForKey/ForPredefinedKeyCommand`,
`createSetEmbeddedDocument*Command` (layer visibility, artboard/spread, PDF passthrough, bounding box).

**Adjustments/filters:** `createSet<Name>AdjustmentParametersCommand` for every adjustment
(Exposure, Levels, Curves, BrightnessContrast, ShadowsHighlights, BlackAndWhite, Recolour,
Posterise, SplitToning, Threshold, WhiteBalance, ColourBalance, Vibrance, SelectiveColour,
Normals, HSLShift, ToneCompression, ToneStretch) and `create<Name>FilterCommand` +
`createSet<Name>FilterParametersCommand` for every filter (Gaussian/Box/Bilateral/Median/
Maximum/Minimum/Motion/Radial/Field/DepthOfField/Lens/Defringe/Denoise/Diffuse/DiffuseGlow/
AddNoise/Bloom/Clarity/UnsharpMask/HighPass/Pixelate/Halftone/Ripple/Twirl/Spherical/
PinchPunch/Vignette/Voronoi + ShadowsHighlights filter).

**Layer effects:** `createSet/Duplicate/Remove/Move<Effect>...Command` for all 10 effects
(BevelEmboss, Outline, PhongBevel, InnerShadow, InnerGlow, ColourOverlay, GradientOverlay,
OuterGlow, OuterShadow, GaussianBlur) + `createSetAllLayerEffectsScaleWithObjectCommand`,
`createRemoveAllLayerEffectsCommand`.

**Raster selection & ops:** `createRasterSelectAll/Deselect/Reselect/InvertSelectionCommand`,
`createSetRasterSelectionFromPolygon/FromObjectCommand`, grow/shrink/feather/smooth/outline,
color-range selects (Reds/Greens/Blues/Shadows/Midtones/Highlights/Opaque/Transparent/
PartiallyTransparent), edge detects, `createRasterFill/FloodFill/FloodSelectCommand`,
`createRasterPolarToRectangular/RectangularToPolarCommand`, auto (Colours/Contrast/Levels/WhiteBalance).

**AI (new in 3.x):** `createGenerateImageCommand`, `createGenerativeEditImageCommand`,
`createDetectDepthCommand`, `createColouriseCommand`, `createRemoveBackgroundCommand`,
`createSelectSubjectCommand`, `createImageTraceCommand`.

**Macros:** `createImport/Export/ReplayMacroCommand`, `createClearMacroCommand`,
`createStart/StopRecordingMacroCommand`.

### Builders

- `AddChildNodesCommandBuilder` — batch node creation; `createCommand(preview, NodeChildType.Main)`.
- `CompoundCommandBuilder` — combine commands into one undo step.
- `SetHatchFillAttributesCommandBuilder` — hatch fill attributes.
- `NodeChildType` enum (`affinity:dom`): `Main`, etc. `NodeMoveType` (`affinity:dom`): `Inside`, etc.

---

## 5. Nodes (`affinity:dom` — NodeApi + node type APIs)

`NodeApi` is interface-based: `getParent`, `getFirstChild`/`getLastChild`,
`getNextSibling`/`getPreviousSibling`, `moveToParent/FirstChild/LastChild/NextSibling/PreviousSibling`,
`getDocument`, `isSameNode`, `fromSelectable`, plus interface getters:
`getBaseBoxInterface`, `getTransformInterface`, `getBlendModeInterface`,
`getVisibilityInterface`, `getEditabilityInterface`, `getDescriptionInterface`,
`getTagInterface`, `getLayerEffectsInterface`, `getExportableInterface`,
`getCurvesInterface` (curves), `getStoryInterface` (text), `getLineStyleInterface` (strokes),
`getRasterInterface`, `getImageResourceInterface`, `getArtboardInterface`,
`getTextFrameInterface`, `getPageBoxInterface`, `getMarginsInterface`,
`getPictureFrameInterface`, `getBrushFillInterface`, `getTransparencyInterface`,
`getCompoundOperationInterface`, `getPhysicalRootInterface/PropertiesInterface`.

Box queries: `getLocalBaseBox/LineBox/VisibleBox`, `getSpreadBaseBox/LineBox/VisibleBox`,
`getExactSpreadBaseBox/VisibleBox`, `getContentExtentsBox`, `getContentExtentsBoxOfChildren`,
`getTransformedLineBox`, `getBaseToSpreadTransform`, `getLocalToSpreadTransform`,
`getSpreadToBaseTransform`.

Node types (each has `*NodeApi` + `*NodeDefinitionApi`): `Document`, `Spread`,
`Container`/`Group`, `Shape`, `PolyCurve`, `Vector`, `Logical`/`ColouredLogical`,
`Physical`, `Raster` (+ `Filter`, `Adjustment`, `Pattern`, `Enclosure`), `Image`,
`EmbeddedDocument`, `ArtText`, `FrameText`, `ShapeText`, `ShapePathText`,
`CurvePathText`, `PolyCurveText`, `TableText`, `Measurement`, `Develop`.

Selections: `SelectionApi`, `SelectionItemApi`, `SelectableApi`, `TextSelectionApi`,
`SubSelectionApi` (+ CurveNode/CurveEdge/Table/Fill/LineFill/Mesh/Transparency variants).

---

## 6. Geometry (`affinity:geometry`)

- `TransformApi`: createIdentity/Translate/Rotate/Scale/Shear, compose/invert/clone.
- `CurveBuilderApi`: `begin/lineTo/lineRelative/addArc/addBezier/addEllipse/close/createCurve`.
- `CurveApi` / `PolyCurveApi` / `PolyPolyCurveApi` / `PolygonApi` / `SplineApi` / `MeshApi`.
- `RectangleApi`, `PointApi`, `VectorApi`.
- `ShapeApi` + per-type APIs (`ShapeRectangleApi`, `ShapeEllipseApi`, `ShapePolygonApi`,
  `ShapeStarApi`, `ShapeSpiralApi`, ...). Factories expose corner params
  (`ShapeCornerType.Round`, `ShapeCornerIndex`, `setRadius(r, w, h)` pattern).
- QR payloads: `QRPayloadApi` + typed variants (Text, URL, Email, Phone, SMS, Wifi,
  Location, VCard, FaceTime, WhatsApp, DataMerge) — **new in 3.3.0**.

---

## 7. Fills & Colours

`affinity:fills`: `FillDescriptorApi` (`createSolid`, `createNone`, `cloneWithNewTransform`),
`SolidFillApi`, `GradientFillApi` (`GradientFillType`: Linear/Elliptical/Radial/Conical),
`BitmapFillApi`, `HatchFillApi`, `MeshFillApi`, `DiffusionFillApi`, `NoFillApi`.

`affinity:colours`: `ColourApi` (`createRGBA8`, `rgba8`, `hslaf`, `getCMYKA8`, `clone`),
`ColourProfileApi`/`ColourProfileSetApi` (`ColourProfileSet.default` for CMYK conversion),
`GradientApi` (`stopCount`, `getStop(i)`, `stops`).

Script limits: no direct CMYK/HSL constructors on `Colour` in older JSLib —
read `.rgba8` / `.hslaf` properties; convert CMYK via profile set.

---

## 8. Story / Text (`affinity:story`)

- `StoryApi` (`getText(begin, length)`), `StoryBuilderApi` (`setGlyphAtts`,
  `setParagraphAtts`, `addText`, `addParagraphBreak`), `StoryDeltaApi`,
  `StoryRangeApi` (`StoryRange` class: `begin`/`end`), `StoryInterfaceApi`.
- `GlyphAttsApi`: `height`, `brushFill`, ... `ParagraphAttsApi`: `alignXType`, ...
- Text formatting goes through `DocumentCommand.createFormatTextCommand` /
  `createSetTextCommand` with `Selection` + `TextSelection.create([{begin, end}])`.

---

## 9. Dialogs (`affinity:ui`)

`DialogApi`: `create(title)`, `addColumn`, `getColumn`, `getColumnCount`,
`enumerateColumns`, `findControl`, `runModal` → `DialogResult.Ok/Cancel`,
`setInitialWidth`/`getInitialWidth`, `setIsResizable`, `setItemsVisibility(show, hide)`,
`setOnControlValueChangedHandler`.

Controls (via column/group): ComboBox, CheckBox, Switch, TextBox, TextControl,
BoolControl, EnumControl, UnitValueEditor, ColourPicker, FillEditor, StrokeEditor,
FontPicker, RadioGroup, Button/ButtonSet, StaticText, SpatialAnchor.

Preview pattern: `doc.executeCommand(cmd, true)` for live preview →
`createClearPreviewsCommand` + final apply on OK; restore `doc.history.position` on Cancel.

---

## 10. Filesystem / Network / Misc

- `affinity:fs`: **Desktop-only** (`app.userDesktopPath`). `FileApi`, directory iteration.
- `affinity:network`: `HttpRequestApi.create(url, RequestMethod.GET)`,
  `setTimeoutInSec`, `setHeaderValue`, `do()` → `{ response }` / `doAsync(cb)`.
- `affinity:buffer`: `BufferApi` (`create`, `utf8`, `utf16`, `slice`, `concat`, ...).
- `affinity:timers`: `TimerApi`; global `setTimeout`/`setInterval`.
- `affinity:common`: `BlendMode`, `UnitType`, `UnitValue`/`UnitValueConverter`.
- `affinity:fonts`: font enumeration/selection.
- `affinity:raster`: pixel access (`PixelReader*`/`PixelReaderWriter*`), raster objects.
- `affinity:os`: OS integration.

---

## 11. Two layers: JSLib wrappers vs raw `affinity:*` modules (important!)

User scripts use the **JSLib wrapper layer** (`docs/JSLib/` in this repo —
the official convenience library shipped with SDK 3.3.0), NOT the raw modules directly:

| Layer | Paths | Exports | Used by |
|-------|-------|---------|---------|
| **JSLib wrappers** | `/document.js`, `/commands.js`, `/nodes.js`, `/shapes.js`, `/geometry.js`, `/colours.js`, `/fills.js`, `/dialog.js`, `/story.js`, `/storybuilder.js`, `/glyphatts.js`, `/paragraphatts.js`, `/selections.js`, `/units.js`, `/linestyle.js`, ... (also resolvable without `.js`) | Friendly classes: `Document`, `Shape`, `Rectangle`, `Colour`, `FillDescriptor`, `Dialog`, `StoryBuilder`, `Selection`, `DocumentCommand`, builders, `*NodeDefinition` | **user scripts** |
| **Raw modules** | `affinity:dom`, `affinity:commands`, ... | Low-level `*Api` (`DocumentApi`, `NodeApi`...) + enums (`BlendMode`, `UnitType`, `NodeChildType`, `FillType`, `ShapeType`...) | JSLib internals; scripts need only the enums |

Verified against `docs/JSLib/*.js` (`module.exports` + official `examples/*.js`):
every friendly class above is exported by its JSLib file, and NO friendly class
(`Document`, `Selection`, `DocumentCommand`, `Dialog`, `StoryBuilder`, `Shape`, ...)
exists in the raw `affinity:*` modules (those export only `*Api` + enums/classes
like `Rectangle`, `Transform`, `Point`, `Vector`, `StoryRange`, `UnitValue`).

Rules derived from this:
1. Import classes/commands/builders from JSLib `/....js` paths (with `.js` —
   the form used by current official examples and JSLib internals).
2. Import shared enums (`BlendMode`, `ErrorCode`) from `affinity:common`.
3. `NodeMoveType` lives in `/commands.js` only (not in `/nodes.js`); `NodeChildType`
   is in both.
4. `Dialog.show()` is deprecated → use `runModal()`.

Full migration table: see `docs/03-migration-guide.md`.

## 12. What changed in 3.3.0 (new capabilities)

1. **JSLib modules resolve with `.js`:** `/document.js`, `/commands.js`, `/nodes.js`,
   etc. (extensionless form still resolves, but `.js` is the form used by current
   official examples and JSLib internals — migrate to it).
2. **New JSLib surface:** `TableTextNodeDefinition` (tables), `ShapeQRCode` + QRPayloads,
   diffusion fills, trapezoid + cat/cog/crescent/tear shapes, AI commands, async
   `Document` methods (`loadAsync`, `saveAsync`, `exportAsync`, `executeCommandAsync`, ...).
3. **New raw modules:** `affinity:brushes`, `affinity:fonts`, `affinity:hatches`,
   `affinity:os`, `affinity:raster`, `affinity:ui`.
4. **Deprecated:** `Dialog.show()` → use `runModal()` (`show()` still works as an alias).
5. Full migration table: see `docs/03-migration-guide.md`.
