"use strict";

const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { ShapeRectangle, ShapeEllipse, ShapeStar } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Shape definition (change shape factory as needed):
// ShapeRectangle, ShapeEllipse, ShapeStar, ShapeArrow, ShapePie, ...
const def = ShapeNodeDefinition.createDefault();
def.shape = ShapeRectangle.create();
def.setBoundingRectangle(new Rectangle(100, 100, 200, 150));

const builder = AddChildNodesCommandBuilder.create();
builder.addNode(def);
const cmd = builder.createCommand(false);
doc.executeCommand(cmd);

const node = [...cmd.newNodes][0];
const box = node.getSpreadBaseBox();
console.log('Created: ' + box.width + 'x' + box.height + ' at ' + box.x + ',' + box.y);
