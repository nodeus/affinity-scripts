# Affinity MCP — Инструменты

> MCP-сервер Affinity предоставляет 11 инструментов для автоматизации работы с Affinity Designer/Photo/Publisher через JavaScript SDK.

---

## Содержание

1. [affinity_execute_script](#1-affinity_execute_script)
2. [affinity_read_sdk_documentation_topic](#2-affinity_read_sdk_documentation_topic)
3. [affinity_list_sdk_documentation](#3-affinity_list_sdk_documentation)
4. [affinity_list_library_scripts](#4-affinity_list_library_scripts)
5. [affinity_read_library_script](#5-affinity_read_library_script)
6. [affinity_save_script_to_library](#6-affinity_save_script_to_library)
7. [affinity_render_selection](#7-affinity_render_selection)
8. [affinity_render_spread](#8-affinity_render_spread)
9. [affinity_search_sdk_hints](#9-affinity_search_sdk_hints)
10. [affinity_add_sdk_hint](#10-affinity_add_sdk_hint)
11. [affinity_report_sdk_issue](#11-affinity_report_sdk_issue)

---

## 1. affinity_execute_script

**Описание:** Выполняет JavaScript-код в контексте Affinity и возвращает результат.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `script` | `string` | Да | JavaScript-код для выполнения |

### Примеры

```js
// Получить список открытых документов
const docs = app.documents.all;
docs.forEach((doc, i) => console.log(`Документ ${i}: ${doc.name}`));

// Создать новый документ
const { Document, NewDocumentOptions } = require('/document');
const options = NewDocumentOptions.create();
options.width = 1920;
options.height = 1080;
options.dpi = 72;
const doc = Document.createWithSize(options);

// Добавить прямоугольник
const { Shape } = require('/shapes');
const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
const rect = Shape.createRectangle(spread);
rect.width = 200;
rect.height = 100;

// Сохранить результат через console.log
console.log(`Создан документ: ${doc.name}`);
console.log(`Прямоугольник: ${rect.width}x${rect.height}`);
```

### Важные замечания

- Результат **не возвращается напрямую** — используйте `console.log()` для вывода
- Если команда возвращает `NOT_ALLOWED`, пользователь ограничил доступ к AI, файловой системе или сети в настройках Affinity
- Скрипт должен быть **прямо выполняемым** — не используйте `module.exports.main = main;`

---

## 2. affinity_read_sdk_documentation_topic

**Описание:** Читает тему документации SDK. **Обязательно** начните с файла `preamble` перед использованием других тем.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `filename` | `string` | Да | Имя файла документации из списка `list_sdk_documentation` |

### Доступные темы (категории)

#### Core
- `preamble` — **ОБЯЗАТЕЛЬНО ПЕРВЫМ** — вводные инструкции и правила
- `adjustment_ranges` — диапазоны параметров коррекций
- `filter_ranges` — диапазоны параметров фильтров

#### Приложения и документы
- `application.js` — класс Application (singleton `app`)
- `document.js` — класс Document (создание, сохранение, экспорт)
- `documentproperties.js` — свойства документа (DPI, единицы, размеры)
- `commands.js` — 150+ команд (трансформации, фильтры, AI, макросы)

#### Геометрия и формы
- `geometry.js` — Transform, Curve, PolyCurve, Point, Rectangle
- `shapes.js` — Shape (прямоугольники, эллипсы, звёзды, кривые)
- `nodes.js` — Node (базовый класс слоёв)
- `curvesinterface.js` — работа с кривыми
- `shapeinterface.js` — интерфейс форм

#### Текст
- `story.js` — Story (текстовый контент)
- `storybuilder.js` — StoryBuilder (построение текста)
- `storyinterface.js` — StoryInterface (интерфейс текстового фрейма)
- `glyphatts.js` — атрибуты глифов
- `paragraphatts.js` — атрибуты абзацев
- `glyphs.js` — Glyphs (глифы)
- `fonts.js` — Fonts (шрифты)

#### Интерфейсы
- `baseboxinterface.js` — базовый интерфейс контейнеров
- `artboardinterface.js` — ArtboardInterface
- `artboardproperties.js` — ArtboardProperties
- `textframeinterface.js` — TextFrameInterface
- `pictureframeinterface.js` — PictureFrameInterface
- `rasterinterface.js` — RasterInterface
- `rasterobject.js` — RasterObject
- `rasterbrush.js` — RasterBrush
- `vectorbrush.js` — VectorBrush
- `hatch.js` — Hatch (штриховка)
- `brushfillinterface.js` — BrushFillInterface
- `linestyleinterface.js` — LineStyleInterface
- `linestyle.js` — LineStyle
- `marginsinterface.js` — MarginsInterface
- `pageboxinterface.js` — PageBoxInterface

#### Свойства
- `transparencyinterface.js` — прозрачность
- `blendmodeinterface.js` — режимы смешивания
- `visibilityinterface.js` — видимость
- `editabilityinterface.js` — редактируемость
- `descriptioninterface.js` — описание
- `taginterface.js` — теги
- `exportconfig.js` — конфигурация экспорта
- `exportableinterface.js` — интерфейс экспорта
- `physicalrootinterface.js` — PhysicalRootInterface
- `physicalrootpropertiesinterface.js` — PhysicalRootPropertiesInterface
- `compoundoperationinterface.js` — CompoundOperationInterface
- `transforminterface.js` — TransformInterface
- `drawingscale.js` — DrawingScale

#### Эффекты
- `layereffects.js` — LayerEffects (тени, свечение, барельеф)
- `layereffectsinterface.js` — LayerEffectsInterface
- `filter_ranges.js` — диапазоны фильтров
- `adjustment_ranges.js` — диапазоны коррекций

#### Растровые данные
- `pixelaccessor.js` — PixelAccessor (доступ к пикселям)
- `selections.js` — Selections
- `rasterselection.js` — RasterSelection
- `imageresourceinterface.js` — ImageResourceInterface

#### Утилиты
- `dialog.js` — Dialog (создание UI)
- `network.js` — HttpRequest, HttpResponse
- `collection.js` — Collection (леннивые коллекции)
- `fs.js` — файловая система (только Desktop)
- `buffer.js` — Buffer (работа с буферами)
- `timers.js` — Timer, setTimeout, setInterval
- `units.js` — UnitType, UnitValue
- `colours.js` — Colour, Gradient, SVG11
- `fills.js` — заливки
- `handleobject.js` — HandleObject (базовый класс)
- `selectable.js` — Selectable

#### Примеры
- `examples/artboardGrid.js` — сетка артбордов
- `examples/bitmapWriter.js` — запись битмапов
- `examples/addPoints.js` — добавление точек
- `examples/addGuides.js` — добавление направляющих
- `examples/setDocumentFormat.js` — установка формата документа
- `examples/alignToPage.js` — выравнивание по странице
- `examples/adjustPageItems.js` —调整 элементов страницы
- `examples/boldItalics.js` — жирный/курсив
- `examples/flexibleLayout.js` — гибкая компоновка
- `examples/tableFromJson.js` — таблица из JSON

#### Тесты
- `tests/applicationTests.js`, `tests/documenttests.js`, `tests/polygonTests.js` и др. (29 файлов)

### Пример использования

```js
// Сначала прочитать preamble
// affinity_read_sdk_documentation_topic(filename="preamble")

// Затем нужные темы
// affinity_read_sdk_documentation_topic(filename="nodes.js")
// affinity_read_sdk_documentation_topic(filename="shapes.js")
```

---

## 3. affinity_list_sdk_documentation

**Описание:** Возвращает список всех доступных тем документации SDK.

### Параметры

Нет.

### Результат

Массив имён файлов документации, сгруппированных по категориям:
- **Core**: `preamble`, `adjustment_ranges`, `filter_ranges`
- **Libraries/Modules**: 48+ файлов `.js`
- **Tests**: 29 тестовых файлов
- **Examples**: 11 примеров

---

## 4. affinity_list_library_scripts

**Описание:** Возвращает список скриптов в библиотеке скриптов Affinity.

### Параметры

Нет.

### Результат

Список из 24 скриптов:

| # | Название | Описание |
|---|----------|----------|
| 1 | Artboard Batch Renamer | Пакетное переименование артбордов |
| 2 | Artboard Fitter | Подгонка артбордов под содержимое |
| 3 | Create Carroussel | Создание карусели |
| 4 | Distribute Shapes on Paths | Распределение форм по путям |
| 5 | Extrude Tool | Инструмент экструзии |
| 6 | Fill Path With Objects | Заполнение пути объектами |
| 7 | Gridify | Разбиение на сетку |
| 8 | Markdown import to text frame | Импорт Markdown в текстовый фрейм |
| 9 | Pattern Maker | Создание паттернов |
| 10 | Professional Chart Generator - CSV Import | Генератор графиков из CSV |
| 11 | RadialRepeat | Радиальное повторение |
| 12 | ReplaceAllwithKeyObject | Замена всех объектов ключевым |
| 13 | ReplaceColorFill | Замена цвета заливки |
| 14 | ReplaceStrokeColor | Замена цвета обводки |
| 15 | Roughen Edges | Сглаживание краёв |
| 16 | SeparateFill&Stroke | Разделение заливки и обводки |
| 17 | Split to grid | Разбиение на сетку |
| 18 | Style Consistency Checker | Проверка согласованности стилей |
| 19 | Swap Objects | Обмен объектами |
| 20 | Swap objects by center | Обмен объектами по центру |

---

## 5. affinity_read_library_script

**Описание:** Читает скрипт из библиотеки скриптов по названию.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `title` | `string` | Да | Название скрипта из списка `list_library_scripts` |

### Пример

```
affinity_read_library_script(title="Gridify")
```

Возвращает полный JavaScript-код скрипта для использования в качестве примера или основы для собственных скриптов.

---

## 6. affinity_save_script_to_library

**Описание:** Сохраняет готовый скрипт в библиотеку скриптов Affinity для дальнейшего использования.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `title` | `string` | Да | Название скрипта |
| `description` | `string` | Да | Краткое описание скрипта |
| `code` | `string` | Да | JavaScript-код скрипта |

### Пример

```
affinity_save_script_to_library(
  title="My Custom Tool",
  description="Creates a blue rectangle centered on the page",
  code="const { Document } = require('/document');\nconst doc = app.documents.current;\nconst spread = doc.spreads.first;\ndoc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));\n// ... код скрипта"
)
```

---

## 7. affinity_render_selection

**Описание:** Рендерит текущий выделенный узел в Base64-encoded JPEG. Максимальный размер — 1024px, может быть уменьшен.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `document_session_uuid` | `string` | Да | UUID сессии документа для рендеринга |

### Использование

Используйте для визуальной проверки результатов скриптов. Полезно для инспекции отдельных узлов.

---

## 8. affinity_render_spread

**Описание:** Рендерит страницу (spread) в Base64-encoded JPEG. Максимальный размер — 1024px, может быть уменьшен.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `document_session_uuid` | `string` | Да | UUID сессии документа |
| `spread_index` | `number` | Да | Нулевой индекс страницы для рендеринга |

### Пример

```
affinity_render_spread(
  document_session_uuid="abc-123-def",
  spread_index=0
)
```

---

## 9. affinity_search_sdk_hints

**Описание:** Ищет в глобальном пуле подсказок SDK от миллионов других MCP-сессий. Используйте для поиска решений проблем.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `prompt` | `string` | Да | Описание проблемы для поиска |

### Пример

```
affinity_search_sdk_hints(prompt="How to create a gradient fill on a shape")
```

---

## 10. affinity_add_sdk_hint

**Описание:** Добавляет подсказку в документ-преамбулу для будущих сессий. **Вызывайте немедленно** после решения проблемы экспериментально.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `hint` | `string` | Да | Подсказка для добавления |

### Пример

```
affinity_add_sdk_hint(hint="To create a rounded rectangle, use Shape.createRoundedRectangle(spread) with cornerRadius parameter")
```

---

## 11. affinity_report_sdk_issue

**Описание:** Сообщает об ошибке в SDK Affinity. Убедитесь, что проблема реальна перед отправкой.

### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `description` | `string` | Да | Описание проблемы SDK |
| `code` | `string` | Нет | JavaScript-код, демонстрирующий проблему |

### Пример

```
affinity_report_sdk_issue(
  description="Shape.createRectangle() throws when spread is not set",
  code="const { Shape } = require('/shapes');\nconst rect = Shape.createRectangle(null);"
)
```

---

## Рабочий процесс

1. **Начните с преамбулы** — прочитайте `preamble` через `read_sdk_documentation_topic`
2. **Поищите подсказки** — используйте `search_sdk_hints` перед экспериментами
3. **Ищите имена инструментов** — проверьте все MCP-инструменты перед началом
4. **Выполняйте скрипты** — используйте `execute_script` для работы с документами
5. **Визуализируйте** — используйте `render_spread`/`render_selection` для проверки
6. **Сохраняйте решения** — вызывайте `add_sdk_hint` после решения проблемы
7. **Сохраняйте скрипты** — используйте `save_script_to_library` для готовых скриптов
