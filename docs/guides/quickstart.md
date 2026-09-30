# Quickstart — первый скрипт за 5 минут

> SDK 33000 · MCP `http://localhost:6767` · конфиг `.mimocode/config.json`

## 1. Проверка связи

```js
affinity_execute_script(script="console.log('Hello from Affinity!');")
```

## 2. Минимальный скрипт

```js
"use strict";
const { Document } = require('/document.js');
const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
console.log('Open: ' + doc.title);
```

Правила: `"use strict"` первой строкой, вывод только через `console.log()`
(без `return` значения), файл выполняется сразу (без `module.exports`).

## 3. Создать фигуру

```js
"use strict";
const { Document } = require('/document.js');
const { DocumentCommand, AddChildNodesCommandBuilder } = require('/commands.js');
const { ShapeNodeDefinition } = require('/nodes.js');
const { Shape, ShapeType } = require('/shapes.js');
const { FillDescriptor, SolidFill } = require('/fills.js');
const { Colour } = require('/colours.js');
const { Selection } = require('/selections.js');

const doc = Document.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.currentSpread;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
```

Дальше: построение определения фигуры, заливки и `AddChildNodesCommandBuilder` —
см. [patterns.md](patterns.md), шаблоны `.mimocode/.../templates/shape-create.js`,
JSLib-примеры `docs/JSLib/examples/makeGrid.js`, `artboardGrid.js`.

## 4. Обязательный цикл разработки

1. `affinity_read_sdk_documentation_topic(filename="preamble")` — один раз в начале
2. `affinity_search_sdk_hints(prompt="...")` — поиск готовых решений
3. Шаблон из `.mimocode/skills/affinity-scripting/templates/` (`basic`, `dialog`, `shape`, `export`, `text`, `ai`, `batch`, `curve`)
4. `affinity_execute_script` → проверка `console.log`
5. `affinity_render_spread` — визуальная проверка
6. `.mimocode/tools/affinity-check.ts` — валидация
7. `affinity_add_sdk_hint` + `affinity_save_script_to_library` — сохранить опыт

## 5. Ограничения

- Файловая система — только Desktop (`app.userDesktopPath`)
- Рендер — JPEG до 1024px
- `NOT_ALLOWED` от команды = запрет AI/FS/Network в настройках Affinity
- Скрипты синхронные — `*Async`-варианты не нужны

Подробно: [mcp-tools.md](mcp-tools.md) · [patterns.md](patterns.md) · [examples.md](examples.md)
