# Текст: Story, глифы, атрибуты (SDK 33000)

> API-референс · Модуль `affinity:story`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (34), методов: 332.

## AnchorGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/AnchorGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | AnchorGlyphHandle |
| `cloneAsAnchorGlyph()` | — | AnchorGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | AnchorGlyphHandle |

## CapturedDateTimeGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/CapturedDateTimeGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CapturedDateTimeGlyphHandle |
| `cloneAsCapturedDateTimeGlyph()` | — | CapturedDateTimeGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | CapturedDateTimeGlyphHandle |
| `getDateTime()` | — | Number |

## CharGlyphApi

> Модуль `affinity:story` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/CharGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CharGlyphHandle |
| `cloneAsCharGlyph()` | — | CharGlyphHandle |
| `create(char32)` | char32: Number | CharGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | CharGlyphHandle |
| `getBaseChar32()` | — | Number |
| `getChar32()` | — | Number |
| `getString()` | — | String |

## CrossReferenceGlyphApi

> Модуль `affinity:story` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/CrossReferenceGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CrossReferenceGlyphHandle |
| `cloneAsCrossReferenceGlyph()` | — | CrossReferenceGlyphHandle |
| `create()` | — | CrossReferenceGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | CrossReferenceGlyphHandle |
| `getTargetType()` | — | CrossReferenceTargetType |
| `isTargetDifferentChapter()` | — | Boolean |
| `usesStyles()` | — | Boolean |

## CrossReferenceSubGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/CrossReferenceSubGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CrossReferenceSubGlyphHandle |
| `cloneAsCrossReferenceSubGlyph()` | — | CrossReferenceSubGlyphHandle |
| `create(crossReferenceSubGlyphType)` | crossReferenceSubGlyphType: CrossReferenceSubGlyphType | CrossReferenceSubGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | CrossReferenceSubGlyphHandle |

## CustomFieldGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/CustomFieldGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | CustomFieldGlyphHandle |
| `cloneAsCustomFieldGlyph()` | — | CustomFieldGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | CustomFieldGlyphHandle |

## DataMergeFieldGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/DataMergeFieldGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DataMergeFieldGlyphHandle |
| `cloneAsDataMergeFieldGlyph()` | — | DataMergeFieldGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | DataMergeFieldGlyphHandle |
| `getDataMergeFieldId()` | — | String |

## DataMergeGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/DataMergeGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DataMergeGlyphHandle |
| `cloneAsDataMergeGlyph()` | — | DataMergeGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | DataMergeGlyphHandle |

## DataMergeSourceGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/DataMergeSourceGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DataMergeSourceGlyphHandle |
| `cloneAsDataMergeSourceGlyph()` | — | DataMergeSourceGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | DataMergeSourceGlyphHandle |
| `getDataMergeSourceType()` | — | DataMergeSourceType |

## DocumentFieldGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/DocumentFieldGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | DocumentFieldGlyphHandle |
| `cloneAsDocumentFieldGlyph()` | — | DocumentFieldGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | DocumentFieldGlyphHandle |
| `getDocumentFieldType()` | — | DocumentFieldType |

## FieldGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/FieldGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FieldGlyphHandle |
| `cloneAsFieldGlyph()` | — | FieldGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | FieldGlyphHandle |
| `getFieldName()` | — | String |

## FillerTextGlyphApi

> Модуль `affinity:story` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/FillerTextGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FillerTextGlyphHandle |
| `cloneAsFillerTextGlyph()` | — | FillerTextGlyphHandle |
| `create(fillerTextType, sourceBegin)` | fillerTextType: FillerTextType, sourceBegin: Number | FillerTextGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | FillerTextGlyphHandle |
| `getFillerTextType()` | — | FillerTextType |
| `getSourceBegin()` | — | Number |

## FormattableFieldGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/FormattableFieldGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | FormattableFieldGlyphHandle |
| `cloneAsFormattableFieldGlyph()` | — | FormattableFieldGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | FormattableFieldGlyphHandle |
| `getFieldDataType()` | — | FieldDataType |

## GlyphApi

