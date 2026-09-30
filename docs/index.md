# Affinity Scripting — документация (SDK v3.3.0, build 33000)

> JavaScript-скрипты для Affinity Designer / Photo / Publisher через MCP-сервер
> (`http://localhost:6767`). Онлайн-справочник: https://sdk.affinity.studio/33000/js/index.html

## Разделы

| Раздел | Содержимое |
|--------|------------|
| `sdk/` | Полный API-референс: все модули, API, Handles, Classes, Enums — с сигнатурами, параметрами и примерами. Реестр: `sdk/_registry.md` |
| `guides/` | Гайды: quickstart, MCP-инструменты, паттерны, примеры, миграция, каталог community-скриптов |
| `textbook/` | Учебник по скриптингу на русском: `textbook-ru.md` + PDF |
| `specs/` | Спецификации проектных скриптов (`chart-builder`, `color-palette-gen`, `hanging-chars`) |
| `JSLib/` | JSLib-врапперы из SDK 33000 (`/document.js` и т.д., 147 файлов, сверено с `JSLib.zip`) |
| `pub/` | Опубликованные материалы |

Устаревшие редакции: `/old-docs/` (нумерация `00–08`), `archive/` (до SDK 3.3.0).

## Быстрый старт

1. Прочитать преамбулу: `affinity_read_sdk_documentation_topic(filename="preamble")`
2. Поискать подсказки: `affinity_search_sdk_hints(prompt="...")`
3. Взять шаблон: `.mimocode/tools/affinity-scaffold.ts`
4. Проверить скрипт: `.mimocode/tools/affinity-check.ts`

## Критические правила

- `"use strict"` первой строкой; скрипты прямо выполняемые, без `module.exports`
- Вывод только через `console.log()` (без `return`)
- Импорты JSLib: `require('/document.js')`; енамы: `require('affinity:common')`
- Все мутации — через `doc.executeCommand()`; узлы обернуть в `Selection.create(doc, nodes)`
- Перед правками: `doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread))`
- Диалоги: `runModal()` (не `show()`); файлы — только Desktop; `NOT_ALLOWED` = запрет в настройках Affinity
