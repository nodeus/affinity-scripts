"use strict";
const { BlendMode } = require('/commands.js');
console.log("PROBE-C: BlendMode=" + (BlendMode ? ("OK, Normal=" + BlendMode.Normal) : "UNDEFINED"));
try {
  const { Colour } = require('/colours.js');
  const { FillDescriptor, SolidFill } = require('/fills.js');
  var c = Colour.createRGBA8({r:66, g:133, b:244, alpha:255});
  console.log("PROBE-C: Colour OK");
  var f = FillDescriptor.createSolid(SolidFill.create(c), BlendMode.Normal);
  console.log("PROBE-C: Fill OK");
} catch (e) {
  console.log("PROBE-C: EXCEPTION: " + (e && e.message ? e.message : e));
}
