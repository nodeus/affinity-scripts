# Affinity Scripting — Полный учебник

> Комплексное руководство по скриптингу в Affinity Designer/Photo/Publisher. Основано на полной документации MCP-сервера.

---

## Содержание

1. [Введение](#1-введение)
2. [Первый скрипт](#2-первый-скрипт)
3. [Application](#3-application)
4. [Document](#4-document)
5. [Геометрия](#5-геометрия)
6. [Фигуры (Shapes)](#6-фигуры-shapes)
7. [Узлы (Nodes)](#7-узлы-nodes)
8. [Цвета](#8-цвета)
9. [Команды](#9-команды)
10. [Текст](#10-текст)
11. [Эффекты слоёв](#11-эффекты-слоёв)
12. [AI-команды](#12-ai-команды)
13. [Диалоги](#13-диалоги)
14. [Файловая система](#14-файловая-система)
15. [Сеть](#15-сеть)
16. [Таймеры](#16-таймеры)
17. [Буферы](#17-буферы)
18. [Коллекции](#18-коллекции)
19. [Практические примеры](#19-практические-примеры)

---

## 1. Введение

### Что такое Affinity Scripting?

Affinity Scripting — это JavaScript SDK для автоматизации работы с Affinity Designer, Photo и Publisher. Скрипты выполняются внутри приложения и имеют доступ к документам, слоям, фигурам, цветам и другим объектам.

### Установка

Скриптинг встроен в Affinity. Доступ через MCP-сервер:

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

### Основные правила

1. **Всегда** читайте преамбулу перед написанием скрипта
2. **Всегда** ищите `search_sdk_hints` перед экспериментами
3. **Немедленно** вызывайте `add_sdk_hint` после решения проблемы
4. Используйте `console.log()` для вывода результатов
5. Скрипт должен быть **прямо выполняемым** (без `module.exports.main`)
6. Файловая система ограничена **Desktop** (`app.userDesktopPath`)

### Подключение модулей

```js
const { app } = require('/application');
const { Document } = require('/document');
const { Shape } = require('/shapes');
const { Node } = require('/nodes');
const { Colour, SVG11 } = require('/colours');
```

---

## 2. Первый скрипт

### Hello World

```js
console.log(`Affinity ${app.productFullName} ${app.version}`);
console.log(`Платформа: ${app.platformName}`);
console.log(`Desktop: ${app.userDesktopPath}`);
```

### Создание документа

```js
const { Document, NewDocumentOptions } = require('/document');

// Создать новый документ
const options = NewDocumentOptions.create();
options.width = 1920;
options.height = 1080;
options.dpi = 72;

const doc = Document.createWithSize(options);
console.log(`Создан документ: ${doc.name}`);
```

### Добавление фигуры

```js
const { Shape } = require('/shapes');

const doc = app.documents.current;
const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Создать прямоугольник
const rect = Shape.createRectangle(spread);
rect.width = 200;
rect.height = 100;

console.log(`Прямоугольник: ${rect.width}x${rect.height}`);
```

### Визуализация результата

```js
// Через MCP-инструмент
// affinity_render_spread(document_session_uuid="...", spread_index=0)
```

---

## 3. Application

Singleton-класс для доступа к приложению.

### Получение singleton

```js
const { app } = require('/application');
```

### Информация о приложении

```js
console.log(`Версия: ${app.version}`);
console.log(`Платформа: ${app.platformName}`);
console.log(`Полное имя: ${app.productFullName}`);
console.log(`Краткое имя: ${app.productShortName}`);
console.log(`Дата компиляции: ${app.compileDate}`);
console.log(`Тип сборки: ${app.buildKind}`);
```

### Работа с документами

```js
// Все открытые документы
const docs = app.documents.all;
console.log(`Открыто документов: ${docs.length}`);

// Текущий документ
const current = app.documents.current;

// Загрузить документ
const loaded = app.documents.load(`${app.userDesktopPath}/file.afdesign`);
```

### Диалоги

```js
// Синхронные
app.alert('Сообщение', 'Заголовок');
const confirmed = app.confirm('Вы уверены?', 'Подтверждение');
const text = app.prompt('Введите текст:', 'Ввод', 'По умолчанию');
const file = app.chooseFile();

// Асинхронные
app.alertAsync('Сообщение', 'Заголовок', (result) => {
  console.log('Диалог закрыт');
});

app.promptAsync('Введите:', 'Ввод', '', (result, text) => {
  console.log(`Введено: ${text}`);
});
```

### Настройки

```js
// Лимит отмены
console.log(`Лимит отмены: ${app.settings.undoLimit}`);

// PSD настройки
app.settings.loadPSDWithEditableText = true;
```

---

## 4. Document

Основной класс для работы с документами.

### Получение текущего документа

```js
const doc = app.documents.current;
```

### Свойства документа

```js
console.log(`Имя: ${doc.name}`);
console.log(`Путь: ${doc.path}`);
console.log(`Размер: ${doc.width}x${doc.height}`);
console.log(`DPI: ${doc.dpi}`);
```

### Страницы (Spreads)

```js
// Все страницы
const spreads = doc.spreads;
console.log(`Страниц: ${spreads.length}`);

// Текущая страница
const currentSpread = doc.currentSpread;

// Установить текущую страницу
doc.executeCommand(DocumentCommand.createSetCurrentSpread(doc.spreads.first));

// Добавить страницу
doc.addSpread();

// Удалить страницу
doc.removeSpread(doc.spreads.last);
```

### Выделение

```js
// Получить выделение
const selection = doc.selection;

// Установить выделение
doc.setSelection(node);

// Выделить всё
doc.selectAll();

// Удалить выделение
doc.deleteSelection();
```

### Сохранение и экспорт

```js
// Сохранить
doc.save();

// Сохранить как
doc.saveAs(`${app.userDesktopPath}/output.afdesign`);

// Экспорт
doc.export('${app.userDesktopPath}/output.png', exportOptions);
```

### История (Undo/Redo)

```js
// Отменить
doc.undo();

// Повторить
doc.redo();

// Количество шагов отмены
console.log(`Шагов отмены: ${doc.history.count}`);
```

### Снимки (Snapshots)

```js
// Добавить снимок
doc.addDocumentSnapshot('Моё состояние');

// Восстановить снимок
doc.restoreDocumentSnapshot(0);

// Удалить снимок
doc.deleteDocumentSnapshot(0);
```

---

## 5. Геометрия

### Точки и векторы

```js
const { Point, Vector, Rectangle, Size } = require('/geometry');

// Точка
const pt = new Point(100, 200);
console.log(`x: ${pt.x}, y: ${pt.y}`);

// Вектор
const vec = new Vector(1, 0);

// Прямоугольник
const rect = new Rectangle(0, 0, 1920, 1080);
console.log(`Ширина: ${rect.width}, Высота: ${rect.height}`);

// Размер
const size = new Size(100, 200);
```

### Трансформации

```js
const { Transform } = require('/geometry');

// Создание трансформаций
const identity = Transform.createIdentity();
const translate = Transform.createTranslate(100, 50);
const rotate = Transform.createRotate(Math.PI / 4); // 45 градусов
const scale = Transform.createScale(2, 2);
const shear = Transform.createShear(0.1, 0);

// Применение трансформаций
const transform = Transform.createIdentity()
  .translate(100, 50)
  .rotate(Math.PI / 4)
  .scale(2, 2);

// Инвертирование
const inverse = transform.inverted;

// Композиция
const composed = Transform.multiply(transformA, transformB);

// Применение к точке
const transformedPoint = transform.applyToPoint(point);
```

### Кривые (Curves)

```js
const { Curve, CurveBuilder, CubicBezier } = require('/geometry');

// Создание кривой из точек
const builder = CurveBuilder.create();
builder.beginXY(0, 0);
builder.lineToXY(100, 0);
builder.lineToXY(100, 100);
builder.close();
const curve = builder.createCurve();

// Создание прямоугольной кривой
const rect = new Rectangle(0, 0, 200, 100);
const rectCurve = Curve.createRectangle(rect);

// Создание эллиптической кривой
const ellipseCurve = Curve.createEllipse(new Rectangle(0, 0, 200, 100));

// Создание линии
const line = Curve.createLineXY(0, 0, 100, 100);

// Работа с точками
console.log(`Количество точек: ${curve.pointCount}`);
const point = curve.getPoint(0);
curve.setPoint(0, new Point(50, 50));

// Безье
const bezier = curve.getCubicBezier(0);
const pointOnCurve = bezier.evaluate(0.5); // 50% вдоль кривой
```

### Поликривые (PolyCurves)

```js
const { PolyCurve, PolyPolyCurve } = require('/geometry');

// Поликривая — последовательность кривых
const polyCurve = PolyCurve.create();
polyCurve.addCurve(curve1);
polyCurve.addCurve(curve2);

// Составная поликривая (Compound Path)
const polyPolyCurve = new PolyPolyCurve();
polyPolyCurve.addRectangle(rect1);
polyPolyCurve.addPolyCurve(polyCurve1);

// Проверка точек
const contains = polyPolyCurve.containsPoint(point);
const near = polyPolyCurve.isNearPoint(point, 0.1, 0.1, 0.5);
```

### Сплайны

```js
const { Spline } = require('/geometry');

const spline = Spline.create();
spline.insertPoint(new Point(0, 0));
spline.insertPoint(new Point(50, 100));
spline.insertPoint(new Point(100, 0));
spline.isLinear = false; // криволинейный
```

---

## 6. Фигуры (Shapes)

### Создание фигур

```js
const { Shape } = require('/shapes');

const doc = app.documents.current;
const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Прямоугольники
const rect = Shape.createRectangle(spread);
const roundRect = Shape.createRoundedRectangle(spread);
const square = Shape.createSquare(spread);

// Эллипсы
const ellipse = Shape.createEllipse(spread);

// Многоугольники
const polygon = Shape.createPolygon(spread);
const star = Shape.createStar(spread);
const triangle = Shape.createTriangle(spread);
const diamond = Shape.createDiamond(spread);

// Специальные фигуры
const heart = Shape.createHeart(spread);
const cloud = Shape.createCloud(spread);
const arrow = Shape.createArrow(spread);
const spiral = Shape.createSpiral(spread);

// QR-код
const qr = Shape.createQRCode(spread);
```

### Параметры фигур

```js
// Прямоугольник с параметрами
const rect = Shape.createRectangle(spread);
rect.width = 200;
rect.height = 100;
rect.absoluteSizes = true; // абсолютные размеры

// Скругление углов
rect.topLeft.setRadius(10, rect.width, rect.height);
rect.topRight.setRadius(10, rect.width, rect.height);
rect.bottomLeft.setRadius(10, rect.width, rect.height);
rect.bottomRight.setRadius(10, rect.width, rect.height);

// Использовать один радиус для всех углов
rect.useSingleRadius = true;
rect.topLeft.setRadius(10, rect.width, rect.height);

// Звезда
const star = Shape.createStar(spread);
star.points = 5;           // количество лучей
star.innerRadius = 0.5;    // внутренний радиус
star.leftCurve = 0.3;      // кривизна левого края
star.rightCurve = 0.3;     // кривизна правого края
star.curvedEdges = true;   // криволинейные края

// Полигон
const polygon = Shape.createPolygon(spread);
polygon.sides = 6;         // количество сторон
polygon.curve = 0.5;       // кривизна сторон
polygon.smoothPoints = true; // сглаженные вершины

// Спираль
const spiral = Shape.createSpiral(spread);
spiral.turns = 5;          // количество витков
spiral.decay = 0.5;        // затухание
spiral.style = ShapeSpiralStyle.Logarithmic;

// Сердце
const heart = Shape.createHeart(spread);
heart.spread = 0.5;        // ширина

// Облако
const cloud = Shape.createCloud(spread);
cloud.bubbles = 8;         // количество «пузырей»
cloud.innerRadius = 0.5;   // внутренний радиус

// Шестерёнка
const cog = Shape.createCog(spread);
cog.teeth = 8;             // количество зубьев
cog.innerRadius = 0.7;     // внутренний радиус
cog.holeRadius = 0.3;      // радиус отверстия
cog.toothSize = 0.2;       // размер зуба
cog.notchSize = 0.1;       // размер выемки
cog.curvature = 0.5;       // кривизна

// QR-код
const qr = Shape.createQRCode(spread);
const payload = QRPayloadURL.create();
payload.url = 'https://example.com';
qr.payload = payload;
```

### Типы QR-кодов

```js
const { QRPayload } = require('/shapes');

// URL
const urlPayload = QRPayloadURL.create();
urlPayload.url = 'https://example.com';

// Email
const emailPayload = QRPayloadEmail.create();
emailPayload.address = 'user@example.com';
emailPayload.subject = 'Тема';
emailPayload.body = 'Текст письма';

// Телефон
const phonePayload = QRPayloadPhone.create();
phonePayload.number = '+1234567890';

// SMS
const smsPayload = QRPayloadSMS.create();
smsPayload.number = '+1234567890';
smsPayload.content = 'Текст сообщения';

// Текст
const textPayload = QRPayloadText.create();
textPayload.text = 'Простой текст';

// WiFi
const wifiPayload = QRPayloadWifi.create();
wifiPayload.ssid = 'MyNetwork';
wifiPayload.password = 'password123';
wifiPayload.encryption = WifiEncryptionType.WPA;

// VCard
const vcardPayload = QRPayloadVCard.create();
vcardPayload.firstName = 'Иван';
vcardPayload.lastName = 'Петров';
vcardPayload.email = 'ivan@example.com';
vcardPayload.phone = '+1234567890';
vcardPayload.company = 'Компания';

// WhatsApp
const whatsappPayload = QRPayloadWhatsApp.create();
whatsappPayload.number = '+1234567890';
whatsappPayload.content = 'Привет!';

// FaceTime
const facetimePayload = QRPayloadFaceTime.create();
facetimePayload.recipient = 'user@example.com';

// Геолокация
const locationPayload = QRPayloadLocation.create();
locationPayload.latitude = 55.7558;
locationPayload.longitude = 37.6173;
locationPayload.elevation = 150;
```

---

## 7. Узлы (Nodes)

### Базовый класс Node

```js
const { Node } = require('/nodes');

// Получение узла
const node = doc.selection.first;

// Свойства
console.log(`Имя: ${node.name}`);
console.log(`Видимый: ${node.visible}`);
console.log(`Заблокирован: ${node.locked}`);
console.log(`Прозрачность: ${node.opacity}`);
console.log(`Режим смешивания: ${node.blendMode}`);

// Навигация
const parent = node.parent;
const firstChild = node.firstChild;
const lastChild = node.lastChild;
const nextSibling = node.nextSibling;
const previousSibling = node.previousSibling;

// Дочерние узлы
const children = node.children;
children.forEach(child => {
  console.log(`Дочерний: ${child.name}`);
});

// Рекурсивный перебор
const allDescendants = node.children.all;
allDescendants.forEach(descendant => {
  console.log(`Потомок: ${descendant.name}`);
});
```

### Типы узлов

```js
const { 
  ShapeNode, ImageNode, FrameTextNode, GroupNode,
  ContainerNode, EmbeddedDocumentNode
} = require('/nodes');

// ShapeNode — узел с фигурой
const shapeNode = node; // если это фигура

// ImageNode — узел с изображением
const imageNode = node; // если это изображение

// FrameTextNode — текстовый фрейм
const textNode = node; // если это текст

// GroupNode — группа
const groupNode = node; // если это группа

// ContainerNode — контейнер
const containerNode = node; // если это контейнер
```

### Создание узлов

```js
// Группа
const group = doc.addGroup();
group.name = 'Моя группа';

// Текстовый фрейм
const textFrame = doc.addFrameText();
textFrame.name = 'Текстовый фрейм';

// Вставка изображения
const image = doc.addImageFromFile(`${app.userDesktopPath}/image.png`);
```

### Трансформации узлов

```js
// Перемещение
node.x = 100;
node.y = 200;

// Размер
node.width = 300;
node.height = 200;

// Вращение (в радианах)
node.rotation = Math.PI / 4; // 45 градусов

// Отражение
node.horizontalFlip = true;
node.verticalFlip = false;

// Центр вращения
node.transformOriginX = 0.5; // центр
node.transformOriginY = 0.5;
```

---

## 8. Цвета

### Создание цветов

```js
const { Colour, RGBA8, RGB8, CMYK8, HSLf, SVG11 } = require('/colours');

// RGBA (0-255)
const red = RGBA8(255, 0, 0, 255);
const semiTransparent = RGBA8(0, 128, 255, 128);

// RGB (0-255)
const blue = RGB8(0, 0, 255);

// CMYK (0-255)
const cyan = CMYK8(255, 0, 0, 0);

// HSL (0-1 для S и L, 0-360 для H)
const green = HSLf(120, 1.0, 0.5);

// SVG именованные цвета
const crimson = SVG11.crimson;
const dodgerblue = SVG11.dodgerblue;
const random = SVG11.random(); // случайный SVG цвет
```

### Работа с цветами

```js
// Клонирование
const clone = red.clone();

// Конвертация профилей
const cmyk = red.convertProfile(CMYKProfile);

// Свойства
console.log(`Альфа: ${red.alpha}`);
console.log(`Интенсивность: ${red.intensity}`);
```

### Градиенты

```js
const { Gradient } = require('/colours');

const stops = [
  { colour: RGBA8(255, 0, 0, 255), offset: 0 },
  { colour: RGBA8(0, 0, 255, 255), offset: 1 }
];
const gradient = Gradient.create(stops);
```

### Цветовые профили

```js
const { ColourProfile } = require('/colours');

const sRGB = ColourProfile.find('sRGB');
const allProfiles = ColourProfile.getAll();
const defaultProfile = ColourProfile.getDefaultForColourSpace(ColourSpaceType.RGB);
```

---

## 9. Команды

### Основной класс Command

```js
const { DocumentCommand } = require('/commands');
```

### Выделение

```js
// Выделить всё
doc.selectAll();

// Удалить выделение
doc.deleteSelection();

// Скрыть выделение
doc.hideSelection();

// Показать всё
doc.showAll();
```

### Трансформации

```js
// Установить прозрачность
node.opacity = 0.5;

// Установить режим смешивания
node.blendMode = BlendMode.Multiply;

// Групповая трансформация
doc.groupTransform(nodes, transform);
```

### Заливки

```js
// Заливка кистью
doc.setBrushFill(brush);

// Заливка пером
doc.setPenFill(colour);

// Заливка прозрачностью
doc.setTransparencyFill(transparency);
```

### Текст

```js
// Установить текст
textFrame.setText('Привет, мир!');

// Вставить глиф
textFrame.insertGlyph(glyphIndex);

// Форматировать текст
textFrame.formatText(startIndex, endIndex, attributes);
```

### Кривые

```js
// Конвертация в кривые
doc.convertToCurves(node);

// Разделение кривой
const { curveA, curveB } = curve.cut(false, 0.5);

// Разрез ножом
doc.knifeCut(cutLine);

// Разрез ножницами
doc.scissorCut(cutLine);
```

### Фильтры

```js
// Гауссово размытие
doc.addFilterRaster(node, FilterType.GaussianBlur, { radius: 5 });

// Резкость
doc.addFilterRaster(node, FilterType.UnsharpMask, { amount: 1.5 });

// Пикселизация
doc.addFilterRaster(node, FilterType.Pixelate, { size: 10 });
```

### Коррекции

```js
// Яркость/контраст
doc.addAdjustmentRaster(node, AdjustmentType.BrightnessContrast, {
  brightness: 0.2,
  contrast: 0.5
});

// Уровни
doc.addAdjustmentRaster(node, AdjustmentType.Levels, {
  blackPoint: 0,
  whitePoint: 255,
  gamma: 1.0
});

// Кривые
doc.addAdjustmentRaster(node, AdjustmentType.Curves, {
  points: [{x: 0, y: 0}, {x: 0.5, y: 0.7}, {x: 1, y: 1}]
});
```

### Направляющие

```js
// Добавить направляющую
doc.addGuide({ position: 100, orientation: Orientation.Horizontal });

// Удалить направляющую
doc.removeGuide(guide);

// Переместить направляющую
guide.position = 200;
```

---

## 10. Текст

### Создание текста

```js
const { FrameText, StoryBuilder } = require('/story');

// Простой текст
const textFrame = doc.addFrameText();
textFrame.setText('Привет, мир!');

// Форматированный текст
const builder = new StoryBuilder();
builder.appendText('Жирный текст', { bold: true });
builder.appendText(' и ');
builder.appendText('курсив', { italic: true });
textFrame.setStory(builder.build());
```

### Атрибуты текста

```js
const { GlyphAtts, ParagraphAtts } = require('/glyphatts');

// Атрибуты глифов
const glyphAtts = new GlyphAtts();
glyphAtts.bold = true;
glyphAtts.italic = false;
glyphAtts.underline = true;
glyphAtts.strikethrough = false;
glyphAtts.fontSize = 24;
glyphAtts.fontFamily = 'Arial';
glyphAtts.colour = RGBA8(255, 0, 0, 255);

// Атрибуты абзаца
const paraAtts = new ParagraphAtts();
paraAtts.alignment = ParagraphAlignment.Center;
paraAtts.leftIndent = 20;
paraAtts.rightIndent = 20;
paraAtts.spaceBefore = 10;
paraAtts.spaceAfter = 10;
```

### Шрифты

```js
const { Fonts } = require('/fonts');

// Получить список шрифтов
const fonts = Fonts.getAll();
fonts.forEach(font => {
  console.log(`Шрифт: ${font.family}`);
});

// Найти шрифт
const arial = Fonts.find('Arial');
```

---

## 11. Эффекты слоёв

### Добавление эффектов

```js
const { LayerEffects } = require('/layereffects');

// Тень
doc.addLayerEffect(node, LayerEffectType.InnerShadow, {
  colour: RGBA8(0, 0, 0, 128),
  offset: 5,
  blur: 10,
  opacity: 0.5
});

// Свечение
doc.addLayerEffect(node, LayerEffectType.OuterGlow, {
  colour: RGBA8(255, 255, 0, 255),
  blur: 20,
  opacity: 0.8
});

// Барельеф
doc.addLayerEffect(node, LayerEffectType.BevelEmboss, {
  style: BevelEmbossStyle.Inner,
  technique: BevelEmbossTechnique.Smooth,
  depth: 100,
  size: 5,
  soften: 2
});

// Обводка
doc.addLayerEffect(node, LayerEffectType.Outline, {
  colour: RGBA8(0, 0, 0, 255),
  width: 2,
  alignment: OutlineAlignment.Outside
});

// Наложение цвета
doc.addLayerEffect(node, LayerEffectType.ColourOverlay, {
  colour: RGBA8(255, 0, 0, 255),
  opacity: 0.5
});

// Наложение градиента
doc.addLayerEffect(node, LayerEffectType.GradientOverlay, {
  gradient: gradient,
  opacity: 0.8
});

// Гауссово размытие
doc.addLayerEffect(node, LayerEffectType.GaussianBlur, {
  radius: 5
});
```

### Управление эффектами

```js
// Получить эффекты
const effects = node.layerEffects;

// Включить/выключить эффект
effects.innerShadow.enabled = true;
effects.outerGlow.enabled = false;

// Удалить эффект
effects.removeEffect(LayerEffectType.InnerShadow);
```

---

## 12. AI-команды

### Генерация изображений

```js
// Генерация изображения по описанию
const imageNode = doc.generateImage('Красный закат над морем', {
  width: 1024,
  height: 768
});
```

### Генеративное редактирование

```js
// Редактирование существующего изображения
doc.generativeEditImage(imageNode, 'Добавить птиц на небе');
```

### Удаление фона

```js
doc.removeBackground(imageNode);
```

### Выделение объекта

```js
doc.selectSubject(imageNode);
```

### Определение глубины

```js
const depthMap = doc.detectDepth(imageNode);
```

### Раскрашивание

```js
doc.colourise(imageNode);
```

---

## 13. Диалоги

### Создание диалога

```js
const { Dialog } = require('/dialog');

const dialog = Dialog.create();
dialog.title = 'Настройки';
dialog.message = 'Выберите параметры';

// Добавление элементов
dialog.addTextField('name', 'Имя:', '');
dialog.addDropDown('color', 'Цвет:', ['Красный', 'Синий', 'Зелёный']);
dialog.addCheckBox('save', 'Сохранить', true);
dialog.addSlider('opacity', 'Прозрачность:', 0, 100, 50);

// Показ диалога
const result = dialog.show();
if (result) {
  const name = dialog.value('name');
  const color = dialog.value('color');
  const save = dialog.value('save');
  const opacity = dialog.value('opacity');
  
  console.log(`Имя: ${name}`);
  console.log(`Цвет: ${color}`);
  console.log(`Сохранить: ${save}`);
  console.log(`Прозрачность: ${opacity}%`);
}
```

---

## 14. Файловая система

> **Внимание:** Доступ только к Desktop (`app.userDesktopPath`).

```js
const { File, Directory, FileSystemPromises } = require('fs.js');

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

// Проверка существования
const exists = FileSystemPromises.exists(`${desktop}/file.txt`);
```

---

## 15. Сеть

```js
const { HttpRequest, RequestMethod } = require('network.js');

// GET запрос
const request = HttpRequest.create('https://api.example.com/data', RequestMethod.GET);
request.setTimeoutInSec(30);
request.setHeaderValue('Authorization', 'Bearer token123');

const { response } = request.do();
console.log(`Status: ${response.statusCode}`);
console.log(`Body: ${response.content}`);

// POST запрос
const postRequest = HttpRequest.create('https://api.example.com/data', RequestMethod.POST);
postRequest.setHeaderValue('Content-Type', 'application/json');
postRequest.doAsync((state, response, reason) => {
  console.log(`Status: ${response.statusCode}`);
  console.log(`Body: ${response.content}`);
});
```

---

## 16. Таймеры

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

// Отмена
timer.cancel();
Timer.cancelAll();
```

---

## 17. Буферы

```js
const { Buffer } = require('/buffer');

// Создание
const buf = Buffer.create(1024);
const str16 = Buffer.utf16('Hello');
const str8 = Buffer.utf8('Hello');

// Операции
const clone = buf.clone();
const part = buf.span(0, 10);
const slice = buf.slice(0, 10);
const equal = buf.equals(other);
const string = buf.toString('utf8');
const concatenated = buf.concat(other);
buf.reverse();

// Свойства
console.log(`Размер: ${buf.size}`);
console.log(`ArrayBuffer: ${buf.arrayBuffer}`);
console.log(`Uint8Array: ${buf.array}`);
```

---

## 18. Коллекции

```js
const { Collection } = require('/collection');

// Создание
const empty = Collection.empty();
const fromValues = Collection.of(1, 2, 3);
const range = Collection.range(0, 10);
const random = Collection.random();
const fibonacci = Collection.fibonacci();

// Трансформации
const filtered = range.filter(x => x > 5);
const mapped = range.map(x => x * 2);
const skipped = range.skip(3);
const taken = range.take(5);
const reversed = range.reverse();

// Запросы
console.log(`Все: ${range.all()}`);
console.log(`Есть: ${range.any()}`);
console.log(`Первый: ${range.first}`);
console.log(`Последний: ${range.last}`);
console.log(`Длина: ${range.length}`);
console.log(`Пуста: ${range.isEmpty}`);

// Терминальные
range.forEach(x => console.log(x));
const sum = range.reduce((acc, x) => acc + x, 0);
const joined = range.join(', ');
const array = range.toArray();
```

---

## 19. Практические примеры

### Пример 1: Создание сетки артбордов

```js
const { Document, NewDocumentOptions } = require('/document');

const doc = app.documents.current;
const cols = 3;
const rows = 2;
const width = 400;
const height = 300;
const gap = 20;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const x = col * (width + gap);
    const y = row * (height + gap);
    
    doc.addArtboard({
      x: x,
      y: y,
      width: width,
      height: height,
      name: `Artboard ${row * cols + col + 1}`
    });
  }
}

console.log(`Создано ${rows * cols} артбордов`);
```

### Пример 2: Автоматическое размещение текста

```js
const doc = app.documents.current;
const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));

// Создать текстовый фрейм
const textFrame = doc.addFrameText();
textFrame.x = 50;
textFrame.y = 50;
textFrame.width = 400;
textFrame.height = 200;

// Установить текст
textFrame.setText('Это автоматически размещённый текст в текстовом фрейме.');

console.log('Текст размещён');
```

### Пример 3: Замена цветов

```js
const doc = app.documents.current;

// Найти все объекты с определённым цветом
doc.spreads.forEach(spread => {
  spread.descendants.forEach(node => {
    if (node.fill && node.fill.colour) {
      const oldColour = node.fill.colour;
      if (oldColour.r === 255 && oldColour.g === 0 && oldColour.b === 0) {
        node.fill.colour = RGBA8(0, 0, 255, 255);
        console.log(`Заменён цвет в ${node.name}`);
      }
    }
  });
});
```

### Пример 4: Экспорт всех страниц

```js
const doc = app.documents.current;
const desktop = app.userDesktopPath;

doc.spreads.forEach((spread, index) => {
  doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
  
  const options = FileExportOptions.create();
  options.area = FileExportArea.CurrentSpread;
  
  doc.export(`${desktop}/page_${index + 1}.png`, options);
  console.log(`Экспортирована страница ${index + 1}`);
});
```

### Пример 5: Пакетное переименование

```js
const doc = app.documents.current;
let counter = 1;

doc.spreads.forEach(spread => {
  spread.descendants.forEach(node => {
    if (node.name.startsWith('Layer')) {
      node.name = `Element_${counter++}`;
    }
  });
});

console.log(`Переименовано ${counter - 1} элементов`);
```

---

## Приложение A: MCP-инструменты

| Инструмент | Описание |
|------------|----------|
| `affinity_execute_script` | Выполнение JavaScript |
| `affinity_read_sdk_documentation_topic` | Чтение документации SDK |
| `affinity_list_sdk_documentation` | Список тем документации |
| `affinity_list_library_scripts` | Список библиотечных скриптов |
| `affinity_read_library_script` | Чтение скрипта из библиотеки |
| `affinity_save_script_to_library` | Сохранение скрипта в библиотеку |
| `affinity_render_selection` | Рендер выделенного узла |
| `affinity_render_spread` | Рендер страницы |
| `affinity_search_sdk_hints` | Поиск подсказок SDK |
| `affinity_add_sdk_hint` | Добавление подсказки |
| `affinity_report_sdk_issue` | Сообщение об ошибке SDK |

## Приложение B: Типы фигур

| Тип | Класс | Описание |
|-----|-------|----------|
| Arrow | ShapeArrow | Стрелка |
| CalloutEllipse | ShapeCalloutEllipse | Выноска-эллипс |
| CalloutRectangle | ShapeCalloutRectangle | Выноска-прямоугольник |
| Cat | ShapeCat | Кошка (4 варианта) |
| Cloud | ShapeCloud | Облако |
| Cog | ShapeCog | Шестерёнка |
| Crescent | ShapeCrescent | Полумесяц |
| Diamond | ShapeDiamond | Ромб |
| DoubleStar | ShapeDoubleStar | Двойная звезда |
| Ellipse | ShapeEllipse | Эллипс |
| Heart | ShapeHeart | Сердце |
| Pie | ShapePie | Сектор |
| Polygon | ShapePolygon | Многоугольник |
| QRCode | ShapeQRCode | QR-код |
| Rectangle | ShapeRectangle | Прямоугольник |
| Segment | ShapeSegment | Сегмент |
| Spiral | ShapeSpiral | Спираль |
| SquareStar | ShapeSquareStar | Квадратная звезда |
| Star | ShapeStar | Звезда |
| Tear | ShapeTear | Слеза |
| Trapezoid | ShapeTrapezoid | Трапеция |
| Triangle | ShapeTriangle | Треугольник |

## Приложение C: Эффекты слоёв

| Тип | Описание |
|-----|----------|
| BevelEmboss | Барельеф |
| Outline | Обводка |
| PhongBevel | Фонг-барельеф |
| InnerShadow | Внутренняя тень |
| InnerGlow | Внутреннее свечение |
| ColourOverlay | Наложение цвета |
| GradientOverlay | Наложение градиента |
| OuterGlow | Внешнее свечение |
| OuterShadow | Внешняя тень |
| GaussianBlur | Гауссово размытие |

## Приложение D: AI-команды

| Команда | Описание |
|---------|----------|
| generateImage | Генерация изображения |
| generativeEditImage | Генеративное редактирование |
| removeBackground | Удаление фона |
| selectSubject | Выделение объекта |
| detectDepth | Определение глубины |
| colourise | Раскрашивание |

---

*Учебник создан на основе полной документации Affinity MCP-сервера.*
