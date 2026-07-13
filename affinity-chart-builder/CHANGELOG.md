# Changelog

## 1.3.0

- Parser: last line = labels (any prefix or none), `---` separator for explicit labels
- Parser: bare numbers without colon parsed as unnamed series
- Bar corners radius (0-50px) via UI
- Grid lines count (1-20) via UI
- Per-series color pickers in UI
- Label distribution mode: Sequential (default) / Spread
- Donut: "total" instead of "всего"
- Legend: "label N" for unnamed series
- Dynamic UI visibility (Grid/Bar groups toggle by chart type)

## 1.2.0

- Parser: last line always labels (any prefix or none)
- Bar corners radius (0-50px) via UI
- Grid lines count (1-20) via UI
- Per-series color pickers in UI
- Dynamic UI visibility (Grid/Bar groups toggle by chart type)

## 1.1.1

- Support data without series name prefix (e.g. "25, 56.8, 12.5")
- Error messages shown as pop-up dialogs instead of console.log

## 1.1.0

- Fixed double stroke issue — single stroke per line, no extra fills
- Fixed stroke color and weight application via penFillDescriptor
- Added 32-color unique palette (no color repetition)
- Axes: 1pt, #787E82; Grid: 0.5pt, #A6ABAE (line & bar charts)
- Bar chart: sharp corners (ShapeRectangle with cornerRadii=0)
- Bar chart: support for different series lengths (missing values skipped)
- Donut chart: fixed label positioning (angle inversion for correct placement)
- Donut chart: per-diagram legends with series names and values
- Donut chart: optional "Show %" checkbox for percentage labels
- Legends: show actual series names from text field instead of "Series N"
- Dialog: fixed default values (500px, 400px, 2px), removed duplicate OK/Cancel
- Chart shifted right (+20px left margin)

## 1.0.0

- Initial release
- Line chart with round caps and dots
- Bar chart with grouped bars
- Donut chart with % and value labels
- Multi-series data support
- Configurable parameters via dialog
