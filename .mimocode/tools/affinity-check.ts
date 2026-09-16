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
    "/application", "/document", "/commands", "/geometry", "/nodes",
    "/shapes", "/colours", "/dialog", "/story", "/storydelta",
    "/glyphatts", "/paragraphatts", "/fills", "/linestyle", "/selections",
    "/collection", "/network", "/fs", "/buffer", "/timer", "/units",
    "/layereffects", "/rasterobject", "affinity:common", "affinity:dom",
    "affinity:story",
  ]

  for (const match of requireMatches) {
    const modulePath = match[1]
    if (!validModules.includes(modulePath)) {
      const lineNum = script.substring(0, match.index).split("\n").length
      issues.push({
        line: lineNum,
        severity: "warning",
        message: `Unknown module "${modulePath}" — verify import path`,
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
  if (script.includes("require('/fs')") && !script.includes("app.userDesktopPath")) {
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
