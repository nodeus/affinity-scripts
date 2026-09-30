# Affinity Community Scripts — База знаний

> Коллекция из 70+ скриптов из репозитория [JiriKrblich/Affinity-Community-Scripts](https://github.com/JiriKrblich/Affinity-Community-Scripts). Паттерны, техники и готовые решения для скриптинга.

---

## Содержание

1. [Каталог скриптов](#1-каталог-скриптов)
2. [Паттерны диалогов](#2-паттерны-диалогов)
3. [Работа с кривыми](#3-работа-с-кривыми)
4. [Трансформации объектов](#4-трансформации-объектов)
5. [Цвета и заливки](#5-цвета-и-заливки)
6. [Генеративные скрипты](#6-генеративные-скрипты)
7. [Работа с текстом](#7-работа-с-текстом)
8. [Экспорт](#8-экспорт)
9. [Утилиты](#9-утилиты)
10. [Паттерны кода](#10-паттерны-кода)

---

## 1. Каталог скриптов

### Object (объекты)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Blend Tool | Бленд между объектами (в том числе по пути) | robinsnest56 |
| Copy to Artboards | Копирование объектов на все артборды | BlackMortimer-13 |
| Swap Objects by Center | Обмен объектами по центру | daani-rika |
| Split to Grid | Разбиение на сетку | JiriKrblich |
| Crack and Explode | Радиальные трещины + взрыв | rbonelli |
| Distribute Shapes on Paths | Распределение объектов по путям | EricP |
| Replace All with Key Object | Замена всех объектов ключевым | BlackMortimer-13 |
| Arrange on Path | Размещение объектов вдоль пути | BlackMortimer-13 |
| Swap Objects | Обмен объектами с настройками | BlackMortimer-13 |
| Gridify | Разбиение на сетку с параметрами | Nic Kraneis |
| Extrude Tool | 3D-экструзия | BlackMortimer-13 |
| 3D Fun | Faux 3D объекты | S1m0nP1 |
| Pattern Maker | Создание паттернов (brick, drop) | Nic Kraneis |
| Simplify Curves | Упрощение кривых | JiriKrblich |
| Curve Mockup Overlay | Презентационные anchor points | JiriKrblich |
| Affinity Logo Grid | Строительные направляющие для логотипов | Yore-Des |
| Vector Block Shadow | Теневой блочный эффект | jn-373 |
| Scatter | Рассеивание объектов | Claude via Matt I. |
| SELECT+ | Выбор по связям/содержимому | EricP |
| Image Trace Superior | Трассировка растровых изображений | Dimas Nirwan |
| Duplicate at Selected Nodes | Дублирование на узлах | Dimas Nirwan |
| Pizza Cutter | Разрезание на части | hellsfaun |
| Aesthetic Colorizer | Координированная раскраска | BlackMortimer-13 |
| Radial Repeat | Радиальное повторение | BlackMortimer-13 |
| Make Button | Генерация кнопок | hellsfaun |
| Group Cleanup | Очистка пустых групп | hellsfaun |
| Empty Clipping Masks | Очистка масок | jn-373 |
| Apple Style Squircle | Squircle (Apple стиль) | Dan Schumacher |
| Copy Selection to Opposite Page | Копирование на противоположную страницу | BlackMortimer-13 |
| Quick Mirror | Зеркалирование | hellsfaun |
| Centerline Tracer | Трассировка центральных линий | do-nuko |
| Progressive Transform | Прогрессивная трансформация | WaveF |
| Envelope Studio Pro | Warp-движок | tzvi20 |
| Professional Chart Generator | Графики из CSV | Ouriel MAKAYA |
| Rename Artboards | Пакетное переименование артбордов | Heitor Hatherly |

### Effect (эффекты)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Zig Zag Effect | Зигзаг-эффект | BlackMortimer-13 |
| PuckerBloatEffect | Pucker & Bloat | BlackMortimer-13 |
| Directional Blur Shadow | Направленное размытие тени | rbonelli |
| Dithering | Халфтон с 12 алгоритмами | bitmancer |
| Roughen Edges | Шерохование краёв | Nic Kraneis |
| Glitch Effect | Глитч-эффект | Nic Kraneis |
| Twist Effect | Скручивание | BlackMortimer-13 |
| Vector Lathe (Revolve) | Вращение вокруг оси | BlackMortimer-13 |

### Text (текст)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Markdown Import | Импорт Markdown в текстовый фрейм | rabidgremlin |
| Single-char Linebreak Fix | Замена пробелов после одиночных символов | JiriKrblich |
| Hanging Chars and Prepositions | Висячие символы и предлоги | nodeus |
| Arabic RTL Pro | Арабский RTL | Dimas Nirwan |
| Hebrew RTL Flip Helper | Еврейский RTL | Tzvi20 |
| Type Scale Builder | Генератор типографической шкалы | Seba |
| Block Text | Масштабирование текста в блок | pgraficzny |
| Smart Quotes Converter | Умные кавычки | MeowWereTalking |
| Advanced Markdown | Markdown → Affinity Publisher | Torsten Dinkheller |

### Color (цвета)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| ReColorFill | Замена цвета заливки | BlackMortimer-13 |
| ReColorStroke | Замена цвета обводки | BlackMortimer-13 |
| OKLCH Color | OKLCH цвета | JiriKrblich |
| Custom Gradient Map | Карта градиентов | RE4LLY |
| Separate Fill & Stroke | Разделение заливки и обводки | BlackMortimer-13 |

### Export (экспорт)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Smart JPEG Export | Экспорт с ограничением размера | JiriKrblich |
| Export Carroussel | Экспорт карусели | rbonelli |
| Smart Exporter | Мультиформатный экспорт | JiriKrblich |
| Export DDS | Экспорт в DDS (BC3/DXT5) | jeffthor10 |
| Export Selected Layer as CMYK PSD | Экспорт слоя как CMYK PSD | Paulius Asamoah Sem |
| Combine for Braille | Объединение текста для шрифта Брайля | BaconThatsIt |

### Artboards (артборды)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Copy to Artboards | Копирование на артборды | BlackMortimer-13 |
| Create Carroussel | Создание карусели | rbonelli |
| Rename Artboards | Пакетное переименование | Heitor Hatherly |
| Artboard Fitter | Подгонка артбордов под содержимое | Heitor Hatherly |

### Layer (слои)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Toggle Layer Visibility Across All Pages | Переключение видимости слоёв | hrum |
| Move Layer to Top Across All Pages | Перемещение слоёв наверх | hrum |

### Layout (компоновка)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Swiss Grid Explorer | Параметрическая сетка | Victor Crespo |

### Path (пути)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Join Paths | Соединение открытых путей | EricP |

### Print (печать)

| Скрипт | Описание | Автор |
|--------|----------|-------|
| Generate Crop Marks | Генерация меток обреза | sakura |
| Cropmarks | Метки обреза | Wolfgang Wiesen |
| RGB Finder | Поиск RGB-изображений в CMYK-документе | hrum |

---

## 2. Паттерны диалогов

### Базовый диалог с preview

```js
const { Dialog, DialogResult } = require('/dialog');

const dlg = Dialog.create('Название');
dlg.initialWidth = 360;

const col = dlg.addColumn();
const grp = col.addGroup('Параметры');

// Редактор значений
const slider = grp.addUnitValueEditor('Параметр', UnitType.Pixel, UnitType.Pixel, 10, 1, 100);
slider.precision = 0;
slider.showPopupSlider = true;

// Переключатель
const switchCtrl = grp.addSwitch('Опция', false);

// Комбобокс
const combo = grp.addComboBox('Режим', ['Вариант 1', 'Вариант 2'], 0);

// Чекбокс
const check = grp.addCheckBox('Флажок', true);

// Кнопки действий
const actGrp = col.addGroup('');
const btns = actGrp.addButtonSet('', ['Preview', 'Apply'], 0);
btns.isFullWidth = true;

// Текст статуса
const status = actGrp.addStaticText('', 'Готово');
status.isFullWidth = true;

// Обработчик изменений
slider.onValueChangedHandler = () => {
  // Обновить preview
};

dlg.onControlValueChangedHandler = () => {
  // Обновить preview при любом изменении
};

const result = dlg.runModal();
if (result.value === DialogResult.Ok.value) {
  // Применить
}
```

### Pattern: Preview → Apply loop

```js
let previewActive = false;
let cmdCount = 0;

function applyPreview() {
  if (previewActive) {
    // Отменить предыдущий preview
    for (let i = 0; i < cmdCount; i++) {
      doc.executeCommand(DocumentCommand.createUndo());
    }
    previewActive = false;
  }
  
  // Применить как preview
  const cmd = createMyCommand(params);
  doc.executeCommand(cmd, true); // true = preview
  previewActive = true;
  cmdCount = 1;
}

// В диалоге:
while (running) {
  const result = dlg.runModal();
  
  if (result.value !== DialogResult.Ok.value) {
    // Cancel — отменить preview
    if (previewActive) {
      for (let i = 0; i < cmdCount; i++) {
        doc.executeCommand(DocumentCommand.createUndo());
      }
    }
    running = false;
  } else if (btns.selectedIndex === 0) {
    // Preview — обновить
    applyPreview();
  } else {
    // Apply — зафиксировать
    applyPreview();
    running = false;
  }
}
```

---

## 3. Работа с кривыми

### Получение Безье

```js
function getWorldBeziers(node) {
  const d = node.transformInterface.transform.decompose();
  return [...node.polyCurve.at(0).beziers].map(seg => ({
    start: applyDecomp(d, seg.start),
    c1: applyDecomp(d, seg.c1),
    c2: applyDecomp(d, seg.c2),
    end: applyDecomp(d, seg.end),
  }));
}
```

### Разделение Безье

```js
function splitBezAt(seg, t) {
  const { start: p0, c1: p1, c2: p2, end: p3 } = seg;
  const p01 = lerpPt(p0, p1, t);
  const p12 = lerpPt(p1, p2, t);
  const p23 = lerpPt(p2, p3, t);
  const p012 = lerpPt(p01, p12, t);
  const p123 = lerpPt(p12, p23, t);
  const mid = lerpPt(p012, p123, t);
  return [
    { start: p0, c1: p01, c2: p012, end: mid },
    { start: mid, c1: p123, c2: p23, end: p3 },
  ];
}
```

### Построение кривой

```js
const { CurveBuilder, PolyCurve } = require('/geometry');

const builder = CurveBuilder.create();
builder.begin(startPoint);
builder.lineTo(point1);
builder.addBezier(c1, c2, endPoint);
builder.close();
const curve = builder.createCurve();

const polyCurve = PolyCurve.create();
polyCurve.addCurve(curve);
```

### Arc-length sampling

```js
function buildArcTable(beziers) {
  const tbl = [];
  let cum = 0;
  for (let bi = 0; bi < beziers.length; bi++) {
    const b = beziers[bi];
    let prev = evalBez(b, 0);
    if (bi === 0) tbl.push({ bi, t: 0, cum: 0 });
    for (let s = 1; s <= 200; s++) {
      const t = s / 200;
      const pt = evalBez(b, t);
      cum += dist(pt, prev);
      tbl.push({ bi, t, cum });
      prev = pt;
    }
  }
  return tbl;
}

function samplePath(tbl, beziers, frac) {
  const total = tbl[tbl.length - 1].cum;
  const c = frac * total;
  // Бинарный поиск по таблице
  let lo = 0, hi = tbl.length - 1;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (tbl[mid].cum <= c) lo = mid;
    else hi = mid;
  }
  // Интерполяция
  return evalBez(beziers[tbl[lo].bi], tbl[lo].t);
}
```

---

## 4. Трансформации объектов

### Создание трансформаций

```js
const { Transform } = require('/geometry');

// Перемещение
Transform.createTranslate(dx, dy);

// Вращение (в радианах)
Transform.createRotate(angle);

// Масштабирование
Transform.createScale(sx, sy);

// Сдвиг (shear)
Transform.createShear(shx, shy);

// Композиция
const xf = Transform.createTranslate(cx, cy)
  .multiply(Transform.createRotate(angle))
  .multiply(Transform.createTranslate(-cx, -cy));
```

### Применение трансформации

```js
const { DocumentCommand } = require('/commands');
const { Selection } = require('/selections');

const sel = Selection.create(doc, node);
const cmd = DocumentCommand.createTransform(sel, transform);
doc.executeCommand(cmd);
```

### Дублирование с трансформацией

```js
const clone = node.duplicate(Transform.createTranslate(dx, dy));
```

---

## 5. Цвета и заливки

### Создание цветов

```js
const { Colour, RGBA8, HSLAf } = require('/colours');

// RGBA (0-255)
const red = RGBA8(255, 0, 0, 255);

// HSL (0-1)
const hsl = Colour.createHSLAf({ h: 0.5, s: 1.0, l: 0.5, alpha: 1.0 });

// Из RGBA
const rgba = colour.rgba8;
console.log(rgba.r, rgba.g, rgba.b, rgba.alpha);
```

### Работа с заливками

```js
const { FillDescriptor, GradientFill, FillType } = require('/fills');
const { Gradient } = require('/colours');

// Сплошная заливка
const solidFill = FillDescriptor.createSolid(colour, BlendMode.Normal);

// Градиент
const stops = [
  { colour: RGBA8(255, 0, 0, 255), position: 0, midpoint: 0.5 },
  { colour: RGBA8(0, 0, 255, 255), position: 1, midpoint: 0.5 },
];
const gradient = Gradient.create(stops);
const gradientFill = GradientFill.create(gradient, gradientFillType);
const fillDesc = FillDescriptor.create(gradientFill, true, transform, BlendMode.Normal, false);

// Чтение заливки
const fd = node.brushFillInterface.fillDescriptor;
const fill = fd.fill;
if (fill.fillType.value === FillType.Solid.value) {
  const rgba = fill.colour.rgba8;
} else if (fill.fillType.value === FillType.Gradient.value) {
  const grad = fill.gradient;
  for (let i = 0; i < grad.stopCount; i++) {
    const stop = grad.getStop(i);
  }
}
```

### Чтение/запись обводки

```js
const { LineStyle, LineStyleDescriptor } = require('/linestyle');

// Чтение
const lsi = node.lineStyleInterface;
const rgba = lsi.penFillDescriptor.fill.colour.rgba8;
const weight = lsi.lineStyle.weight;

// Запись
const ls = lsi.lineStyle.clone();
ls.weight = 2.0;
const newLsi = lsi.cloneWithNewLineStyle(ls);
```

---

## 6. Генеративные скрипты

### Bento Box Generator

```js
// Алгоритм разбиения на прямоугольники
function splitRect(r, doH, minCells, maxSpan) {
  if (doH) {
    const s = flo + Math.floor(Math.random() * (fhi - flo + 1));
    return [
      { col: r.col, row: r.row, w: s, h: r.h },
      { col: r.col + s, row: r.row, w: r.w - s, h: r.h }
    ];
  }
  // Аналогично для вертикального разбиения
}

// Генерация макета
function tryGenerate(n, gridSize, maxSpan, minCells) {
  let rects = [{ col: 0, row: 0, w: gridSize, h: gridSize }];
  while (rects.length < n) {
    // Выбор прямоугольника для разбиения
    // Разбиение по горизонтали или вертикали
  }
  return rects.map(r => [r.col, r.row, r.w, r.h]);
}
```

### Randomize Objects

```js
// Шумовые функции
function hash(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

function perlin1D(x) {
  const xi = Math.floor(x);
  const xf = x - xi;
  const u = xf * xf * (3 - 2 * xf);
  return hash(xi) + u * (hash(xi + 1) - hash(xi));
}

function gaussian(s) {
  const u1 = Math.max(1e-10, hash(s));
  const u2 = hash(s + 17.31);
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}
```

---

## 7. Работа с текстом

### Чтение текста

```js
// Из текстового фрейма
const story = textFrame.story;
const text = story.text;

// Форматирование
const glyphAtts = story.getGlyphAttributes(startIndex, endIndex);
const paraAtts = story.getParagraphAttributes(startIndex, endIndex);
```

### Запись текста

```js
const { StoryBuilder } = require('/story');

const builder = new StoryBuilder();
builder.appendText('Текст ', {});
builder.appendText('жирный', { bold: true });
builder.appendText(' и ');
builder.appendText('курсив', { italic: true });

textFrame.setStory(builder.build());
```

---

## 8. Экспорт

### Базовый экспорт

```js
const { FileExportOptions, FileExportArea } = require('/document');

const options = FileExportOptions.create();
options.area = FileExportArea.CurrentSpread;

doc.export(`${app.userDesktopPath}/output.png`, options);
```

### Экспорт с ограничением размера

```js
// Smart JPEG Export
function exportWithSizeLimit(doc, path, maxSizeKB) {
  let quality = 0.92;
  while (quality > 0.1) {
    const options = FileExportOptions.create();
    options.quality = quality;
    doc.export(path, options);
    
    const size = getFileSize(path);
    if (size <= maxSizeKB * 1024) break;
    quality -= 0.05;
  }
}
```

---

## 9. Утилиты

### Удаление пустых групп

```js
function deleteEmptyGroups(node) {
  let child = node.firstChild;
  while (child) {
    const next = child.nextSibling;
    if (child.isGroupNode) {
      deleteEmptyGroups(child);
      if (!child.firstChild) {
        child.delete();
      }
    }
    child = next;
  }
}
```

### Поиск по цвету

```js
function findNodesByColor(node, targetColor) {
  const results = [];
  if (node.hasBrushFill) {
    const fill = node.brushFillInterface.fillDescriptor.fill;
    if (fill.colour && coloursMatch(fill.colour, targetColor)) {
      results.push(node);
    }
  }
  let child = node.firstChild;
  while (child) {
    results.push(...findNodesByColor(child, targetColor));
    child = child.nextSibling;
  }
  return results;
}
```

### Сохранение настроек в тегах

```js
const { TagInterfaceApi } = require('affinity:dom');

function saveSettings(doc, key, value) {
  const node = doc.layers.first;
  const ti = TagInterfaceApi.fromNode(node.handle);
  doc.executeCommand(
    DocumentCommand.createSetTagValueForKey(
      node.selfSelection,
      key,
      JSON.stringify(value)
    )
  );
}

function loadSettings(doc, key) {
  const node = doc.layers.first;
  const ti = TagInterfaceApi.fromNode(node.handle);
  if (TagInterfaceApi.hasKey(ti, key)) {
    return JSON.parse(TagInterfaceApi.getValueForKey(ti, key));
  }
  return null;
}
```

---

## 10. Паттерны кода

### Структура скрипта

```js
'use strict';

// Импорты
const { Document } = require('/document');
const { Dialog, DialogResult } = require('/dialog');
const { DocumentCommand } = require('/commands');

// Константы
const TAG_KEY = 'my_script_settings';
const DEFAULTS = { param1: 10, param2: true };

// Вспомогательные функции
function helper1() { }
function helper2() { }

// Основная логика
function main() {
  const doc = Document.current;
  if (!doc) { alert('Нет документа'); return; }
  
  const sel = doc.selection;
  if (!sel.length) { alert('Выберите объекты'); return; }
  
  // Диалог
  const dlg = Dialog.create('My Script');
  // ... настройка диалога ...
  const result = dlg.runModal();
  
  if (result.value === DialogResult.Ok.value) {
    // Применение
  }
}

// Запуск
try {
  main();
} catch (error) {
  app.alert('Ошибка: ' + error.message);
}
```

### Pattern: Compound commands

```js
const { CompoundCommandBuilder } = require('/commands');

const builder = CompoundCommandBuilder.create();
builder.addCommand(cmd1);
builder.addCommand(cmd2);
builder.addCommand(cmd3);
doc.executeCommand(builder.createCommand());
```

### Pattern: Undo/Redo

```js
// Сохранить позицию истории
const historyStart = doc.history.position;

// ... выполнить операции ...

// Отменить всё
doc.history.position = historyStart;
```

### Pattern: Preview mode

```js
// Preview (не сохраняется)
doc.executeCommand(cmd, true);

// Применить (сохраняется)
doc.executeCommand(cmd, false);

// Очистить все preview
doc.executeCommand(DocumentCommand.createClearPreviews());
```

### Pattern: Добавление узлов

```js
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands');
const { ContainerNodeDefinition, ShapeNodeDefinition } = require('/nodes');

const builder = AddChildNodesCommandBuilder.create();
builder.setInsertionTarget(doc.currentSpread);

// Контейнер
builder.addContainerNode(ContainerNodeDefinition.create('Группа'));

// Фигура
const shape = ShapeRectangle.create();
const nodeDef = ShapeNodeDefinition.create(
  shape,
  new Rectangle(x, y, w, h),
  FillDescriptor.createSolid(colour)
);
builder.addShapeNode(nodeDef);

doc.executeCommand(builder.createCommand(false, NodeChildType.Main));
```

---

*База знаний создана на основе 70+ скриптов из Affinity Community Scripts.*
