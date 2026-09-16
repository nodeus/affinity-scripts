# Affinity SDK — Core API Documentation

Extracted from the Affinity MCP server SDK documentation (11 MCP tools).

---

## Preamble

This is a JavaScript SDK for the Affinity by Canva application.

ALWAYS read the preamble and a few relevant SDK documentation files before writing any script.
ALWAYS ask search_sdk_hints before you use experimentation to solve a problem.
ALWAYS search the names of all the MCP tools before you start.
ALWAYS call add_sdk_hint immediately after solving a problem using experimentation.

SDK includes should be in the form require('/document').
Use the render_spread tool to visually confirm scripts results.
User the render_selection tool to inspect nodes in isolation.
The script execution will not return output so you need to use console.log().
If any script command returns NOT_ALLOWED the user has restricted your use of either AI, filesystem or networking in Affinity settings.
If you do have access to the filesystem, you will only be able to interact with files on the Desktop - use getUserDesktopPath in application.js to find the path.
Do not assume the SDK cannot perform a particular task just because you know previous versions of Affinity couldn't.
The SDK contains AI APIs to generate images from prompts and perform generative edits to images, amongst other AI capabilities. Prefer these to any external AI methods.
The SDK contains a Dialog API, which should be used to generate any UI the user asks for.
You must set the current spread before editing nodes on that spread, but don't set the spread if it's already the current spread - setting spread clears the selection.
Completed, working scripts can be saved to the script library if the user is happy with them.
If a class has 'create' or 'createDefault' methods, use those to create an instance. Otherwise use 'new'.
When determining the type of a native (affinity:) API function parameter, check the require()d imports at the top of the .js file that makes the call.
All enum classes have 'keys', 'values' and 'entries' properties (not methods!) - use those to determine the valid enum values.
The 'tests' directory contains test code, some of which is out of date and no longer runs. You can use it for ideas, but don't trust it!
Any script you write must be directly executable. Don't use `module.exports.main = main;` like the examples do.

### Parameter/property ranges and fixed-size arrays

There are three .json files you can read with the read_sdk_documentation_topic tool. These files contain information about the valid ranges and fixed array sizes of certain native SDK function parameters and struct properties. They have no information on parameters/properties with no range or fixed size.
When calling a native API function (or code that forwards to one), check param_ranges.min.json to see if any parameters have a valid range (schema {NativeApiClass:{method:{param:"[min,max]"}}})
When setting SDK struct properties, check struct_ranges.min.json to see if the property has a valid range (schema {StructType:{property:"[min, max]"}}). Also check struct_array_sizes.min.json to see if the property is a fixed size array-like object.
Both param_ranges and struct_ranges use e.g. [1.0, 10.0] for float ranges and [1, 10] for int ranges. All ranges and sizes can be JS expressions (e.g. Math.PI * 2, TonalRangeType.Highlights + 1), not just numeric literals.

---

## All Available Documentation Files

### Core:
`preamble`, `adjustment_ranges`, `filter_ranges`

### Libraries/Modules:
`rasterbrush.js`, `pixelaccessor.js`, `selections.js`, `baseboxinterface.js`, `glyphatts.js`, `paragraphatts.js`, `storybuilder.js`, `storydelta.js`, `handleobject.js`, `story.js`, `layereffects.js`, `layereffectsinterface.js`, `rasterselection.js`, `physicalrootinterface.js`, `hatch.js`, `dialog.js`, `units.js`, `colours.js`, `linestyle.js`, `shapes.js`, `fonts.js`, `selectable.js`, `drawingscale.js`, `storyinterface.js`, `timers.js`, `fills.js`, `nodes.js`, `taginterface.js`, `curvesinterface.js`, `glyphs.js`, `shapeinterface.js`, `exportconfig.js`, `exportableinterface.js`, `transparencyinterface.js`, `vectorbrush.js`, `linestyleinterface.js`, `pageboxinterface.js`, `commands.js`, `pictureframeinterface.js`, `marginsinterface.js`, `compoundoperationinterface.js`, `rasterobject.js`, `physicalrootpropertiesinterface.js`, `blendmodeinterface.js`, `artboardproperties.js`, `rasterinterface.js`, `application.js`, `descriptioninterface.js`, `imageresourceinterface.js`, `visibilityinterface.js`, `artboardinterface.js`, `network.js`, `collection.js`, `editabilityinterface.js`, `geometry.js`, `textframeinterface.js`, `transforminterface.js`, `document.js`, `documentproperties.js`, `buffer.js`, `brushfillinterface.js`, `fs.js`

