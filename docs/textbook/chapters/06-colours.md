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
