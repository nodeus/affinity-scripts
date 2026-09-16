"use strict";

const { Document } = require('/document');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands');
const { Selection } = require('/selections');
const { app } = require('/application');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

let processed = 0;
let errors = 0;

for (const spread of doc.spreads) {
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

  const nodes = spread.childNodes;
  for (const node of nodes) {
    try {
      // === Your processing logic here ===

      // Example 1: Set opacity to 80%
      // const sel = Selection.create(doc, [node]);
      // doc.executeCommand(DocumentCommand.createSetOpacity(sel, 0.8));

      // Example 2: Move down by 10px
      // const sel = Selection.create(doc, [node]);
      // doc.executeCommand(DocumentCommand.createTransform(sel, Transform.createTranslate(0, 10)));

      // Example 3: Rename
      // node.name = 'Renamed_' + processed;

      processed++;
    } catch (e) {
      console.log('Error on node: ' + (node.name || 'unnamed') + ' - ' + e);
      errors++;
    }
  }
}

console.log('Processed: ' + processed + ', Errors: ' + errors);
console.log('Spreads: ' + doc.spreads.length);
