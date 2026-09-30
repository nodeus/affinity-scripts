# Цвета, заливки, штриховки, кисти (SDK 33000)

> API-референс · Модуль `affinity:colours`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (20), методов: 299.

## BitmapFillApi

> Модуль `affinity:fills` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/BitmapFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | BitmapFillHandle |
| `cloneAsBitmapFill()` | — | BitmapFillHandle |
| `create(bitmap, extendType, resamplerType, ignoreAlpha)` | bitmap: RasterObjectHandle, extendType: RasterExtendType, resamplerType: RasterResamplerType, ignoreAlpha: Boolean | BitmapFillHandle |
| `fromFill(fill)` | fill: FillHandle | BitmapFillHandle |
| `getBitmap()` | — | RasterObjectHandle |
| `getExtendType()` | — | RasterExtendType |
| `getIsIgnoreAlpha()` | — | Boolean |
| `getIsKOnly()` | — | Boolean |
| `getProfile()` | — | ColourProfileHandle |
| `getUpsamplerType()` | — | RasterResamplerType |
| `setExtendType(extendType)` | extendType: RasterExtendType | — |
| `setIsKOnly(isKOnly)` | isKOnly: Boolean | — |
| `setProfile(colourProfile)` | colourProfile: ColourProfileHandle | — |
| `setUpsamplerType(upsamplerType)` | upsamplerType: RasterResamplerType | — |

## BrushDynamicApi

> Модуль `affinity:brushes` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/BrushDynamicApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | BrushDynamicHandle |
| `getControllerType()` | — | BrushDynamicControllerType |
| `getDynamicMax()` | — | Number |
| `getDynamicMin()` | — | Number |
| `getSpline()` | — | SplineHandle |
| `getValue()` | — | Number |
| `getVariance()` | — | Number |
| `setControllerType(controllerType)` | controllerType: BrushDynamicControllerType | — |
| `setSpline(spline)` | spline: SplineHandle | — |
| `setValue(value)` | value: Number | — |
| `setVariance(variance)` | variance: Number | — |

## ColourApi

