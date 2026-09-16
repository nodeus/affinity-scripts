"use strict";

const { Document, FileExportOptions } = require('/document');
const { app } = require('/application');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

// List available presets
const presets = FileExportOptions.enumeratePresetNames(doc);
console.log('Available presets:');
presets.forEach(p => console.log('  - ' + p));

// Common presets:
// 'JPEG (Best Quality)', 'JPEG (Maximum)', 'JPEG (High Quality)',
// 'PNG', 'PNG-8', 'PDF', 'PSD', 'TIFF', 'SVG', 'EPS'

const options = FileExportOptions.createWithPresetName('JPEG (Best Quality)');
const area = FileExportArea.createForDocument();
const outPath = app.userDesktopPath + '/export_' + doc.name + '.jpg';

doc.export(outPath, options, area);
console.log('Exported to: ' + outPath);
