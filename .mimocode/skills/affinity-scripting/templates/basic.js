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
