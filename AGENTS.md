# Affinity Scripts Workspace

## What This Is

Workspace for writing JavaScript scripts for Affinity Designer/Photo/Publisher. Scripts run inside Affinity via an MCP server (localhost:6767). Not a Node.js project — there's no `package.json`, no build step, no tests.

## Expected Repository Structure
- docs/specs/
- .mimocode/agents/
- .mimocode/skills/

## Delivery Workflow
1. Уточнить задачу.
2. При необходимости обновить specs.
3. Реализовать минимальный рабочий slice.
4. Обновить сопутствующую документацию.


## MCP Connection

The Affinity MCP server must be running for script execution. Config in `.mimocode/config.json`:

```json
{ "mcp": { "servers": { "affinity": { "url": "http://localhost:6767" } } } }
```

## Key Directories

| Path | Purpose |
|------|---------|
| `community-scripts/` | 70+ scripts from JiriKrblich/Affinity-Community-Scripts. Read `registry.json` for metadata. |
| `affinity scripts/` | Custom scripts by nodeus (color palette gen, hanging chars, chart builder) |
| `affinity-chart-builder/` | Standalone chart builder (bar/column/pie/donut from text frame data) |
| `docs/` | SDK documentation, tutorial, API reference (all in Russian) |
| `.mimocode/` | MiMo Code config, custom tools, hooks, skill templates |
| `_query_db*.py`, `_distill_analysis*.py` | Local Python scripts for querying MiMo Code's SQLite DB — not part of the Affinity scripts themselves |

## Before Writing Any Script

1. **Always read the preamble first** via MCP: `affinity_read_sdk_documentation_topic(filename="preamble")`
2. Search for existing solutions: `affinity_search_sdk_hints(prompt="...")`
3. Use the scaffold tool for boilerplate: `.mimocode/tools/affinity-scaffold.ts` (tasks: `basic`, `dialog`, `shape`, `export`, `text`, `ai`, `batch`, `curve`)
4. Validate with: `.mimocode/tools/affinity-check.ts`

## Critical Rules

- Scripts do **not** return values — use `console.log()` for output
- Scripts must be **directly executable** — no `module.exports.main`
- Always start with `"use strict"`
- Imports use bare module paths: `require('/document')`, `require('/shapes')`, etc.
- File system access is Desktop-only (`app.userDesktopPath`)
- `NOT_ALLOWED` error = user restricted AI/FS/Network in Affinity settings
- All mutations go through `doc.executeCommand()` — never mutate nodes directly
- Wrap nodes in `Selection.create(doc, nodes)` before passing to commands
- Set current spread before editing: `doc.executeCommand(DocumentCommand.createSetCurrentSpread(spread))`

## Script Patterns

### Basic structure

```js
"use strict";
const { Document } = require('/document');
const { app } = require('/application');
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
doc.executeCommand(builder.build());
```

Full patterns and code examples: `.mimocode/skills/affinity-scripting/SKILL.md`

## Templates

Located in `.mimocode/skills/affinity-scripting/templates/`:

`basic.js`, `dialog-preview.js`, `shape-create.js`, `export.js`, `text-format.js`, `ai-commands.js`, `batch-operations.js`, `curve-manipulate.js`

## Validating Scripts

Run `affinity-check` on any script before executing. It catches:
- Missing `"use strict"`
- `module.exports` usage (forbidden)
- Unknown import paths (valid: `/application`, `/document`, `/commands`, `/geometry`, `/nodes`, `/shapes`, `/colours`, `/dialog`, `/story`, `/storydelta`, `/glyphatts`, `/paragraphatts`, `/fills`, `/linestyle`, `/selections`, `/collection`, `/network`, `/fs`, `/buffer`, `/timer`, `/units`, `/layereffects`, `/rasterobject`, `affinity:common`, `affinity:dom`, `affinity:story`)
- Missing spread setup
- Preview without `createClearPreviews()`

## Documentation

- SDK reference: `docs/02-sdk-reference.md` (comprehensive, in Russian)
- Core API (English): `docs/core-api.md`
- Tutorial (32 chapters): `docs/affinity-scripting-tutorial.md`
- Community script patterns: `docs/06-community-scripts.md`
- MCP tools list: `docs/01-mcp-tools.md`
