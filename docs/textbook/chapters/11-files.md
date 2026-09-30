# Глава 11. Файлы, сеть, таймеры, экспорт

## 11.1. Файлы: только Desktop

```js
// const { ... } = require('/fs.js');   // FileApi, FileSystemApi (sdk/fs-network-os.md)
const { app } = require('/application.js');
console.log(app.userDesktopPath);       // единственный доступный корень
```
Проверено в Affinity: `Desktop: C:\Users\nodeus\Desktop`.
Пресеты экспорта (только чтение, без записи файлов):
`FileExportOptions.allPresetNames` → `PNG | PNG-8 (dithered) | PNG-HDR …`.

Любой путь вне Desktop — ошибка. Бинарные данные — через `/buffer.js`.

## 11.2. Сеть

`HttpRequest`/`HttpResponse` (`affinity:network`, методы `RequestMethod`,
статусы `HttpStatusCode`): tableFromJson тянет JSON для таблицы именно так.
Сеть тоже попадает под `NOT_ALLOWED`.

## 11.3. Экспорт

Документ: `doc.export(...)` / `exportAsync`, конфиг — `ExportConfigApi`,
форматы/масштабы — `ExportFormatApi`/`ExportScaleApi`/`ExportSizeApi`
(`sdk/dom-document.md`). Шаблон: `templates/export.js`. Проверка результата —
`affinity_render_spread`.

## 11.4. Таймеры

`affinity:timers` (`TimerApi`, 11 методов) — отложенные и повторные задачи.
В синхронных скриптах применяются точечно.

## Упражнения

1. Сохраните лог работы скрипта файлом на Desktop (пример: `logToFile.js`).
2. Загрузите JSON по HTTP и постройте из него таблицу (пример: `tableFromJson.js`).
3. Экспортируйте текущий спред и проверьте файл.
