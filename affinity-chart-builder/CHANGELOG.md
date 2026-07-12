# Changelog

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
