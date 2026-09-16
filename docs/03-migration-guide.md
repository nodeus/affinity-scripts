# Руководство по миграции на SDK 3.3.0

> Что сломалось при переходе на Affinity SDK v3.3.0 и как это чинить.
> Полный справочник нового API: [02-sdk-v3.3.0.md](02-sdk-v3.3.0.md) (на английском).

---

## 1. Главное изменение: пути модулей

SDK 3.3.0 перевёл все модули в namespace `affinity:`. Старые короткие пути
(`/document`, `/commands`, ...) **deprecated** — скрипты на них перестали работать.

### Полная таблица замен

| Старый путь | Новый путь | Что переехало |
|-------------|-----------|---------------|
| `/application` | `affinity:application` | `app`, настройки, окружение |
| `/document` | `affinity:dom` | `Document`, пресеты, история |
| `/commands` | `affinity:commands` | `DocumentCommand`, все `create*Command`, билдеры |
| `/nodes` | `affinity:dom` | `*NodeDefinition`, `NodeChildType`, `NodeMoveType` — см. п. 3 |
| `/selections` | `affinity:dom` | `Selection`, `TextSelection` |
| `/collection` | `affinity:dom` | `Collection` |
| `/shapes` | `affinity:geometry` | `Shape`, `ShapeType`, `ShapeRectangle`, `ShapeCornerType`, ... |
| `/geometry` | `affinity:geometry` | `Rectangle`, `Transform`, `CurveBuilder`, `PolyCurve`, `Point`, ... |
| `/colours` | `affinity:colours` | `Colour`, `ColourProfileSet`, `Gradient` |
| `/fills` | `affinity:fills` | `FillDescriptor`, `SolidFill`, `FillType`, `GradientFill`, ... |
| `/linestyle` | `affinity:linestyles` | `LineStyleDescriptor`, `ArrowHead`, `ArrowHeadStyle` (внимание на **s**!) |
| `/story` | `affinity:story` | `Story`, `StoryBuilder`, `StoryDelta` |
| `/storybuilder` | `affinity:story` | `StoryBuilder` — **такого модуля больше нет** |
| `/glyphatts` | `affinity:story` | `GlyphAtts` — **такого модуля больше нет** |
| `/paragraphatts` | `affinity:story` | `ParagraphAtts` — **такого модуля больше нет** |
| `/storydelta` | `affinity:story` | `StoryDelta` |
| `/dialog` | `affinity:ui` | `Dialog`, `DialogResult`, все контролы |
| `/units` | `affinity:common` | `UnitType` (рядом с `BlendMode`) |
| `/network` | `affinity:network` | `HttpRequest`, `RequestMethod` |
| `/fs` | `affinity:fs` | `File`, `Directory` |
| `/buffer` | `affinity:buffer` | `Buffer` |
| `/timer` | `affinity:timers` | `Timer` (внимание на **s**!) |
| `/layereffects` | `affinity:layereffects` | эффекты слоёв (внимание на **s**!) |
| `/rasterobject` | `affinity:raster` | растровые объекты |
| — | `affinity:brushes` | **новый** модуль кистей |
| — | `affinity:fonts` | **новый** модуль шрифтов |
| — | `affinity:hatches` | **новый** модуль штриховок |
| — | `affinity:os` | **новый** модуль ОС |
| `affinity:common` | `affinity:common` | без изменений (`BlendMode`) |
| `affinity:dom` | `affinity:dom` | без изменений |
| `affinity:story` | `affinity:story` | без изменений |

### Типичные ловушки

1. **`/storybuilder`, `/glyphatts`, `/paragraphatts` не существуют** в новом SDK.
   Всё это — именованные экспорты модуля `affinity:story`:
   ```js
   // БЫЛО (сломано):
   const { StoryBuilder } = require('/storybuilder');
   const { GlyphAtts } = require('/glyphatts');
   const { ParagraphAtts } = require('/paragraphatts');
   // СТАЛО:
   const { StoryBuilder, GlyphAtts, ParagraphAtts } = require('affinity:story');
   ```
