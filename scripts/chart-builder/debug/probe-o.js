"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, NodeMoveType, InsertionMode } = require('/commands.js');
const { ContainerNodeDefinition } = require('/nodes.js');
const { Selection } = require('/selections.js');
const { app } = require('/application.js');

console.log("PROBE-O: typeof GroupNodeDefinitionApi=" + (typeof GroupNodeDefinitionApi));
try {
  console.log("PROBE-O: NodeMoveType keys=[" + Object.keys(NodeMoveType).join(",") + "]");
} catch (e) {
  console.log("PROBE-O: NodeMoveType EXCEPTION: " + (e && e.message ? e.message : e));
}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-O: no document"); return; }

try {
  if (typeof GroupNodeDefinitionApi === "undefined") { console.log("PROBE-O: no native group api, stop"); return; }
  var apiKeys = Object.getOwnPropertyNames(GroupNodeDefinitionApi);
  console.log("PROBE-O: api keys=[" + apiKeys.join(",") + "]");
  if (typeof GroupNodeDefinitionApi.createDefault !== "function") { console.log("PROBE-O: no createDefault, stop"); return; }

  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var g = AddChildNodesCommandBuilder.create();
  g.addContainerNode({handle: GroupNodeDefinitionApi.createDefault()});
  var gcmd = g.createCommand(true, NodeChildType.Main);
  doc.executeCommand(gcmd);
  var node = gcmd.newNodes.at(0);
  var tag = "?";
  try { tag = node[Symbol.toStringTag]; } catch (e) {}
  console.log("PROBE-O: created tag=" + tag);
  var sel = Selection.create(doc, [node]);
  doc.executeCommand(DocumentCommand.createSetDescription(sel, "o group"));
  console.log("PROBE-O: renamed, done");
} catch (e) {
  console.log("PROBE-O: EXCEPTION: " + (e && e.message ? e.message : e));
}
console.log("PROBE-O: finished");
