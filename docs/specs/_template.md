# Script Specification Template

> Copy this file to `docs/specs/<script-id>.md` and fill in all sections.

---

## 1. Identity

| Field | Value |
|-------|-------|
| **ID** | `<kebab-case-id>` |
| **Name** | `<Human-readable name>` |
| **Version** | `<semver>` |
| **Author** | `<author>` |
| **Status** | `draft` / `stable` / `deprecated` |
| **SDK** | `>= 3.3.0` |

## 2. Purpose

One-paragraph description of what the script does and for whom.

## 3. Requirements

- Input preconditions (document open, selection type, etc.)
- Affinity product (Designer / Photo / Publisher)
- SDK modules used (list `affinity:*` paths)

## 4. Behavior

Numbered steps the script performs, in order.

1. ...
2. ...
3. ...

## 5. User Interface

Dialog fields, controls, defaults. Or "no UI — runs immediately".

| Control | Type | Default | Notes |
|---------|------|---------|-------|
| ... | ... | ... | ... |

## 6. Output

- What nodes are created / modified
- `console.log()` messages
- Grouping / naming conventions

## 7. Error Handling

| Condition | Message | Behavior |
|-----------|---------|----------|
| No document | ... | abort |
| Wrong selection | ... | abort |
| ... | ... | ... |

## 8. File Layout

```
scripts/<script-id>/
├── source/<script-id>.js    # editable source
├── release/<script-id>.js   # tested release (copied from source)
└── README.md                # user-facing readme
```

## 9. Test Checklist

- [ ] Runs without errors on empty document (expected abort message)
- [ ] Runs without errors on valid input
- [ ] Output matches spec (step 4)
- [ ] Undo restores document (`Ctrl+Z`, single or expected steps)
- [ ] `affinity-check` reports no errors

## 10. Changelog

| Version | Date | Change |
|---------|------|--------|
| ... | ... | ... |
