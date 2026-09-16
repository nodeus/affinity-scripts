"use strict";

const { Document } = require('/document');
const { DocumentCommand } = require('/commands');
const { Shape } = require('/shapes');
const { Selection } = require('/selections');
const { RGBA8 } = require('/colours');
const { Transform } = require('/geometry');
const { app } = require('/application');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Create shape (change factory as needed):
// Shape.createRectangle, createRoundedRectangle, createEllipse,
// createTriangle, createDiamond, createStar, createPolygon,
// createCog, createArrow, createHeart, createCloud, createSpiral
const shape = Shape.createRectangle(spread);
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

// Set fill color
const fillSel = Selection.create(doc, [shape]);
const { FillDescriptor, SolidFill, FillType } = require('/fills');
const fill = FillDescriptor.createDefault();
fill.fillType = FillType.Solid;
fill.solidFill = SolidFill.create(RGBA8(66, 133, 244, 255));
doc.executeCommand(DocumentCommand.createSetBrushFill(fillSel, fill));

console.log('Created shape: ' + shape.width + 'x' + shape.height);
