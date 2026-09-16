"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Ensure we have a selection
if (doc.selection.nodes.length === 0) {
  const firstNode = spread.childNodes.first;
  if (firstNode) {
    doc.executeCommand(DocumentCommand.createSetSelection(
      Selection.create(doc, [firstNode])
    ));
  }
}

const node = doc.selection.nodes.first;
if (!node) { console.log('No node to process'); return; }

// --- Uncomment the AI command you need ---

// Generate new image from prompt
// await doc.generateImage('A sunset over mountains', { width: 1024, height: 768 });

// Generative edit on existing image
// await doc.generativeEditImage(node, 'Add a rainbow in the sky');

// Remove background from image
// await doc.removeBackground(node);

// Auto-select subject
// await doc.selectSubject(node);

// Detect depth map
// await doc.detectDepth(node);

// Colorize black and white image
// await doc.colourise(node);

console.log('AI commands template ready - uncomment desired command');
