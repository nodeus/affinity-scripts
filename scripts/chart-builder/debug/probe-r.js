"use strict";
var dom = null;
try {
  dom = require('affinity:dom');
  console.log("PROBE-R: affinity:dom loaded");
} catch (e) {
  console.log("PROBE-R: require EXCEPTION: " + (e && e.message ? e.message : e));
  return;
}
try {
  var api = dom.GroupNodeApi;
  console.log("PROBE-R: typeof=" + (typeof api));
  var chain = [];
  var o = api, depth = 0;
  while (o && o !== Object.prototype && depth < 4) {
    var names = [];
    try { names = Object.getOwnPropertyNames(o); } catch (e) {}
    chain.push("L" + depth + "=[" + names.join(",") + "]");
    try { o = Object.getPrototypeOf(o); } catch (e) { break; }
    depth++;
  }
  console.log("PROBE-R: chain " + chain.join(" "));
  console.log("PROBE-R: typeof create=" + (typeof api.create) + " createDefault=" + (typeof api.createDefault) + " createEmpty=" + (typeof api.createEmpty));
} catch (e) {
  console.log("PROBE-R: EXCEPTION: " + (e && e.message ? e.message : e));
}
console.log("PROBE-R: finished");
