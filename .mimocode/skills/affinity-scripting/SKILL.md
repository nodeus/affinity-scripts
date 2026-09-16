---
name: affinity-scripting
description: Use when writing, editing, or debugging JavaScript scripts for Affinity Designer/Photo/Publisher via the MCP server. Covers script execution, SDK API, dialogs, shapes, commands, text, effects, export, and community script patterns.
---

# Affinity Scripting Skill

## Overview

This skill enables writing and executing JavaScript scripts in Affinity Designer/Photo/Publisher through an MCP server connection. The SDK provides 150+ commands, 22 shape types, full text formatting, AI capabilities, and interactive dialogs.

## Mandatory Workflow

**Before writing any script:**

1. Read the preamble first:
   ```
   affinity_read_sdk_documentation_topic(filename="preamble")
   ```

2. Search for existing solutions:
   ```
   affinity_search_sdk_hints(prompt="your problem description")
   ```

3. Check available MCP tools:
   ```
   affinity_list_sdk_documentation()
   affinity_list_library_scripts()
   ```

**After solving a problem:**
```
affinity_add_sdk_hint(hint="solution description")
```

## Common Execution Workflow

### Script Execution Loop
```
1. Read preamble (REQUIRED)
2. Write/prepare script
3. Execute via affinity_execute_script
4. Check console.log() output
5. If error: debug and fix
6. Render result if visual output needed
7. Save to library if reusable
```

### Quick Script Execution
For quick testing of SDK concepts:
```
1. Read preamble
2. Execute simple test script
3. Check output
```

### Script Development Cycle
For developing new scripts:
```
1. Read relevant SDK docs
2. Create script with affinity-scaffold
3. Execute and test
4. Iterate based on results
5. Save final version
```

## Custom Tools & Environment

### Tools (`.mimocode/tools/`)

| Tool | Purpose | Usage |
|------|---------|-------|
| `affinity-scaffold` | Generate script boilerplate | `affinity-scaffold(task="shape", shape_type="Star")` |
| `affinity-check` | Validate script for issues | `affinity-check(script="...")` |

**affinity-scaffold** generates complete scripts with proper imports, doc check, and structure. Available tasks: `basic`, `dialog`, `shape`, `export`, `text`, `ai`, `batch`, `curve`.

**affinity-check** validates scripts for: missing "use strict", wrong imports, missing doc/spread setup, preview without clearPreviews, null dereference risks.

### Hooks (`.mimocode/hooks/`)

| Hook | Purpose |
|------|---------|
| `affinity-context` | Auto-injects Affinity scripting tips into system prompt when MCP is active |

### Templates (`.mimocode/skills/affinity-scripting/templates/`)

| Template | Purpose |
|----------|---------|
| `basic.js` | Minimal script with doc check and spread setup |
| `dialog-preview.js` | Dialog with live preview, cancel/restore pattern |
| `shape-create.js` | Create and position shapes with fill/stroke |
| `export.js` | Export document with preset selection |
| `text-format.js` | Text formatting with StoryBuilder/GlyphAtts |
| `ai-commands.js` | AI image generation/editing commands |
| `batch-operations.js` | Iterate spreads, process nodes, compound commands |
| `curve-manipulate.js` | Clone, transform, modify bezier curves |

**Usage:** Read a template, adapt it to your needs, execute via `affinity_execute_script`.

```
Read file: .mimocode/skills/affinity-scripting/templates/shape-create.js
```

## MCP Tools (11)

| Tool | Purpose |
|------|---------|
| `affinity_execute_script(script="...")` | Execute JavaScript in Affinity |
| `affinity_read_sdk_documentation_topic(filename="...")` | Read SDK docs |
| `affinity_list_sdk_documentation()` | List all doc topics |
| `affinity_list_library_scripts()` | List community scripts |
| `affinity_read_library_script(title="...")` | Read a community script |
| `affinity_save_script_to_library(title, description, code)` | Save script to library |
| `affinity_render_selection(document_session_uuid)` | Render selected node |
| `affinity_render_spread(document_session_uuid, spread_index)` | Render a spread |
| `affinity_search_sdk_hints(prompt)` | Search global hints |
| `affinity_add_sdk_hint(hint)` | Add hint for future sessions |
| `affinity_report_sdk_issue(description, code?)` | Report SDK bug |

## Critical Rules

- Scripts do NOT return values — use `console.log()` for output
- Scripts must be directly executable (no `module.exports.main`)
- File system access is restricted to Desktop (`app.userDesktopPath`)
- `NOT_ALLOWED` error = user restricted AI/FS/Network in Affinity settings
- Always use `"use strict"` at the top of scripts

