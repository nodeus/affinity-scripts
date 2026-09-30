# Community Scripts — каталог (81)

> Источник: JiriKrblich / Affinity-Community-Scripts, read-only копия: `community-scripts/`.
> Метаданные: `community-scripts/registry.json`.
> Внимание: часть скриптов написана под старые импорты — сверяйтесь с [migration.md](migration.md).

## Artboards (4)

| Скрипт | Описание | Автор |
|---|---|---|
| `rename-artboards` | Renames all artboards in the current document in bulk. When executed, a dialog prompts for a base name, which is then applied to all artboards with automatic sequential numbering and zero-padding — ensuring correct alphabetical sort order when exporting files (e.g., Name 01, Name 02... instead of Name 1, Name 2). For 100+ artboards, padding adjusts to 3 digits automatically. If only one artboard exists, no number is appended. |  Heitor Hatherly |
| `artboard_fitter` | Resizes artboards based on content with custom padding and axis selection (Height, Width, or Both). Automatically groups elements, centers them, and maintains proportions without distortion regardless of DPI. | Heitor Hatherly |
| `copytoartboards` | Duplicates selected object(s) onto every other artboard in the document | BlackMortimer-13 |
| `CreateCarroussel` | Creates a new single document ready for a Carroussel image, with X panels divided with Guidelines. | rbonelli |

## Color (5)

| Скрипт | Описание | Автор |
|---|---|---|
| `AestheticColorizer` | This script lets you select objects, pick a base color, and instantly colorize the selection with coordinated tints and shades derived from that color. | BlackMortimer-13 |
| `oklchcolor` | Edit, paste and save OKLCH colors. | JiriKrblich |
| `replacecolorfill` | Allows users to quickly change the fill color/gradients of selected shapes. | BlackMortimer-13 |
| `replacecolorstroke` | Allows users to quickly change the stroke color or gradients of selected shapes. | BlackMortimer-13 |
| `separate-fill-and-stroke` | Separates combined fill and stroke appearances into independent objects for easier editing and output control. | BlackMortimer-13 |

## Effect (8)

| Скрипт | Описание | Автор |
|---|---|---|
| `DirectionalBlurShadow` | Directional Blur Shadow creates a directional shadow of an object that progressively blurs, fades and tapers as it moves away from the object. | rbonelli |
| `dithering` | Adjustable halftone dithering effect with 12 dithering algorithms. | bitmancer |
| `Glitch-effect` | Create a glitch effect on a vector object. | Nic Kraneis |
| `PuckerBloatEffect` | Applies a Pucker & Bloat effect to the selected object(s), pulling anchor points inward (Pucker) or outward (Bloat) to distort | BlackMortimer-13 |
| `Roughen-Edges` | Rough up vector paths with controls over amplitute, frequency, noise etc. | Nic Kraneis |
| `twist-effect` | This script applies a progressive polar rotation (twist) to selected curves, shapes, or groups, mimicking Adobe Illustrator's twist effect. Select your vector elements first; the script subdivides Bezier curves, twists points radially based on distance from the center, and reconstructs the path. | BlackMortimer-13 |
| `vector-lathe-revolve` | This script revolves a selected vector path into a lathe-style 3D form. Select one path first, then run it; the script creates the revolved geometry, applies shading, and organizes the result into containers for visible faces and caps. | BlackMortimer-13 |
| `zigzageffect` | This script transforms a selected shape or line into a zig zag pattern. Simply select a shape or path, run the script, and it will automatically apply a zig zag effect to it. | BlackMortimer-13 |

## Export (6)

