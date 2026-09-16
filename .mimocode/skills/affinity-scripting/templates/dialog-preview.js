"use strict";

const { Document } = require('/document.js');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands.js');
const { Selection } = require('/selections.js');
const { Dialog, DialogResult } = require('/dialog.js');
const { UnitType } = require('/units.js');
const { RGBA8 } = require('/colours.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

const historyStart = doc.history.position;
let inPreview = false;

const nodes = doc.selection.nodes;
const sel = nodes.length > 0 ? Selection.create(doc, nodes) : null;

function applyPreview() {
  if (inPreview || !sel) return;
  inPreview = true;
  try {
    doc.executeCommand(DocumentCommand.createClearPreviews());

    // Example: scale selection
    const scale = sizeEditor.value / 100;
    const cmd = DocumentCommand.createTransform(sel, Transform.createScale(scale, scale));
    doc.executeCommand(cmd, true); // true = preview mode

  } finally {
    inPreview = false;
  }
}

function onOK() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  applyPreview(); // Final apply (no preview flag)
}

function onCancel() {
  doc.executeCommand(DocumentCommand.createClearPreviews());
  doc.history.position = historyStart;
}

// Build dialog
const dlg = Dialog.create('My Tool');
const col = dlg.addColumn();
const grp = col.addGroup('Parameters');

const sizeEditor = grp.addUnitValueEditor('Scale (%):', 100, UnitType.Number);
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
