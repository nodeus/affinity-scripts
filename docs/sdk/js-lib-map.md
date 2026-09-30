# JSLib — карта врапперов на raw-модули (SDK 33000)

> Сгенерировано из `require('affinity:…')` в `docs/JSLib/`.
> В скриптах используйте JSLib-пути: `require('/document.js')`.
> Три файла без raw-зависимостей (`collection.js`, `handleobject.js`, `inspect.js`) — базовые утилиты.

| JSLib-файл | Raw-модули |
|---|---|
| `/application.js` | `affinity:application`, `affinity:ui` |
| `/artboardinterface.js` | `affinity:dom` |
| `/artboardproperties.js` | `affinity:dom` |
| `/baseboxinterface.js` | `affinity:dom` |
| `/blendmodeinterface.js` | `affinity:common`, `affinity:dom` |
| `/brushfillinterface.js` | `affinity:common`, `affinity:dom` |
| `/buffer.js` | `affinity:buffer` |
| `/collection.js` | — (утилита) |
| `/colours.js` | `affinity:colours`, `affinity:common`, `affinity:raster` |
| `/commands.js` | `affinity:colours`, `affinity:commands`, `affinity:common`, `affinity:dom`, `affinity:fills`, `affinity:geometry`, `affinity:layereffects`, `affinity:linestyles`, `affinity:raster` |
| `/compoundoperationinterface.js` | `affinity:dom` |
| `/configuration.js` | `affinity:common` |
| `/curvesinterface.js` | `affinity:dom`, `affinity:geometry` |
| `/descriptioninterface.js` | `affinity:dom` |
| `/dialog.js` | `affinity:common`, `affinity:dom`, `affinity:ui` |
| `/document.js` | `affinity:colours`, `affinity:commands`, `affinity:common`, `affinity:dom`, `affinity:raster` |
| `/documentproperties.js` | `affinity:common`, `affinity:dom`, `affinity:geometry`, `affinity:raster` |
| `/drawingscale.js` | `affinity:common`, `affinity:dom` |
| `/editabilityinterface.js` | `affinity:dom` |
| `/environment.js` | `affinity:application`, `affinity:common` |
| `/exportableinterface.js` | `affinity:dom` |
| `/exportconfig.js` | `affinity:common`, `affinity:dom` |
| `/fills.js` | `affinity:common`, `affinity:fills`, `affinity:raster` |
| `/fonts.js` | `affinity:common`, `affinity:fonts` |
| `/fs.js` | `affinity:fs` |
| `/geometry.js` | `affinity:common`, `affinity:geometry` |
| `/glyphatts.js` | `affinity:story` |
| `/glyphs.js` | `affinity:story` |
| `/handleobject.js` | — (утилита) |
| `/hatch.js` | `affinity:common`, `affinity:hatches` |
| `/imageresourceinterface.js` | `affinity:dom`, `affinity:raster` |
| `/inspect.js` | — (утилита) |
| `/layereffects.js` | `affinity:common`, `affinity:geometry`, `affinity:layereffects`, `affinity:linestyles` |
| `/layereffectsinterface.js` | `affinity:common`, `affinity:dom` |
| `/linestyle.js` | `affinity:linestyles` |
| `/linestyleinterface.js` | `affinity:common`, `affinity:dom` |
| `/logging.js` | `affinity:common` |
| `/marginsinterface.js` | `affinity:dom` |
| `/network.js` | `affinity:network` |
| `/nodes.js` | `affinity:colours`, `affinity:common`, `affinity:dom`, `affinity:raster`, `affinity:story` |
| `/os.js` | `affinity:os` |
| `/pageboxinterface.js` | `affinity:dom` |
| `/paragraphatts.js` | `affinity:story` |
| `/pathbrush.js` | `affinity:brushes` |
| `/physicalrootinterface.js` | `affinity:dom` |
| `/physicalrootpropertiesinterface.js` | `affinity:dom` |
| `/pictureframeinterface.js` | `affinity:dom` |
| `/pixelaccessor.js` | `affinity:raster` |
| `/rasterbrush.js` | `affinity:brushes`, `affinity:common` |
| `/rasterinterface.js` | `affinity:dom`, `affinity:raster` |
| `/rasterobject.js` | `affinity:raster` |
| `/rasterselection.js` | `affinity:dom` |
| `/selectable.js` | `affinity:dom` |
| `/selections.js` | `affinity:common`, `affinity:dom`, `affinity:story` |
| `/shapeinterface.js` | `affinity:dom`, `affinity:geometry` |
| `/shapes.js` | `affinity:geometry` |
| `/story.js` | `affinity:story` |
| `/storybuilder.js` | `affinity:raster`, `affinity:story` |
| `/storydelta.js` | `affinity:fonts`, `affinity:story` |
| `/storyinterface.js` | `affinity:dom`, `affinity:story` |
| `/taginterface.js` | `affinity:dom` |
| `/textframeinterface.js` | `affinity:common`, `affinity:dom` |
| `/timers.js` | `affinity:timers` |
| `/transforminterface.js` | `affinity:dom` |
| `/transparencyinterface.js` | `affinity:dom` |
| `/units.js` | `affinity:common` |
| `/visibilityinterface.js` | `affinity:dom` |

## Главные точки входа

| Задача | Require |
|---|---|
| Документ, спреды | `require('/document.js')` → `Document` |
| Команды мутаций | `require('/commands.js')` → `DocumentCommand`, билдеры |
| Выделения | `require('/selections.js')` → `Selection`, `TextSelection` |
| Фигуры/геометрия | `require('/shapes.js')`, `require('/geometry.js')` |
| Заливки/цвета | `require('/fills.js')`, `require('/colours.js')` |
| Текст | `require('/storybuilder.js')`, `require('/glyphatts.js')`, `require('/paragraphatts.js')` |
| Диалоги | `require('/dialog.js')` → `Dialog`, `runModal()` |
| Приложение | `require('/application.js')` → `app` |
| Енамы | `require('affinity:common')` → `BlendMode`, `UnitType` |
