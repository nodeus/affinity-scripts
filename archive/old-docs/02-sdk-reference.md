# Affinity SDK — Полная документация

> JavaScript SDK для Affinity Designer/Photo/Publisher. Извлечено с MCP-сервера.

---

## Введение

Это JavaScript SDK для приложения Affinity by Canva.

### Обязательные правила

1. **Всегда** читайте преамбулу и релевантные файлы документации перед написанием скрипта
2. **Всегда** ищите `search_sdk_hints` перед экспериментами
3. **Всегда** ищите имена всех MCP-инструментов перед началом
4. **Немедленно** вызывайте `add_sdk_hint` после решения проблемы

### Подключения

```js
// Подключение модулей
const { Document } = require('/document');
const { Shape } = require('/shapes');
const { Node } = require('/nodes');
const { app } = require('/application');
```

### Вывод результатов

Скрипт **не возвращает вывод напрямую** — используйте `console.log()`:

```js
console.log(`Результат: ${result}`);
```

### Ограничения

- Файловая система ограничена **Desktop** — используйте `app.userDesktopPath`
- Если команда возвращает `NOT_ALLOWED` — пользователь ограничил доступ
- Скрипт должен быть **прямо выполняемым** (без `module.exports.main`)

### Создание объектов

- Если класс имеет метод `create` или `createDefault` — используйте их
- Иначе используйте `new ClassName()`

### Перечисления (Enums)

Все enum-классы имеют свойства `keys`, `values`, `entries` (НЕ методы!):

```js
const { BlendMode } = require('/commands');
console.log(BlendMode.keys);    // ['Normal', 'Darken', ...]
console.log(BlendMode.values);  // [0, 1, ...]
console.log(BlendMode.entries); // [['Normal', 0], ['Darken', 1], ...]
```

---

## Application (`application.js`)

Singleton-класс для доступа к приложению, документам, UI и настройкам.

### Экспорт

```js
const { app, BuildKind, UiParadigm } = require('/application');
```

### Класс Application

| Свойство/Метод | Описание |
|----------------|----------|
| `documents` | `AppDocuments` — доступ ко всем открытым документам |
| `settings` | `ApplicationSettings` — настройки приложения |
| `alert(message, title)` | Синхронный диалог предупреждения |
| `confirm(message, title)` | Синхронный диалог подтверждения |
| `prompt(message, title, initialText)` | Синхронный ввод текста |
| `chooseFile()` | Синхронный выбор файла |
| `alertAsync(...)` | Асинхронные версии с колбэками |
| `confirmAsync(...)` | Асинхронное подтверждение |
| `promptAsync(...)` | Асинхронный ввод |
| `chooseFileAsync(...)` | Асинхронный выбор файла |
| `compileDate` | Дата компиляции |
| `platformName` | Имя платформы |
| `version` | Версия |
| `shortVersion` | Краткая версия |
| `buildVersion` | Версия сборки |
| `majorVersion` | Мажорная версия |
| `minorVersion` | Минорная версия |
| `revisionVersion` | Версия ревизии |
| `documentVersion` | Версия документа |
| `buildKind` | Тип сборки |
| `productFullName` | Полное имя продукта |
| `productLongName` | Длинное имя продукта |
| `productShortName` | Краткое имя продукта |
| `productCopyrightMessage` | Сообщение об авторском праве |
| `productVersionName` | Имя версии продукта |
| `productPrimaryFileExtension` | Основное расширение файла |
| `suiteFullName` | Полное имя набора |
| `uiParadigm` | Парадигма UI |
| `argC` | Количество аргументов командной строки |
| `argV` | Аргументы командной строки |
| `args` | Массив аргументов |
| `userDesktopPath` | Путь к рабочему столу пользователя |

### AppDocuments

```js
app.documents.all         // все открытые документы
app.documents.current     // текущий активный документ
app.documents.load(path)  // загрузить документ по пути
```

### ApplicationSettings

```js
app.settings.loadPSDWithEditableText  // флаг редактируемого текста PSD
app.settings.undoLimit                // лимит истории отмены
```

### Пример

```js
const { app } = require('/application');

// Информация о приложении
console.log(`Affinity ${app.productFullName} ${app.version}`);
console.log(`Платформа: ${app.platformName}`);

// Рабочий стол
console.log(`Desktop: ${app.userDesktopPath}`);

// Диалог
app.alert('Готово!', 'Результат');
```

