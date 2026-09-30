# Affinity SDK — Text/Story, Effects, and Property Modules

Extracted from Affinity JSLib (`C:\Program Files\Affinity\Affinity\Resources\JSLib\`).

> **Note:** `filter_ranges.js` and `adjustment_ranges.js` are not .js files in JSLib — they are JSON data files served by the MCP server's `read_sdk_documentation_topic` tool. They could not be extracted without the MCP server connection.

---

## 1. story.js

```javascript
const { GlyphType, HardBreakType, SoftBreakType, StoryApi, StoryIoFormat, StoryRange, TableAxis, WordPartType } = require('affinity:story');
const { Collection } = require('./collection.js');
const { GlyphAtts } = require('./glyphatts.js');
const { HandleObject } = require('./handleobject.js');
const { ParagraphAtts } = require('./paragraphatts.js');
const GlyphsModule = require('./glyphs.js');

class Story extends HandleObject {
    constructor(handle) { super(handle); }

    static IoFormat = StoryIoFormat;
    static Range = StoryRange;

    get [Symbol.toStringTag]() { return 'Story'; }
    get containsBookEndnotes() { return StoryApi.containsBookEndnotes(this.handle); }
    get containsIndex() { return StoryApi.containsIndex(this.handle); }
    get containsToc() { return StoryApi.containsToc(this.handle); }
    get isEmpty() { return StoryApi.isEmpty(this.handle); }
    get isRangenoteBodyStory() { return StoryApi.isRangenoteBodyStory(this.handle); }
    get isTable() { return StoryApi.isTable(this.handle); }
    get usesGlobalNumbering() { return StoryApi.usesGlobalNumbering(this.handle); }
    get length() { return StoryApi.getLength(this.handle); }

    getGlyph(pos) { const handle = StoryApi.getGlyph(this.handle, pos); return GlyphsModule.createTypedGlyph(handle); }
    getGlyphType(pos) { return StoryApi.getGlyphType(this.handle, pos); }
    isWordBegin(pos) { return StoryApi.isWordBegin(this.handle, pos); }
    isWordEnd(pos) { return StoryApi.isWordEnd(this.handle, pos); }
    isWordPart(pos) { return StoryApi.isWordPart(this.handle, pos); }
    isParagraphBreak(pos) { return StoryApi.isParagraphBreak(this.handle, pos); }
    getSoftBreakType(pos) { return StoryApi.getSoftBreakType(this.handle, pos); }
    getHardBreakType(pos) { return StoryApi.getHardBreakType(this.handle, pos); }
    getWordPartType(pos) { return StoryApi.getWordPartType(this.handle, pos); }

    findWordBegin(startPos = 0, maxNum = -1) { return StoryApi.findWordBegin(this.handle, startPos, maxNum); }
    findWordEnd(startPos = 0, maxNum = -1) { return StoryApi.findWordEnd(this.handle, startPos, maxNum); }
    findWordPart(startPos = 0, maxNum = -1) { return StoryApi.findWordPart(this.handle, startPos, maxNum); }
    findParagraphBreak(startPos = this.length - 1, maxNum = -1) { return StoryApi.findParagraphBreak(this.handle, startPos, maxNum); }
    rFindWordBegin(startPos = this.length - 1, maxNum = -1) { return StoryApi.rFindWordBegin(this.handle, startPos, maxNum); }
    rFindWordEnd(startPos = this.length - 1, maxNum = -1) { return StoryApi.rFindWordEnd(this.handle, startPos, maxNum); }
    rFindWordPart(startPos = this.length - 1, maxNum = -1) { return StoryApi.rFindWordPart(this.handle, startPos, maxNum); }
    rFindParagraphBreak(startPos, maxNum = -1) { return StoryApi.rFindParagraphBreak(this.handle, startPos, maxNum); }

    getWordRange(pos) {
        const begin = this.rFindWordBegin(pos);
        if (begin == -1) return new StoryRange(-1, -1);
        const end = this.findWordEnd(begin);
        if (end < pos) return new StoryRange(-1, -1);
        return new StoryRange(begin, end);
    }

    getParagraphRange(pos) {
        if (pos < 0) return new StoryRange(-1, -1);
        let end = this.findParagraphBreak(pos);
        if (end == -1) {
            const length = this.length;
            if (pos <= this.length) end = length;
            else return new StoryRange(-1, -1);
        }
        let begin = this.rFindParagraphBreak(end == pos ? pos - 1 : pos);
        if (begin == -1) begin = 0;
        else ++begin;
        return new StoryRange(begin, end);
    }

    get paragraphRanges() { /* Collection of StoryRange via generator */ }
    get wordRanges() { /* Collection of StoryRange via generator */ }
    indexes(includeTerminator) { const length = this.length + Boolean(includeTerminator); return Collection.range(0, length); }

    get punctuationParts() { return self.indexes().filter(i => self.getWordPartType(i).equals(WordPartType.Punctuation)); }
    get spaceParts() { return self.indexes().filter(i => self.getWordPartType(i).equals(WordPartType.Space)); }
    get wordParts() { return self.indexes().filter(i => self.getWordPartType(i).equals(WordPartType.Word)); }
    get nonSpaceParts() { return self.indexes().filter(i => !self.getWordPartType(i).equals(WordPartType.Space)); }

    get glyphs() { return self.indexes().map(i => self.getGlyph(i)); }
    get anchorGlyphs() { return this.glyphs.filter(glyph => glyph.isAnchorGlyph); }
    get charGlyphs() { return this.glyphs.filter(glyph => glyph.isCharGlyph); }
    get crossReferenceSubGlyphs() { return this.glyphs.filter(glyph => glyph.isCrossReferenceSubGlyph); }
    get documentFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isDocumentFieldGlyph); }
    get fieldGlyphs() { return this.glyphs.filter(glyph => glyph.isFieldGlyph); }
    get crossReferenceGlyphs() { return this.glyphs.filter(glyph => glyph.isCrossReferenceGlyph); }
    get fillerTextGlyphs() { return this.glyphs.filter(glyph => glyph.isFillerTextGlyph); }
    get formattableFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isFormattableFieldGlyph); }
    get capturedDateTimeGlyphs() { return this.glyphs.filter(glyph => glyph.isCapturedDateTimeGlyph); }
    get customFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isCustomFieldGlyph); }
    get dataMergeGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeGlyph); }
    get dataMergeFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeFieldGlyph); }
    get dataMergeSourceGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeSourceGlyph); }
    get runningHeaderGlyphs() { return this.glyphs.filter(glyph => glyph.isRunningHeaderGlyph); }
    get pageNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isPageNumberGlyph); }
    get rangenoteBodyGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteBodyGlyph); }
    get rangenoteReferenceGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteReferenceGlyph); }
    get sectionNameGlyphs() { return this.glyphs.filter(glyph => glyph.isSectionNameGlyph); }
    get glyphIndexGlyphs() { return this.glyphs.filter(glyph => glyph.isGlyphIndexGlyph); }
    get hardBreakGlyphs() { return this.glyphs.filter(glyph => glyph.isHardBreakGlyph); }
    get indentToHereGlyphs() { return this.glyphs.filter(glyph => glyph.isIndentToHereGlyph); }
    get indexMarkGlyphs() { return this.glyphs.filter(glyph => glyph.isIndexMarkGlyph); }
    get listNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isListNumberGlyph); }
    get noteNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isNoteNumberGlyph); }
    get pinGlyphs() { return this.glyphs.filter(glyph => glyph.isPinGlyph); }
    get rangenoteEndGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteEndGlyph); }
    get rightIndentTabGlyphs() { return this.glyphs.filter(glyph => glyph.isRightIndentTabGlyph); }

    getText(startPos = 0, maxLength = -1, format = StoryIoFormat.ClipboardDescriptions) { return StoryApi.getText(this.handle, startPos, maxLength, format); }
    getGlyphAtts(pos) { return new GlyphAtts(StoryApi.getGlyphAtts(this.handle, pos)); }
    getGlyphAttsRunEnd(pos, maxPos) { return StoryApi.getGlyphAttsRunEnd(this.handle, pos, maxPos); }
    getParagraphAtts(pos) { return new ParagraphAtts(StoryApi.getParagraphAtts(this.handle, pos)); }
    getParagraphAttsRunEnd(pos, maxPos) { return StoryApi.getParagraphAttsRunEnd(this.handle, pos, maxPos); }
    getTextRange(range, format = StoryIoFormat.ClipboardDescriptions) { return this.getText(range.begin, range.length, format); }
    get text() { return this.getText(); }

    getGlyphAttRunsFrom(start) { /* Collection of {glyphAtts, begin, end} */ }
    getParagraphAttRunsFrom(start) { /* Collection of {paragraphAtts, begin, end} */ }
    getAttRunsFrom(start) { /* Collection of {glyphAtts, paragraphAtts, begin, end} */ }
    get glyphAttRuns() { return this.getGlyphAttRunsFrom(0); }
    get paragraphAttRuns() { return this.getParagraphAttRunsFrom(0); }
    get attRuns() { return this.getAttRunsFrom(0); }
}

module.exports.GlyphType = GlyphType;
module.exports.Story = Story;
module.exports.StoryIoFormat = StoryIoFormat;
module.exports.StoryRange = StoryRange;
module.exports.HardBreakType = HardBreakType;
module.exports.SoftBreakType = SoftBreakType;
module.exports.TableAxis = TableAxis;
module.exports.WordPartType = WordPartType;
```

---

## 2. storybuilder.js

```javascript
const { RasterFormat } = require('affinity:raster');
const { StoryBuilderApi } = require('affinity:story');
const { GlyphAtts } = require('./glyphatts.js');
const { HandleObject } = require('./handleobject.js');
const { ParagraphAtts } = require('./paragraphatts.js');

