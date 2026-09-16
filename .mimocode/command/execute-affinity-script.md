---
description: Execute an Affinity script via MCP with proper preamble reading and error recovery. Use when running scripts that need to interact with Affinity Designer/Photo/Publisher.
---

# Execute Affinity Script Command

## Workflow

1. **Read preamble first** (required for all script execution):
   ```
   affinity_read_sdk_documentation_topic(filename="preamble")
   ```

2. **Execute the script**:
   ```
   affinity_execute_script(script="YOUR_SCRIPT_CODE")
   ```

3. **Render result** (if visual output needed):
   ```
   affinity_render_spread(document_session_uuid="SESSION_UUID")
   ```

## Error Recovery

### "preamble" topic not found
- **Cause**: Preamble documentation not loaded
- **Fix**: Ensure MCP server is connected, retry `affinity_read_sdk_documentation_topic(filename="preamble")`

### "No document with that Uuid exists"
- **Cause**: Document session UUID invalid or document closed
- **Fix**: Open document in Affinity, get new UUID from `affinity_execute_script` output

### "NOT_ALLOWED" error
- **Cause**: User restricted AI/FS/Network in Affinity settings
- **Fix**: Check Affinity Preferences → General → AI/FS/Network permissions

### Script returns no output
- **Cause**: Scripts use `console.log()` for output
- **Fix**: Check console output, add `console.log()` statements for debugging

## Example Usage

```
Execute Affinity script:
1. Read preamble
2. Execute: "use strict"; const { app } = require('/application'); console.log('Documents:', app.documents.count);
3. Render current spread
```