---

## Document (`document.js`)

Основной класс документа.

### Экспорт

```js
const {
  ColourSpaceType, Document, DocumentExportRecord, DocumentExportRecords,
  DocumentHistory, DocumentLoadMode, DocumentPreset, DocumentPromises,
  DocumentSnapshot, ErrorCode, FileExportArea, FileExportOptions,
  ImagePlacement, LoadDocumentOptions, NewDocumentOptions,
  PackageResourcesPolicy, RasterFormat, SpatialAnchor, UnitType
} = require('/document');
```

### Ключевые классы

#### DocumentSnapshot
Создание документов из снимков (синхронное/асинхронное).

#### DocumentPreset
Перечисление и настройка пресетов документа (единицы, DPI, поля, обрез, масштаб, цветовой профиль).

#### Layers
Коллекция, перебирающая все слои по страницам.

#### Document
Основной класс с методами:
- Открытие/сохранение/экспорт документов (sync/async/Promise)
- Управление выделением
- Заливки (кисть, перо, прозрачность)
- Стили линий
- Текстовые операции
- Растровое выделение
- Эффекты слоёв
- AI-команды
- Направляющие, фигуры, трансформации, макросы

#### NewDocumentOptions
Настройки создания нового документа.

### AI-команды

```js
const doc = app.documents.current;

// Генерация изображения
doc.generateImage(prompt, options);

// Генеративное редактирование
doc.generativeEditImage(prompt, options);

// Удаление фона
doc.removeBackground();

// Выделение объекта
doc.selectSubject();

// Определение глубины
doc.detectDepth();

// Раскрашивание
doc.colourise();
```

---

## Commands (`commands.js`)

150+ статических фабричных методов для всех операций документа.

### Основные категории команд

#### Выделение
- `createSetSelection` — установить выделение
- `createDeleteSelection` — удалить выделение
- `createHideSelection` — скрыть выделение
- `createSelectAll` — выделить всё
- `createShowAll` — показать всё

#### Трансформации
- `createTransform` — трансформация
- `createSetOpacity` — установить прозрачность
- `createSetBlendMode` — установить режим смешивания
- `createGroupTransform` — групповая трансформация

#### Заливки
- `createSetBrushFill` — заливка кистью
- `createSetPenFill` — заливка пером
- `createSetTransparencyFill` — заливка прозрачностью

#### Линии/Обводка
- `createSetLineStyle` — стиль линии
- `createSetStrokeAlignment` — выравнивание обводки

#### Узлы
- `createMoveNodes` — перемещение узлов
- `createMoveMappedNodes` — перемещение отображённых узлов
- `createConvertToCurves` — конвертация в кривые
- `createRasteriseObjects` — растеризация объектов
- `createFlatten` — сведение
- `createMergeVisible` — слияние видимых

#### Текст
- `createSetText` — установка текста
- `createInsertGlyph` — вставка глифа
- `createFormatText` — форматирование текста

#### Фигуры
- `createSetShape` — установка фигуры
- `createSetShapeFloatParam` — параметр с плавающей точкой
- `createSetShapeIntParam` — целочисленный параметр
- `createSetShapeBoolParam` — булев параметр
- `createSetShapeEnumParam` — параметр перечисления

#### Кривые
- `createSetCurves` — установка кривых
- `createAddCurve` — добавление кривой
- `createAddCurveNode` — добавление узла кривой
- `createSplitCurve` — разделение кривой
- `createKnifeCut` — разрез ножом
- `createScissorCut` — разрез ножницами

#### Фильтры
Gaussian, Box, Bilateral, Median, DiffuseGlow, Field, DepthOfField, Lens, Maximum, Minimum, Motion, Radial, Clarity, UnsharpMask, HighPass, Denoise, Diffuse, DustAndScratch, AddNoise, Bloom, Pixelate, Halftone, Ripple, Twirl, Spherical, PinchPunch, Vignette, Defringe, Voronoi

#### Коррекции
Exposure, Levels, BrightnessContrast, ShadowsHighlights, BlackAndWhite, Recolour, Posterise, SplitToning, Threshold, WhiteBalance, ColourBalance, Vibrance, Normals, SelectiveColour, HSLShift, Curves, ToneCompression, ToneStretch

