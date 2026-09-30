# Глава 10. Растр, эффекты, AI

## 10.1. Растровые узлы

Модуль `affinity:raster` (`sdk/raster.md`, 22 API): пиксельный доступ
(`PixelReader*`/`PixelReaderWriter*` — по форматам RGBA8/CMYKA8/LABA16/…),
выделения (`RasterSelectionApi`), объекты (`RasterObjectApi`).
Сами растровые узлы документа (фильтры, коррекции) живут в `affinity:dom`
(`sdk/dom-nodes-raster.md`, 156 API): размытия, шумы, уровни, HSL —
у каждого тройка `*Parameters` / `*RasterNode` / `*RasterNodeDefinition`.

## 10.2. Эффекты слоёв

`affinity:layereffects` (`sdk/linestyles-effects.md`, 12 API):
тени (внутренняя/внешняя), свечения, барельеф, наложения цвета и градиента,
гауссово размытие. Дублирование эффекта на другой слой — команды
`createDuplicate*LayerEffectCommand` из каталога команд.

## 10.3. AI-команды

Генерация и обработка изображений (`generateImage`, `generativeEditImage`,
`removeBackground`, `selectSubject`, `detectDepth`, `colourise`, `imageTrace`).
Помните про `NOT_ALLOWED`: пользователь может запретить AI в настройках —
обрабатывайте такой ответ, а не считайте его багом.

## Упражнения

1. Перечислите все `*LayerEffect`-команды дублирования в каталоге.
2. Прочитайте пиксели выделенного растра через подходящий `PixelReader`.
3. Примените `removeBackground` и проверьте ответ на `NOT_ALLOWED`.
