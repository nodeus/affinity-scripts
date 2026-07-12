# Affinity Chart Builder

Script for Affinity Designer/Photo/Publisher that builds line, bar, and donut charts from numeric data in a text frame.

![Chart Builder](images/affinity-chart-builder_1.png)

## Features

- **Line Chart** — multi-series lines with round caps, grid, 1pt axes, 0.5pt grid lines
- **Bar Chart** — grouped bars with sharp corners, unique colors per series
- **Donut Chart** — pie slices with inner radius, optional % labels, per-diagram legends
- **32-color palette** — unique colors for all data series
- **Configurable** — width, height, line thickness, legend, show % for donut

## Data Format

Create a text frame with data in this format:

```
данные 1: 25, 56.8, 12.5, 45
данные 2: 74, 20, 11, 28
данные 3: 25.5, 74.5
метки: май, июнь, июль, август
```

- Each `name: values` line defines a data series with a name
- `метки:` line defines X-axis labels (optional)
- Multiple series supported, different lengths per series allowed

## Usage

1. Create a text frame with your data
2. Select the text frame
3. Run the script via Affinity Script Manager
4. Choose chart type and parameters in the dialog
5. Click OK to generate the chart

## Parameters

- **Type** — Line, Bar, or Donut
- **W / H** — chart dimensions in pixels (default: 500x400)
- **Thick** — line thickness in pixels (default: 2)
- **Legend** — show/hide legend
- **Show %** — show percentages in donut chart labels

## Style

- Axes: 1pt, color #787E82
- Grid: 0.5pt, color #A6ABAE
- Line caps: Round
- Bar corners: Sharp (no rounding)

## Version

1.1.1