#### Эффекты слоёв
BevelEmboss, Outline, PhongBevel, InnerShadow, InnerGlow, ColourOverlay, GradientOverlay, OuterGlow, OuterShadow, GaussianBlur

#### Растровое выделение
- `createRasterSelectAll`, `createRasterDeselect`, `createRasterInvertSelection`
- `createSetRasterSelectionFromPolygon`, `createSetRasterSelectionFromObject`
- grow/shrink, feather, smooth, outline

#### AI
- `createGenerateImage`, `createGenerativeEditImage`
- `createDetectDepth`, `createColourise`
- `createRemoveBackground`, `createSelectSubject`

#### Макросы
- `createImportMacro`, `createExportMacro`, `createReplayMacro`
- `createClearMacro`, `createStartRecordingMacro`, `createStopRecordingMacro`

#### Направляющие
- `createAddGuide`, `createMoveGuide`, `createRemoveGuide`, `createSetGuidesColour`

#### Снимки
- `createAddDocumentSnapshot`, `createDeleteDocumentSnapshot`, `createRestoreDocumentSnapshot`

#### Документ
- `createSetDocumentUnits`, `createSetDocumentProperties`
- `createConvertDocumentFormat`, `createSetCurrentSpread`

#### Артборды/Страницы
- `createAddArtboard`, `createSetSpreadSizeWithAnchor`, `createSetArtboardSizeWithAnchor`

#### Теги
- `createSetTagColour`, `createSetTagValueForKey`, `createSetTagValueForPredefinedKey`

#### Встроенное
- видимость, выбор артборда/страницы, ограничивающий прямоугольник, PDF passthrough

#### История
- `createUndo`, `createRedo`, `createSetHistoryIndex`, `createCycleAlternateFutures`

#### Трассировка
- `createImageTrace`

#### Смешивание
- `createSetBlendGamma`, `createSetBlendRanges`

#### Направление обхода
- `createSetWindingMode`

---

## Geometry (`geometry.js`)

Геометрические типы из `affinity:geometry`.

### Базовые типы

| Тип | Описание |
|-----|----------|
| `Transform` | 2D аффинные трансформации |
| `CubicBezier` | Кубические сегменты Безье |
| `Curve` | Путь с узлами и Безье |
| `CurveNode` | Метаданные узла кривой |
| `PolyCurve` | Последовательности кривых |
| `PolyPolyCurve` | Коллекции поликривых (составные пути) |
| `Point` | Точка |
| `Vector` | Вектор |
| `Rectangle` | Прямоугольник |
| `Size` / `SizeInt` | Размер |
| `Polygon` | Многоугольник |
| `Spline` | Сплайн |
| `WindingOrder` | Направление обхода |

### Transform

```js
// Статические фабрики
Transform.createIdentity();
Transform.createTranslate(x, y);
Transform.createRotate(angle);
Transform.createScale(sx, sy);
Transform.createShear(shx, shy);

// Изменяющие методы
transform.translate(x, y);
transform.rotate(angle);
transform.scale(sx, sy);
transform.shear(shx, shy);
transform.invert();
transform.compose(other);

// Неизменяющие методы
transform.clone();
transform.scaled(sx, sy);
transform.rotated(angle);

// Свойства
transform.xAxis;
transform.yAxis;
transform.origin;
transform.inverted;
```

### CurveBuilder

```js
const { CurveBuilder } = require('/geometry');

const builder = CurveBuilder.create();
builder.begin(x, y);        // начать путь
builder.lineTo(x, y);       // линия к точке
builder.lineRelative(dx, dy); // линия относительно
builder.addArc(...);         // дуга
builder.addBezier(...);      // Безье
builder.addEllipse(...);     // эллипс
builder.close();             // закрыть путь
const curve = builder.createCurve();
```

### Curve

```js
// Статические фабрики
Curve.createLine(start, end);
Curve.createRectangle(rect);
Curve.createEllipse(center, radiusX, radiusY);
Curve.createDiamond(center, width, height);
Curve.createLozenge(center, width, height);

// Доступ к точкам
curve.getPoint(index);
curve.setPoint(index, point);
curve.points;

// Запросы
curve.pointCount;
curve.nodeCount;
curve.isClosed;
curve.isClockwise;
curve.length;
curve.beziers;

// Операции
curve.boundingBox;
curve.cut(t);
curve.transform(transform);
```

