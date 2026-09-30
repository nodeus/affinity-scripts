# Affinity Scripts Workspace

## What This Is

Workspace for writing JavaScript scripts for Affinity Designer/Photo/Publisher. Scripts run inside Affinity via an MCP server (localhost:6767). Not a Node.js project — there's no `package.json`, no build step, no tests.

## Expected Repository Structure

```
affinity/
├── scripts/                         # Custom scripts by nodeus
│   ├── chart-builder/               # Line/Bar/Donut diagrams from text
│   │   ├── source/chart-builder.js  # Editable source
│   │   ├── release/chart-builder.js # Tested release
│   │   └── README.md
│   ├── color-palette-gen/           # Fills/strokes/gradients palette
│   │   ├── source/color-palette-gen.js
│   │   ├── release/color-palette-gen.js
│   │   └── README.md
│   └── hanging-chars/               # NBSP for orphan letters/prepositions
│       ├── source/hanging-chars.js
│       ├── release/hanging-chars.js
│       └── README.md
├── docs/
│   ├── index.md                       # Master index
│   ├── sdk/                           # Full API reference, build 33000 (generated)
│   ├── guides/                        # quickstart, mcp-tools, patterns, examples, migration, community-catalog
│   ├── textbook/                      # RU textbook (md chapters + PDF, build-pdf.ps1)
│   ├── JSLib/                         # JSLib wrappers, synced with JSLib.zip
│   ├── pub/                           # Published materials
│   └── specs/                         # Script specifications
│       ├── _template.md
│       ├── chart-builder.md
│       ├── color-palette-gen.md
│       └── hanging-chars.md
├── old-docs/                          # Outdated docs/ editions (00–08) + README
├── community-scripts/               # 70+ scripts from JiriKrblich (read-only reference)
├── .mimocode/                       # MiMo Code config, tools, skills
│   ├── config.json
│   ├── tools/
│   │   ├── affinity-check.ts        # Script validator
│   │   └── affinity-scaffold.ts     # Boilerplate generator
│   └── skills/affinity-scripting/
│       ├── SKILL.md                 # Complete skill definition
│       └── templates/               # 8 script templates
├── archive/                         # Old files (pre-SDK 3.3.0)
└── AGENTS.md                        # This file
```

## Delivery Workflow

1. Уточнить задачу.
2. При необходимости обновить spec в `docs/specs/`.
3. Реализовать минимальный рабочий slice.
4. Прогнать через `affinity-check`.
5. Обновить сопутствующую документацию.
6. Скопировать из `source/` в `release/` после тестирования.

## MCP Connection

The Affinity MCP server must be running for script execution. Config in `.mimocode/config.json`:

```json
{ "mcp": { "servers": { "affinity": { "url": "http://localhost:6767" } } } }
```

## Key Directories

| Path | Purpose |
|------|---------|
| `scripts/` | Custom scripts by nodeus — each has `source/`, `release/`, `README.md` |
| `community-scripts/` | 70+ scripts from JiriKrblich/Affinity-Community-Scripts (read-only) |
| `docs/` | SDK documentation, specs, tutorials |
| `.mimocode/` | MiMo Code config, custom tools, hooks, skill templates |
| `archive/` | Old files pre-SDK 3.3.0 migration |

## Before Writing Any Script

1. **Always read the preamble first** via MCP: `affinity_read_sdk_documentation_topic(filename="preamble")`
2. Search for existing solutions: `affinity_search_sdk_hints(prompt="...")`
3. Use the scaffold tool for boilerplate: `.mimocode/tools/affinity-scaffold.ts` (tasks: `basic`, `dialog`, `shape`, `export`, `text`, `ai`, `batch`, `curve`)
4. Validate with: `.mimocode/tools/affinity-check.ts`

## Critical Rules

- Scripts do **not** return values — use `console.log()` for output
- Scripts must be **directly executable** — no `module.exports.main`
- Always start with `"use strict"`
- Imports use JSLib paths with `.js`: `require('/document.js')`, `require('/shapes.js')`, etc.
- Enum imports use raw modules: `require('affinity:common')` for `BlendMode`, `UnitType`
- File system access is Desktop-only (`app.userDesktopPath`)
- `NOT_ALLOWED` error = user restricted AI/FS/Network in Affinity settings
- All mutations go through `doc.executeCommand()` — never mutate nodes directly
- Wrap nodes in `Selection.create(doc, nodes)` before passing to commands
- Set current spread before editing: `doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread))`
- `Dialog.show()` is deprecated — use `runModal()`

## Script Patterns

### Basic structure

```js
"use strict";
const { Document } = require('/document.js');
const { app } = require('/application.js');
const doc = app.documents.current;
if (!doc) { console.log('No document open'); return; }
const spread = doc.spreads.first;
doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread));
```

### Preview/Cancel (interactive dialogs)

```js
const historyStart = doc.history.position;
// applyPreview(): doc.executeCommand(cmd, true)  // true = preview
// onOK(): ClearPreviews() + final apply
// onCancel(): ClearPreviews() + doc.history.position = historyStart
```

### Compound commands (single undo)

```js
const builder = CompoundCommandBuilder.createCommand();
builder.add(cmd1);
builder.add(cmd2);
doc.executeCommand(builder.createCommand());
```

Full patterns and code examples: `.mimocode/skills/affinity-scripting/SKILL.md`

## Templates

Located in `.mimocode/skills/affinity-scripting/templates/`:

`basic.js`, `dialog-preview.js`, `shape-create.js`, `export.js`, `text-format.js`, `ai-commands.js`, `batch-operations.js`, `curve-manipulate.js`

## Validating Scripts

Run `affinity-check` on any script before executing. It catches:
- Missing `"use strict"`
- `module.exports` usage (forbidden)
- Unknown import paths (valid: all `affinity:*` raw modules + JSLib `/....js` wrappers)
- Extensionless legacy paths (warns to add `.js`)
- Missing spread setup
- Preview without `createClearPreviews()`

## Documentation

- Master index: `docs/index.md`
- Full SDK reference (build 33000, generated): `docs/sdk/` (map: `docs/sdk/_overview.md`, registry: `docs/sdk/_registry.md`)
- Guides: `docs/guides/` (`quickstart.md`, `mcp-tools.md`, `patterns.md`, `examples.md`, `migration.md`, `community-catalog.md`)
- Textbook (RU, md+PDF): `docs/textbook/` (build: `docs/textbook/build-pdf.ps1`)
- Script specs: `docs/specs/`
- JSLib wrappers (synced with `JSLib.zip`): `docs/JSLib/`
- Outdated editions: `old-docs/` (numbered `00–08`), `archive/` (pre-3.3.0)