### Tests:
`tests/applicationTests.js`, `tests/polygonTests.js`, `tests/containerNodeTests.js`, `tests/testUtils.js`, `tests/pictureFrameInterfaceTests.js`, `tests/storyInterfaceTests.js`, `tests/colourProfileSetTests.js`, `tests/documentSnapshotTests.js`, `tests/documenttests.js`, `tests/groupNodeTests.js`, `tests/rasterNodeTests.js`, `tests/filetests.js`, `tests/vectorNodeTests.js`, `tests/tagInterfaceTests.js`, `tests/storyTests.js`, `tests/networkTests.js`, `tests/useCases.js`, `tests/polyCurveNodeTests.js`, `tests/artboardInterfaceTests.js`, `tests/imageNodeTests.js`, `tests/documentCommandTests.js`, `tests/colourProfileTests.js`, `tests/curveNodeTests.js`, `tests/splineTests.js`, `tests/documentviewtests.js`, `tests/buffertests.js`, `tests/rasterSelectionTests.js`, `tests/imageResourceInterfaceTests.js`, `tests/visibilityInterfaceTests.js`, `tests/embeddedDocumentTests.js`, `tests/addNodeTests.js`, `tests/curveTests.js`, `tests/blendmodeInterfaceTests.js`

### Examples:
`examples/artboardGrid.js`, `examples/bitmapWriter.js`, `examples/addPoints.js`, `examples/addGuides.js`, `examples/setDocumentFormat.js`, `examples/alignToPage.js`, `examples/adjustPageItems.js`, `examples/boldItalics.js`, `examples/countries.json`, `examples/flexibleLayout.js`, `examples/tableFromJson.js`

---

## application.js

The `Application` class provides access to application-wide properties, documents, UI dialogs, and settings.

### Key exports:
- `app` — singleton `Application` instance
- `BuildKind`, `UiParadigm` — enum types

### `Application` class:

| Property/Method | Description |
|---|---|
| `documents` | `AppDocuments` — access all open documents or load from path |
| `settings` | `ApplicationSettings` — undo limit, PSD settings |
| `alert(message, title)` | Sync alert dialog |
| `confirm(message, title)` | Sync confirm dialog |
| `prompt(message, title, initialText)` | Sync text prompt |
| `chooseFile()` | Sync file chooser |
| `alertAsync/confirmAsync/promptAsync/chooseFileAsync(...)` | Async versions with callbacks |
| `compileDate`, `platformName`, `version`, `shortVersion`, `buildVersion` | Version info |
| `majorVersion`, `minorVersion`, `revisionVersion`, `documentVersion` | Detailed version parts |
| `buildKind`, `productFullName`, `productLongName`, `productShortName` | Product info |
| `productCopyrightMessage`, `productVersionName`, `productPrimaryFileExtension` | Product metadata |
| `suiteFullName`, `uiParadigm` | Suite/UI info |
| `argC`, `argV`, `args` | Command-line arguments |
| `userDesktopPath` | Path to user's Desktop |

### `AppDocuments`:
- `all` — all open documents
- `current` — currently active document
- `load(path)` — load a document from file path

### `ApplicationSettings`:
- `loadPSDWithEditableText` — get/set PSD editable text flag
- `undoLimit` — get undo history limit

---

## document.js

The main document module. Contains the following classes and exports:

### Classes:

#### `DocumentSnapshot`
- Create documents from snapshots (sync/async)

