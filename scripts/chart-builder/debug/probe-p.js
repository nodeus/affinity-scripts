"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, InsertionMode } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { ShapeRectangle } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { BlendMode } = require('/commands.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

var dom = null;
try {
  dom = require('affinity:dom');
  console.log("PROBE-P: affinity:dom loaded");
} catch (e) {
  console.log("PROBE-P: require EXCEPTION: " + (e && e.message ? e.message : e));
  return;
}
try {
  var keys = Object.getOwnPropertyNames(dom).filter(function(k){ return /Group/i.test(k); });
  console.log("PROBE-P: group keys=[" + keys.join(",") + "]");
} catch (e) {
  console.log("PROBE-P: keys EXCEPTION: " + (e && e.message ? e.message : e));
  return;
}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-P: no document"); return; }

try {
  if (!dom.GroupNodeDefinitionApi || typeof dom.GroupNodeDefinitionApi.createDefault !== "function") {
    console.log("PROBE-P: no GroupNodeDefinitionApi.createDefault, stop");
    return;
  }
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var g = AddChildNodesCommandBuilder.create();
  g.addContainerNode({handle: dom.GroupNodeDefinitionApi.createDefault()});
  var gcmd = g.createCommand(true, NodeChildType.Main);
  doc.executeCommand(gcmd);
  console.log("PROBE-P: newNodes=" + gcmd.newNodes.length);
  var node = gcmd.newNodes.at(0);
  var sel = Selection.create(doc, [node]);
  doc.executeCommand(DocumentCommand.createSetDescription(sel, "p group"));
  var b2 = AddChildNodesCommandBuilder.create();
  b2.setInsertionTarget(node);
  b2.setInsertionMode(InsertionMode.InsertAtEnd);
  var sh = ShapeRectangle.create(); sh.setAbsoluteSizes(true, 60, 30);
  b2.addNode(ShapeNodeDefinition.create(sh, new Rectangle(300, 250, 60, 30), mkF({r:234,g:67,b:53}), null, null, null));
  doc.executeCommand(b2.createCommand(true, NodeChildType.Main));
  console.log("PROBE-P: children=" + node.children.length + ", done");
} catch (e) {
  console.log("PROBE-P: EXCEPTION: " + (e && e.message ? e.message : e));
}
console.log("PROBE-P: finished");
