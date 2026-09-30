"use strict";

const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection, TextSelection } = require('/selections.js');
const { StoryDelta } = require('/storydelta.js');
const { FontWeight } = require('/fonts.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Find first text node
let textNode = null;
const stack = [...spread.children];
while (stack.length && !textNode) {
  const node = stack.pop();
  if (node.isTextNode) { textNode = node; break; }
  if (node.children) for (const ch of node.children) stack.push(ch);
}

if (!textNode) {
  console.log('No text frame found');
  return;
}

const storyInterface = textNode.storyInterface;
const story = storyInterface.story;
const range = storyInterface.storyRange;

// Read text
const text = story.getText(range.begin, range.end - range.begin);
console.log('Current text: ' + text);

// Format: make whole story bold
const sel = Selection.create(doc, textNode);
sel.addSubSelectionForNode(textNode, TextSelection.create([{ begin: range.begin, end: range.end }]));
doc.formatText(StoryDelta.createWeight(FontWeight.Bold), sel);
console.log('Formatted text');
