"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode, InsertionMode } = require('/commands.js');
const { ShapeNodeDefinition, FrameTextNodeDefinition, PolyCurveNodeDefinition, ContainerNodeDefinition } = require('/nodes.js');
const { ShapeRectangle } = require('/shapes.js');
const { Rectangle, CurveBuilder, PolyCurve } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { ArrowHead, ArrowHeadStyle, LineStyleDescriptor } = require('/linestyle.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}
function test(name, fn) {
  try { fn(); console.log("PROBE-L: " + name + " OK"); }
  catch (e) { console.log("PROBE-L: " + name + " EXCEPTION: " + (e && e.message ? e.message : e)); }
}

test("L1-arrowheadstyle-keys", function(){
  var keys = Object.keys(ArrowHeadStyle);
  console.log("PROBE-L: L1 keys=[" + keys.join(",") + "]");
});

var doc = app.documents.current;
if (!doc) { console.log("PROBE-L: no document"); return; }

test("L2-line-with-arrows", function(){
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var b = AddChildNodesCommandBuilder.create();
  var cb = CurveBuilder.create(); cb.begin({x:50,y:200}); cb.lineTo({x:250,y:200});
  var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());
  var front = ArrowHead.create(ArrowHeadStyle.Circle, {scaleX:1.5, scaleY:1.5});
  var back = ArrowHead.create(ArrowHeadStyle.Circle, {scaleX:1.5, scaleY:1.5});
  var lsd = LineStyleDescriptor.createDefault(2).cloneWithNewArrowHeads(front, back);
  var nd = PolyCurveNodeDefinition.create(pc, FillDescriptor.createNone(), mkF({r:66,g:133,b:244}), lsd, FillDescriptor.createNone());
  b.addPolyCurveNode(nd);
  var cmd = b.createCommand(true, NodeChildType.Main);
  doc.executeCommand(cmd);
  var n = cmd.newNodes.at(0);
  console.log("PROBE-L: L2 weight=" + n.lineWeightPts);
});

test("L3-group-two-phase", function(){
  var g = AddChildNodesCommandBuilder.create();
  g.addContainerNode(ContainerNodeDefinition.create("probe group"));
  var gcmd = g.createCommand(true, NodeChildType.Main);
  doc.executeCommand(gcmd);
  var groupNode = gcmd.newNodes.at(0);
  console.log("PROBE-L: L3 group=" + groupNode.userDescription);
  var b2 = AddChildNodesCommandBuilder.create();
  b2.setInsertionTarget(groupNode);
  b2.setInsertionMode(InsertionMode.InsertAtEnd);
  var sh = ShapeRectangle.create(); sh.setAbsoluteSizes(true, 60, 30);
  b2.addNode(ShapeNodeDefinition.create(sh, new Rectangle(300, 200, 60, 30), mkF({r:234,g:67,b:53}), null, null, null));
  doc.executeCommand(b2.createCommand(true, NodeChildType.Main));
  console.log("PROBE-L: L3 children=" + groupNode.children.length);
});
console.log("PROBE-L: finished");
