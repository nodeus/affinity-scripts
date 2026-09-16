import { tool } from "@mimo-ai/plugin"

const templates: Record<string, (opts: Record<string, string>) => string> = {
  basic: () => `"use strict";

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
`,

  dialog: () => `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
const { Selection } = require('/selections.js');
const { Dialog, DialogResult } = require('/dialog.js');
const { UnitType } = require('/units.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const historyStart = doc.history.position;
let inPreview = false;

const sel = doc.selection.nodes.length > 0
  ? Selection.create(doc, doc.selection.nodes)
  : null;

function applyPreview() {
  if (inPreview || !sel) return;
  inPreview = true;
  try {
    doc.executeCommand(DocumentCommand.createClearPreviews());
    // Preview commands here
  } finally {
    inPreview = false;
  }
}

function onOK() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  // Final apply here
}

function onCancel() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  doc.history.position = historyStart;
}

const dlg = Dialog.create('My Tool');
const col = dlg.addColumn();
const grp = col.addGroup('Parameters');

// Add controls here
const sizeEditor = grp.addUnitValueEditor('Size:', 100, UnitType.Pixel);
sizeEditor.onValueChangedHandler = applyPreview;
dlg.onControlValueChangedHandler = applyPreview;

const result = dlg.runModal();
if (result === DialogResult.Ok) {
  onOK();
  console.log('Applied');
} else {
  onCancel();
  console.log('Cancelled');
}
`,

  shape: (opts) => {
    const shapeType = opts.shape_type || 'Rectangle';
    const factoryMap: Record<string, string> = {
      Rectangle: 'createRectangle',
      RoundedRectangle: 'createRoundedRectangle',
      Ellipse: 'createEllipse',
      Triangle: 'createTriangle',
      Diamond: 'createDiamond',
      Star: 'createStar',
      Polygon: 'createPolygon',
      Cog: 'createCog',
      Arrow: 'createArrow',
      Heart: 'createHeart',
      Cloud: 'createCloud',
      Spiral: 'createSpiral',
    };
    const factory = factoryMap[shapeType] || 'createRectangle';
    return `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder } = require('/commands.js');
const { Shape } = require('/shapes.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const shape = Shape.${factory}(spread);
shape.width = 200;
shape.height = 150;

// Center on page
const pageW = doc.widthPixels;
const pageH = doc.heightPixels;
const box = shape.getSpreadBaseBox();
const dx = (pageW - box.width) / 2 - box.x;
const dy = (pageH - box.height) / 2 - box.y;
const sel = Selection.create(doc, [shape]);
doc.executeCommand(DocumentCommand.createTransform(sel, Transform.createTranslate(dx, dy)));

console.log('Created ${shapeType}: ' + shape.width + 'x' + shape.height);
`;
  },

  export: () => `"use strict";

const { Document, FileExportOptions } = require('/document.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

// List available presets
const presets = FileExportOptions.enumeratePresetNames(doc);
console.log('Available presets:');
presets.forEach(p => console.log('  - ' + p));

// Export with a preset
const options = FileExportOptions.createWithPresetName('JPEG (Best Quality)');
const area = FileExportArea.createForDocument();
const outPath = app.userDesktopPath + '/export_' + doc.name + '.jpg';
doc.export(outPath, options, area);
console.log('Exported to: ' + outPath);
`,

  text: () => `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection, TextSelection } = require('/selections.js');
const { StoryBuilder } = require('/storybuilder.js');
const { StoryDelta } = require('/storydelta.js');
const { GlyphAtts } = require('/glyphatts.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Find first text frame
let textNode = null;
for (const node of spread.childNodes) {
  if (node.isFrameTextNode) { textNode = node; break; }
}

if (!textNode) {
  console.log('No text frame found');
  return;
}

const storyInterface = textNode.storyInterface;
const story = storyInterface.story;

// Read text
const text = story.getText(0, story.length);
console.log('Current text: ' + text);

// Format: make first 5 characters bold
const sel = Selection.create(doc, [textNode]);
const textSel = TextSelection.create([{ begin: 0, end: 5 }]);
sel.addSubSelectionForNode(textNode, textSel);

const delta = StoryDelta.createGlyphDouble(
  { begin: 0, end: 5 },
  GlyphAtts.DoubleType.Bold,
  true
);
doc.executeCommand(DocumentCommand.createFormatText(sel, delta));
console.log('Formatted text');
`,

  ai: () => `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const sel = doc.selection.nodes;
if (sel.length === 0) {
  console.log('No selection - selecting first node');
  // Select first node
  const firstNode = spread.childNodes.first;
  if (firstNode) {
    doc.executeCommand(DocumentCommand.createSetSelection(
      Selection.create(doc, [firstNode])
    ));
  }
}

const node = doc.selection.nodes.first;
if (!node) { console.log('No node to process'); return; }

// AI operations (uncomment as needed):
// await doc.generateImage('A sunset over mountains');
// await doc.generativeEditImage(node, 'Add a rainbow');
// await doc.removeBackground(node);
// await doc.selectSubject(node);
// await doc.detectDepth(node);
// await doc.colourise(node);

console.log('AI commands available - uncomment in script');
`,

  batch: () => `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

let processed = 0;

for (const spread of doc.spreads) {
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

  const nodes = spread.childNodes;
  for (const node of nodes) {
    try {
      // Process each node here
      // Example: set opacity to 80%
      // const sel = Selection.create(doc, [node]);
      // doc.executeCommand(DocumentCommand.createSetOpacity(sel, 0.8));

      processed++;
    } catch (e) {
      console.log('Error on node: ' + (node.name || 'unnamed') + ' - ' + e);
    }
  }
}

console.log('Processed ' + processed + ' nodes across ' + doc.spreads.length + ' spreads');
`,

  curve: () => `"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');
const { Transform } = require('/geometry.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const node = doc.selection.nodes.first;
if (!node) { console.log('No selection'); return; }

if (!node.curvesInterface) {
  console.log('Selected node has no curves');
  return;
}

// Clone and transform to spread coordinates
const poly = node.curvesInterface.polyCurve.clone();
poly.transform(node.baseToSpreadTransform);

// Modify points
for (const curve of poly.curves) {
  for (const seg of curve.segments) {
    // Example: offset all anchor points by 10px
    seg.anchor.x += 10;
    seg.anchor.y += 10;
  }
}

// Write back
doc.executeCommand(DocumentCommand.createSetCurves(node.curvesInterface, poly));
console.log('Modified ' + poly.curves.length + ' curves');
`,
}

export default tool({
  description: "Generate Affinity scripting boilerplate. Use when starting a new Affinity script to get proper imports, doc check, and structure.",
  args: {
    task: tool.schema.enum([
      "basic", "dialog", "shape", "export", "text", "ai", "batch", "curve"
    ]).describe("Script type to generate"),
    shape_type: tool.schema.enum([
      "Rectangle", "RoundedRectangle", "Ellipse", "Triangle", "Diamond",
      "Star", "Polygon", "Cog", "Arrow", "Heart", "Cloud", "Spiral"
    ]).optional().describe("Shape type (only for task=shape)"),
  },
  async execute(args, ctx) {
    const generator = templates[args.task];
    if (!generator) return `Unknown task type: ${args.task}`;

    const opts: Record<string, string> = {};
    if (args.shape_type) opts.shape_type = args.shape_type;

    const script = generator(opts);
    return script;
  },
})
