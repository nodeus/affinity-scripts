# Affinity Community Scripts — Каталог скриптов

> 70+ скриптов из репозитория [JiriKrblich/Affinity-Community-Scripts](https://github.com/JiriKrblich/Affinity-Community-Scripts). Готовые решения для автоматизации Affinity Designer/Photo/Publisher.

---

## Содержание

- [Object (30+)](#object)
- [Effect (8)](#effect)
- [Text (9)](#text)
- [Color (5)](#color)
- [Export (6)](#export)
- [Artboards (4)](#artboards)
- [Print (3)](#print)
- [Layout (1)](#layout)
- [Path (1)](#path)
- [Layer (2)](#layer)

---

## Object

### Blend Tool v9
**Автор:** robinsnest56 | **Версия:** 9.0

Создаёт бленд (морфинг) между двумя векторными объектами. Поддерживает путь в качестве 3-го объекта. Работает с фигурами, кривыми, линиями и группами (текст → Convert to Curves).

**Ключевые паттерны:**
- Разделение Безье на N сегментов
- Angular best-match для закрытых кривых
- Интерполяция заливок (сплошные + градиенты)
- Arc-length sampling для размещения вдоль пути

```js
// Основной алгоритм бленда
function buildBlendCurve(bezA, bezB, t, shouldClose) {
  const tgt = Math.max(bezA.length, bezB.length);
  const sA = splitToCount(bezA, tgt);
  let sB = splitToCount(bezB, tgt);
  if (shouldClose) sB = bestMatchB(sA, sB);
  
  const b = CurveBuilder.create();
  b.begin(lerpPt(sA[0].start, sB[0].start, t));
  for (let i = 0; i < sA.length; i++) {
    b.addBezier(
      lerpPt(sA[i].c1, sB[i].c1, t),
      lerpPt(sA[i].c2, sB[i].c2, t),
      lerpPt(sA[i].end, sB[i].end, t),
    );
  }
  if (shouldClose) b.close();
  return b.createCurve();
}
```

---

### Extrude Tool v4
**Автор:** BlackMortimer-13 | **Версия:** 4.0

Генерирует 3D-экструзию, соединяя выбранные векторные фигуры. Автоматически вычисляет, подразделяет и рендерит соединительную геометрию.

**Паттерн:** Группировка граней в контейнеры, сохранение оригинальных форм как caps.

---

### Radial Repeat
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Дублирует объекты в радиальном расположении вокруг центра выбора. Поддерживает несколько круговых рядов, preview, настройки радиуса, интервала, вращения и масштабирования.

---

### Scatter
**Автор:** Claude via Matt I. | **Версия:** 1.1

Рассеивает выбранные объекты с настраиваемыми параметрами. Выберите одну группу для рассеивания её дочерних элементов.

---

### Distribute Shapes on Paths
**Автор:** EricP | **Версия:** 1.1

Размещает копии целевых слоёв вдоль выбранных векторных путей. Поддерживает 4 метода вставки: path, nodes, center, corners. Работает с векторными, групповыми, символьными и пиксельными слоями.

**Ключевые паттерны:**
- Получение точек на пути через arc-length sampling
- Вычисление нормалей для поворота
- Round-robin для множественных целевых слоёв

---

### Arrange on Path v1
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Распределяет выбранные объекты равномерно вдоль векторных путей. Поддерживает множественные пути, рандомизацию, интерполяцию, умную сортировку, открытые/закрытые пути и режим repeat.

---

### Replace Object with Object v2
**Автор:** BlackMortimer-13 | **Версия:** 2.0

Заменяет все выбранные объекты дубликатами ключевого объекта, сохраняя позицию и поворот. Опциональное совпадение размеров.

**Паттерн:** Выбор ключевого объекта через Alt/Option при выборе.

---

### Swap Objects v2
**Автор:** BlackMortimer-13 | **Версия:** 2.0

Меняет местами объекты по пользовательскому маппингу с опциональной ориентацией и размерами. Поддерживает preview и apply.

---

### Swap Objects by Center v2
**Автор:** daani-rika | **Версия:** 2.0

Меняет местами два объекта по их центрам.

---

### Split to Grid
**Автор:** JiriKrblich | **Версия:** 1.0

Разбивает векторный объект на n×n сетку.

---

### Gridify
**Автор:** Nic Kraneis | **Версия:** 1.0

Распределяет выбранные объекты по сетке с настройками интервала, масштабирования и jitter.

---

### Crack and Explode
**Автор:** rbonelli | **Версия:** 1.0

Создаёт радиальные трещины в фигуре и «взрывает» её.

---

### 3D Fun
**Автор:** S1m0nP1 | **Версия:** 1.0

Создаёт faux 3D объекты.

---

### Vector Lathe (Revolve)
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Вращает векторный путь вокруг оси для создания 3D-формы. Применяет шейдинг и организует результат в контейнеры.

---

### Vector Block Shadow Tool v1.4
**Автор:** jn-373 | **Версия:** 1.4

Воспроизводит функцию Block Shadow из CorelDRAW — генерирует плоскую 2D векторную экструзию. Результат — плоский векторный путь для плоттера/вывода.

---

### Affinity Logo Grid v1.1
**Автор:** Yore-Des | **Версия:** 1.1

Создаёт конструктивные направляющие (orthogonal, angled, tangent, circular, node, Bezier handles) из выбранных логотипов/SVG.

---

### Curve Mockup Overlay
**Автор:** JiriKrblich | **Версия:** 1.0

Рисует презентационные anchor points и Bezier handles над выбранной кривой.

---

### Simplify Curves
**Автор:** JiriKrblich | **Версия:** 1.0

Упрощает кривые, уменьшая количество точек.

---

### Image Trace Superior v1.1
**Автор:** Dimas Nirwan | **Версия:** 1.1

Конвертирует растровые слои в чистые векторные B&W. Движок: marching-squares, адаптивное сглаживание Безье, RDP-упрощение.

---

### Centerline Tracer
**Автор:** do-nuko | **Версия:** 1.0

Конвертирует растровые линейные арты в центральные векторные пути.

---

### Duplicate at Selected Nodes
**Автор:** Dimas Nirwan | **Версия:** 1.0

Дублирует передний объект на каждом выбранном узле других объектов.

---

### Pizza Cutter
**Автор:** hellsfaun | **Версия:** 1.0

Разрезает объект на части (pie или grid).

---

### Shape Scatter
**Автор:** hellsfaun | **Версия:** 1.0

Мгновенное рассеивание клонов фигуры. Авто-определение canvas, сохранение стилей, jitter размера/поворота, предотвращение перекрытий.

---

### Make Button
**Автор:** hellsfaun | **Версия:** 1.0

Мгновенно создаёт скруглённые кнопки за текстовыми слоями с настраиваемой заливкой/обводкой.

---

### Group Cleanup v1.2
**Автор:** hellsfaun, BlackMortimer-13 | **Версия:** 1.2

Удаляет пустые группы и распаковывает одиночные группы.

---

### Empty Clipping Masks
**Автор:** jn-373 | **Версия:** 1.0

Удаляет всех дочерних из каждого выбранного объекта (очистка масок).

---

### Apple Style Squircle Tool
**Автор:** Dan Schumacher | **Версия:** 1.0

Создаёт Squircle из квадратов в стиле Apple App Icons с preview.

---

### Copy Selection to Opposite Page
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Дублирует выделение на противоположную страницу (2↔3, 4↔5, 6↔7...).

---

### Quick Mirror
**Автор:** hellsfaun | **Версия:** 1.0

Зеркалирует слой влево, вправо, вверх или вниз с настраиваемым зазором.

---

### Progressive Transform
**Автор:** WaveF | **Версия:** 1.0

Прогрессивное масштабирование, вращение, цвет и прозрачность по порядку выбора.

---

### Envelope Studio Pro v3
**Автор:** tzvi20 | **Версия:** 3.0

Многоступенчатый warp-движок в стиле Illustrator с origin, direction, falloff, профилями, preview и JSON-пресетами.

---

### Professional Chart Generator v4
**Автор:** Ouriel MAKAYA | **Версия:** 4.0

Генерирует pie- и bar-чарты из CSV-файла.

---

### Rename Artboards
**Автор:** Heitor Hatherly | **Версия:** 1.0

Пакетное переименование артбордов с zero-padding (01, 02...). Для 100+ артбордов — 3-digit padding.

---

### Copy to Artboards
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Дублирует выбранные объекты на все артборды документа.

---

### Artboard Fitter
**Автор:** Heitor Hatherly | **Версия:** 1.0

Подгоняет артборды под содержимое с настраиваемым padding и выбором оси (Height, Width, Both).

---

### SELECT+ v1
**Автор:** EricP | **Версия:** 1.0

Утилита выбора по связям (все слои в группе), содержимому (объекты внутри фигуры), рандомному распределению или паттернам.

---

### Select By Matching Color
**Автор:** kevinblancharddesign-hub | **Версия:** 1.0

Выбирает все объекты с таким же fill/stroke цветом (сравнение в RGBA8).

---

### Aesthetic Colorizer
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Выбирает базовый цвет и мгновенно раскрашивает выделение координированными оттенками.

---

### Duplicate Selection to Opposite Page
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Дублирует выделение на противоположную парную страницу.

---

## Effect

### Zig Zag Effect v2.5
**Автор:** BlackMortimer-13 | **Версия:** 2.5

Трансформирует фигуру/линию в зигзаг-паттерн. Поддерживает amplitude, ridges, smooth wave. Preview обновляется в реальном времени.

**Ключевой паттерн — построение зигзага:**
```js
function buildZigZagPolyCurve(sourcePolyCurve, amp, ridges, smooth) {
  const out = PolyCurve.create();
  for (const curve of sourcePolyCurve) {
    const beziers = [...curve.beziers];
    const tbl = buildArcTable(beziers);
    const totalLen = tbl[tbl.length - 1].cum;
    const peaks = ridges * 2;
    const step = totalLen / peaks;
    
    const builder = CurveBuilder.create();
    builder.beginXY(pts[0].x, pts[0].y);
    
    for (let i = 0; i < count; i++) {
      const { p, g } = sampleAt(tbl, beziers, i * step);
      const sign = i % 2 === 0 ? 1 : -1;
      const pt = { x: p.x + g.nx * amp * sign, y: p.y + g.ny * amp * sign };
      
      if (smooth) {
        builder.addBezierXY(/* control points for smooth curve */);
      } else {
        builder.lineToXY(pt.x, pt.y);
      }
    }
    if (closed) builder.close();
    out.addCurve(builder.createCurve());
  }
  return out;
}
```

---

### Dithering v1
**Автор:** bitmancer | **Версия:** 1.0

Настраиваемый халфтон dithering с 12 алгоритмами.

---

### PuckerBloatEffect v1
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Применяет Pucker & Bloat — затягивает или раздувает anchor points.

---

### Directional Blur Shadow v1.1
**Автор:** rbonelli | **Версия:** 1.1

Направленная тень с прогрессивным размытием, затуханием и сужением.

---

### Roughen Edges v1
**Автор:** Nic Kraneis | **Версия:** 1.0

Шерохование краёв с контролем amplitude, frequency, noise.

---

### Glitch Effect v1
**Автор:** Nic Kraneis | **Версия:** 1.0

Глитч-эффект на векторном объекте.

---

### Twist Effect v2
**Автор:** BlackMortimer-13 | **Версия:** 2.0

Прогрессивное полярное вращение (twist). Подразделяет Безье, скручивает точки по расстоянию от центра, восстанавливает путь.

---

### Vector Lathe (Revolve) v1
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Вращение векторного пути вокруг оси с шейдингом.

---

## Text

### Markdown Import to Text Frame v1
**Автор:** rabidgremlin | **Версия:** 1.0

Импорт Markdown в текстовый фрейм.

---

### Advanced Markdown to Affinity Publisher v5
**Автор:** Torsten Dinkheller | **Версия:** 5.01

Импорт Markdown и трансформация в стилизованный макет Affinity Publisher.

---

### Single-char Linebreak Fix v1
**Автор:** JiriKrblich | **Версия:** 1.0

Замена пробелов после одиночных символов на неразрывные пробелы (славянские языки).

---

### Hanging Chars and Prepositions v1
**Автор:** nodeus | **Версия:** 1.0

Замена пробелов после одиночных символов и предлогов на неразрывные пробелы.

---

### Arabic RTL Pro v1.1
**Автор:** Dimas Nirwan | **Версия:** 1.1

Конвертация арабского текста в визуальный RTL с lam-alef shaping, правым выравниванием, настройками harakat.

---

### Hebrew RTL Flip Helper v1.4
**Автор:** Tzvi20 | **Версия:** 1.4

Исправление проблем с еврейским RTL.

---

### Type Scale Builder v1.2
**Автор:** Seba | **Версия:** 1.2

Генератор модульной типографической шкалы из базового размера. Создаёт specimen с размерами, line-height и preview.

---

### Block Text v1.1
**Автор:** pgraficzny | **Версия:** 1.1

Масштабирует текст по ширине, выравнивает по левому краю, распределяет вертикально.

---

### Smart Quotes Converter v4
**Автор:** MeowWereTalking | **Версия:** 4.0

Заменяет прямые кавычки на типографские smart quotes во всём документе.

---

## Color

### OKLCH Color v1
**Автор:** JiriKrblich | **Версия:** 1.0

Редактирование, вставка и сохранение OKLCH цветов.

---

### ReColorFill v4
**Автор:** BlackMortimer-13 | **Версия:** 4.0

Быстрая замена цвета/градиента заливки выбранных фигур.

---

### ReColorStroke v2
**Автор:** BlackMortimer-13 | **Версия:** 2.0

Быстрая замена цвета/градиента обводки выбранных фигур.

---

### Custom Gradient Map v1
**Автор:** RE4LLY | **Версия:** 1.0

Создание пользовательской карты градиентов из выбранного градиента.

---

### Separate Fill & Stroke v1
**Автор:** BlackMortimer-13 | **Версия:** 1.0

Разделяет комбинированные заливку и обводку в независимые объекты.

---

## Export

### Smart JPEG Export v1
**Автор:** JiriKrblich | **Версия:** 1.0

Экспорт всех/выбранных артбордов, страниц или документов с ограничением максимального размера.

---

### Smart Exporter v1
**Автор:** JiriKrblich | **Версия:** 1.0

Экспорт выбранного артборда/объектов в несколько форматов за один запуск.

---

### Export Carroussel v1.2
**Автор:** rbonelli | **Версия:** 1.2

Экспорт документа как панели карусели заданного размера.

---

### Export DDS v1
**Автор:** jeffthor10 | **Версия:** 1.0

Экспорт в DDS с BC3/DXT5 сжатием и автоматическими mipmaps.

---

### Export Selected Layer as CMYK PSD v1
**Автор:** Paulius Asamoah Sem | **Версия:** 1.0

Экспорт выбранных слоёв как CMYK PSD для печати (DTF).

---

### Combine for Braille v1
**Автор:** BaconThatsIt | **Версия:** 1.0

Объединение текста из всех текстовых фреймов в .txt файл для шрифта Брайля.

---

## Artboards

### Create Carroussel v1.1
**Автор:** rbonelli | **Версия:** 1.1

Создание нового документа для карусели с X панелями и направляющими.

---

### Bento Box Generator v2.4
**Автор:** JiriKrblich | **Версия:** 2.4

Генератор Bento Grid на текущей странице/артборде. Поддерживает Color/Grayscale, live preview, regenerate.

**Ключевой паттерн — рекурсивное разбиение:**
```js
function splitRect(r, doH, minCells, maxSpan) {
  if (doH) {
    const s = flo + Math.floor(Math.random() * (fhi - flo + 1));
    return [
      { col: r.col, row: r.row, w: s, h: r.h },
      { col: r.col + s, row: r.row, w: r.w - s, h: r.h }
    ];
  }
  // Аналогично для вертикального
}
```

---

### Rename Artboards v1
**Автор:** Heitor Hatherly | **Версия:** 1.0

Пакетное переименование с zero-padding.

---

### Artboard Fitter v1
**Автор:** Heitor Hatherly | **Версия:** 1.0

Подгонка артбордов под содержимое.

---

## Print

### Generate Crop Marks v2
**Автор:** sakura, pgraficzny | **Версия:** 2.0

Генерация меток обреза для выбранных объектов и Data Merge Layout сеток. L-shaped угловые метки на слое Production Marks.

---

### Cropmarks v4
**Автор:** Wolfgang Wiesen | **Версия:** 4.0

Метки обреза на 2mm от Trimbox в цвете registration marks.

---

### RGB Finder v1
**Автор:** hrum | **Версия:** 1.0

Поиск всех встроенных и связанных RGB-изображений в CMYK-документе.

---

## Layout

### Swiss Grid Explorer v1.1
**Автор:** Victor Crespo | **Версия:** 1.1

Параметрический генератор сетки для Designer/Publisher/Photo. 6 пресетов (Brockmann, Gerstner, Vignelli, Tschichold, Digital, Slides). Генерирует только native guides.

---

## Path

### Join Paths v1
**Автор:** EricP | **Версия:** 1.0

Соединяет выбранные открытые пути в заданном радиусе. Одним кликом делает один путь из нескольких.

---

## Layer

### Toggle Layer Visibility Across All Pages v1
**Автор:** hrum | **Версия:** 1.0

Переключает видимость слоёв с одинаковым именем на всех страницах.

---

### Move Layer to Top Across All Pages v1
**Автор:** hrum | **Версия:** 1.0

Перемещает слои с одинаковым именем наверх стека на всех страницах.

---

## Randomize Objects v1.0.1
**Автор:** zaum | **Версия:** 1.0.1

Рандомизация размера, позиции, поворота, skew, прозрачности, цвета и обводки. Поддерживает Random/Perlin/Gaussian шум, сохранение настроек в тегах.

**Ключевой паттерн — шумовые функции:**
```js
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

*Каталог основан на registry.json из [Affinity-Community-Scripts](https://github.com/JiriKrblich/Affinity-Community-Scripts).*
