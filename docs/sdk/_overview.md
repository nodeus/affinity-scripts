# SDK 33000 — обзор и соглашения

> Полный референс: все функции и переменные SDK — по файлам ниже.
> Онлайн-справочник: https://sdk.affinity.studio/33000/js/index.html

## Карта файлов

| Файл | Содержание |
|------|------------|
| `application.md` | `affinity:application` (app, настройки), `affinity:os`, `affinity:buffer`, `affinity:timers` |
| `dom-document.md` | `affinity:dom`: документ, спреды, история, экспорт |
| `dom-nodes.md` | `affinity:dom`: узлы, контейнеры, определения |
| `dom-nodes-raster.md` | `affinity:dom`: растровые узлы — фильтры и коррекции |
| `dom-content.md` | `affinity:dom`: фигуры, текстовые фреймы, изображения |
| `dom-selections.md` | `affinity:dom`: выделения и подвыделения |
| `commands.md` + `commands-catalog.md` | `affinity:commands`: 363 фабрики + билдеры |
| `geometry.md` | `affinity:geometry`: кривые, трансформации, 30+ фигур |
| `colours-fills.md` | `colours`, `fills`, `hatches`, `brushes` |
| `story-text.md` | `affinity:story`: Story, глифы, атрибуты |
| `ui-dialogs.md` | `affinity:ui`: диалоги и контролы |
| `linestyles-effects.md` | `linestyles`, `layereffects` |
| `fonts.md` / `raster.md` / `fs-network-os.md` | шрифты / растр / файлы и сеть |
| `enums.md` (143) / `classes.md` (58) / `handles.md` (443) | все перечисления, классы-значения, хэндлы |
| `js-lib-map.md` | карта JSLib-врапперов на raw-модули |

## Соглашения SDK

- **Сигнатуры**: в таблицах параметр `self` опущен — в JS метод вызывается на объекте (`doc.getTitle()`).
- **Геттеры/свойства**: raw-методы `getX`/`isX` в JSLib обычно доступны как свойства (`doc.title`, `node.visible`). Точные имена свойств — в `docs/JSLib/*.js`.
- **`*Async`-варианты** дублируют синхронные методы; скрипты выполняются синхронно — используйте обычные.
- **Хэндлы** (`*Handle`) — непрозрачные ссылки; напрямую не создаются, приходят из геттеров.
- **Ошибки**: команда может вернуть `NOT_ALLOWED` — пользователь ограничил AI/FS/Network в настройках Affinity.
- **Файлы**: только Desktop (`app.userDesktopPath`).

## Как выполнять мутации

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand } = require('/commands.js');
const { Selection } = require('/selections.js');

const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.currentSpread;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
// ... команды с Selection.create(doc, nodes) ...
```

## Подсчёт покрытия

455 API · 4332 метода · 143 енама · 58 классов · 443 хэндла · 20 модулей.
Реестр URL: `_registry/`. Кэш сырых страниц SDK использован только при генерации.
