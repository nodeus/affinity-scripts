# Диалоги и UI (SDK 33000)

> API-референс · Модуль `affinity:ui`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (24), методов: 170.

## DialogApi

> Модуль `affinity:ui` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addColumn()` | — | DialogColumnHandle |
| `create(title, size)` | title: String, size: Size | DialogHandle |
| `enumerateColumns(callback)` | callback: Function | — |
| `findControl(controlID)` | controlID: Number | DialogControlHandle |
| `getColumn(index)` | index: Number | DialogColumnHandle |
| `getColumnCount()` | — | Number |
| `getInitialWidth()` | — | Number |
| `getIsResizable()` | — | Boolean |
| `getIsRunningModal()` | — | Boolean |
| `runModal()` | — | DialogResult |
| `setInitialWidth(width)` | width: Number | — |
| `setIsResizable(isResizable)` | isResizable: Boolean | — |
| `setItemsVisibility(showIDs, hideIDs)` | showIDs: Number[], hideIDs: Number[] | — |
| `setOnControlValueChangedHandler(callback)` | callback: Function | — |

## DialogBoolControlApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogBoolControlApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogBoolControlHandle |
| `getValue()` | — | Boolean |
| `setValue(value)` | value: Boolean | — |

## DialogButtonApi

> Модуль `affinity:ui` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogButtonApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogButtonHandle |
| `getAlignment()` | — | HorizontalAlignment |
| `getIsFullWidth()` | — | Boolean |
| `setAlignment(alignment)` | alignment: HorizontalAlignment | — |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |

## DialogButtonSetApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogButtonSetApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogButtonSetHandle |
| `getIsFullWidth()` | — | Boolean |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |

## DialogCheckBoxApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogCheckBoxApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogCheckBoxHandle |
| `getIsFullWidth()` | — | Boolean |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |

## DialogColourPickerApi

> Модуль `affinity:ui` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogColourPickerApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogColourPickerHandle |
| `getAllowNoise()` | — | Boolean |
| `getAllowPickNone()` | — | Boolean |
| `getIsFullWidth()` | — | Boolean |
| `getValue()` | — | ColourHandle |
| `setAllowNoise(value)` | value: Boolean | — |
| `setAllowPickNone(value)` | value: Boolean | — |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setValue(value)` | value: ColourHandle | — |

## DialogColumnApi

> Модуль `affinity:ui` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogColumnApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addGroup(text)` | text: String | DialogGroupHandle |
| `enumerateGroups(callback)` | callback: Function | — |
| `getColumnIndex()` | — | Number |
| `getGroup(index)` | index: Number | DialogGroupHandle |
| `getGroupCount()` | — | Number |
| `getPaddingFactor()` | — | Number |
| `getWidthProportion()` | — | Number |
| `setPaddingFactor(paddingFactor)` | paddingFactor: Number | — |
| `setWidthProportion(widthProportion)` | widthProportion: Number | — |

## DialogColumnStackApi

> Модуль `affinity:ui` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogColumnStackApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addColumn()` | — | DialogColumnHandle |
| `enumerateColumns(callback)` | callback: Function | — |
| `getColumn(index)` | index: Number | DialogColumnHandle |
| `getColumnCount()` | — | Number |

## DialogComboBoxApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogComboBoxApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogComboBoxHandle |
| `getIsFullWidth()` | — | Boolean |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |

## DialogControlApi

> Модуль `affinity:ui` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogControlApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getDescription()` | — | String |
| `getIsEnabled()` | — | Boolean |
| `getLabel()` | — | String |
| `setDescription(description)` | description: String | — |
| `setIsEnabled(isEnabled)` | isEnabled: Boolean | — |
| `setOnValueChangedHandler(callback)` | callback: Function | — |

## DialogEnumControlApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogEnumControlApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogEnumControlHandle |
| `getSelectedIndex()` | — | Number |
| `setSelectedIndex(index)` | index: Number | — |

## DialogFillEditorApi

> Модуль `affinity:ui` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogFillEditorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogFillEditorHandle |
| `getFill()` | — | FillHandle |
| `getIsFullWidth()` | — | Boolean |
| `getIsStrokeFill()` | — | Boolean |
| `setFill(fill)` | fill: FillHandle | — |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setIsStrokeFill(isStrokeFill)` | isStrokeFill: Boolean | — |

## DialogFontPickerApi

