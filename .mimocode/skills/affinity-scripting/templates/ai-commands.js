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
  const firstNode = spread.children.first;
  if (firstNode) {
    doc.executeCommand(DocumentCommand.createSetSelection(
      Selection.create(doc, [firstNode])
    ));
  }
}

const node = doc.selection.nodes.first;
if (!node) { console.log('No node to process'); return; }

// --- Uncomment the AI command you need (all synchronous; they work on the
// --- current selection / document; AI must be allowed in Affinity settings,
// --- otherwise the call returns NOT_ALLOWED) ---

// Generate new image from prompt
// doc.generateImage('A sunset over mountains');

// Generative edit with prompt (applies to selection)
// doc.generativeEditImage('Add a rainbow in the sky');

// Remove background (applies to selection)
// doc.removeBackground();

// Auto-select subject
// doc.selectSubject();

// Detect depth map
// doc.detectDepth();

// Colorize black and white image
// doc.colourise();

console.log('AI commands template ready - uncomment desired command');
