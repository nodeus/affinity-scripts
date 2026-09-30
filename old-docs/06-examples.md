# Affinity SDK — Примеры кода

> Примеры из папки `examples/` SDK Affinity. Доступны через `affinity_read_sdk_documentation_topic(filename="examples/...")`.

---

## Содержание

1. [artboardGrid.js](#1-artboardgridjs) — Сетка артбордов
2. [bitmapWriter.js](#2-bitmapwriterjs) — Запись битмапов
3. [addPoints.js](#3-addpointsjs) — Добавление точек
4. [addGuides.js](#4-addguidesjs) — Добавление направляющих
5. [setDocumentFormat.js](#5-setdocumentformatjs) — Установка формата документа
6. [alignToPage.js](#6-aligntopagejs) — Выравнивание по странице
7. [adjustPageItems.js](#7-adjustpageitemsjs) — Adjustment элементов страницы
8. [boldItalics.js](#8-bolditalicsjs) — Жирный/курсив
9. [flexibleLayout.js](#9-flexiblelayoutjs) — Гибкая компоновка
10. [tableFromJson.js](#10-tablefromjsonjs) — Таблица из JSON

---

## 1. artboardGrid.js

**Создание сетки артбордов**

Создаёт равномерную сетку артбордов заданного размера.

### Ключевые концепции

- Перебор существующих артбордов
- Вычисление позиций для новой сетки
- Создание артбордов через `DocumentCommand.createAddArtboard`

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/artboardGrid.js")
```

---

## 2. bitmapWriter.js

**Запись битмапов в файл**

Демонстрирует работу с растровыми данными и запись в файл.

### Ключевые концепции

- Получение пиксельных данных через `PixelAccessor`
- Работа с `Buffer` для записи
- Файловые операции через `fs.js`

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/bitmapWriter.js")
```

---

## 3. addPoints.js

**Добавление точек на кривую**

Показывает, как программно добавлять узлы на существующий путь.

### Ключевые концепции

- Работа с `Curve` и `CurveNode`
- Добавление узлов через `addCurveNode`
- Модификация существующих путей

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/addPoints.js")
```

---

## 4. addGuides.js

**Добавление направляющих**

Создаёт горизонтальные и вертикальные направляющие.

### Ключевые концепции

- Использование `DocumentCommand.createAddGuide`
- Установка позиций направляющих
- Работа с единицами измерения

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/addGuides.js")
```

---

## 5. setDocumentFormat.js

**Установка формата документа**

Изменяет свойства документа (размер, DPI, цветовое пространство).

### Ключевые концепции

- Использование `DocumentCommand.createSetDocumentProperties`
- Изменение `DocumentProperties`
- Работа с `UnitType` и `ColourSpaceType`

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/setDocumentFormat.js")
```

---

## 6. alignToPage.js

**Выравнивание объектов по странице**

Выравнивает выбранные объекты относительно страницы.

### Ключевые концепции

- Получение границ страницы
- Вычисление центра/краёв
- Применение трансформаций

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/alignToPage.js")
```

---

## 7. adjustPageItems.js

**Adjustment элементов страницы**

Массовое изменение свойств элементов на странице.

### Ключевые концепции

- Перебор узлов на странице
- Изменение свойств (размер, позиция, цвет)
- Пакетные операции

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/adjustPageItems.js")
```

---

## 8. boldItalics.js

**Применение жирного/курсивного начертания**

Форматирование текста через `StoryBuilder`.

### Ключевые концепции

- Работа с `GlyphAtts` (атрибуты глифов)
- Установка `bold`, `italic` флагов
- Применение через `DocumentCommand.createFormatText`

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/boldItalics.js")
```

---

## 9. flexibleLayout.js

**Гибкая компоновка**

Динамическое размещение элементов с учётом размеров контента.

### Ключевые концепции

- Вычисление размеров текста
- Автоматическое позиционирование
- Адаптивные макеты

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/flexibleLayout.js")
```

---

## 10. tableFromJson.js

**Создание таблицы из JSON**

Импортирует JSON-данные и создаёт таблицу в документе.

### Ключевые концепции

- Парсинг JSON
- Создание текстовых фреймов
- Форматирование таблиц

### Пример использования

```
affinity_read_sdk_documentation_topic(filename="examples/tableFromJson.js")
```

---

## Как использовать примеры

1. Прочитайте пример через `affinity_read_sdk_documentation_topic`
2. Изучите структуру кода
3. Адаптируйте под свои задачи
4. Протестируйте через `affinity_execute_script`
