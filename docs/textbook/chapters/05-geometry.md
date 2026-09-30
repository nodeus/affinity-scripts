# Глава 5. Фигуры и геометрия

## 5.1. Фигуры как данные

Фигура (`affinity:geometry`, `sdk/geometry.md`) — это параметры:
`ShapeRectangle`, `ShapeEllipse`, `ShapeStar`, `ShapeArrow`, `ShapePie`,
`ShapeQRCode` и ещё ~25 типов (`ShapeType`). Сырые фабрики:
`Shape.create(type)`, у каждого типа — свои `create()`/`get*`/`set*`
(например, `ShapeArrowApi`: `setThickness`, `setLeftLength`, …).

В скриптах фигуры обычно создаются определениями узлов
(`ShapeNodeDefinition` из `/nodes.js`) и кладутся на спред батчем
(глава 4). Параметры углов, заливки и обводки задаются там же.

## 5.2. Кривые

`CurveBuilder` строит `PolyCurve` — произвольные контуры, стрелки серий
на графиках, точки данных. Важный порядок аргументов:

```js
// PolyCurveNodeDefinition.create(polyCurve, brushFill, lineFill, lineStyle, ...)
// lineStyle и lineFill путать НЕЛЬЗЯ: ошибка 'expected FillDescriptorHandle'
// роняет скрипт молча (реальный случай chart-builder 1.4.1).
```

Серийные линии графиков — простые, без наконечников.

## 5.3. Трансформации

`Rectangle` + `Transform`: положение, размер, поворот (`sdk/geometry.md`:
`RectangleApi`, `TransformApi`). Палитра color-palette-gen вычисляет место
справа от artwork: `x = ext.x + ext.width + 50`.

## Упражнения

1. Перечислите все значения `ShapeType` (подсказка: `sdk/geometry.md` + енам).
2. Создайте `ShapeArrow` и поменяйте `thickness` через сеттер.
3. Постройте `PolyCurve` из трёх точек и добавьте на спред батчем.
