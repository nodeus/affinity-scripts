# Растр (SDK 33000)

> API-референс · Модуль `affinity:raster`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (22), методов: 112.

## NodeRenderingEngineOptionsApi

> Модуль `affinity:raster` · методов: 22 · [SDK](https://sdk.affinity.studio/33000/js/apis/NodeRenderingEngineOptionsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | NodeRenderingEngineOptionsHandle |
| `create()` | — | NodeRenderingEngineOptionsHandle |
| `getAllowDegradedBitmaps()` | — | Boolean |
| `getAntialias()` | — | Boolean |
| `getClipToSpread()` | — | Boolean |
| `getDitherGradients()` | — | Boolean |
| `getDownResamplerType()` | — | RasterResamplerType |
| `getDrawBackground()` | — | Boolean |
| `getIsIsolatedRendering()` | — | Boolean |
| `getIsMaskRenderingMode()` | — | Boolean |
| `getIsPerfectClipping()` | — | Boolean |
| `getUpResamplerType()` | — | RasterResamplerType |
| `setAllowDegradedBitmaps(value)` | value: Boolean | — |
| `setAntialias(value)` | value: Boolean | — |
| `setClipToSpread(value)` | value: Boolean | — |
| `setDitherGradients(value)` | value: Boolean | — |
| `setDownResamplerType(value)` | value: RasterResamplerType | — |
| `setDrawBackground(value)` | value: Boolean | — |
| `setIsIsolatedRendering(value)` | value: Boolean | — |
| `setIsMaskRenderingMode(value)` | value: Boolean | — |
| `setIsPerfectClipping(value)` | value: Boolean | — |
| `setUpResamplerType(value)` | value: RasterResamplerType | — |

## PixelReaderCMYKA8Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderCMYKA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderCMYKA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | CMYKA8 |

## PixelReaderIA16Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderIA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderIA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | IA16 |

## PixelReaderIA8Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderIA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderIA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | IA8 |

## PixelReaderLABA16Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderLABA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderLABA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | LABA16 |

## PixelReaderM16Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderM16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderM16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | M16 |

## PixelReaderM8Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderM8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderM8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | M8 |

## PixelReaderMfApi

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderMfApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderMfHandle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | Mf |

## PixelReaderRGBA16Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderRGBA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderRGBA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBA16 |

## PixelReaderRGBA8Api

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderRGBA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderRGBA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBA8 |

## PixelReaderRGBAufApi

> Модуль `affinity:raster` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderRGBAufApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderRGBAufHandle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBAuf |

## PixelReaderWriterCMYKA8Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterCMYKA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterCMYKA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | CMYKA8 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: CMYKA8 | — |

## PixelReaderWriterIA16Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterIA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterIA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | IA16 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: IA16 | — |

## PixelReaderWriterIA8Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterIA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterIA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | IA8 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: IA8 | — |

## PixelReaderWriterLABA16Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterLABA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterLABA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | LABA16 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: LABA16 | — |

## PixelReaderWriterM16Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterM16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterM16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | M16 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: M16 | — |

## PixelReaderWriterM8Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterM8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterM8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | M8 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: M8 | — |

## PixelReaderWriterMfApi

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterMfApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterMfHandle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | Mf |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: Mf | — |

## PixelReaderWriterRGBA16Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterRGBA16Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterRGBA16Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBA16 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: RGBA16 | — |

## PixelReaderWriterRGBA8Api

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterRGBA8Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterRGBA8Handle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBA8 |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: RGBA8 | — |

## PixelReaderWriterRGBAufApi

> Модуль `affinity:raster` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PixelReaderWriterRGBAufApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(bitmap)` | bitmap: RasterObjectHandle | PixelReaderWriterRGBAufHandle |
| `dispose()` | — | — |
| `readPixel(x, y)` | x: Number, y: Number | RGBAuf |
| `writePixel(x, y, pixel)` | x: Number, y: Number, pixel: RGBAuf | — |

## RasterObjectApi

> Модуль `affinity:raster` · методов: 20 · [SDK](https://sdk.affinity.studio/33000/js/apis/RasterObjectApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RasterObjectHandle |
| `cloneEmpty()` | — | RasterObjectHandle |
| `copyTo(rasterObject, destinationRectangle, sourceX, sourceY)` | rasterObject: RasterObjectHandle, destinationRectangle: Rectangle, sourceX: Number, sourceY: Number | — |
| `createBitmap(width, height, format)` | width: Number, height: Number, format: RasterFormat | RasterObjectHandle |
| `createCompatibleBitmap(copyContents)` | copyContents: Boolean | RasterObjectHandle |
| `createCompatibleBuffer(copyContents)` | copyContents: Boolean | RasterObjectHandle |
| `createDefaultNodeRenderingEngine(node, format)` | node: NodeHandle, format: RasterFormat | RasterObjectHandle |
| `createNodeRenderingEngine(node, format, options)` | node: NodeHandle, format: RasterFormat, options: NodeRenderingEngineOptionsHandle | RasterObjectHandle |
| `createPixelBuffer(width, height, format)` | width: Number, height: Number, format: RasterFormat | RasterObjectHandle |
| `dispose()` | — | — |
| `getArrayBuffer()` | — | ArrayBuffer |
| `getDescription()` | — | String |
| `getDirectAccess()` | — | ArrayBuffer |
| `getFormat()` | — | RasterFormat |
| `getHeight()` | — | Number |
| `getPixelSize()` | — | Number |
| `getType()` | — | RasterObjectType |
| `getWidth()` | — | Number |
| `loadBitmapFromFile(path, format)` | path: String, format: RasterFormat | RasterObjectHandle |
| `loadBitmapFromFileAsync(path, format, callback)` | path: String, format: RasterFormat, callback: Function | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `bitmapWriter.js`
- `setDocumentFormat.js`
