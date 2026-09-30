# MCP-инструменты Affinity (11)

> Сервер `http://localhost:6767`. Полные старые описания: `/old-docs/01-mcp-tools.md`.

| # | Инструмент | Назначение | Параметры |
|---|------------|------------|-----------|
| 1 | `affinity_execute_script` | Выполнить JS в Affinity | `script: string` |
| 2 | `affinity_read_sdk_documentation_topic` | Читать тему SDK (начать с `preamble`!) | `filename: string` |
| 3 | `affinity_list_sdk_documentation` | Список тем документации | — |
| 4 | `affinity_list_library_scripts` | Список скриптов библиотеки | — |
| 5 | `affinity_read_library_script` | Читать скрипт из библиотеки | `title: string` |
| 6 | `affinity_save_script_to_library` | Сохранить скрипт в библиотеку | `title, description, code` |
| 7 | `affinity_render_selection` | Рендер выделения в JPEG ≤1024px | `document_session_uuid` |
| 8 | `affinity_render_spread` | Рендер спреда в JPEG ≤1024px | `document_session_uuid, spread_index` |
| 9 | `affinity_search_sdk_hints` | Поиск решений в пуле подсказок | `prompt: string` |
| 10 | `affinity_add_sdk_hint` | Сохранить подсказку (сразу после решения!) | `hint: string` |
| 11 | `affinity_report_sdk_issue` | Сообщить о баге SDK (с кодом) | `description, code?` |

## Порядок работы

```
preamble → search_hints → list_docs/list_scripts → execute → render → add_hint → save_to_library
```

## Заметки

- `execute_script` возвращает только `console.log()`-вывод; `return` значения нет.
- Темы документации = JSLib-файлы (`document.js`, `nodes.js`…), тесты (`tests/…`) и примеры (`examples/…`).
- После каждого экспериментально найденного решения — сразу `add_sdk_hint`, иначе знание потеряется.
- `report_sdk_issue` — только для воспроизводимых багов SDK, с минимальным кодом.
