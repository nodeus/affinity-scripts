"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode } = require('/commands.js');
const { PolyCurveNodeDefinition } = require('/nodes.js');
const { CurveBuilder, PolyCurve } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { LineStyleDescriptor } = require('/linestyle.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-F: no document"); return; }
try {
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var b = AddChildNodesCommandBuilder.create();
  var cb = CurveBuilder.create(); cb.begin({x:50,y:50}); cb.lineTo({x:150,y:100});
  console.log("PROBE-F: curvebuilder ok");
  var curve = cb.createCurve();
  var pc = PolyCurve.create(); pc.addCurve(curve);
  console.log("PROBE-F: polycurve ok");
  var nd = PolyCurveNodeDefinition.create(
    pc,
    FillDescriptor.createSolid(SolidFill.create(Colour.createRGBA8({r:0,g:0,b:0,alpha:0})), BlendMode.Normal),
    LineStyleDescriptor.createDefault(2),
    FillDescriptor.createSolid(SolidFill.create(mkC({r:66,g:133,b:244})), BlendMode.Normal),
    FillDescriptor.createNone()
  );
  console.log("PROBE-F: nodedef ok");
  b.addPolyCurveNode(nd);
  console.log("PROBE-F: addPolyCurveNode ok");
  doc.executeCommand(b.createCommand(true, NodeChildType.Main));
  console.log("PROBE-F: done, no exception");
} catch (e) {
  console.log("PROBE-F: EXCEPTION: " + (e && e.message ? e.message : e));
}