2. **Множественное число**: `affinity:linestyles`, `affinity:timers`,
   `affinity:layereffects` — с `s` на конце. `/linestyle`, `/timer`, `/layereffects` — старые имена.
3. **`Shape*` переехали в `affinity:geometry`** — отдельного модуля shapes больше нет:
   ```js
   // БЫЛО: const { Shape, ShapeType } = require('/shapes');
   // СТАЛО:
   const { Shape, ShapeType, ShapeRectangle, ShapeCornerType } = require('affinity:geometry');
   ```
4. **`Selection` и `TextSelection` — в `affinity:dom`**, не в `/selections`:
   ```js
   const { Document, Selection, TextSelection } = require('affinity:dom');
   ```

---

## 2. Пример миграции (шапка скрипта)

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
const { Document, ShapeNodeDefinition, Selection, TextSelection } = require('affinity:dom');
const { AddChildNodesCommandBuilder, NodeChildType } = require('affinity:commands');
const { Shape, ShapeType, Rectangle } = require('affinity:geometry');
const { Colour } = require('affinity:colours');
const { FillDescriptor, SolidFill } = require('affinity:fills');
const { StoryBuilder, GlyphAtts } = require('affinity:story');
const { Dialog, DialogResult } = require('affinity:ui');
const { BlendMode } = require('affinity:common');
```

---

## 3. Нюанс: `NodeChildType` / `NodeMoveType`

В SDK 3.3.0 эти enum'ы принадлежат `affinity:dom`
(см. Modules Overview: `NodeChildType`, `NodeMoveType` → dom).
Старые скрипты брали их из `/commands`. Безопасный вариант импорта:

```js
const { AddChildNodesCommandBuilder } = require('affinity:commands');
const { NodeChildType, NodeMoveType } = require('affinity:dom');
```

> Если `NodeChildType` не находится в `affinity:dom` в вашей сборке —
> проверьте через MCP: `affinity_search_sdk_hints` / чтение топика документации.
> JSLib-обёртка может реэкспортировать его и из commands.

---

## 4. Что нового в 3.3.0 (стоит знать)

- **QR-коды**: `ShapeQRCode` + `QRPayload*` (Text, URL, Email, Phone, SMS, Wifi, Location, VCard, ...).
- **Таблицы**: `TableTextNode` / `TableTextNodeDefinition`.
- **Новые фигуры**: Trapezoid, Cat 1–4, Cog, Crescent, Tear, Callout, Segment, DoubleStar, SquareStar.
- **Diffusion-заливки**: `DiffusionFill`, `DiffusionCurveSet`.
- **AI-команды**: generate image, generative edit, remove background, select subject, detect depth, colourise, image trace.
- **Async-варианты** почти всех методов `Document`: `loadAsync`, `saveAsync`, `saveAsAsync`, `exportAsync`, `executeCommandAsync`, ...
- **Новые модули**: `affinity:brushes`, `affinity:fonts`, `affinity:hatches`, `affinity:os`, `affinity:raster`, `affinity:ui`.

---

## 5. Чек-лист миграции скрипта

1. [ ] Заменить все `require('/...')` на `require('affinity:...')` по таблице выше
2. [ ] Убрать несуществующие `/storybuilder`, `/glyphatts`, `/paragraphatts` → всё из `affinity:story`
3. [ ] Проверить множественное число: `linestyles`, `timers`, `layereffects`
4. [ ] Прогнать через `affinity-check` — не должно быть unknown modules
5. [ ] Выполнить через MCP на тестовом документе, проверить `console.log`
6. [ ] Проверить Undo (`Ctrl+Z`) возвращает документ в исходное состояние
7. [ ] Скопировать проверенный файл из `source/` в `release/`, обновить spec и README
