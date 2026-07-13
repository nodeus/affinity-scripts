# Affinity Chart Builder

Script for Affinity that builds bar, column, and pie diagrams based on the data in the text object directly in affinity.

![Chart Builder](images/affinity-chart-builder_1.png)

## Features

- **Line Chart** — multi-series lines with round caps, grid, 1pt axes, 0.5pt grid lines
- **Bar Chart** — grouped bars with configurable corner radius, unique colors per series
- **Donut Chart** — pie slices with inner radius, optional % labels, per-diagram legends
- **32-color palette** — unique colors for all data series
- **Configurable** — width, height, line thickness, grid lines, bar corner radius, legend
- **Label modes** — Sequential (discrete) or Spread (even distribution)
- **Color pickers** — customize color for each data series
- **Smart parser** — supports named series, bare numbers, and `---` separator for labels

## Data Format

Create a text frame with data in this format:

```
Series 1: 25, 56.8, 12.5, 45, 99
Series 2: 74, 20, 11, 28
---
Jan, Feb, Mar, Apr, May
```

- Each `name: values` line defines a data series with a name
- Line after `---` defines X-axis labels (optional)
- Bare numbers without colon are parsed as unnamed series
- Last line without `---` is treated as labels if it contains text

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
- **Grid Lines** — number of horizontal grid lines (1-20, default: 5)
- **Bar Radius** — corner radius for bar chart (0-50px, default: 0)
- **Label Mode** — Sequential (discrete positions) or Spread (even distribution)
- **Colors** — color picker for each data series
- **Legend** — show/hide legend
- **Show %** — show percentages in donut chart labels

## Version

1.3.0