## SDK Modules

### Core

```js
const { app } = require('/application.js');
const { Document, NewDocumentOptions, FileExportOptions } = require('/document.js');
const { DocumentCommand, CompoundCommandBuilder, AddChildNodesCommandBuilder } = require('/commands.js');
```

### Geometry & Shapes

```js
const { Transform, Curve, CurveBuilder, PolyCurve, Point, Vector, Rectangle, Size } = require('/geometry.js');
const { Shape, ShapeRectangle, ShapeStar } = require('/shapes.js');
```

### Nodes & Selection

```js
const { Node, ContainerNodeDefinition, PolyCurveNodeDefinition, FrameTextNodeDefinition } = require('/nodes.js');
const { Selection, TextSelection } = require('/selections.js');
```

### Colors & Fills

```js
const { Colour, SVG11, Gradient } = require('/colours.js');
const { FillDescriptor, SolidFill, GradientFill, FillType } = require('/fills.js');
const { LineStyle, LineStyleDescriptor } = require('/linestyle.js');
```

### Text

```js
const { Story, StoryBuilder } = require('/story.js');
const { StoryDelta } = require('/storydelta.js');
const { GlyphAtts } = require('/glyphatts.js');
const { ParagraphAtts } = require('/paragraphatts.js');
```

### UI & Dialogs

```js
const { Dialog, DialogResult } = require('/dialog.js');
```

### Utilities

```js
const { UnitType, UnitValue } = require('/units.js');
const { HttpRequest } = require('/network.js');
const { File, Directory } = require('/fs.js');
const { Buffer } = require('/buffer.js');
```

## Common Patterns

### 1. Basic Script Structure

```js
"use strict";

const { Document } = require('/document.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) {
  console.log('No document open');
  return;
}

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Your code here
console.log('Done');
```

### 2. Command Pattern (All Mutations)

Every mutation goes through `DocumentCommand` factories executed via `doc.executeCommand()`:

```js
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');

const sel = Selection.create(doc, doc.selection.nodes);
const cmd = DocumentCommand.createTransform(sel, Transform.createTranslate(100, 50));
doc.executeCommand(cmd);
```

### 3. Compound Commands (Single Undo)

```js
const { CompoundCommandBuilder } = require('/commands.js');

const builder = CompoundCommandBuilder.createCommand();
builder.add(DocumentCommand.createSetBrushFill(sel, fill1));
builder.add(DocumentCommand.createSetPenFill(sel, fill2));
builder.add(DocumentCommand.createTransform(sel, transform));
doc.executeCommand(builder.build());
```

### 4. Preview/Cancel Pattern (Interactive Dialogs)

```js
const historyStart = doc.history.position;

function applyPreview() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  // Execute preview commands with previewMode=true
  const cmd = DocumentCommand.createTransform(sel, transform);
  doc.executeCommand(cmd, true); // true = preview mode
}

function onOK() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  applyPreview(); // Final apply (no preview flag)
}

function onCancel() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  doc.history.position = historyStart; // Restore undo state
}
```

### 5. Curve Manipulation

```js
// Clone, transform to spread coords, modify, write back
const node = doc.selection.nodes.first;
const poly = node.curvesInterface.polyCurve.clone();
poly.transform(node.baseToSpreadTransform);

// Modify points...
for (const curve of poly.curves) {
  for (const seg of curve.segments) {
    seg.anchor.x += 10;
  }
}

doc.executeCommand(DocumentCommand.createSetCurves(node.curvesInterface, poly));
```

### 6. Shape Creation

```js
const { Shape } = require('/shapes.js');

const rect = Shape.createRectangle(spread);
rect.width = 200;
rect.height = 100;

const star = Shape.createStar(spread);
star.width = 150;
star.height = 150;

const ellipse = Shape.createEllipse(spread);
ellipse.width = 100;
ellipse.height = 80;
```

### 7. Color Creation

```js
const { RGBA8, RGB8, CMYKf, HSLf } = require('/colours.js');

// Direct constructors
const red = RGBA8(255, 0, 0, 255);
const blue = RGB8(0, 0, 255);

// CMYK
const cmyk = CMYKf(0.0, 1.0, 1.0, 0.0);

// HSL
const hsl = HSLf(0.0, 1.0, 0.5);

// SVG named colors
const { SVG11 } = require('/colours.js');
const navy = SVG11.colorName('Navy');

// Gradients
const { Gradient } = require('/colours.js');
const grad = Gradient.create([
  { offset: 0, colour: RGBA8(255, 0, 0, 255) },
  { offset: 1, colour: RGBA8(0, 0, 255, 255) }
]);
```

