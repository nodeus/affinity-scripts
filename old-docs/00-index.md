# Affinity Scripts — База знаний

> Документация по скриптингу Affinity Designer/Photo/Publisher (SDK **v3.3.0**)
> через JavaScript + MCP-сервер (`http://localhost:6767`).
> Онлайн-справочник SDK: https://sdk.affinity.studio/33000/

---

## Структура

```
docs/
├── 00-index.md                 # Этот файл — точка входа
├── 01-mcp-tools.md             # MCP-инструменты (11 шт.)
├── 02-sdk-v3.3.0.md           # API-справочник SDK 3.3.0 (EN)
├── 03-migration-guide.md      # Миграция со старых require-путей (RU)
├── 04-community-scripts.md    # Каталог community-скриптов (70+)
├── 05-tutorial.md             # Практический учебник (RU)
├── 06-examples.md             # Примеры кода (10 шт.)
├── 07-script-patterns.md      # Паттерны: диалоги, кривые, текст, экспорт...
├── 08-text-effects.md         # Story/Glyph/Paragraph — детали текста
├── pub/                       # Опубликованные материалы
└── specs/                     # Спецификации проектных скриптов
    ├── _template.md
    ├── chart-builder.md
    ├── color-palette-gen.md
    └── hanging-chars.md
```

Архив устаревшего (до SDK 3.3.0): `archive/old-docs/`.

---

## Быстрый старт

### 1. Подключение

MCP-сервер Affinity (`localhost:6767`), конфиг — `.mimocode/config.json`:

```json
{ "mcp": { "servers": { "affinity": { "url": "http://localhost:6767" } } } }
```

### 2. Перед написанием скрипта (обязательно)

1. Прочитать преамбулу: `affinity_read_sdk_documentation_topic(filename="preamble")`
2. Поискать подсказки: `affinity_search_sdk_hints(prompt="...")`
3. Взять шаблон: `.mimocode/tools/affinity-scaffold.ts` (`basic`, `dialog`, `shape`, `export`, `text`, `ai`, `batch`, `curve`)
4. Проверить: `.mimocode/tools/affinity-check.ts`

### 3. Первые шаги

```
affinity_execute_script(script="console.log('Hello from Affinity!');")
affinity_render_spread(document_session_uuid="...", spread_index=0)
```

---

## MCP-инструменты (11)

| # | Инструмент | Назначение |
|---|------------|------------|
| 1 | `affinity_execute_script` | Выполнение JavaScript |
| 2 | `affinity_read_sdk_documentation_topic` | Чтение документации SDK |
| 3 | `affinity_list_sdk_documentation` | Список тем документации |
| 4 | `affinity_list_library_scripts` | Список библиотечных скриптов |
| 5 | `affinity_read_library_script` | Чтение скрипта из библиотеки |
| 6 | `affinity_save_script_to_library` | Сохранение скрипта в библиотеку |
| 7 | `affinity_render_selection` | Рендер выделенного узла |
| 8 | `affinity_render_spread` | Рендер страницы |
| 9 | `affinity_search_sdk_hints` | Поиск подсказок SDK |
| 10 | `affinity_add_sdk_hint` | Добавление подсказки |
| 11 | `affinity_report_sdk_issue` | Сообщение об ошибке SDK |

Подробнее: [01-mcp-tools.md](01-mcp-tools.md)

---

## SDK v3.3.0 — модули (20)

| Модуль | Назначение |
|--------|------------|
| `affinity:application` | `app` — документы, настройки, окружение |
| `affinity:dom` | `Document`, узлы, спреды, выделения |
| `affinity:commands` | `DocumentCommand` — 300+ фабрик команд, билдеры |
| `affinity:geometry` | `Shape*`, `Rectangle`, `Curve*`, `Transform` |
| `affinity:colours` | `Colour`, профили, градиенты |
| `affinity:fills` | `FillDescriptor`, `SolidFill`, `GradientFill`, ... |
| `affinity:story` | `Story`, `StoryBuilder`, `GlyphAtts`, `ParagraphAtts` |
| `affinity:ui` | `Dialog`, контролы, `DialogResult` |
| `affinity:common` | `BlendMode`, `UnitType` |
| `affinity:linestyles` | `LineStyleDescriptor`, `ArrowHead` |
| `affinity:fonts` | Шрифты |
| `affinity:raster` | Растр, пиксельный доступ |
| `affinity:layereffects` | Эффекты слоёв |
| `affinity:network` | HTTP-запросы |
| `affinity:fs` | Файлы (**только Desktop**) |
| `affinity:buffer` | Буферы данных |
| `affinity:timers` | Таймеры |
| `affinity:brushes` | Кисти |
| `affinity:hatches` | Штриховки |
| `affinity:os` | ОС |

Подробнее: [02-sdk-v3.3.0.md](02-sdk-v3.3.0.md) · миграция: [03-migration-guide.md](03-migration-guide.md)

---

## Проектные скрипты

| Скрипт | Назначение | Spec |
|--------|-----------|------|
| `chart-builder` | Диаграммы Line/Bar/Donut из текстового фрейма | [spec](specs/chart-builder.md) |
| `color-palette-gen` | Палитра fills/strokes/gradients со спреда | [spec](specs/color-palette-gen.md) |
| `hanging-chars` | Неразрывные пробелы после предлогов/букв | [spec](specs/hanging-chars.md) |

Исходники: `scripts/<id>/source/`, релизы: `scripts/<id>/release/`.

Community-скрипты (70+, только для чтения): [04-community-scripts.md](04-community-scripts.md), `community-scripts/`.

---

## Критические правила

- Скрипты **не возвращают значений** — только `console.log()`
- Скрипты **прямо выполняемые** — без `module.exports`
- Всегда начинать с `"use strict"`
- Импорты — `require('affinity:...')` (см. [миграцию](03-migration-guide.md))
- Файлы — только Desktop (`app.userDesktopPath`)
- `NOT_ALLOWED` = пользователь ограничил AI/FS/Network в настройках Affinity
- Все мутации — через `doc.executeCommand()`, узлы оборачивать в `Selection.create(doc, nodes)`
- Перед правкой — `doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread))`

---

## AI-команды

- `generateImage(prompt)` — генерация изображения
- `generativeEditImage(prompt)` — генеративное редактирование
- `removeBackground()` — удаление фона
- `selectSubject()` — выделение объекта
- `detectDepth()` — карта глубины
- `colourise()` — раскрашивание
- `imageTrace` — трассировка

---

## Ограничения

- **Файловая система**: только Desktop
- **Рендеринг**: JPEG до 1024px
- Скрипты выполняются синхронно в контексте Affinity (есть `*Async`-варианты методов `Document`)
