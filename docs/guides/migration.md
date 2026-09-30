# Миграция на SDK 3.3.0 (JSLib)

> SDK в build 33000 стабилен: `docs/JSLib/` пословно совпадает с `JSLib.zip`.
> Этот гайд — для переноса скриптов, написанных под старые импорты.

## 1. Пути импортов: добавить `.js`

```js
// было:
const { Document } = require('/document');
// стало:
const { Document } = require('/document.js');
```

Правило: все JSLib-врапперы — с расширением (`/document.js`, `/shapes.js`,
`/commands.js`, `/selections.js`, `/dialog.js`, …). `affinity-check` ругается
на бессуффиксные пути варнингом.

## 2. Переехавшие символы

| Символ | Было | Стало |
|--------|------|-------|
| `NodeChildType` | `/nodes.js` (нет экспорта!) | `/commands.js` |
| `BlendMode` | разрозненно | `/commands.js` (реэкспорт), raw — `affinity:common` |
| `UnitType` | разрозненно | raw `affinity:common` |

## 3. Диалоги: `show()` → `runModal()`

```js
// было: dialog.show()
// стало:
const result = dialog.runModal();
if (result === DialogResult.OK) { /* ... */ }
```

## 4. Что не поменялось

- `"use strict"`, `console.log()` вместо `return`, прямой выполняемый файл.
- `doc.executeCommand()` + `Selection.create(doc, nodes)` + `createSetCurrentSpread`.
- Desktop-only FS, `NOT_ALLOWED`, `*Async`-варианты.

## 5. Чек-лист миграции скрипта

1. Заменить все `require('/x')` → `require('/x.js')`.
2. `NodeChildType` брать из `/commands.js`.
3. `show()` → `runModal()` + проверка `DialogResult`.
4. Прогнать `affinity-check`, выполнить на пустом и боевом документе, проверить undo.