### 8. Dialog with Live Preview

```js
const { Dialog } = require('/dialog.js');
const { UnitType } = require('/units.js');

const dlg = Dialog.create('My Tool');

const col = dlg.addColumn();
const grp = col.addGroup('Parameters');

const sizeEditor = grp.addUnitValueEditor('Size:', 100, UnitType.Pixel);
const colorPicker = grp.addColourPicker('Color:', RGBA8(255, 0, 0, 255));
const okBtn = grp.addButtonSet(['OK', 'Cancel']);

// Live preview on change
sizeEditor.onValueChangedHandler = () => applyPreview();
dlg.onControlValueChangedHandler = () => applyPreview();

if (dlg.runModal() === DialogResult.Ok) {
  onOK();
} else {
  onCancel();
}
```

### 9. Text Formatting

```js
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');

const story = StoryBuilder.create();
story.addText('Hello World');

// Apply formatting to range
const range = { begin: 0, end: 5 };
const atts = GlyphAtts.createDefault();
atts.bold = true;
atts.colour = RGBA8(255, 0, 0, 255);

doc.executeCommand(DocumentCommand.createFormatText(
  Selection.create(doc, [node]),
  StoryDelta.createGlyphDouble(range, GlyphAtts.DoubleType.Bold, true)
));
```

### 10. Export

```js
const { FileExportOptions } = require('/document.js');

const presets = FileExportOptions.enumeratePresetNames(doc);
console.log('Available presets:', presets);

const options = FileExportOptions.createWithPresetName('JPEG (Best Quality)');
const area = FileExportArea.createForDocument();
doc.export('/Users/username/Desktop/output.jpg', options, area);
```

### 11. AI Commands

```js
// Generate image
await doc.generateImage('A sunset over mountains', {
  width: 1024,
  height: 768
});

// Remove background
doc.removeBackground(node);

// Select subject
doc.selectSubject(node);

// Depth detection
doc.detectDepth(node);

// Colorize
doc.colourise(node);

// Generative edit
doc.generativeEditImage(node, 'Add a rainbow');
```

### 12. Node Tree Traversal

```js
function traverse(node, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}${node[Symbol.toStringTag]}: ${node.name || 'unnamed'}`);

  if (node.children) {
    for (const child of node.children) {
      traverse(child, depth + 1);
    }
  }
}

// Traverse all spreads
for (const spread of doc.spreads) {
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  traverse(spread);
}
```

### 13. Batch Operations Across Spreads

```js
for (const spread of doc.spreads) {
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

  // Get all nodes on this spread
  const nodes = spread.childNodes;
  for (const node of nodes) {
    // Process each node
  }
}
```

### 14. HTTP Requests

```js
const { HttpRequest, RequestMethod } = require('/network.js');

// Synchronous
const req = HttpRequest.create('https://api.example.com/data', RequestMethod.Get);
const response = req.do();
console.log('Status:', response.statusCode);
console.log('Body:', response.body);

// Async
const req2 = HttpRequest.create('https://api.example.com/data', RequestMethod.Post);
req2.body = JSON.stringify({ key: 'value' });
req2.doAsync((response) => {
  console.log('Async result:', response.body);
});
```

### 15. File System (Desktop Only)

```js
const { File } = require('/fs.js');
const { app } = require('/application.js');

const desktopPath = app.userDesktopPath;
const filePath = `${desktopPath}/output.txt`;

// Write
const file = File.create(filePath);
file.writeAll('Hello from Affinity script!');

// Read
const content = file.readAll();
console.log('File content:', content);
```

## Node Types

| Type | Check | Description |
|------|-------|-------------|
| `ShapeNode` | `node.isShapeNode` | Vector shapes |
| `ImageNode` | `node.isImageNode` | Raster images |
| `GroupNode` | `node.isGroupNode` | Groups |
| `ContainerNode` | `node.isContainerNode` | Containers (artboards, pages) |
| `FrameTextNode` | `node.isFrameTextNode` | Text frames |
| `EmbeddedDocumentNode` | `node.isEmbeddedDocumentNode` | Embedded documents |

## Shape Types

| Shape | Factory |
|-------|---------|
| Rectangle | `Shape.createRectangle(spread)` |
| Rounded Rectangle | `Shape.createRoundedRectangle(spread)` |
| Ellipse | `Shape.createEllipse(spread)` |
| Triangle | `Shape.createTriangle(spread)` |
| Diamond | `Shape.createDiamond(spread)` |
| Star | `Shape.createStar(spread)` |
| Polygon | `Shape.createPolygon(spread)` |
| Cog | `Shape.createCog(spread)` |
| Arrow | `Shape.createArrow(spread)` |
| Heart | `Shape.createHeart(spread)` |
| Cloud | `Shape.createCloud(spread)` |
| Spiral | `Shape.createSpiral(spread)` |
| QR Code | `Shape.createQRCodeURL(spread, url)` |

## Document Properties

```js
const doc = app.documents.current;