### Утилиты

```js
const { rangesIntersect, intersectRanges, rectsIntersect, unionRanges, valueInRange, pointInRect } = require('/geometry');
```

---

## Nodes (`nodes.js`)

Базовый класс для всех узлов (слоёв) в документе.

### Ключевые свойства

- `name` — имя узла
- `visible` — видимость
- `locked` — блокировка
- `opacity` — прозрачность
- `blendMode` — режим смешивания
- `bounds` — ограничивающий прямоугольник
- `parent` — родительский узел
- `children` — дочерние узлы

### Методы

- `addChild(node)` — добавить дочерний узел
- `removeChild(node)` — удалить дочерний узел
- `insertChild(index, node)` — вставить дочерний узел
- `clone()` — клонировать узел
- `transform(transform)` — применить трансформацию

---

## Shapes (`shapes.js`)

Создание и управление геометрическими фигурами.

### Статические фабрики

```js
const { Shape } = require('/shapes');

// Прямоугольники
Shape.createRectangle(spread);
Shape.createRoundedRectangle(spread);
Shape.createSquare(spread);
Shape.createRoundedSquare(spread);

// Эллипсы
Shape.createEllipse(spread);

// Многоугольники
Shape.createPolygon(spread);
Shape.createStar(spread);
Shape.createTriangle(spread);
Shape.createDiamond(spread);
Shape.createLozenge(spread);

// Стрелки
Shape.createArrow(spread);
Shape.createDoubleArrow(spread);

// Кривые
Shape.createSpiral(spread);
Shape.createCloud(speech);
Shape.createHeart(spread);
Shape.createLightning(spread);
```

### Параметры фигур

```js
const rect = Shape.createRectangle(spread);
rect.width = 200;
rect.height = 100;
rect.cornerRadius = 10; // скругление углов

const star = Shape.createStar(spread);
star.points = 5;        // количество лучей
star.innerRadius = 0.5; // внутренний радиус
```

---

## Colours (`colours.js`)

Работа с цветами и градиентами.

### Цветовые пространства

```js
const { Colour, Gradient, SVG11 } = require('/colours');

// Создание цветов
RGB8(r, g, b);
RGBA8(r, g, b, a);
RGB16(r, g, b);
RGBA16(r, g, b, a);
RGBAuf(r, g, b, a);    // unorm float
I8(i);                  // интенсивность
IA8(i, a);
CMYK8(c, m, y, k);
CMYKA8(c, m, y, k, a);
CMYKf(c, m, y, k);     // float
CMYKAf(c, m, y, k, a);
LAB16(l, a, b);
LABA16(l, a, b, a);
HSLf(h, s, l);
HSLAf(h, s, l, a);
```

### SVG11

Все именованные цвета SVG 1.1:

```js
SVG11.crimson;     // Crimson
SVG11.dodgerblue;  // DodgerBlue
SVG11.random();    // случайный SVG цвет
```

### Градиенты

```js
const stops = [
  { colour: RGBA8(255, 0, 0, 255), offset: 0 },
  { colour: RGBA8(0, 0, 255, 255), offset: 1 }
];
const gradient = Gradient.create(stops);
```

### ColourProfile

```js
ColourProfile.find('sRGB');
ColourProfile.getAll();
ColourProfile.getDefaultForColourSpace(colourSpace);
ColourProfile.getDefaultForFormat(format);
ColourProfile.enumerateProfiles();
```

---

## Network (`network.js`)

HTTP-запросы из скриптов.

### Пример

```js
const { HttpRequest, RequestMethod } = require('network.js');

const request = HttpRequest.create('https://api.example.com/data', RequestMethod.GET);
request.setTimeoutInSec(30);
request.setHeaderValue('Authorization', 'Bearer token123');

const { response } = request.do();
console.log(`Status: ${response.statusCode}`);
console.log(`Body: ${response.content}`);
```

### HttpRequest

| Метод | Описание |
|-------|----------|
| `create(url, method)` | Фабричный метод |
| `setTimeoutInSec(timeout)` | Таймаут запроса |
| `setHeaderValue(key, val)` | Установить заголовок |
| `getHeaderValue(key)` | Получить заголовок |
| `do()` | Синхронный запрос |
| `doAsync(callback)` | Асинхронный запрос |

