# Hanging Chars and Prepositions

Script for Affinity that fixes orphaned characters and prepositions by replacing regular spaces with non-breaking spaces (NBSP). Prevents single letters and short prepositions from being stranded at the end of a line.

## Features

- **Lone characters** — replaces space after single non-space characters (`A `, `Я `) with NBSP
- **2-letter prepositions** — strict list for Russian and English (`на`, `от`, `in`, `on`, etc.)
- **3-letter prepositions** — strict list for Russian and English (`под`, `при`, `the`, `and`, etc.)
- Processes all text nodes across all spreads
- Shows summary dialog, all changes undoable via Ctrl+Z

## Supported Languages

Russian, English (extendable via `PREPOSITIONS_2` / `PREPOSITIONS_3` sets)

## Usage

Run via MCP Affinity server: `affinity_execute_script` or paste into Script Manager for Affinity.

## Version

1.0.0
