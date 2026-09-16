"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode } = require('/commands.js');
const { PolyCurveNodeDefinition } = require('/nodes.js');
const { CurveBuilder, PolyCurve } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { ArrowHead, ArrowHeadStyle, LineStyleDescriptor } = require('/linestyle.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-M: no document"); return; }

function arrowLine(y, label, opts) {
  try {
    var b = AddChildNodesCommandBuilder.create();
    var cb = CurveBuilder.create(); cb.begin({x:50,y:y}); cb.lineTo({x:250,y:y});
    var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());
    var front = ArrowHead.create(ArrowHeadStyle.CircleSolid, Object.assign({scaleX:2, scaleY:2}, opts));
    var back = ArrowHead.create(ArrowHeadStyle.CircleSolid, Object.assign({scaleX:2, scaleY:2}, opts));
    var lsd = LineStyleDescriptor.createDefault(2).cloneWithNewArrowHeads(front, back);
    var nd = PolyCurveNodeDefinition.create(pc, FillDescriptor.createNone(), mkF({r:66,g:133,b:244}), lsd, FillDescriptor.createNone());
    b.addPolyCurveNode(nd);
    doc.executeCommand(b.createCommand(true, NodeChildType.Main));
    console.log("PROBE-M: " + label + " OK");
  } catch (e) {
    console.log("PROBE-M: " + label + " EXCEPTION: " + (e && e.message ? e.message : e));
  }
}

var spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
arrowLine(200, "M1-default", {});
arrowLine(250, "M2-externalAnchor", {externalAnchor:true});
arrowLine(300, "M3-internalAnchor-false", {internalAnchor:false});
console.log("PROBE-M: finished");
