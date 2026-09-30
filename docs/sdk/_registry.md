# SDK 33000 — реестр страниц справочника

> Источник: https://sdk.affinity.studio/33000/js/ (снят 2026-09-30).
> Полные списки URL: `_registry/registry_{apis,handles,classes,enums,modules}.txt`.

| Раздел | Страниц | Формат URL |
|--------|---------|------------|
| APIs | 455 | `apis/<Name>Api/index.html` |
| Handles | 443 | `handles/<Name>Handle.html` |
| Classes | 58 | `classes/<Name>.html` |
| Enums | 143 | `enums/<Name>.html` |
| Modules | 20 | `modules/<name>.html` |
| **Итого** | **1119** | |

## Модули (20)

`application`, `brushes`, `buffer`, `colours`, `commands`, `common`, `dom`,
`fills`, `fonts`, `fs`, `geometry`, `hatches`, `layereffects`, `linestyles`,
`network`, `os`, `raster`, `story`, `timers`, `ui`.

## JSLib

`JSLib.zip` (1 162 325 байт) распакован и пословно сверен с `docs/JSLib/`:
147/147 файлов совпадают по именам; содержимое идентично, кроме
`tests/TextTest.afdesign` (в ZIP — пустой файл, в репозитории — содержательный,
оставлен вариант репозитория).

## План покрытия в `docs/sdk/`

| Файл | Модули |
|------|--------|
| `application.md` | `application` + `os` + `buffer` + `timers` |
| `dom.md` | `dom` (Document, nodes, spreads, selections) |
| `commands.md` | `commands` |
| `geometry.md` | `geometry` |
| `colours-fills.md` | `colours` + `fills` + `hatches` + `brushes` |
| `story-text.md` | `story` |
| `ui-dialogs.md` | `ui` |
| `linestyles-effects.md` | `linestyles` + `layereffects` |
| `fonts.md` | `fonts` |
| `raster.md` | `raster` |
| `fs-network-os.md` | `fs` + `network` |
| `handles.md` / `classes.md` / `enums.md` | полные перечни |
| `js-lib-map.md` | карта JSLib-файл → raw-модули → классы |
| `_overview.md` | карта 20 модулей, соглашения, `NOT_ALLOWED`, `*Async` |
