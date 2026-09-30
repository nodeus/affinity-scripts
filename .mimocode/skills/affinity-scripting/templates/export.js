"use strict";

const { Document, FileExportOptions, FileExportArea } = require('/document.js');
const { app } = require('/application.js');

const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }

// List available presets
const presets = FileExportOptions.allPresetNames;
console.log('Available presets:');
presets.forEach(p => console.log('  - ' + p));

// Common presets:
// 'JPEG (Best Quality)', 'JPEG (Maximum)', 'JPEG (High Quality)',
// 'PNG', 'PNG-8', 'PDF', 'PSD', 'TIFF', 'SVG', 'EPS'

const options = FileExportOptions.createWithPresetName('JPEG (Best Quality)');
const area = FileExportArea.createForWholeDocument();
const outPath = app.userDesktopPath + '/export_' + doc.title + '.jpg';

doc.export(outPath, options, area);
console.log('Exported to: ' + outPath);
