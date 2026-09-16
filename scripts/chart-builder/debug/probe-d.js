"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder, NodeChildType, BlendMode } = require('/commands.js');
const { FrameTextNodeDefinition } = require('/nodes.js');
const { Rectangle } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');
const { ParagraphAtts } = require('/paragraphatts.js');
const { app } = require('/application.js');

function mkC(r){return Colour.createRGBA8({r:r.r,g:r.g,b:r.b,alpha:255});}
function mkF(r){return FillDescriptor.createSolid(SolidFill.create(mkC(r)),BlendMode.Normal);}

var doc = app.documents.current;
if (!doc) { console.log("PROBE-D: no document"); return; }
try {
  var spread = doc.spreads.first;
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  var b = AddChildNodesCommandBuilder.create();
  var ga = GlyphAtts.create(); ga.height = 10;
  ga.brushFill = mkF({r:120,g:120,b:120});
  var pa = ParagraphAtts.create(); pa.alignXType = 1;
  var sb = StoryBuilder.create(); sb.setParagraphAtts(pa); sb.setGlyphAtts(ga); sb.addText("42");
  b.addNode(FrameTextNodeDefinition.createFromStoryBuilder(new Rectangle(50, 50, 50, 16), sb));
  doc.executeCommand(b.createCommand(true, NodeChildType.Main));
  console.log("PROBE-D: done, no exception");
} catch (e) {
  console.log("PROBE-D: EXCEPTION: " + (e && e.message ? e.message : e));
}
