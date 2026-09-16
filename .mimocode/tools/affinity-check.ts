import { tool } from "@mimo-ai/plugin"

interface Issue {
  line: number
  severity: "error" | "warning" | "info"
  message: string
}

function checkScript(script: string): Issue[] {
  const issues: Issue[] = []
  const lines = script.split("\n")

  // Check "use strict"
  if (!script.includes('"use strict"') && !script.includes("'use strict'")) {
    issues.push({ line: 1, severity: "warning", message: 'Missing "use strict" directive' })
  }

  // Check for module.exports (not allowed)
  if (script.includes("module.exports")) {
    issues.push({ line: -1, severity: "error", message: "Scripts must be directly executable — remove module.exports" })
  }

  // Check imports
  const requireMatches = script.matchAll(/require\(['"]([^'"]+)['"]\)/g)
  const validModules = [
    // JSLib wrappers (preferred, with .js)
    "/application.js", "/document.js", "/commands.js", "/geometry.js",
    "/nodes.js", "/shapes.js", "/colours.js", "/dialog.js", "/story.js",
    "/storydelta.js", "/glyphatts.js", "/paragraphatts.js", "/fills.js",
    "/linestyle.js", "/selections.js", "/collection.js", "/network.js",
    "/fs.js", "/buffer.js", "/timers.js", "/units.js", "/layereffects.js",
    "/rasterobject.js", "/storybuilder.js",
    // JSLib wrappers (legacy extensionless — warn to add .js)
    "/application", "/document", "/commands", "/geometry", "/nodes",
    "/shapes", "/colours", "/dialog", "/story", "/storydelta",
    "/glyphatts", "/paragraphatts", "/fills", "/linestyle", "/selections",
    "/collection", "/network", "/fs", "/buffer", "/timer", "/units",
    "/layereffects", "/rasterobject",
    // Raw SDK modules (enum-only, for BlendMode, UnitType, etc.)
    "affinity:application", "affinity:brushes", "affinity:buffer",
    "affinity:colours", "affinity:commands", "affinity:common",
    "affinity:dom", "affinity:fills", "affinity:fonts", "affinity:fs",
    "affinity:geometry", "affinity:hatches", "affinity:layereffects",
    "affinity:linestyles", "affinity:network", "affinity:os",
    "affinity:raster", "affinity:story", "affinity:timers", "affinity:ui",
  ]

  // JSLib modules that exist without .js in legacy code but should use .js form
  const legacyToModern: Record<string, string> = {
    "/application": "/application.js", "/document": "/document.js",
    "/commands": "/commands.js", "/geometry": "/geometry.js",
    "/nodes": "/nodes.js", "/shapes": "/shapes.js",
    "/colours": "/colours.js", "/dialog": "/dialog.js",
    "/story": "/story.js", "/storydelta": "/storydelta.js",
    "/glyphatts": "/glyphatts.js", "/paragraphatts": "/paragraphatts.js",
    "/fills": "/fills.js", "/linestyle": "/linestyle.js",
    "/selections": "/selections.js", "/collection": "/collection.js",
    "/network": "/network.js", "/fs": "/fs.js",
    "/buffer": "/buffer.js", "/timer": "/timers.js",
    "/units": "/units.js", "/layereffects": "/layereffects.js",
    "/rasterobject": "/rasterobject.js",
  }

  for (const match of requireMatches) {
    const modulePath = match[1]
    if (!validModules.includes(modulePath)) {
      const lineNum = script.substring(0, match.index).split("\n").length
      issues.push({
        line: lineNum,
        severity: "warning",
        message: `Unknown module "${modulePath}" — verify import path`,
      })
    } else if (legacyToModern[modulePath]) {
      const lineNum = script.substring(0, match.index).split("\n").length
      issues.push({
        line: lineNum,
        severity: "info",
        message: `Use "${legacyToModern[modulePath]}" instead of "${modulePath}" (SDK 3.3.0 .js form)`,
      })
    }
  }

  // Check for doc access pattern
  if (script.includes("app.documents") && !script.includes("app.documents.current")) {
    issues.push({ line: -1, severity: "info", message: "Consider using app.documents.current for the active document" })
  }

  // Check for missing spread setup
  if (script.includes("doc.spreads") && !script.includes("createSetCurrentSpread")) {
    issues.push({ line: -1, severity: "info", message: "Consider calling createSetCurrentSpread() before operating on a spread" })
  }

  // Check for preview without clearPreviews
  if (script.includes("executeCommand(cmd, true)") && !script.includes("createClearPreviews")) {
    issues.push({ line: -1, severity: "warning", message: "Preview mode used without createClearPreviews() — previews may persist" })
  }

  // Check for history save before preview
  if (script.includes("executeCommand(cmd, true)") && !script.includes("history.position")) {
    issues.push({ line: -1, severity: "info", message: "Consider saving doc.history.position before preview for cancel support" })
  }

  // Check for console.log (good practice)
  if (!script.includes("console.log")) {
    issues.push({ line: -1, severity: "info", message: "No console.log found — scripts don't return values, use console.log for output" })
  }

  // Check for Selection.create usage
  if (script.includes("doc.selection.nodes") && !script.includes("Selection.create")) {
    issues.push({ line: -1, severity: "info", message: "For commands, wrap selection in Selection.create(doc, nodes)" })
  }

  // Check for file system usage
  if ((script.includes("require('/fs')") || script.includes("require('/fs.js')")) && !script.includes("app.userDesktopPath")) {
    issues.push({ line: -1, severity: "info", message: "File system access is restricted to Desktop (app.userDesktopPath)" })
  }

  // Line-specific checks
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Check for potential null dereference
    if (line.includes(".first") && !line.includes("if") && !line.includes("?.")) {
      issues.push({
        line: i + 1,
        severity: "info",
        message: ".first may return undefined — consider null check",
      })
    }

    // Check for async without await
    if (line.includes("async") && !script.includes("await")) {
      issues.push({
        line: i + 1,
        severity: "info",
        message: "Async function found but no await — consider if await is needed",
      })
    }
  }

  return issues
}

export default tool({
  description: "Validate an Affinity script for common issues before execution. Checks imports, patterns, and potential errors.",
  args: {
    script: tool.schema.string().describe("JavaScript code to validate"),
  },
  async execute(args, ctx) {
    const issues = checkScript(args.script)

    if (issues.length === 0) {
      return "No issues found. Script looks good."
    }

    const errors = issues.filter(i => i.severity === "error")
    const warnings = issues.filter(i => i.severity === "warning")
    const infos = issues.filter(i => i.severity === "info")

    let result = `Found ${issues.length} issue(s):\n`

    if (errors.length > 0) {
      result += `\nERRORS (${errors.length}):\n`
      errors.forEach(i => {
        result += `  ${i.line > 0 ? `Line ${i.line}: ` : ""}${i.message}\n`
      })
    }

    if (warnings.length > 0) {
      result += `\nWARNINGS (${warnings.length}):\n`
      warnings.forEach(i => {
        result += `  ${i.line > 0 ? `Line ${i.line}: ` : ""}${i.message}\n`
      })
    }

    if (infos.length > 0) {
      result += `\nINFO (${infos.length}):\n`
      infos.forEach(i => {
        result += `  ${i.line > 0 ? `Line ${i.line}: ` : ""}${i.message}\n`
      })
    }

    return result
  },
})
