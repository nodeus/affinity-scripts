# Hanging Chars and Prepositions — Specification

## 1. Identity

| Field | Value |
|-------|-------|
| **ID** | `hanging-chars` |
| **Name** | Hanging Chars and Prepositions |
| **Version** | `1.0.0` |
| **Author** | nodeus (based on initial script by JiriKrblich) |
| **Status** | `stable` |
| **SDK** | `>= 3.3.0` |

## 2. Purpose

Fixes typographic "orphans" (висячие предлоги и одиночные буквы) in Slavic-language layouts by replacing the regular space after lone single characters and short prepositions with a non-breaking space (`U+00A0`). Scans every text node on every spread of the document. Intended for Russian/English print layouts where a preposition or single letter must not end a line.

## 3. Requirements

- An open document (Designer / Photo / Publisher with text support)
- No selection required — all spreads and all nested text nodes are scanned
- SDK modules used (JSLib `/....js`):
  - `/document.js` — `Document`
  - `/selections.js` — `Selection`, `TextSelection`
  - `/commands.js` — `DocumentCommand`, `CompoundCommandBuilder`
  - `/dialog.js` — `Dialog` (result message box, via `runModal()`)

## 4. Behavior

1. Take `Document.current`; show `Error: No document is open.` dialog and stop if none.
2. Define strict preposition lists:
   - 2-letter RU: `во, на, не, ни, об, от, по, до, за, из, со, ко, ну, уж, вы`; EN: `in, on, at, to, by, up, of, if, no, or, as, an, be, is, it, we, us, my, me, he, do, go, so, am`
   - 3-letter RU: `под, при, про, для, без, над, обо, изо, ото, меж`; EN: `the, and, for, but, not, are, you, all, can, had, her, was, one, our, out, day, get, has, him, his, how, its, may, new, now, old, see, two, who, boy, did, she, use, way, many, oil, sit`
3. For every spread, walk every node (including nested children) with an explicit stack.
4. For each text node (`node.isTextNode`), read the story text via `storyInterface.story.getText(range.begin, range.end - range.begin)`.
5. Find orphan space positions (`findOrphanSpacePositions`):
   - **Pattern 1**: single character followed by a space (`(^|[\s])(\S) (?=\S)`)
   - **Pattern 2**: 2-letter word + space, only if the word is in the strict 2-letter list
   - **Pattern 3**: 3-letter word + space, only if the word is in the strict 3-letter list
   - Deduplicate and sort positions ascending.
6. If positions found, build one `CompoundCommandBuilder` with one `createSetText(sel, NBSP)` per position (single-character `TextSelection` at `range.begin + pos`, wrapped in `Selection.create(doc, node)` + `addSubSelectionForNode`), then execute as a single command.
7. Count fixed text fields (`totalChanged`) and scanned text fields (`totalNodes`); collect errors.
8. Show a result dialog (`No-Orphan Fix`):
   - `Fixed N of M text field(s). All changes can be undone with Ctrl+Z.`
   - or `Checked M text field(s). Everything already looks correct.`
   - or `No text fields found.`
   - plus `Errors: ...` if any.

## 5. User Interface

No configuration UI. A single result dialog after the run.

| Dialog | Content |
|--------|---------|
| `No-Orphan Fix` | Result message (fixed / already-correct / no-text-fields, plus errors) |

## 6. Output

- Regular spaces replaced with `U+00A0` (non-breaking space) after orphan characters/prepositions, in place, preserving all other formatting.
- One undo step per fixed text field (compound command).
- No `console.log()` output — all feedback goes to the result dialog.

## 7. Error Handling

| Condition | Message | Behavior |
|-----------|---------|----------|
| No document | `Error: No document is open.` (dialog) | abort |
| No text fields | `No text fields found.` (dialog) | stop, no changes |
| Per-node failure | message appended to `Errors: ...` in result dialog | continue with next node |

## 8. File Layout

```
scripts/hanging-chars/
├── source/hanging-chars.js    # editable source (SDK >= 3.3.0 imports)
├── release/hanging-chars.js   # tested release (copied from source)
└── README.md                  # user-facing readme
```

## 9. Test Checklist

- [ ] Runs with no document → error dialog, no crash
- [ ] Runs on document without text → `No text fields found.` dialog
- [ ] Single letters (`я иду`, `a cat`) get NBSP after the letter
- [ ] Listed 2-letter prepositions (`на столе`, `in box`) get NBSP
- [ ] Listed 3-letter prepositions (`под столом`, `the cat`) get NBSP
- [ ] Non-listed 2/3-letter words (`дом стоит`) are NOT touched
- [ ] Already-fixed text → `Everything already looks correct.`
- [ ] Undo (`Ctrl+Z`) restores original spaces
- [ ] `affinity-check` reports no errors (only `affinity:*` imports)

## 10. Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | — | Initial stable (pre-migration baseline) |
| 1.1.0 | 2026-09-16 | SDK 3.3.0 migration: imports moved to `/....js` form, `Dialog.show()` → `runModal()` |
