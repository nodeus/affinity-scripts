"use strict";
var dom = null;
try {
  dom = require('affinity:dom');
  console.log("PROBE-Q: affinity:dom loaded");
} catch (e) {
  console.log("PROBE-Q: require EXCEPTION: " + (e && e.message ? e.message : e));
  return;
}
function dump(label, obj, max) {
  try {
    if (obj === undefined || obj === null) { console.log("PROBE-Q: " + label + " MISSING"); return; }
    var keys = Object.getOwnPropertyNames(obj);
    if (max && keys.length > max) keys = keys.slice(0, max).concat(["...+" + (Object.getOwnPropertyNames(obj).length - max)]);
    console.log("PROBE-Q: " + label + "=[" + keys.join(",") + "]");
  } catch (e) {
    console.log("PROBE-Q: " + label + " EXCEPTION: " + (e && e.message ? e.message : e));
  }
}
var allDefs = [];
try {
  allDefs = Object.getOwnPropertyNames(dom).filter(function(k){ return /DefinitionApi/.test(k); });
} catch (e) {}
console.log("PROBE-Q: DefinitionApis=[" + allDefs.join(",") + "]");
dump("GroupNodeApi", dom.GroupNodeApi, 60);
dump("LogicalNodeDefinitionApi", dom.LogicalNodeDefinitionApi, 60);
dump("ContainerNodeDefinitionApi", dom.ContainerNodeDefinitionApi, 60);
dump("NodeDefinitionApi", dom.NodeDefinitionApi, 60);
console.log("PROBE-Q: finished");
