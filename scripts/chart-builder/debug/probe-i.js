"use strict";

function test(name, fn) {
  try { fn(); console.log("PROBE-I: " + name + " OK"); }
  catch (e) { console.log("PROBE-I: " + name + " EXCEPTION: " + (e && e.message ? e.message : e)); }
}

test("I1-legacy-reqs", function(){
  const { PolyCurveNodeDefinition } = require('/nodes');
  const { CurveBuilder, PolyCurve } = require('/geometry');
  const { RGBA8 } = require('/colours');
  const { FillDescriptor } = require('/fills');
  const { LineStyleDescriptor } = require('/linestyle');
  const { BlendMode } = require('/commands');
  var cb = CurveBuilder.create(); cb.begin({x:50,y:50}); cb.lineTo({x:150,y:100});
  var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());
  var fill = FillDescriptor.createSolid(RGBA8(0,0,0,255), BlendMode.Normal);
  PolyCurveNodeDefinition.create(pc, fill, LineStyleDescriptor.createDefault(0), FillDescriptor.createNone(), FillDescriptor.createNone());
});

test("I2-swapped-pen-lsd", function(){
  const { PolyCurveNodeDefinition } = require('/nodes.js');
  const { CurveBuilder, PolyCurve } = require('/geometry.js');
  const { Colour, RGBA8 } = require('/colours.js');
  const { FillDescriptor, SolidFill } = require('/fills.js');
  const { LineStyleDescriptor } = require('/linestyle.js');
  const { BlendMode } = require('/commands.js');
  var cb = CurveBuilder.create(); cb.begin({x:50,y:50}); cb.lineTo({x:150,y:100});
  var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());
  var fill = FillDescriptor.createSolid(SolidFill.create(Colour.createRGBA8({r:66,g:133,b:244,alpha:255})), BlendMode.Normal);
  PolyCurveNodeDefinition.create(pc, fill, fill, LineStyleDescriptor.createDefault(2), FillDescriptor.createNone());
});

test("I3-cropmarks-exact", function(){
  const { PolyCurveNodeDefinition } = require('/nodes.js');
  const { PolyCurve, Curve } = require('/geometry.js');
  const { CMYKf } = require('/colours.js');
  const { FillDescriptor } = require('/fills.js');
  const { LineStyleDescriptor } = require('/linestyle.js');
  var pc = PolyCurve.create();
  pc.addCurve(Curve.createLineXY(50, 50, 150, 100));
  var stroke = FillDescriptor.createSolid(CMYKf(1.0, 1.0, 1.0, 1.0));
  var none = FillDescriptor.createNone();
  var lsd = LineStyleDescriptor.createDefault();
  PolyCurveNodeDefinition.create(pc, none, lsd, stroke, none);
});
console.log("PROBE-I: finished");
