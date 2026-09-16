"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection, TextSelection } = require('/selections.js');
const { StoryBuilder } = require('/story.js');
const { StoryDelta } = require('/storydelta.js');
const { GlyphAtts } = require('/glyphatts.js');
const { RGBA8 } = require('/colours.js');
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