class StoryBuilder extends HandleObject {
    get [Symbol.toStringTag]() { return 'StoryBuilder'; }
    constructor(handle) { super(handle); }

    static create() { return new StoryBuilder(StoryBuilderApi.create()); }

    setToFrameTextDefaultStyle(dpi, format) { StoryBuilderApi.setToFrameTextDefaultStyle(this.handle, dpi, format); return this; }
    setToArtisticTextDefaultStyle(dpi, format) { StoryBuilderApi.setToArtisticTextDefaultStyle(this.handle, dpi, format); return this; }
    clearText() { StoryBuilderApi.clearText(this.handle); return this; }
    addText(text) { StoryBuilderApi.addText(this.handle, text); return this; }
    addParagraphBreak() { StoryBuilderApi.addParagraphBreak(this.handle); return this; }
    setGlyphAtts(glyphAtts) { StoryBuilderApi.setGlyphAtts(this.handle, glyphAtts.handle); return this; }
    setParagraphAtts(paragraphAtts) { StoryBuilderApi.setParagraphAtts(this.handle, paragraphAtts.handle); return this; }
    applyGlyphDelta(delta) { StoryBuilderApi.applyGlyphDelta(this.handle, delta.handle); return this; }
    applyParagraphDelta(delta) { StoryBuilderApi.applyParagraphDelta(this.handle, delta.handle); return this; }

    get glyphAtts() { return new GlyphAtts(StoryBuilderApi.getGlyphAtts(this.handle)); }
    get paragraphAtts() { return new ParagraphAtts(StoryBuilderApi.getParagraphAtts(this.handle)); }
}

module.exports.RasterFormat = RasterFormat;
module.exports.StoryBuilder = StoryBuilder;
```

---

## 3. storydelta.js

```javascript
const { FontWidth } = require('affinity:fonts');
const {
    CapsType, GlyphAttDoubleType, GlyphAttStringType, LeadingOverrideType,
    OpticalAlignmentType, ParagraphAlignXType, ParagraphAttDoubleType,
    ParagraphAttStringType, ParagraphLeadingType, ParagraphLineBreakModeType,
    ParagraphPDFExportTagType, ParagraphStartAtHardBreakType,
    ParagraphUseSpaceBeforeMode, StoryDeltaApi, SuperSubType, TocRoleType,
    TypographicLineType
} = require('affinity:story');
const { HandleObject } = require('./handleobject.js');

class StoryDelta extends HandleObject {
    get [Symbol.toStringTag]() { return 'StoryDelta'; }
    constructor(handle) { super(handle); }

    static createUnderlineType(type) { return new StoryDelta(StoryDeltaApi.createUnderlineTypeDelta(type)); }
    static createStrikeoutType(type) { return new StoryDelta(StoryDeltaApi.createStrikeoutTypeDelta(type)); }
    static createSuperSubType(type) { return new StoryDelta(StoryDeltaApi.createSuperSubTypeDelta(type)); }
    static createCapsType(type) { return new StoryDelta(StoryDeltaApi.createCapsTypeDelta(type)); }
    static createLeadingOverrideType(type) { return new StoryDelta(StoryDeltaApi.createLeadingOverrideTypeDelta(type)); }
    static createOpticalAlignmentType(type) { return new StoryDelta(StoryDeltaApi.createOpticalAlignmentTypeDelta(type)); }
    static createTocRoleType(type) { return new StoryDelta(StoryDeltaApi.createTocRoleTypeDelta(type)); }
    static createIsNoBreak(isNoBreak) { return new StoryDelta(StoryDeltaApi.createIsNoBreakDelta(isNoBreak)); }
    static createOpenTypeScriptTag(tag) { return new StoryDelta(StoryDeltaApi.createOpenTypeScriptTagDelta(tag)); }
    static createOpenTypeLanguageTag(tag) { return new StoryDelta(StoryDeltaApi.createOpenTypeLanguageTagDelta(tag)); }
    static createGlyphDouble(key, value) { return new StoryDelta(StoryDeltaApi.createGlyphDoubleDelta(key, value)); }
    static createGlyphString(key, value) { return new StoryDelta(StoryDeltaApi.createGlyphStringDelta(key, value)); }
    static createBrushFill(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createBrushFillDelta(fillDescriptor?.handle)); }
    static createPenFill(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createPenFillDelta(fillDescriptor?.handle)); }
    static createTransparency(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createTransparencyDelta(fillDescriptor?.handle)); }
    static createHighlightFill(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createHighlightFillDelta(fillDescriptor?.handle)); }
    static createUnderlineFill(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createUnderlineFillDelta(fillDescriptor?.handle)); }
    static createStrikeoutFill(fillDescriptor) { return new StoryDelta(StoryDeltaApi.createStrikeoutFillDelta(fillDescriptor?.handle)); }
    static createGlyphLineStyleDescriptor(lineStyleDescriptor) { return new StoryDelta(StoryDeltaApi.createGlyphLineStyleDescriptorDelta(lineStyleDescriptor.handle)); }
    static createFont(fields, font) { return new StoryDelta(StoryDeltaApi.createFontDelta(fields, font.handle)); }
    static createPostscriptName(postscriptName) { return new StoryDelta(StoryDeltaApi.createPostscriptNameDelta(postscriptName)); }
    static createFamilyName(familyName) { return new StoryDelta(StoryDeltaApi.createFamilyNameDelta(familyName)); }
    static createWeight(weight) { return new StoryDelta(StoryDeltaApi.createWeightDelta(weight)); }
    static createItalic(italic) { return new StoryDelta(StoryDeltaApi.createItalicDelta(italic)); }
    static createWidth(width) { return new StoryDelta(StoryDeltaApi.createWidthDelta(width)); }
    static createLeftIndent(value) { return new StoryDelta(StoryDeltaApi.createLeftIndentDelta(value)); }
    static createRightIndent(value) { return new StoryDelta(StoryDeltaApi.createRightIndentDelta(value)); }
    static createAlignX(type) { return new StoryDelta(StoryDeltaApi.createAlignXDelta(type)); }
    static createLeadingType(type) { return new StoryDelta(StoryDeltaApi.createLeadingTypeDelta(type)); }
    static createStartAtHardBreak(type) { return new StoryDelta(StoryDeltaApi.createStartAtHardBreakDelta(type)); }
    static createUseSpaceBeforeMode(mode) { return new StoryDelta(StoryDeltaApi.createUseSpaceBeforeModeDelta(mode)); }
    static createPDFExportTag(type) { return new StoryDelta(StoryDeltaApi.createPDFExportTagDelta(type)); }
    static createLineBreakMode(mode) { return new StoryDelta(StoryDeltaApi.createLineBreakModeDelta(mode)); }
    static createIsKeepWithPrevious(value) { return new StoryDelta(StoryDeltaApi.createIsKeepWithPreviousDelta(value)); }
    static createIsKeepTogether(value) { return new StoryDelta(StoryDeltaApi.createIsKeepTogetherDelta(value)); }
    static createIsPreventWidows(value) { return new StoryDelta(StoryDeltaApi.createIsPreventWidowsDelta(value)); }
    static createIsPreventOrphans(value) { return new StoryDelta(StoryDeltaApi.createIsPreventOrphansDelta(value)); }
    static createAlignToBaselineGrid(value) { return new StoryDelta(StoryDeltaApi.createAlignToBaselineGridDelta(value)); }
    static createIsAutoHyphenate(value) { return new StoryDelta(StoryDeltaApi.createIsAutoHyphenateDelta(value)); }
    static createUseSpaceBetweenSameStyles(value) { return new StoryDelta(StoryDeltaApi.createUseSpaceBetweenSameStylesDelta(value)); }
    static createIsSumBeforeAndAfterSpace(value) { return new StoryDelta(StoryDeltaApi.createIsSumBeforeAndAfterSpaceDelta(value)); }
    static createUseModernLeading(value) { return new StoryDelta(StoryDeltaApi.createUseModernLeadingDelta(value)); }
    static createKeepWithNext(value) { return new StoryDelta(StoryDeltaApi.createKeepWithNextDelta(value)); }
    static createHyphenateMinLength(value) { return new StoryDelta(StoryDeltaApi.createHyphenateMinLengthDelta(value)); }
    static createHyphenateMinPrefix(value) { return new StoryDelta(StoryDeltaApi.createHyphenateMinPrefixDelta(value)); }
    static createHyphenateMinSuffix(value) { return new StoryDelta(StoryDeltaApi.createHyphenateMinSuffixDelta(value)); }
    static createMaxConsecutiveHyphens(value) { return new StoryDelta(StoryDeltaApi.createMaxConsecutiveHyphensDelta(value)); }
    static createParagraphDouble(key, value) { return new StoryDelta(StoryDeltaApi.createParagraphDoubleDelta(key, value)); }
    static createParagraphString(key, value) { return new StoryDelta(StoryDeltaApi.createParagraphStringDelta(key, value)); }
    static createComposite(deltas) { return new StoryDelta(StoryDeltaApi.createCompositeDelta(deltas.map((d) => d.handle))); }
}

