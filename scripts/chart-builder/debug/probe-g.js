"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { Shape, ShapeType } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-G: no document"); return; }
try {
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var b = AddChildNodesCommandBuilder.create();
  var pp = Shape.create(ShapeType.Pie); pp.innerRadius = 0.67; pp.startAngle = 0; pp.sweep = Math.PI*2; pp.closePie();
  console.log("PROBE-G: pie shape ok");
  b.addNode(ShapeNodeDefinition.create(pp, new Rectangle(50, 50, 100, 100), mkF({r:255,g:255,b:255}), null, null, null));
  console.log("PROBE-G: nodedef ok");
  doc.executeCommand(b.createCommand(true, NodeChildType.Main));
  console.log("PROBE-G: done, no exception");
} catch (e) {
  console.log("PROBE-G: EXCEPTION: " + (e && e.message ? e.message : e));
}
