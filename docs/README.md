# Affinity MCP — База знаний

> Полная документация по MCP-серверу Affinity для автоматизации работы с Affinity Designer/Photo/Publisher.

---

## Структура

```
docs/
├── README.md                    # Этот файл
├── 01-mcp-tools.md              # MCP-инструменты (11 шт.)
├── 02-sdk-reference.md          # SDK API (полная справка)
├── 03-library-scripts.md        # Community-скрипты (70+ шт.)
├── 04-examples.md               # Примеры кода (10 шт.)
├── affinity-scripting-tutorial.md  # ЕДИНЫЙ УЧЕБНИК (32 главы + PDF)
├── 05-complete-tutorial.md      # Старый учебник (19 глав)
├── 06-community-scripts.md      # Паттерны кода (справочник)
└── core-api.md                  # Ядро API (извлечено с MCP)
```

---

## Быстрый старт

### 1. Подключение

MCP-сервер Affinity подключается через MiMo Code:

```json
{
  "mcp": {
    "affinity": {
      "type": "remote",
      "url": "http://[::1]:6767/sse",
      "enabled": true
    }
  }
}
```

### 2. Первые шаги

1. Прочитайте преамбулу:
   ```
   affinity_read_sdk_documentation_topic(filename="preamble")
   ```

2. Выполните простой скрипт:
   ```
   affinity_execute_script(script="console.log('Hello from Affinity!'); console.log(app.version);")
   ```

3. Визуализируйте результат:
   ```
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

## SDK API (ключевые модули)

| Модуль | Назначение |
|--------|------------|
| `application.js` | Application (singleton `app`), документы, UI |
| `document.js` | Document (создание, сохранение, экспорт) |
| `commands.js` | 150+ команд (трансформации, фильтры, AI) |
| `geometry.js` | Transform, Curve, Point, Rectangle |
| `nodes.js` | Node (базовый класс слоёв) |
| `shapes.js` | Shape (прямоугольники, эллипсы, звёзды) |
| `colours.js` | Colour, Gradient, SVG11 |
| `story.js` | Story (текстовый контент) |
| `layereffects.js` | Эффекты слоёв (тени, свечение, барельеф) |
| `network.js` | HttpRequest, HttpResponse |
| `dialog.js` | Dialog (создание UI) |

Подробнее: [02-sdk-reference.md](02-sdk-reference.md)

---

## Библиотечные скрипты (70+)

Каталог скриптов из репозитория [JiriKrblich/Affinity-Community-Scripts](https://github.com/JiriKrblich/Affinity-Community-Scripts):

| Категория | Количество | Ключевые скрипты |
|-----------|------------|------------------|
| Object | 30+ | Blend Tool, Extrude Tool, Radial Repeat, Scatter, Distribute on Paths |
| Effect | 8 | Zig Zag, Dithering, Glitch, Twist, Roughen Edges |
| Text | 9 | Arabic RTL, Type Scale Builder, Smart Quotes, Markdown Import |
| Color | 5 | OKLCH Color, ReColorFill, ReColorStroke, Separate Fill & Stroke |
| Export | 6 | Smart JPEG, Export DDS, CMYK PSD, Carroussel |
| Artboards | 4 | Bento Box Generator, Carroussel, Rename, Fitter |
| Print | 3 | Crop Marks, RGB Finder |
| Layout | 1 | Swiss Grid Explorer |
| Path | 1 | Join Paths |
| Layer | 2 | Toggle Visibility, Move to Top |

Подробнее: [03-library-scripts.md](03-library-scripts.md) | [06-community-scripts.md](06-community-scripts.md)

---

## Примеры (10)

| Пример | Назначение |
|--------|------------|
| artboardGrid.js | Сетка артбордов |
| bitmapWriter.js | Запись битмапов |
| addPoints.js | Добавление точек |
| addGuides.js | Добавление направляющих |
| setDocumentFormat.js | Установка формата документа |
| alignToPage.js | Выравнивание по странице |
| adjustPageItems.js | Adjustment элементов |
| boldItalics.js | Жирный/курсив |
| flexibleLayout.js | Гибкая компоновка |
| tableFromJson.js | Таблица из JSON |

Подробнее: [04-examples.md](04-examples.md)

---

## Полный учебник

Комплексное руководство по скриптингу в Affinity (32 главы + приложения):

| Часть | Главы | Тема |
|-------|-------|------|
| I | 1-3 | Введение — настройка, преамбула, правила |
| II | 4-7 | Основы — первый скрипт, модули, вывод |
| III | 8-11 | Объекты — узлы, фигуры, кривые, цвета |
| IV | 12-15 | Команды — executeCommand, выделение, трансформации |
| V | 16-18 | Текст и UI — StoryBuilder, диалоги, экспорт |
| VI | 19-23 | Продвинутые — AI, FS, сеть, таймеры, коллекции |
| VII | 24-27 | Отладка — ошибки, производительность, паттерны |
| VIII | 28-32 | Практикум — 5 готовых рецептов |
| Прил. | A-D | Справочники — MCP, модули, фигуры, community |

Подробнее: [affinity-scripting-tutorial.md](affinity-scripting-tutorial.md) | [PDF](affinity-scripting-tutorial.pdf)

---

## Паттерны кода (справочник)

Подробный справочник по паттернам скриптинга: диалоги, кривые, трансформации, заливки, генеративные алгоритмы, утилиты.

Подробнее: [06-community-scripts.md](06-community-scripts.md)

---

## AI-команды

Affinity SDK включает AI-команды для:

- `generateImage(prompt)` — генерация изображения
- `generativeEditImage(prompt)` — генеративное редактирование
- `removeBackground()` — удаление фона
- `selectSubject()` — выделение объекта
- `detectDepth()` — определение глубины
- `colourise()` — раскрашивание

---

## Ограничения

- **Файловая система**: доступ только к Desktop (`app.userDesktopPath`)
- **Рендеринг**: максимальный размер JPEG — 1024px
- **Настройки**: `NOT_ALLOWED` = ограничения в настройках Affinity
- **Скрипты**: должны быть прямо выполняемыми (без `module.exports.main`)

---

## Ссылки

- [MCP-инструменты](01-mcp-tools.md)
- [SDK API](02-sdk-reference.md)
- [Библиотечные скрипты](03-library-scripts.md)
- [Примеры](04-examples.md)
- [Единый учебник (PDF)](affinity-scripting-tutorial.pdf)
- [Единый учебник (MD)](affinity-scripting-tutorial.md)
- [Community-скрипты (каталог)](03-library-scripts.md)
- [Паттерны кода](06-community-scripts.md)
- [Ядро API](core-api.md)
