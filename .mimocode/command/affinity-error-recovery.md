---
description: Recover from common Affinity MCP errors. Use when script execution fails with document UUID, preamble, or node type errors.
---

# Affinity Error Recovery Command

## Common Errors and Solutions

### 1. "preamble" topic not found
**Error**: `The preamble documentation topic not found`
**Cause**: Preamble documentation not loaded
**Solution**:
```
affinity_read_sdk_documentation_topic(filename="preamble")
```
Then retry your script.

### 2. Document UUID not found
**Error**: `No document with that Uuid exists`
**Cause**: Document session UUID invalid or document closed
**Solution**:
1. Open document in Affinity
2. Get new UUID from `affinity_execute_script` output
3. Use new UUID for rendering

### 3. Node type errors
**Error**: `Cannot read property 'children' of null`
**Cause**: Node doesn't exist or wrong type
**Solution**:
```js
if (!node) {
  console.log('Node not found');
  return;
}
if (!node.isShapeNode) {
  console.log('Node is not a shape');
  return;
}
```

### 4. Spread empty
**Error**: `Spread has no children`
**Cause**: Empty spread
**Solution**:
```js
if (spread.children.count === 0) {
  console.log('Spread is empty');
  return;
}
```

### 5. Command failed
**Error**: `Command failed`
**Cause**: Invalid command parameters
**Solution**: Check `DocumentCommand.create*()` arguments match SDK docs

## Recovery Workflow

```
1. Identify error type
2. Apply specific fix
3. Retry operation
4. If still fails: read relevant SDK docs
5. Check for known issues in community hints
```

## Prevention Tips

1. **Always read preamble first** before any script execution
2. **Check node types** before operations
3. **Validate document exists** before rendering
4. **Use try/catch** for critical operations
5. **Add console.log()** for debugging