> Модуль `affinity:ui` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogFontPickerApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogFontPickerHandle |
| `getFont()` | — | FontHandle |
| `getFontCollection()` | — | FontCollectionHandle |
| `getFontFamily()` | — | FontFamilyHandle |
| `getIsFullWidth()` | — | Boolean |
| `getText()` | — | String |
| `setFont(font)` | font: FontHandle | — |
| `setFontCollection(fontCollection)` | fontCollection: FontCollectionHandle | — |
| `setFontFamily(fontFamily)` | fontFamily: FontFamilyHandle | — |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setText(text)` | text: String | — |

## DialogGroupApi

> Модуль `affinity:ui` · методов: 39 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogGroupApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addButton(label)` | label: String | DialogButtonHandle |
| `addButtonGetID(label)` | label: String | Number |
| `addButtonSet(label, items, initialValue)` | label: String, items: String[], initialValue: Number | DialogButtonSetHandle |
| `addButtonSetGetID(label, items, initialValue)` | label: String, items: String[], initialValue: Number | Number |
| `addCheckBox(label, initialValue)` | label: String, initialValue: Boolean | DialogCheckBoxHandle |
| `addCheckBoxGetID(label, initialValue)` | label: String, initialValue: Boolean | Number |
| `addColourPicker(label, initialValue)` | label: String, initialValue: ColourHandle | DialogColourPickerHandle |
| `addColourPickerGetID(label, initialValue)` | label: String, initialValue: ColourHandle | Number |
| `addColumnStack()` | — | DialogColumnStackHandle |
| `addColumnStackGetID()` | — | Number |
| `addComboBox(label, items, initialValue)` | label: String, items: String[], initialValue: Number | DialogComboBoxHandle |
| `addComboBoxGetID(label, items, initialValue)` | label: String, items: String[], initialValue: Number | Number |
| `addFillEditor(label, initialValueOrNull)` | label: String, initialValueOrNull: FillHandle | DialogFillEditorHandle |
| `addFillEditorGetID(label, initialValueOrNull)` | label: String, initialValueOrNull: FillHandle | Number |
| `addFontPicker(label)` | label: String | DialogFontPickerHandle |
| `addFontPickerGetID(label)` | label: String | Number |
| `addRadioGroup(label, items, initialValue)` | label: String, items: String[], initialValue: Number | DialogRadioGroupHandle |
| `addRadioGroupGetID(label, items, initialValue)` | label: String, items: String[], initialValue: Number | Number |
| `addSpatialAnchor(label, initialValue)` | label: String, initialValue: SpatialAnchor | DialogSpatialAnchorHandle |
| `addSpatialAnchorGetID(label, initialValue)` | label: String, initialValue: SpatialAnchor | Number |
| `addStaticText(label, text)` | label: String, text: String | DialogStaticTextHandle |
| `addStaticTextGetID(label, text)` | label: String, text: String | Number |
| `addStrokeEditor(label, initialValueOrNull)` | label: String, initialValueOrNull: LineStyleDescriptorHandle | DialogStrokeEditorHandle |
| `addStrokeEditorGetID(label, initialValueOrNull)` | label: String, initialValueOrNull: LineStyleDescriptorHandle | Number |
| `addSwitch(label, initialValue)` | label: String, initialValue: Boolean | DialogSwitchHandle |
| `addSwitchGetID(label, initialValue)` | label: String, initialValue: Boolean | Number |
| `addTextBox(label, text)` | label: String, text: String | DialogTextBoxHandle |
| `addTextBoxGetID(label, text)` | label: String, text: String | Number |
| `addUnitValueEditor(label, units, displayUnits, minValue, maxValue, initialValue)` | label: String, units: UnitType, displayUnits: UnitType, minValue: Number, maxValue: Number, initialValue: Number | DialogUnitValueEditorHandle |
| `addUnitValueEditorGetID(label, units, displayUnits, minValue, maxValue, initialValue)` | label: String, units: UnitType, displayUnits: UnitType, minValue: Number, maxValue: Number, initialValue: Number | Number |
| `addUserUnitValueEditor(label, units, displayUnits, minValue, maxValue, initialValue)` | label: String, units: UnitType, displayUnits: UserUnitType, minValue: Number, maxValue: Number, initialValue: Number | DialogUnitValueEditorHandle |
| `addUserUnitValueEditorGetID(label, units, displayUnits, minValue, maxValue, initialValue)` | label: String, units: UnitType, displayUnits: UserUnitType, minValue: Number, maxValue: Number, initialValue: Number | Number |
| `enumerateControls(callback)` | callback: Function | — |
| `getColumn()` | — | DialogColumnHandle |
| `getControl(index)` | index: Number | DialogControlHandle |
| `getControlCount()` | — | Number |
| `getEnableSeparator()` | — | Boolean |
| `getLabel()` | — | String |
| `setEnableSeparator(enableSeparator)` | enableSeparator: Boolean | — |

