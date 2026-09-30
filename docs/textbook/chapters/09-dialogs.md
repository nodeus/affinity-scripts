# Глава 9. Диалоги и UI

## 9.1. Показ диалога

```js
"use strict";
const { Dialog, DialogResult } = require('/dialog.js');
// const result = dialog.runModal();
// if ((result?.value ?? result) == DialogResult.Ok.value) { ... }
// Значения: DialogResult.Ok / DialogResult.Cancel (сравнение через .value).
```

`Dialog.show()` deprecated — только `runModal()` (`sdk/ui-dialogs.md`, 24 API).
Контролы: `ComboBox`, `CheckBox`, `Switch`, `TextBox`, `UnitValueEditor`,
`ColourPicker`, `FillEditor`/`StrokeEditor`, `FontPicker`, `RadioGroup`,
`Button`/`ButtonSet`, `StaticText` (`DialogResult.Ok` — подтверждение).

Проверено в Affinity (построение без показа — `runModal()` ждёт клика
пользователя и в автоматических прогонах не вызывается):

```js
"use strict";
const { Dialog, DialogResult } = require('/dialog.js');
const { UnitType } = require('/units.js');
const { RGBA8 } = require('/colours.js');

const dlg = Dialog.create('Probe');
const col = dlg.addColumn();
const grp = col.addGroup('Params');
const w = grp.addUnitValueEditor('W', UnitType.Pixel, doc.units, 500, 1);
grp.addSwitch('Legend', true);
grp.addComboBox('Type', ['Line', 'Bar', 'Donut'], 0);
grp.addColourPicker('Color', RGBA8(255, 0, 0, 255));
console.log('W=' + w.value);   // 500
// DialogResult.Ok.value === 1, DialogResult.Cancel.value === 0
```

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
