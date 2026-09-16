# Руководство по миграции на SDK 3.3.0

> Что изменилось в Affinity SDK v3.3.0 и как чинить скрипты.
> Основано на официальной JSLib из SDK 3.3.0 (`docs/JSLib/`, проверены все экспорты).
> Полный справочник API: [02-sdk-v3.3.0.md](02-sdk-v3.3.0.md) (на английском).

---

## 1. Главное: два слоя SDK

SDK 3.3.0 состоит из **двух слоёв**, и их нельзя путать:

| Слой | Пути | Что экспортирует | Кто использует |
|------|------|------------------|----------------|
| **JSLib** (обёртка) | `/document.js`, `/commands.js`, `/nodes.js`, ... | Удобные классы: `Document`, `Shape`, `Selection`, `Dialog`, `StoryBuilder`, `FillDescriptor`, `Colour`, команды `DocumentCommand`, билдеры | **скрипты пользователей** |
| **Raw API** | `affinity:dom`, `affinity:commands`, ... | Низкоуровневые `*Api` (`DocumentApi`, `NodeApi`...) + enum'ы (`BlendMode`, `UnitType`, `NodeChildType`, `FillType`, `ShapeType`...) | JSLib внутри; скриптам нужны только enum'ы |

**Правило:** классы и команды — из JSLib (`/...js`), enum'ы — из `affinity:*`.

## 2. Форма путей JSLib: с `.js`

В SDK 3.3.0 модули JSLib существуют в двух формах — `/document` и `/document.js`.
Официальные примеры текущего SDK используют форму **с `.js`**, её же используют
внутренние связи самой JSLib. Мигрируем все скрипты на форму с `.js`:

| Было (≤ 3.2.x) | Стало (≥ 3.3.0) | Проверено в JSLib |
|----------------|-----------------|-------------------|
| `/document` | `/document.js` | `Document`, `DocumentPreset`, `NewDocumentOptions` |
| `/commands` | `/commands.js` | `DocumentCommand`, `CompoundCommandBuilder`, `AddChildNodesCommandBuilder`, `NodeChildType`, `NodeMoveType`, `GroupTransformData` |
| `/nodes` | `/nodes.js` | `ShapeNodeDefinition`, `FrameTextNodeDefinition`, `PolyCurveNodeDefinition`, `ContainerNodeDefinition`, `TableTextNodeDefinition`, `NodeChildType` |
| `/selections` | `/selections.js` | `Selection`, `TextSelection` |
| `/shapes` | `/shapes.js` | `Shape`, `ShapeType`, `ShapeRectangle`, `ShapeCornerType`, `ShapeEllipse` |
| `/geometry` | `/geometry.js` | `Rectangle`, `Transform`, `CurveBuilder`, `Curve`, `PolyCurve`, `unionRects`, `rectsIntersect` |
| `/colours` | `/colours.js` | `Colour`, `ColourProfileSet`, `SVG11` |
| `/fills` | `/fills.js` | `FillDescriptor`, `SolidFill`, `FillType`, `GradientFill`, `GradientFillType`, `ColourMesh`, `MeshFill` |
| `/linestyle` | `/linestyle.js` | `ArrowHead`, `ArrowHeadStyle`, `LineStyleDescriptor`, `LineStyle`, `LineStyleMask` |
| `/story` | `/story.js` | `HardBreakType`, ... (см. story.js) |
| `/storybuilder` | `/storybuilder.js` | `StoryBuilder` |
| `/storydelta` | `/storydelta.js` | `StoryDelta` |
| `/glyphatts` | `/glyphatts.js` | `GlyphAtts`, `GlyphAttDoubleType` |
| `/paragraphatts` | `/paragraphatts.js` | `ParagraphAtts`, `ParagraphAlignXType` |
| `/dialog` | `/dialog.js` | `Dialog`, `DialogResult`, `HorizontalAlignment` |
| `/units` | `/units.js` | `UnitType`, `UnitValue`, `UnitValueConverter` |
| `/network` | `/network.js` | `HttpRequest`, `RequestMethod` |
| `/fs` | `/fs.js` | `File`, `Directory`, ... |
| `/buffer` | `/buffer.js` | `Buffer` |
| `/collection` | `/collection.js` | `Collection` |
| `/fonts` | `/fonts.js` | `FontWeight`, ... |
| `/rasterobject` | `/rasterobject.js` | `Bitmap`, `PixelBuffer`, `RasterFormat` |
| `/timer` | `/timers.js` | ⚠️ имя файла **во мн.ч.** — проверить через MCP (`timers.js` есть в JSLib) |
| `affinity:common` | `affinity:common` | без изменений: `BlendMode`, `ErrorCode` |