#### `DocumentPreset`
- Enumerate/configure document presets (units, DPI, margins, bleed, drawing scale, colour profile)

#### `Layers`
- Collection iterating all layers across spreads

#### `Document`
The main class with properties and methods for:
- Opening/saving/exporting documents (sync + async + Promise variants)
- Selection management (lock, visibility, blend mode, opacity)
- Fill descriptors (brush, pen, transparency)
- Line styles (cap, join, type, weight, dash pattern)
- Text operations (setText, formatText, insertGlyph)
- Raster selection (select, deselect, invert, grow/shrink, feather, smooth, outline)
- Layer effects (bevel/emboss, outline, phong bevel, inner/outer shadow, inner/outer glow, colour/gradient overlay, gaussian blur)
- AI commands (generateImage, generativeEditImage, removeBackground, selectSubject, detectDepth, colourise)
- Guides, shapes, transforms, macros, artboards

#### `NewDocumentOptions`
- Configure new document creation (width, height, DPI, units, margins, colour profile, etc.)

#### `DocumentHistoryItem`
- Individual history items with thumbnails

#### `DocumentHistory`
- Undo/redo stack navigation

#### `DocumentExportRecord` / `DocumentExportRecords`
- Export results with warnings/errors

#### `FileExportOptions`
- Preset-based export configuration

#### `FileExportArea`
- Export area (whole doc, current spread, pages, artboard, selection)

#### `LoadDocumentOptions`
- Loading options (DPI, password, colour space, format, load mode)

#### `DocumentPromises`
- Promise-based wrappers for all async operations

### Exports:
`ColourSpaceType`, `Document`, `DocumentExportRecord`, `DocumentExportRecords`, `DocumentHistory`, `DocumentLoadMode`, `DocumentPreset`, `DocumentPromises`, `DocumentSnapshot`, `ErrorCode`, `FileExportArea`, `FileExportOptions`, `ImagePlacement`, `LoadDocumentOptions`, `NewDocumentOptions`, `PackageResourcesPolicy`, `RasterFormat`, `SpatialAnchor`, `UnitType`

---

## documentproperties.js

Three main classes:

### `DocumentProperties`
Main document-level properties:
- Colour format/profile
- Units, DPI
- Drawing scale
- Page dimensions, margins, bleed
- Transparency, facing pages
- Save history, image resource policy
- Resampler type
- Has a `static create()` factory and many getter/setter pairs

### `ArtboardDocumentProperties`
Artboard-specific properties:
- Margin, drawing scale
- Dimensions, anchor type
- Builder-style setters (e.g. `setMargin()`, `setDimensions()`)

### `SpreadDocumentProperties`
Extends `ArtboardDocumentProperties` with spread-specific overrides:
- `useMasterMargin`
- `useMasterDrawingScale`
- `reflowPages`
- `resamplerType`

Re-exports: `ImagePlacement`, `SpatialAnchor`, `RasterFormat`, `RasterResamplerType`, `UnitType`

---

## commands.js

### Classes:

#### `Command`
- Base command class with `description` property

#### `DocumentCommand`
Main command class with 150+ static factory methods for all document operations:

**Selection:**
- `createSetSelection`, `createDeleteSelection`, `createHideSelection`, `createSelectAll`, `createShowAll`

**Transforms:**
- `createTransform`, `createSetOpacity`, `createSetBlendMode`, `createGroupTransform`

**Fills:**
- `createSetBrushFill`, `createSetPenFill`, `createSetTransparencyFill`, hatch fill attributes

**Line/Stroke:**
- `createSetLineStyle`, `createSetStrokeAlignment`

**Nodes:**
- `createMoveNodes`, `createMoveMappedNodes`, `createConvertToCurves`, `createRasteriseObjects`, `createFlatten`, `createMergeVisible`

**Text:**
- `createSetText`, `createInsertGlyph`, `createFormatText`

**Shapes:**
- `createSetShape`, `createSetShapeFloatParam/IntParam/BoolParam/EnumParam`

