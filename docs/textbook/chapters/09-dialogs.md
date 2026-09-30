# Глава 9. Диалоги и UI

## 9.1. Показ диалога

```js
"use strict";
const { Dialog } = require('/dialog.js');
// const result = dialog.runModal();
// if (result === DialogResult.OK) { ... }
```

`Dialog.show()` deprecated — только `runModal()` (`sdk/ui-dialogs.md`, 24 API).
Контролы: `ComboBox`, `CheckBox`, `Switch`, `TextBox`, `UnitValueEditor`,
`ColourPicker`, `FillEditor`/`StrokeEditor`, `FontPicker`, `RadioGroup`,
`Button`/`ButtonSet`, `StaticText` (`DialogResult.OK` — подтверждение).

## 9.2. Диалог chart-builder как образец

Заголовок `Chart Builder`, ширина 350: тип (`Line/Bar/Donut`),
размеры W/H (дефолт 500×400, `<= 0` → 500/400), толщина, сетка (2–20),
радиус углов (Bar), по `ColourPicker` на серию из палитры 32 цветов,
режим подписей, легенда, проценты для Donut. Отмена → `Cancelled` в консоль,
без созданных узлов.

## 9.3. Диалог-отчёт без настроек

hanging-chars показывает один модальный итог: `Fixed N of M text field(s)…`,
`Everything already looks correct.`, `No text fields found.` + `Errors: …`.
Ошибки отдельных узлов не роняют весь проход — копятся в отчёт.

## Упражнения

1. Соберите диалог с `TextBox` и кнопками OK/Cancel, верните ввод в `console.log`.
2. Добавьте `ColourPicker` и покрасьте им выделенные фигуры.
3. Реализуйте связку Preview/Cancel из главы 4 через диалог.
