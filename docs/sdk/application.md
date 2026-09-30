# Application, OS, буферы, таймеры (SDK 33000)

> API-референс · Модуль `affinity:application`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (6), методов: 65.

## ApplicationApi

> Модуль `affinity:application` · методов: 22 · [SDK](https://sdk.affinity.studio/33000/js/apis/ApplicationApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getArgC()` | — | Number |
| `getArgV()` | — | String[] |
| `getBuildKind()` | — | BuildKind |
| `getBuildVersion()` | — | Number |
| `getCompileDate()` | — | String |
| `getDocumentVersion()` | — | Number |
| `getMajorVersion()` | — | Number |
| `getMinorVersion()` | — | Number |
| `getPlatformName()` | — | String |
| `getProductCopyrightMessage()` | — | String |
| `getProductFullName()` | — | String |
| `getProductLongName()` | — | String |
| `getProductPrimaryFileExtension()` | — | String |
| `getProductShortName()` | — | String |
| `getProductVersionName()` | — | String |
| `getResourcesPath()` | — | String |
| `getRevisionVersion()` | — | Number |
| `getShortVersion()` | — | String |
| `getSuiteFullName()` | — | String |
| `getUiParadigm()` | — | UiParadigm |
| `getUserDesktopPath()` | — | String |
| `getVersion()` | — | String |

## ApplicationSettingsApi

> Модуль `affinity:application` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ApplicationSettingsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getAllowCodeGenerationFromStrings()` | — | Boolean |
| `getLoadPSDWithEditableText()` | — | Boolean |
| `getUndoLimit()` | — | Number |
| `setLoadPSDWithEditableText(value)` | value: Boolean | — |

## BufferApi

> Модуль `affinity:buffer` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/BufferApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | BufferHandle |
| `cloneAsBuffer()` | — | BufferHandle |
| `compare(other)` | other: BufferHandle | Number |
| `compareSome(other, offset, length, otherOffset, otherLength)` | other: BufferHandle, offset: Number, length: Number, otherOffset: Number, otherLength: Number | Number |
| `create(size)` | size: Number | BufferHandle |
| `createSlice(offset, length)` | offset: Number, length: Number | BufferHandle |
| `createSpan(offset, length)` | offset: Number, length: Number | BufferHandle |
| `equals(other)` | other: BufferHandle | Boolean |
| `getArrayBuffer()` | — | ArrayBuffer |
| `getSize()` | — | Number |
| `toString(buffer, encoding, start, end)` | buffer: Buffer, encoding: String, start: Number, end: Number | String |

## EnvironmentApi

> Модуль `affinity:application` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/EnvironmentApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `enumerateFileSystemRoots(callback)` | callback: Function | — |
| `getConfiguration()` | — | ConfigurationItemHandle |
| `getHeapStatistics()` | — | HeapStatistics |
| `getLogLevel()` | — | LogLevel |
| `getSDKVersionStr()` | — | String |
| `getV8VersionStr()` | — | String |
| `hasPermission(permission)` | permission: EnvironmentPermission | Boolean |
| `postTask(taskProc)` | taskProc: Function | — |
| `quit()` | — | — |
| `setLogLevel(logLevel)` | logLevel: LogLevel | — |

## OSApi

> Модуль `affinity:os` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/OSApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getArchitecture()` | — | String |
| `getEol()` | — | String |
| `getMachine()` | — | String |
| `getOSName()` | — | String |
| `getOSVersion()` | — | String |
| `getPlatform()` | — | String |
| `getRelease()` | — | String |

## TimerApi

> Модуль `affinity:timers` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/TimerApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `cancel()` | — | — |
| `cancelAll()` | — | — |
| `create()` | — | TimerHandle |
| `dispose()` | — | — |
| `getExpiry(asBigInt)` | asBigInt: Boolean | Number |
| `getExpiryFromNow(asBigInt)` | asBigInt: Boolean | Number |
| `getNow(asBigInt)` | asBigInt: Boolean | Number |
| `moveExpiry(durationMs)` | durationMs: Number | — |
| `setExpiry(expiryTimeMs)` | expiryTimeMs: Number | — |
| `setExpiryFromNow(durationMs)` | durationMs: Number | — |
| `waitAsync(callback)` | callback: Function | — |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `bitmapWriter.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `logToFile.js`
