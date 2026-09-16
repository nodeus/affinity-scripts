# Color Palette Generator

Script for Affinity that extracts all fill, stroke, and gradient colors from the current page/artboard and displays them as organized swatches.

## Features

- **Fills** — solid colors with RGB, CMYK, HSL, HEX values
- **Strokes** — solid colors with stroke width info
- **Gradients** — linear, elliptical, radial, conical with stop positions

Palette is placed to the right of the spread content, grouped into three labeled sections.

## Screenshot

![Full palette overview](images/color-palette-gen_1.png)

<details>
<summary>Fill swatches with RGB, CMYK, HSL, HEX values</summary>

![Fills](images/color-palette-gen_2.png)
</details>

<details>
<summary>Stroke swatches with width info</summary>

![Strokes](images/color-palette-gen_3.png)
</details>

<details>
<summary>Gradient swatches with type, stops, and colors</summary>

![Gradients](images/color-palette-gen_4.png)
</details>

## Usage

Run via MCP Affinity server: `affinity_execute_script` or paste into Script Manager for Affinity.

## Version

9.1.1