module.exports.CapsType = CapsType;
module.exports.FontWidth = FontWidth;
module.exports.GlyphAttDoubleType = GlyphAttDoubleType;
module.exports.GlyphAttStringType = GlyphAttStringType;
module.exports.LeadingOverrideType = LeadingOverrideType;
module.exports.OpticalAlignmentType = OpticalAlignmentType;
module.exports.ParagraphAlignXType = ParagraphAlignXType;
module.exports.ParagraphAttDoubleType = ParagraphAttDoubleType;
module.exports.ParagraphAttStringType = ParagraphAttStringType;
module.exports.ParagraphLeadingType = ParagraphLeadingType;
module.exports.ParagraphLineBreakModeType = ParagraphLineBreakModeType;
module.exports.ParagraphPDFExportTagType = ParagraphPDFExportTagType;
module.exports.ParagraphStartAtHardBreakType = ParagraphStartAtHardBreakType;
module.exports.ParagraphUseSpaceBeforeMode = ParagraphUseSpaceBeforeMode;
module.exports.StoryDelta = StoryDelta;
module.exports.SuperSubType = SuperSubType;
module.exports.TocRoleType = TocRoleType;
module.exports.TypographicLineType = TypographicLineType;
```

---

## 4. storyinterface.js

```javascript
const { StoryInterfaceApi, TextDefaultType } = require('affinity:dom');
const { StoryIoFormat } = require('affinity:story');
const { Collection } = require('./collection.js');
const { HandleObject} = require('./handleobject.js');
const GlyphsModule = require('./glyphs.js');
const NodesModule = require('./nodes.js');
const StoryModule = require('./story.js');
require('/geometry.js');

class StoryInterface extends HandleObject {
    constructor(handle) { super(handle); }
    get [Symbol.toStringTag]() { return 'StoryInterface'; }

    get domainTransform() { return StoryInterfaceApi.getDomainTransform(this.handle); }
    get scalarDomainTransform() { return StoryInterfaceApi.getScalarDomainTransform(this.handle); }
    get textDefaultType() { return StoryInterfaceApi.getTextDefaultType(this.handle); }
    get textRenderScale() { return StoryInterfaceApi.getTextRenderScale(this.handle); }
    get textUiScale() { return StoryInterfaceApi.getTextUiScale(this.handle); }
    get isMultiFrameTextFlow() { return StoryInterfaceApi.isMultiFrameTextFlow(this.handle); }
    get story() { return new StoryModule.Story(StoryInterfaceApi.getStory(this.handle)); }
    get storyRange() { return StoryInterfaceApi.getStoryRange(this.handle); }

    getText(startPos = 0, maxLength = -1, format = StoryIoFormat.ClipboardDescriptions) {
        const range = this.storyRange;
        if (startPos > range.length) return "";
        if (maxLength < 0) maxLength = range.length;
        return this.story.getText(range.begin + startPos, maxLength, format);
    }

    get text() { return this.story.getTextRange(this.storyRange); }
    get glyphIndexes() { const range = this.storyRange; return Collection.range(range.begin, range.length); }
    get glyphs() { const story = this.story; return this.glyphIndexes.map(i => story.getGlyph(i)); }

    get anchorGlyphs() { return this.glyphs.filter(glyph => glyph.isAnchorGlyph); }
    get charGlyphs() { return this.glyphs.filter(glyph => glyph.isCharGlyph); }
    get crossReferenceSubGlyphs() { return this.glyphs.filter(glyph => glyph.isCrossReferenceSubGlyph); }
    get documentFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isDocumentFieldGlyph); }
    get fieldGlyphs() { return this.glyphs.filter(glyph => glyph.isFieldGlyph); }
    get crossReferenceGlyphs() { return this.glyphs.filter(glyph => glyph.isCrossReferenceGlyph); }
    get fillerTextGlyphs() { return this.glyphs.filter(glyph => glyph.isFillerTextGlyph); }
    get formattableFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isFormattableFieldGlyph); }
    get capturedDateTimeGlyphs() { return this.glyphs.filter(glyph => glyph.isCapturedDateTimeGlyph); }
    get customFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isCustomFieldGlyph); }
    get dataMergeGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeGlyph); }
    get dataMergeFieldGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeFieldGlyph); }
    get dataMergeSourceGlyphs() { return this.glyphs.filter(glyph => glyph.isDataMergeSourceGlyph); }
    get runningHeaderGlyphs() { return this.glyphs.filter(glyph => glyph.isRunningHeaderGlyph); }
    get pageNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isPageNumberGlyph); }
    get rangenoteBodyGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteBodyGlyph); }
    get rangenoteReferenceGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteReferenceGlyph); }
    get sectionNameGlyphs() { return this.glyphs.filter(glyph => glyph.isSectionNameGlyph); }
    get glyphIndexGlyphs() { return this.glyphs.filter(glyph => glyph.isGlyphIndexGlyph); }
    get hardBreakGlyphs() { return this.glyphs.filter(glyph => glyph.isHardBreakGlyph); }
    get indentToHereGlyphs() { return this.glyphs.filter(glyph => glyph.isIndentToHereGlyph); }
    get indexMarkGlyphs() { return this.glyphs.filter(glyph => glyph.isIndexMarkGlyph); }
    get listNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isListNumberGlyph); }
    get noteNumberGlyphs() { return this.glyphs.filter(glyph => glyph.isNoteNumberGlyph); }
    get pinGlyphs() { return this.glyphs.filter(glyph => glyph.isPinGlyph); }
    get rangenoteEndGlyphs() { return this.glyphs.filter(glyph => glyph.isRangenoteEndGlyph); }
    get rightIndentTabGlyphs() { return this.glyphs.filter(glyph => glyph.isRightIndentTabGlyph); }

    get node() { return NodesModule.createTypedNode(StoryInterfaceApi.getNode(this.handle)); }
}

module.exports.StoryInterface = StoryInterface;
module.exports.TextDefaultType = TextDefaultType;
```

---

## 5. glyphatts.js

```javascript
const {
    CapsType, GlyphAttDoubleType, GlyphAttsApi, GlyphAttStringType,
    LeadingOverrideType, OpticalAlignmentType, SuperSubType, TocRoleType,
    TypographicLineType
} = require('affinity:story');
const Fill = require('./fills.js');
const { Font } = require('./fonts.js');
const { HandleObject } = require('./handleobject.js');
const LineStyle = require('./linestyle.js');

class GlyphAtts extends HandleObject {
    get [Symbol.toStringTag]() { return 'GlyphAtts'; }
    constructor(handle) { super(handle); }

    static create() { return new GlyphAtts(GlyphAttsApi.create()); }
    clone() { return new GlyphAtts(GlyphAttsApi.clone(this.handle)); }

    get underlineType() / set underlineType(type) { /* GlyphAttsApi.get/setUnderlineType */ }
    get strikeoutType() / set strikeoutType(type) { /* GlyphAttsApi.get/setStrikeoutType */ }
    get superSubType() / set superSubType(type) { /* GlyphAttsApi.get/setSuperSubType */ }
    get capsType() / set capsType(type) { /* GlyphAttsApi.get/setCapsType */ }
    get leadingOverrideType() / set leadingOverrideType(type) { /* GlyphAttsApi.get/setLeadingOverrideType */ }
    get opticalAlignmentType() / set opticalAlignmentType(type) { /* GlyphAttsApi.get/setOpticalAlignmentType */ }
    get tocRoleType() / set tocRoleType(type) { /* GlyphAttsApi.get/setTocRoleType */ }
    get isNoBreak() / set isNoBreak(value) { /* GlyphAttsApi.get/setIsNoBreak */ }
    get openTypeScriptTag() / set openTypeScriptTag(tag) { /* GlyphAttsApi.get/setOpenTypeScriptTag */ }
    get openTypeLanguageTag() / set openTypeLanguageTag(tag) { /* GlyphAttsApi.get/setOpenTypeLanguageTag */ }

    get height() / set height(value) { /* GlyphAttDoubleType.Height */ }
    get characterSpacing() / set characterSpacing(value) { /* GlyphAttDoubleType.CharacterSpacing */ }
    get baselineAdvance() / set baselineAdvance(value) { /* GlyphAttDoubleType.BaselineAdvance */ }
    get autoKernMinHeight() / set autoKernMinHeight(value) { /* GlyphAttDoubleType.AutoKernMinHeight */ }
    get offsetX() / set offsetX(value) { /* GlyphAttDoubleType.OffsetX */ }
    get offsetY() / set offsetY(value) { /* GlyphAttDoubleType.OffsetY */ }
    get manualKerning() / set manualKerning(value) { /* GlyphAttDoubleType.ManualKerning */ }
    get scaleX() / set scaleX(value) { /* GlyphAttDoubleType.ScaleX */ }
    get scaleY() / set scaleY(value) { /* GlyphAttDoubleType.ScaleY */ }
    get shearX() / set shearX(value) { /* GlyphAttDoubleType.ShearX */ }
    get absoluteLeading() / set absoluteLeading(value) { /* GlyphAttDoubleType.AbsoluteLeading */ }

    getDoubleValue(att) { return GlyphAttsApi.getDoubleValue(this.handle, att); }
    setDoubleValue(att, value) { GlyphAttsApi.setDoubleValue(this.handle, att, value); }

    get spellingLanguageId() / set spellingLanguageId(value) { /* GlyphAttStringType.SpellingLanguageId */ }
    get styleName() / set styleName(value) { /* GlyphAttStringType.StyleName */ }
    get hyphenationLanguageId() / set hyphenationLanguageId(value) { /* GlyphAttStringType.HyphenationLanguageId */ }

    getStringValue(att) { return GlyphAttsApi.getStringValue(this.handle, att); }
    setStringValue(att, value) { GlyphAttsApi.setStringValue(this.handle, att, value); }

    get brushFill() / set brushFill(fillDescriptor) { /* FillDescriptor */ }
    get penFill() / set penFill(fillDescriptor) { /* FillDescriptor */ }
    get transparency() / set transparency(fillDescriptor) { /* FillDescriptor */ }
    get highlightFill() / set highlightFill(fillDescriptor) { /* FillDescriptor */ }
    get underlineFill() / set underlineFill(fillDescriptor) { /* FillDescriptor */ }
    get strikeoutFill() / set strikeoutFill(fillDescriptor) { /* FillDescriptor */ }
    get lineStyleDescriptor() / set lineStyleDescriptor(descriptor) { /* LineStyleDescriptor */ }
    get font() / set font(font) { /* Font */ }
}

