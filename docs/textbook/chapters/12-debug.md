# Глава 12. Отладка и разбор трёх боевых скриптов

## 12.1. Методика отладки

1. `console.log` после каждого этапа (счётчики: `Fills: N Strokes: M`).
2. `affinity_render_spread` — глазами быстрее, чем гадать.
3. Минимальный репро: режьте скрипт пополам, пока не найдёте падающую строку.
4. `affinity-check`: `use strict`, `module.exports`, пути без `.js`, preview без `createClearPreviews`.
5. Найденное решение — сразу в `affinity_add_sdk_hint`.

Типовые падения: нет `setCurrentSpread`; перепутан порядок
`(polyCurve, brushFill, lineFill, lineStyle, …)`; `require` без `.js`;
мутация узла напрямую; диалог через `show()`.

## 12.2. hanging-chars: проход по всем текстам

Задача: NBSP после одиночных букв и предлогов (RU/EN, строгие списки 2–3 букв).
Схема: все спреды → стек → `isTextNode` → `getText` → `findOrphanSpacePositions`
(3 паттерна, дедупликация, сортировка) → один compound `createSetText` на поле →
диалог-отчёт. Undo: шаг на поле. Файл: `scripts/hanging-chars/source/hanging-chars.js`,
спека: `docs/specs/hanging-chars.md`.

## 12.3. color-palette-gen: палитра использования

Задача: свотчи всех fills/strokes/gradients справа от artwork.
Схема: обход `hasBrushFill/hasPenFill` → словари → origin `x + width + 50` →
по `AddChildNodesCommandBuilder` на элемент → группировка в `FILLS/STROKES/GRADIENTS`
через `createMoveNodes` (`NodeMoveType.Inside`). Файл: `scripts/color-palette-gen/…`,
спека: `docs/specs/color-palette-gen.md`.

## 12.4. chart-builder: диаграммы из текста

Задача: Line/Bar/Donut из текстового фрейма (`Series: v1, v2… --- labels`).
Схема: проверка FrameText → `parseData` → диалог (тип, W/H, сетка, цвета серий) →
группа `line/bar/donut chart` (`uniqueGroupName`, коллизии → `base_2`) →
геометрия батчем → `applyLineStyles` → легенда. Undo: два шага.
Файл: `scripts/chart-builder/source/chart-builder.js`, спека: `docs/specs/chart-builder.md`.

## Выпускная работа

Напишите свой скрипт по полному циклу: спека (`docs/specs/_template.md`) →
slice → `affinity-check` → тесты на пустом и боевом документе → undo-проверка →
`release/` + README. Удачи!