**Curves:**
- `createSetCurves`, `createAddCurve`, `createAddCurveNode`, `createSplitCurve`, `createKnifeCut`, `createScissorCut`

**Filters (add + set parameters):**
- Gaussian, Box, Bilateral, Median, DiffuseGlow, Field, DepthOfField, Lens, Maximum, Minimum, Motion, Radial, Clarity, UnsharpMask, HighPass, Denoise, Diffuse, DustAndScratch, AddNoise, Bloom, Pixelate, Halftone, Ripple, Twirl, Spherical, PinchPunch, Vignette, Defringe, Voronoi

**Adjustments:**
- Exposure, Levels, BrightnessContrast, ShadowsHighlights, BlackAndWhite, Recolour, Posterise, SplitToning, Threshold, WhiteBalance, ColourBalance, Vibrance, Normals, SelectiveColour, HSLShift, Curves, ToneCompression, ToneStretch

**Layer Effects:**
- BevelEmboss, Outline, PhongBevel, InnerShadow, InnerGlow, ColourOverlay, GradientOverlay, OuterGlow, OuterShadow, GaussianBlur

**Raster Selection:**
- `createRasterSelectAll`, `createRasterDeselect`, `createRasterInvertSelection`, `createSetRasterSelectionFromPolygon`, `createSetRasterSelectionFromObject`, grow/shrink, feather, smooth, outline

**AI:**
- `createGenerateImage`, `createGenerativeEditImage`, `createDetectDepth`, `createColourise`, `createRemoveBackground`, `createSelectSubject`

**Macro:**
- `createImportMacro`, `createExportMacro`, `createReplayMacro`, `createClearMacro`, `createStartRecordingMacro`, `createStopRecordingMacro`

**Guides:**
- `createAddGuide`, `createMoveGuide`, `createRemoveGuide`, `createSetGuidesColour`

**Snapshots:**
- `createAddDocumentSnapshot`, `createDeleteDocumentSnapshot`, `createRestoreDocumentSnapshot`

**Document:**
- `createSetDocumentUnits`, `createSetDocumentProperties`, `createConvertDocumentFormat`, `createSetCurrentSpread`

**Artboard/Spread:**
- `createAddArtboard`, `createSetSpreadSizeWithAnchor`, `createSetArtboardSizeWithAnchor`

**Tags:**
- `createSetTagColour`, `createSetTagValueForKey`, `createSetTagValueForPredefinedKey`

**Embedded documents:**
- visibility, artboard/spread selection, page bounding box, PDF passthrough

**History:**
- `createUndo`, `createRedo`, `createSetHistoryIndex`, `createCycleAlternateFutures`

**Image Trace:**
- `createImageTrace`

**Blend:**
- `createSetBlendGamma`, `createSetBlendRanges`

**Winding:**
- `createSetWindingMode`

#### `CompoundCommandBuilder`
- Builder for combining multiple commands

#### `AddChildNodesCommandBuilder`
- Builder for adding various node types (images, shapes, rasters, filters, adjustments, etc.)

#### `SetHatchFillAttributesCommandBuilder`
- Builder for hatch fill attributes

#### `AddNodeCommand`
- Deprecated alias for `DocumentCommand`

### Helper function:
- `createCompoundCommand(subCmds)` — wraps an array of commands into a compound command

### Exports:
All classes plus convenience re-exports of enums like `BlendMode`, `ContentType`, `InsertionMode`, `NodeMoveType`, `VisibilityMode`, `RasterSelectionLogicalOperation`, etc.

---

## geometry.js

### Core types from `affinity:geometry`:
- `Transform`, `TransformApi`, `TransformData` — 2D affine transforms
- `CubicBezier`, `CubicBezierApi` — cubic Bezier segments
- `Curve`, `CurveApi`, `CurveBuilder`, `CurveBuilderApi` — path curves with nodes, beziers, and builder pattern
- `CurveNode`, `CurveNodeType`, `CurveNodeStyle`, `CurveCornerType`, `CurveCornerData` — curve node metadata
- `PolyCurve`, `PolyCurveApi` — sequences of curves
- `PolyPolyCurve`, `PolyPolyCurveApi` — collections of poly-curves (compound paths)
- `Point`, `Vector`, `Rectangle`, `Size`, `SizeInt` — basic geometry primitives
- `Polygon`, `PolygonApi` — point-based polygon
- `Spline`, `SplineApi`, `SplineProfile` — spline interpolation
- `WindingOrder` — winding direction enum