module.exports.GlyphAtts = GlyphAtts;
module.exports.TypographicLineType = TypographicLineType;
module.exports.SuperSubType = SuperSubType;
module.exports.CapsType = CapsType;
module.exports.LeadingOverrideType = LeadingOverrideType;
module.exports.OpticalAlignmentType = OpticalAlignmentType;
module.exports.TocRoleType = TocRoleType;
module.exports.GlyphAttDoubleType = GlyphAttDoubleType;
module.exports.GlyphAttStringType = GlyphAttStringType;
```

---

## 6. paragraphatts.js

```javascript
const {
    ParagraphAlignXType, ParagraphAttDoubleType, ParagraphAttsApi,
    ParagraphAttStringType, ParagraphLeadingType, ParagraphLineBreakModeType,
    ParagraphPDFExportTagType, ParagraphStartAtHardBreakType,
    ParagraphUseSpaceBeforeMode
} = require('affinity:story');
const { HandleObject } = require('./handleobject.js');

class ParagraphAtts extends HandleObject {
    get [Symbol.toStringTag]() { return 'ParagraphAtts'; }
    constructor(handle) { super(handle); }

    static create() { return new ParagraphAtts(ParagraphAttsApi.create()); }
    clone() { return new ParagraphAtts(ParagraphAttsApi.clone(this.handle)); }

    get alignXType() / set alignXType(type) { /* ParagraphAlignXType */ }
    get leadingType() / set leadingType(type) { /* ParagraphLeadingType */ }
    get startAtHardBreakType() / set startAtHardBreakType(type) { /* ParagraphStartAtHardBreakType */ }
    get useSpaceBeforeMode() / set useSpaceBeforeMode(mode) { /* ParagraphUseSpaceBeforeMode */ }
    get pdfExportTagType() / set pdfExportTagType(type) { /* ParagraphPDFExportTagType */ }
    get lineBreakModeType() / set lineBreakModeType(type) { /* ParagraphLineBreakModeType */ }
    get isKeepWithPrevious() / set isKeepWithPrevious(value) { bool }
    get isKeepTogether() / set isKeepTogether(value) { bool }
    get isPreventWidows() / set isPreventWidows(value) { bool }
    get isPreventOrphans() / set isPreventOrphans(value) { bool }
    get alignToBaselineGrid() / set alignToBaselineGrid(value) { bool }
    get isAutoHyphenate() / set isAutoHyphenate(value) { bool }
    get isIndex() / set isIndex(value) { bool }
    get useSpaceBetweenSameStyles() / set useSpaceBetweenSameStyles(value) { bool }
    get isSumBeforeAndAfterSpace() / set isSumBeforeAndAfterSpace(value) { bool }
    get isBookEndnotes() / set isBookEndnotes(value) { bool }
    get useModernLeading() / set useModernLeading(value) { bool }
    get keepWithNext() / set keepWithNext(value) { bool }
    get hyphenateMinLength() / set hyphenateMinLength(value) { int }
    get hyphenateMinPrefix() / set hyphenateMinPrefix(value) { int }
    get hyphenateMinSuffix() / set hyphenateMinSuffix(value) { int }
    get maxConsecutiveHyphens() / set maxConsecutiveHyphens(value) { int }

    get relativeLeading() / set relativeLeading(value) { /* ParagraphAttDoubleType.RelativeLeading */ }
    get absoluteLeading() / set absoluteLeading(value) { /* ParagraphAttDoubleType.AbsoluteLeading */ }
    get leftIndent() / set leftIndent(value) { /* ParagraphAttDoubleType.LeftIndent */ }
    get rightIndent() / set rightIndent(value) { /* ParagraphAttDoubleType.RightIndent */ }
    get firstLineIndent() / set firstLineIndent(value) { /* ParagraphAttDoubleType.FirstLineIndent */ }
    get spaceBefore() / set spaceBefore(value) { /* ParagraphAttDoubleType.SpaceBefore */ }
    get spaceAfter() / set spaceAfter(value) { /* ParagraphAttDoubleType.SpaceAfter */ }
    get defaultTabStops() / set defaultTabStops(value) { /* ParagraphAttDoubleType.DefaultTabStops */ }
    get minWordSpacing() / set minWordSpacing(value) { /* ParagraphAttDoubleType.MinWordSpacing */ }
    get desiredWordSpacing() / set desiredWordSpacing(value) { /* ParagraphAttDoubleType.DesiredWordSpacing */ }
    get maxWordSpacing() / set maxWordSpacing(value) { /* ParagraphAttDoubleType.MaxWordSpacing */ }
    get minLetterSpacing() / set minLetterSpacing(value) { /* ParagraphAttDoubleType.MinLetterSpacing */ }
    get desiredLetterSpacing() / set desiredLetterSpacing(value) { /* ParagraphAttDoubleType.DesiredLetterSpacing */ }
    get maxLetterSpacing() / set maxLetterSpacing(value) { /* ParagraphAttDoubleType.MaxLetterSpacing */ }
    get minHyphenScore() / set minHyphenScore(value) { /* ParagraphAttDoubleType.MinHyphenScore */ }
    get hyphenationZone() / set hyphenationZone(value) { /* ParagraphAttDoubleType.HyphenationZone */ }
    get hyphenationZoneCapitals() / set hyphenationZoneCapitals(value) { /* ParagraphAttDoubleType.HyphenationZoneCapitals */ }
    get hyphenationZoneParagraphEnd() / set hyphenationZoneParagraphEnd(value) { /* ParagraphAttDoubleType.HyphenationZoneParagraphEnd */ }
    get hyphenationZoneColumnEnd() / set hyphenationZoneColumnEnd(value) { /* ParagraphAttDoubleType.HyphenationZoneColumnEnd */ }
    get lastLineOutdent() / set lastLineOutdent(value) { /* ParagraphAttDoubleType.LastLineOutdent */ }
    get spaceBetweenSameStyles() / set spaceBetweenSameStyles(value) { /* ParagraphAttDoubleType.SpaceBetweenSameStyles */ }

    getDoubleValue(att) { return ParagraphAttsApi.getDoubleValue(this.handle, att); }
    setDoubleValue(att, value) { ParagraphAttsApi.setDoubleValue(this.handle, att, value); }

    get styleName() / set styleName(value) { /* ParagraphAttStringType.StyleName */ }
    getStringValue(att) { return ParagraphAttsApi.getStringValue(this.handle, att); }
    setStringValue(att, value) { ParagraphAttsApi.setStringValue(this.handle, att, value); }
}

module.exports.ParagraphAtts = ParagraphAtts;
module.exports.ParagraphAlignXType = ParagraphAlignXType;
module.exports.ParagraphLeadingType = ParagraphLeadingType;
module.exports.ParagraphStartAtHardBreakType = ParagraphStartAtHardBreakType;
module.exports.ParagraphUseSpaceBeforeMode = ParagraphUseSpaceBeforeMode;
module.exports.ParagraphPDFExportTagType = ParagraphPDFExportTagType;
module.exports.ParagraphLineBreakModeType = ParagraphLineBreakModeType;
module.exports.ParagraphAttDoubleType = ParagraphAttDoubleType;
module.exports.ParagraphAttStringType = ParagraphAttStringType;
```

---

## 7. glyphs.js

```javascript
// Full file: 964 lines
// Exports: createTypedGlyph, AnchorGlyph, CapturedDateTimeGlyph, CharGlyph,
//   CrossReferenceGlyph, CrossReferenceSubGlyph, CrossReferenceSubGlyphType,
//   CrossReferenceTargetType, CustomFieldGlyph, DataMergeGlyph, DataMergeFieldGlyph,
//   DataMergeSourceGlyph, DocumentFieldGlyph, FieldDataType, FieldGlyph,
//   FillerTextGlyph, FillerTextType, FormattableFieldGlyph, Glyph, GlyphIndexGlyph,
//   GlyphType, HardBreakGlyph, HardBreakType, IndentToHereGlyph, IndexMarkGlyph,
//   ListNumberGlyph, NoteNumberGlyph, NotePosition, NoteType, PageNumberGlyph,
//   RangenoteReferenceGlyph, RangenoteBodyGlyph, SectionNameGlyph, DataMergeSourceType,
//   DocumentFieldType, PageNumberType, PinGlyph, RangenoteEndGlyph, RightIndentTabGlyph,
//   RunningHeaderGlyph, SoftBreakType, StoryIoFormat, WordPartType

// Key classes:
//   Glyph (base) → isGlyph, clone(), isConsolidated, isMarking, isZeroWidth,
//     isJustificationSpace, isParagraphBreak, isSoftBreak, canSoftBreakBefore,
//     canSoftBreakAfter, isAlphaNumeric, isAlpha, isNumeric, isUppercase, isLowercase,
//     isStoryTerminator, isDeletable, isTableCellBreak, isMidWordPunctuation, isTab,
//     isCombining, isMarkup, isHiddenFromOpenType, wantsFastFind, getDescription(),
//     description, glyphType, softBreakType, hardBreakType, wordPartType
//   AnchorGlyph, CharGlyph (char32, baseChar32, string), CrossReferenceSubGlyph,
//     FieldGlyph (fieldName), CrossReferenceGlyph (targetType, isTargetDifferentChapter, usesStyles),
//     FillerTextGlyph (fillerTextType, sourceBegin), FormattableFieldGlyph (fieldDataType),
//     CapturedDateTimeGlyph (dateTime), CustomFieldGlyph, DataMergeGlyph,
//     DataMergeFieldGlyph (dataMergeFieldId), DataMergeSourceGlyph (dataMergeSourceType),
//     DocumentFieldGlyph (documentFieldType), RunningHeaderGlyph, PageNumberGlyph (pageNumberType),
//     RangenoteBodyGlyph (isLive), RangenoteReferenceGlyph (noteType, notePosition),
//     SectionNameGlyph, GlyphIndexGlyph (index), HardBreakGlyph, IndentToHereGlyph,
//     IndexMarkGlyph (glyphStyle), ListNumberGlyph (level), NoteNumberGlyph,
//     PinGlyph (isInline, isNote, notePosition, noteType), RangenoteEndGlyph (isLive),
//     RightIndentTabGlyph
```

---

## 8. fonts.js

```javascript
const { EnumerationResult } = require('affinity:common');
const { FontApi, FontCollectionApi, FontFamilyApi, FontWeight, FontWidth, PanoseApi, PanoseType } = require('affinity:fonts');
const { HandleObject } = require('./handleobject.js');

