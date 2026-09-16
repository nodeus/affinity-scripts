# Color Palette Generator — Specification

## 1. Identity

| Field | Value |
|-------|-------|
| **ID** | `color-palette-gen` |
| **Name** | Color Palette Generator |
| **Version** | `9.1.1` |
| **Author** | nodeus |
| **Status** | `stable` |
| **SDK** | `>= 3.3.0` |

## 2. Purpose

Extracts every fill, stroke, and gradient color used on the current spread and renders a visual swatch palette next to the artwork. Each swatch is labeled with RGB, CMYK, HSL, and HEX values (strokes additionally show line width; gradients list type and stop positions). The palette items are grouped into `FILLS`, `STROKES`, and `GRADIENTS` container groups for easy reuse. Intended for designers who need to document or hand off the exact color usage of a layout.

## 3. Requirements

- An open document with at least one object on the **current spread**
- No selection required — the whole current spread is scanned (recursively, including nested children)
- SDK modules used:
  - `affinity:dom` — `Document`, `ShapeNodeDefinition`, `FrameTextNodeDefinition`, `ContainerNodeDefinition`, `Selection`
  - `affinity:commands` — `DocumentCommand`, `AddChildNodesCommandBuilder`, `NodeChildType`, `NodeMoveType`
  - `affinity:geometry` — `Shape`, `ShapeType`, `Rectangle`, `Transform`
  - `affinity:colours` — `Colour`, `ColourProfileSet`
  - `affinity:fills` — `FillDescriptor`, `SolidFill`, `FillType`, `GradientFill`, `GradientFillType`
  - `affinity:story` — `StoryBuilder`, `GlyphAtts`
  - `affinity:common` — `BlendMode`

## 4. Behavior

1. Take `Document.current`; abort with `No document open` if none.
2. Take `doc.currentSpread`; abort with `No objects on spread` if it has no children.
3. Recursively walk all nodes (`collectFromNode`):
   - **Brush fill** (`hasBrushFill` → `brushFillDescriptor`): solid colors recorded into `fills` (keyed by `r,g,b`; alpha < 255 flagged as transparent); gradient fills recorded into `gradients` (key `fill|<type>|stops`).
   - **Pen fill** (`hasPenFill` → `penFillDescriptor`): same as brush, plus captured `lineWeightPts`; recorded into `strokes` / `gradients` (key prefix `stroke|`).
   - Recurse into `node.children`.
4. Log counts: `Fills: N Strokes: M Gradients: K`. Abort with `No colors found` if all are empty.
5. Compute palette origin: right of the spread extents (`ext.x + ext.width + 50`, same `y`).
6. Render each section (header + grid of swatch+label cells, one `AddChildNodesCommandBuilder` command per item via `addItem`):
   - **FILLS** — 40×40 swatch + label (RGB, CMYK via `ColourProfileSet.default`, HSL, HEX).
   - **STROKES** — same + `Width: Xpt` line (or `Width: N/A`).
   - **GRADIENTS** — 120×40 swatch using `cloneWithNewTransform` of the original fill descriptor + label (`Stroke ·` prefix for stroke gradients, gradient type name, stop count, `position → HEX` per stop).
7. Move each section's nodes into a named container group (`FILLS`, `STROKES`, `GRADIENTS`) via `groupSection` (create group → set insertion target to selection → execute → `createMoveNodes` with `NodeMoveType.Inside`).
8. Log `Palette: N items in 3 groups at x=...`.

## 5. User Interface

No UI — runs immediately on the current spread.

## 6. Output

- Palette rendered to the right of the current spread artwork.
- Three container groups named `FILLS`, `STROKES`, `GRADIENTS` (empty sections are skipped, no group created).
- `console.log()` messages:
  - `Fills: N Strokes: M Gradients: K`
  - `No document open` / `No objects on spread` / `No colors found` (abort cases)
  - `Palette: N items in 3 groups at x=...` on success
- Each item is its own undo step (one command per swatch/label); grouping uses additional commands.

## 7. Error Handling

| Condition | Message | Behavior |
|-----------|---------|----------|
| No document | `No document open` (console) | abort |
| Empty spread | `No objects on spread` (console) | abort |
| No colors found | `No colors found` (console) | abort |
| Unreadable node fill | (silently skipped, `try/catch`) | continue |
| CMYK conversion fails | `C:? M:? Y:? K:?` label | continue |
| HSL conversion fails | `H:? S:? L:?` label | continue |

## 8. File Layout

```
scripts/color-palette-gen/
├── source/color-palette-gen.js    # editable source (SDK >= 3.3.0 imports)
├── release/color-palette-gen.js   # tested release (copied from source)
└── README.md                      # user-facing readme
```

## 9. Test Checklist

- [ ] Runs with no document → `No document open`, no crash
- [ ] Runs on empty spread → `No objects on spread`
- [ ] Runs on spread with only unfilled strokes → `No colors found` (or strokes section only)
- [ ] Solid fills produce swatch + 4-line label (RGB/CMYK/HSL/HEX)
- [ ] Strokes show line width in label
- [ ] Gradients render with correct type name and per-stop HEX lines
- [ ] Sections are grouped into `FILLS` / `STROKES` / `GRADIENTS` containers
- [ ] Transparent colors flagged with `(α:transp)`
- [ ] `affinity-check` reports no errors (only `affinity:*` imports)

## 10. Changelog

| Version | Date | Change |
|---------|------|--------|
| 9.1.1 | — | Current stable (pre-migration baseline) |
| 10.0.0 | 2026-09-16 | SDK 3.3.0 migration: all imports moved to `affinity:*` module paths |