## DialogItemApi

> Модуль `affinity:ui` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogItemApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getIsVisible()` | — | Boolean |
| `getItemID()` | — | Number |
| `getItemType()` | — | DialogItemType |
| `setIsVisible(visible)` | visible: Boolean | — |

## DialogRadioGroupApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogRadioGroupApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogRadioGroupHandle |
| `getIsFullWidth()` | — | Boolean |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |

## DialogSpatialAnchorApi

> Модуль `affinity:ui` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogSpatialAnchorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogSpatialAnchorHandle |
| `getValue()` | — | SpatialAnchor |
| `setValue(value)` | value: SpatialAnchor | — |

## DialogStaticTextApi

> Модуль `affinity:ui` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogStaticTextApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogStaticTextHandle |

## DialogStrokeEditorApi

> Модуль `affinity:ui` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogStrokeEditorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogStrokeEditorHandle |
| `getIsFullWidth()` | — | Boolean |
| `getStroke()` | — | LineStyleDescriptorHandle |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setStroke(lineStyleDescriptor)` | lineStyleDescriptor: LineStyleDescriptorHandle | — |

## DialogSwitchApi

> Модуль `affinity:ui` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogSwitchApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogSwitchHandle |

## DialogTextBoxApi

> Модуль `affinity:ui` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogTextBoxApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogTextBoxHandle |
| `getIsMultiLine()` | — | Boolean |
| `getRowSpan()` | — | Number |
| `setIsMultiLine(value)` | value: Boolean | — |
| `setRowSpan(rowSpan)` | rowSpan: Number | — |

## DialogTextControlApi

> Модуль `affinity:ui` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogTextControlApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogTextControlHandle |
| `getIsFullWidth()` | — | Boolean |
| `getText()` | — | String |
| `getTextHorizontalAlignment()` | — | HorizontalAlignment |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setText(text)` | text: String | — |
| `setTextHorizontalAlignment(alignment)` | alignment: HorizontalAlignment | — |

## DialogUnitValueEditorApi

> Модуль `affinity:ui` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/DialogUnitValueEditorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromControl(ctrl)` | ctrl: DialogControlHandle | DialogUnitValueEditorHandle |
| `getHasNoMaxValue()` | — | Boolean |
| `getHasNoMinValue()` | — | Boolean |
| `getIsFullWidth()` | — | Boolean |
| `getPrecision()` | — | Number |
| `getShowPopupSlider()` | — | Boolean |
| `getUnits()` | — | UnitType |
| `getValue()` | — | Number |
| `setHasNoMaxValue(hasNoMaxValue)` | hasNoMaxValue: Boolean | — |
| `setHasNoMinValue(hasNoMinValue)` | hasNoMinValue: Boolean | — |
| `setIsFullWidth(isFullWidth)` | isFullWidth: Boolean | — |
| `setPrecision(precision)` | precision: Number | — |
| `setShowPopupSlider(hasSlider)` | hasSlider: Boolean | — |
| `setValue(value)` | value: Number | — |

## UiApi

> Модуль `affinity:ui` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/UiApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `alert(message, title)` | message: String, title: String | — |
| `alertAsync(message, title, callback)` | message: String, title: String, callback: Function | — |
| `chooseFile()` | — | String |
| `chooseFileAsync(callback)` | callback: Function | — |
| `confirm(message, title)` | message: String, title: String | Boolean |
| `confirmAsync(message, title, callback)` | message: String, title: String, callback: Function | — |
| `prompt(message, title, initialText)` | message: String, title: String, initialText: String | String |
| `promptAsync(message, title, initialText, callback)` | message: String, title: String, initialText: String, callback: Function | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `addGuides.js`
- `adjustPageItems.js`
- `alignToPage.js`
- `arrowheads.js`
- `artboardGrid.js`
- `bitmapWriter.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cornerEffects.js`
- `cropMarks.js`
- `divideLength.js`
- `flexibleLayout.js`
- `makeGrid.js`
- `makeNumbersSequence.js`
- `pathEffects.js`
- `randomise.js`
- `roundAnyCorner.js`
- `selectObjects.js`
- `setDocumentFormat.js`
- `stepAndRepeat.js`
