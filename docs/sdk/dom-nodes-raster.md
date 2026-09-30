# Растровые узлы: фильтры и коррекции (affinity:dom) (SDK 33000)

> API-референс `affinity:dom` · Модуль `affinity:dom`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (156), методов: 882.

## AddNoiseFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/AddNoiseFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | AddNoiseFilterParametersHandle |
| `getIntensity()` | — | Number |
| `getIsMonochromatic()` | — | Boolean |
| `getNoiseType()` | — | AddNoiseType |
| `setIntensity(intensity)` | intensity: Number | — |
| `setIsMonochromatic(isMonochromatic)` | isMonochromatic: Boolean | — |
| `setNoiseType(noiseType)` | noiseType: AddNoiseType | — |

## AddNoiseFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/AddNoiseFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | AddNoiseFilterRasterNodeHandle |
| `getParameters(node)` | node: AddNoiseFilterRasterNodeHandle | AddNoiseFilterParametersHandle |

## AddNoiseFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/AddNoiseFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: AddNoiseFilterParametersHandle | AddNoiseFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | AddNoiseFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | AddNoiseFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: AddNoiseFilterRasterNodeDefinitionHandle | AddNoiseFilterParametersHandle |
| `setParameters(node, parameters)` | node: AddNoiseFilterRasterNodeDefinitionHandle, parameters: AddNoiseFilterParametersHandle | — |

## AdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/AdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | AdjustmentRasterNodeHandle |

## AdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/AdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | AdjustmentRasterNodeDefinitionHandle |

## BilateralBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BilateralBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | BilateralBlurFilterParametersHandle |
| `getRadius()` | — | Number |
| `getTolerance()` | — | Number |
| `setRadius(radius)` | radius: Number | — |
| `setTolerance(tolerance)` | tolerance: Number | — |

## BilateralBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/BilateralBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BilateralBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: BilateralBlurFilterRasterNodeHandle | BilateralBlurFilterParametersHandle |

## BilateralBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BilateralBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: BilateralBlurFilterParametersHandle | BilateralBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | BilateralBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | BilateralBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | BilateralBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: BilateralBlurFilterParametersHandle | — |

## BlackAndWhiteAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/BlackAndWhiteAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | BlackAndWhiteAdjustmentParametersHandle |
| `getBlue()` | — | Number |
| `getCyan()` | — | Number |
| `getGreen()` | — | Number |
| `getMagenta()` | — | Number |
| `getRed()` | — | Number |
| `getYellow()` | — | Number |
| `setBlue(blue)` | blue: Number | — |
| `setCyan(cyan)` | cyan: Number | — |
| `setGreen(green)` | green: Number | — |
| `setMagenta(magenta)` | magenta: Number | — |
| `setRed(red)` | red: Number | — |
| `setYellow(yellow)` | yellow: Number | — |

## BlackAndWhiteAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/BlackAndWhiteAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BlackAndWhiteAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: BlackAndWhiteAdjustmentRasterNodeHandle | BlackAndWhiteAdjustmentParametersHandle |

## BlackAndWhiteAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BlackAndWhiteAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: BlackAndWhiteAdjustmentParametersHandle | BlackAndWhiteAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | BlackAndWhiteAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | BlackAndWhiteAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: BlackAndWhiteAdjustmentRasterNodeDefinitionHandle | BlackAndWhiteAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: BlackAndWhiteAdjustmentRasterNodeDefinitionHandle, parameters: BlackAndWhiteAdjustmentParametersHandle | — |

## BloomFilterParametersApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/BloomFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | BloomFilterParametersHandle |
| `getColour()` | — | Number |
| `getHighlightBlend()` | — | Number |
| `getIsStrong()` | — | Boolean |
| `getMethod()` | — | BloomMethod |
| `getMidtoneBlend()` | — | Number |
| `getShadowBlend()` | — | Number |
| `setColour(colour)` | colour: Number | — |
| `setHighlightBlend(highlightBlend)` | highlightBlend: Number | — |
| `setIsStrong(isStrong)` | isStrong: Boolean | — |
| `setMethod(method)` | method: BloomMethod | — |
| `setMidtoneBlend(midtoneBlend)` | midtoneBlend: Number | — |
| `setShadowBlend(shadowBlend)` | shadowBlend: Number | — |

## BloomFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/BloomFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BloomFilterRasterNodeHandle |
| `getParameters(node)` | node: BloomFilterRasterNodeHandle | BloomFilterParametersHandle |

## BloomFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BloomFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: BloomFilterParametersHandle | BloomFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | BloomFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | BloomFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | BloomFilterParametersHandle |
| `setParameters(parameters)` | parameters: BloomFilterParametersHandle | — |

## BoxBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/BoxBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | BoxBlurFilterParametersHandle |
| `getRadius()` | — | Number |
| `setRadius(radius)` | radius: Number | — |

## BoxBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/BoxBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BoxBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: BoxBlurFilterRasterNodeHandle | BoxBlurFilterParametersHandle |

## BoxBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BoxBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: BoxBlurFilterParametersHandle | BoxBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | BoxBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | BoxBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | BoxBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: BoxBlurFilterParametersHandle | — |

## BrightnessContrastAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/BrightnessContrastAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | BrightnessContrastAdjustmentParametersHandle |
| `getBrightness()` | — | Number |
| `getContrast()` | — | Number |
| `getIsLinear()` | — | Boolean |
| `setBrightness(brightness)` | brightness: Number | — |
| `setContrast(contrast)` | contrast: Number | — |
| `setIsLinear(isLinear)` | isLinear: Boolean | — |

## BrightnessContrastAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/BrightnessContrastAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | BrightnessContrastAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: BrightnessContrastAdjustmentRasterNodeHandle | BrightnessContrastAdjustmentParametersHandle |

## BrightnessContrastAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/BrightnessContrastAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: BrightnessContrastAdjustmentParametersHandle | BrightnessContrastAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | BrightnessContrastAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | BrightnessContrastAdjustmentRasterNodeDefinitionHandle |
| `getParameters()` | — | BrightnessContrastAdjustmentParametersHandle |
| `setParameters(parameters)` | parameters: BrightnessContrastAdjustmentParametersHandle | — |

## ClarityFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ClarityFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ClarityFilterParametersHandle |
| `getStrength()` | — | Number |
| `setStrength(strength)` | strength: Number | — |

## ClarityFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ClarityFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ClarityFilterRasterNodeHandle |
| `getParameters(node)` | node: ClarityFilterRasterNodeHandle | ClarityFilterParametersHandle |

## ClarityFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ClarityFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ClarityFilterParametersHandle | ClarityFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | ClarityFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ClarityFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: ClarityFilterRasterNodeDefinitionHandle | ClarityFilterParametersHandle |
| `setParameters(node, parameters)` | node: ClarityFilterRasterNodeDefinitionHandle, parameters: ClarityFilterParametersHandle | — |

## ColourBalanceAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourBalanceAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ColourBalanceAdjustmentParametersHandle |
| `enumerateValues(callback)` | callback: Function | — |
| `getPreserveLuminosity()` | — | Boolean |
| `getValues(tonalRange)` | tonalRange: TonalRangeType | ColourBalanceValues |
| `getValuesCount()` | — | Number |
| `setPreserveLuminosity(preserveLuminosity)` | preserveLuminosity: Boolean | — |
| `setValues(tonalRange, values)` | tonalRange: TonalRangeType, values: ColourBalanceValues | — |

## ColourBalanceAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourBalanceAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ColourBalanceAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ColourBalanceAdjustmentRasterNodeHandle | ColourBalanceAdjustmentParametersHandle |

## ColourBalanceAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourBalanceAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ColourBalanceAdjustmentParametersHandle | ColourBalanceAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ColourBalanceAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ColourBalanceAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: ColourBalanceAdjustmentRasterNodeDefinitionHandle | ColourBalanceAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: ColourBalanceAdjustmentRasterNodeDefinitionHandle, parameters: ColourBalanceAdjustmentParametersHandle | — |

## CurvesAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvesAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | CurvesAdjustmentParametersHandle |
| `enumerateChannelSplines(callback)` | callback: Function | — |
| `getChannelSpline(channel)` | channel: Number | SplineHandle |
| `getChannelSplineCount()` | — | Number |
| `getMasterSpline()` | — | SplineHandle |
| `getMax()` | — | Number |
| `getMin()` | — | Number |
| `setChannelSpline(channel, spline)` | channel: Number, spline: SplineHandle | — |
| `setMasterSpline(spline)` | spline: SplineHandle | — |
| `setMax(max)` | max: Number | — |
| `setMin(min)` | min: Number | — |

## CurvesAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvesAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | CurvesAdjustmentRasterNodeHandle |
| `getColourSpace(node)` | node: CurvesAdjustmentRasterNodeHandle | ColourSpaceType |
| `getParameters(node)` | node: CurvesAdjustmentRasterNodeHandle | CurvesAdjustmentParametersHandle |

## CurvesAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurvesAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters, colourSpace)` | parameters: CurvesAdjustmentParametersHandle, colourSpace: ColourSpaceType | CurvesAdjustmentRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | CurvesAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | CurvesAdjustmentRasterNodeDefinitionHandle |
| `getColourSpace(node)` | node: CurvesAdjustmentRasterNodeDefinitionHandle | ColourSpaceType |
| `getParameters(node)` | node: CurvesAdjustmentRasterNodeDefinitionHandle | CurvesAdjustmentParametersHandle |
| `setColourSpace(node, colourSpace)` | node: CurvesAdjustmentRasterNodeDefinitionHandle, colourSpace: ColourSpaceType | — |
| `setParameters(node, parameters)` | node: CurvesAdjustmentRasterNodeDefinitionHandle, parameters: CurvesAdjustmentParametersHandle | — |

## DefringeFilterParametersApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/DefringeFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DefringeFilterParametersHandle |
| `getEdgeBrightnessThreshold()` | — | Number |
| `getHue()` | — | Number |
| `getRadius()` | — | Number |
| `getRemoveComplementary()` | — | Boolean |
| `getTolerance()` | — | Number |
| `setEdgeBrightnessThreshold(edgeBrightnessThreshold)` | edgeBrightnessThreshold: Number | — |
| `setHue(hue)` | hue: Number | — |
| `setRadius(radius)` | radius: Number | — |
| `setRemoveComplementary(removeComplementary)` | removeComplementary: Boolean | — |
| `setTolerance(tolerance)` | tolerance: Number | — |

## DefringeFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DefringeFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DefringeFilterRasterNodeHandle |
| `getParameters(node)` | node: DefringeFilterRasterNodeHandle | DefringeFilterParametersHandle |

## DefringeFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DefringeFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DefringeFilterParametersHandle | DefringeFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | DefringeFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DefringeFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: DefringeFilterRasterNodeDefinitionHandle | DefringeFilterParametersHandle |
| `setParameters(node, parameters)` | node: DefringeFilterRasterNodeDefinitionHandle, parameters: DefringeFilterParametersHandle | — |

## DenoiseFilterParametersApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/DenoiseFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DenoiseFilterParametersHandle |
| `getColours()` | — | Number |
| `getColoursContribution()` | — | Number |
| `getLuminance()` | — | Number |
| `getLuminanceContribution()` | — | Number |
| `getLuminanceDetail()` | — | Number |
| `setColours(colours)` | colours: Number | — |
| `setColoursContribution(coloursContribution)` | coloursContribution: Number | — |
| `setLuminance(luminance)` | luminance: Number | — |
| `setLuminanceContribution(luminanceContribution)` | luminanceContribution: Number | — |
| `setLuminanceDetail(luminanceDetail)` | luminanceDetail: Number | — |

## DenoiseFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DenoiseFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DenoiseFilterRasterNodeHandle |
| `getParameters(node)` | node: DenoiseFilterRasterNodeHandle | DenoiseFilterParametersHandle |

## DenoiseFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DenoiseFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DenoiseFilterParametersHandle | DenoiseFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | DenoiseFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DenoiseFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: DenoiseFilterRasterNodeDefinitionHandle | DenoiseFilterParametersHandle |
| `setParameters(node, parameters)` | node: DenoiseFilterRasterNodeDefinitionHandle, parameters: DenoiseFilterParametersHandle | — |

## DepthOfFieldFilterParametersApi

> Модуль `affinity:dom` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/DepthOfFieldFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DepthOfFieldFilterParametersHandle |
| `getClarity()` | — | Number |
| `getEllipticalParams()` | — | EllipticalDepthOfFieldParameters |
| `getMode()` | — | DepthOfFieldMode |
| `getRadius()` | — | Number |
| `getTiltShiftParams()` | — | TiltShiftDepthOfFieldParameters |
| `getVibrance()` | — | Number |
| `setClarity(clarity)` | clarity: Number | — |
| `setEllipticalParams(params)` | params: EllipticalDepthOfFieldParameters | — |
| `setRadius(radius)` | radius: Number | — |
| `setTiltShiftParams(params)` | params: TiltShiftDepthOfFieldParameters | — |
| `setVibrance(vibrance)` | vibrance: Number | — |

## DepthOfFieldFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DepthOfFieldFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DepthOfFieldFilterRasterNodeHandle |
| `getParameters(node)` | node: DepthOfFieldFilterRasterNodeHandle | DepthOfFieldFilterParametersHandle |

## DepthOfFieldFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DepthOfFieldFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DepthOfFieldFilterParametersHandle | DepthOfFieldFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | DepthOfFieldFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DepthOfFieldFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | DepthOfFieldFilterParametersHandle |
| `setParameters(parameters)` | parameters: DepthOfFieldFilterParametersHandle | — |

## DevelopNodeApi

> Модуль `affinity:dom` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/DevelopNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DevelopNodeHandle |
| `getImageResourceInterface()` | — | ImageResourceInterfaceHandle |
| `getImageSize()` | — | Size |
| `getParameters()` | — | DevelopParametersHandle |
| `getRasterInterface()` | — | RasterInterfaceHandle |
| `getSourceIsRaw()` | — | Boolean |

## DevelopParametersApi