> ⚠️ Официальные примеры используют `UnitType` и из `/units.js`, и из `affinity:common`
> (оба работают). `BlendMode` — только из `affinity:common`.

## 3. Что НЕ делать

- ❌ Не импортировать классы из `affinity:*`: там их нет.
  `require('affinity:dom')` **не** содержит `Document`, `Selection`, `*NodeDefinition`;
  `require('affinity:commands')` **не** содержит `DocumentCommand` и билдеры;
  `require('affinity:ui')` **не** содержит `Dialog`;
  `require('affinity:story')` **не** содержит `StoryBuilder`/`GlyphAtts`;
  `require('affinity:geometry')` **не** содержит `Shape`/`CurveBuilder`;
  `require('affinity:colours')` **не** содержит `Colour`.
  (Проверено по `docs/JSLib/*.js`: raw-модули отдают только `*Api` + enum'ы.)
- ❌ Не использовать `Dialog.show()` — deprecated, вместо него `runModal()`
  (`show()` пока работает как алиас, но будет удалён).

## 4. Пример миграции (шапка скрипта)

```js
// БЫЛО (SDK ≤ 3.2.x):
const { Document } = require('/document');
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands');
const { ShapeNodeDefinition } = require('/nodes');
const { Shape, ShapeType } = require('/shapes');
const { Rectangle } = require('/geometry');
const { Colour } = require('/colours');
const { FillDescriptor, SolidFill } = require('/fills');
const { StoryBuilder } = require('/storybuilder');
const { GlyphAtts } = require('/glyphatts');
const { Dialog, DialogResult } = require('/dialog');
const { BlendMode } = require('affinity:common');

// СТАЛО (SDK ≥ 3.3.0):
const { Document } = require('/document.js');
const { AddChildNodesCommandBuilder, NodeChildType } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { Shape, ShapeType } = require('/shapes.js');
const { Rectangle } = require('/geometry.js');
const { Colour } = require('/colours.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { StoryBuilder } = require('/storybuilder.js');
const { GlyphAtts } = require('/glyphatts.js');
const { Dialog, DialogResult } = require('/dialog.js');
const { BlendMode } = require('affinity:common');
```

## 5. Нюанс: `NodeChildType` / `NodeMoveType`

- `NodeChildType` — есть и в `/nodes.js`, и в `/commands.js` (оба проверены).
- `NodeMoveType` — **только** в `/commands.js` (в `/nodes.js` его нет — проверено).

## 6. Что нового в 3.3.0 (стоит знать)

- **QR-коды**: `ShapeQRCode` + `QRPayload*` (Text, URL, Email, Phone, SMS, Wifi, Location, VCard, ...).
- **Таблицы**: `TableTextNode` / `TableTextNodeDefinition` (есть в `/nodes.js`).
- **Новые фигуры**: Trapezoid, Cat 1–4, Cog, Crescent, Tear, Callout, Segment, DoubleStar, SquareStar.
- **Diffusion-заливки**: `DiffusionFill`, `DiffusionCurveSet`.
- **AI-команды**: generate image, generative edit, remove background, select subject, detect depth, colourise, image trace.
- **Async-варианты** почти всех методов `Document`: `loadAsync`, `saveAsync`, `saveAsAsync`, `exportAsync`, `executeCommandAsync`, ...
- **Новые raw-модули**: `affinity:brushes`, `affinity:fonts`, `affinity:hatches`, `affinity:os`, `affinity:raster`, `affinity:ui`.

## 7. Чек-лист миграции скрипта

1. [ ] Все `require('/...')` → `require('/....js')` по таблице п. 2
2. [ ] `Dialog.show()` → `Dialog.runModal()`
3. [ ] `NodeMoveType` брать из `/commands.js`, не из `/nodes.js`
4. [ ] Прогнать через `affinity-check` — не должно быть unknown modules
5. [ ] Выполнить через MCP на тестовом документе, проверить `console.log`
6. [ ] Проверить Undo (`Ctrl+Z`) возвращает документ в исходное состояние
7. [ ] Скопировать проверенный файл из `source/` в `release/`, обновить spec и README
