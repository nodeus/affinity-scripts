import type { Hooks } from "@mimo-ai/plugin"
import { readFileSync } from "fs"
import { join } from "path"

const AFFINITY_CONTEXT = `
## Affinity Scripting Quick Reference

When working with Affinity scripts via MCP, use these key patterns:

### Module Imports
\`\`\`js
const { app } = require('/application');
const { Document } = require('/document');
const { DocumentCommand, CompoundCommandBuilder } = require('/commands');
const { Transform, CurveBuilder, PolyCurve } = require('/geometry');
const { Shape } = require('/shapes');
const { Selection } = require('/selections');
const { RGBA8, SVG11 } = require('/colours');
const { Dialog, DialogResult } = require('/dialog');
\`\`\`

### Critical Rules
- Scripts do NOT return values — use console.log()
- Always check app.documents.current before proceeding
- Use doc.executeCommand() for all mutations
- Wrap nodes in Selection.create(doc, nodes) for commands
- File system = Desktop only (app.userDesktopPath)

### Templates
Script templates are available at:
  .mimocode/skills/affinity-scripting/templates/

Available: basic, dialog-preview, shape-create, export, text-format, ai-commands, batch-operations, curve-manipulate

### Custom Tools
- affinity-scaffold — generate script boilerplate by task type
- affinity-check — validate script for common issues
`

const hooks: Hooks = {
  "experimental.chat.system.transform": async (input, output) => {
    // Only inject if this looks like an Affinity scripting session
    // Check if any recent messages mention Affinity or MCP tools
    const lastMessage = output.system[output.system.length - 1] || ""
    const hasAffinityContext = lastMessage.includes("affinity") ||
      lastMessage.includes("Affinity") ||
      output.system.some(s => s.includes("affinity_execute_script"))

    if (hasAffinityContext) {
      output.system.push(AFFINITY_CONTEXT)
    }
  },
}

export default hooks
