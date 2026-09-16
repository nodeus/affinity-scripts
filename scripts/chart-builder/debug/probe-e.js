"use strict";
const { Dialog, DialogResult } = require('/dialog.js');
const { UnitType } = require('/units.js');
const { Colour } = require('/colours.js');

try {
  var dlg = Dialog.create("Probe-E"); dlg.initialWidth = 300;
  var col = dlg.addColumn();
  var gs = col.addGroup("Size");
  var we = gs.addUnitValueEditor("W:", UnitType.Pixel, UnitType.Pixel); we.value = 500;
  var gridVals = []; for (var i = 2; i <= 20; i++) gridVals.push(i);
  var gle = col.addGroup("").addComboBox("Grid:", gridVals.map(String), 3);
  var sle = col.addGroup("").addCheckBox("Legend", true);
  var cp = col.addGroup("Colors").addColourPicker("Series 1:", Colour.createRGBA8({r:66,g:133,b:244,alpha:255}));
  var result = dlg.runModal();
  if (result !== DialogResult.Ok) { console.log("PROBE-E: cancelled"); return; }
  console.log("PROBE-E: W typeof=" + (typeof we.value) + " val=" + JSON.stringify(we.value));
  console.log("PROBE-E: grid idx=" + gle.selectedIndex + " val=" + gridVals[gle.selectedIndex]);
  console.log("PROBE-E: legend typeof=" + (typeof sle.value) + " val=" + JSON.stringify(sle.value));
  var cv = cp.value;
  console.log("PROBE-E: colorpicker=" + (cv ? JSON.stringify(cv.rgba8) : "EMPTY/FALSY"));
} catch (e) {
  console.log("PROBE-E: EXCEPTION: " + (e && e.message ? e.message : e));
}
