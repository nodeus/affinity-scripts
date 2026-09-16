"use strict";

const { Document } = require('/document');
const { DocumentCommand } = require('/commands');
const { Selection } = require('/selections');
const { Transform } = require('/geometry');
const { app } = require('/application');

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

// Inspect curves
console.log('Curves: ' + poly.curves.length);
for (let i = 0; i < poly.curves.length; i++) {
  const curve = poly.curves[i];
  console.log('  Curve ' + i + ': ' + curve.segments.length + ' segments');
}

// === Modify points ===

// Example 1: Offset all anchors
for (const curve of poly.curves) {
  for (const seg of curve.segments) {
    seg.anchor.x += 10;
    seg.anchor.y += 10;
  }
}

// Example 2: Scale from center (uncomment)
// const box = poly.boundingBox;
// const cx = box.x + box.width / 2;
// const cy = box.y + box.height / 2;
// const scale = 1.5;
// for (const curve of poly.curves) {
//   for (const seg of curve.segments) {
//     seg.anchor.x = cx + (seg.anchor.x - cx) * scale;
//     seg.anchor.y = cy + (seg.anchor.y - cy) * scale;
//     if (seg.controlPointIn) {
//       seg.controlPointIn.x = cx + (seg.controlPointIn.x - cx) * scale;
//       seg.controlPointIn.y = cy + (seg.controlPointIn.y - cy) * scale;
//     }
//     if (seg.controlPointOut) {
//       seg.controlPointOut.x = cx + (seg.controlPointOut.x - cx) * scale;
//       seg.controlPointOut.y = cy + (seg.controlPointOut.y - cy) * scale;
//     }
//   }
// }

// Write back
doc.executeCommand(DocumentCommand.createSetCurves(node.curvesInterface, poly));
console.log('Modified ' + poly.curves.length + ' curves');