### Utility functions:
`rangesIntersect`, `intersectRanges`, `rectsIntersect`, `intersectRects`, `unionRanges`, `unionRects`, `valueInRange`, `pointInRect`

### Key classes:

#### `Transform`
- Static factories: `createIdentity`, `createTranslate`, `createRotate`, `createScale`, `createShear`
- Mutating methods: `translate`, `rotate`, `scale`, `shear`, `invert`, `compose`
- Non-mutating helpers: `clone`, `scaled`, `rotated`
- Properties: `xAxis`, `yAxis`, `origin`, `inverted`

#### `CurveBuilder`
- Fluent builder for curves: `begin`, `lineTo`, `lineRelative`, `versineTo`, `bulgeTo`, `addArc`, `addBezier`, `addEllipse`, `close`, `createCurve`

#### `Curve`
- Static factories: `createLine`, `createRectangle`, `createEllipse`, `createDiamond`, `createLozenge`, `createPrecisionUnitCircle`
- Point access: `getPoint`, `setPoint`, `points`
- Path queries: `pointCount`, `nodeCount`, `isClosed`, `isClockwise`, `length`, `beziers`
- Bounding boxes, `cut`, `transform`

#### `PolyCurve`
- Curve collection with `addCurve`, iteration, bounding boxes

#### `PolyPolyCurve`
- Compound paths: `containsPoint`, `isNearPoint`, `intersectsRectangle`, `addRectangle`, `addPolyCurve`

#### `TransformBuilder`
- Fluent chain: `translate`, `scale`, `rotate`, `shear`

#### `Spline`
- `createFromProfile`, `createFromPoints`, `insertPoint`, `removePoint`, linear mode

#### `Polygon`
- `createLine`, `createTriangle`, `createRectangle`, `addPoint`, `insertPoint`, `close`, `reverse`

---

## units.js

```js
'use strict';

const { UnitType, UnitValue, UnitValueConverterApi, UserUnitType } = require('affinity:common');
const { HandleObject } = require('./handleobject.js');

class UnitValueConverter extends HandleObject {
    constructor(handle) {
        super(handle)
    }

    get [Symbol.toStringTag]() {
        return 'UnitValueConverter';
    }

    static create(dpi, viewDpi = -1) {
        return new UnitValueConverter(UnitValueConverterApi.createWithViewDpi(dpi, viewDpi));
    }

    clone() {
        return new UnitValueConverter(UnitValueConverterApi.clone(this.handle));
    }

    get dpi() {
        return UnitValueConverterApi.getDpi(this.handle);
    }

    get viewDpi() {
        return UnitValueConverterApi.getViewDpi(this.handle);
    }

    getConversionFactor(from, to) {
        return UnitValueConverterApi.getConversionFactor(this.handle, from, to);
    }
}

module.exports.UnitType = UnitType;
module.exports.UnitValue = UnitValue;
module.exports.UnitValueConverter = UnitValueConverter;
module.exports.UserUnitType = UserUnitType;
```

### Exports:
- `UnitType` — enum for unit types (from `affinity:common`)
- `UnitValue` — value with a unit (from `affinity:common`)
- `UnitValueConverter` — converts between unit types using DPI; has `create(dpi, viewDpi)`, `clone()`, `getConversionFactor(from, to)`, and getters `dpi`/`viewDpi`
- `UserUnitType` — user-defined unit types (from `affinity:common`)

---

## colours.js

### Key exports:

