"use strict";
const { Document } = require('/document.js');
const { app } = require('/application.js');

var doc = app.documents.current;
if (!doc) { console.log("PROBE-K: no document"); return; }
if (doc.selection.nodes.length === 0) { console.log("PROBE-K: select a text frame first"); return; }
var node = doc.selection.nodes.at(0);
try { console.log("PROBE-K: node=" + node[Symbol.toStringTag]); }
catch (e) { console.log("PROBE-K: tag unknown"); }

function collectNames(obj) {
  var names = {};
  var o = obj;
  var depth = 0;
  while (o && o !== Object.prototype && depth < 6) {
    try {
      var list = Object.getOwnPropertyNames(o);
      for (var i = 0; i < list.length; i++) names[list[i]] = true;
    } catch (e) {}
    try { o = Object.getPrototypeOf(o); } catch (e) { break; }
    depth++;
  }
  return Object.keys(names).sort();
}
function report(label, obj) {
  try {
    if (obj === undefined || obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      console.log("PROBE-K: " + label + " N/A");
      return;
    }
    var names = collectNames(obj);
    var interesting = [];
    for (var i = 0; i < names.length; i++) {
      if (/align|vert|centre|center|middle|justif|content|inset|pad|flow|valign/i.test(names[i])) interesting.push(names[i]);
    }
    console.log("PROBE-K: " + label + " total=" + names.length + " interesting=[" + interesting.join(",") + "]");
  } catch (e) {
    console.log("PROBE-K: " + label + " ERROR: " + (e && e.message ? e.message : e));
  }
}
report("node", node);
var candidates = ["textframeInterface", "textFrameInterface", "storyInterface", "frameInterface", "textInterface", "story"];
for (var k = 0; k < candidates.length; k++) {
  var v = null;
  try { v = node[candidates[k]]; } catch (e) { v = null; }
  report("node." + candidates[k], v);
}
console.log("PROBE-K: finished");
