# Script Patterns & Recipes

> Common SDK 3.3.0 patterns with copy-paste examples.

## 1. Basic Script Structure

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

## 2. Command Pattern (All Mutations)

Every mutation goes through `DocumentCommand` factories executed via `doc.executeCommand()`:

```js
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');

const sel = Selection.create(doc, doc.selection.nodes);
const cmd = DocumentCommand.createTransform(sel, Transform.createTranslate(100, 50));
doc.executeCommand(cmd);
```

## 3. Compound Commands (Single Undo)

```js
const { CompoundCommandBuilder } = require('/commands.js');

const builder = CompoundCommandBuilder.createCommand();
builder.add(DocumentCommand.createSetBrushFill(sel, fill1));
builder.add(DocumentCommand.createSetPenFill(sel, fill2));
builder.add(DocumentCommand.createTransform(sel, transform));
doc.executeCommand(builder.build());
```

## 4. Preview/Cancel Pattern (Interactive Dialogs)

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

## 5. Curve Manipulation

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

## 6. Shape Creation

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

## 7. Color Creation

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

## 8. Dialog with Live Preview

```js
const { Dialog, DialogResult } = require('/dialog.js');
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

## 9. Text Formatting

```js
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');
const { StoryDelta } = require('/storydelta.js');

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

## 10. Export

```js
const { FileExportOptions } = require('/document.js');

const presets = FileExportOptions.enumeratePresetNames(doc);
console.log('Available presets:', presets);

const options = FileExportOptions.createWithPresetName('JPEG (Best Quality)');
const area = FileExportArea.createForDocument();
doc.export('/Users/username/Desktop/output.jpg', options, area);
```

## 11. Batch Processing

```js
const { AddChildNodesCommandBuilder } = require('/commands.js');

const builder = AddChildNodesCommandBuilder.createCommand(spread, NodeChildType.Main);
const nodes = spread.children;
for (const node of nodes) {
  // Process each node
}
doc.executeCommand(builder.build());
```