class Panose extends HandleObject {
    get [Symbol.toStringTag]() { return 'Panose'; }
    clone() { return new Panose(PanoseApi.clone(this.handle)); }
    is(type) { return PanoseApi.is(this.handle, type); }
    get isSerif() { return PanoseApi.isSerif(this.handle); }
    get isSansSerif() { return PanoseApi.isSansSerif(this.handle); }
    get isMonospaced() { return PanoseApi.isMonospaced(this.handle); }
    get isEmpty() { return PanoseApi.isEmpty(this.handle); }
    toString() { return PanoseApi.toString(this.handle); }
    getDistance(other) { return PanoseApi.getDistance(this.handle, other.handle); }
}

class Font extends HandleObject {
    get [Symbol.toStringTag]() { return 'Font'; }
    clone() { return new Font(FontApi.clone(this.handle)); }
    get isValid() { return FontApi.isValid(this.handle); }
    get isNormal() { return FontApi.isNormal(this.handle); }
    get isBold() { return FontApi.isBold(this.handle); }
    get isVariableBold() { return FontApi.isVariableBold(this.handle); }
    get isItalic() { return FontApi.isItalic(this.handle); }
    get isVariableItalic() { return FontApi.isVariableItalic(this.handle); }
    get isBoldAvailable() { return FontApi.isBoldAvailable(this.handle); }
    get isItalicAvailable() { return FontApi.isItalicAvailable(this.handle); }
    get weight() { return FontApi.getWeight(this.handle); }
    get normalizedWeight() { return FontApi.getNormalizedWeight(this.handle); }
    get width() { return FontApi.getWidth(this.handle); }
    get normalizedWidth() { return FontApi.getNormalizedWidth(this.handle); }
    get isCondensed() { return FontApi.isCondensed(this.handle); }
    get isExpanded() { return FontApi.isExpanded(this.handle); }
    get panose() { return new Panose(FontApi.getPanose(this.handle)); }
    get postscriptName() { return FontApi.getPostscriptName(this.handle); }
    get familyName() { return FontApi.getFamilyName(this.handle); }
    get ribbiFamily() { return FontApi.getRibbiFamily(this.handle); }
    get wwsFamily() { return FontApi.getWwsFamily(this.handle); }
    get postscriptPrefix() { return FontApi.getPostscriptPrefix(this.handle); }
    get traitsName() { return FontApi.getTraitsName(this.handle); }
    get variableBold() { return FontApi.getVariableBold(this.handle); }
    get variableItalic() { return FontApi.getVariableItalic(this.handle); }
    toString() { return FontApi.toString(this.handle); }
    get isSerif() { return this.panose.isSerif; }
    get isSansSerif() { return this.panose.isSansSerif; }
    get isMonospaced() { return this.panose.isMonospaced; }

    static enumerate(callback) { /* wraps callback with Font ctor */ }
    static get all() { let res = []; Font.enumerate(font => { res.push(font); return EnumerationResult.Continue; }); return res; }
    static createEmpty() { return new Font(FontApi.createEmpty()); }
    static createDefault() { return new Font(FontApi.createDefault()); }
    static createDefaultMonospaced() { return new Font(FontApi.createDefaultMonospaced()); }
    static createDefaultSymbol() { return new Font(FontApi.createDefaultSymbol()); }
    static create(family, weight, isItalic, width) { return new Font(FontApi.create(family, weight, isItalic, width)); }
    getDistance(other) { return FontApi.getDistance(this.handle, other.handle); }
}

class FontCollection extends HandleObject {
    get [Symbol.toStringTag]() { return 'FontCollection'; }
    get displayName() { return FontCollectionApi.getDisplayName(this.handle); }
    static enumerateCollections(callback) { /* wraps callback */ }
    static get all() { /* enumerate all */ }
}

class FontFamily extends HandleObject {
    get [Symbol.toStringTag]() { return 'FontFamily'; }
    clone() { return new FontFamily(FontFamilyApi.clone(this.handle)); }
    get name() { return FontFamilyApi.getName(this.handle); }
    get fontCount() { return FontFamilyApi.getFontCount(this.handle); }
    get length() { return this.fontCount; }
    getFont(index) { return new Font(FontFamilyApi.getFont(this.handle, index)); }
    enumerateFonts(callback) { /* wraps callback */ }
    get fonts() { /* enumerate all fonts */ }
    static enumerate(callback) { /* wraps callback */ }
    static get all() { /* enumerate all families */ }
    get hasVariations() { return FontFamilyApi.hasVariations(this.handle); }
    get hasFixed() { return FontFamilyApi.hasFixed(this.handle); }
}

module.exports.Font = Font;
module.exports.FontCollection = FontCollection;
module.exports.FontFamily = FontFamily;
module.exports.FontWeight = FontWeight;
module.exports.FontWidth = FontWidth;
module.exports.Panose = Panose;
module.exports.PanoseType = PanoseType;
```

---

## 9. layereffects.js

```javascript
const { BlendMode } = require('affinity:common');
const { SplineProfile } = require('affinity:geometry');
const {
    BevelEmbossLayerEffectApi, BevelEmbossType, ColourOverlayLayerEffectApi,
    GaussianBlurLayerEffectApi, GradientOverlayLayerEffectApi,
    InnerGlowLayerEffectApi, InnerShadowLayerEffectApi, LayerEffectApi,
    LayerEffectType, OuterGlowLayerEffectApi, OuterShadowLayerEffectApi,
    OutlineLayerEffectApi, PhongBevelLayerEffectApi, PointLightApi, StrokeFillType
} = require('affinity:layereffects');
const { StrokeAlignment } = require('affinity:linestyles');
const { Colour } = require('./colours.js');
const { FillDescriptor } = require('./fills.js');
const { Spline } = require('./geometry.js');
const { HandleObject } = require('./handleobject.js');

function createTypedLayerEffect(handle) { /* factory: dispatches by LayerEffectType */ }

class LayerEffect extends HandleObject {
    get isLayerEffect() { return true; }
    clone() { return new LayerEffect(LayerEffectApi.clone(this.handle)); }
    get type() { return LayerEffectApi.getType(this.handle); }
    get enabled() / set enabled(value) { bool }
    get opacity() / set opacity(value) { float }
    get blendMode() / set blendMode(value) { BlendMode }
    get scaleWithObject() / set scaleWithObject(value) { bool }
}

class BevelEmbossLayerEffect extends LayerEffect {
    get isBevelEmbossLayerEffect() { return true; }
    static create() { return new BevelEmbossLayerEffect(BevelEmbossLayerEffectApi.create()); }
    get radius() / set radius(value) { float }
    get depth() / set depth(value) { float }
    get soften() / set soften(value) { float }
    get bevelProfile() / set bevelProfile(value) { Spline }
    setStandardBevelProfile(standardProfile) { void }
    get bevelEmbossType() / set bevelEmbossType(value) { BevelEmbossType }
    get azimuth() / set azimuth(value) { float }
    get elevation() / set elevation(value) { float }
    get invert() / set invert(value) { bool }
    get shadowColour() / set shadowColour(value) { Colour }
    get highlightColour() / set highlightColour(value) { Colour }
    get shadowBlendMode() / set shadowBlendMode(value) { BlendMode }
    get shadowOpacity() / set shadowOpacity(value) { float }
}

class ColourOverlayLayerEffect extends LayerEffect {
    get isColourOverlayLayerEffect() { return true; }
    static create() { /* */ }
    get colour() / set colour(value) { Colour }
}

class GaussianBlurLayerEffect extends LayerEffect {
    get isGaussianBlurLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get preserveAlpha() / set preserveAlpha(value) { bool }
}

class GradientOverlayLayerEffect extends LayerEffect {
    get isGradientOverlayLayerEffect() { return true; }
    static create() { /* */ }
    get fillDescriptor() / set fillDescriptor(value) { FillDescriptor }
    static calculateTransform(scaleX, scaleY, transformX, transformY) { /* */ }
}

class InnerGlowLayerEffect extends LayerEffect {
    get isInnerGlowLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get colour() / set colour(value) { Colour }
    get intensity() / set intensity(value) { float }
    get centre() / set centre(value) { float }
}

class InnerShadowLayerEffect extends LayerEffect {
    get isInnerShadowLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get colour() / set colour(value) { Colour }
    get offset() / set offset(value) { float }
    get angle() / set angle(value) { float }
    get intensity() / set intensity(value) { float }
}

class OuterGlowLayerEffect extends LayerEffect {
    get isOuterGlowLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get colour() / set colour(value) { Colour }
    get intensity() / set intensity(value) { float }
}

class OuterShadowLayerEffect extends LayerEffect {
    get isOuterShadowLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get colour() / set colour(value) { Colour }
    get offset() / set offset(value) { float }
    get angle() / set angle(value) { float }
    get intensity() / set intensity(value) { float }
    get fillKnocksOut() / set fillKnocksOut(value) { bool }
}

class OutlineLayerEffect extends LayerEffect {
    get isOutlineLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get colour() / set colour(value) { Colour }
    get alignment() / set alignment(value) { StrokeAlignment }
    get fillType() / set fillType(value) { StrokeFillType }
    get fillDescriptor() / set fillDescriptor(value) { FillDescriptor }
    static calculateTransform(scaleX, scaleY, transformX, transformY) { /* */ }
}