> Модуль `affinity:story` · методов: 29 · [SDK](https://sdk.affinity.studio/33000/js/apis/GlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `canSoftBreakAfter()` | — | Boolean |
| `canSoftBreakBefore()` | — | Boolean |
| `clone()` | — | GlyphHandle |
| `cloneAsGlyph()` | — | GlyphHandle |
| `getDescription(format)` | format: StoryIoFormat | String |
| `getGlyphType()` | — | GlyphType |
| `getHardBreakType()` | — | HardBreakType |
| `getSoftBreakType()` | — | SoftBreakType |
| `getWordPartType()` | — | WordPartType |
| `isAlpha()` | — | Boolean |
| `isAlphaNumeric()` | — | Boolean |
| `isCombining()` | — | Boolean |
| `isConsolidated()` | — | Boolean |
| `isDeletable()` | — | Boolean |
| `isHiddenFromOpenType()` | — | Boolean |
| `isJustificationSpace()` | — | Boolean |
| `isLowercase()` | — | Boolean |
| `isMarking()` | — | Boolean |
| `isMarkup()` | — | Boolean |
| `isMidWordPunctuation()` | — | Boolean |
| `isNumeric()` | — | Boolean |
| `isParagraphBreak()` | — | Boolean |
| `isSoftBreak()` | — | Boolean |
| `isStoryTerminator()` | — | Boolean |
| `isTab()` | — | Boolean |
| `isTableCellBreak()` | — | Boolean |
| `isUppercase()` | — | Boolean |
| `isZeroWidth()` | — | Boolean |
| `wantsFastFind()` | — | Boolean |

## GlyphAttsApi

> Модуль `affinity:story` · методов: 42 · [SDK](https://sdk.affinity.studio/33000/js/apis/GlyphAttsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | GlyphAttsHandle |
| `create()` | — | GlyphAttsHandle |
| `getBrushFill()` | — | FillDescriptorHandle |
| `getCapsType()` | — | CapsType |
| `getDoubleValue(att)` | att: GlyphAttDoubleType | Number |
| `getFont()` | — | FontHandle |
| `getHighlightFill()` | — | FillDescriptorHandle |
| `getIsNoBreak()` | — | Boolean |
| `getLeadingOverrideType()` | — | LeadingOverrideType |
| `getLineStyleDescriptor()` | — | LineStyleDescriptorHandle |
| `getOpenTypeLanguageTag()` | — | Number |
| `getOpenTypeScriptTag()` | — | Number |
| `getOpticalAlignmentType()` | — | OpticalAlignmentType |
| `getPenFill()` | — | FillDescriptorHandle |
| `getStrikeoutFill()` | — | FillDescriptorHandle |
| `getStrikeoutType()` | — | TypographicLineType |
| `getStringValue(att)` | att: GlyphAttStringType | String |
| `getSuperSubType()` | — | SuperSubType |
| `getTocRoleType()` | — | TocRoleType |
| `getTransparency()` | — | FillDescriptorHandle |
| `getUnderlineFill()` | — | FillDescriptorHandle |
| `getUnderlineType()` | — | TypographicLineType |
| `setBrushFill(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setCapsType(type)` | type: CapsType | — |
| `setDoubleValue(att, value)` | att: GlyphAttDoubleType, value: Number | — |
| `setFont(font)` | font: FontHandle | — |
| `setHighlightFill(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setIsNoBreak(isNoBreak)` | isNoBreak: Boolean | — |
| `setLeadingOverrideType(type)` | type: LeadingOverrideType | — |
| `setLineStyleDescriptor(lineStyleDescriptor)` | lineStyleDescriptor: LineStyleDescriptorHandle | — |
| `setOpenTypeLanguageTag(tag)` | tag: Number | — |
| `setOpenTypeScriptTag(tag)` | tag: Number | — |
| `setOpticalAlignmentType(type)` | type: OpticalAlignmentType | — |
| `setPenFill(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setStrikeoutFill(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setStrikeoutType(type)` | type: TypographicLineType | — |
| `setStringValue(att, value)` | att: GlyphAttStringType, value: String | — |
| `setSuperSubType(type)` | type: SuperSubType | — |
| `setTocRoleType(type)` | type: TocRoleType | — |
| `setTransparency(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setUnderlineFill(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | — |
| `setUnderlineType(type)` | type: TypographicLineType | — |

## GlyphIndexGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/GlyphIndexGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | GlyphIndexGlyphHandle |
| `cloneAsGlyphIndexGlyph()` | — | GlyphIndexGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | GlyphIndexGlyphHandle |
| `getIndex()` | — | Number |

## HardBreakGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/HardBreakGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | HardBreakGlyphHandle |
| `cloneAsHardBreakGlyph()` | — | HardBreakGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | HardBreakGlyphHandle |

## IndentToHereGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/IndentToHereGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | IndentToHereGlyphHandle |
| `cloneAsIndentToHereGlyph()` | — | IndentToHereGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | IndentToHereGlyphHandle |

## IndexMarkGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/IndexMarkGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | IndexMarkGlyphHandle |
| `cloneAsIndexMarkGlyph()` | — | IndexMarkGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | IndexMarkGlyphHandle |
| `getGlyphStyle()` | — | String |

## ListNumberGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ListNumberGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ListNumberGlyphHandle |
| `cloneAsListNumberGlyph()` | — | ListNumberGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | ListNumberGlyphHandle |
| `getLevel()` | — | Number |

## NoteNumberGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/NoteNumberGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | NoteNumberGlyphHandle |
| `cloneAsNoteNumberGlyph()` | — | NoteNumberGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | NoteNumberGlyphHandle |

## PageNumberGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/PageNumberGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PageNumberGlyphHandle |
| `cloneAsPageNumberGlyph()` | — | PageNumberGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | PageNumberGlyphHandle |
| `getPageNumberType()` | — | PageNumberType |

## ParagraphAttsApi

> Модуль `affinity:story` · методов: 50 · [SDK](https://sdk.affinity.studio/33000/js/apis/ParagraphAttsApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ParagraphAttsHandle |
| `create()` | — | ParagraphAttsHandle |
| `getAlignToBaselineGrid()` | — | Boolean |
| `getAlignXType()` | — | ParagraphAlignXType |
| `getDoubleValue(att)` | att: ParagraphAttDoubleType | Number |
| `getHyphenateMinLength()` | — | Number |
| `getHyphenateMinPrefix()` | — | Number |
| `getHyphenateMinSuffix()` | — | Number |
| `getIsAutoHyphenate()` | — | Boolean |
| `getIsBookEndnotes()` | — | Boolean |
| `getIsIndex()` | — | Boolean |
| `getIsKeepTogether()` | — | Boolean |
| `getIsKeepWithPrevious()` | — | Boolean |
| `getIsPreventOrphans()` | — | Boolean |
| `getIsPreventWidows()` | — | Boolean |
| `getIsSumBeforeAndAfterSpace()` | — | Boolean |
| `getKeepWithNext()` | — | Number |
| `getLeadingType()` | — | ParagraphLeadingType |
| `getLineBreakModeType()` | — | ParagraphLineBreakModeType |
| `getMaxConsecutiveHyphens()` | — | Number |
| `getPDFExportTagType()` | — | ParagraphPDFExportTagType |
| `getStartAtHardBreakType()` | — | ParagraphStartAtHardBreakType |
| `getStringValue(att)` | att: ParagraphAttStringType | String |
| `getUseModernLeading()` | — | Boolean |
| `getUseSpaceBeforeMode()` | — | ParagraphUseSpaceBeforeMode |
| `getUseSpaceBetweenSameStyles()` | — | Boolean |
| `setAlignToBaselineGrid(value)` | value: Boolean | — |
| `setAlignXType(type)` | type: ParagraphAlignXType | — |
| `setDoubleValue(att, value)` | att: ParagraphAttDoubleType, value: Number | — |
| `setHyphenateMinLength(value)` | value: Number | — |
| `setHyphenateMinPrefix(value)` | value: Number | — |
| `setHyphenateMinSuffix(value)` | value: Number | — |
| `setIsAutoHyphenate(value)` | value: Boolean | — |
| `setIsBookEndnotes(value)` | value: Boolean | — |
| `setIsIndex(value)` | value: Boolean | — |
| `setIsKeepTogether(value)` | value: Boolean | — |
| `setIsKeepWithPrevious(value)` | value: Boolean | — |
| `setIsPreventOrphans(value)` | value: Boolean | — |
| `setIsPreventWidows(value)` | value: Boolean | — |
| `setIsSumBeforeAndAfterSpace(value)` | value: Boolean | — |
| `setKeepWithNext(value)` | value: Number | — |
| `setLeadingType(type)` | type: ParagraphLeadingType | — |
| `setLineBreakModeType(type)` | type: ParagraphLineBreakModeType | — |
| `setMaxConsecutiveHyphens(value)` | value: Number | — |
| `setPDFExportTagType(type)` | type: ParagraphPDFExportTagType | — |
| `setStartAtHardBreakType(type)` | type: ParagraphStartAtHardBreakType | — |
| `setStringValue(att, value)` | att: ParagraphAttStringType, value: String | — |
| `setUseModernLeading(value)` | value: Boolean | — |
| `setUseSpaceBeforeMode(mode)` | mode: ParagraphUseSpaceBeforeMode | — |
| `setUseSpaceBetweenSameStyles(value)` | value: Boolean | — |

## PinGlyphApi

> Модуль `affinity:story` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/PinGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | PinGlyphHandle |
| `cloneAsPinGlyph()` | — | PinGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | PinGlyphHandle |
| `getNotePosition()` | — | NotePosition |
| `getNoteType()` | — | NoteType |
| `isInline()` | — | Boolean |
| `isNote()` | — | Boolean |

## RangenoteBodyGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/RangenoteBodyGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RangenoteBodyGlyphHandle |
| `cloneAsRangenoteBodyGlyph()` | — | RangenoteBodyGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | RangenoteBodyGlyphHandle |
| `isLive()` | — | Boolean |

## RangenoteEndGlyphApi

> Модуль `affinity:story` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/RangenoteEndGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RangenoteEndGlyphHandle |
| `cloneAsRangenoteEndGlyph()` | — | RangenoteEndGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | RangenoteEndGlyphHandle |
| `isLive()` | — | Boolean |

## RangenoteReferenceGlyphApi

> Модуль `affinity:story` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/RangenoteReferenceGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RangenoteReferenceGlyphHandle |
| `cloneAsRangenoteReferenceGlyph()` | — | RangenoteReferenceGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | RangenoteReferenceGlyphHandle |
| `getNotePosition()` | — | NotePosition |
| `getNoteType()` | — | NoteType |

## RightIndentTabGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/RightIndentTabGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RightIndentTabGlyphHandle |
| `cloneAsRightIndentTabGlyph()` | — | RightIndentTabGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | RightIndentTabGlyphHandle |

## RunningHeaderGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/RunningHeaderGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | RunningHeaderGlyphHandle |
| `cloneAsRunningHeaderGlyph()` | — | RunningHeaderGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | RunningHeaderGlyphHandle |

## SectionNameGlyphApi

> Модуль `affinity:story` · методов: 3 · [SDK](https://sdk.affinity.studio/33000/js/apis/SectionNameGlyphApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | SectionNameGlyphHandle |
| `cloneAsSectionNameGlyph()` | — | SectionNameGlyphHandle |
| `fromGlyph(glyph)` | glyph: GlyphHandle | SectionNameGlyphHandle |

## StoryApi

> Модуль `affinity:story` · методов: 32 · [SDK](https://sdk.affinity.studio/33000/js/apis/StoryApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `containsBookEndnotes()` | — | Boolean |
| `containsIndex()` | — | Boolean |
| `containsToc()` | — | Boolean |
| `findParagraphBreak(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `findWordBegin(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `findWordEnd(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `findWordPart(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `getGlyph(pos)` | pos: Number | GlyphHandle |
| `getGlyphAtts(pos)` | pos: Number | GlyphAttsHandle |
| `getGlyphAttsRunEnd(pos, maxPos)` | pos: Number, maxPos: Number | Number |
| `getGlyphType(pos)` | pos: Number | GlyphType |
| `getHardBreakType(pos)` | pos: Number | HardBreakType |
| `getLength()` | — | Number |
| `getParagraphAtts(pos)` | pos: Number | ParagraphAttsHandle |
| `getParagraphAttsRunEnd(pos, maxPos)` | pos: Number, maxPos: Number | Number |
| `getSoftBreakType(pos)` | pos: Number | SoftBreakType |
| `getText(storyPos, maxNum, format)` | storyPos: Number, maxNum: Number, format: StoryIoFormat | String |
| `getWordPartType(pos)` | pos: Number | WordPartType |
| `isCellBegin(pos)` | pos: Number | Boolean |
| `isCellEnd(pos)` | pos: Number | Boolean |
| `isEmpty()` | — | Boolean |
| `isParagraphBreak(pos)` | pos: Number | Boolean |
| `isRangenoteBodyStory()` | — | Boolean |
| `isTable()` | — | Boolean |
| `isWordBegin(pos)` | pos: Number | Boolean |
| `isWordEnd(pos)` | pos: Number | Boolean |
| `isWordPart(pos)` | pos: Number | Boolean |
| `rFindParagraphBreak(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `rFindWordBegin(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `rFindWordEnd(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `rFindWordPart(startPos, maxNum)` | startPos: Number, maxNum: Number | Number |
| `usesGlobalNumbering()` | — | Boolean |

## StoryBuilderApi

> Модуль `affinity:story` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/StoryBuilderApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addParagraphBreak()` | — | — |
| `addText(utf8Text)` | utf8Text: String | — |
| `applyGlyphDelta(delta)` | delta: StoryDeltaHandle | — |
| `applyParagraphDelta(delta)` | delta: StoryDeltaHandle | — |
| `clearText()` | — | — |
| `create()` | — | StoryBuilderHandle |
| `getGlyphAtts()` | — | GlyphAttsHandle |
| `getParagraphAtts()` | — | ParagraphAttsHandle |
| `setGlyphAtts(glyphAtts)` | glyphAtts: GlyphAttsHandle | — |
| `setParagraphAtts(paragraphAtts)` | paragraphAtts: ParagraphAttsHandle | — |
| `setToArtisticTextDefaultStyle(dpi, format)` | dpi: Number, format: RasterFormat | — |
| `setToFrameTextDefaultStyle(dpi, format)` | dpi: Number, format: RasterFormat | — |

## StoryDeltaApi

> Модуль `affinity:story` · методов: 51 · [SDK](https://sdk.affinity.studio/33000/js/apis/StoryDeltaApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `createAlignToBaselineGridDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createAlignXDelta(type)` | type: ParagraphAlignXType | StoryDeltaHandle |
| `createBrushFillDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createCapsTypeDelta(type)` | type: CapsType | StoryDeltaHandle |
| `createCompositeDelta(deltas)` | deltas: StoryDeltaHandle[] | StoryDeltaHandle |
| `createFamilyNameDelta(familyName)` | familyName: String | StoryDeltaHandle |
| `createFontDelta(fields, font)` | fields: FontField, font: FontHandle | StoryDeltaHandle |
| `createGlyphDoubleDelta(key, value)` | key: GlyphAttDoubleType, value: Number | StoryDeltaHandle |
| `createGlyphLineStyleDescriptorDelta(lineStyleDescriptor)` | lineStyleDescriptor: LineStyleDescriptorHandle | StoryDeltaHandle |
| `createGlyphStringDelta(key, value)` | key: GlyphAttStringType, value: String | StoryDeltaHandle |
| `createHighlightFillDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createHyphenateMinLengthDelta(value)` | value: Number | StoryDeltaHandle |
| `createHyphenateMinPrefixDelta(value)` | value: Number | StoryDeltaHandle |
| `createHyphenateMinSuffixDelta(value)` | value: Number | StoryDeltaHandle |
| `createIsAutoHyphenateDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createIsKeepTogetherDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createIsKeepWithPreviousDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createIsNoBreakDelta(isNoBreak)` | isNoBreak: Boolean | StoryDeltaHandle |
| `createIsPreventOrphansDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createIsPreventWidowsDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createIsSumBeforeAndAfterSpaceDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createItalicDelta(italic)` | italic: Boolean | StoryDeltaHandle |
| `createKeepWithNextDelta(value)` | value: Number | StoryDeltaHandle |
| `createLeadingOverrideTypeDelta(type)` | type: LeadingOverrideType | StoryDeltaHandle |
| `createLeadingTypeDelta(type)` | type: ParagraphLeadingType | StoryDeltaHandle |
| `createLeftIndentDelta(value)` | value: Number | StoryDeltaHandle |
| `createLineBreakModeDelta(mode)` | mode: ParagraphLineBreakModeType | StoryDeltaHandle |
| `createMaxConsecutiveHyphensDelta(value)` | value: Number | StoryDeltaHandle |
| `createOpenTypeLanguageTagDelta(tag)` | tag: Number | StoryDeltaHandle |
| `createOpenTypeScriptTagDelta(tag)` | tag: Number | StoryDeltaHandle |
| `createOpticalAlignmentTypeDelta(type)` | type: OpticalAlignmentType | StoryDeltaHandle |
| `createPDFExportTagDelta(type)` | type: ParagraphPDFExportTagType | StoryDeltaHandle |
| `createParagraphDoubleDelta(key, value)` | key: ParagraphAttDoubleType, value: Number | StoryDeltaHandle |
| `createParagraphStringDelta(key, value)` | key: ParagraphAttStringType, value: String | StoryDeltaHandle |
| `createPenFillDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createPostscriptNameDelta(postscriptName)` | postscriptName: String | StoryDeltaHandle |
| `createRightIndentDelta(value)` | value: Number | StoryDeltaHandle |
| `createSetAttsDelta(glyphAttsOrNull, paragraphAttsOrNull)` | glyphAttsOrNull: GlyphAttsHandle, paragraphAttsOrNull: ParagraphAttsHandle | StoryDeltaHandle |
| `createStartAtHardBreakDelta(type)` | type: ParagraphStartAtHardBreakType | StoryDeltaHandle |
| `createStrikeoutFillDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createStrikeoutTypeDelta(type)` | type: TypographicLineType | StoryDeltaHandle |
| `createSuperSubTypeDelta(type)` | type: SuperSubType | StoryDeltaHandle |
| `createTocRoleTypeDelta(type)` | type: TocRoleType | StoryDeltaHandle |
| `createTransparencyDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createUnderlineFillDelta(fillDescriptorOrNull)` | fillDescriptorOrNull: FillDescriptorHandle | StoryDeltaHandle |
| `createUnderlineTypeDelta(type)` | type: TypographicLineType | StoryDeltaHandle |
| `createUseModernLeadingDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createUseSpaceBeforeModeDelta(mode)` | mode: ParagraphUseSpaceBeforeMode | StoryDeltaHandle |
| `createUseSpaceBetweenSameStylesDelta(value)` | value: Boolean | StoryDeltaHandle |
| `createWeightDelta(weight)` | weight: Number | StoryDeltaHandle |
| `createWidthDelta(width)` | width: FontWidth | StoryDeltaHandle |

## StoryRangeApi

> Модуль `affinity:story` · методов: 5 · [SDK](https://sdk.affinity.studio/33000/js/apis/StoryRangeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `getCount(range)` | range: StoryRange | Number |
| `getReversed(range)` | range: StoryRange | StoryRange |
| `isBackwards(range)` | range: StoryRange | Boolean |
| `isEmpty(range)` | range: StoryRange | Boolean |
| `isForwards(range)` | range: StoryRange | Boolean |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `boldItalics.js`
- `breakFrame.js`
- `makeGrid.js`
- `splitStory.js`
- `tableFromJson.js`