### HttpResponse

| Свойство/Метод | Описание |
|----------------|----------|
| `statusCode` | HTTP-статус |
| `getHeaderValue(key)` | Заголовок ответа |
| `content` | Тело ответа |

---

## Collection (`collection.js`)

Ленивые итерируемые коллекции.

### Статические фабрики

```js
const { Collection } = require('/collection');

Collection.empty();                    // пустая коллекция
Collection.of(1, 2, 3);               // из значений
Collection.over(iterable);             // из итератора
Collection.range(0, 10);              // диапазон [0, 10)
Collection.random();                   // бесконечная случайная
Collection.fibonacci();               // числа Фибоначчи
```

### Трансформации

```js
collection.append(item);       // добавить
collection.filter(fn);         // фильтрация
collection.map(fn);            // отображение
collection.flat();             // развернуть
collection.reverse();          // развернуть порядок
collection.skip(n);            // пропустить n
collection.take(n);            // взять n
collection.skipWhile(fn);      // пропускать пока
collection.takeWhile(fn);      // брать пока
collection.repeat(n);          // повторить n раз
collection.repeatForever();    // бесконечное повторение
collection.lastN(n);           // последние n
```

### Запросы

```js
collection.all();              // все элементы
collection.any();              // есть ли элементы
collection.first;              // первый элемент
collection.last;               // последний элемент
collection.length;             // количество
collection.isEmpty;            // пуста ли
collection.at(index);          // элемент по индексу
collection.countIf(fn);        // подсчёт по условию
```

### Терминальные

```js
collection.forEach(fn);        // для каждого
collection.reduce(fn, init);   // редукция
collection.join(sep);          // в строку
collection.toArray();          // в массив
```

---

## File System (`fs.js`)

Работа с файловой системой (ограничено Desktop).

```js
const { File, Directory, FileSystemPromises } = require('fs.js');

// Путь к рабочему столу
const desktop = app.userDesktopPath;

// Чтение файла
const file = File.open(`${desktop}/data.txt`, 'r');
const content = file.readAll();
file.close();

// Запись файла
const outFile = File.open(`${desktop}/output.txt`, 'w');
outFile.write('Hello, World!');
outFile.close();

// Директории
const dir = new Directory(`${desktop}/myFolder`);
dir.create();
```

---

## Buffer (`buffer.js`)

Работа с буферами данных.

```js
const { Buffer } = require('/buffer');

// Создание
const buf = Buffer.create(1024);         // новый буфер
const str16 = Buffer.utf16('Hello');     // из строки UTF-16
const str8 = Buffer.utf8('Hello');       // из строки UTF-8

// Операции
buf.clone();
buf.span(0, 10);     // представление
buf.slice(0, 10);    // копия части
buf.equals(other);
buf.compare(other);
buf.toString('utf8');
buf.concat(other);
buf.reverse();

// Свойства
buf.size;             // размер в байтах
buf.length;           // размер в байтах
buf.arrayBuffer;      // ArrayBuffer
buf.array;            // Uint8Array
```

---

## Timers (`timer.js`)

Таймеры и асинхронные операции.

```js
// setTimeout (одноразовый)
setTimeout(1000, (errorCode, ...args) => {
  console.log('Прошло 1 секунду');
});

// setInterval (повторяющийся)
setInterval(500, (errorCode, ...args) => {
  console.log('Каждые 500мс');
});

// Timer API
const { Timer } = require('/timer');
const timer = Timer.create();
timer.expiryFromNow = 2000; // 2 секунды
timer.waitAsync((errorCode) => {
  console.log('Таймер сработал');
});
```

---

## Dialog (`dialog.js`)

Создание пользовательского интерфейса.

```js
// Создание диалога
const dialog = Dialog.create();
dialog.title = 'Настройки';
dialog.message = 'Выберите параметры';

// Добавление элементов
dialog.addTextField('name', 'Имя:', '');
dialog.addDropDown('color', 'Цвет:', ['Красный', 'Синий', 'Зелёный']);
dialog.addCheckBox('save', 'Сохранить', true);

// Показ диалога
const result = dialog.show();
if (result) {
  console.log(`Имя: ${dialog.value('name')}`);
  console.log(`Цвет: ${dialog.value('color')}`);
}
```
