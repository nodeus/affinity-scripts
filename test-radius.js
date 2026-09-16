/**
 * name: Test Radius
 * description: Test corner radius on ShapeRectangle with correct API
 * version: 1.0.0
 * author: nodeus
 */

"use strict";

var { Document } = require("/document.js");
var { AddChildNodesCommandBuilder, NodeChildType } = require("/commands.js");
var { ShapeNodeDefinition } = require("/nodes.js");
var { ShapeRectangle } = require("/shapes.js");
var { Rectangle } = require("/geometry.js");
var { Colour } = require("/colours.js");
var { FillDescriptor, SolidFill } = require("/fills.js");
var { BlendMode } = require("affinity:common");

var doc = Document.current;
if(!doc) { console.log("No document"); return; }

var b = AddChildNodesCommandBuilder.create();

function addTestRect(b, x, y, w, h, r, color) {
  var sh = ShapeRectangle.create();
  sh.setAbsoluteSizes(true, w, h);
  if(r > 0) {
    sh.topLeft.setRadius(r, w, h);
    sh.topRight.setRadius(r, w, h);
    sh.bottomLeft.setRadius(r, w, h);
    sh.bottomRight.setRadius(r, w, h);
  }
  var fill = FillDescriptor.createSolid(SolidFill.create(Colour.createRGBA8(color)), BlendMode.Normal);
  b.addNode(ShapeNodeDefinition.create(sh, new Rectangle(x, y, w, h), fill, null, null, null));
}

// Test 1: Sharp corners (radius=0) - RED
addTestRect(b, 50, 50, 120, 80, 0, {r:255,g:0,b:0,alpha:255});

// Test 2: Radius = 10 - GREEN
addTestRect(b, 200, 50, 120, 80, 10, {r:0,g:200,b:0,alpha:255});

// Test 3: Radius = 25 - BLUE
addTestRect(b, 350, 50, 120, 80, 25, {r:0,g:0,b:255,alpha:255});

// Test 4: Radius = 40 - ORANGE
addTestRect(b, 500, 50, 120, 80, 40, {r:255,g:165,b:0,alpha:255});

doc.executeCommand(b.createCommand(true, NodeChildType.Main));
console.log("Test Radius: 4 rectangles created");
console.log("1=Red(r=0) 2=Green(r=10) 3=Blue(r=25) 4=Orange(r=40)");
