# Affinity Chart Builder

Script for Affinity that builds bar, column, and pie diagrams based on the data in the text object directly in affinity.

## Features

- **Line Chart** — multi-series lines with round caps, dots, grid
- **Bar Chart** — grouped bars with auto-palette colors
- **Donut Chart** — pie slices with inner radius, % and value labels
- **Legend** — optional legend for series
- **Layer groups** — each chart lands in a named layer (`line chart`, `bar chart`, `donut chart`; re-runs get `_2`, `_3`, …)

## Data Format

Create a text frame with data in this format:

```
Series 1: 10, 25, 18, 32, 28
Series 2: 5, 15, 22, 12, 30
Labels: Jan, Feb, Mar, Apr, May
```

- Each `Series N:` line defines a data series
- `Labels:` line defines X-axis labels (optional)
- Multiple series supported for line and bar charts

## Usage

1. Create a text frame with your data
2. Select the text frame
3. Run the script via MCP Affinity server or Script Manager
4. Choose chart type and parameters in the dialog
5. Click OK to generate the chart

## Parameters

### General
- Width / Height — chart dimensions in pixels

### Line Chart
- Line Thickness — stroke width
- Dot Size — diameter of data point circles
- Show Values — display values above points
- Show Grid — horizontal grid lines

### Bar Chart
- Width % — bar width as percentage of available space
- Show Values — display values above bars
- Show Grid — horizontal grid lines

### Donut Chart
- Inner Radius % — hole size (0 = pie, 100 = no chart)
- Show % — display percentages
- Show Values — display numeric values

## Version

1.0.0