| Скрипт | Описание | Автор |
|---|---|---|
| `combine4braille_affinity` | When you intend to send a copy of your work to a blind person, it can take a lot of time to merge all the text boxes over many pages into one Word file. This Claude generated script starts at the beginning of the document and collects all the text from the text boxes and merges it into a txt file on your desktop. This can then be opened in Word for final processing before sending to Braille. | BaconThatsIt |
| `ExportCarroussel` | Export a single document as individual panels of a specified size. | rbonelli |
| `export-dds-bc3-dxt5` | Exports the current Affinity document as a DDS file using BC3/DXT5 compression with auto-generated mipmaps. | jeffthor10 |
| `ExportSelectedLayerAsCmykPsd` | This allows you to export only the selected layers as CMYK PSD file for printing (helpful for DTF Printing) | Paulius Asamoah Sem |
| `smart-exporter` | Export the selected artboard or selected objects to multiple formats in one run. | JiriKrblich |
| `smart_jpeg_export` | Exports all/selected artboards, spreads or docs with max. size limit | JiriKrblich |

## Generator (4)

| Скрипт | Описание | Автор |
|---|---|---|
| `bentoboxgenerator` | Generates Bento Grid/Box on the current page/artboard | JiriKrblich |
| `FillPathWithObjects` | This script fills a selected closed vector path with multiple copies of one or more template objects. It supports different grid types (rectangular, hex, circular, radial, etc.), randomization, scaling, rotation, and spacing controls. Select a closed path and objects, adjust settings, then preview or apply.   | BlackMortimer-13 |
| `progressive-transform` | Select multiple objects in Affinity, then run this script. Applies progressive scale, rotation, fill color, and opacity across selected objects in selection order. Progression is evenly divided based on the number of selected objects. | WaveF |
| `Shape-Scatter` | Instantly scatter perfect clones of any vector shape. Features auto-canvas detection, exact style preservation, dynamic size/rotation jitter, and overlap prevention across multiple patterns (Random, Grid, Burst). Real-time previews bake into a single, optimized node to keep your layers panel perfectly clean. | hellsfaun |

## Layer (2)

| Скрипт | Описание | Автор |
|---|---|---|
| `Move-Layer-to-Top-Across-All-Pages` | Select a layer, then run this script. It finds all layers with the same name across every page/spread and moves them to the top of the layer stack. | hrum |
| `Toggle-Layer-Visibility-Across-All-Pages` | Layer States alternative. Select a layer, then run this script. It reads the layer's name and current visibility, then toggles all layers with the same name across every page/spread. | hrum |

## Layout (1)

| Скрипт | Описание | Автор |
|---|---|---|
| `swiss_grid_generator_en` | Parametric grid generator for Affinity Designer, Publisher and Photo. Generates native guides for columns, rows, margins and gutter directly on the document, with live preview. Includes 6 iconic presets based on historical references (Brockmann 8x8, Gerstner 6x6, Vignelli 3x4, Tschichold 2x3, Digital 12, Slides 4x3), each scaling proportionally to any page size. Single undo step for the entire grid. Optional baseline grid. Available in English and Spanish (two separate scripts). Generates only native guides, no layers or vector objects. | Victor Crespo (3dvic · github.com/vicc3d) |

## Object (35)

