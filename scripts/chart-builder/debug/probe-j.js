"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode } = require('/commands.js');
const { ShapeNodeDefinition, FrameTextNodeDefinition, PolyCurveNodeDefinition } = require('/nodes.js');
const { ShapeRectangle } = require('/shapes.js');
const { Rectangle, CurveBuilder, PolyCurve } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { LineStyleDescriptor } = require('/linestyle.js');
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');
const { ParagraphAtts } = require('/paragraphatts.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-J: no document"); return; }
try {
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var b = AddChildNodesCommandBuilder.create();

  function frameWithOffset(x, y, w, h, text, sz, oy) {
    var ga = GlyphAtts.create(); ga.height = sz;
    ga.brushFill = mkF({r:50,g:50,b:50});
    ga.offsetY = oy;
    var pa = ParagraphAtts.create(); pa.alignXType = 1;
    var sb = StoryBuilder.create(); sb.setParagraphAtts(pa); sb.setGlyphAtts(ga); sb.addText(text);
    b.addNode(FrameTextNodeDefinition.createFromStoryBuilder(new Rectangle(x, y, w, h), sb));
    // frame outline so the box is visible
    var sh = ShapeRectangle.create(); sh.setAbsoluteSizes(true, w, h);
    b.addNode(ShapeNodeDefinition.create(sh, new Rectangle(x, y, w, h), FillDescriptor.createNone(), null, null, null));
    // caption under the frame
    var ga2 = GlyphAtts.create(); ga2.height = 8; ga2.brushFill = mkF({r:150,g:150,b:150});
    var pa2 = ParagraphAtts.create(); pa2.alignXType = 1;
    var sb2 = StoryBuilder.create(); sb2.setParagraphAtts(pa2); sb2.setGlyphAtts(ga2); sb2.addText("oy=" + oy);
    b.addNode(FrameTextNodeDefinition.createFromStoryBuilder(new Rectangle(x, y + h + 2, w, 12), sb2));
  }

  function hline(x1, x2, y) {
    var cb = CurveBuilder.create(); cb.begin({x:x1,y:y}); cb.lineTo({x:x2,y:y});
    var pc = PolyCurve.create(); pc.addCurve(cb.createCurve());
    var nd = PolyCurveNodeDefinition.create(
      pc,
      FillDescriptor.createNone(),
      mkF({r:255,g:0,b:0}),
      LineStyleDescriptor.createDefault(0.5),
      FillDescriptor.createNone()
    );
    b.addPolyCurveNode(nd);
  }

  var variants = [0, 5, -5, 10];
  for (var i = 0; i < variants.length; i++) {
    frameWithOffset(50 + i * 130, 50, 100, 40, "Ag", 10, variants[i]);
  }
  // red rulers: frame top / middle / bottom across all columns
  hline(40, 50 + 4 * 130, 50);
  hline(40, 50 + 4 * 130, 70);
  hline(40, 50 + 4 * 130, 90);
  // two-line frame with offset to check multiline
  frameWithOffset(50, 130, 100, 40, "12\n(34%)", 10, 5);

  doc.executeCommand(b.createCommand(true, NodeChildType.Main));
  console.log("PROBE-J: done, no exception");
} catch (e) {
  console.log("PROBE-J: EXCEPTION: " + (e && e.message ? e.message : e));
}