class PhongBevelLayerEffect extends LayerEffect {
    get isPhongBevelLayerEffect() { return true; }
    static create() { /* */ }
    get radius() / set radius(value) { float }
    get linkDepth() / set linkDepth(value) { bool }
    get depth() / set depth(value) { float }
    get soften() / set soften(value) { float }
    get bevelProfile() / set bevelProfile(value) { Spline }
    setStandardBevelProfile(standardProfile) { void }
    get ambient() / set ambient(value) { float }
    get diffuse() / set diffuse(value) { float }
    get specular() / set specular(value) { float }
    get shininess() / set shininess(value) { float }
    get ambientColour() / set ambientColour(value) { Colour }
    get specularColour() / set specularColour(value) { Colour }
    get lightCount() { int }
    getLight(index) { PointLight }
    enumerateLights(callback) { void }
    insertLight(index, pointLight) { void }
    removeLight(index) { void }
    appendLight(pointLight) { void }
}

class PointLight extends HandleObject {
    get isPointLight() { return true; }
    clone() { /* */ }
    get azimuth() / set azimuth(value) { float }
    get elevation() / set elevation(value) { float }
    get colour() / set colour(value) { Colour }
}

module.exports.BevelEmbossLayerEffect = BevelEmbossLayerEffect;
module.exports.BlendMode = BlendMode;
module.exports.ColourOverlayLayerEffect = ColourOverlayLayerEffect;
module.exports.LayerEffect = LayerEffect;
module.exports.GaussianBlurLayerEffect = GaussianBlurLayerEffect;
module.exports.GradientOverlayLayerEffect = GradientOverlayLayerEffect;
module.exports.InnerGlowLayerEffect = InnerGlowLayerEffect;
module.exports.InnerShadowLayerEffect = InnerShadowLayerEffect;
module.exports.OuterShadowLayerEffect = OuterShadowLayerEffect;
module.exports.OuterGlowLayerEffect = OuterGlowLayerEffect;
module.exports.OutlineLayerEffect = OutlineLayerEffect;
module.exports.PhongBevelLayerEffect = PhongBevelLayerEffect;
module.exports.PointLight = PointLight;
module.exports.SplineProfile = SplineProfile;
module.exports.createTypedLayerEffect = createTypedLayerEffect;
module.exports.LayerEffectType = LayerEffectType;
module.exports.StrokeAlignment = StrokeAlignment;
module.exports.StrokeFillType = StrokeFillType;
module.exports.BevelEmbossType = BevelEmbossType;
```

---

## 10. layereffectsinterface.js

```javascript
const { EnumerationResult } = require('affinity:common');
const { LayerEffectsInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const { createTypedLayerEffect } = require('./layereffects.js');
const NodesModule = require('./nodes.js');

class LayerEffectsInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'LayerEffectsInterface'; }
    get effectCount() { return LayerEffectsInterfaceApi.getEffectCount(this.handle); }
    getEffect(index) { return createTypedLayerEffect(LayerEffectsInterfaceApi.getEffect(this.handle, index)); }
    enumerateEffects(callback) { /* wraps with createTypedLayerEffect */ }
    get effects() { /* enumerate all effects */ }
    get hasAnyVisibleEffects() { return LayerEffectsInterfaceApi.hasAnyVisibleEffects(this.handle); }
    get hasActiveEffects() { return LayerEffectsInterfaceApi.hasActiveEffects(this.handle); }
    get isScaleWithObject() { return LayerEffectsInterfaceApi.isScaleWithObject(this.handle); }
    get node() { return NodesModule.createTypedNode(LayerEffectsInterfaceApi.getNode(this.handle)); }
}

module.exports.LayerEffectsInterface = LayerEffectsInterface;
```

---

## 11. filter_ranges.js

**Not available** — This is a JSON data file served by the MCP server's `read_sdk_documentation_topic` tool, not a JavaScript module. The MCP server connection is currently broken.

---

## 12. adjustment_ranges.js

**Not available** — Same as `filter_ranges.js`. JSON data file served by MCP server.

---

## 13. transparencyinterface.js

```javascript
const { ContentType, TransparencyInterfaceApi } = require('affinity:dom');
const { FillDescriptor } = require('./fills.js');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');
require('/geometry.js');

class TransparencyInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'TransparencyInterface'; }
    get fillDescriptor() { return new FillDescriptor(TransparencyInterfaceApi.getFillDescriptor(this.handle)); }
    get isTransparencyNone() { return TransparencyInterfaceApi.isTransparencyNone(this.handle); }
    get domainTransform() { return TransparencyInterfaceApi.getDomainTransform(this.handle); }
    get contentType() { return TransparencyInterfaceApi.getContentType(this.handle); }
    get node() { return NodesModule.createTypedNode(TransparencyInterfaceApi.getNode(this.handle)); }
    get isAnchoredToSpread() { return this.fillDescriptor.isAnchoredToSpread; }
    setIsAnchoredToSpread(anchored, applyToAllFills, preview) { /* calls doc.setTransparencyFillIsAnchoredToSpread */ }
    set isAnchoredToSpread(value) { this.setIsAnchoredToSpread(value); }
}

module.exports.ContentType = ContentType;
module.exports.TransparencyInterface = TransparencyInterface;
```

---

## 14. blendmodeinterface.js

```javascript
const { AntialiasingMode, BlendModeInterfaceApi, BlendOptionsApi } = require('affinity:dom');
const { BlendMode } = require('affinity:common');
const { Spline } = require('./geometry.js');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class BlendOptions extends HandleObject {
    get isBlendOptions() { return true; }
    get gamma() / set gamma(value) { float }
    get masterSourceLayerRanges() / set masterSourceLayerRanges(spline) { Spline }
    get masterUnderlyingCompositionRanges() / set masterUnderlyingCompositionRanges(spline) { Spline }
    getChannelSourceLayerRanges(channel) { Spline }
    setChannelSourceLayerRanges(channel, spline) { void }
    getChannelUnderlyingCompositionRanges(channel) { Spline }
    setChannelUnderlyingCompositionRanges(channel, spline) { void }
}

class BlendModeInterface extends HandleObject {
    get isBlendModeInterface() { return true; }
    get blendMode() { BlendMode }
    get blendOptions() { BlendOptions }
    get antialiasingMode() { AntialiasingMode }
    get node() { Node }
    setBlendMode(blendMode, setPassthrough) { /* calls doc.setBlendMode */ }
}

module.exports.BlendOptions = BlendOptions;
module.exports.BlendModeInterface = BlendModeInterface;
module.exports.BlendMode = BlendMode;
module.exports.AntialiasingMode = AntialiasingMode;
```

---

## 15. visibilityinterface.js

```javascript
const { TextVisibilityOptionsApi, VisibilityInterfaceApi, VisibilityTestOptionsApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class VisibilityInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'VisibilityInterface'; }
    get globalOpacity() { float }
    get fillOpacity() { float }
    get isVisible() { bool }
    get isVisibleInExport() { bool }
    get isVisibleInDomain() { bool }
    testVisibility(options) { bool }
    get node() { Node }
}

class VisibilityTestOptions extends HandleObject {
    static create() { /* */ }
    clone() { /* */ }
    get textVisibilityOptions() / set textVisibilityOptions(options) { TextVisibilityOptions }
    get ignoreVisibilityFlags() / set ignoreVisibilityFlags(value) { bool }
    get applyExportableVisibility() / set applyExportableVisibility(value) { bool }
    get showEmptyRects() / set showEmptyRects(value) { bool }
    get showPictureFrames() / set showPictureFrames(value) { bool }
    get clipToSpread() / set clipToSpread(value) { bool }
    get allowInvisibleLayers() / set allowInvisibleLayers(value) { bool }
}

class TextVisibilityOptions extends HandleObject {
    static create() { /* */ }
    clone() { /* */ }
    equals(other) { bool }
    anySet() { bool }
    setNone() { void }
    setNewViewDefaults() { void }
    get showSpecialCharacters() / set showSpecialCharacters(value) { bool }
    get showIndexMarks() / set showIndexMarks(value) { bool }
    get showAnchors() / set showAnchors(value) { bool }
    get showNoteMarks() / set showNoteMarks(value) { bool }
    get highlightFields() / set highlightFields(value) { bool }
}

module.exports.VisibilityInterface = VisibilityInterface;
module.exports.VisibilityTestOptions = VisibilityTestOptions;
module.exports.TextVisibilityOptions = TextVisibilityOptions;
module.exports.VisibilityTestOptionsApi = VisibilityTestOptionsApi;
module.exports.TextVisibilityOptionsApi = TextVisibilityOptionsApi;
```

---

## 16. editabilityinterface.js

```javascript
const { EditabilityInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class EditabilityInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'EditabilityInterface'; }
    get isEditable() { return EditabilityInterfaceApi.isEditable(this.handle); }
    get isLocalEditable() { return EditabilityInterfaceApi.isLocalEditable(this.handle); }
    get isMasterEditable() { return EditabilityInterfaceApi.isMasterEditable(this.handle); }
    get node() { return NodesModule.createTypedNode(EditabilityInterfaceApi.getNode(this.handle)); }
}

module.exports.EditabilityInterface = EditabilityInterface;
```

---

## 17. descriptioninterface.js

```javascript
const { DescriptionInterfaceApi } = require('affinity:dom');
const { Colour } = require('./colours.js');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class DescriptionInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'DescriptionInterface'; }
    get userDescription() { string }
    get description() { string }
    get defaultDescription() { string }
    get defaultDescriptionForDisplay() { string }
    getTagColour(inferFromAncestors) { Colour | null }
    get tagColour() { Colour | null }
    getDescription(descriptionOnEmpty) { string }
    get node() { Node }

    setUserDescription(description, preview) { /* calls doc.setLayerDescription */ }
    setTagColour(colour, preview) { /* calls doc.setTagColour */ }
    setUserDescriptionAsync(description, callback, preview) { /* async */ }
    setTagColourAsync(colour, callback, preview) { /* async */ }
    set userDescription(description) { this.setUserDescription(description); }
    set tagColour(colour) { this.setTagColour(colour); }
}

