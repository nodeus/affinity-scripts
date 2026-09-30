# Стили линий и эффекты слоёв (SDK 33000)

> API-референс · Модуль `affinity:linestyles`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (15), методов: 228.

## ArrowHeadApi

> Модуль `affinity:linestyles` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/ArrowHeadApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ArrowHeadHandle |
| `create(style, anchorInternal, anchorExternal, isSolidLine, scaleX, scaleY)` | style: ArrowHeadStyle, anchorInternal: Number, anchorExternal: Number, isSolidLine: Boolean, scaleX: Number, scaleY: Number | ArrowHeadHandle |
| `createDefault(style)` | style: ArrowHeadStyle | ArrowHeadHandle |
| `getAnchor(isInternal)` | isInternal: Boolean | Number |
| `getBounds()` | — | Rectangle |
| `getCurves()` | — | PolyPolyCurveHandle |
| `getScaleX()` | — | Number |
| `getScaleY()` | — | Number |
| `isFilled()` | — | Boolean |
| `isOutlined()` | — | Boolean |
| `isSolidLine()` | — | Boolean |
| `setAnchor(isInternal, anchor)` | isInternal: Boolean, anchor: Number | — |
| `setScaleX(scale)` | scale: Number | — |
| `setScaleY(scale)` | scale: Number | — |
| `setSolidLine(isSolidLine)` | isSolidLine: Boolean | — |

## BevelEmbossLayerEffectApi

