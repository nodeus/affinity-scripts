# Глава 6. Заливки, цвета, градиенты

## 6.1. Дескрипторы заливки

```js
"use strict";
const { FillDescriptor, SolidFill, FillType, GradientFill, GradientFillType } = require('/fills.js');
const { Colour, ColourProfileSet } = require('/colours.js');
```

У узла две заливки: кисть (`hasBrushFill` → `brushFillDescriptor`)
и перо (`hasPenFill` → `penFillDescriptor`, плюс `lineWeightPts` —
толщина обводки). Градиент с новым трансформом — клоном:
`cloneWithNewTransform` (так color-palette-gen рисует свотчи 120×40).

```js
"use strict";
const { FillDescriptor, SolidFill, FillType } = require('/fills.js');
const { RGBA8, Colour } = require('/colours.js');
const { BlendMode } = require('/commands.js');  // реэкспорт енама
const { Selection } = require('/selections.js');

// Назначить сплошную заливку:
const fill = FillDescriptor.createSolid(
  SolidFill.create(RGBA8(66, 133, 244, 255)), BlendMode.Normal);
doc.executeCommand(DocumentCommand.createSetBrushFill(Selection.create(doc, node), fill));

// Прочитать обратно:
const d = node.brushFillDescriptor;
console.log('hasBrush: ' + node.hasBrushFill);                    // true
console.log(d.fill.fillType.value === FillType.Solid.value);      // true (сравнение через .value!)
const rgba = new Colour(d.fill.colour.handle).rgba8;              // сырой хэндл → обёртка
console.log(rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + rgba.alpha);  // 66,133,244,255
```
Проверено в Affinity: roundtrip цвета точный (`66,133,244,255`).

Три правила, без которых заливки не заведутся:
1. `FillDescriptor.createDefault()` **не существует** — используйте
   `createSolid(fill, blendMode)` / `createNone()` / `create(...)`.
2. `d.fill` — уже объект заливки (`SolidFill`): цвет — `d.fill.colour`,
   а не `d.fill.solidFill`.
3. Сырые цвета из градиентов — хэндлы: оборачивайте `new Colour(handle)`.

## 6.2. Сканирование цветов спреда

Паттерн из color-palette-gen (протестирован): рекурсивный обход,
три словаря `fills` / `strokes` / `gradients`, ключ `r,g,b` для сплошных
и `fill|<type>|stops` для градиентов, прозрачность — флаг `α:transp`.
Нечитаемые узлы пропускаются через `try/catch`.

## 6.3. Метки значений

Свотч 40×40 + подпись из четырёх строк: RGB, CMYK (через
`ColourProfileSet.default`, при ошибке `C:? M:? Y:? K:?`), HSL, HEX.
У обводок — пятая строка `Width: Xpt`. У градиентов — тип, число стопов
и `position → HEX` по каждому стопу.

## Упражнения

1. Соберите все уникальные сплошные заливки текущего спреда в `console.log`.
2. Найдите все обводки толще 2pt.
3. Перечислите стопы первого найденного градиента.