module.exports.DescriptionInterface = DescriptionInterface;
```

---

## 18. taginterface.js

```javascript
const { PredefinedTagKey, TagInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class TagInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'TagInterface'; }
    hasKey(key) { return TagInterfaceApi.hasKey(this.handle, key); }
    getValueForKey(key) { return TagInterfaceApi.getValueForKey(this.handle, key); }
    get isMarkAsDecoration() { return TagInterfaceApi.isMarkAsDecoration(this.handle); }
    hasPredefinedKey(key) { return TagInterfaceApi.hasPredefinedKey(this.handle, key); }
    getValueForPredefinedKey(key) { return TagInterfaceApi.getValueForPredefinedKey(this.handle, key); }
    get node() { return NodesModule.createTypedNode(TagInterfaceApi.getNode(this.handle)); }
}

module.exports.TagInterface = TagInterface;
module.exports.PredefinedTagKey = PredefinedTagKey;
```

---

## 19. exportconfig.js

```javascript
const { ExportConfigApi, ExportFormatApi, ExportScaleApi, ExportScalePreset, ExportScaleSizeType, ExportSizeApi } = require('affinity:dom');
const { EnumerationResult } = require('affinity:common');
const { HandleObject } = require('./handleobject.js');

class ExportScale extends HandleObject {
    get sizeType() { ExportScaleSizeType }
    get hasMultiplier() { bool }
    get multiplier() { float }
    get size() { float }
    get width() { float }
    get height() { float }
    static createWithPreset(exportScalePreset) { /* */ }
    static createWithMultiplier(multiplier) { /* */ }
    static createWithWidth(width) { /* */ }
    static createWithHeight(height) { /* */ }
    static createWithSquare(size) { /* */ }
    static createWithMultiplierSquare(multiplier, size) { /* */ }
    static createWithWidthHeight(width, height) { /* */ }
}

class ExportSize extends HandleObject {
    get exportScale() { ExportScale }
    setExportScale(exportScale) { void }
    static createWithExportScale(exportScale) { /* */ }
}

class ExportFormat extends HandleObject {
    appendSize(exportSize) { void }
    deleteSize(index) { void }
    replaceSize(index, exportSize) { void }
    get sizeCount() { int }
    enumerateSizes(callback) { void }
    get sizes() { ExportSize[] }
    static createWithFileExportOptions(fileExportOptions) { /* */ }
}

class ExportConfig extends HandleObject {
    appendFormat(exportFormat) { void }
    deleteFormat(index) { void }
    replaceFormat(index, exportFormat) { void }
    get formatCount() { int }
    enumerateFormats(callback) { void }
    get formats() { ExportFormat[] }
}

module.exports.ExportConfig = ExportConfig;
module.exports.ExportFormat = ExportFormat;
module.exports.ExportScale = ExportScale;
module.exports.ExportScalePreset = ExportScalePreset;
module.exports.ExportScaleSizeType = ExportScaleSizeType;
module.exports.ExportSize = ExportSize;
```

---

## 20. exportableinterface.js

```javascript
const { ExportableInterfaceApi } = require('affinity:dom');
const { ExportConfig } = require('./exportconfig.js');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class ExportableInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'ExportableInterface'; }
    get exportConfig() { ExportConfig | null }
    get node() { Node }
}

module.exports.ExportableInterface = ExportableInterface;
```

---

## 21. physicalrootinterface.js

```javascript
const { PhysicalRootInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const { PhysicalRootPropertiesInterface } = require('./physicalrootpropertiesinterface.js');
const NodesModule = require('./nodes.js');

class PhysicalRootInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'PhysicalRootInterface'; }
    get physicalRootProperties() { PhysicalRootPropertiesInterface }
    get node() { Node }
}

module.exports.PhysicalRootInterface = PhysicalRootInterface;
```

---

## 22. physicalrootpropertiesinterface.js

```javascript
const { PhysicalRootPropertiesInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');
const PageBoxInterfaceModule = require('./pageboxinterface.js');

class PhysicalRootPropertiesInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'PhysicalRootPropertiesInterface'; }
    get pageCount() { int }
    get pageBoxInterface() { PageBoxInterface }
    get node() { Node }
}

module.exports.PhysicalRootPropertiesInterface = PhysicalRootPropertiesInterface;
```

---

## 23. compoundoperationinterface.js

```javascript
const { CompoundOperationInterfaceApi } = require('affinity:dom');
const { CompoundOperation } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class CompoundOperationInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'CompoundOperationInterface'; }
    get isCompoundOperationInterface() { return true; }
    get compoundOperation() { CompoundOperation }
    get node() { Node }
}

module.exports.CompoundOperationInterface = CompoundOperationInterface;
module.exports.CompoundOperation = CompoundOperation;
```

---

## 24. pixelaccessor.js

```javascript
// Reader/Writer pixel accessor classes for multiple color formats:
//   RGBA8, RGBA16, IA8, IA16, CMYKA8, LABA16, M8, M16, RGBAuf, Mf
//
// Each format has:
//   PixelReader{Format} — readPixel(x, y), dispose(), static create(bitmap)
//   PixelReaderWriter{Format} — readPixel(x, y), writePixel(x, y, pixel), dispose(), static create(bitmap)
//
// Supported formats:
//   RGBA8, RGBA16, IA8, IA16, CMYKA8, LABA16, M8, M16, RGBAuf, Mf
//
// Usage:
//   const reader = PixelReaderRGBA8.create(bitmap);
//   const pixel = reader.readPixel(x, y);
//   reader.dispose();
//
//   const writer = PixelReaderWriterRGBA16.create(bitmap);
//   writer.writePixel(x, y, rgba16);
//   writer.dispose();
```

---

## 25. selections.js

```javascript
// Full file: 797 lines
// Key classes:
//   Selection — create(doc, items, removeNested), createEmpty(doc), length, at(index), items, nodes,
//     firstNode, add(nodeOrItem), addNode, addItem, addSelectable, addSubSelectionForNode,
//     getFirstSubSelectionOfType, removeNested, containsItem, clear
//   SelectionItem — node, getSubSelection(index), getSubSelectionOfType(type), subSelectionCount,
//     enumerateSubSelections, subSelections
//   SubSelection — subSelectionType
//   CurveNodeSubSelection — create(items), isEmpty, itemCount, getItem, enumerateItems,
//     enumerateItemsWithCurveID, cloneAndAddItems, cloneAndRemoveItems, cloneAndRemoveCurves, clone
//   CurveEdgeSubSelection — similar to CurveNodeSubSelection
//   FillMeshSubSelection — isEmpty, itemCount, enumerateItems, items
//   FillSubSelection — index, clone, cloneAsFillSubSelection
//   LineFillMeshSubSelection — isEmpty, itemCount, enumerateItems, items
//   LineFillSubSelection — index, clone, cloneAsLineFillSubSelection
//   TableSubSelection — isEmpty, isRectangle, anchor, caret, boundingBox, enumerateCells,
//     enumerateEdges(tableAxis, tableEdgeSelector)
//   TextSelection — create(rangesOrNull), isEmpty, hasMarkedText, caret, anchor,
//     markedTextBegin, markedTextEnd, rangeCount, getRange(index), enumerateRanges, ranges
//   TransparencyMeshSubSelection — isEmpty, itemCount, enumerateItems, items
//   TransparencySubSelection — index, clone, cloneAsTransparencySubSelection
//
// SubSelectionType enum: CurveEdge, CurveNode, Fill, FillMesh, LineFill, LineFillMesh,
//   Table, Text, Transparency, TransparencyMesh
```

---

## 26. rasterselection.js

```javascript
const { RasterSelectionApi } = require('affinity:dom');
const { HandleObject } = require("./handleobject.js");

class RasterSelection extends HandleObject {
    get [Symbol.toStringTag]() { return 'RasterSelection'; }
    get isCurrentPixelSelection() { return RasterSelectionApi.isCurrentPixelSelection(this.handle); }
    get isSelectAllOrNone() { return RasterSelectionApi.isSelectAllOrNone(this.handle); }
    get isSelectNone() { return RasterSelectionApi.isSelectNone(this.handle); }
}

module.exports.RasterSelection = RasterSelection;
```

---

## 27. imageresourceinterface.js

```javascript
const { FileType, ImagePlacement, ImageResourceInterfaceApi } = require('affinity:dom');
const { RasterFormat } = require('affinity:raster');
const { HandleObject} = require('./handleobject.js');
const NodesModule = require('./nodes.js');

class ImageResourceInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'ImageResourceInterface'; }
    get imageFilePath() { string }
    get imageFileSize() { int }
    get modifiedTime() { int }
    get fileType() { FileType }
    get fileTypeName() { string }
    get page() { int }
    get artboard() { int }
    get isOnArtboard() { bool }
    get originalDPI() { float }
    get iccProfile() { string }
    get placedSize() { Size }
    get originalSize() { Size }
    getColourFormat(allowRemote) { ColourFormat }
    get imagePlacement() { ImagePlacement }
    get masterPage() { int }
    getSmallThumbnail(format, colourProfileSet) { RasterObject }
    getLargeThumbnail(format, colourProfileSet) { RasterObject }
    get resourceNode() { Node }
    get canEditOriginalImage() { bool }
    createFileTypeName() { string }
    saveOriginalFile(filename) { void }
    get node() { Node }
}

