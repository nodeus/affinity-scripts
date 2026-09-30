# Шрифты (SDK 33000)

> API-референс · Модуль `affinity:fonts`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (4), методов: 56.

## FontApi

> Модуль `affinity:fonts` · методов: 33 · [SDK](https://sdk.affinity.studio/33000/js/apis/FontApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FontHandle |
| `cloneAsFont()` | — | FontHandle |
| `create(family, weight, isItalic, width)` | family: String, weight: Number, isItalic: Boolean, width: FontWidth | FontHandle |
| `createDefault()` | — | FontHandle |
| `createDefaultMonospaced()` | — | FontHandle |
| `createDefaultSymbol()` | — | FontHandle |
| `createEmpty()` | — | FontHandle |
| `enumerate(callback)` | callback: Function | — |
| `getDistance(other)` | other: FontHandle | Number |
| `getFamilyName()` | — | String |
| `getNormalizedWeight()` | — | Number |
| `getNormalizedWidth()` | — | Number |
| `getPanose()` | — | PanoseHandle |
| `getPostscriptName()` | — | String |
| `getPostscriptPrefix()` | — | String |
| `getRibbiFamily()` | — | String |
| `getTraitsName()` | — | String |
| `getVariableBold()` | — | VariableFontBold |
| `getVariableItalic()` | — | VariableFontItalic |
| `getWeight()` | — | Number |
| `getWidth()` | — | FontWidth |
| `getWwsFamily()` | — | String |
| `isBold()` | — | Boolean |
| `isBoldAvailable()` | — | Boolean |
| `isCondensed()` | — | Boolean |
| `isExpanded()` | — | Boolean |
| `isItalic()` | — | Boolean |
| `isItalicAvailable()` | — | Boolean |
| `isNormal()` | — | Boolean |
| `isValid()` | — | Boolean |
| `isVariableBold()` | — | Boolean |
| `isVariableItalic()` | — | Boolean |
| `toString()` | — | String |

## FontCollectionApi

> Модуль `affinity:fonts` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/FontCollectionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FontCollectionHandle |
| `cloneAsFontCollection()` | — | FontCollectionHandle |
| `enumerateCollections(callback)` | callback: Function | — |
| `getDefault()` | — | FontCollectionHandle |
| `getDisplayName()` | — | String |

## FontFamilyApi

> Модуль `affinity:fonts` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/FontFamilyApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FontFamilyHandle |
| `cloneAsFontFamily()` | — | FontFamilyHandle |
| `enumerate(callback)` | callback: Function | — |
| `enumerateFonts(callback)` | callback: Function | — |
| `getFont(index)` | index: Number | FontHandle |
| `getFontCount()` | — | Number |
| `getName()` | — | String |
| `hasFixed()` | — | Boolean |
| `hasVariations()` | — | Boolean |

## PanoseApi

> Модуль `affinity:fonts` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/PanoseApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PanoseHandle |
| `cloneAsPanose()` | — | PanoseHandle |
| `getDistance(other)` | other: PanoseHandle | Number |
| `is(panoseType)` | panoseType: PanoseType | Boolean |
| `isEmpty()` | — | Boolean |
| `isMonospaced()` | — | Boolean |
| `isSansSerif()` | — | Boolean |
| `isSerif()` | — | Boolean |
| `toString()` | — | String |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `boldItalics.js`
- `tableFromJson.js`
