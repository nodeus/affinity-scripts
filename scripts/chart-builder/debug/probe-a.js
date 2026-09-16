"use strict";
const { Document } = require('/document.js');
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { ShapeRectangle } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { FillDescriptor } = require('/fills.js');
const { app } = require('/application.js');

var doc = app.documents.current;
if (!doc) { console.log("PROBE-A: no document"); return; }
try {
  var b = AddChildNodesCommandBuilder.create();
  var sh = ShapeRectangle.create();
  sh.setAbsoluteSizes(true, 100, 60);
  b.addNode(ShapeNodeDefinition.create(sh, new Rectangle(50, 50, 100, 60), FillDescriptor.createNone(), null, null, null));
  doc.executeCommand(b.createCommand(true, NodeChildType.Main));
  console.log("PROBE-A: done, no exception");
} catch (e) {
  console.log("PROBE-A: EXCEPTION: " + (e && e.message ? e.message : e));
}
