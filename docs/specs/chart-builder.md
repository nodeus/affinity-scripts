# Chart Builder — Specification

## 1. Identity

| Field | Value |
|-------|-------|
| **ID** | `chart-builder` |
| **Name** | Chart Builder |
| **Version** | `1.4.0` |
| **Author** | nodeus |
| **Status** | `stable` |
| **SDK** | `>= 3.3.0` |

## 2. Purpose

Builds line, bar (column), and donut diagrams directly in Affinity from data entered in a text frame. The user types series data as text, selects the text frame, runs the script, configures chart options in a dialog, and gets a fully vector chart placed on the current spread. Intended for designers who need quick data visualization without leaving Affinity.

## 3. Requirements

- An open document (any Affinity product with vector + text support; tested in Designer)
- A **selected FrameText node** containing chart data
- Data format (one series per line):
  ```
  Sales: 10, 20, 15, 30
  Costs: 5, 8, 12, 9
  ---
  Q1, Q2, Q3, Q4
  ```
  Lines before `---` are data series (`Name: v1, v2, ...` or bare `v1, v2, ...`).
  Lines after `---` are axis labels. If no `---` separator is present, the last
  non-numeric line is treated as labels.
- SDK modules used (JSLib `/....js` + `affinity:common`):
  - `/document.js` — `Document`
  - `/commands.js` — `AddChildNodesCommandBuilder`, `NodeChildType`
  - `/nodes.js` — `ShapeNodeDefinition`, `FrameTextNodeDefinition`, `PolyCurveNodeDefinition`
  - `/shapes.js` — `Shape`, `ShapeType`, `ShapeRectangle`, `ShapeCornerType`
  - `/geometry.js` — `Rectangle`, `CurveBuilder`, `PolyCurve`
  - `/colours.js` — `Colour`
  - `/fills.js` — `FillDescriptor`, `SolidFill`
  - `/linestyle.js` — `ArrowHead`, `ArrowHeadStyle`, `LineStyleDescriptor`
  - `/storybuilder.js` — `StoryBuilder`
  - `/glyphatts.js` — `GlyphAtts`
  - `/paragraphatts.js` — `ParagraphAtts`
  - `/dialog.js` — `Dialog`, `DialogResult`
  - `/units.js` — `UnitType`
  - `affinity:common` — `BlendMode`

## 4. Behavior

1. Read the currently selected node; abort unless it is a FrameText node.
2. Extract the full story text via `storyInterface.story.getText(0, length)`.
3. Parse the text with `parseData()` into `{ series, seriesNames, labels }`; abort if no numeric series found.
4. Show the configuration dialog (see §5).
5. If the user cancels, log `Cancelled` and stop.
6. If chart type is Donut and any value is negative, show error and stop (pie slices cannot be negative).
7. Build all chart geometry into an `AddChildNodesCommandBuilder` batch:
   - **Line**: axes, grid lines + value labels, polyline per series, data-point value labels, optional category labels.
   - **Bar**: axes, grid lines + value labels, grouped bars per category with optional corner radius, value labels above/below bars, optional category labels.
   - **Donut**: one donut per series (white backing disc + pie slices), slice labels with optional `%`, center total label, optional per-series legend with color swatches.
8. Execute the batch as a single command (`NodeChildType.Main`).
9. Apply stored line styles post-batch via `applyLineStyles()` (line weight, caps, joins, arrow heads) by traversing spreads and matching created PolyCurve nodes in order.
10. Optionally append a right-side legend (series color swatch + name) for Line/Bar charts.
11. Log the chart type and size, e.g. `Bar 500x400`.

## 5. User Interface

Dialog title: `Chart Builder`, initial width 350.

| Control | Type | Default | Notes |
|---------|------|---------|-------|
| Type | ComboBox `["Line","Bar","Donut"]` | Line | Toggles visibility of Bar/Donut/Grid groups |
| W | UnitValueEditor (px) | 500 | Chart width; `<= 0` falls back to 500 |
| H | UnitValueEditor (px) | 400 | Chart height; `<= 0` falls back to 400 |
| Thick | UnitValueEditor (px) | 2 | Line series thickness (Line charts) |
| Grid | ComboBox `["2".."20"]` | 5 | Number of grid lines (Line/Bar only; hidden for Donut) |
| Radius | UnitValueEditor (px, 0–50) | 0 | Bar corner radius (Bar only) |
| Series N | ColourPicker × N | palette color N | One picker per data series, seeded from built-in 32-color palette |
| Mode | ComboBox `["Sequential","Spread"]` | Sequential | Label placement strategy |
| Legend | CheckBox | true | Show legend |
| Show % | CheckBox | false | Show percentages on donut slices (Donut only) |

## 6. Output

- Vector chart nodes added to the **current spread** (shapes, polylines, text frames).
- Legend nodes appended at `x = chartWidth + 20` (Line/Bar) or below each donut (Donut).
- `console.log()` messages:
  - `<Type> <W>x<H>` on success, e.g. `Line 500x400`
  - `Cancelled` when the dialog is dismissed
- No grouping: all nodes are added flat to the spread in one undo step (plus the post-batch line-style pass).

## 7. Error Handling

| Condition | Message | Behavior |
|-----------|---------|----------|
| No document open | `No document` (modal error dialog) | abort |
| No FrameText node selected | `Select a text frame` (modal error dialog) | abort |
| Text contains no numeric data | `No data` (modal error dialog) | abort |
| Donut chart with negative values | `Pie chart does not support negative values` (modal) | abort |

All error dialogs are modal `Dialog` windows titled `Error`.

## 8. File Layout

```
scripts/chart-builder/
├── source/chart-builder.js    # editable source (SDK >= 3.3.0 imports)
├── release/chart-builder.js   # tested release (copied from source)
└── README.md                  # user-facing readme
```

## 9. Test Checklist

- [ ] Runs with no document → `No document` error dialog
- [ ] Runs with non-text selection → `Select a text frame` error dialog
- [ ] Runs with empty/non-numeric text → `No data` error dialog
- [ ] Line chart renders axes, grid, series lines, labels
- [ ] Bar chart renders grouped bars with radius, value labels
- [ ] Donut chart renders slices, center total, optional `%`
- [ ] Cancel button → `Cancelled` in console, no nodes created
- [ ] Donut with negatives → error dialog, no nodes created
- [ ] Undo restores document
- [ ] `affinity-check` reports no errors (only `affinity:*` imports)

## 10. Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.4.0 | 2026-09-17 | SDK 3.3.0 JSLib imports: `NodeChildType` moved from `/nodes.js` to `/commands.js`, `BlendMode` unified under `/commands.js` |
| 1.3.1 | — | Negative values support, error popups, grid lines UI |
| 1.3.0 | — | Label mode, bar corner radius, grid lines, color pickers, parser improvements |
| 1.3.0-sdk | 2026-09-16 | SDK 3.3.0 migration: all imports moved to `/....js` JSLib form |