#### `Colour` class
- Wraps `ColourApi`/`ColourProfileApi`/`GradientApi`
- Supports RGBA8/16/uf, IA8/16, CMYKA8/f, LABA16, HSLAf colour spaces
- Properties: `alpha`, `intensity`, `noise`, `overprint`, `tint`
- Methods: `clone()`, `convertProfile()`

#### `Gradient` class
- Gradient stops with `alpha`, `noise`, `intensity`, `tint`
- Create via `Gradient.create(stops)`

#### `ColourProfile`
- ICC profile representation
- Static methods: `find(name)`, `getAll()`, `getDefaultForColourSpace()`, `getDefaultForFormat()`, `enumerateProfiles()`

#### `ColourProfileSet`
- Maps formats/colour spaces to profiles with `intent` and `blackPointCompensation`

#### `SVG11`
- All SVG 1.1 named colours (e.g. `SVG11.crimson`, `SVG11.dodgerblue`) + `SVG11.random()`

### Convenience constructors:
`RGB8(r,g,b)`, `RGBA8(r,g,b,a?)`, `RGB16(r,g,b)`, `RGBA16(r,g,b,a?)`, `RGBAuf(r,g,b,a?)`, `I8(i)`, `IA8(i,a?)`, `CMYK8(c,m,y,k)`, `CMYKA8(c,m,y,k,a?)`, `CMYKf(c,m,y,k)`, `CMYKAf(c,m,y,k,a?)`, `LAB16(l,a,b)`, `LABA16(l,a,b,a?)`, `HSLf(h,s,l)`, `HSLAf(h,s,l,a?)`

### Also exports:
`ColourSpaceType`, `RasterFormat`, `RasterIntent`, and aliases `RGB`, `IA`, `HSL`

---

## network.js

### Exports:
- `HttpRequest` — wrapper around `affinity:network` `HttpRequestApi`
- `HttpResponse` — wrapper around `affinity:network` `HttpResponseApi`
- `RequestMethod` — enum from `affinity:network`
- `HttpStatusCode` — enum from `affinity:network`

### `HttpRequest` (extends `HandleObject`):

| Method | Description |
|---|---|
| `static create(url, method)` | Factory method |
| `setTimeoutInSec(timeoutSec)` | Set request timeout |
| `setSuppressUserAgentHeader(suppress)` | Suppress user agent header |
| `setEncodeHeaderValuesAsRfc2047(encodeAs2047)` | Encode header values as RFC 2047 |
| `setUseExpensiveNetwork(useExpensive)` | Allow expensive network |
| `setUseConstrainedNetwork(useConstrained)` | Allow constrained network |
| `setAvoidChunkedTransferEncoding(avoid)` | Avoid chunked transfer |
| `setHeaderValue(headerKey, headerVal)` | Set request header |
| `getHeaderValue(headerKey)` | Get request header |
| `do()` | Synchronous request, returns `{ response: HttpResponse }` |
| `doAsync(callback)` | Async request, callback receives `(state, HttpResponse, reason)` |

### `HttpResponse` (extends `HandleObject`):

| Property/Method | Description |
|---|---|
| `statusCode` | Getter for HTTP status code |
| `getHeaderValue(headerKey)` | Read response header |
| `content` | Getter for response body |

### Usage example:
```js
const { HttpRequest, RequestMethod } = require('network.js');

const request = HttpRequest.create('https://example.com', RequestMethod.GET);
request.setTimeoutInSec(30);
const { response } = request.do();
console.log(response.statusCode);
console.log(response.content);
```

---

## collection.js

### `Collection`
Base lazy iterable collection wrapping a generator function.

**Static factories:** `empty()`, `of()`, `over()`, `range()`, `random()`, `fibonacci()`

**Transforms:** `append()`, `filter()`, `map()`, `flat()`, `reverse()`, `skip()`, `take()`, `skipWhile()`, `takeWhile()`, `repeat()`, `repeatForever()`, `lastN()`

**Zips:** `zip()`, `leftZip()`, `rightZip()`

**Queries:** `all()`, `any()`, `some()`, `none()`, `first`, `last`, `length`, `isEmpty`, `at()`, `countIf()`