> Модуль `affinity:dom` · методов: 166 · [SDK](https://sdk.affinity.studio/33000/js/apis/DevelopParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getApplyToneCurve()` | — | Boolean |
| `getBlackAndWhite()` | — | BlackAndWhiteAdjustmentParametersHandle |
| `getBlackAndWhiteEnabled()` | — | Boolean |
| `getBlackpoint()` | — | Number |
| `getChromaticAberrationEnabled()` | — | Boolean |
| `getChromaticAberrationUseProfile()` | — | Boolean |
| `getClarity()` | — | Number |
| `getColourBalance()` | — | ColourBalanceAdjustmentParametersHandle |
| `getColourBalanceEnabled()` | — | Boolean |
| `getColourContribution()` | — | Number |
| `getContrast()` | — | Number |
| `getCurves()` | — | CurvesAdjustmentParametersHandle |
| `getCurvesEnabled()` | — | Boolean |
| `getDefringeComplementary()` | — | Boolean |
| `getDefringeEnabled()` | — | Boolean |
| `getDefringeHue()` | — | Number |
| `getDefringeRadius()` | — | Number |
| `getDefringeThreshold()` | — | Number |
| `getDefringeTolerance()` | — | Number |
| `getDetailRefinementAmount()` | — | Number |
| `getDetailRefinementEnabled()` | — | Boolean |
| `getDetailRefinementMethod()` | — | DevelopDetailRefinementMethod |
| `getDetailRefinementRadius()` | — | Number |
| `getEnhanceEnabled()` | — | Boolean |
| `getExposure()` | — | Number |
| `getExposureEnabled()` | — | Boolean |
| `getFocusPeakingHue()` | — | Number |
| `getHSL()` | — | HSLShiftAdjustmentParametersHandle |
| `getHSLEnabled()` | — | Boolean |
| `getHighlightsIntensity()` | — | Number |
| `getInvertEnabled()` | — | Boolean |
| `getInvertMethod()` | — | DevelopInvertMethod |
| `getInvertStrength()` | — | Number |
| `getLensCorrectionEnabled()` | — | Boolean |
| `getLensDistortion()` | — | Number |
| `getLensHorizontal()` | — | Number |
| `getLensProfileDistortion()` | — | Boolean |
| `getLensProfileName()` | — | String |
| `getLensRotation()` | — | Number |
| `getLensScale()` | — | Number |
| `getLensVertical()` | — | Number |
| `getLensVignetteEnabled()` | — | Boolean |
| `getLensVignetteIntensity()` | — | Number |
| `getLensVignetteUseProfile()` | — | Boolean |
| `getLuminanceContribution()` | — | Number |
| `getNoiseAdditionColour()` | — | Boolean |
| `getNoiseAdditionEnabled()` | — | Boolean |
| `getNoiseAdditionGaussian()` | — | Boolean |
| `getNoiseAdditionIntensity()` | — | Number |
| `getNoiseReductionChromaSigma()` | — | Number |
| `getNoiseReductionDetail()` | — | Number |
| `getNoiseReductionEnabled()` | — | Boolean |
| `getNoiseReductionLuminanceSigma()` | — | Number |
| `getPostVignetteEnabled()` | — | Boolean |
| `getPostVignetteHardness()` | — | Number |
| `getPostVignetteIntensity()` | — | Number |
| `getPostVignetteScale()` | — | Number |
| `getProfileEnabled()` | — | Boolean |
| `getRawWhiteBalance()` | — | Boolean |
| `getSaturation()` | — | Number |
| `getSelectiveColour()` | — | SelectiveColourAdjustmentParametersHandle |
| `getSelectiveColourEnabled()` | — | Boolean |
| `getShadowsHighlightsEnabled()` | — | Boolean |
| `getShadowsIntensity()` | — | Number |
| `getShowClippedHighlights()` | — | Boolean |
| `getShowClippedShadows()` | — | Boolean |
| `getShowClippedTones()` | — | Boolean |
| `getShowFocusPeaking()` | — | Boolean |
| `getSplitToning()` | — | SplitToningAdjustmentParametersHandle |
| `getSplitToningEnabled()` | — | Boolean |
| `getTexture()` | — | Number |
| `getTint()` | — | Number |
| `getToneCurveEnabled()` | — | Boolean |
| `getToneCurveMethod()` | — | DevelopToneCurveMethod |
| `getVibrance()` | — | Number |
| `getWaveletChromaLevels()` | — | Number |
| `getWaveletChromaSigma()` | — | Number |
| `getWaveletDetail()` | — | Number |
| `getWaveletLevels()` | — | Number |
| `getWaveletLumaSigma()` | — | Number |
| `getWaveletNoiseReductionEnabled()` | — | Boolean |
| `getWhiteBalance()` | — | Number |
| `getWhiteBalanceEnabled()` | — | Boolean |
| `getWhitepoint()` | — | Number |
| `setApplyToneCurve(applyToneCurve)` | applyToneCurve: Boolean | — |
| `setBlackAndWhite(blackAndWhite)` | blackAndWhite: BlackAndWhiteAdjustmentParametersHandle | — |
| `setBlackAndWhiteEnabled(blackAndWhiteEnabled)` | blackAndWhiteEnabled: Boolean | — |
| `setBlackpoint(blackpoint)` | blackpoint: Number | — |
| `setChromaticAberrationEnabled(chromaticAberrationEnabled)` | chromaticAberrationEnabled: Boolean | — |
| `setChromaticAberrationUseProfile(chromaticAberrationUseProfile)` | chromaticAberrationUseProfile: Boolean | — |
| `setClarity(clarity)` | clarity: Number | — |
| `setColourBalance(colourBalance)` | colourBalance: ColourBalanceAdjustmentParametersHandle | — |
| `setColourBalanceEnabled(colourBalanceEnabled)` | colourBalanceEnabled: Boolean | — |
| `setColourContribution(colourContribution)` | colourContribution: Number | — |
| `setContrast(contrast)` | contrast: Number | — |
| `setCurves(curves)` | curves: CurvesAdjustmentParametersHandle | — |
| `setCurvesEnabled(curvesEnabled)` | curvesEnabled: Boolean | — |
| `setDefringeComplementary(defringeComplementary)` | defringeComplementary: Boolean | — |
| `setDefringeEnabled(defringeEnabled)` | defringeEnabled: Boolean | — |
| `setDefringeHue(defringeHue)` | defringeHue: Number | — |
| `setDefringeRadius(defringeRadius)` | defringeRadius: Number | — |
| `setDefringeThreshold(defringeThreshold)` | defringeThreshold: Number | — |
| `setDefringeTolerance(defringeTolerance)` | defringeTolerance: Number | — |
| `setDetailRefinementAmount(detailRefinementAmount)` | detailRefinementAmount: Number | — |
| `setDetailRefinementEnabled(detailRefinementEnabled)` | detailRefinementEnabled: Boolean | — |
| `setDetailRefinementMethod(detailRefinementMethod)` | detailRefinementMethod: DevelopDetailRefinementMethod | — |
| `setDetailRefinementRadius(detailRefinementRadius)` | detailRefinementRadius: Number | — |
| `setEnhanceEnabled(enhanceEnabled)` | enhanceEnabled: Boolean | — |
| `setExposure(exposure)` | exposure: Number | — |
| `setExposureEnabled(exposureEnabled)` | exposureEnabled: Boolean | — |
| `setFocusPeakingHue(focusPeakingHue)` | focusPeakingHue: Number | — |
| `setHSL(hsl)` | hsl: HSLShiftAdjustmentParametersHandle | — |
| `setHSLEnabled(hslEnabled)` | hslEnabled: Boolean | — |
| `setHighlightsIntensity(highlightsIntensity)` | highlightsIntensity: Number | — |
| `setInvertEnabled(invertEnabled)` | invertEnabled: Boolean | — |
| `setInvertMethod(invertMethod)` | invertMethod: DevelopInvertMethod | — |
| `setInvertStrength(invertStrength)` | invertStrength: Number | — |
| `setLensCorrectionEnabled(lensCorrectionEnabled)` | lensCorrectionEnabled: Boolean | — |
| `setLensDistortion(lensDistortion)` | lensDistortion: Number | — |
| `setLensHorizontal(lensHorizontal)` | lensHorizontal: Number | — |
| `setLensProfileDistortion(lensProfileDistortion)` | lensProfileDistortion: Boolean | — |
| `setLensRotation(lensRotation)` | lensRotation: Number | — |
| `setLensScale(lensScale)` | lensScale: Number | — |
| `setLensVertical(lensVertical)` | lensVertical: Number | — |
| `setLensVignetteEnabled(lensVignetteEnabled)` | lensVignetteEnabled: Boolean | — |
| `setLensVignetteIntensity(lensVignetteIntensity)` | lensVignetteIntensity: Number | — |
| `setLensVignetteUseProfile(lensVignetteUseProfile)` | lensVignetteUseProfile: Boolean | — |
| `setLuminanceContribution(luminanceContribution)` | luminanceContribution: Number | — |
| `setNoiseAdditionColour(noiseAdditionColour)` | noiseAdditionColour: Boolean | — |
| `setNoiseAdditionEnabled(noiseAdditionEnabled)` | noiseAdditionEnabled: Boolean | — |
| `setNoiseAdditionGaussian(noiseAdditionGaussian)` | noiseAdditionGaussian: Boolean | — |
| `setNoiseAdditionIntensity(noiseAdditionIntensity)` | noiseAdditionIntensity: Number | — |
| `setNoiseReductionChromaSigma(noiseReductionChromaSigma)` | noiseReductionChromaSigma: Number | — |
| `setNoiseReductionDetail(noiseReductionDetail)` | noiseReductionDetail: Number | — |
| `setNoiseReductionEnabled(noiseReductionEnabled)` | noiseReductionEnabled: Boolean | — |
| `setNoiseReductionLuminanceSigma(noiseReductionLuminanceSigma)` | noiseReductionLuminanceSigma: Number | — |
| `setPostVignetteEnabled(postVignetteEnabled)` | postVignetteEnabled: Boolean | — |
| `setPostVignetteHardness(postVignetteHardness)` | postVignetteHardness: Number | — |
| `setPostVignetteIntensity(postVignetteIntensity)` | postVignetteIntensity: Number | — |
| `setPostVignetteScale(postVignetteScale)` | postVignetteScale: Number | — |
| `setProfileEnabled(profileEnabled)` | profileEnabled: Boolean | — |
| `setSaturation(saturation)` | saturation: Number | — |
| `setSelectiveColour(selectiveColour)` | selectiveColour: SelectiveColourAdjustmentParametersHandle | — |
| `setSelectiveColourEnabled(selectiveColourEnabled)` | selectiveColourEnabled: Boolean | — |
| `setShadowsHighlightsEnabled(shadowsHighlightsEnabled)` | shadowsHighlightsEnabled: Boolean | — |
| `setShadowsIntensity(shadowsIntensity)` | shadowsIntensity: Number | — |
| `setShowClippedHighlights(showClippedHighlights)` | showClippedHighlights: Boolean | — |
| `setShowClippedShadows(showClippedShadows)` | showClippedShadows: Boolean | — |
| `setShowClippedTones(showClippedTones)` | showClippedTones: Boolean | — |
| `setShowFocusPeaking(showFocusPeaking)` | showFocusPeaking: Boolean | — |
| `setSplitToning(splitToning)` | splitToning: SplitToningAdjustmentParametersHandle | — |
| `setSplitToningEnabled(splitToningEnabled)` | splitToningEnabled: Boolean | — |
| `setTexture(texture)` | texture: Number | — |
| `setTint(tint)` | tint: Number | — |
| `setToneCurveEnabled(toneCurveEnabled)` | toneCurveEnabled: Boolean | — |
| `setToneCurveMethod(toneCurveMethod)` | toneCurveMethod: DevelopToneCurveMethod | — |
| `setVibrance(vibrance)` | vibrance: Number | — |
| `setWaveletChromaLevels(waveletChromaLevels)` | waveletChromaLevels: Number | — |
| `setWaveletChromaSigma(waveletChromaSigma)` | waveletChromaSigma: Number | — |
| `setWaveletDetail(waveletDetail)` | waveletDetail: Number | — |
| `setWaveletLevels(waveletLevels)` | waveletLevels: Number | — |
| `setWaveletLumaSigma(waveletLumaSigma)` | waveletLumaSigma: Number | — |
| `setWaveletNoiseReductionEnabled(waveletNoiseReductionEnabled)` | waveletNoiseReductionEnabled: Boolean | — |
| `setWhiteBalance(whiteBalance)` | whiteBalance: Number | — |
| `setWhiteBalanceEnabled(whiteBalanceEnabled)` | whiteBalanceEnabled: Boolean | — |
| `setWhitepoint(whitepoint)` | whitepoint: Number | — |

## DiffuseFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DiffuseFilterParametersHandle |
| `getIntensity()` | — | Number |
| `setIntensity(intensity)` | intensity: Number | — |

## DiffuseFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DiffuseFilterRasterNodeHandle |
| `getParameters(node)` | node: DiffuseFilterRasterNodeHandle | DiffuseFilterParametersHandle |

## DiffuseFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DiffuseFilterParametersHandle | DiffuseFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | DiffuseFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DiffuseFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: DiffuseFilterRasterNodeDefinitionHandle | DiffuseFilterParametersHandle |
| `setParameters(node, parameters)` | node: DiffuseFilterRasterNodeDefinitionHandle, parameters: DiffuseFilterParametersHandle | — |

## DiffuseGlowFilterParametersApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseGlowFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DiffuseGlowFilterParametersHandle |
| `getIntensity()` | — | Number |
| `getOpacity()` | — | Number |
| `getRadius()` | — | Number |
| `getThreshold()` | — | Number |
| `setIntensity(intensity)` | intensity: Number | — |
| `setOpacity(opacity)` | opacity: Number | — |
| `setRadius(radius)` | radius: Number | — |
| `setThreshold(threshold)` | threshold: Number | — |

## DiffuseGlowFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseGlowFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DiffuseGlowFilterRasterNodeHandle |
| `getParameters(node)` | node: DiffuseGlowFilterRasterNodeHandle | DiffuseGlowFilterParametersHandle |

## DiffuseGlowFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffuseGlowFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DiffuseGlowFilterParametersHandle | DiffuseGlowFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | DiffuseGlowFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DiffuseGlowFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | DiffuseGlowFilterParametersHandle |
| `setParameters(parameters)` | parameters: DiffuseGlowFilterParametersHandle | — |

## DustAndScratchFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DustAndScratchFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | DustAndScratchFilterParametersHandle |
| `getIsChannelTolerance()` | — | Boolean |
| `getRadius()` | — | Number |
| `getTolerance()` | — | Number |
| `setIsChannelTolerance(isChannelTolerance)` | isChannelTolerance: Boolean | — |
| `setRadius(radius)` | radius: Number | — |
| `setTolerance(tolerance)` | tolerance: Number | — |

## DustAndScratchFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/DustAndScratchFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | DustAndScratchFilterRasterNodeHandle |
| `getParameters(node)` | node: DustAndScratchFilterRasterNodeHandle | DustAndScratchFilterParametersHandle |

## DustAndScratchFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/DustAndScratchFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: DustAndScratchFilterParametersHandle | DustAndScratchFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | DustAndScratchFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | DustAndScratchFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: DustAndScratchFilterRasterNodeDefinitionHandle | DustAndScratchFilterParametersHandle |
| `setParameters(node, parameters)` | node: DustAndScratchFilterRasterNodeDefinitionHandle, parameters: DustAndScratchFilterParametersHandle | — |

## EnclosureRasterNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/EnclosureRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | EnclosureRasterNodeHandle |

## EnclosureRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/EnclosureRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | EnclosureRasterNodeDefinitionHandle |

## ExposureAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExposureAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ExposureAdjustmentParametersHandle |
| `getExposure()` | — | Number |
| `setExposure(exposure)` | exposure: Number | — |

## ExposureAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExposureAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ExposureAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ExposureAdjustmentRasterNodeHandle | ExposureAdjustmentParametersHandle |

## ExposureAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ExposureAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ExposureAdjustmentParametersHandle | ExposureAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ExposureAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ExposureAdjustmentRasterNodeDefinitionHandle |
| `getParameters()` | — | ExposureAdjustmentParametersHandle |
| `setParameters(parameters)` | parameters: ExposureAdjustmentParametersHandle | — |

## FieldBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/FieldBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addBlurItem(blurItemParameters)` | blurItemParameters: FieldBlurItemParameters | Number |
| `create()` | — | FieldBlurFilterParametersHandle |
| `deleteBlurItem(index)` | index: Number | — |
| `enumerateBlurItems(callback)` | callback: Function | — |
| `getBlurItem(index)` | index: Number | FieldBlurItemParameters |
| `getBlurItemCount()` | — | Number |
| `getGlobalRadius()` | — | Number |
| `setGlobalRadius(radius)` | radius: Number | — |

## FieldBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/FieldBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | FieldBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: FieldBlurFilterRasterNodeHandle | FieldBlurFilterParametersHandle |

## FieldBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/FieldBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: FieldBlurFilterParametersHandle | FieldBlurFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | FieldBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | FieldBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | FieldBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: FieldBlurFilterParametersHandle | — |

## FilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/FilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | FilterRasterNodeHandle |
| `getPreserveAlpha(node)` | node: FilterRasterNodeHandle | Boolean |

## FilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/FilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | FilterRasterNodeDefinitionHandle |
| `getPreserveAlpha()` | — | Boolean |
| `setPreserveAlpha(preserve)` | preserve: Boolean | — |

## GaussianBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/GaussianBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | GaussianBlurFilterParametersHandle |
| `getRadius()` | — | Number |
| `setRadius(radius)` | radius: Number | — |

## GaussianBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/GaussianBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | GaussianBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: GaussianBlurFilterRasterNodeHandle | GaussianBlurFilterParametersHandle |

## GaussianBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/GaussianBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: GaussianBlurFilterParametersHandle | GaussianBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | GaussianBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | GaussianBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | GaussianBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: GaussianBlurFilterParametersHandle | — |

## HSLShiftAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/HSLShiftAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | HSLShiftAdjustmentParametersHandle |
| `enumerateChannelColourRanges(callback)` | callback: Function | — |
| `enumerateChannelParameters(callback)` | callback: Function | — |
| `getChannelColourRange(channel)` | channel: Number | HSLShiftAdjustmentColourRange |
| `getChannelCount()` | — | Number |
| `getChannelParameters(channel)` | channel: Number | HSLShiftAdjustmentChannelParameters |
| `getMasterParameters()` | — | HSLShiftAdjustmentChannelParameters |
| `getUseHSV()` | — | Boolean |
| `setChannelColourRange(channel, colourRange)` | channel: Number, colourRange: HSLShiftAdjustmentColourRange | — |
| `setChannelParameters(channel, parameters)` | channel: Number, parameters: HSLShiftAdjustmentChannelParameters | — |
| `setMasterParameters(parameters)` | parameters: HSLShiftAdjustmentChannelParameters | — |
| `setUseHSV(useHSV)` | useHSV: Boolean | — |

## HSLShiftAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/HSLShiftAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | HSLShiftAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: HSLShiftAdjustmentRasterNodeHandle | HSLShiftAdjustmentParametersHandle |

## HSLShiftAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/HSLShiftAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: HSLShiftAdjustmentParametersHandle | HSLShiftAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | HSLShiftAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | HSLShiftAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: HSLShiftAdjustmentRasterNodeDefinitionHandle | HSLShiftAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: HSLShiftAdjustmentRasterNodeDefinitionHandle, parameters: HSLShiftAdjustmentParametersHandle | — |

## HalftoneFilterParametersApi

> Модуль `affinity:dom` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/HalftoneFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | HalftoneFilterParametersHandle |
| `getCellSize()` | — | Number |
| `getContrast()` | — | Number |
| `getDotType()` | — | HalftoneDotType |
| `getGreyComponentReplacement()` | — | Number |
| `getScreenAngle()` | — | Number |
| `getScreenType()` | — | HalftoneScreenType |
| `getUnderColourRemoval()` | — | Number |
| `setCellSize(cellSize)` | cellSize: Number | — |
| `setContrast(contrast)` | contrast: Number | — |
| `setDotType(dotType)` | dotType: HalftoneDotType | — |
| `setGreyComponentReplacement(greyComponentReplacement)` | greyComponentReplacement: Number | — |
| `setScreenAngle(screenAngle)` | screenAngle: Number | — |
| `setScreenType(screenType)` | screenType: HalftoneScreenType | — |
| `setUnderColourRemoval(underColourRemoval)` | underColourRemoval: Number | — |

## HalftoneFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/HalftoneFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | HalftoneFilterRasterNodeHandle |
| `getParameters(node)` | node: HalftoneFilterRasterNodeHandle | HalftoneFilterParametersHandle |

## HalftoneFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/HalftoneFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: HalftoneFilterParametersHandle | HalftoneFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | HalftoneFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | HalftoneFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | HalftoneFilterParametersHandle |
| `setParameters(parameters)` | parameters: HalftoneFilterParametersHandle | — |

## HighPassFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/HighPassFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | HighPassFilterParametersHandle |
| `getIsMonochrome()` | — | Boolean |
| `getRadius()` | — | Number |
| `setIsMonochrome(isMonochrome)` | isMonochrome: Boolean | — |
| `setRadius(radius)` | radius: Number | — |

## HighPassFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/HighPassFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | HighPassFilterRasterNodeHandle |
| `getParameters(node)` | node: HighPassFilterRasterNodeHandle | HighPassFilterParametersHandle |

## HighPassFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/HighPassFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: HighPassFilterParametersHandle | HighPassFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | HighPassFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | HighPassFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: HighPassFilterRasterNodeDefinitionHandle | HighPassFilterParametersHandle |
| `setParameters(node, parameters)` | node: HighPassFilterRasterNodeDefinitionHandle, parameters: HighPassFilterParametersHandle | — |

## InvertAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 1 · [SDK](https://sdk.affinity.studio/33000/js/apis/InvertAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | InvertAdjustmentRasterNodeHandle |

## InvertAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/InvertAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | InvertAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | InvertAdjustmentRasterNodeDefinitionHandle |

## LensBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/LensBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | LensBlurFilterParametersHandle |
| `getBladeCurvature()` | — | Number |
| `getBloomColour()` | — | Number |
| `getBloomFactor()` | — | Number |
| `getBloomThreshold()` | — | Number |
| `getNumberOfBlades()` | — | Number |
| `getRadius()` | — | Number |
| `setBladeCurvature(bladeCurvature)` | bladeCurvature: Number | — |
| `setBloomColour(bloomColour)` | bloomColour: Number | — |
| `setBloomFactor(bloomFactor)` | bloomFactor: Number | — |
| `setBloomThreshold(bloomThreshold)` | bloomThreshold: Number | — |
| `setNumberOfBlades(numberOfBlades)` | numberOfBlades: Number | — |
| `setRadius(radius)` | radius: Number | — |

## LensBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/LensBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | LensBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: LensBlurFilterRasterNodeHandle | LensBlurFilterParametersHandle |

## LensBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/LensBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: LensBlurFilterParametersHandle | LensBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | LensBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | LensBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | LensBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: LensBlurFilterParametersHandle | — |

## LevelsAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/LevelsAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | LevelsAdjustmentParametersHandle |
| `enumerateChannelParameters(callback)` | callback: Function | — |
| `getChannelParameters(channel)` | channel: Number | LevelsAdjustmentChannelParameters |
| `getChannelParametersCount()` | — | Number |
| `getMasterParameters()` | — | LevelsAdjustmentChannelParameters |
| `setChannelParameters(channel, parameters)` | channel: Number, parameters: LevelsAdjustmentChannelParameters | — |
| `setMasterParameters(parameters)` | parameters: LevelsAdjustmentChannelParameters | — |

## LevelsAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/LevelsAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | LevelsAdjustmentRasterNodeHandle |
| `getColourSpace(node)` | node: LevelsAdjustmentRasterNodeHandle | ColourSpaceType |
| `getParameters(node)` | node: LevelsAdjustmentRasterNodeHandle | LevelsAdjustmentParametersHandle |

## LevelsAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/LevelsAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters, colourSpace)` | parameters: LevelsAdjustmentParametersHandle, colourSpace: ColourSpaceType | LevelsAdjustmentRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | LevelsAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | LevelsAdjustmentRasterNodeDefinitionHandle |
| `getColourSpace(node)` | node: LevelsAdjustmentRasterNodeDefinitionHandle | ColourSpaceType |
| `getParameters(node)` | node: LevelsAdjustmentRasterNodeDefinitionHandle | LevelsAdjustmentParametersHandle |
| `setColourSpace(node, colourSpace)` | node: LevelsAdjustmentRasterNodeDefinitionHandle, colourSpace: ColourSpaceType | — |
| `setParameters(node, parameters)` | node: LevelsAdjustmentRasterNodeDefinitionHandle, parameters: LevelsAdjustmentParametersHandle | — |

## MaximumBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MaximumBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | MaximumBlurFilterParametersHandle |
| `getIsCircular()` | — | Boolean |
| `getRadius()` | — | Number |
| `setIsCircular(isCircular)` | isCircular: Boolean | — |
| `setRadius(radius)` | radius: Number | — |

## MaximumBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/MaximumBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | MaximumBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: MaximumBlurFilterRasterNodeHandle | MaximumBlurFilterParametersHandle |

## MaximumBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MaximumBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: MaximumBlurFilterParametersHandle | MaximumBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | MaximumBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | MaximumBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | MaximumBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: MaximumBlurFilterParametersHandle | — |

## MedianBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/MedianBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | MedianBlurFilterParametersHandle |
| `getRadius()` | — | Number |
| `setRadius(radius)` | radius: Number | — |

## MedianBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/MedianBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | MedianBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: MedianBlurFilterRasterNodeHandle | MedianBlurFilterParametersHandle |

## MedianBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MedianBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: MedianBlurFilterParametersHandle | MedianBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | MedianBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | MedianBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | MedianBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: MedianBlurFilterParametersHandle | — |

## MinimumBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MinimumBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | MinimumBlurFilterParametersHandle |
| `getIsCircular()` | — | Boolean |
| `getRadius()` | — | Number |
| `setIsCircular(isCircular)` | isCircular: Boolean | — |
| `setRadius(radius)` | radius: Number | — |

## MinimumBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/MinimumBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | MinimumBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: MinimumBlurFilterRasterNodeHandle | MinimumBlurFilterParametersHandle |

## MinimumBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MinimumBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: MinimumBlurFilterParametersHandle | MinimumBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | MinimumBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | MinimumBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | MinimumBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: MinimumBlurFilterParametersHandle | — |

## MotionBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MotionBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | MotionBlurFilterParametersHandle |
| `getAngle()` | — | Number |
| `getRadius()` | — | Number |
| `setAngle(angle)` | angle: Number | — |
| `setRadius(radius)` | radius: Number | — |

## MotionBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/MotionBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | MotionBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: MotionBlurFilterRasterNodeHandle | MotionBlurFilterParametersHandle |

## MotionBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MotionBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: MotionBlurFilterParametersHandle | MotionBlurFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | MotionBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | MotionBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | MotionBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: MotionBlurFilterParametersHandle | — |

## NormalsAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/NormalsAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | NormalsAdjustmentParametersHandle |
| `getFlipX()` | — | Boolean |
| `getFlipY()` | — | Boolean |
| `getRotation()` | — | Number |
| `getScale()` | — | Number |
| `setFlipX(flipX)` | flipX: Boolean | — |
| `setFlipY(flipY)` | flipY: Boolean | — |
| `setRotation(rotation)` | rotation: Number | — |
| `setScale(scale)` | scale: Number | — |

## NormalsAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/NormalsAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | NormalsAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: NormalsAdjustmentRasterNodeHandle | NormalsAdjustmentParametersHandle |

## NormalsAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/NormalsAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: NormalsAdjustmentParametersHandle | NormalsAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | NormalsAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | NormalsAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: NormalsAdjustmentRasterNodeDefinitionHandle | NormalsAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: NormalsAdjustmentRasterNodeDefinitionHandle, parameters: NormalsAdjustmentParametersHandle | — |

## PatternRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PatternRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PatternRasterNodeHandle |
| `getMirror(node)` | node: PatternRasterNodeHandle | Boolean |

## PatternRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/PatternRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap, transform, mirror)` | bitmap: RasterObjectHandle, transform: Transform, mirror: Boolean | PatternRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | PatternRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PatternRasterNodeDefinitionHandle |
| `getMirror()` | — | Boolean |
| `setMirror(mirror)` | mirror: Boolean | — |

## PinchPunchFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/PinchPunchFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | PinchPunchFilterParametersHandle |
| `getIntensity()` | — | Number |
| `getPosition()` | — | Point |
| `getRadius()` | — | Number |
| `setIntensity(intensity)` | intensity: Number | — |
| `setPosition(position)` | position: Point | — |
| `setRadius(radius)` | radius: Number | — |

## PinchPunchFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PinchPunchFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PinchPunchFilterRasterNodeHandle |
| `getParameters(node)` | node: PinchPunchFilterRasterNodeHandle | PinchPunchFilterParametersHandle |

## PinchPunchFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/PinchPunchFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: PinchPunchFilterParametersHandle | PinchPunchFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | PinchPunchFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PinchPunchFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: PinchPunchFilterRasterNodeDefinitionHandle | PinchPunchFilterParametersHandle |
| `setParameters(node, parameters)` | node: PinchPunchFilterRasterNodeDefinitionHandle, parameters: PinchPunchFilterParametersHandle | — |

## PixelateFilterParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelateFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | PixelateFilterParametersHandle |
| `getQuantisation()` | — | Number |
| `setQuantisation(quantisation)` | quantisation: Number | — |

## PixelateFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelateFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PixelateFilterRasterNodeHandle |
| `getParameters(node)` | node: PixelateFilterRasterNodeHandle | PixelateFilterParametersHandle |

## PixelateFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelateFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: PixelateFilterParametersHandle | PixelateFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | PixelateFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PixelateFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | PixelateFilterParametersHandle |
| `setParameters(parameters)` | parameters: PixelateFilterParametersHandle | — |

## PosteriseAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PosteriseAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | PosteriseAdjustmentParametersHandle |
| `getLevels()` | — | Number |
| `setLevels(levels)` | levels: Number | — |

## PosteriseAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/PosteriseAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | PosteriseAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: PosteriseAdjustmentRasterNodeHandle | PosteriseAdjustmentParametersHandle |

## PosteriseAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/PosteriseAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: PosteriseAdjustmentParametersHandle | PosteriseAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | PosteriseAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | PosteriseAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: PosteriseAdjustmentRasterNodeDefinitionHandle | PosteriseAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: PosteriseAdjustmentRasterNodeDefinitionHandle, parameters: PosteriseAdjustmentParametersHandle | — |

## RadialBlurFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RadialBlurFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | RadialBlurFilterParametersHandle |
| `getAngle()` | — | Number |
| `getPosition()` | — | Point |
| `setAngle(angle)` | angle: Number | — |
| `setPosition(position)` | position: Point | — |

## RadialBlurFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/RadialBlurFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | RadialBlurFilterRasterNodeHandle |
| `getParameters(node)` | node: RadialBlurFilterRasterNodeHandle | RadialBlurFilterParametersHandle |

## RadialBlurFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RadialBlurFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: RadialBlurFilterParametersHandle | RadialBlurFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | RadialBlurFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | RadialBlurFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | RadialBlurFilterParametersHandle |
| `setParameters(parameters)` | parameters: RadialBlurFilterParametersHandle | — |

## RecolourAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/RecolourAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | RecolourAdjustmentParametersHandle |
| `getHue()` | — | Number |
| `getLightness()` | — | Number |
| `getSaturation()` | — | Number |
| `setHue(hue)` | hue: Number | — |
| `setLightness(lightness)` | lightness: Number | — |
| `setSaturation(saturation)` | saturation: Number | — |

## RecolourAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/RecolourAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | RecolourAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: RecolourAdjustmentRasterNodeHandle | RecolourAdjustmentParametersHandle |

## RecolourAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RecolourAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: RecolourAdjustmentParametersHandle | RecolourAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | RecolourAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | RecolourAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: RecolourAdjustmentRasterNodeDefinitionHandle | RecolourAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: RecolourAdjustmentRasterNodeDefinitionHandle, parameters: RecolourAdjustmentParametersHandle | — |

## RippleFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RippleFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | RippleFilterParametersHandle |
| `getIntensity()` | — | Number |
| `getPosition()` | — | Point |
| `setIntensity(intensity)` | intensity: Number | — |
| `setPosition(position)` | position: Point | — |

## RippleFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/RippleFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | RippleFilterRasterNodeHandle |
| `getParameters(node)` | node: RippleFilterRasterNodeHandle | RippleFilterParametersHandle |

## RippleFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RippleFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: RippleFilterParametersHandle | RippleFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | RippleFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | RippleFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: RippleFilterRasterNodeDefinitionHandle | RippleFilterParametersHandle |
| `setParameters(node, parameters)` | node: RippleFilterRasterNodeDefinitionHandle, parameters: RippleFilterParametersHandle | — |

## SelectiveColourAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/SelectiveColourAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | SelectiveColourAdjustmentParametersHandle |
| `enumerateWeights(callback)` | callback: Function | — |
| `getIsRelative()` | — | Boolean |
| `getWeights(colour)` | colour: SelectiveColour | SelectiveColourWeights |
| `getWeightsCount()` | — | Number |
| `setIsRelative(isRelative)` | isRelative: Boolean | — |
| `setWeights(colour, weights)` | colour: SelectiveColour, weights: SelectiveColourWeights | — |

## SelectiveColourAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/SelectiveColourAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | SelectiveColourAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: SelectiveColourAdjustmentRasterNodeHandle | SelectiveColourAdjustmentParametersHandle |

## SelectiveColourAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/SelectiveColourAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: SelectiveColourAdjustmentParametersHandle | SelectiveColourAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | SelectiveColourAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | SelectiveColourAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: SelectiveColourAdjustmentRasterNodeDefinitionHandle | SelectiveColourAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: SelectiveColourAdjustmentRasterNodeDefinitionHandle, parameters: SelectiveColourAdjustmentParametersHandle | — |

## ShadowsHighlightsAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ShadowsHighlightsAdjustmentParametersHandle |
| `getHighlights()` | — | Number |
| `getShadows()` | — | Number |
| `setHighlights(highlights)` | highlights: Number | — |
| `setShadows(shadows)` | shadows: Number | — |

## ShadowsHighlightsAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShadowsHighlightsAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ShadowsHighlightsAdjustmentRasterNodeHandle | ShadowsHighlightsAdjustmentParametersHandle |

## ShadowsHighlightsAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ShadowsHighlightsAdjustmentParametersHandle | ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle |
| `getParameters()` | — | ShadowsHighlightsAdjustmentParametersHandle |
| `setParameters(parameters)` | parameters: ShadowsHighlightsAdjustmentParametersHandle | — |

## ShadowsHighlightsFilterParametersApi

> Модуль `affinity:dom` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ShadowsHighlightsFilterParametersHandle |
| `getHighlightsRadius()` | — | Number |
| `getHighlightsRange()` | — | Number |
| `getHighlightsStrength()` | — | Number |
| `getShadowsRadius()` | — | Number |
| `getShadowsRange()` | — | Number |
| `getShadowsStrength()` | — | Number |
| `getVersion()` | — | ShadowsHighlightsVersion |
| `setHighlightsRadius(highlightsRadius)` | highlightsRadius: Number | — |
| `setHighlightsRange(highlightsRange)` | highlightsRange: Number | — |
| `setHighlightsStrength(highlightsStrength)` | highlightsStrength: Number | — |
| `setShadowsRadius(shadowsRadius)` | shadowsRadius: Number | — |
| `setShadowsRange(shadowsRange)` | shadowsRange: Number | — |
| `setShadowsStrength(shadowsStrength)` | shadowsStrength: Number | — |
| `setVersion(version)` | version: ShadowsHighlightsVersion | — |

## ShadowsHighlightsFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ShadowsHighlightsFilterRasterNodeHandle |
| `getParameters(node)` | node: ShadowsHighlightsFilterRasterNodeHandle | ShadowsHighlightsFilterParametersHandle |

## ShadowsHighlightsFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShadowsHighlightsFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ShadowsHighlightsFilterParametersHandle | ShadowsHighlightsFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | ShadowsHighlightsFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ShadowsHighlightsFilterRasterNodeDefinitionHandle |
| `getParameters()` | — | ShadowsHighlightsFilterParametersHandle |
| `setParameters(parameters)` | parameters: ShadowsHighlightsFilterParametersHandle | — |

## SphericalFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/SphericalFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | SphericalFilterParametersHandle |
| `getIntensity()` | — | Number |
| `getPosition()` | — | Point |
| `getRadius()` | — | Number |
| `setIntensity(intensity)` | intensity: Number | — |
| `setPosition(position)` | position: Point | — |
| `setRadius(radius)` | radius: Number | — |

## SphericalFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/SphericalFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | SphericalFilterRasterNodeHandle |
| `getParameters(node)` | node: SphericalFilterRasterNodeHandle | SphericalFilterParametersHandle |

## SphericalFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/SphericalFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: SphericalFilterParametersHandle | SphericalFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | SphericalFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | SphericalFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: SphericalFilterRasterNodeDefinitionHandle | SphericalFilterParametersHandle |
| `setParameters(node, parameters)` | node: SphericalFilterRasterNodeDefinitionHandle, parameters: SphericalFilterParametersHandle | — |

## SplitToningAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/SplitToningAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | SplitToningAdjustmentParametersHandle |
| `getBalance()` | — | Number |
| `getHighlightsHue()` | — | Number |
| `getHighlightsSaturation()` | — | Number |
| `getShadowsHue()` | — | Number |
| `getShadowsSaturation()` | — | Number |
| `setBalance(balance)` | balance: Number | — |
| `setHighlightsHue(highlightsHue)` | highlightsHue: Number | — |
| `setHighlightsSaturation(highlightsSaturation)` | highlightsSaturation: Number | — |
| `setShadowsHue(shadowsHue)` | shadowsHue: Number | — |
| `setShadowsSaturation(shadowsSaturation)` | shadowsSaturation: Number | — |

## SplitToningAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/SplitToningAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | SplitToningAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: SplitToningAdjustmentRasterNodeHandle | SplitToningAdjustmentParametersHandle |

## SplitToningAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/SplitToningAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: SplitToningAdjustmentParametersHandle | SplitToningAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | SplitToningAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | SplitToningAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: SplitToningAdjustmentRasterNodeDefinitionHandle | SplitToningAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: SplitToningAdjustmentRasterNodeDefinitionHandle, parameters: SplitToningAdjustmentParametersHandle | — |

## ThresholdAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/ThresholdAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ThresholdAdjustmentParametersHandle |
| `getThreshold()` | — | Number |
| `setThreshold(threshold)` | threshold: Number | — |

## ThresholdAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ThresholdAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ThresholdAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ThresholdAdjustmentRasterNodeHandle | ThresholdAdjustmentParametersHandle |

## ThresholdAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ThresholdAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ThresholdAdjustmentParametersHandle | ThresholdAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ThresholdAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ThresholdAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: ThresholdAdjustmentRasterNodeDefinitionHandle | ThresholdAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: ThresholdAdjustmentRasterNodeDefinitionHandle, parameters: ThresholdAdjustmentParametersHandle | — |

## ToneCompressionAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneCompressionAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ToneCompressionAdjustmentParametersHandle |
| `getColour()` | — | Number |
| `getExposure()` | — | Number |
| `getGamma()` | — | Number |
| `getMethod()` | — | ToneCompressionMethod |
| `setColour(colour)` | colour: Number | — |
| `setExposure(exposure)` | exposure: Number | — |
| `setGamma(gamma)` | gamma: Number | — |
| `setMethod(method)` | method: ToneCompressionMethod | — |

## ToneCompressionAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneCompressionAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ToneCompressionAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ToneCompressionAdjustmentRasterNodeHandle | ToneCompressionAdjustmentParametersHandle |

## ToneCompressionAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneCompressionAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ToneCompressionAdjustmentParametersHandle | ToneCompressionAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ToneCompressionAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ToneCompressionAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: ToneCompressionAdjustmentRasterNodeDefinitionHandle | ToneCompressionAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: ToneCompressionAdjustmentRasterNodeDefinitionHandle, parameters: ToneCompressionAdjustmentParametersHandle | — |

## ToneStretchAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneStretchAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | ToneStretchAdjustmentParametersHandle |
| `getCompression()` | — | Number |
| `getGamma()` | — | Number |
| `getMethod()` | — | ToneStretchMethod |
| `getStretchFactor()` | — | Number |
| `setCompression(compression)` | compression: Number | — |
| `setGamma(gamma)` | gamma: Number | — |
| `setMethod(method)` | method: ToneStretchMethod | — |
| `setStretchFactor(stretchFactor)` | stretchFactor: Number | — |

## ToneStretchAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneStretchAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | ToneStretchAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: ToneStretchAdjustmentRasterNodeHandle | ToneStretchAdjustmentParametersHandle |

## ToneStretchAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/ToneStretchAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: ToneStretchAdjustmentParametersHandle | ToneStretchAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | ToneStretchAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | ToneStretchAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: ToneStretchAdjustmentRasterNodeDefinitionHandle | ToneStretchAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: ToneStretchAdjustmentRasterNodeDefinitionHandle, parameters: ToneStretchAdjustmentParametersHandle | — |

## TwirlFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/TwirlFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | TwirlFilterParametersHandle |
| `getAngle()` | — | Number |
| `getPosition()` | — | Point |
| `getRadius()` | — | Number |
| `setAngle(angle)` | angle: Number | — |
| `setPosition(position)` | position: Point | — |
| `setRadius(radius)` | radius: Number | — |

## TwirlFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/TwirlFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | TwirlFilterRasterNodeHandle |
| `getParameters(node)` | node: TwirlFilterRasterNodeHandle | TwirlFilterParametersHandle |

## TwirlFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/TwirlFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: TwirlFilterParametersHandle | TwirlFilterRasterNodeDefinitionHandle |
| `createDefault(document)` | document: DocumentHandle | TwirlFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | TwirlFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: TwirlFilterRasterNodeDefinitionHandle | TwirlFilterParametersHandle |
| `setParameters(node, parameters)` | node: TwirlFilterRasterNodeDefinitionHandle, parameters: TwirlFilterParametersHandle | — |

## UnsharpMaskFilterParametersApi

> Модуль `affinity:dom` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/UnsharpMaskFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | UnsharpMaskFilterParametersHandle |
| `getFactor()` | — | Number |
| `getRadius()` | — | Number |
| `getThreshold()` | — | Number |
| `setFactor(factor)` | factor: Number | — |
| `setRadius(radius)` | radius: Number | — |
| `setThreshold(threshold)` | threshold: Number | — |

## UnsharpMaskFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/UnsharpMaskFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | UnsharpMaskFilterRasterNodeHandle |
| `getParameters(node)` | node: UnsharpMaskFilterRasterNodeHandle | UnsharpMaskFilterParametersHandle |

## UnsharpMaskFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/UnsharpMaskFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: UnsharpMaskFilterParametersHandle | UnsharpMaskFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | UnsharpMaskFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | UnsharpMaskFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: UnsharpMaskFilterRasterNodeDefinitionHandle | UnsharpMaskFilterParametersHandle |
| `setParameters(node, parameters)` | node: UnsharpMaskFilterRasterNodeDefinitionHandle, parameters: UnsharpMaskFilterParametersHandle | — |

## VibranceAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/VibranceAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | VibranceAdjustmentParametersHandle |
| `getSaturation()` | — | Number |
| `getVibrance()` | — | Number |
| `setSaturation(saturation)` | saturation: Number | — |
| `setVibrance(vibrance)` | vibrance: Number | — |

## VibranceAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/VibranceAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | VibranceAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: VibranceAdjustmentRasterNodeHandle | VibranceAdjustmentParametersHandle |

## VibranceAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/VibranceAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: VibranceAdjustmentParametersHandle | VibranceAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | VibranceAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | VibranceAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: VibranceAdjustmentRasterNodeDefinitionHandle | VibranceAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: VibranceAdjustmentRasterNodeDefinitionHandle, parameters: VibranceAdjustmentParametersHandle | — |

## VignetteFilterParametersApi

> Модуль `affinity:dom` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/VignetteFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | VignetteFilterParametersHandle |
| `getExposure()` | — | Number |
| `getHardness()` | — | Number |
| `getScale()` | — | Number |
| `getShape()` | — | Number |
| `setExposure(exposure)` | exposure: Number | — |
| `setHardness(hardness)` | hardness: Number | — |
| `setScale(scale)` | scale: Number | — |
| `setShape(shape)` | shape: Number | — |

## VignetteFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/VignetteFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | VignetteFilterRasterNodeHandle |
| `getParameters(node)` | node: VignetteFilterRasterNodeHandle | VignetteFilterParametersHandle |

## VignetteFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/VignetteFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: VignetteFilterParametersHandle | VignetteFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | VignetteFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | VignetteFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: VignetteFilterRasterNodeDefinitionHandle | VignetteFilterParametersHandle |
| `setParameters(node, parameters)` | node: VignetteFilterRasterNodeDefinitionHandle, parameters: VignetteFilterParametersHandle | — |

## VoronoiFilterParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/VoronoiFilterParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | VoronoiFilterParametersHandle |
| `getCellSize()` | — | Number |
| `getLineWidth()` | — | Number |
| `setCellSize(cellSize)` | cellSize: Number | — |
| `setLineWidth(lineWidth)` | lineWidth: Number | — |

## VoronoiFilterRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/VoronoiFilterRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | VoronoiFilterRasterNodeHandle |
| `getParameters(node)` | node: VoronoiFilterRasterNodeHandle | VoronoiFilterParametersHandle |

## VoronoiFilterRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/VoronoiFilterRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: VoronoiFilterParametersHandle | VoronoiFilterRasterNodeDefinitionHandle |
| `createDefault()` | — | VoronoiFilterRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | VoronoiFilterRasterNodeDefinitionHandle |
| `getParameters(node)` | node: VoronoiFilterRasterNodeDefinitionHandle | VoronoiFilterParametersHandle |
| `setParameters(node, parameters)` | node: VoronoiFilterRasterNodeDefinitionHandle, parameters: VoronoiFilterParametersHandle | — |

## WhiteBalanceAdjustmentParametersApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/WhiteBalanceAdjustmentParametersApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create()` | — | WhiteBalanceAdjustmentParametersHandle |
| `getTint()` | — | Number |
| `getWhiteBalance()` | — | Number |
| `setTint(tint)` | tint: Number | — |
| `setWhiteBalance(whiteBalance)` | whiteBalance: Number | — |

## WhiteBalanceAdjustmentRasterNodeApi

> Модуль `affinity:dom` · методов: 2 · [SDK](https://sdk.affinity.studio/33000/js/apis/WhiteBalanceAdjustmentRasterNodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `fromNode(node)` | node: NodeHandle | WhiteBalanceAdjustmentRasterNodeHandle |
| `getParameters(node)` | node: WhiteBalanceAdjustmentRasterNodeHandle | WhiteBalanceAdjustmentParametersHandle |

## WhiteBalanceAdjustmentRasterNodeDefinitionApi

> Модуль `affinity:dom` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/WhiteBalanceAdjustmentRasterNodeDefinitionApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(parameters)` | parameters: WhiteBalanceAdjustmentParametersHandle | WhiteBalanceAdjustmentRasterNodeDefinitionHandle |
| `createDefault()` | — | WhiteBalanceAdjustmentRasterNodeDefinitionHandle |
| `fromNodeDefinition(nodeDefinition)` | nodeDefinition: NodeDefinitionHandle | WhiteBalanceAdjustmentRasterNodeDefinitionHandle |
| `getParameters(node)` | node: WhiteBalanceAdjustmentRasterNodeDefinitionHandle | WhiteBalanceAdjustmentParametersHandle |
| `setParameters(node, parameters)` | node: WhiteBalanceAdjustmentRasterNodeDefinitionHandle, parameters: WhiteBalanceAdjustmentParametersHandle | — |