| Скрипт | Описание | Автор |
|---|---|---|
| `3Dfun` | Creates faux 3D objects |  S1m0nP1 |
| `aff.logo` | Creates editable orthogonal, angled, tangent, circular, node, and Bezier handle construction guides from selected logo/SVG vectors. | Yore-Des |
| `squircle` | Create Squircles from Squares in Apple App Icon Style with Live-Preview option. | Dan Schumacher |
| `blendtool` | Select 2 vector objects, then run. Supports path as 3rd object. | robinsnest56 |
| `centerline-tracer` | Converts raster line art into clean, editable centerline vector paths in Affinity. | do-nuko |
| `crack-and-explode` | Create radial cracks in the shape and explode it. | rbonelli |
| `curvemockupoverlay` | Draw presentation-style fake anchor points and Bezier handles over the selected curve. | JiriKrblich |
| `customgradientmap` | Creates a custom gradient map based on a selected gradient swatch. | RE4LLY |
| `DeleteEmptyGroups` | Deletes empty groups left behind by the user. | BlackMortimer-13 |
| `distributeshapesonpaths` | Places copies of designated target layers along selected vector shapes or paths. Choose the target layer by name from the dropdown or rename it to target. Multiple matching layers are distributed in round-robin order. Supports vector, group, symbol, and pixel layers, with insertion modes for path, center, nodes, and corners. | EricP |
| `copy-selection-to-opposite-page` | Select one or more objects on a page, then run the script to duplicate them automatically to the opposite paired page in the same relative position. The script detects the source page from the selected objects, chooses the matching target page automatically, and supports paired-page logic such as 2↔3, 4↔5, 6↔7, and so on. | BlackMortimer-13 |
| `DuplicateatSelectedNodes` | Duplicates the front/top selected object at every selected on-curve node on the other selected curve objects. | Dimas Nirwan |
| `empty-clipping-masks` | Deletes all children from every selected object. Clear all shapes inside objects in one click. | jn-373 |
| `EnvelopeWarpStudio` | Multi-stage Illustrator-style warp engine with origin, direction, advanced falloff, custom profiles, live preview, and JSON presets. | tzvi20 |
| `ExtrudeTool` | This script generates a 3D-like extrusion effect by connecting selected vector shapes. Once executed, the tool automatically calculates, subdivides, and renders the connecting geometry, organizing the resulting faces while preserving your original shapes as caps | BlackMortimer-13 |
| `gridify` | Spread selected objects into a grid with various options of spacing, scaling and jitter. | Nic Kraneis |
| `groupcleanup` | Deletes empty groups and releases plain single-item groups. | hellsfaun |
| `image-trace-superior` | Converts raster/image layers into clean, scalable black-and-white vectors directly inside Affinity — no external tools needed. Engine: marching-squares contour tracer with adaptive Bezier smoothing, corner-aware RDP simplification, and anti-staircase curve fitting. | Dimas Nirwan |
| `makebutton` | Instantly creates perfectly padded rounded button backgrounds behind selected text layers with live preview, customizable fill/stroke styling, linked padding controls, and automatic grouping. | hellsfaun |
| `Pattern-Maker` | Create patterns from an object. Supports brick and drop patterns. | Nic Kraneis |
| `pizzacutter` | Slice a selected object into a precise pie or grid pieces | hellsfaun |
| `ProfessionalChartGenerator` | Generates pie charts and bar charts from an imported CSV file | Ouriel MAKAYA |
| `quick-mirror` | Mirrors the selected layer to the left, right, top, or bottom with an adjustable gap. | hellsfaun |
| `radial-repeat` | Select one or more objects, then duplicate them automatically in a radial layout around the center of the selection. The script supports multiple circular rows, live preview, controls for radius, spacing, rotation, and scaling, plus a row template mode for assigning different selected objects to specific rows | BlackMortimer-13 |
| `randomizeobjects` | Randomization of size, position, rotation, skew, opacity, color, and stroke of selected objects. | zaum |
| `replace-all-with-key-object` | The script replaces all selected objects with duplicates of the key object (select 2 objects then press Option on Mac or Alt on Windows on the object you want to become the key object), while preserving position and rotation, with optional size matching. | BlackMortimer-13 |
| `selectplus` | Utility that select layers by relationship (eg. all layers within a group), containment (objects inside another shape), random distribution, or pattern-based rules. | EricP |
| `selectbymatchingcolor` | Selects all objects in the parent layer whose fill OR stroke color matches that of the currently selected object. Comparison is done in RGBA8 (including alpha channel). | kevinblancharddesign-hub |
| `simplify_curves` | Script for reducing points of object curves | JiriKrblich |
| `split_to_grid` | Split vector object into n*n grid | JiriKrblich |
| `swap-objects` | The script swaps selected objects based on a custom mapping, with optional orientation and dimension swapping. Select at least 2 objects, choose how they should swap in the dialog, then use Preview or Apply. | BlackMortimer-13 |
| `swapobjectsbycenter` | Swap the locations of two selected objects by their center points. | daani-rika |
| `tile-generator` | This script generates tile-based patterns from a selected object. It supports multiple layout styles, including a basic grid, brick offset, half-drop, diamond, hexagonal, radial burst, spiral, wave, pinwheel, and random scatter. It also includes progressive hue shifting, which reads the source object’s solid fill color and shifts the hue across all tiles, for example by 180° to create complementary colors. | S1m0nP1 |
| `block-shadow-tool` | Replicate the Block Shadow functionality from CorelDRAW by generating a solid, 2D vector extrusion from a source object. Unlike a drop shadow, this must result in a flat vector path capable of being sent to a plotter or vinyl cutter. | jn-373 |
| `scatter` | Scatters selected objects with adjustable parameters. Select a single group to scatter its children. | Claude via Matt I. |

