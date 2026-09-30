# Глава 5. Фигуры и геометрия

## 5.1. Фигуры как данные

Фигура (`affinity:geometry`, `sdk/geometry.md`) — это параметры:
`ShapeRectangle`, `ShapeEllipse`, `ShapeStar`, `ShapeArrow`, `ShapePie`,
`ShapeQRCode` и ещё ~25 типов (`ShapeType`). Сырые фабрики:
`Shape.create(type)`, у каждого типа — свои `create()`/`get*`/`set*`
(например, `ShapeArrowApi`: `setThickness`, `setLeftLength`, …).

В скриптах фигуры создаются определениями узлов
(`ShapeNodeDefinition` из `/nodes.js`) и кладутся на спред батчем
(глава 4). Проверенный пример:

```js
"use strict";
const { ShapeNodeDefinition } = require('/nodes.js');
const { ShapeRectangle } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { AddChildNodesCommandBuilder } = require('/commands.js');

const def = ShapeNodeDefinition.createDefault();
def.shape = ShapeRectangle.create();          // ShapeEllipse, ShapeStar, ...
def.setBoundingRectangle(new Rectangle(100, 100, 200, 150));
const builder = AddChildNodesCommandBuilder.create();
builder.addNode(def);
const cmd = builder.createCommand(false);
doc.executeCommand(cmd);
const node = [...cmd.newNodes][0];            // newNodes — у КОМАНДЫ, не у билдера!
const box = node.getSpreadBaseBox();
console.log('Box: ' + box.x + ',' + box.y + ' ' + box.width + 'x' + box.height);
```
Проверено в Affinity: `New nodes: 1`, `Box: 100,100 200x150`.

Внимание: `Shape.createRectangle(spread)` **не существует** — только
`Shape.create(type)` и определения узлов (старые примеры с прямым
созданием устарели).

## 5.2. Кривые

`CurveBuilder` строит `PolyCurve` — произвольные контуры, стрелки серий
на графиках, точки данных. Важный порядок аргументов:

```js
// PolyCurveNodeDefinition.create(polyCurve, brushFill, lineFill, lineStyle, ...)
// lineStyle и lineFill путать НЕЛЬЗЯ: ошибка 'expected FillDescriptorHandle'
// роняет скрипт молча (реальный случай chart-builder 1.4.1).
```

Серийные линии графиков — простые, без наконечников.

Проверено в Affinity: `DocumentCommand.createSetCurves(ci, poly)` работает
на **PolyCurveNode**, но бросает `DISPOSED` на **ShapeNode** (фигуры отдают
кривые только для чтения). Путь фигуры → кривая: создать `PolyCurveNode`
(`PolyCurveNodeDefinition.createDefault()` + `setCurves(poly)`) и править его.

## 5.3. Трансформации

`Rectangle` + `Transform`: положение, размер, поворот (`sdk/geometry.md`:
`RectangleApi`, `TransformApi`). Палитра color-palette-gen вычисляет место
справа от artwork: `x = ext.x + ext.width + 50`.

## Упражнения

1. Перечислите все значения `ShapeType` (подсказка: `sdk/geometry.md` + енам).
2. Создайте `ShapeArrow` и поменяйте `thickness` через сеттер.
3. Постройте `PolyCurve` из трёх точек и добавьте на спред батчем.
