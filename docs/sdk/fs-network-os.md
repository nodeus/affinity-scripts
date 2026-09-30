# Файлы и сеть (SDK 33000)

> API-референс · Модуль `affinity:fs`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (6), методов: 105.

## DirectoryIteratorApi

> Модуль `affinity:fs` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/DirectoryIteratorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(path)` | path: String | DirectoryIteratorHandle |
| `getFileSize(asBigInt)` | asBigInt: Boolean | Number |
| `getFileStatus()` | — | FileStatusHandle |
| `getPath()` | — | String |
| `getSymlinkStatus()` | — | FileStatusHandle |
| `isDone()` | — | Boolean |
| `next()` | — | — |

## FileApi

> Модуль `affinity:fs` · методов: 19 · [SDK](https://sdk.affinity.studio/33000/js/apis/FileApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `close()` | — | — |
| `closeAsync(cancelOps, callback)` | cancelOps: Boolean, callback: Function | — |
| `create()` | — | FileHandle |
| `flush()` | — | — |
| `flushAsync(callback)` | callback: Function | — |
| `getLength(asBigInt)` | asBigInt: Boolean | Number |
| `getLengthAsync(callback, asBigInt)` | callback: Function, asBigInt: Boolean | — |
| `isEof()` | — | Boolean |
| `isEofAsync(callback)` | callback: Function | — |
| `isOpen()` | — | Boolean |
| `open(path, mode)` | path: String, mode: String | — |
| `read(buffer, length)` | buffer: Buffer, length: Number | Number |
| `readAsync(buffer, offset, length, position, callback)` | buffer: Buffer, offset: Number, length: Number, position: Number, callback: Function | — |
| `seek(offset, origin)` | offset: Number, origin: FileOrigin | — |
| `seekAsync(offset, origin, callback)` | offset: Number, origin: FileOrigin, callback: Function | — |
| `tell(asBigInt)` | asBigInt: Boolean | Number |
| `tellAsync(callback)` | callback: Function | — |
| `write(buffer, length)` | buffer: Buffer, length: Number | Number |
| `writeAsync(buffer, offset, length, position, callback)` | buffer: Buffer, offset: Number, length: Number, position: Number, callback: Function | — |

## FileStatusApi

> Модуль `affinity:fs` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/FileStatusApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FileStatusHandle |
| `getPermissions()` | — | FilePermissions |
| `getType()` | — | PathType |

## FileSystemApi

> Модуль `affinity:fs` · методов: 62 · [SDK](https://sdk.affinity.studio/33000/js/apis/FileSystemApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `areEquivalent(path1, path2)` | path1: String, path2: String | Boolean |
| `areEquivalentAsync(path1, path2, callback)` | path1: String, path2: String, callback: Function | — |
| `copy(from, to, options)` | from: String, to: String, options: CopyOptions | — |
| `copyAsync(src, dest, options, callback)` | src: String, dest: String, options: CopyOptions, callback: Function | — |
| `copyFile(from, to, options)` | from: String, to: String, options: CopyOptions | — |
| `copyFileAsync(src, dest, options, callback)` | src: String, dest: String, options: CopyOptions, callback: Function | — |
| `createDirectories(path)` | path: String | — |
| `createDirectoriesAsync(path, callback)` | path: String, callback: Function | — |
| `createDirectory(path)` | path: String | — |
| `createDirectoryAsync(path, callback)` | path: String, callback: Function | — |
| `createDirectorySymlink(target, link)` | target: String, link: String | — |
| `createDirectorySymlinkAsync(target, link, callback)` | target: String, link: String, callback: Function | — |
| `createSymlink(target, link)` | target: String, link: String | — |
| `createSymlinkAsync(target, link, callback)` | target: String, link: String, callback: Function | — |
| `exists(path)` | path: String | Boolean |
| `existsAsync(path, callback)` | path: String, callback: Function | — |
| `getAbsolute(path)` | path: String | String |
| `getAbsoluteAsync(path, callback)` | path: String, callback: Function | — |
| `getCanonical(target)` | target: String | String |
| `getCanonicalAsync(target, callback)` | target: String, callback: Function | — |
| `getFileSize(path, asBigInt)` | path: String, asBigInt: Boolean | Number |
| `getFileSizeAsync(path, callback, asBigInt)` | path: String, callback: Function, asBigInt: Boolean | — |
| `getFileStatus(path)` | path: String | FileStatusHandle |
| `getFileStatusAsync(path, callback)` | path: String, callback: Function | — |
| `getHardLinkCount(path)` | path: String | Number |
| `getHardLinkCountAsync(path, callback)` | path: String, callback: Function | — |
| `getSpace(path, asBigInt)` | path: String, asBigInt: Boolean | FileSystemSpace |
| `getSpaceAsync(path, callback, asBigInt)` | path: String, callback: Function, asBigInt: Boolean | — |
| `getSymlinkStatus(path)` | path: String | FileStatusHandle |
| `getSymlinkStatusAsync(path, callback)` | path: String, callback: Function | — |
| `getWeaklyCanonical(target)` | target: String | String |
| `getWeaklyCanonicalAsync(target, callback)` | target: String, callback: Function | — |
| `isBlockFile(path)` | path: String | Boolean |
| `isBlockFileAsync(path, callback)` | path: String, callback: Function | — |
| `isCharacterFile(path)` | path: String | Boolean |
| `isCharacterFileAsync(path, callback)` | path: String, callback: Function | — |
| `isDirectory(path)` | path: String | Boolean |
| `isDirectoryAsync(path, callback)` | path: String, callback: Function | — |
| `isEmpty(path)` | path: String | Boolean |
| `isEmptyAsync(path, callback)` | path: String, callback: Function | — |
| `isFifo(path)` | path: String | Boolean |
| `isFifoAsync(path, callback)` | path: String, callback: Function | — |
| `isOther(path)` | path: String | Boolean |
| `isOtherAsync(path, callback)` | path: String, callback: Function | — |
| `isRegularFile(path)` | path: String | Boolean |
| `isRegularFileAsync(path, callback)` | path: String, callback: Function | — |
| `isSocket(path)` | path: String | Boolean |
| `isSocketAsync(path, callback)` | path: String, callback: Function | — |
| `isSymlink(path)` | path: String | Boolean |
| `isSymlinkAsync(path, callback)` | path: String, callback: Function | — |
| `readSymlink(path)` | path: String | String |
| `readSymlinkAsync(path, callback)` | path: String, callback: Function | — |
| `remove(path)` | path: String | — |
| `removeAll(path)` | path: String | — |
| `removeAllAsync(path, callback)` | path: String, callback: Function | — |
| `removeAsync(path, callback)` | path: String, callback: Function | — |
| `rename(oldPath, newPath)` | oldPath: String, newPath: String | — |
| `renameAsync(oldPath, newPath, callback)` | oldPath: String, newPath: String, callback: Function | — |
| `resizeFile(path, newSize)` | path: String, newSize: Number | — |
| `resizeFileAsync(path, newSize, callback)` | path: String, newSize: Number, callback: Function | — |
| `setFilePermissions(path, filePermissions, permOptions)` | path: String, filePermissions: FilePermissions, permOptions: PermOptions | — |
| `setFilePermissionsAsync(path, filePermissions, permOptions, callback)` | path: String, filePermissions: FilePermissions, permOptions: PermOptions, callback: Function | — |

## HttpRequestApi

> Модуль `affinity:network` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/HttpRequestApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `create(url, method)` | url: String, method: RequestMethod | HttpRequestHandle |
| `do()` | — | HttpRequestResult |
| `doAsync(callback)` | callback: Function | — |
| `getHeaderValue(headerKey)` | headerKey: String | String |
| `setAvoidChunkedTransferEncoding(isAvoidChunkedTransfer)` | isAvoidChunkedTransfer: Boolean | — |
| `setEncodeHeaderValuesAsRfc2047(isEncodeAsRfc)` | isEncodeAsRfc: Boolean | — |
| `setHeaderValue(headerKey, headerValue)` | headerKey: String, headerValue: String | — |
| `setSuppressUserAgentHeader(suppress)` | suppress: Boolean | — |
| `setTimeoutInSec(timeout)` | timeout: Number | — |
| `setUseConstrainedNetwork(useConstrainedNetwork)` | useConstrainedNetwork: Boolean | — |
| `setUseExpensiveNetwork(useExpensiveNetwork)` | useExpensiveNetwork: Boolean | — |

## HttpResponseApi

> Модуль `affinity:network` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/HttpResponseApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getContent()` | — | String |
| `getHeaderValue(headerKey)` | headerKey: String | String |
| `getStatusCode()` | — | HttpStatusCode |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `tableFromJson.js`