module.exports.FileType = FileType;
module.exports.ImagePlacement = ImagePlacement;
module.exports.ImageResourceInterface = ImageResourceInterface;
module.exports.RasterFormat = RasterFormat;
```

---

## 28. dialog.js

```javascript
// Full file: 1298 lines — comprehensive Dialog API for building UI
//
// Key classes:
//   Dialog — create(text), runModal(), findControl(ctrlID), initialWidth, addColumn(),
//     columns, groups, controls, isResizable, isRunningModal, onControlValueChangedHandler,
//     setItemsVisibility(showIDs, hideIDs)
//   DialogColumn — widthProportion, paddingFactor, columnIndex, addGroup(name), groups, controls
//   DialogColumnStack — addColumn(), columns
//   DialogGroup — label, enableSeparator, controls, column,
//     addCheckBox, addComboBox, addRadioGroup, addStaticText, addTextBox, addSwitch,
//     addUnitValueEditor, addUserUnitValueEditor, addSpatialAnchor, addColourPicker,
//     addFontPicker, addFillEditor, addStrokeEditor, addColumnStack, addButton, addButtonSet
//   DialogControl — controlID, controlType, isEnabled, label, description, onValueChangedHandler
//   DialogBoolControl — value
//   DialogEnumControl — selectedIndex
//   DialogCheckBox — isFullWidth
//   DialogComboBox — isFullWidth
//   DialogRadioGroup — isFullWidth
//   DialogButtonSet — isFullWidth
//   DialogSwitch — (no extra props)
//   DialogButton — isFullWidth, alignment, onClickHandler
//   DialogStaticText — isFullWidth, text, textHorizontalAlignment
//   DialogTextBox — isFullWidth, text, isMultiLine, rowSpan
//   DialogUnitValueEditor — isFullWidth, value, units, noMinValue, noMaxValue, showPopupSlider, precision
//   DialogSpatialAnchor — value
//   DialogColourPicker — isFullWidth, value, allowPickNone, allowNoise
//   DialogFontPicker — isFullWidth, text, font, fontFamily, fontCollection
//   DialogFillEditor — isFullWidth, fill, isStrokeFill
//   DialogStrokeEditor — isFullWidth, stroke
//   DialogResult — (enum)
//   DialogItemType — (enum: Switch, ComboBox, ButtonSet, RadioGroup, StaticText, TextBox,
//     UnitValueEditor, CheckBox, SpatialAnchor, ColourPicker, FontPicker, FillEditor, StrokeEditor, Button)
//   UnitType, UserUnitType, HorizontalAlignment, SpatialAnchor — re-exported enums
```

---

## 29. transforminterface.js

```javascript
const { TransformInterfaceApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');
const NodesModule = require('./nodes.js');
require('/geometry.js');

class TransformInterface extends HandleObject {
    get [Symbol.toStringTag]() { return 'TransformInterface'; }
    get transform() { return TransformInterfaceApi.getTransform(this.handle, false); }
    getTransform(forceConstraints) { return TransformInterfaceApi.getTransform(this.handle, forceConstraints); }
    get unconstrainedTransform() { return TransformInterfaceApi.getUnconstrainedTransform(this.handle); }
    get frameTextScale() { return TransformInterfaceApi.getFrameTextScale(this.handle); }
    get storyPinPathTransform() { return TransformInterfaceApi.getStoryPinPathTransform(this.handle); }
    get prefersAspectRatioLockedResize() { return TransformInterfaceApi.prefersAspectRatioLockedResize(this.handle); }
    get focalPoint() { return TransformInterfaceApi.getFocalPoint(this.handle); }
    get domainTransform() { return TransformInterfaceApi.getDomainTransform(this.handle); }
    get node() { return NodesModule.createTypedNode(TransformInterfaceApi.getNode(this.handle)); }
    getDomainTransform() { return TransformInterfaceApi.getDomainTransform(this.handle); }
    getTextFrameScaleToDomainTransform() { return TransformInterfaceApi.getTextFrameScaleToDomainTransform(this.handle); }
    getNode() { return NodesModule.createTypedNode(TransformInterfaceApi.getNode(this.handle)); }
}

module.exports.TransformInterface = TransformInterface;
```

---

## 30. drawingscale.js

```javascript
const { EnumerationResult, UnitType } = require('affinity:common');
const { DrawingScaleApi } = require('affinity:dom');
const { HandleObject } = require('./handleobject.js');

class DrawingScale extends HandleObject {
    get [Symbol.toStringTag]() { return 'DrawingScale'; }
    toString(useTightFormat, showUnits, indicateApproximations) { string }
    get leftValue() { float }
    get rightValue() { float }

    static enumerateDefaults(units, callback) { void }
    static getDefaults(units) { DrawingScale[] }
    static createFromIntegers(left, right, simplifyFaction) { DrawingScale }
    static create(leftUnitValue, rightUnitValue) { DrawingScale }
    static createFromString(str, simplifyFraction, simplifyDecimalPlaces, allowOneToOne) { DrawingScale }
    static get identity() { DrawingScale }
}

module.exports.DrawingScale = DrawingScale;
module.exports.UnitType = UnitType;
```

---

## 31. fills.js

```javascript
const { BlendMode, UnitType } = require('affinity:common');
const { BitmapFillApi, FillApi, FillDescriptorApi, FillMask, FillType, GradientFillApi, GradientFillType, HatchFillApi, NoFillApi, SolidFillApi } = require('affinity:fills');
const { RasterExtendType, RasterResamplerType } = require('affinity:raster');
const { Colour, ColourProfile, Gradient } = require('./colours.js');
const { HandleObject } = require('./handleobject.js');
const { HatchPattern } = require('./hatch.js');
const { RasterObject } = require('./rasterobject.js');
require('/geometry.js');

function createTypedFill(fillHandle) { /* factory: dispatches by FillType (None, Solid, Gradient, Hatch, Bitmap) */ }

class Fill extends HandleObject {
    get [Symbol.toStringTag]() { return 'Fill'; }
    clone() { /* */ }
    get alpha() / set alpha(value) { float }
    get fillType() { FillType }
    get hasNonFullAlpha() { bool }
    get hasFlatAlpha() { bool }
    get hasNoise() { bool }
    get intensity() / set intensity(value) { float }
    get isVisible() { bool }
    get isSpatiallyInvariant() { bool }
    get meanAlpha() { float }
    get noise() / set noise(value) { float }
    get tint() / set tint(value) { float }
}

class NoFill extends Fill {
    static create() { /* */ }
    static fromFill(fill) { /* */ }
    clone() { /* */ }
}

class SolidFill extends Fill {
    static create(colour) { /* */ }
    static createDefault() { /* */ }
    static fromFill(fill) { /* */ }
    clone() { /* */ }
    get colour() / set colour(value) { Colour }
}

class GradientFill extends Fill {
    static create(gradient, gradientType) { /* */ }
    static createDefault() { /* */ }
    static fromFill(fill) { /* */ }
    clone() { /* */ }
    cloneWithNewGradient(gradient) { GradientFill }
    cloneWithNewGradientFillType(gradientFillType) { GradientFill }
    get gradient() { Gradient }
    get gradientFillType() { GradientFillType }
}

class HatchFill extends Fill {
    static create(pattern, units, penColour, brushColour, lineWeight) { /* */ }
    clone() { /* */ }
    get pattern() / set pattern(value) { HatchPattern }
    get units() / set units(value) { UnitType }
    get penColour() / set penColour(value) { Colour | null }
    get brushColour() / set brushColour(value) { Colour | null }
    get lineWeight() / set lineWeight(value) { float }
}

class BitmapFill extends Fill {
    static create(bitmap, extendType, resamplerType, ignoreAlpha) { /* */ }
    static fromFill(fill) { /* */ }
    clone() { /* */ }
    get bitmap() { RasterObject }
    get extendType() / set extendType(value) { RasterExtendType }
    get isIgnoreAlpha() / set isIgnoreAlpha(value) { bool }
    get isKOnly() / set isKOnly(value) { bool }
    get profile() / set profile(value) { ColourProfile | null }
    get upsamplerType() / set upsamplerType(value) { RasterResamplerType }
}

class FillDescriptor extends HandleObject {
    get [Symbol.toStringTag]() { return 'FillDescriptor'; }
    clone() { /* */ }
    cloneWithNewFill(fill) { FillDescriptor }
    cloneWithNewIsScaleWithObject(isScaleWithObject) { FillDescriptor }
    cloneWithNewTransform(transform) { FillDescriptor }
    cloneWithNewTransformInfo(transform, isAnchoredToSpread) { FillDescriptor }
    cloneWithNewBlendMode(blendMode) { FillDescriptor }
    cloneWithNewIsAnchoredToSpread(isAnchoredToSpread) { FillDescriptor }
    get fill() { Fill }
    get fillType() { FillType }
    get blendMode() { BlendMode }
    get transform() { Matrix }
    get isScaleWithObject() { bool }
    get isAnchoredToSpread() { bool }
    getTransformInfo() { /* */ }
    static createNone() { FillDescriptor }
    static createSolid(solidFill, blendMode) { FillDescriptor }
    static create(fill, scaleWithObject, transform, blendMode, anchoredToSpread) { FillDescriptor }
}

module.exports.BitmapFill = BitmapFill;
module.exports.BlendMode = BlendMode;
module.exports.createTypedFill = createTypedFill;
module.exports.Fill = Fill;
module.exports.FillDescriptor = FillDescriptor;
module.exports.FillMask = FillMask;
module.exports.FillType = FillType;
module.exports.GradientFill = GradientFill;
module.exports.GradientFillType = GradientFillType;
module.exports.HatchFill = HatchFill;
module.exports.NoFill = NoFill;
module.exports.RasterExtendType = RasterExtendType;
module.exports.RasterResamplerType = RasterResamplerType;
module.exports.SolidFill = SolidFill;
module.exports.UnitType = UnitType;
```