doc.name           // Document name
doc.widthPixels    // Width in pixels
doc.heightPixels   // Height in pixels
doc.dpi            // DPI
doc.spreads        // All spreads
doc.selection      // Current selection
doc.history        // Undo history
```

## Unit Types

```js
const { UnitType } = require('/units.js');

UnitType.Pixel
UnitType.Point
UnitType.Millimetre
UnitType.Centimetre
UnitType.Inch
UnitType.Degree
UnitType.Number
UnitType.Percentage
```

## Layer Effects

```js
const { LayerEffect } = require('/layereffects.js');

// Available effect types:
// OuterShadowLayerEffect
// InnerShadowLayerEffect
// OuterGlowLayerEffect
// InnerGlowLayerEffect
// BevelEmbossLayerEffect
// PhongBevelLayerEffect
// OutlineLayerEffect
// ColourOverlayLayerEffect
// GradientOverlayLayerEffect
// GaussianBlurLayerEffect
```

## Blend Modes

```js
const { BlendMode } = require('affinity:common');

// Common modes:
BlendMode.Normal
BlendMode.Multiply
BlendMode.Screen
BlendMode.Overlay
BlendMode.Darken
BlendMode.Lighten
BlendMode.ColourDodge
BlendMode.ColourBurn
BlendMode.HardLight
BlendMode.SoftLight
BlendMode.Difference
BlendMode.Exclusion
BlendMode.Hue
BlendMode.Saturation
BlendMode.Colour
BlendMode.Luminosity
```

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| `NOT_ALLOWED` | User restricted AI/FS/Network | Check Affinity Preferences > General |
| `Cannot read property` | Wrong node type | Check `node.isShapeNode` etc. |
| `No document open` | No document active | Open a document first |
| `Script must be directly executable` | Used `module.exports` | Remove exports, use top-level code |
| Preview not clearing | Missing `createClearPreviews()` | Add before applying final |
| Undo not working | Missing history save | Save `doc.history.position` before |
| `The preamble documentation topic not found` | Preamble not loaded | Ensure MCP connected, retry `affinity_read_sdk_documentation_topic(filename="preamble")` |
| `No document with that Uuid exists` | Invalid document session UUID | Open document in Affinity, get new UUID from script output |
| `Cannot read property 'children' of null` | Node doesn't exist or wrong type | Check node exists: `if (!node) { console.log('Node not found'); return; }` |
| `Spread has no children` | Empty spread | Check `spread.children.count > 0` before iterating |
| `Command failed` | Invalid command parameters | Check `DocumentCommand.create*()` arguments match SDK docs |

## Error Recovery Patterns

### Common Execution Loop
```
1. Read preamble (REQUIRED for all scripts)
2. Execute script
3. Check console.log() output
4. If error: read relevant SDK docs
5. Fix and re-execute
6. Render result
```

### Preamble First Rule
**Always read preamble before executing any script:**
```
affinity_read_sdk_documentation_topic(filename="preamble")
```
This loads essential SDK context. Without it, scripts may fail with obscure errors.

### Document UUID Recovery
If `affinity_render_spread` fails with "No document with that Uuid exists":
1. Check if document is still open in Affinity
2. Get new UUID from `affinity_execute_script` output
3. Use the new UUID for rendering

### Script Output Debugging
Scripts use `console.log()` for output. To debug:
1. Add `console.log('DEBUG: variable =', variable);` statements
2. Execute script
3. Check console output for debug messages
4. Remove debug statements when done

### Node Type Safety
Always check node types before operations:
```js
if (!node) {
  console.log('Node not found');
  return;
}
if (!node.isShapeNode) {
  console.log('Node is not a shape');
  return;
}
```

## Quick Reference: Reading Docs

```js
// Read specific SDK topics
affinity_read_sdk_documentation_topic(filename="preamble")
affinity_read_sdk_documentation_topic(filename="document.js")
affinity_read_sdk_documentation_topic(filename="commands.js")
affinity_read_sdk_documentation_topic(filename="shapes.js")
affinity_read_sdk_documentation_topic(filename="dialog.js")

// Read community scripts
affinity_list_library_scripts()
affinity_read_library_script(title="Gridify")
affinity_read_library_script(title="RadialRepeat")
```