**Terminal:** `forEach()`, `reduce()`, `join()`, `toArray()`, `entries()`, `keys()`

**Utility:** `notNull()`

### `SpanCollection`
Optimized subclass for arrays/spans with random-access indexing (`at()`). Overrides `first`, `last`, `length`, `isEmpty`, `take()`, `skip()`, `reverse()`, `at()` for O(1) performance.

### `RangeCollection`
Optimized subclass for `Collection.range()`. Stores start + length instead of materializing values. Overrides same methods as `SpanCollection`.

Helper functions (`isIterable`, `concat`, `filter`, `map`, `flat`, `zip`, `leftZip`, `rightZip`, `reduce`, etc.) implement the lazy generator logic.

---

## fs.js

### File class
- Handles file operations (open, seek, read, write, async variants)

### FilePromises
- Promise-based wrapper for File operations

### DirectoryIterator
- Iterates through directory entries

### DirectoryEntries / RecursiveDirectoryEntries
- Collections of directory entries

### Directory class
- Represents a directory path

### FileStatus
- File metadata (permissions, type, status string)

### FileSystemPromises
- Static methods for filesystem operations (copy, create, remove, rename, etc.)

### Module exports
- All classes and enums

Note: Access to filesystem is restricted to Desktop only — use `app.userDesktopPath` (from `application.js`) to get the base path.

---

## buffer.js

### `Buffer` class (extends `HandleObject`)

**Static methods:**
- `Buffer.create(sz)` — creates a new buffer of given size
- `Buffer.utf16(str)` — creates buffer from string using UTF-16 encoding
- `Buffer.utf8(str)` — creates buffer from string using UTF-8 encoding

**Instance methods:**
- `clone()` — returns a copy of the buffer
- `span(start, end)` — returns a shared-ownership view (like `Array.slice()` semantics for start/end)
- `slice(start, end)` — returns a new independent buffer copy
- `equals(other)` — checks byte equality
- `compare(other)` — comparison
- `compareSome(start1, end1, other, start2, end2)` — sub-range comparison
- `toString(encoding?, start?, end?)` — converts to string
- `concat(other)` — concatenates two buffers
- `reverse()` — reverses bytes in-place

**Properties:**
- `size` / `length` — byte count
- `arrayBuffer` / `buffer` — underlying `ArrayBuffer`
- `array` — `Uint8Array` view
- `items` — `SpanCollection` wrapper

**Iterator:** Supports `for...of` via `Symbol.iterator`

**UTF-8 constants:** `UTF8_1_MAX`, `UTF8_2_MAX`, `UTF8_3_MAX`, `UTF8_4_MAX` — codepoint thresholds for 1-4 byte encodings.

---

## timers.js

### `Timer` class (extends `HandleObject`)

| Method/Property | Description |
|---|---|
| `Timer.create()` | Static factory method |
| `timer.cancel()` | Cancel a specific timer |
| `Timer.cancelAll()` | Cancel all active timers |
| `Timer.now` | Static getter for current time |
| `timer.expiry` / `expiryBigInt` | Get/set expiry time |
| `timer.moveExpiry(value)` | Shift expiry by offset |
| `timer.expiryFromNow` / `expiresFromNow` | Get/set expiry relative to now |
| `timer.waitAsync(callback)` | Register callback on expiry |
| `timer.dispose()` | Clean up timer resources |

### Global-like helper functions

| Function | Description |
|---|---|
| `setTimeout(delay, callback, ...args)` | One-shot timer (Node.js-like) |
| `setInterval(delay, callback, ...args)` | Repeating timer (Node.js-like) |
| `setImmediate(callback, ...args)` | Effectively `setTimeout(0)` |

**Key notes:**
- Callbacks receive `(errorCode, ...args)` — check `errorCode` for errors
- `setImmediate` is not true Node.js semantics; it's equivalent to `setTimeout(0)`
- `expiresFromNow` is an alias for `expiryFromNow`