> Модуль `affinity:layereffects` · методов: 33 · [SDK](https://sdk.affinity.studio/33000/js/apis/BevelEmbossLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | BevelEmbossLayerEffectHandle |
| `cloneAsBevelEmbossLayerEffect()` | — | BevelEmbossLayerEffectHandle |
| `create()` | — | BevelEmbossLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | BevelEmbossLayerEffectHandle |
| `getAzimuth()` | — | Number |
| `getBevelEmbossType()` | — | BevelEmbossType |
| `getBevelProfile()` | — | SplineHandle |
| `getDepth()` | — | Number |
| `getElevation()` | — | Number |
| `getHighlightBlendMode()` | — | BlendMode |
| `getHighlightColour()` | — | ColourHandle |
| `getHighlightOpacity()` | — | Number |
| `getInvert()` | — | Boolean |
| `getRadius()` | — | Number |
| `getShadowBlendMode()` | — | BlendMode |
| `getShadowColour()` | — | ColourHandle |
| `getShadowOpacity()` | — | Number |
| `getSoften()` | — | Number |
| `setAzimuth(azimuth)` | azimuth: Number | — |
| `setBevelEmbossType(bevelEmbossType)` | bevelEmbossType: BevelEmbossType | — |
| `setBevelProfile(bevelProfile)` | bevelProfile: SplineHandle | — |
| `setDepth(depth)` | depth: Number | — |
| `setElevation(elevation)` | elevation: Number | — |
| `setHighlightBlendMode(highlightBlendMode)` | highlightBlendMode: BlendMode | — |
| `setHighlightColour(highlightColour)` | highlightColour: ColourHandle | — |
| `setHighlightOpacity(highlightOpacity)` | highlightOpacity: Number | — |
| `setInvert(invert)` | invert: Boolean | — |
| `setRadius(radius)` | radius: Number | — |
| `setShadowBlendMode(shadowBlendMode)` | shadowBlendMode: BlendMode | — |
| `setShadowColour(shadowColour)` | shadowColour: ColourHandle | — |
| `setShadowOpacity(shadowOpacity)` | shadowOpacity: Number | — |
| `setSoften(soften)` | soften: Number | — |
| `setStandardBevelProfile(standardProfile)` | standardProfile: SplineProfile | — |

## ColourOverlayLayerEffectApi

> Модуль `affinity:layereffects` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourOverlayLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ColourOverlayLayerEffectHandle |
| `cloneAsColourOverlayLayerEffect()` | — | ColourOverlayLayerEffectHandle |
| `create()` | — | ColourOverlayLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | ColourOverlayLayerEffectHandle |
| `getColour()` | — | ColourHandle |
| `setColour(colour)` | colour: ColourHandle | — |

## GaussianBlurLayerEffectApi

> Модуль `affinity:layereffects` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/GaussianBlurLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | GaussianBlurLayerEffectHandle |
| `cloneAsGaussianBlurLayerEffect()` | — | GaussianBlurLayerEffectHandle |
| `create()` | — | GaussianBlurLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | GaussianBlurLayerEffectHandle |
| `getPreserveAlpha()` | — | Boolean |
| `getRadius()` | — | Number |
| `setPreserveAlpha(preserveAlpha)` | preserveAlpha: Boolean | — |
| `setRadius(radius)` | radius: Number | — |

## GradientOverlayLayerEffectApi

> Модуль `affinity:layereffects` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/GradientOverlayLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `calculateTransform(scaleX, scaleY, offsetX, offsetY)` | scaleX: Number, scaleY: Number, offsetX: Number, offsetY: Number | Transform |
| `clone()` | — | GradientOverlayLayerEffectHandle |
| `cloneAsGradientOverlayLayerEffect()` | — | GradientOverlayLayerEffectHandle |
| `create()` | — | GradientOverlayLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | GradientOverlayLayerEffectHandle |
| `getFillDescriptor()` | — | FillDescriptorHandle |
| `setFillDescriptor(fillDescriptor)` | fillDescriptor: FillDescriptorHandle | — |

## InnerGlowLayerEffectApi

> Модуль `affinity:layereffects` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/InnerGlowLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | InnerGlowLayerEffectHandle |
| `cloneAsInnerGlowLayerEffect()` | — | InnerGlowLayerEffectHandle |
| `create()` | — | InnerGlowLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | InnerGlowLayerEffectHandle |
| `getCentre()` | — | Boolean |
| `getColour()` | — | ColourHandle |
| `getIntensity()` | — | Number |
| `getRadius()` | — | Number |
| `setCentre(centre)` | centre: Boolean | — |
| `setColour(colour)` | colour: ColourHandle | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setRadius(radius)` | radius: Number | — |

## InnerShadowLayerEffectApi

> Модуль `affinity:layereffects` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/InnerShadowLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | InnerShadowLayerEffectHandle |
| `cloneAsInnerShadowLayerEffect()` | — | InnerShadowLayerEffectHandle |
| `create()` | — | InnerShadowLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | InnerShadowLayerEffectHandle |
| `getAngle()` | — | Number |
| `getColour()` | — | ColourHandle |
| `getIntensity()` | — | Number |
| `getOffset()` | — | Number |
| `getRadius()` | — | Number |
| `setAngle(angle)` | angle: Number | — |
| `setColour(colour)` | colour: ColourHandle | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setOffset(offset)` | offset: Number | — |
| `setRadius(radius)` | radius: Number | — |

## LayerEffectApi

> Модуль `affinity:layereffects` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/LayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | LayerEffectHandle |
| `cloneAsLayerEffect()` | — | LayerEffectHandle |
| `getBlendMode()` | — | BlendMode |
| `getEnabled()` | — | Boolean |
| `getOpacity()` | — | Number |
| `getScaleWithObject()` | — | Boolean |
| `getType()` | — | LayerEffectType |
| `setBlendMode(blendMode)` | blendMode: BlendMode | — |
| `setEnabled(enabled)` | enabled: Boolean | — |
| `setOpacity(opacity)` | opacity: Number | — |
| `setScaleWithObject(scaleWithObject)` | scaleWithObject: Boolean | — |

## LineStyleApi

> Модуль `affinity:linestyles` · методов: 25 · [SDK](https://sdk.affinity.studio/33000/js/apis/LineStyleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | LineStyleHandle |
| `create(cap, join, type, weight, miterLimit, dashPhase, dashPattern, isResolutionIndependent, isBalancedDashes, pathBrushOrNull)` | cap: LineCap, join: LineJoin, type: LineType, weight: Number, miterLimit: Number, dashPhase: Number, dashPattern: Number[], isResolutionIndependent: Boolean, isBalancedDashes: Boolean, pathBrushOrNull: PathBrushHandle | LineStyleHandle |
| `createDefault()` | — | LineStyleHandle |
| `createDefaultWithWeight(weight)` | weight: Number | LineStyleHandle |
| `getCap()` | — | LineCap |
| `getDashPattern()` | — | Number[] |
| `getDashPatternLength()` | — | Number |
| `getDashPhase()` | — | Number |
| `getJoin()` | — | LineJoin |
| `getMiterLimit()` | — | Number |
| `getPathBrush()` | — | PathBrushHandle |
| `getType()` | — | LineType |
| `getWeight()` | — | Number |
| `hasBalancedDashes()` | — | Boolean |
| `isResolutionIndependent()` | — | Boolean |
| `setCap(cap)` | cap: LineCap | — |
| `setDashPattern(dashPattern)` | dashPattern: Number[] | — |
| `setDashPhase(dashPhase)` | dashPhase: Number | — |
| `setHasBalancedDashes(hasBalancedDashes)` | hasBalancedDashes: Boolean | — |
| `setIsResolutionIndependent(isResolutionIndependent)` | isResolutionIndependent: Boolean | — |
| `setJoin(join)` | join: LineJoin | — |
| `setMiterLimit(miterLimit)` | miterLimit: Number | — |
| `setPathBrush(pathBrush)` | pathBrush: PathBrushHandle | — |
| `setType(type)` | type: LineType | — |
| `setWeight(weight)` | weight: Number | — |

## LineStyleDescriptorApi

> Модуль `affinity:linestyles` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/LineStyleDescriptorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | LineStyleDescriptorHandle |
| `cloneScaled(scale)` | scale: Number | LineStyleDescriptorHandle |
| `cloneWithNewArrowHeads(frontArrowOrNoHandle, backArrowOrNoHandle)` | frontArrowOrNoHandle: ArrowHeadHandle, backArrowOrNoHandle: ArrowHeadHandle | LineStyleDescriptorHandle |
| `cloneWithNewLineStyle(lineStyle)` | lineStyle: LineStyleHandle | LineStyleDescriptorHandle |
| `create(lineStyle, frontArrowOrNoHandle, backArrowOrNoHandle, pressureOrNoHandle, isBehind, isScale, strokeAlignment)` | lineStyle: LineStyleHandle, frontArrowOrNoHandle: ArrowHeadHandle, backArrowOrNoHandle: ArrowHeadHandle, pressureOrNoHandle: CurveHandle, isBehind: Boolean, isScale: Boolean, strokeAlignment: StrokeAlignment | LineStyleDescriptorHandle |
| `createDefault()` | — | LineStyleDescriptorHandle |
| `createDefaultWithWeight(weight)` | weight: Number | LineStyleDescriptorHandle |
| `getBackArrowHead()` | — | ArrowHeadHandle |
| `getEffectiveWeight(worldTransform, scalarTransform)` | worldTransform: Transform, scalarTransform: Transform | Number |
| `getFrontArrowHead()` | — | ArrowHeadHandle |
| `getLineStyle()` | — | LineStyleHandle |
| `getPressure()` | — | CurveHandle |
| `getStrokeAlignment()` | — | StrokeAlignment |
| `isBehind()` | — | Boolean |
| `isScale()` | — | Boolean |

## OuterGlowLayerEffectApi

> Модуль `affinity:layereffects` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/OuterGlowLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | OuterGlowLayerEffectHandle |
| `cloneAsOuterGlowLayerEffect()` | — | OuterGlowLayerEffectHandle |
| `create()` | — | OuterGlowLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | OuterGlowLayerEffectHandle |
| `getColour()` | — | ColourHandle |
| `getIntensity()` | — | Number |
| `getRadius()` | — | Number |
| `setColour(colour)` | colour: ColourHandle | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setRadius(radius)` | radius: Number | — |

## OuterShadowLayerEffectApi

> Модуль `affinity:layereffects` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/OuterShadowLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | OuterShadowLayerEffectHandle |
| `cloneAsOuterShadowLayerEffect()` | — | OuterShadowLayerEffectHandle |
| `create()` | — | OuterShadowLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | OuterShadowLayerEffectHandle |
| `getAngle()` | — | Number |
| `getColour()` | — | ColourHandle |
| `getFillKnocksOut()` | — | Boolean |
| `getIntensity()` | — | Number |
| `getOffset()` | — | Number |
| `getRadius()` | — | Number |
| `setAngle(angle)` | angle: Number | — |
| `setColour(colour)` | colour: ColourHandle | — |
| `setFillKnocksOut(fillKnocksOut)` | fillKnocksOut: Boolean | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setOffset(offset)` | offset: Number | — |
| `setRadius(radius)` | radius: Number | — |

## OutlineLayerEffectApi

> Модуль `affinity:layereffects` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/OutlineLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `calculateTransform(scaleX, scaleY, offsetX, offsetY)` | scaleX: Number, scaleY: Number, offsetX: Number, offsetY: Number | Transform |
| `clone()` | — | OutlineLayerEffectHandle |
| `cloneAsOutlineLayerEffect()` | — | OutlineLayerEffectHandle |
| `create()` | — | OutlineLayerEffectHandle |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | OutlineLayerEffectHandle |
| `getAlignment()` | — | StrokeAlignment |
| `getColour()` | — | ColourHandle |
| `getFillDescriptor()` | — | FillDescriptorHandle |
| `getFillType()` | — | StrokeFillType |
| `getRadius()` | — | Number |
| `setAlignment(alignment)` | alignment: StrokeAlignment | — |
| `setColour(colour)` | colour: ColourHandle | — |
| `setFillDescriptor(fillDescriptor)` | fillDescriptor: FillDescriptorHandle | — |
| `setFillType(fillType)` | fillType: StrokeFillType | — |
| `setRadius(radius)` | radius: Number | — |

## PhongBevelLayerEffectApi

> Модуль `affinity:layereffects` · методов: 33 · [SDK](https://sdk.affinity.studio/33000/js/apis/PhongBevelLayerEffectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `appendLight(pointLight)` | pointLight: PointLightHandle | — |
| `clone()` | — | PhongBevelLayerEffectHandle |
| `cloneAsPhongBevelLayerEffect()` | — | PhongBevelLayerEffectHandle |
| `create()` | — | PhongBevelLayerEffectHandle |
| `enumerateLights(callback)` | callback: Function | — |
| `fromLayerEffect(layerEffect)` | layerEffect: LayerEffectHandle | PhongBevelLayerEffectHandle |
| `getAmbient()` | — | Number |
| `getAmbientColour()` | — | ColourHandle |
| `getBevelProfile()` | — | SplineHandle |
| `getDepth()` | — | Number |
| `getDiffuse()` | — | Number |
| `getLight(index)` | index: Number | PointLightHandle |
| `getLightCount()` | — | Number |
| `getLinkDepth()` | — | Boolean |
| `getRadius()` | — | Number |
| `getShininess()` | — | Number |
| `getSoften()` | — | Number |
| `getSpecular()` | — | Number |
| `getSpecularColour()` | — | ColourHandle |
| `insertLight(index, pointLight)` | index: Number, pointLight: PointLightHandle | — |
| `removeLight(index)` | index: Number | — |
| `setAmbient(ambient)` | ambient: Number | — |
| `setAmbientColour(ambientColour)` | ambientColour: ColourHandle | — |
| `setBevelProfile(bevelProfile)` | bevelProfile: SplineHandle | — |
| `setDepth(depth)` | depth: Number | — |
| `setDiffuse(diffuse)` | diffuse: Number | — |
| `setLinkDepth(linkDepth)` | linkDepth: Boolean | — |
| `setRadius(radius)` | radius: Number | — |
| `setShininess(shininess)` | shininess: Number | — |
| `setSoften(soften)` | soften: Number | — |
| `setSpecular(specular)` | specular: Number | — |
| `setSpecularColour(specularColour)` | specularColour: ColourHandle | — |
| `setStandardBevelProfile(standardProfile)` | standardProfile: SplineProfile | — |

## PointLightApi

> Модуль `affinity:layereffects` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/PointLightApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PointLightHandle |
| `cloneAsPointLight()` | — | PointLightHandle |
| `getAzimuth()` | — | Number |
| `getColour()` | — | ColourHandle |
| `getElevation()` | — | Number |
| `setAzimuth(azimuth)` | azimuth: Number | — |
| `setColour(colour)` | colour: ColourHandle | — |
| `setElevation(elevation)` | elevation: Number | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `arrowheads.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cropMarks.js`
- `strokesWeightDown.js`
- `strokesWeightUp.js`
