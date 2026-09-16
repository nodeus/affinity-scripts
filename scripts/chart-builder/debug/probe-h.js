"use strict";
const { PolyCurveNodeDefinition } = require('/nodes.js');
const { CurveBuilder, PolyCurve } = require('/geometry.js');
const { Colour, RGBA8 } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { LineStyleDescriptor } = require('/linestyle.js');
const { BlendMode } = require('/commands.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

function test(name, fn) {
  try { fn(); console.log("PROBE-H: " + name + " OK"); }
  catch (e) { console.log("PROBE-H: " + name + " EXCEPTION: " + (e && e.message ? e.message : e)); }
}

var cb = CurveBuilder.create(); cb.begin({x:50,y:50}); cb.lineTo({x:150,y:100});
var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());

test("H0-lsd-alone", function(){
  LineStyleDescriptor.createDefault(2);
});
test("H1-opaque-all", function(){
  PolyCurveNodeDefinition.create(pc, mkF({r:66,g:133,b:244}), LineStyleDescriptor.createDefault(2), mkF({r:66,g:133,b:244}), FillDescriptor.createNone());
});
test("H2-rgba8-direct", function(){
  var fill = FillDescriptor.createSolid(RGBA8(0,0,0,255), BlendMode.Normal);
  PolyCurveNodeDefinition.create(pc, fill, LineStyleDescriptor.createDefault(0), FillDescriptor.createNone(), FillDescriptor.createNone());
});
test("H3-nulls", function(){
  PolyCurveNodeDefinition.create(pc, mkF({r:66,g:133,b:244}), LineStyleDescriptor.createDefault(2), null, null);
});
test("H4-transparent-fill-alone", function(){
  FillDescriptor.createSolid(SolidFill.create(Colour.createRGBA8({r:0,g:0,b:0,alpha:0})), BlendMode.Normal);
});
test("H5-opaque-fill-alone", function(){
  mkF({r:66,g:133,b:244});
});
console.log("PROBE-H: finished");