## Other (1)

| Скрипт | Описание | Автор |
|---|---|---|
| `helloworldexample` | Affinity scripting Hello, World! | rabidgremlin |

## Path (2)

| Скрипт | Описание | Автор |
|---|---|---|
| `arrange-on-path` | Distributes selected objects evenly along auto-detected vector paths, with support for multiple paths, randomization, interpolation, smart sorting, open/closed paths, and repeat mode for tiling objects along the path. | BlackMortimer-13 |
| `joinpaths` | Joins selected open paths within specified radius. Make one path from multiple open paths | EricP |

## Print (3)

| Скрипт | Описание | Автор |
|---|---|---|
| `cropmarks` | Places cutting marks 2 mm away from the Trimbox in the same color as the registration marks | Wolfgang Wiesen |
| `generatecropmarks` | Generates crop/cut marks for selected objects and Data Merge Layout grids. For DML nodes always asks the user for rows/columns via dialog. Adds L-shaped corner marks and internal grid ticks to a locked Production Marks layer. | sakura |
| `RGBImagesLeftovers` | Looks for all embedded and linked RGB images in an open Affinity document. Useful for CMYK documents. | hrum |

## Text (9)

| Скрипт | Описание | Автор |
|---|---|---|
| `AdvancedMarkdown` | Import your Markdown file and instantly transform it into a fully styled Affinity Publisher layout. | Torsten Dinkheller |
| `arabic-rtl-pro` | Converts selected Arabic text into visual RTL text for Affinity, with lam-alef shaping, right alignment, optional tatweel removal, harakat ordering, and precise global plus individual harakat size and X/Y offset controls. | Dimas Nirwan |
| `Block_Text` | Scales selected art text to match the widest, left-aligns all objects, and spaces them vertically with a all objects, and spates them verticaly with a configurable point gap. | pgraficzny |
| `hangingcharsandprepositions` | Replaces spaces after lone single characters or prepositions with non-breaking spaces (for slavic languages). Based on initial script by JiriKrblich | nodeus |
| `hebrew-RTL-flip-helper` | Fixes Hebrew RTL issues with selectable modes. | Tzvi20 |
| `markdown_import_to_text_frame` | Markdown import to text frame | rabidgremlin |
| `single-char_linebreak_fix` | Replaces spaces after lone single characters with non-breaking spaces (Slavic languages) | JiriKrblich |
| `SmartQuotesConverter` | Replaces all straight quotes in your document with proper typographic smart quotes across every text frame on every spread. | MeowWereTalking |
| `type-scale-builder` | Type Scale Builder is an Affinity 3 JavaScript script that generates a modular typography system from a user-defined base text size. It lets designers choose a scale ratio, rounding mode, line-height logic, font, preview text, and the number of steps above/below the body size. The script then creates a clean editorial type specimen inside the current document, showing each generated style with its size, line-height, and preview sentence. | Seba |

## Utility (1)

| Скрипт | Описание | Автор |
|---|---|---|
| `styleconsistencychecker` | Easily maintain design consistency by inspecting and remapping font faces, sizes, and stroke weights. Also includes a tool to clean up invisible garbage nodes | Shigeru Kobayashi |