> Модуль `affinity:colours` · методов: 31 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ColourHandle |
| `convertProfile(fromProfile, toProfile, intent, isBlackPointCompensation)` | fromProfile: ColourProfileHandle, toProfile: ColourProfileHandle, intent: RasterIntent, isBlackPointCompensation: Boolean | — |
| `createCMYKA8(cMYKA8)` | cMYKA8: CMYKA8 | ColourHandle |
| `createCMYKAf(cMYKAf)` | cMYKAf: CMYKAf | ColourHandle |
| `createDefault()` | — | ColourHandle |
| `createHSLAf(hSLAf)` | hSLAf: HSLAf | ColourHandle |
| `createIA16(iA16)` | iA16: IA16 | ColourHandle |
| `createIA8(iA8)` | iA8: IA8 | ColourHandle |
| `createLABA16(lABA16)` | lABA16: LABA16 | ColourHandle |
| `createRGBA16(rGBA16)` | rGBA16: RGBA16 | ColourHandle |
| `createRGBA8(rGB8)` | rGB8: RGBA8 | ColourHandle |
| `createRGBAuf(rGBAuf)` | rGBAuf: RGBAuf | ColourHandle |
| `getAlpha()` | — | Number |
| `getCMYKA8(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | CMYKA8 |
| `getCMYKAf(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | CMYKAf |
| `getHSLAf(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | HSLAf |
| `getIA16(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | IA16 |
| `getIA8(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | IA8 |
| `getIntensity()` | — | Number |
| `getLABA16(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | LABA16 |
| `getNoise()` | — | Number |
| `getOverprint()` | — | Boolean |
| `getRGBA16(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | RGBA16 |
| `getRGBA8(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | RGBA8 |
| `getRGBAuf(applyTint, profilesOrNull)` | applyTint: Boolean, profilesOrNull: ColourProfileSetHandle | RGBAuf |
| `getTint()` | — | Number |
| `setAlpha(alpha)` | alpha: Number | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setNoise(noise)` | noise: Number | — |
| `setOverprint(overprint)` | overprint: Boolean | — |
| `setTint(tint)` | tint: Number | — |

## ColourMeshApi

> Модуль `affinity:fills` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourMeshApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ColourMeshHandle |
| `cloneAsColourMesh()` | — | ColourMeshHandle |
| `createDefaultNone()` | — | ColourMeshHandle |
| `createDefaultWhite()` | — | ColourMeshHandle |
| `createFromColour(colour, size)` | colour: ColourHandle, size: Number | ColourMeshHandle |
| `createFromGradient(gradient, isRadial)` | gradient: GradientHandle, isRadial: Boolean | ColourMeshHandle |
| `getNodeColour(xIndex, yIndex)` | xIndex: Number, yIndex: Number | ColourHandle |
| `setNodeColour(xIndex, yIndex, colour)` | xIndex: Number, yIndex: Number, colour: ColourHandle | — |

## ColourProfileApi

> Модуль `affinity:colours` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourProfileApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canApplyTo(format)` | format: RasterFormat | Boolean |
| `enumerateProfiles(callback)` | callback: Function | — |
| `enumerateProfilesForColourSpace(colourSpaceType, callback)` | colourSpaceType: ColourSpaceType, callback: Function | — |
| `enumerateProfilesForFormat(format, callback)` | format: RasterFormat, callback: Function | — |
| `find(name)` | name: String | ColourProfileHandle |
| `getApproximateGamma()` | — | Number |
| `getColourSpace()` | — | ColourSpaceType |
| `getDefaultForColourSpace(colourSpaceType)` | colourSpaceType: ColourSpaceType | ColourProfileHandle |
| `getDefaultForFormat(format)` | format: RasterFormat | ColourProfileHandle |
| `getDeviceClass()` | — | Number |
| `getName()` | — | String |
| `getProfile(index)` | index: Number | ColourProfileHandle |
| `getProfileCount()` | — | Number |
| `getVersion()` | — | Number |
| `isLinear()` | — | Boolean |
| `isStandard()` | — | Boolean |

## ColourProfileSetApi

> Модуль `affinity:colours` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/ColourProfileSetApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createDefault()` | — | ColourProfileSetHandle |
| `getBlackPointCompensation()` | — | Boolean |
| `getIntent()` | — | RasterIntent |
| `getProfileForColourSpaceType(colourSpaceType)` | colourSpaceType: ColourSpaceType | ColourProfileHandle |
| `getProfileForFormat(format)` | format: RasterFormat | ColourProfileHandle |
| `setBlackPointCompensation(isBlackPointCompensation)` | isBlackPointCompensation: Boolean | — |
| `setIntent(intent)` | intent: RasterIntent | — |
| `setProfileForColourSpaceType(colourSpaceType, colourProfile)` | colourSpaceType: ColourSpaceType, colourProfile: ColourProfileHandle | — |
| `setProfileForFormat(format, colourProfile)` | format: RasterFormat, colourProfile: ColourProfileHandle | — |

## DiffusionCurveSetApi

> Модуль `affinity:fills` · методов: 32 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffusionCurveSetApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addArc(centre, radiusX, radiusY, rotation, angle0, angle1, leftColour, rightColour)` | centre: Point, radiusX: Number, radiusY: Number, rotation: Number, angle0: Number, angle1: Number, leftColour: ColourHandle, rightColour: ColourHandle | — |
| `addCurve(points, leftColour, rightColour)` | points: Point[], leftColour: ColourHandle, rightColour: ColourHandle | — |
| `addEllipse(centre, radiusX, radiusY, rotation, leftColour, rightColour)` | centre: Point, radiusX: Number, radiusY: Number, rotation: Number, leftColour: ColourHandle, rightColour: ColourHandle | — |
| `addLine(start, end, leftColour, rightColour)` | start: Point, end: Point, leftColour: ColourHandle, rightColour: ColourHandle | — |
| `clone()` | — | DiffusionCurveSetHandle |
| `create()` | — | DiffusionCurveSetHandle |
| `createDefault(colourA, colourB)` | colourA: ColourHandle, colourB: ColourHandle | DiffusionCurveSetHandle |
| `getBackgroundColour()` | — | ColourHandle |
| `getBackgroundStrength()` | — | Number |
| `getCurveBlur(index)` | index: Number | Number |
| `getCurveColour(index, side)` | index: Number, side: DiffusionCurveSide | ColourHandle |
| `getCurveCount()` | — | Number |
| `getCurveKind(index)` | index: Number | DiffusionCurveKind |
| `getCurveNodeCount(index)` | index: Number | Number |
| `getCurveNodeSmooth(index, nodeIndex)` | index: Number, nodeIndex: Number | Boolean |
| `getCurveParametric(index)` | index: Number | DiffusionCurveParametric |
| `getCurvePoint(index, pointIndex)` | index: Number, pointIndex: Number | Point |
| `getCurvePointCount(index)` | index: Number | Number |
| `getCurvePressure(index)` | index: Number | CurveHandle |
| `getCurveStrength(index)` | index: Number | Number |
| `removeCurve(index)` | index: Number | — |
| `setBackgroundColour(colour)` | colour: ColourHandle | — |
| `setBackgroundStrength(strength)` | strength: Number | — |
| `setCurveArc(index, centre, radiusX, radiusY, rotation, angle0, angle1)` | index: Number, centre: Point, radiusX: Number, radiusY: Number, rotation: Number, angle0: Number, angle1: Number | — |
| `setCurveBlur(index, blur)` | index: Number, blur: Number | — |
| `setCurveColour(index, side, colour)` | index: Number, side: DiffusionCurveSide, colour: ColourHandle | — |
| `setCurveEllipse(index, centre, radiusX, radiusY, rotation)` | index: Number, centre: Point, radiusX: Number, radiusY: Number, rotation: Number | — |
| `setCurveLine(index, start, end)` | index: Number, start: Point, end: Point | — |
| `setCurveNodeSmooth(index, nodeIndex, smooth)` | index: Number, nodeIndex: Number, smooth: Boolean | — |
| `setCurvePoints(index, points)` | index: Number, points: Point[] | — |
| `setCurvePressure(index, pressure)` | index: Number, pressure: CurveHandle | — |
| `setCurveStrength(index, strength)` | index: Number, strength: Number | — |

## DiffusionFillApi

> Модуль `affinity:fills` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DiffusionFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DiffusionFillHandle |
| `cloneAsDiffusionFill()` | — | DiffusionFillHandle |
| `cloneWithNewCurves(curveSet)` | curveSet: DiffusionCurveSetHandle | DiffusionFillHandle |
| `create(curveSet)` | curveSet: DiffusionCurveSetHandle | DiffusionFillHandle |
| `createDefault()` | — | DiffusionFillHandle |
| `fromFill(fill)` | fill: FillHandle | DiffusionFillHandle |
| `getCurves()` | — | DiffusionCurveSetHandle |

## FillApi

> Модуль `affinity:fills` · методов: 17 · [SDK](https://sdk.affinity.studio/33000/js/apis/FillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FillHandle |
| `cloneAsFill()` | — | FillHandle |
| `getAlpha()` | — | Number |
| `getFillType()` | — | FillType |
| `getHasFlatAlpha()` | — | Boolean |
| `getHasNoise()` | — | Boolean |
| `getHasNonFullAlpha()` | — | Boolean |
| `getIntensity()` | — | Number |
| `getIsSpatiallyInvariant()` | — | Boolean |
| `getIsVisible(minAlpha)` | minAlpha: Number | Boolean |
| `getMeanAlpha()` | — | Number |
| `getNoise()` | — | Number |
| `getTint()` | — | Number |
| `setAlpha(alpha)` | alpha: Number | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setNoise(noise)` | noise: Number | — |
| `setTint(tint)` | tint: Number | — |

## FillDescriptorApi

> Модуль `affinity:fills` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/FillDescriptorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FillDescriptorHandle |
| `cloneWithNewBlendMode(blendMode)` | blendMode: BlendMode | FillDescriptorHandle |
| `cloneWithNewFill(fill)` | fill: FillHandle | FillDescriptorHandle |
| `cloneWithNewIsAnchoredToSpread(isAnchoredToSpread)` | isAnchoredToSpread: Boolean | FillDescriptorHandle |
| `cloneWithNewIsScaleWithObject(isScaleWithObject)` | isScaleWithObject: Boolean | FillDescriptorHandle |
| `cloneWithNewTransform(transform)` | transform: Transform | FillDescriptorHandle |
| `cloneWithNewTransformInfo(transform, anchoredToSpread)` | transform: Transform, anchoredToSpread: Boolean | FillDescriptorHandle |
| `create(fill, scaleWithObject, transform, blendMode, anchoredToSpread)` | fill: FillHandle, scaleWithObject: Boolean, transform: Transform, blendMode: BlendMode, anchoredToSpread: Boolean | FillDescriptorHandle |
| `createNone()` | — | FillDescriptorHandle |
| `createSolid(solidFill, blendMode)` | solidFill: SolidFillHandle, blendMode: BlendMode | FillDescriptorHandle |
| `getBlendMode()` | — | BlendMode |
| `getFill()` | — | FillHandle |
| `getIsAnchoredToSpread()` | — | Boolean |
| `getIsScaleWithObject()` | — | Boolean |
| `getTransform()` | — | Transform |
| `getTransformInfo()` | — | TransformInfo |

## GradientApi

> Модуль `affinity:colours` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/GradientApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | GradientHandle |
| `create(stops)` | stops: ColourStop[] | GradientHandle |
| `createDefault()` | — | GradientHandle |
| `getAlpha()` | — | Number |
| `getIntensity()` | — | Number |
| `getNoise()` | — | Number |
| `getStop(index)` | index: Number | ColourStop |
| `getStopCount()` | — | Number |
| `getTint()` | — | Number |
| `hasNoise()` | — | Boolean |
| `hasNonFullAlpha()` | — | Boolean |
| `hasNonLinearMapping()` | — | Boolean |
| `setAlpha(alpha)` | alpha: Number | — |
| `setIntensity(intensity)` | intensity: Number | — |
| `setNoise(noise)` | noise: Number | — |
| `setTint(tint)` | tint: Number | — |

## GradientFillApi

> Модуль `affinity:fills` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/GradientFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | GradientFillHandle |
| `cloneAsGradientFill()` | — | GradientFillHandle |
| `cloneWithNewGradient(gradient)` | gradient: GradientHandle | GradientFillHandle |
| `cloneWithNewGradientFillType(gradientFillType)` | gradientFillType: GradientFillType | GradientFillHandle |
| `create(gradient, gradientFillType)` | gradient: GradientHandle, gradientFillType: GradientFillType | GradientFillHandle |
| `createDefault()` | — | GradientFillHandle |
| `fromFill(fill)` | fill: FillHandle | GradientFillHandle |
| `getGradient()` | — | GradientHandle |
| `getGradientFillType()` | — | GradientFillType |

## HatchFillApi

> Модуль `affinity:fills` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/HatchFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | HatchFillHandle |
| `cloneAsHatchFill()` | — | HatchFillHandle |
| `create(hatchPattern, units, penColourOrNull, brushColourOrNull, lineWeight)` | hatchPattern: HatchPatternHandle, units: UnitType, penColourOrNull: ColourHandle, brushColourOrNull: ColourHandle, lineWeight: Number | HatchFillHandle |
| `fromFill(fill)` | fill: FillHandle | HatchFillHandle |
| `getBrushColour()` | — | ColourHandle |
| `getLineWeight()` | — | Number |
| `getPattern()` | — | HatchPatternHandle |
| `getPenColour()` | — | ColourHandle |
| `getUnits()` | — | UnitType |
| `setBrushColour(colourOrNull)` | colourOrNull: ColourHandle | — |
| `setLineWeight(lineWeight)` | lineWeight: Number | — |
| `setPattern(hatchPattern)` | hatchPattern: HatchPatternHandle | — |
| `setPenColour(colourOrNull)` | colourOrNull: ColourHandle | — |
| `setUnits(unitType)` | unitType: UnitType | — |

## HatchLineApi

> Модуль `affinity:hatches` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/HatchLineApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | HatchLineHandle |
| `create(origin, rot, step, pattern)` | origin: Point, rot: Number, step: Vector, pattern: Number[] | HatchLineHandle |
| `enumeratePattern(callback)` | callback: Function | — |
| `getOrigin()` | — | Point |
| `getPatternDash(index)` | index: Number | Number |
| `getPatternDashCount()` | — | Number |
| `getRotation()` | — | Number |
| `getStep()` | — | Vector |
| `isSolid()` | — | Boolean |
| `setOrigin(origin)` | origin: Point | — |
| `setPattern(pattern)` | pattern: Number[] | — |
| `setRotation(rotationRads)` | rotationRads: Number | — |
| `setStep(step)` | step: Vector | — |

## HatchPatternApi

> Модуль `affinity:hatches` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/HatchPatternApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `appendHatchLine(hatchLine)` | hatchLine: HatchLineHandle | — |
| `appendHatchLineData(origin, rot, step, pattern)` | origin: Point, rot: Number, step: Vector, pattern: Number[] | — |
| `clearHatchLines()` | — | — |
| `clone()` | — | HatchPatternHandle |
| `createDefault()` | — | HatchPatternHandle |
| `createEmpty()` | — | HatchPatternHandle |
| `enumerateHatchLines(callback)` | callback: Function | — |
| `eraseHatchLine(index)` | index: Number | — |
| `getHatchLine(index)` | index: Number | HatchLineHandle |
| `getHatchLineCount()` | — | Number |
| `insertHatchLine(index, hatchLine)` | index: Number, hatchLine: HatchLineHandle | — |
| `insertHatchLineData(index, origin, rot, step, pattern)` | index: Number, origin: Point, rot: Number, step: Vector, pattern: Number[] | — |

## MeshFillApi

> Модуль `affinity:fills` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/MeshFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | MeshFillHandle |
| `cloneAsMeshFill()` | — | MeshFillHandle |
| `create(colourMesh)` | colourMesh: ColourMeshHandle | MeshFillHandle |
| `fromFill(fill)` | fill: FillHandle | MeshFillHandle |
| `getColourMesh()` | — | ColourMeshHandle |

## NoFillApi

> Модуль `affinity:fills` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/NoFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | NoFillHandle |
| `cloneAsNoFill()` | — | NoFillHandle |
| `create()` | — | NoFillHandle |
| `fromFill(fill)` | fill: FillHandle | NoFillHandle |

## PathBrushApi

> Модуль `affinity:brushes` · методов: 19 · [SDK](https://sdk.affinity.studio/33000/js/apis/PathBrushApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PathBrushHandle |
| `getBrushWidth()` | — | Number |
| `getCornerStrategy()` | — | CornerStrategy |
| `getHeadOffset()` | — | Number |
| `getOpacityVariance()` | — | Number |
| `getSizeControllerType()` | — | PathBrushDynamicControllerType |
| `getSizeSpline()` | — | SplineHandle |
| `getSizeVariance()` | — | Number |
| `getTailOffset()` | — | Number |
| `isRepeat()` | — | Boolean |
| `setBrushWidth(brushWidth)` | brushWidth: Number | — |
| `setCornerStrategy(cornerStrategy)` | cornerStrategy: CornerStrategy | — |
| `setHeadOffset(headOffset)` | headOffset: Number | — |
| `setIsRepeat(repeat)` | repeat: Boolean | — |
| `setOpacityVariance(opacityVariance)` | opacityVariance: Number | — |
| `setSizeControllerType(sizeControllerType)` | sizeControllerType: PathBrushDynamicControllerType | — |
| `setSizeSpline(sizeSpline)` | sizeSpline: SplineHandle | — |
| `setSizeVariance(sizeVariance)` | sizeVariance: Number | — |
| `setTailOffset(tailOffset)` | tailOffset: Number | — |

## RasterBrushApi

> Модуль `affinity:brushes` · методов: 39 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterBrushApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RasterBrushHandle |
| `getAccumulation()` | — | BrushDynamicHandle |
| `getAngle()` | — | BrushDynamicHandle |
| `getBlendMode()` | — | BlendMode |
| `getFlow()` | — | BrushDynamicHandle |
| `getHardness()` | — | BrushDynamicHandle |
| `getHueShift()` | — | BrushDynamicHandle |
| `getLumShift()` | — | BrushDynamicHandle |
| `getMaskTextureMode()` | — | RasterBrushTextureMode |
| `getMaskTextureScale()` | — | Number |
| `getOpacity()` | — | Number |
| `getSatShift()` | — | BrushDynamicHandle |
| `getScatterX()` | — | BrushDynamicHandle |
| `getScatterY()` | — | BrushDynamicHandle |
| `getShape()` | — | BrushDynamicHandle |
| `getShouldApplyWetEdges()` | — | Boolean |
| `getShouldInterpolateTips()` | — | Boolean |
| `getSize()` | — | BrushDynamicHandle |
| `getSpacing()` | — | Number |
| `getWetEdges()` | — | Boolean |
| `setAccumulation(accumulation)` | accumulation: BrushDynamicHandle | — |
| `setAngle(angle)` | angle: BrushDynamicHandle | — |
| `setBlendMode(blendMode)` | blendMode: BlendMode | — |
| `setFlow(flow)` | flow: BrushDynamicHandle | — |
| `setHardness(hardness)` | hardness: BrushDynamicHandle | — |
| `setHueShift(hueShift)` | hueShift: BrushDynamicHandle | — |
| `setLumShift(lumShift)` | lumShift: BrushDynamicHandle | — |
| `setMaskTextureMode(maskTextureMode)` | maskTextureMode: RasterBrushTextureMode | — |
| `setMaskTextureScale(maskTextureScale)` | maskTextureScale: Number | — |
| `setOpacity(opacity)` | opacity: Number | — |
| `setSatShift(satShift)` | satShift: BrushDynamicHandle | — |
| `setScatterX(scatterX)` | scatterX: BrushDynamicHandle | — |
| `setScatterY(scatterY)` | scatterY: BrushDynamicHandle | — |
| `setShape(shape)` | shape: BrushDynamicHandle | — |
| `setShouldApplyWetEdges(shouldApplyWetEdges)` | shouldApplyWetEdges: Boolean | — |
| `setShouldInterpolateTips(shouldInterpolateTips)` | shouldInterpolateTips: Boolean | — |
| `setSize(size)` | size: BrushDynamicHandle | — |
| `setSpacing(spacing)` | spacing: Number | — |
| `setWetEdges(wetEdges)` | wetEdges: Boolean | — |

## SolidFillApi

> Модуль `affinity:fills` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/SolidFillApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | SolidFillHandle |
| `cloneAsSolidFill()` | — | SolidFillHandle |
| `create(colour)` | colour: ColourHandle | SolidFillHandle |
| `createDefault()` | — | SolidFillHandle |
| `fromFill(fill)` | fill: FillHandle | SolidFillHandle |
| `getColour()` | — | ColourHandle |
| `setColour(colour)` | colour: ColourHandle | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cropMarks.js`
- `flexibleLayout.js`
