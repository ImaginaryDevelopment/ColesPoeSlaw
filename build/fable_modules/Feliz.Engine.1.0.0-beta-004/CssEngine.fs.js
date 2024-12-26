import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { int32ToString } from "../fable-library-js.4.21.0/Util.js";
import { join } from "../fable-library-js.4.21.0/String.js";
import { map } from "../fable-library-js.4.21.0/List.js";
import { map as map_1 } from "../fable-library-js.4.21.0/Seq.js";
import { map as map_2 } from "../fable-library-js.4.21.0/Array.js";

export class Util {
    constructor() {
    }
}

export function Util_$reflection() {
    return class_type("Feliz.Util", undefined, Util);
}

export class CssEngine$1 {
    constructor(mk) {
        this.mk = mk;
    }
}

export function CssEngine$1_$reflection(gen0) {
    return class_type("Feliz.CssEngine`1", [gen0], CssEngine$1);
}

export function CssEngine$1_$ctor_Z19E9258B(mk) {
    return new CssEngine$1(mk);
}

/**
 * Define a custom property
 */
export function CssEngine$1__custom_Z384F8060(_, key, value) {
    return _.mk(key, value);
}

/**
 * Specifies that all the element's properties should be changed to their initial values.
 */
export function CssEngine$1__get_allInitial(_) {
    return _.mk("all", "initial");
}

/**
 * Specifies that all the element's properties should be changed to their inherited values.
 */
export function CssEngine$1__get_allInherit(_) {
    return _.mk("all", "inherit");
}

/**
 * Specifies that all the element's properties should be changed to their inherited values if they inherit by default, or to their initial values if not.
 */
export function CssEngine$1__get_allUnset(_) {
    return _.mk("all", "unset");
}

/**
 * Specifies behavior that depends on the stylesheet origin to which the declaration belongs:
 * 
 * User-agent origin
 * Equivalent to unset.
 * User origin
 * Rolls back the cascade to the user-agent level, so that the specified values are calculated as if no author-level or user-level rules were specified for the element.
 * Author origin
 * Rolls back the cascade to the user level, so that the specified values are calculated as if no author-level rules were specified for the element. For purposes of revert, the Author origin includes the Override and Animation origins.
 */
export function CssEngine$1__get_allRevert(_) {
    return _.mk("all", "revert");
}

export function CssEngine$1__boxShadow_Z721C83C5(_, value) {
    return _.mk("box-shadow", value);
}

export function CssEngine$1__boxShadow_6F29BBBB(_, horizontalOffset, verticalOffset, color) {
    return _.mk("box-shadow", (((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + color);
}

export function CssEngine$1__boxShadow_Z4C7F1E99(_, horizontalOffset, verticalOffset, blur, color) {
    return _.mk("box-shadow", (((((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + color);
}

export function CssEngine$1__boxShadow_Z7DB918C5(_, horizontalOffset, verticalOffset, blur, spread, color) {
    return _.mk("box-shadow", (((((((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + int32ToString(spread)) + "px ") + color);
}

export function CssEngine$1__get_boxShadowNone(_) {
    return _.mk("box-shadow", "none");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_boxShadowInheritFromParent(_) {
    return _.mk("box-shadow", "inherit");
}

export function CssEngine$1__height_Z524259A4(_, value) {
    return _.mk("height", int32ToString(value) + "px");
}

export function CssEngine$1__height_Z445F6BAF(_, value) {
    return _.mk("height", value);
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_heightInheritFromParent(_) {
    return _.mk("height", "inherit");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_heightInitial(_) {
    return _.mk("height", "initial");
}

/**
 * The intrinsic preferred height.
 */
export function CssEngine$1__get_heightMaxContent(_) {
    return _.mk("height", "max-content");
}

/**
 * The intrinsic minimum height.
 */
export function CssEngine$1__get_heightMinContent(_) {
    return _.mk("height", "min-content");
}

export function CssEngine$1__maxHeight_Z524259A4(_, value) {
    return _.mk("max-height", int32ToString(value) + "px");
}

export function CssEngine$1__maxHeight_Z445F6BAF(_, value) {
    return _.mk("max-height", value);
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_maxHeightInheritFromParent(_) {
    return _.mk("max-height", "inherit");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_maxHeightInitial(_) {
    return _.mk("max-height", "initial");
}

/**
 * The intrinsic preferred height.
 */
export function CssEngine$1__get_maxHeightMaxContent(_) {
    return _.mk("height", "max-content");
}

/**
 * The intrinsic minimum height.
 */
export function CssEngine$1__get_maxHeightMinContent(_) {
    return _.mk("height", "min-content");
}

export function CssEngine$1__minHeight_Z524259A4(_, value) {
    return _.mk("min-height", int32ToString(value) + "px");
}

export function CssEngine$1__minHeight_Z445F6BAF(_, value) {
    return _.mk("min-height", value);
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_minHeightInheritFromParent(_) {
    return _.mk("min-height", "inherit");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_minHeightInitial(_) {
    return _.mk("min-height", "initial");
}

/**
 * The intrinsic preferred height.
 */
export function CssEngine$1__get_minHeightMaxContent(_) {
    return _.mk("height", "max-content");
}

/**
 * The intrinsic minimum height.
 */
export function CssEngine$1__get_minHeightMinContent(_) {
    return _.mk("height", "min-content");
}

/**
 * The browser determines the justification algorithm
 */
export function CssEngine$1__get_textJustifyAuto(_) {
    return _.mk("text-justify", "auto");
}

/**
 * Increases/Decreases the space between words
 */
export function CssEngine$1__get_textJustifyInterWord(_) {
    return _.mk("text-justify", "inter-word");
}

/**
 * Increases/Decreases the space between characters
 */
export function CssEngine$1__get_textJustifyInterCharacter(_) {
    return _.mk("text-justify", "inter-character");
}

/**
 * Disables justification methods
 */
export function CssEngine$1__get_textJustifyNone(_) {
    return _.mk("text-justify", "none");
}

export function CssEngine$1__get_textJustifyInitial(_) {
    return _.mk("text-justify", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textJustifyInheritFromParent(_) {
    return _.mk("text-justify", "inherit");
}

/**
 * Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default.
 */
export function CssEngine$1__get_whiteSpaceNormal(_) {
    return _.mk("white-space", "normal");
}

/**
 * Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line.
 * The text continues on the same line until a `<br> ` tag is encountered.
 */
export function CssEngine$1__get_whiteSpaceNowrap(_) {
    return _.mk("white-space", "nowrap");
}

/**
 * Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the <pre> tag in HTML.
 */
export function CssEngine$1__get_whiteSpacePre(_) {
    return _.mk("white-space", "pre");
}

/**
 * Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks
 */
export function CssEngine$1__get_whiteSpacePreLine(_) {
    return _.mk("white-space", "pre-line");
}

/**
 * Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks
 */
export function CssEngine$1__get_whiteSpacePreWrap(_) {
    return _.mk("white-space", "pre-wrap");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_whiteSpaceInitial(_) {
    return _.mk("white-space", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_whiteSpaceInheritFromParent(_) {
    return _.mk("white-space", "inherit");
}

/**
 * Default value. Uses default line break rules.
 */
export function CssEngine$1__get_wordbreakNormal(_) {
    return _.mk("word-break", "normal");
}

/**
 * To prevent overflow, word may be broken at any character
 */
export function CssEngine$1__get_wordbreakBreakAll(_) {
    return _.mk("word-break", "break-all");
}

/**
 * Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as value "normal"
 */
export function CssEngine$1__get_wordbreakKeepAll(_) {
    return _.mk("word-break", "keep-all");
}

/**
 * To prevent overflow, word may be broken at arbitrary points.
 */
export function CssEngine$1__get_wordbreakBreakWord(_) {
    return _.mk("word-break", "break-word");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_wordbreakInitial(_) {
    return _.mk("word-break", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_wordbreakInheritFromParent(_) {
    return _.mk("word-break", "inherit");
}

/**
 * Allows a straight jump "scroll effect" between elements within the scrolling box. This is default
 */
export function CssEngine$1__get_scrollBehaviorAuto(_) {
    return _.mk("scroll-behavior", "auto");
}

/**
 * Allows a smooth animated "scroll effect" between elements within the scrolling box.
 */
export function CssEngine$1__get_scrollBehaviorSmooth(_) {
    return _.mk("scroll-behavior", "smooth");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_scrollBehaviorInitial(_) {
    return _.mk("scroll-behavior", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_scrollBehaviorInheritFromParent(_) {
    return _.mk("scroll-behavior", "inherit");
}

/**
 * The content is not clipped, and it may be rendered outside the left and right edges. This is default.
 */
export function CssEngine$1__get_overflowVisible(_) {
    return _.mk("overflow", "visibile");
}

/**
 * The content is clipped - and no scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowHidden(_) {
    return _.mk("overflow", "hidden");
}

/**
 * The content is clipped and a scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowScroll(_) {
    return _.mk("overflow", "scroll");
}

/**
 * Should cause a scrolling mechanism to be provided for overflowing boxes
 */
export function CssEngine$1__get_overflowAuto(_) {
    return _.mk("overflow", "auto");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_overflowInitial(_) {
    return _.mk("overflow", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_overflowInheritFromParent(_) {
    return _.mk("overflow", "inherit");
}

/**
 * The content is not clipped, and it may be rendered outside the left and right edges. This is default.
 */
export function CssEngine$1__get_overflowXVisible(_) {
    return _.mk("overflow-x", "visibile");
}

/**
 * The content is clipped - and no scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowXHidden(_) {
    return _.mk("overflow-x", "hidden");
}

/**
 * The content is clipped and a scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowXScroll(_) {
    return _.mk("overflow-x", "scroll");
}

/**
 * Should cause a scrolling mechanism to be provided for overflowing boxes
 */
export function CssEngine$1__get_overflowXAuto(_) {
    return _.mk("overflow-x", "auto");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_overflowXInitial(_) {
    return _.mk("overflow-x", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_overflowXInheritFromParent(_) {
    return _.mk("overflow-x", "inherit");
}

/**
 * The content is not clipped, and it may be rendered outside the left and right edges. This is default.
 */
export function CssEngine$1__get_overflowYVisible(_) {
    return _.mk("overflow-y", "visibile");
}

/**
 * The content is clipped - and no scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowYHidden(_) {
    return _.mk("overflow-y", "hidden");
}

/**
 * The content is clipped and a scrolling mechanism is provided.
 */
export function CssEngine$1__get_overflowYScroll(_) {
    return _.mk("overflow-y", "scroll");
}

/**
 * Should cause a scrolling mechanism to be provided for overflowing boxes
 */
export function CssEngine$1__get_overflowYAuto(_) {
    return _.mk("overflow-y", "auto");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_overflowYInitial(_) {
    return _.mk("overflow-y", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_overflowYInheritFromParent(_) {
    return _.mk("overflow-y", "inherit");
}

/**
 * The element is hidden (but still takes up space).
 */
export function CssEngine$1__get_visibilityHidden(_) {
    return _.mk("visibility", "hidden");
}

/**
 * Default value. The element is visible.
 */
export function CssEngine$1__get_visibilityVisible(_) {
    return _.mk("visibility", "visible");
}

/**
 * Only for table rows (`<tr> `), row groups (`<tbody> `), columns (`<col> `), column groups
 * (`<colgroup> `). This value removes a row or column, but it does not affect the table layout.
 * The space taken up by the row or column will be available for other content.
 * 
 * If collapse is used on other elements, it renders as "hidden"
 */
export function CssEngine$1__get_visibilityCollapse(_) {
    return _.mk("visibility", "collapse");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_visibilityInitial(_) {
    return _.mk("visibility", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_visibilityInheritFromParent(_) {
    return _.mk("visibility", "inherit");
}

/**
 * Default value. The length is equal to the length of the flexible item. If the item has
 * no length specified, the length will be according to its content.
 */
export function CssEngine$1__get_flexBasisAuto(_) {
    return _.mk("flex-basis", "auto");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_flexBasisInitial(_) {
    return _.mk("flex-basis", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_flexBasisInheritFromParent(_) {
    return _.mk("flex-basis", "inherit");
}

/**
 * Default value. The flexible items are displayed horizontally, as a row
 */
export function CssEngine$1__get_flexDirectionRow(_) {
    return _.mk("flex-direction", "row");
}

/**
 * Same as row, but in reverse order.
 */
export function CssEngine$1__get_flexDirectionRowReverse(_) {
    return _.mk("flex-direction", "row-reverse");
}

/**
 * The flexible items are displayed vertically, as a column
 */
export function CssEngine$1__get_flexDirectionColumn(_) {
    return _.mk("flex-direction", "column");
}

/**
 * Same as column, but in reverse order
 */
export function CssEngine$1__get_flexDirectionColumnReverse(_) {
    return _.mk("flex-direction", "column-reverse");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_flexDirectionInitial(_) {
    return _.mk("flex-basis", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_flexDirectionInheritFromParent(_) {
    return _.mk("flex-basis", "inherit");
}

/**
 * Default value. Specifies that the flexible items will not wrap.
 */
export function CssEngine$1__get_flexWrapNowrap(_) {
    return _.mk("flex-wrap", "nowrap");
}

/**
 * Specifies that the flexible items will wrap if necessary
 */
export function CssEngine$1__get_flexWrapWrap(_) {
    return _.mk("flex-wrap", "wrap");
}

/**
 * Specifies that the flexible items will wrap, if necessary, in reverse order
 */
export function CssEngine$1__get_flexWrapWrapReverse(_) {
    return _.mk("flex-wrap", "wrap-reverse");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_flexWrapInitial(_) {
    return _.mk("flex-wrap", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_flexWrapInheritFromParent(_) {
    return _.mk("flex-wrap", "inherit");
}

/**
 * The element must float on the left side of its containing block.
 */
export function CssEngine$1__get_floatLeft(_) {
    return _.mk("float", "left");
}

/**
 * The element must float on the right side of its containing block.
 */
export function CssEngine$1__get_floatRight(_) {
    return _.mk("float", "right");
}

/**
 * The element must not float.
 */
export function CssEngine$1__get_floatNone(_) {
    return _.mk("float", "none");
}

/**
 * The font display strategy is defined by the user agent.
 * 
 * Default value
 */
export function CssEngine$1__get_fontDisplayAuto(_) {
    return _.mk("font-display", "auto");
}

/**
 * Gives the font face a short block period and an infinite swap period.
 */
export function CssEngine$1__get_fontDisplayBlock(_) {
    return _.mk("font-display", "block");
}

/**
 * Gives the font face an extremely small block period and an infinite swap period.
 */
export function CssEngine$1__get_fontDisplaySwap(_) {
    return _.mk("font-display", "swap");
}

/**
 * Gives the font face an extremely small block period and a short swap period.
 */
export function CssEngine$1__get_fontDisplayFallback(_) {
    return _.mk("font-display", "fallback");
}

/**
 * Gives the font face an extremely small block period and no swap period.
 */
export function CssEngine$1__get_fontDisplayOptional(_) {
    return _.mk("font-display", "optional");
}

/**
 * Default. The browser determines whether font kerning should be applied or not
 */
export function CssEngine$1__get_fontKerningAuto(_) {
    return _.mk("font-kerning", "auto");
}

/**
 * Specifies that font kerning is applied
 */
export function CssEngine$1__get_fontKerningNormal(_) {
    return _.mk("font-kerning", "normal");
}

/**
 * Specifies that font kerning is not applied
 */
export function CssEngine$1__get_fontKerningNone(_) {
    return _.mk("font-kerning", "none");
}

/**
 * Defines from thin to thick characters. 400 is the same as normal, and 700 is the same as bold.
 * Possible values are [100, 200, 300, 400, 500, 600, 700, 800, 900]
 */
export function CssEngine$1__fontWeight_Z524259A4(_, weight) {
    return _.mk("font-weight", int32ToString(weight));
}

/**
 * Defines normal characters. This is default.
 */
export function CssEngine$1__get_fontWeightNormal(_) {
    return _.mk("font-weight", "normal");
}

/**
 * Defines thick characters.
 */
export function CssEngine$1__get_fontWeightBold(_) {
    return _.mk("font-weight", "bold");
}

/**
 * Defines thicker characters
 */
export function CssEngine$1__get_fontWeightBolder(_) {
    return _.mk("font-weight", "bolder");
}

/**
 * Defines lighter characters.
 */
export function CssEngine$1__get_fontWeightLighter(_) {
    return _.mk("font-weight", "lighter");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_fontWeightInitial(_) {
    return _.mk("font-weight", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_fontWeightInheritFromParent(_) {
    return _.mk("font-weight", "inherit");
}

/**
 * The browser displays a normal font style. This is defaut.
 */
export function CssEngine$1__get_fontStyleNormal(_) {
    return _.mk("font-style", "normal");
}

/**
 * The browser displays an italic font style.
 */
export function CssEngine$1__get_fontStyleItalic(_) {
    return _.mk("font-style", "italic");
}

/**
 * The browser displays an oblique font style.
 */
export function CssEngine$1__get_fontStyleOblique(_) {
    return _.mk("font-style", "oblique");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_fontStyleInitial(_) {
    return _.mk("font-style", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_fontStyleInheritFromParent(_) {
    return _.mk("font-style", "inherit");
}

/**
 * The browser displays a normal font. This is default
 */
export function CssEngine$1__get_fontVariantNormal(_) {
    return _.mk("font-variant", "normal");
}

/**
 * The browser displays a small-caps font
 */
export function CssEngine$1__get_fontVariantSmallCaps(_) {
    return _.mk("font-variant", "small-caps");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_fontVariantInitial(_) {
    return _.mk("font-variant", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_fontVariantInheritFromParent(_) {
    return _.mk("font-variant", "inherit");
}

/**
 * Break words only at allowed break points
 */
export function CssEngine$1__get_wordWrapNormal(_) {
    return _.mk("word-wrap", "normal");
}

/**
 * Allows unbreakable words to be broken
 */
export function CssEngine$1__get_wordWrapBreakWord(_) {
    return _.mk("word-wrap", "break-word");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_wordWrapInitial(_) {
    return _.mk("word-wrap", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_wordWrapInheritFromParent(_) {
    return _.mk("word-wrap", "inherit");
}

/**
 * Default. The element inherits its parent container's align-items property, or "stretch" if it has no parent container.
 */
export function CssEngine$1__get_alignSelfAuto(_) {
    return _.mk("align-self", "auto");
}

/**
 * The element is positioned to fit the container
 */
export function CssEngine$1__get_alignSelfStretch(_) {
    return _.mk("align-self", "stretch");
}

/**
 * The element is positioned at the center of the container
 */
export function CssEngine$1__get_alignSelfCenter(_) {
    return _.mk("align-self", "center");
}

/**
 * The element is positioned at the beginning of the container
 */
export function CssEngine$1__get_alignSelfFlexStart(_) {
    return _.mk("align-self", "flex-start");
}

/**
 * The element is positioned at the end of the container
 */
export function CssEngine$1__get_alignSelfFlexEnd(_) {
    return _.mk("align-self", "flex-end");
}

/**
 * The element is positioned at the baseline of the container
 */
export function CssEngine$1__get_alignSelfBaseline(_) {
    return _.mk("align-self", "baseline");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_alignSelfInitial(_) {
    return _.mk("align-self", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_alignSelfInheritFromParent(_) {
    return _.mk("align-self", "inherit");
}

/**
 * Default. Items are stretched to fit the container
 */
export function CssEngine$1__get_alignItemsStretch(_) {
    return _.mk("align-items", "stretch");
}

/**
 * Items are positioned at the center of the container
 */
export function CssEngine$1__get_alignItemsCenter(_) {
    return _.mk("align-items", "center");
}

/**
 * Items are positioned at the beginning of the container
 */
export function CssEngine$1__get_alignItemsFlexStart(_) {
    return _.mk("align-items", "flex-start");
}

/**
 * Items are positioned at the end of the container
 */
export function CssEngine$1__get_alignItemsFlexEnd(_) {
    return _.mk("align-items", "flex-end");
}

/**
 * Items are positioned at the baseline of the container
 */
export function CssEngine$1__get_alignItemsBaseline(_) {
    return _.mk("align-items", "baseline");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_alignItemsInitial(_) {
    return _.mk("align-items", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_alignItemsInheritFromParent(_) {
    return _.mk("align-items", "inherit");
}

/**
 * Default value. Lines stretch to take up the remaining space.
 */
export function CssEngine$1__get_alignContentStretch(_) {
    return _.mk("align-content", "stretch");
}

/**
 * Lines are packed toward the center of the flex container.
 */
export function CssEngine$1__get_alignContentCenter(_) {
    return _.mk("align-content", "center");
}

/**
 * Lines are packed toward the start of the flex container.
 */
export function CssEngine$1__get_alignContentFlexStart(_) {
    return _.mk("align-content", "flex-start");
}

/**
 * Lines are packed toward the end of the flex container.
 */
export function CssEngine$1__get_alignContentFlexEnd(_) {
    return _.mk("align-content", "flex-end");
}

/**
 * Lines are evenly distributed in the flex container.
 */
export function CssEngine$1__get_alignContentSpaceBetween(_) {
    return _.mk("align-content", "space-between");
}

/**
 * Lines are evenly distributed in the flex container, with half-size spaces on either end.
 */
export function CssEngine$1__get_alignContentSpaceAround(_) {
    return _.mk("align-content", "space-around");
}

export function CssEngine$1__get_alignContentInitial(_) {
    return _.mk("align-content", "initial");
}

export function CssEngine$1__get_alignContentInheritFromParent(_) {
    return _.mk("align-content", "inherit");
}

/**
 * Default value. Items are positioned at the beginning of the container.
 */
export function CssEngine$1__get_justifyContentFlexStart(_) {
    return _.mk("justify-content", "flex-start");
}

/**
 * Items are positioned at the end of the container.
 */
export function CssEngine$1__get_justifyContentFlexEnd(_) {
    return _.mk("justify-content", "flex-end");
}

/**
 * Items are positioned at the center of the container
 */
export function CssEngine$1__get_justifyContentCenter(_) {
    return _.mk("justify-content", "center");
}

/**
 * Items are positioned with space between the lines
 */
export function CssEngine$1__get_justifyContentSpaceBetween(_) {
    return _.mk("justify-content", "space-between");
}

/**
 * Items are positioned with space before, between, and after the lines.
 */
export function CssEngine$1__get_justifyContentSpaceAround(_) {
    return _.mk("justify-content", "space-around");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_justifyContentInitial(_) {
    return _.mk("justify-content", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_justifyContentInheritFromParent(_) {
    return _.mk("justify-content", "inherit");
}

export function CssEngine$1__outlineWidth_Z524259A4(_, width) {
    return _.mk("outline-width", int32ToString(width) + "px");
}

export function CssEngine$1__outlineWidth_Z445F6BAF(_, width) {
    return _.mk("outline-width", width);
}

/**
 * Specifies a medium outline. This is default.
 */
export function CssEngine$1__get_outlineWidthMedium(_) {
    return _.mk("outline-width", "medium");
}

/**
 * Specifies a thin outline.
 */
export function CssEngine$1__get_outlineWidthThin(_) {
    return _.mk("outline-width", "thin");
}

/**
 * Specifies a thick outline.
 */
export function CssEngine$1__get_outlineWidthThick(_) {
    return _.mk("outline-width", "thick");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_outlineWidthInitial(_) {
    return _.mk("outline-width", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_outlineWidthInheritFromParent(_) {
    return _.mk("outline-width", "inherit");
}

/**
 * Default value. The marker is a filled circle
 */
export function CssEngine$1__get_listStyleTypeDisc(_) {
    return _.mk("list-style-type", "disc");
}

/**
 * The marker is traditional Armenian numbering
 */
export function CssEngine$1__get_listStyleTypeArmenian(_) {
    return _.mk("list-style-type", "armenian");
}

/**
 * The marker is a circle
 */
export function CssEngine$1__get_listStyleTypeCircle(_) {
    return _.mk("list-style-type", "circle");
}

/**
 * The marker is plain ideographic numbers
 */
export function CssEngine$1__get_listStyleTypeCjkIdeographic(_) {
    return _.mk("list-style-type", "cjk-ideographic");
}

/**
 * The marker is a number
 */
export function CssEngine$1__get_listStyleTypeDecimal(_) {
    return _.mk("list-style-type", "decimal");
}

/**
 * The marker is a number with leading zeros (01, 02, 03, etc.)
 */
export function CssEngine$1__get_listStyleTypeDecimalLeadingZero(_) {
    return _.mk("list-style-type", "decimal-leading-zero");
}

/**
 * The marker is traditional Georgian numbering
 */
export function CssEngine$1__get_listStyleTypeGeorgian(_) {
    return _.mk("list-style-type", "georgian");
}

/**
 * The marker is traditional Hebrew numbering
 */
export function CssEngine$1__get_listStyleTypeHebrew(_) {
    return _.mk("list-style-type", "hebrew");
}

/**
 * The marker is traditional Hiragana numbering
 */
export function CssEngine$1__get_listStyleTypeHiragana(_) {
    return _.mk("list-style-type", "hiragana");
}

/**
 * The marker is traditional Hiragana iroha numbering
 */
export function CssEngine$1__get_listStyleTypeHiraganaIroha(_) {
    return _.mk("list-style-type", "hiragana-iroha");
}

/**
 * The marker is traditional Katakana numbering
 */
export function CssEngine$1__get_listStyleTypeKatakana(_) {
    return _.mk("list-style-type", "katakana");
}

/**
 * The marker is traditional Katakana iroha numbering
 */
export function CssEngine$1__get_listStyleTypeKatakanaIroha(_) {
    return _.mk("list-style-type", "katakana-iroha");
}

/**
 * The marker is lower-alpha (a, b, c, d, e, etc.)
 */
export function CssEngine$1__get_listStyleTypeLowerAlpha(_) {
    return _.mk("list-style-type", "lower-alpha");
}

/**
 * The marker is lower-greek
 */
export function CssEngine$1__get_listStyleTypeLowerGreek(_) {
    return _.mk("list-style-type", "lower-greek");
}

/**
 * The marker is lower-latin (a, b, c, d, e, etc.)
 */
export function CssEngine$1__get_listStyleTypeLowerLatin(_) {
    return _.mk("list-style-type", "lower-latin");
}

/**
 * The marker is lower-roman (i, ii, iii, iv, v, etc.)
 */
export function CssEngine$1__get_listStyleTypeLowerRoman(_) {
    return _.mk("list-style-type", "lower-roman");
}

/**
 * No marker is shown
 */
export function CssEngine$1__get_listStyleTypeNone(_) {
    return _.mk("list-style-type", "none");
}

/**
 * The marker is a square
 */
export function CssEngine$1__get_listStyleTypeSquare(_) {
    return _.mk("list-style-type", "square");
}

/**
 * The marker is upper-alpha (A, B, C, D, E, etc.)
 */
export function CssEngine$1__get_listStyleTypeUpperAlpha(_) {
    return _.mk("list-style-type", "upper-alpha");
}

/**
 * The marker is upper-greek
 */
export function CssEngine$1__get_listStyleTypeUpperGreek(_) {
    return _.mk("list-style-type", "upper-greek");
}

/**
 * The marker is upper-latin (A, B, C, D, E, etc.)
 */
export function CssEngine$1__get_listStyleTypeUpperLatin(_) {
    return _.mk("list-style-type", "upper-latin");
}

/**
 * The marker is upper-roman (I, II, III, IV, V, etc.)
 */
export function CssEngine$1__get_listStyleTypeUpperRoman(_) {
    return _.mk("list-style-type", "upper-roman");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_listStyleTypeInitial(_) {
    return _.mk("list-style-type", "initial");
}

/**
 * Inherits this property from its parent element.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_listStyleTypeInheritFromParent(_) {
    return _.mk("list-style-type", "inherit");
}

export function CssEngine$1__get_propertyNone(_) {
    return _.mk("list-style-image", "none");
}

/**
 * The path to the image to be used as a list-item marker
 */
export function CssEngine$1__propertyUrl_Z721C83C5(_, path) {
    return _.mk("list-style-image", ("url(\'" + path) + "\')");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_propertyInitial(_) {
    return _.mk("list-style-image", "initial");
}

/**
 * Inherits this property from its parent element.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_propertyInheritFromParent(_) {
    return _.mk("list-style-image", "inherit");
}

/**
 * The bullet points will be inside the list item
 */
export function CssEngine$1__get_listStylePositionInside(_) {
    return _.mk("list-style-position", "inside");
}

/**
 * The bullet points will be outside the list item. This is default
 */
export function CssEngine$1__get_listStylePositionOutside(_) {
    return _.mk("list-style-position", "outside");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_listStylePositionInitial(_) {
    return _.mk("list-style-position", "initial");
}

/**
 * Inherits this property from its parent element.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_listStylePositionInheritFromParent(_) {
    return _.mk("list-style-position", "inherit");
}

export function CssEngine$1__textDecorationLine_60978065(_, line) {
    return _.mk("text-decoration-line", line);
}

export function CssEngine$1__get_textDecorationLineNone(_) {
    return _.mk("text-decoration-line", "none");
}

export function CssEngine$1__get_textDecorationLineUnderline(_) {
    return _.mk("text-decoration-line", "underline");
}

export function CssEngine$1__get_textDecorationLineOverline(_) {
    return _.mk("text-decoration-line", "overline");
}

export function CssEngine$1__get_textDecorationLineLineThrough(_) {
    return _.mk("text-decoration-line", "line-through");
}

export function CssEngine$1__get_textDecorationLineInitial(_) {
    return _.mk("text-decoration-line", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textDecorationLineInheritFromParent(_) {
    return _.mk("text-decoration-line", "inherit");
}

export function CssEngine$1__textDecoration_60978065(_, line) {
    return _.mk("text-decoration", line);
}

export function CssEngine$1__textDecoration_13100D60(_, bottom, top) {
    return _.mk("text-decoration", (bottom + " ") + top);
}

export function CssEngine$1__textDecoration_5CC65D2B(_, bottom, top, style) {
    return _.mk("text-decoration", (((bottom + " ") + top) + " ") + style);
}

export function CssEngine$1__textDecoration_78717EB0(_, bottom, top, style, color) {
    return _.mk("text-decoration", (((((bottom + " ") + top) + " ") + style) + " ") + color);
}

export function CssEngine$1__get_textDecorationNone(_) {
    return _.mk("text-decoration", "none");
}

export function CssEngine$1__get_textDecorationUnderline(_) {
    return _.mk("text-decoration", "underline");
}

export function CssEngine$1__get_textDecorationOverline(_) {
    return _.mk("text-decoration", "overline");
}

export function CssEngine$1__get_textDecorationLineThrough(_) {
    return _.mk("text-decoration", "line-through");
}

export function CssEngine$1__get_textDecorationInitial(_) {
    return _.mk("text-decoration", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textDecorationInheritFromParent(_) {
    return _.mk("text-decoration", "inherit");
}

/**
 * Specifies that child elements will NOT preserve its 3D position. This is default.
 */
export function CssEngine$1__get_transformStyleFlat(_) {
    return _.mk("transform-style", "flat");
}

/**
 * Specifies that child elements will preserve its 3D position
 */
export function CssEngine$1__get_transformStylePreserve3D(_) {
    return _.mk("transform-style", "preserve-3d");
}

export function CssEngine$1__get_transformStyleInitial(_) {
    return _.mk("transform-style", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_transformStyleInheritFromParent(_) {
    return _.mk("transform-style", "inherit");
}

/**
 * No capitalization. The text renders as it is. This is default.
 */
export function CssEngine$1__get_textTransformNone(_) {
    return _.mk("text-transform", "none");
}

/**
 * Transforms the first character of each word to uppercase.
 */
export function CssEngine$1__get_textTransformCapitalize(_) {
    return _.mk("text-transform", "capitalize");
}

/**
 * Transforms all characters to uppercase.
 */
export function CssEngine$1__get_textTransformUppercase(_) {
    return _.mk("text-transform", "uppercase");
}

/**
 * Transforms all characters to lowercase.
 */
export function CssEngine$1__get_textTransformLowercase(_) {
    return _.mk("text-transform", "lowercase");
}

export function CssEngine$1__get_textTransformInitial(_) {
    return _.mk("text-transform", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textTransformInheritFromParent(_) {
    return _.mk("text-transform", "inherit");
}

/**
 * Default value. The text is clipped and not accessible.
 */
export function CssEngine$1__get_textOverflowClip(_) {
    return _.mk("text-overflow", "clip");
}

/**
 * Render an ellipsis ("...") to represent the clipped text.
 */
export function CssEngine$1__get_textOverflowEllipsis(_) {
    return _.mk("text-overflow", "ellipsis");
}

/**
 * Render the given asString to represent the clipped text.
 */
export function CssEngine$1__get_textOverflowInitial(_) {
    return _.mk("text-overflow", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textOverflowInheritFromParent(_) {
    return _.mk("text-overflow", "inherit");
}

/**
 * Default value. Specifies no effects.
 */
export function CssEngine$1__get_filterNone(_) {
    return _.mk("filter", "none");
}

/**
 * Applies a blur effect to the elemeen. A larger value will create more blur.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterBlur_Z524259A4(_, value) {
    return _.mk("filter", "blur(" + (int32ToString(value) + "%)"));
}

/**
 * Applies a blur effect to the elemeen. A larger value will create more blur.
 * 
 * This overload takes a floating number that goes from 0 to 1,
 */
export function CssEngine$1__filterBlur_5E38073B(_, value) {
    return _.mk("filter", "blur(" + (value.toString() + ")"));
}

/**
 * Adjusts the brightness of the elemeen
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 * 
 * Values over 100% will provide brighter results.
 */
export function CssEngine$1__filterBrightness_Z524259A4(_, value) {
    return _.mk("filter", "brightness(" + (int32ToString(value) + "%)"));
}

/**
 * Adjusts the brightness of the elemeen. A larger value will create more blur.
 * 
 * This overload takes a floating number that goes from 0 to 1,
 */
export function CssEngine$1__filterBrightness_5E38073B(_, value) {
    return _.mk("filter", "brightness(" + (value.toString() + ")"));
}

/**
 * Adjusts the contrast of the element.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterContrast_Z524259A4(_, value) {
    return _.mk("filter", "contrast(" + (int32ToString(value) + "%)"));
}

/**
 * Adjusts the contrast of the element. A larger value will create more contrast.
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterContrast_5E38073B(_, value) {
    return _.mk("filter", "contrast(" + (value.toString() + ")"));
}

/**
 * Applies a drop shadow effect.
 */
export function CssEngine$1__filterDropShadow_Z7DB918C5(_, horizontalOffset, verticalOffset, blur, spread, color) {
    return _.mk("filter", ((((((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + int32ToString(spread)) + "px ") + color) + ")");
}

/**
 * Applies a drop shadow effect.
 */
export function CssEngine$1__filterDropShadow_Z4C7F1E99(_, horizontalOffset, verticalOffset, blur, color) {
    return _.mk("filter", ((((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + color) + ")");
}

/**
 * Applies a drop shadow effect.
 */
export function CssEngine$1__filterDropShadow_6F29BBBB(_, horizontalOffset, verticalOffset, color) {
    return _.mk("filter", ((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + color) + ")");
}

/**
 * Converts the image to grayscale
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterGrayscale_Z524259A4(_, value) {
    return _.mk("filter", "grayscale(" + (int32ToString(value) + "%)"));
}

/**
 * Converts the image to grayscale
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterGrayscale_5E38073B(_, value) {
    return _.mk("filter", "grayscale(" + (value.toString() + ")"));
}

/**
 * Applies a hue rotation on the image. The value defines the number of degrees around the color circle the image
 * samples will be adjusted. 0deg is default, and represents the original image.
 * 
 * **Note**: Maximum value is 360
 */
export function CssEngine$1__filterHueRotate_Z524259A4(_, degrees) {
    return _.mk("filter", ("hue-rotate(" + int32ToString(degrees)) + "deg)");
}

/**
 * Inverts the element.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterInvert_Z524259A4(_, value) {
    return _.mk("filter", "invert(" + (int32ToString(value) + "%)"));
}

/**
 * Inverts the element.
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterInvert_5E38073B(_, value) {
    return _.mk("filter", "invert(" + (value.toString() + ")"));
}

/**
 * Sets the opacity of the element.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterOpacity_Z524259A4(_, value) {
    return _.mk("filter", "opacity(" + (int32ToString(value) + "%)"));
}

/**
 * Sets the opacity of the element.
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterOpacity_5E38073B(_, value) {
    return _.mk("filter", "opacity(" + (value.toString() + ")"));
}

/**
 * Sets the saturation of the element.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterSaturate_Z524259A4(_, value) {
    return _.mk("filter", "saturate(" + (int32ToString(value) + "%)"));
}

/**
 * Sets the saturation of the element.
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterSaturate_5E38073B(_, value) {
    return _.mk("filter", "saturate(" + (value.toString() + ")"));
}

/**
 * Applies Sepia filter to the element.
 * 
 * This overload takes an integer that represents a percentage from 0 to 100.
 */
export function CssEngine$1__filterSepia_Z524259A4(_, value) {
    return _.mk("filter", "sepia(" + (int32ToString(value) + "%)"));
}

/**
 * Applies Sepia filter to the element.
 * 
 * This overload takes a floating number that goes from 0 to 1
 */
export function CssEngine$1__filterSepia_5E38073B(_, value) {
    return _.mk("filter", "sepia(" + (value.toString() + ")"));
}

/**
 * The url() function takes the location of an XML file that specifies an SVG filter, and may include an anchor to a specific filter element.
 * 
 * Example: `filter: url(svg-url#element-id)`
 */
export function CssEngine$1__filterUrl_Z721C83C5(_, value) {
    return _.mk("filter", ("url(" + value) + ")");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_filterInitial(_) {
    return _.mk("filter", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_filterInheritFromParent(_) {
    return _.mk("filter", "inherit");
}

/**
 * Sets whether table borders should collapse into a single border or be separated as in standard HTML.
 * Borders are separated; each cell will display its own borders. This is default.
 */
export function CssEngine$1__get_borderCollapseSeparate(_) {
    return _.mk("border-collapse", "separate");
}

/**
 * Borders are collapsed into a single border when possible (border-spacing and empty-cells properties have no effect)
 */
export function CssEngine$1__get_borderCollapseCollapse(_) {
    return _.mk("border-collapse", "collapse");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_borderCollapseInitial(_) {
    return _.mk("border-collapse", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_borderCollapseInheritFromParent(_) {
    return _.mk("border-collapse", "inherit");
}

/**
 * Sets the distance between the borders of adjacent <table> cells. Applies only when border-collapse is separate.
 */
export function CssEngine$1__borderSpacing_Z3438B9D(_, horizontal, vertical) {
    let x_1, x_1_1;
    return _.mk("border-spacing", (horizontal + " ") + ((x_1 = vertical, (x_1 == null) ? "" : ((x_1_1 = x_1, x_1_1)))));
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_borderSpacingInitial(_) {
    return _.mk("border-spacing", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_borderSpacingInheritFromParent(_) {
    return _.mk("border-spacing", "inherit");
}

/**
 * Sets the size of the element's background image.
 * 
 * The image can be left to its natural size, stretched, or constrained to fit the available space.
 */
export function CssEngine$1__backgroundSize_Z721C83C5(_, value) {
    return _.mk("background-size", value);
}

/**
 * Sets the size of the element's background image.
 * 
 * The image can be left to its natural size, stretched, or constrained to fit the available space.
 */
export function CssEngine$1__backgroundSize_Z445F6BAF(_, value) {
    return _.mk("background-size", value);
}

/**
 * Sets the size of the element's background image.
 * 
 * The image can be left to its natural size, stretched, or constrained to fit the available space.
 */
export function CssEngine$1__backgroundSize_Z6BEC75E0(_, width, height) {
    return _.mk("background-size", (width + " ") + height);
}

/**
 * Default value. The background image is displayed in its original size
 * 
 * See [example here](https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=auto)
 */
export function CssEngine$1__get_backgroundSizeAuto(_) {
    return _.mk("background-size", "auto");
}

/**
 * Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges.
 * 
 * See [example here](https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=cover)
 */
export function CssEngine$1__get_backgroundSizeCover(_) {
    return _.mk("background-size", "cover");
}

/**
 * Resize the background image to make sure the image is fully visible
 * 
 * See [example here](https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=contain)
 */
export function CssEngine$1__get_backgroundSizeContain(_) {
    return _.mk("background-size", "contain");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_backgroundSizeInitial(_) {
    return _.mk("background-size", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_backgroundSizeInheritFromParent(_) {
    return _.mk("background-size", "inherit");
}

/**
 * Default value. The line will display as a single line.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=solid
 */
export function CssEngine$1__get_textDecorationStyleSolid(_) {
    return _.mk("text-decoration-style", "solid");
}

/**
 * The line will display as a double line.
 * 
 * https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=double
 */
export function CssEngine$1__get_textDecorationStyleDouble(_) {
    return _.mk("text-decoration-style", "double");
}

/**
 * The line will display as a dotted line.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=dotted
 */
export function CssEngine$1__get_textDecorationStyleDotted(_) {
    return _.mk("text-decoration-style", "dotted");
}

/**
 * The line will display as a dashed line.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=dashed
 */
export function CssEngine$1__get_textDecorationStyleDashed(_) {
    return _.mk("text-decoration-style", "dashed");
}

/**
 * The line will display as a wavy line.
 * 
 * https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=wavy
 */
export function CssEngine$1__get_textDecorationStyleWavy(_) {
    return _.mk("text-decoration-style", "wavy");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-decoration-style&preval=initial
 */
export function CssEngine$1__get_textDecorationStyleInitial(_) {
    return _.mk("text-decoration-style", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_textDecorationStyleInheritFromParent(_) {
    return _.mk("text-decoration-style", "inherit");
}

/**
 * Makes the text as narrow as it gets.
 */
export function CssEngine$1__get_fontStretchUltraCondensed(_) {
    return _.mk("font-stretch", "ultra-condensed");
}

/**
 * Makes the text narrower than condensed, but not as narrow as ultra-condensed
 */
export function CssEngine$1__get_fontStretchExtraCondensed(_) {
    return _.mk("font-stretch", "extra-condensed");
}

/**
 * Makes the text narrower than semi-condensed, but not as narrow as extra-condensed.
 */
export function CssEngine$1__get_fontStretchCondensed(_) {
    return _.mk("font-stretch", "condensed");
}

/**
 * Makes the text narrower than normal, but not as narrow as condensed.
 */
export function CssEngine$1__get_fontStretchSemiCondensed(_) {
    return _.mk("font-stretch", "semi-condensed");
}

/**
 * Default value. No font stretching
 */
export function CssEngine$1__get_fontStretchNormal(_) {
    return _.mk("font-stretch", "normal");
}

/**
 * Makes the text wider than normal, but not as wide as expanded
 */
export function CssEngine$1__get_fontStretchSemiExpanded(_) {
    return _.mk("font-stretch", "semi-expanded");
}

/**
 * Makes the text wider than semi-expanded, but not as wide as extra-expanded
 */
export function CssEngine$1__get_fontStretchExpanded(_) {
    return _.mk("font-stretch", "expanded");
}

/**
 * Makes the text wider than expanded, but not as wide as ultra-expanded
 */
export function CssEngine$1__get_fontStretchExtraExpanded(_) {
    return _.mk("font-stretch", "extra-expanded");
}

/**
 * Makes the text as wide as it gets.
 */
export function CssEngine$1__get_fontStretchUltraExpanded(_) {
    return _.mk("font-stretch", "ultra-expanded");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_fontStretchInitial(_) {
    return _.mk("font-stretch", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_fontStretchInheritFromParent(_) {
    return _.mk("font-stretch", "inherit");
}

/**
 * The element does not float, (will be displayed just where it occurs in the text). This is default
 */
export function CssEngine$1__get_floatStyleNone(_) {
    return _.mk("float", "none");
}

export function CssEngine$1__get_floatStyleLeft(_) {
    return _.mk("float", "left");
}

export function CssEngine$1__get_floatStyleRight(_) {
    return _.mk("float", "right");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_floatStyleInitial(_) {
    return _.mk("float", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_floatStyleInheritFromParent(_) {
    return _.mk("float", "inherit");
}

/**
 * The element is aligned with the baseline of the parent. This is default.
 */
export function CssEngine$1__get_verticalAlignBaseline(_) {
    return _.mk("vertical-align", "baseline");
}

/**
 * The element is aligned with the subscript baseline of the parent
 */
export function CssEngine$1__get_verticalAlignSub(_) {
    return _.mk("vertical-align", "sup");
}

/**
 * The element is aligned with the superscript baseline of the parent.
 */
export function CssEngine$1__get_verticalAlignSuper(_) {
    return _.mk("vertical-align", "super");
}

/**
 * The element is aligned with the top of the tallest element on the line.
 */
export function CssEngine$1__get_verticalAlignTop(_) {
    return _.mk("vertical-align", "top");
}

/**
 * The element is aligned with the top of the parent element's font.
 */
export function CssEngine$1__get_verticalAlignTextTop(_) {
    return _.mk("vertical-align", "text-top");
}

/**
 * The element is placed in the middle of the parent element.
 */
export function CssEngine$1__get_verticalAlignMiddle(_) {
    return _.mk("vertical-align", "middle");
}

/**
 * The element is aligned with the lowest element on the line.
 */
export function CssEngine$1__get_verticalAlignBottom(_) {
    return _.mk("vertical-align", "bottom");
}

/**
 * The element is aligned with the bottom of the parent element's font
 */
export function CssEngine$1__get_verticalAlignTextBottom(_) {
    return _.mk("vertical-align", "text-bottom");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_verticalAlignInitial(_) {
    return _.mk("vertical-align", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_verticalAlignInheritFromParent(_) {
    return _.mk("vertical-align", "inherit");
}

/**
 * Let the content flow horizontally from left to right, vertically from top to bottom
 */
export function CssEngine$1__get_writingModeHorizontalTopBottom(_) {
    return _.mk("writing-mode", "horizontal-tb");
}

/**
 * Let the content flow vertically from top to bottom, horizontally from right to left
 */
export function CssEngine$1__get_writingModeVerticalRightLeft(_) {
    return _.mk("writing-mode", "vertical-rl");
}

/**
 * Let the content flow vertically from top to bottom, horizontally from left to right
 */
export function CssEngine$1__get_writingModeVerticalLeftRight(_) {
    return _.mk("writing-mode", "vertical-lr");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_writingModeInitial(_) {
    return _.mk("writing-mode", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_writingModeInheritFromParent(_) {
    return _.mk("writing-mode", "inherit");
}

/**
 * Default value. Specifies a animation effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1)).
 */
export function CssEngine$1__get_animationTimingFunctionEase(_) {
    return _.mk("animation-timing-function", "ease");
}

/**
 * Specifies a animation effect with the same speed from start to end (equivalent to cubic-bezier(0,0,1,1))
 */
export function CssEngine$1__get_animationTimingFunctionLinear(_) {
    return _.mk("animation-timing-function", "linear");
}

/**
 * Specifies a animation effect with a slow start (equivalent to cubic-bezier(0.42,0,1,1)).
 */
export function CssEngine$1__get_animationTimingFunctionEaseIn(_) {
    return _.mk("animation-timing-function", "ease-in");
}

/**
 * Specifies a animation effect with a slow end (equivalent to cubic-bezier(0,0,0.58,1)).
 */
export function CssEngine$1__get_animationTimingFunctionEaseOut(_) {
    return _.mk("animation-timing-function", "ease-out");
}

/**
 * Specifies a animation effect with a slow start and end (equivalent to cubic-bezier(0.42,0,0.58,1))
 */
export function CssEngine$1__get_animationTimingFunctionEaseInOut(_) {
    return _.mk("animation-timing-function", "ease-in-out");
}

/**
 * Define your own values in the cubic-bezier function. Possible values are numeric values from 0 to 1
 */
export function CssEngine$1__animationTimingFunctionCubicBezier_77D16AC0(_, n1, n2, n3, n4) {
    return _.mk("animation-timing-function", ((((((("cubic-bezier(" + n1.toString()) + ",") + n2.toString()) + ",") + n3.toString()) + ", ") + n4.toString()) + ")");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_animationTimingFunctionInitial(_) {
    return _.mk("animation-timing-function", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_animationTimingFunctionInheritFromParent(_) {
    return _.mk("animation-timing-function", "inherit");
}

/**
 * Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1)).
 */
export function CssEngine$1__get_transitionTimingFunctionEase(_) {
    return _.mk("transition-timing-function", "ease");
}

/**
 * Specifies a transition effect with the same speed from start to end (equivalent to cubic-bezier(0,0,1,1))
 */
export function CssEngine$1__get_transitionTimingFunctionLinear(_) {
    return _.mk("transition-timing-function", "linear");
}

/**
 * Specifies a transition effect with a slow start (equivalent to cubic-bezier(0.42,0,1,1)).
 */
export function CssEngine$1__get_transitionTimingFunctionEaseIn(_) {
    return _.mk("transition-timing-function", "ease-in");
}

/**
 * Specifies a transition effect with a slow end (equivalent to cubic-bezier(0,0,0.58,1)).
 */
export function CssEngine$1__get_transitionTimingFunctionEaseOut(_) {
    return _.mk("transition-timing-function", "ease-out");
}

/**
 * Specifies a transition effect with a slow start and end (equivalent to cubic-bezier(0.42,0,0.58,1))
 */
export function CssEngine$1__get_transitionTimingFunctionEaseInOut(_) {
    return _.mk("transition-timing-function", "ease-in-out");
}

/**
 * Equivalent to steps(1, start)
 */
export function CssEngine$1__get_transitionTimingFunctionStepStart(_) {
    return _.mk("transition-timing-function", "step-start");
}

/**
 * Equivalent to steps(1, end)
 */
export function CssEngine$1__get_transitionTimingFunctionStepEnd(_) {
    return _.mk("transition-timing-function", "step-end");
}

/**
 * Define your own values in the cubic-bezier function. Possible values are numeric values from 0 to 1
 */
export function CssEngine$1__transitionTimingFunctionCubicBezier_77D16AC0(_, n1, n2, n3, n4) {
    return _.mk("transition-timing-function", ((((((("cubic-bezier(" + n1.toString()) + ",") + n2.toString()) + ",") + n3.toString()) + ", ") + n4.toString()) + ")");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_transitionTimingFunctionInitial(_) {
    return _.mk("transition-timing-function", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_transitionTimingFunctionInheritFromParent(_) {
    return _.mk("transition-timing-function", "inherit");
}

/**
 * Default. Text can be selected if the browser allows it.
 */
export function CssEngine$1__get_userSelectAuto(_) {
    return _.mk("user-select", "auto");
}

/**
 * Prevents text selection.
 */
export function CssEngine$1__get_userSelectNone(_) {
    return _.mk("user-select", "none");
}

/**
 * The text can be selected by the user.
 */
export function CssEngine$1__get_userSelectText(_) {
    return _.mk("user-select", "text");
}

/**
 * Text selection is made with one click instead of a double-click.
 */
export function CssEngine$1__get_userSelectAll(_) {
    return _.mk("user-select", "all");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_userSelectInitial(_) {
    return _.mk("user-select", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_userSelectInheritFromParent(_) {
    return _.mk("user-select", "inherit");
}

/**
 * Sets the line style for all four sides of an element's border.
 */
export function CssEngine$1__borderStyle_61CE138F(_, style) {
    return _.mk("border-style", style);
}

/**
 * Sets the line style for all four sides of an element's border.
 */
export function CssEngine$1__borderStyle_Z5A16920(_, vertical, horizontal) {
    return _.mk("border-style", (vertical + " ") + horizontal);
}

/**
 * Sets the line style for all four sides of an element's border.
 */
export function CssEngine$1__borderStyle_46259CC0(_, top, right, bottom, left) {
    return _.mk("border-style", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

/**
 * Specifies a dotted border.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleDotted(_) {
    return _.mk("border-style", "dotted");
}

/**
 * Specifies a dashed border.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleDashed(_) {
    return _.mk("border-style", "dashed");
}

/**
 * Specifies a solid border.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleSolid(_) {
    return _.mk("border-style", "solid");
}

/**
 * Specifies a double border.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleDouble(_) {
    return _.mk("border-style", "double");
}

/**
 * Specifies a 3D grooved border. The effect depends on the border-color value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleGroove(_) {
    return _.mk("border-style", "groove");
}

/**
 * Specifies a 3D ridged border. The effect depends on the border-color value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleRidge(_) {
    return _.mk("border-style", "ridge");
}

/**
 * Specifies a 3D inset border. The effect depends on the border-color value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleInset(_) {
    return _.mk("border-style", "inset");
}

/**
 * Specifies a 3D outset border. The effect depends on the border-color value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleOutset(_) {
    return _.mk("border-style", "outset");
}

/**
 * Default value. Specifies no border.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=dotted
 */
export function CssEngine$1__get_borderStyleNone(_) {
    return _.mk("border-style", "none");
}

/**
 * The same as "none", except in border conflict resolution for table elements.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=hidden
 */
export function CssEngine$1__get_borderStyleHidden(_) {
    return _.mk("border-style", "hidden");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=hidden
 * 
 * Read about initial value https://www.w3schools.com/cssref/css_initial.asp
 */
export function CssEngine$1__get_borderStyleInitial(_) {
    return _.mk("border-style", "initial");
}

/**
 * Inherits this property from its parent element.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style&preval=hidden
 * 
 * Read about inherit https://www.w3schools.com/cssref/css_inherit.asp
 */
export function CssEngine$1__get_borderStyleInheritFromParent(_) {
    return _.mk("border-style", "inherit");
}

/**
 * Browsers use an automatic table layout algorithm. The column width is set by the widest unbreakable
 * content in the cells. The content will dictate the layout
 */
export function CssEngine$1__get_tableLayoutAuto(_) {
    return _.mk("table-layout", "auto");
}

/**
 * Sets a fixed table layout algorithm. The table and column widths are set by the widths of table and col
 * or by the width of the first row of cells. Cells in other rows do not affect column widths. If no widths
 * are present on the first row, the column widths are divided equally across the table, regardless of content
 * inside the cells
 */
export function CssEngine$1__get_tableLayoutFixed$0027(_) {
    return _.mk("table-layout", "fixed");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_tableLayoutInitial(_) {
    return _.mk("table-layout", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_tableLayoutInheritFromParent(_) {
    return _.mk("table-layout", "inherit");
}

export function CssEngine$1__cursor_Z721C83C5(_, value) {
    return _.mk("cursor", value);
}

/**
 * The User Agent will determine the cursor to display based on the current context. E.g., equivalent to text when hovering text.
 */
export function CssEngine$1__get_cursorAuto(_) {
    return _.mk("cursor", "auto");
}

/**
 * The cursor indicates an alias of something is to be created
 */
export function CssEngine$1__get_cursorAlias(_) {
    return _.mk("cursor", "alias");
}

/**
 * The platform-dependent default cursor. Typically an arrow.
 */
export function CssEngine$1__get_cursorDefaultCursor(_) {
    return _.mk("cursor", "default");
}

/**
 * No cursor is rendered.
 */
export function CssEngine$1__get_cursorNone(_) {
    return _.mk("cursor", "none");
}

/**
 * A context menu is available.
 */
export function CssEngine$1__get_cursorContextMenu(_) {
    return _.mk("cursor", "context-menu");
}

/**
 * Help information is available.
 */
export function CssEngine$1__get_cursorHelp(_) {
    return _.mk("cursor", "help");
}

/**
 * The cursor is a pointer that indicates a link. Typically an image of a pointing hand.
 */
export function CssEngine$1__get_cursorPointer(_) {
    return _.mk("cursor", "pointer");
}

/**
 * The program is busy in the background, but the user can still interact with the interface (in contrast to `wait`).
 */
export function CssEngine$1__get_cursorProgress(_) {
    return _.mk("cursor", "progress");
}

/**
 * The program is busy, and the user can't interact with the interface (in contrast to progress). Sometimes an image of an hourglass or a watch.
 */
export function CssEngine$1__get_cursorWait(_) {
    return _.mk("cursor", "wait");
}

/**
 * The table cell or set of cells can be selected.
 */
export function CssEngine$1__get_cursorCell(_) {
    return _.mk("cursor", "cell");
}

/**
 * Cross cursor, often used to indicate selection in a bitmap.
 */
export function CssEngine$1__get_cursorCrosshair(_) {
    return _.mk("cursor", "crosshair");
}

/**
 * The text can be selected. Typically the shape of an I-beam.
 */
export function CssEngine$1__get_cursorText(_) {
    return _.mk("cursor", "text");
}

/**
 * The vertical text can be selected. Typically the shape of a sideways I-beam.
 */
export function CssEngine$1__get_cursorVerticalText(_) {
    return _.mk("cursor", "vertical-text");
}

/**
 * Something is to be copied.
 */
export function CssEngine$1__get_cursorCopy(_) {
    return _.mk("cursor", "copy");
}

/**
 * Something is to be moved.
 */
export function CssEngine$1__get_cursorMove(_) {
    return _.mk("cursor", "move");
}

/**
 * An item may not be dropped at the current location. On Windows and Mac OS X, `no-drop` is the same as `not-allowed`.
 */
export function CssEngine$1__get_cursorNoDrop(_) {
    return _.mk("cursor", "no-drop");
}

/**
 * The requested action will not be carried out.
 */
export function CssEngine$1__get_cursorNotAllowed(_) {
    return _.mk("cursor", "not-allowed");
}

/**
 * Something can be grabbed (dragged to be moved).
 */
export function CssEngine$1__get_cursorGrab(_) {
    return _.mk("cursor", "grab");
}

/**
 * Something is being grabbed (dragged to be moved).
 */
export function CssEngine$1__get_cursorGrabbing(_) {
    return _.mk("cursor", "grabbing");
}

/**
 * Something can be scrolled in any direction (panned).
 */
export function CssEngine$1__get_cursorAllScroll(_) {
    return _.mk("cursor", "all-scroll");
}

/**
 * The item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.
 */
export function CssEngine$1__get_cursorColumnResize(_) {
    return _.mk("cursor", "col-resize");
}

/**
 * The item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.
 */
export function CssEngine$1__get_cursorRowResize(_) {
    return _.mk("cursor", "row-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthResize(_) {
    return _.mk("cursor", "n-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorEastResize(_) {
    return _.mk("cursor", "e-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorSouthResize(_) {
    return _.mk("cursor", "s-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorWestResize(_) {
    return _.mk("cursor", "w-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthEastResize(_) {
    return _.mk("cursor", "ne-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthWestResize(_) {
    return _.mk("cursor", "nw-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorSouthEastResize(_) {
    return _.mk("cursor", "se-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorSouthWestResize(_) {
    return _.mk("cursor", "sw-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorEastWestResize(_) {
    return _.mk("cursor", "ew-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthSouthResize(_) {
    return _.mk("cursor", "ns-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthEastSouthWestResize(_) {
    return _.mk("cursor", "nesw-resize");
}

/**
 * Directional resize arrow
 */
export function CssEngine$1__get_cursorNorthWestSouthEastResize(_) {
    return _.mk("cursor", "nwse-resize");
}

/**
 * Something can be zoomed (magnified) in
 */
export function CssEngine$1__get_cursorZoomIn(_) {
    return _.mk("cursor", "zoom-in");
}

/**
 * Something can be zoomed out
 */
export function CssEngine$1__get_cursorZoomOut(_) {
    return _.mk("cursor", "zoom-out");
}

/**
 * Permits the user agent to render a custom outline style.
 */
export function CssEngine$1__get_outlineStyleAuto(_) {
    return _.mk("outline-style", "auto");
}

/**
 * Specifies no outline. This is default.
 */
export function CssEngine$1__get_outlineStyleNone(_) {
    return _.mk("outline-style", "none");
}

/**
 * Specifies a hidden outline
 */
export function CssEngine$1__get_outlineStyleHidden(_) {
    return _.mk("outline-style", "hidden");
}

/**
 * Specifies a dotted outline
 */
export function CssEngine$1__get_outlineStyleDotted(_) {
    return _.mk("outline-style", "dotted");
}

/**
 * Specifies a dashed outline
 */
export function CssEngine$1__get_outlineStyleDashed(_) {
    return _.mk("outline-style", "dashed");
}

/**
 * Specifies a solid outline
 */
export function CssEngine$1__get_outlineStyleSolid(_) {
    return _.mk("outline-style", "solid");
}

/**
 * Specifies a double outliner
 */
export function CssEngine$1__get_outlineStyleDouble(_) {
    return _.mk("outline-style", "double");
}

/**
 * Specifies a 3D grooved outline. The effect depends on the outline-color value
 */
export function CssEngine$1__get_outlineStyleGroove(_) {
    return _.mk("outline-style", "groove");
}

/**
 * Specifies a 3D ridged outline. The effect depends on the outline-color value
 */
export function CssEngine$1__get_outlineStyleRidge(_) {
    return _.mk("outline-style", "ridge");
}

/**
 * Specifies a 3D inset  outline. The effect depends on the outline-color value
 */
export function CssEngine$1__get_outlineStyleInset(_) {
    return _.mk("outline-style", "inset");
}

/**
 * Specifies a 3D outset outline. The effect depends on the outline-color value
 */
export function CssEngine$1__get_outlineStyleOutset(_) {
    return _.mk("outline-style", "outset");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_outlineStyleInitial(_) {
    return _.mk("outline-style", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_outlineStyleInheritFromParent(_) {
    return _.mk("outline-style", "inherit");
}

/**
 * Sets the initial position for each background image.
 * 
 * The position is relative to the position layer set by background-origin.
 */
export function CssEngine$1__backgroundPosition_Z721C83C5(_, position) {
    return _.mk("background-position", position);
}

/**
 * The background image will scroll with the page. This is default.
 */
export function CssEngine$1__get_backgroundPositionScroll(_) {
    return _.mk("background-position", "scroll");
}

/**
 * The background image will not scroll with the page.
 */
export function CssEngine$1__get_backgroundPositionFixedNoScroll(_) {
    return _.mk("background-position", "fixed");
}

/**
 * The background image will scroll with the element's contents.
 */
export function CssEngine$1__get_backgroundPositionLocal(_) {
    return _.mk("background-position", "local");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_backgroundPositionInitial(_) {
    return _.mk("background-position", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_backgroundPositionInheritFromParent(_) {
    return _.mk("background-position", "inherit");
}

/**
 * This is default. Sets the blending mode to normal.
 */
export function CssEngine$1__get_backgroundBlendModeNormal(_) {
    return _.mk("background-blend-mode", "normal");
}

/**
 * Sets the blending mode to screen
 */
export function CssEngine$1__get_backgroundBlendModeScreen(_) {
    return _.mk("background-blend-mode", "screen");
}

/**
 * Sets the blending mode to overlay
 */
export function CssEngine$1__get_backgroundBlendModeOverlay(_) {
    return _.mk("background-blend-mode", "overlay");
}

/**
 * Sets the blending mode to darken
 */
export function CssEngine$1__get_backgroundBlendModeDarken(_) {
    return _.mk("background-blend-mode", "darken");
}

/**
 * Sets the blending mode to multiply
 */
export function CssEngine$1__get_backgroundBlendModeLighten(_) {
    return _.mk("background-blend-mode", "lighten");
}

/**
 * Sets the blending mode to color-dodge
 */
export function CssEngine$1__get_backgroundBlendModeCollorDodge(_) {
    return _.mk("background-blend-mode", "color-dodge");
}

/**
 * Sets the blending mode to saturation
 */
export function CssEngine$1__get_backgroundBlendModeSaturation(_) {
    return _.mk("background-blend-mode", "saturation");
}

/**
 * Sets the blending mode to color
 */
export function CssEngine$1__get_backgroundBlendModeColor(_) {
    return _.mk("background-blend-mode", "color");
}

/**
 * Sets the blending mode to luminosity
 */
export function CssEngine$1__get_backgroundBlendModeLuminosity(_) {
    return _.mk("background-blend-mode", "luminosity");
}

/**
 * Default value. The background extends behind the border.
 */
export function CssEngine$1__get_backgroundClipBorderBox(_) {
    return _.mk("background-clip", "border-box");
}

/**
 * The background extends to the inside edge of the border.
 */
export function CssEngine$1__get_backgroundClipPaddingBox(_) {
    return _.mk("background-clip", "padding-box");
}

/**
 * The background extends to the edge of the content box.
 */
export function CssEngine$1__get_backgroundClipContentBox(_) {
    return _.mk("background-clip", "content-box");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_backgroundClipInitial(_) {
    return _.mk("background-clip", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_backgroundClipInheritFromParent(_) {
    return _.mk("background-clip", "inherit");
}

export function CssEngine$1__transform_124E45BF(_, transformation) {
    return _.mk("transform", transformation);
}

export function CssEngine$1__transform_66FB5C5D(_, transformations) {
    return _.mk("transform", join(" ", map((x) => x, transformations)));
}

/**
 * Defines that there should be no transformation.
 */
export function CssEngine$1__get_transformNone(_) {
    return _.mk("transform", "none");
}

/**
 * Defines a 2D transformation, using a matrix of six values.
 */
export function CssEngine$1__transformMatrix_48A24E80(_, x1, y1, z1, x2, y2, z2) {
    return _.mk("transform", ((((((((((("matrix(" + int32ToString(x1)) + ",") + int32ToString(y1)) + ",") + int32ToString(z1)) + ",") + int32ToString(x2)) + ",") + int32ToString(y2)) + ", ") + int32ToString(z2)) + ")");
}

/**
 * Defines a 2D translation.
 */
export function CssEngine$1__transformTranslate_Z37302880(_, x, y) {
    return _.mk("transform", ((("translate(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px)");
}

/**
 * Defines a 2D translation.
 */
export function CssEngine$1__transformTranslate_Z6BEC75E0(_, x, y) {
    return _.mk("transform", ((("translate(" + x) + ", ") + y) + ")");
}

/**
 * Defines a 3D translation.
 */
export function CssEngine$1__transformTranslate3D_4F7761DC(_, x, y, z) {
    return _.mk("transform", ((((("translate3d(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px,") + int32ToString(z)) + "px)");
}

/**
 * Defines a 3D translation.
 */
export function CssEngine$1__transformTranslate3D_Z52DBA58F(_, x, y, z) {
    return _.mk("transform", ((((("translate3d(" + x) + ",") + y) + ", ") + z) + ")");
}

/**
 * Defines a translation, using only the value for the X-axis.
 */
export function CssEngine$1__transformTranslateX_Z524259A4(_, x) {
    return _.mk("transform", ("translateX(" + int32ToString(x)) + "px)");
}

/**
 * Defines a translation, using only the value for the X-axis.
 */
export function CssEngine$1__transformTranslateX_Z445F6BAF(_, x) {
    return _.mk("transform", ("translateX(" + x) + ")");
}

/**
 * Defines a translation, using only the value for the Y-axis
 */
export function CssEngine$1__transformTranslateY_Z524259A4(_, y) {
    return _.mk("transform", ("translateY(" + int32ToString(y)) + "px)");
}

/**
 * Defines a translation, using only the value for the Y-axis
 */
export function CssEngine$1__transformTranslateY_Z445F6BAF(_, y) {
    return _.mk("transform", ("translateY(" + y) + ")");
}

/**
 * Defines a 3D translation, using only the value for the Z-axis
 * Defines a 3D translation, using only the value for the Z-axis
 */
export function CssEngine$1__transformTranslateZ_Z445F6BAF(_, z) {
    return _.mk("transform", ("translateZ(" + z) + ")");
}

/**
 * Defines a 2D scale transformation.
 */
export function CssEngine$1__transformScale_Z37302880(_, x, y) {
    return _.mk("transform", ((("scale(" + int32ToString(x)) + ", ") + int32ToString(y)) + ")");
}

/**
 * Defines a scale transformation.
 * Defines a scale transformation.
 */
export function CssEngine$1__transformScale_5E38073B(_, n) {
    return _.mk("transform", ("scale(" + n.toString()) + ")");
}

/**
 * Defines a 3D scale transformation
 */
export function CssEngine$1__transformScale3D_4F7761DC(_, x, y, z) {
    return _.mk("transform", ((((("scale3d(" + int32ToString(x)) + ",") + int32ToString(y)) + ", ") + int32ToString(z)) + ")");
}

/**
 * Defines a scale transformation by giving a value for the X-axis.
 */
export function CssEngine$1__transformScaleX_Z524259A4(_, x) {
    return _.mk("transform", ("scaleX(" + int32ToString(x)) + ")");
}

/**
 * Defines a scale transformation by giving a value for the Y-axis.
 */
export function CssEngine$1__transformScaleY_Z524259A4(_, y) {
    return _.mk("transform", ("scaleY(" + int32ToString(y)) + ")");
}

/**
 * Defines a 3D translation, using only the value for the Z-axis
 */
export function CssEngine$1__transformScaleZ_Z524259A4(_, z) {
    return _.mk("transform", ("scaleZ(" + int32ToString(z)) + ")");
}

/**
 * Defines a 2D rotation, the angle is specified in the parameter.
 */
export function CssEngine$1__transformRotate_Z524259A4(_, deg) {
    return _.mk("transform", ("rotate(" + int32ToString(deg)) + "deg)");
}

/**
 * Defines a 2D rotation, the angle is specified in the parameter.
 */
export function CssEngine$1__transformRotate_5E38073B(_, deg) {
    return _.mk("transform", ("rotate(" + deg.toString()) + "deg)");
}

/**
 * Defines a 3D rotation along the X-axis.
 */
export function CssEngine$1__transformRotateX_5E38073B(_, deg) {
    return _.mk("transform", ("rotateX(" + deg.toString()) + "deg)");
}

/**
 * Defines a 3D rotation along the X-axis.
 */
export function CssEngine$1__transformRotateX_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateX(" + int32ToString(deg)) + "deg)");
}

/**
 * Defines a 3D rotation along the Y-axis
 */
export function CssEngine$1__transformRotateY_5E38073B(_, deg) {
    return _.mk("transform", ("rotateY(" + deg.toString()) + "deg)");
}

/**
 * Defines a 3D rotation along the Y-axis
 */
export function CssEngine$1__transformRotateY_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateY(" + int32ToString(deg)) + "deg)");
}

/**
 * Defines a 3D rotation along the Z-axis
 */
export function CssEngine$1__transformRotateZ_5E38073B(_, deg) {
    return _.mk("transform", ("rotateZ(" + deg.toString()) + "deg)");
}

/**
 * Defines a 3D rotation along the Z-axis
 */
export function CssEngine$1__transformRotateZ_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateZ(" + int32ToString(deg)) + "deg)");
}

/**
 * Defines a 2D skew transformation along the X- and the Y-axis.
 */
export function CssEngine$1__transformSkew_Z37302880(_, xAngle, yAngle) {
    return _.mk("transform", ((("skew(" + int32ToString(xAngle)) + "deg,") + int32ToString(yAngle)) + "deg)");
}

/**
 * Defines a 2D skew transformation along the X- and the Y-axis.
 */
export function CssEngine$1__transformSkew_7B00E9A0(_, xAngle, yAngle) {
    return _.mk("transform", ((("skew(" + xAngle.toString()) + "deg,") + yAngle.toString()) + "deg)");
}

/**
 * Defines a 2D skew transformation along the X-axis
 */
export function CssEngine$1__transformSkewX_Z524259A4(_, xAngle) {
    return _.mk("transform", ("skewX(" + int32ToString(xAngle)) + "deg)");
}

/**
 * Defines a 2D skew transformation along the X-axis
 */
export function CssEngine$1__transformSkewX_5E38073B(_, xAngle) {
    return _.mk("transform", ("skewX(" + xAngle.toString()) + "deg)");
}

/**
 * Defines a 2D skew transformation along the Y-axis
 */
export function CssEngine$1__transformSkewY_Z524259A4(_, xAngle) {
    return _.mk("transform", ("skewY(" + int32ToString(xAngle)) + "deg)");
}

/**
 * Defines a 2D skew transformation along the Y-axis
 */
export function CssEngine$1__transformSkewY_5E38073B(_, xAngle) {
    return _.mk("transform", ("skewY(" + xAngle.toString()) + "deg)");
}

/**
 * Defines a perspective view for a 3D transformed element
 */
export function CssEngine$1__transformPerspective_Z524259A4(_, n) {
    return _.mk("transform", ("perspective(" + int32ToString(n)) + ")");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_transformInitial(_) {
    return _.mk("transform", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_transformInheritFromParent(_) {
    return _.mk("transform", "inherit");
}

/**
 * Text direction goes from right-to-left
 */
export function CssEngine$1__get_directionRightToLeft(_) {
    return _.mk("direction", "rtl");
}

/**
 * Text direction goes from left-to-right. This is default
 */
export function CssEngine$1__get_directionLeftToRight(_) {
    return _.mk("direction", "ltr");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_directionInitial(_) {
    return _.mk("direction", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_directionInheritFromParent(_) {
    return _.mk("direction", "inherit");
}

/**
 * Display borders on empty cells. This is default
 */
export function CssEngine$1__get_emptyCellsShow(_) {
    return _.mk("empty-cells", "show");
}

/**
 * Hide borders on empty cells
 */
export function CssEngine$1__get_emptyCellsHide(_) {
    return _.mk("empty-cells", "hide");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_emptyCellsInitial(_) {
    return _.mk("empty-cells", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_emptyCellsInheritFromParent(_) {
    return _.mk("empty-cells", "inherit");
}

/**
 * Default value. The animation should be played as normal
 */
export function CssEngine$1__get_animationDirectionNormal(_) {
    return _.mk("animation-direction", "normal");
}

/**
 * The animation should play in reverse direction
 */
export function CssEngine$1__get_animationDirectionReverse(_) {
    return _.mk("animation-direction", "reverse");
}

/**
 * The animation will be played as normal every odd time (1, 3, 5, etc..) and in reverse direction every even time (2, 4, 6, etc...).
 */
export function CssEngine$1__get_animationDirectionAlternate(_) {
    return _.mk("animation-direction", "alternate");
}

/**
 * The animation will be played in reverse direction every odd time (1, 3, 5, etc..) and in a normal direction every even time (2,4,6,etc...)
 */
export function CssEngine$1__get_animationDirectionAlternateReverse(_) {
    return _.mk("animation-direction", "alternate-reverse");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_animationDirectionInitial(_) {
    return _.mk("animation-direction", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_animationDirectionInheritFromParent(_) {
    return _.mk("animation-direction", "inherit");
}

/**
 * Default value. Specifies that the animation is running.
 */
export function CssEngine$1__get_animationPlayStateRunning(_) {
    return _.mk("animation-play-state", "running");
}

/**
 * Specifies that the animation is paused
 */
export function CssEngine$1__get_animationPlayStatePaused(_) {
    return _.mk("animation-play-state", "paused");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_animationPlayStateInitial(_) {
    return _.mk("animation-play-state", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_animationPlayStateInheritFromParent(_) {
    return _.mk("animation-play-state", "inherit");
}

/**
 * Specifies that the animation should be played infinite times (forever)
 */
export function CssEngine$1__get_animationIterationCountInfinite(_) {
    return _.mk("animation-iteration-count", "infinite");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_animationIterationCountInitial(_) {
    return _.mk("animation-iteration-count", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_animationIterationCountInheritFromParent(_) {
    return _.mk("animation-iteration-count", "inherit");
}

/**
 * Default value. Animation will not apply any styles to the element before or after it is executing
 */
export function CssEngine$1__get_animationFillModeNone(_) {
    return _.mk("animation-fill-mode", "none");
}

/**
 * The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count).
 */
export function CssEngine$1__get_animationFillModeForwards(_) {
    return _.mk("animation-fill-mode", "forwards");
}

/**
 * The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
 */
export function CssEngine$1__get_animationFillModeBackwards(_) {
    return _.mk("animation-fill-mode", "backwards");
}

/**
 * The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
 */
export function CssEngine$1__get_animationFillModeBoth(_) {
    return _.mk("animation-fill-mode", "both");
}

/**
 * Sets this property to its default value
 */
export function CssEngine$1__get_animationFillModeInitial(_) {
    return _.mk("animation-fill-mode", "initial");
}

/**
 * Inherits this property from its parent element
 */
export function CssEngine$1__get_animationFillModeInheritFromParent(_) {
    return _.mk("animation-fill-mode", "inherit");
}

/**
 * Sets how background images are repeated.
 * 
 * A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
 */
export function CssEngine$1__backgroundRepeat_Z4821AA33(_, repeat) {
    return _.mk("background-repeat", repeat);
}

/**
 * The background image is repeated both vertically and horizontally. This is default.
 */
export function CssEngine$1__get_backgroundRepeatRepeat(_) {
    return _.mk("background-repeat", "repeat");
}

/**
 * The background image is only repeated horizontally.
 */
export function CssEngine$1__get_backgroundRepeatRepeatX(_) {
    return _.mk("background-repeat", "repeat-x");
}

/**
 * The background image is only repeated vertically.
 */
export function CssEngine$1__get_backgroundRepeatRepeatY(_) {
    return _.mk("background-repeat", "repeat-y");
}

/**
 * The background-image is not repeated.
 */
export function CssEngine$1__get_backgroundRepeatNoRepeat(_) {
    return _.mk("background-repeat", "no-repeat");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_backgroundRepeatInitial(_) {
    return _.mk("background-repeat", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_backgroundRepeatInheritFromParent(_) {
    return _.mk("background-repeat", "inherit");
}

/**
 * Default value. Elements render in order, as they appear in the document flow.
 */
export function CssEngine$1__get_positionDefaultStatic(_) {
    return _.mk("position", "static");
}

/**
 * The element is positioned relative to its first positioned (not static) ancestor element.
 */
export function CssEngine$1__get_positionAbsolute(_) {
    return _.mk("position", "absolute");
}

/**
 * The element is positioned relative to the browser window
 */
export function CssEngine$1__get_positionFixed(_) {
    return _.mk("position", "fixed");
}

/**
 * The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position.
 */
export function CssEngine$1__get_positionRelative(_) {
    return _.mk("position", "relative");
}

/**
 * The element is positioned based on the user's scroll position
 * 
 * A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
 * 
 * Note: Not supported in IE/Edge 15 or earlier. Supported in Safari from version 6.1 with a -webkit- prefix.
 */
export function CssEngine$1__get_positionSticky(_) {
    return _.mk("position", "sticky");
}

export function CssEngine$1__get_positionInitial(_) {
    return _.mk("position", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_positionInheritFromParent(_) {
    return _.mk("position", "inherit");
}

/**
 * Default value. The width and height properties include the content, but does not include the padding, border, or margin.
 */
export function CssEngine$1__get_boxSizingContentBox(_) {
    return _.mk("box-sizing", "content-box");
}

/**
 * The width and height properties include the content, padding, and border, but do not include the margin. Note that padding and border will be inside of the box.
 */
export function CssEngine$1__get_boxSizingBorderBox(_) {
    return _.mk("box-sizing", "border-box");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_boxSizingInitial(_) {
    return _.mk("box-sizing", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_boxSizingInheritFromParent(_) {
    return _.mk("box-sizing", "inherit");
}

/**
 * Default value. The element offers no user-controllable method for resizing it.
 */
export function CssEngine$1__get_resizeNone(_) {
    return _.mk("resize", "none");
}

/**
 * The element displays a mechanism for allowing the user to resize it, which may be resized both horizontally and vertically.
 */
export function CssEngine$1__get_resizeBoth(_) {
    return _.mk("resize", "both");
}

/**
 * The element displays a mechanism for allowing the user to resize it in the horizontal direction.
 */
export function CssEngine$1__get_resizeHorizontal(_) {
    return _.mk("resize", "horizontal");
}

/**
 * The element displays a mechanism for allowing the user to resize it in the vertical direction.
 */
export function CssEngine$1__get_resizeVertical(_) {
    return _.mk("resize", "vertical");
}

/**
 * The element displays a mechanism for allowing the user to resize it in the block direction (either horizontally or vertically, depending on the writing-mode and direction value).
 */
export function CssEngine$1__get_resizeBlock(_) {
    return _.mk("resize", "block");
}

/**
 * The element displays a mechanism for allowing the user to resize it in the inline direction (either horizontally or vertically, depending on the writing-mode and direction value).
 */
export function CssEngine$1__get_resizeInline$0027(_) {
    return _.mk("resize", "inline");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_resizeInitial(_) {
    return _.mk("resize", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_resizeInheritFromParent(_) {
    return _.mk("resize", "inherit");
}

/**
 * Aligns the text to the left.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align
 */
export function CssEngine$1__get_textAlignLeft(_) {
    return _.mk("text-align", "left");
}

/**
 * Aligns the text to the right.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=right
 */
export function CssEngine$1__get_textAlignRight(_) {
    return _.mk("text-align", "right");
}

/**
 * Centers the text.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=center
 */
export function CssEngine$1__get_textAlignCenter(_) {
    return _.mk("text-align", "center");
}

/**
 * Stretches the lines so that each line has equal width (like in newspapers and magazines).
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=justify
 */
export function CssEngine$1__get_textAlignJustify(_) {
    return _.mk("text-align", "justify");
}

/**
 * Sets this property to its default value.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_textAlignInitial(_) {
    return _.mk("text-align", "initial");
}

/**
 * Inherits this property from its parent element.
 * 
 * See example https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-align&preval=initial
 */
export function CssEngine$1__get_textAlignInheritFromParent(_) {
    return _.mk("text-align", "inherit");
}

/**
 * Displays an element as an inline element (like `<span> `). Any height and width properties will have no effect.
 */
export function CssEngine$1__get_displayInlineElement(_) {
    return _.mk("display", "inline");
}

/**
 * Displays an element as a block element (like `<p> `). It starts on a new line, and takes up the whole width.
 */
export function CssEngine$1__get_displayBlock(_) {
    return _.mk("display", "block");
}

/**
 * Makes the container disappear, making the child elements children of the element the next level up in the DOM.
 */
export function CssEngine$1__get_displayContents(_) {
    return _.mk("display", "contents");
}

/**
 * Displays an element as a block-level flex container.
 */
export function CssEngine$1__get_displayFlex(_) {
    return _.mk("display", "flex");
}

/**
 * Displays an element as a block container box, and lays out its contents using flow layout.
 * 
 * It always establishes a new block formatting context for its contents.
 */
export function CssEngine$1__get_displayFlowRoot(_) {
    return _.mk("display", "flow-root");
}

/**
 * Displays an element as a block-level grid container.
 */
export function CssEngine$1__get_displayGrid(_) {
    return _.mk("display", "grid");
}

/**
 * Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.
 */
export function CssEngine$1__get_displayInlineBlock(_) {
    return _.mk("display", "inline-block");
}

/**
 * Displays an element as an inline-level flex container.
 */
export function CssEngine$1__get_displayInlineFlex(_) {
    return _.mk("display", "inline-flex");
}

/**
 * Displays an element as an inline-level grid container
 */
export function CssEngine$1__get_displayInlineGrid(_) {
    return _.mk("display", "inline-grid");
}

/**
 * The element is displayed as an inline-level table.
 */
export function CssEngine$1__get_displayInlineTable(_) {
    return _.mk("display", "inline-table");
}

/**
 * Let the element behave like a `<li> ` element
 */
export function CssEngine$1__get_displayListItem(_) {
    return _.mk("display", "list-item");
}

/**
 * Displays an element as either block or inline, depending on context.
 */
export function CssEngine$1__get_displayRunIn(_) {
    return _.mk("display", "run-in");
}

/**
 * Let the element behave like a `<table> ` element.
 */
export function CssEngine$1__get_displayTable(_) {
    return _.mk("display", "table");
}

/**
 * Let the element behave like a <caption> element.
 */
export function CssEngine$1__get_displayTableCaption(_) {
    return _.mk("display", "table-caption");
}

/**
 * Let the element behave like a <colgroup> element.
 */
export function CssEngine$1__get_displayTableColumnGroup(_) {
    return _.mk("display", "table-column-group");
}

/**
 * Let the element behave like a <thead> element.
 */
export function CssEngine$1__get_displayTableHeaderGroup(_) {
    return _.mk("display", "table-header-group");
}

/**
 * Let the element behave like a <tfoot> element.
 */
export function CssEngine$1__get_displayTableFooterGroup(_) {
    return _.mk("display", "table-footer-group");
}

/**
 * Let the element behave like a <tbody> element.
 */
export function CssEngine$1__get_displayTableRowGroup(_) {
    return _.mk("display", "table-row-group");
}

/**
 * Let the element behave like a <td> element.
 */
export function CssEngine$1__get_displayTableCell(_) {
    return _.mk("display", "table-cell");
}

/**
 * Let the element behave like a <col> element.
 */
export function CssEngine$1__get_displayTableColumn(_) {
    return _.mk("display", "table-column");
}

/**
 * Let the element behave like a <tr> element.
 */
export function CssEngine$1__get_displayTableRow(_) {
    return _.mk("display", "table-row");
}

/**
 * The element is completely removed.
 */
export function CssEngine$1__get_displayNone(_) {
    return _.mk("display", "none");
}

/**
 * Sets this property to its default value.
 */
export function CssEngine$1__get_displayInitial(_) {
    return _.mk("display", "initial");
}

/**
 * Inherits this property from its parent element.
 */
export function CssEngine$1__get_displayInheritFromParent(_) {
    return _.mk("display", "inherit");
}

/**
 * The zIndex property sets or returns the stack order of a positioned element.
 * 
 * An element with greater stack order (1) is always in front of another element with lower stack order (0).
 * 
 * **Tip**: A positioned element is an element with the position property set to: relative, absolute, or fixed.
 * 
 * **Tip**: This property is useful if you want to create overlapping elements.
 */
export function CssEngine$1__zIndex_Z524259A4(_, value) {
    return _.mk("z-index", int32ToString(value));
}

/**
 * Sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right,
 * margin-bottom, and margin-left.
 */
export function CssEngine$1__margin_Z524259A4(_, value) {
    return _.mk("margin", int32ToString(value) + "px");
}

/**
 * Sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right,
 * margin-bottom, and margin-left.
 */
export function CssEngine$1__margin_Z445F6BAF(_, value) {
    return _.mk("margin", value);
}

/**
 * Sets the margin area on the vertical and horizontal axis.
 */
export function CssEngine$1__margin_Z37302880(_, vertical, horizonal) {
    return _.mk("margin", ((int32ToString(vertical) + "px ") + int32ToString(horizonal)) + "px");
}

/**
 * Sets the margin area on the vertical and horizontal axis.
 */
export function CssEngine$1__margin_Z6BEC75E0(_, vertical, horizonal) {
    return _.mk("margin", (vertical + " ") + horizonal);
}

/**
 * Sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right,
 * margin-bottom, and margin-left.
 */
export function CssEngine$1__margin_Z6C21C500(_, top, right, bottom, left) {
    return _.mk("margin", ((((((int32ToString(top) + "px ") + int32ToString(right)) + "px ") + int32ToString(bottom)) + "px ") + int32ToString(left)) + "px");
}

/**
 * Sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right,
 * margin-bottom, and margin-left.
 */
export function CssEngine$1__margin_Z15F0C340(_, top, right, bottom, left) {
    return _.mk("margin", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

/**
 * Sets the margin area on the left side of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginLeft_Z524259A4(_, value) {
    return _.mk("margin-left", int32ToString(value) + "px");
}

/**
 * Sets the margin area on the left side of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginLeft_Z445F6BAF(_, value) {
    return _.mk("margin-left", value);
}

/**
 * sets the margin area on the right side of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginRight_Z524259A4(_, value) {
    return _.mk("margin-right", int32ToString(value) + "px");
}

/**
 * sets the margin area on the right side of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginRight_Z445F6BAF(_, value) {
    return _.mk("margin-right", value);
}

/**
 * Sets the margin area on the top of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginTop_Z524259A4(_, value) {
    return _.mk("margin-top", int32ToString(value) + "px");
}

/**
 * Sets the margin area on the top of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginTop_Z445F6BAF(_, value) {
    return _.mk("margin-top", value);
}

/**
 * Sets the margin area on the bottom of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginBottom_Z524259A4(_, value) {
    return _.mk("margin-bottom", int32ToString(value) + "px");
}

/**
 * Sets the margin area on the bottom of an element. A positive value places it farther from its
 * neighbors, while a negative value places it closer.
 */
export function CssEngine$1__marginBottom_Z445F6BAF(_, value) {
    return _.mk("margin-bottom", value);
}

/**
 * Sets the padding area on all four sides of an element. It is a shorthand for padding-top,
 * padding-right, padding-bottom, and padding-left.
 */
export function CssEngine$1__padding_Z524259A4(_, value) {
    return _.mk("padding", int32ToString(value) + "px");
}

/**
 * Sets the padding area on all four sides of an element. It is a shorthand for padding-top,
 * padding-right, padding-bottom, and padding-left.
 */
export function CssEngine$1__padding_Z445F6BAF(_, value) {
    return _.mk("padding", value);
}

/**
 * Sets the padding area for vertical and horizontal axis.
 */
export function CssEngine$1__padding_Z6BEC75E0(_, vertical, horizontal) {
    return _.mk("padding", (vertical + " ") + horizontal);
}

/**
 * Sets the padding area on all four sides of an element. It is a shorthand for padding-top,
 * padding-right, padding-bottom, and padding-left.
 */
export function CssEngine$1__padding_Z15F0C340(_, top, right, bottom, left) {
    return _.mk("padding", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

/**
 * Sets the height of the padding area on the bottom of an element.
 */
export function CssEngine$1__paddingBottom_Z524259A4(_, value) {
    return _.mk("padding-bottom", int32ToString(value) + "px");
}

/**
 * Sets the height of the padding area on the bottom of an element.
 */
export function CssEngine$1__paddingBottom_Z445F6BAF(_, value) {
    return _.mk("padding-bottom", value);
}

/**
 * Sets the width of the padding area to the left of an element.
 */
export function CssEngine$1__paddingLeft_Z524259A4(_, value) {
    return _.mk("padding-left", int32ToString(value) + "px");
}

/**
 * Sets the width of the padding area to the left of an element.
 */
export function CssEngine$1__paddingLeft_Z445F6BAF(_, value) {
    return _.mk("padding-left", value);
}

/**
 * Sets the width of the padding area on the right of an element.
 */
export function CssEngine$1__paddingRight_Z524259A4(_, value) {
    return _.mk("padding-right", int32ToString(value) + "px");
}

/**
 * Sets the width of the padding area on the right of an element.
 */
export function CssEngine$1__paddingRight_Z445F6BAF(_, value) {
    return _.mk("padding-right", value);
}

/**
 * Sets the height of the padding area on the top of an element.
 */
export function CssEngine$1__paddingTop_Z524259A4(_, value) {
    return _.mk("padding-top", int32ToString(value) + "px");
}

/**
 * Sets the height of the padding area on the top of an element.
 */
export function CssEngine$1__paddingTop_Z445F6BAF(_, value) {
    return _.mk("padding-top", value);
}

/**
 * Sets the flex shrink factor of a flex item. If the size of all flex items is larger than
 * the flex container, items shrink to fit according to flex-shrink.
 */
export function CssEngine$1__flexShrink_Z524259A4(_, value) {
    return _.mk("flex-shrink", int32ToString(value));
}

/**
 * Sets the initial main size of a flex item. It sets the size of the content box unless
 * otherwise set with box-sizing.
 */
export function CssEngine$1__flexBasis_Z524259A4(_, value) {
    return _.mk("flex-basis", int32ToString(value) + "px");
}

/**
 * Sets the initial main size of a flex item. It sets the size of the content box unless
 * otherwise set with box-sizing.
 */
export function CssEngine$1__flexBasis_Z445F6BAF(_, value) {
    return _.mk("flex-basis", value);
}

/**
 * Sets the flex grow factor of a flex item main size. It specifies how much of the remaining
 * space in the flex container should be assigned to the item (the flex grow factor).
 */
export function CssEngine$1__flexGrow_Z524259A4(_, value) {
    return _.mk("flex-grow", int32ToString(value));
}

/**
 * Shorthand of flex-grow, flex-shrink and flex-basis
 */
export function CssEngine$1__flex_738B9151(_, grow, shrink, basis) {
    let x_1, x_1_1, x_3, x_1_2;
    return _.mk("flex", (((int32ToString(grow) + " ") + ((x_1 = shrink, (x_1 == null) ? "" : ((x_1_1 = (x_1 | 0), int32ToString(x_1_1)))))) + " ") + ((x_3 = basis, (x_3 == null) ? "" : ((x_1_2 = x_3, x_1_2)))));
}

/**
 * Shorthand of flex-grow, flex-shrink and flex-basis
 */
export function CssEngine$1__flex_Z721C83C5(_, value) {
    return _.mk("flex", value);
}

/**
 * Sets the width of each individual grid column in pixels.
 * 
 * **CSS**
 * ```css
 * grid-template-columns: 100px 200px 100px;
 * ```
 * **F#**
 * ```f#
 * gridTemplateColumns: [100; 200; 100]
 * ```
 */
export function CssEngine$1__gridTemplateColumns_Z5D8246D(_, value) {
    const addPixels = (x) => (x + "px");
    return _.mk("grid-template-columns", join(" ", map_1((arg) => addPixels(int32ToString(arg)), value)));
}

/**
 * Sets the width of each individual grid column.
 * 
 * **CSS**
 * ```css
 * grid-template-columns: 1fr 1fr 2fr;
 * ```
 * **F#**
 * ```f#
 * gridTemplateColumns: [length.fr 1; length.fr 1; length.fr 2]
 * ```
 */
export function CssEngine$1__gridTemplateColumns_Z3A80A702(_, value) {
    return _.mk("grid-template-columns", join(" ", map_1((x) => x, value)));
}

/**
 * Sets the width of each individual grid column. It can also name the lines between them
 * There can be multiple names for the same line
 * 
 * **CSS**
 * ```css
 * grid-template-columns: [first-line] auto [first-line-end second-line-start] 100px [second-line-end];
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateColumns [
 * grid.namedLine "first-line"
 * grid.templateWidth length.auto
 * grid.namedLines ["first-line-end second-line-start"]
 * grid.templateWidth 100
 * grid.namedLine "second-line-end"
 * ]
 * ```
 */
export function CssEngine$1__gridTemplateColumns_Z40D2EFDA(_, value) {
    return _.mk("grid-template-columns", join(" ", map_1((x) => x, value)));
}

/**
 * Sets the width of a number of grid columns to the defined width, as well as naming the lines between them
 * 
 * **CSS**
 * ```css
 * grid-template-columns: repeat(3, 1fr [col-start]);
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateColumns (3, length.fr 1, "col-start")
 * ```
 */
export function CssEngine$1__gridTemplateColumns_Z2B2DBEAB(_, count, size, areaName) {
    let areaName_1;
    if (areaName == null) {
        areaName_1 = "";
    }
    else {
        const n = areaName;
        areaName_1 = ((" [" + n) + "]");
    }
    return _.mk("grid-template-columns", (((("repeat(" + int32ToString(count)) + ", ") + size) + areaName_1) + ")");
}

/**
 * Sets the width of a number of grid rows to the defined width
 * 
 * **CSS**
 * ```css
 * grid-template-rows: 100px 200px 100px;
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateRows [100, 200, 100]
 * ```
 */
export function CssEngine$1__gridTemplateRows_Z5D8246D(_, value) {
    const addPixels = (x) => (x + "px");
    return _.mk("grid-template-rows", join(" ", map_1((arg) => addPixels(int32ToString(arg)), value)));
}

/**
 * Sets the width of a number of grid rows to the defined width
 * 
 * **CSS**
 * ```css
 * grid-template-rows: 1fr 10% 250px auto;
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateRows [length.fr 1; length.percent 10; length.px 250; length.auto]
 * ```
 */
export function CssEngine$1__gridTemplateRows_Z3A80A702(_, value) {
    return _.mk("grid-template-rows", join(" ", map_1((x) => x, value)));
}

/**
 * Sets the width of a number of grid rows to the defined width as well as naming the spaces between
 * 
 * **CSS**
 * ```css
 * grid-template-rows: [row-1-start] 1fr [row-1-end row-2-start] 1fr [row-2-end];
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateRows [
 * grid.namedLine "row-1-start"
 * grid.templateWidth (length.fr 1)
 * grid.namedLines ["row-1-end"; "row-2-start"]
 * grid.templateWidth (length.fr 1)
 * grid.namedLine "row-2-end"
 * ]
 * ```
 */
export function CssEngine$1__gridTemplateRows_Z40D2EFDA(_, value) {
    return _.mk("grid-template-rows", join(" ", map_1((x) => x, value)));
}

/**
 * Sets the width of a number of grid rows to the defined width
 * 
 * **CSS**
 * ```css
 * grid-template-rows: repeat(3, 10%);
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateRows (3, length.percent 10)
 * ```
 */
export function CssEngine$1__gridTemplateRows_Z2B2DBEAB(_, count, size, areaName) {
    let areaName_1;
    if (areaName == null) {
        areaName_1 = "";
    }
    else {
        const n = areaName;
        areaName_1 = ((" [" + n) + "]");
    }
    return _.mk("grid-template-rows", (((("repeat(" + int32ToString(count)) + ", ") + size) + areaName_1) + ")");
}

/**
 * 2D representation of grid layout as blocks with names
 * 
 * **CSS**
 * ```css
 * grid-template-areas:
 * 'header header header header'
 * 'nav nav . sidebar'
 * 'footer footer footer footer';
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateAreas [
 * ["header"; "header"; "header"; "header" ]
 * ["nav"   ; "nav"   ; "."     ; "sidebar"]
 * ["footer"; "footer"; "footer"; "footer" ]
 * ]
 * ```
 */
export function CssEngine$1__gridTemplateAreas_Z20E1E285(_, value) {
    const wrapLine = (x) => (("\'" + x) + "\'");
    const lines = map((arg) => wrapLine(join(" ", arg)), value);
    const block = join("\n", lines);
    return _.mk("grid-template-areas", block);
}

/**
 * 2D representation of grid layout as blocks with names
 * 
 * **CSS**
 * ```css
 * grid-template-areas:
 * 'header header header header'
 * 'nav nav . sidebar'
 * 'footer footer footer footer';
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateAreas [|
 * [|"header"; "header"; "header"; "header" |]
 * [|"nav"   ; "nav"   ; "."     ; "sidebar"|]
 * [|"footer"; "footer"; "footer"; "footer" |]
 * |]
 * ```
 */
export function CssEngine$1__gridTemplateAreas_7B2DFCBB(_, value) {
    const wrapLine = (x) => (("\'" + x) + "\'");
    const lines = map_2((arg) => wrapLine(join(" ", arg)), value);
    const block = join("\n", lines);
    return _.mk("grid-template-areas", block);
}

/**
 * One-dimensional alternative to the nested list. For column-based layouts
 * 
 * **CSS**
 * ```css
 * grid-template-areas: 'first second third fourth';
 * ```
 * **F#**
 * ```f#
 * style.gridTemplateAreas ["first"; "second"; "third"; "fourth"]
 * ```
 */
export function CssEngine$1__gridTemplateAreas_5D66A394(_, value) {
    const block = join(" ", value);
    return _.mk("grid-template-areas", ("\'" + block) + "\'");
}

/**
 * Specifies the size of the grid lines. You can think of it like
 * setting the width of the gutters between the columns.
 * 
 * **CSS**
 * ```css
 * column-gap: 10px;
 * ```
 * **F#**
 * ```f#
 * style.columnGap 10
 * ```
 */
export function CssEngine$1__columnGap_Z524259A4(_, value) {
    return _.mk("column-gap", int32ToString(value) + "px");
}

/**
 * Specifies the size of the grid lines. You can think of it like
 * setting the width of the gutters between the columns.
 * 
 * **CSS**
 * ```css
 * column-gap: 1em;
 * ```
 * **F#**
 * ```f#
 * style.columnGap (length.em 1)
 * ```
 */
export function CssEngine$1__columnGap_Z445F6BAF(_, value) {
    return _.mk("column-gap", value);
}

/**
 * Specifies the size of the grid lines. You can think of it like
 * setting the width of the gutters between the rows.
 * 
 * **CSS**
 * ```css
 * row-gap: 10px;
 * ```
 * **F#**
 * ```f#
 * style.rowGap 10
 * ```
 */
export function CssEngine$1__rowGap_Z524259A4(_, value) {
    return _.mk("row-gap", int32ToString(value) + "px");
}

/**
 * Specifies the size of the grid lines. You can think of it like
 * setting the width of the gutters between the rows.
 * 
 * **CSS**
 * ```css
 * row-gap: 1em;
 * ```
 * **F#**
 * ```f#
 * style.rowGap (length.em 1)
 * ```
 */
export function CssEngine$1__rowGap_Z445F6BAF(_, value) {
    return _.mk("row-gap", value);
}

/**
 * Specifies the size of the grid lines. You can think of it like
 * setting the width of the gutters between the rows/columns.
 * 
 * _Shorthand for `rowGap` and `columnGap`_
 * 
 * **CSS**
 * ```css
 * gap: 1em 2em;
 * ```
 * **F#**
 * ```f#
 * style.gap (length.em 1, length.em 2)
 * ```
 */
export function CssEngine$1__gap_Z6BEC75E0(_, rowGap, columnGap) {
    return _.mk("gap", (rowGap + " ") + columnGap);
}

export function CssEngine$1__gap_Z445F6BAF(_, rowColumnGap) {
    return _.mk("gap", (rowColumnGap + " ") + rowColumnGap);
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * When there are multiple named lines with the same name, you can specify which one by count
 * 
 * **CSS**
 * ```css
 * grid-column-start: col 2;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnStart ("col", 2)
 * ```
 */
export function CssEngine$1__gridColumnStart_3B406CA4(_, value, count) {
    let x_1, x_1_1;
    return _.mk("grid-column-start", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : ((x_1_1 = (x_1 | 0), int32ToString(x_1_1))))));
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-column-start: 2;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnStart 2
 * ```
 */
export function CssEngine$1__gridColumnStart_Z524259A4(_, value) {
    return _.mk("grid-column-start", int32ToString(value));
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-column-start: span odd-col;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnStart (gridColumn.span "odd-col")
 * ```
 */
export function CssEngine$1__gridColumnStart_1E159F80(_, value) {
    return _.mk("grid-column-start", value);
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _When there are multiple named lines with the same name, you can specify which one by count_
 * 
 * **CSS**
 * ```css
 * grid-column-end: odd-col 2;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnEnd ("odd-col", 2)
 * ```
 */
export function CssEngine$1__gridColumnEnd_3B406CA4(_, value, count) {
    let x_1, x_1_1;
    return _.mk("grid-column-end", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : ((x_1_1 = (x_1 | 0), int32ToString(x_1_1))))));
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-column-end: 2;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnEnd 2
 * ```
 */
export function CssEngine$1__gridColumnEnd_Z524259A4(_, value) {
    return _.mk("grid-column-end", int32ToString(value));
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-column-end: span 2;
 * ```
 * **F#**
 * ```f#
 * style.gridColumnEnd (gridColumn.span 2)
 * ```
 */
export function CssEngine$1__gridColumnEnd_1E159F80(_, value) {
    return _.mk("grid-column-end", value);
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-row-start: col 2;
 * ```
 * **F#**
 * ```f#
 * style.gridRowStart ("col", 2)
 * ```
 */
export function CssEngine$1__gridRowStart_3B406CA4(_, value, count) {
    let x_1, x_1_1;
    return _.mk("grid-row-start", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : ((x_1_1 = (x_1 | 0), int32ToString(x_1_1))))));
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-row-start: 2;
 * ```
 * **F#**
 * ```f#
 * style.gridRowStart 2
 * ```
 */
export function CssEngine$1__gridRowStart_Z524259A4(_, value) {
    return _.mk("grid-row-start", int32ToString(value));
}

/**
 * Sets where an item in the grid starts
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-row-start: span odd-col;
 * ```
 * **F#**
 * ```f#
 * style.gridRowStart (gridRow.span "odd-col")
 * ```
 */
export function CssEngine$1__gridRowStart_1E159F80(_, value) {
    return _.mk("grid-row-start", value);
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _When there are multiple named lines with the same name, you can specify which one by count_
 * 
 * **CSS**
 * ```css
 * grid-row-end: odd-col 2;
 * ```
 * **F#**
 * ```f#
 * style.gridRowEnd ("odd-col", 2)
 * ```
 */
export function CssEngine$1__gridRowEnd_3B406CA4(_, value, count) {
    let x_1, x_1_1;
    return _.mk("grid-row-end", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : ((x_1_1 = (x_1 | 0), int32ToString(x_1_1))))));
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-row-end: 2;
 * ```
 * **F#**
 * ```f#
 * style.gridRowEnd 2
 * ```
 */
export function CssEngine$1__gridRowEnd_Z524259A4(_, value) {
    return _.mk("grid-row-end", int32ToString(value));
}

/**
 * Sets where an item in the grid ends
 * The value can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * **CSS**
 * ```css
 * grid-row-end: span 2;
 * ```
 * **F#**
 * ```f#
 * style.gridRowEnd (gridRow.span 2)
 * ```
 */
export function CssEngine$1__gridRowEnd_1E159F80(_, value) {
    return _.mk("grid-row-end", value);
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridColumnStart` and `gridColumnEnds`_
 * 
 * **CSS**
 * ```css
 * grid-column: col-2 / col-4;
 * ```
 * **F#**
 * ```f#
 * style.gridColumn ("col-2", "col-4")
 * ```
 */
export function CssEngine$1__gridColumn_Z384F8060(_, start, end$0027) {
    return _.mk("grid-column", (start + " / ") + end$0027);
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridColumnStart` and `gridColumnEnds`_
 * 
 * **CSS**
 * ```css
 * grid-column: 1 / 3;
 * ```
 * **F#**
 * ```f#
 * style.gridColumn (1, 3)
 * ```
 */
export function CssEngine$1__gridColumn_Z37302880(_, start, end$0027) {
    return _.mk("grid-column", (int32ToString(start) + " / ") + int32ToString(end$0027));
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridColumnStart` and `gridColumnEnds`_
 * 
 * **CSS**
 * ```css
 * grid-column: span 2 / span 3;
 * ```
 * **F#**
 * ```f#
 * style.gridColumn (gridColumn.span 2, gridColumn.span 3)
 * ```
 */
export function CssEngine$1__gridColumn_Z123F000(_, start, end$0027) {
    return _.mk("grid-column", (start + " / ") + end$0027);
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridRowStart` and `gridRowEnds`_
 * 
 * **CSS**
 * ```css
 * grid-row: row-2 / row-4;
 * ```
 * **F#**
 * ```f#
 * style.gridRow ("row-2", "row-4")
 * ```
 */
export function CssEngine$1__gridRow_Z384F8060(_, start, end$0027) {
    return _.mk("grid-row", (start + " / ") + end$0027);
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridRowStart` and `gridRowEnds`_
 * 
 * **CSS**
 * ```css
 * grid-row: 2 / 4;
 * ```
 * **F#**
 * ```f#
 * style.gridRow (2, 4)
 * ```
 */
export function CssEngine$1__gridRow_Z37302880(_, start, end$0027) {
    return _.mk("grid-row", (int32ToString(start) + " / ") + int32ToString(end$0027));
}

/**
 * Determines a grid item’s location within the grid by referring to specific grid lines.
 * start is the line where the item begins, end' is the line where it ends.
 * They can be one of the following options:
 * - a named line
 * - a numbered line
 * - span until a named line was hit
 * - span over a specified number of lines
 * 
 * 
 * _Shorthand for `gridRowStart` and `gridRowEnds`_
 * 
 * **CSS**
 * ```css
 * grid-row: span 2 / span 3;
 * ```
 * **F#**
 * ```f#
 * style.gridRow (gridRow.span 2, gridRow.span 3)
 * ```
 */
export function CssEngine$1__gridRow_Z123F000(_, start, end$0027) {
    return _.mk("grid-row", (start + " / ") + end$0027);
}

/**
 * Sets the named grid area the item is placed in
 * 
 * **CSS**
 * ```css
 * grid-area: header;
 * ```
 * **F#**
 * ```f#
 * style.gridArea "header"
 * ```
 */
export function CssEngine$1__gridArea_Z721C83C5(_, value) {
    return _.mk("grid-area", value);
}

/**
 * Shorthand for `grid-template-areas`, `grid-template-columns` and `grid-template-rows`.
 * 
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
 * 
 * **CSS**
 * ```css
 * grid-template:  [header-top] 'a a a'      [header-bottom]
 * [main-top] 'b b b' 1fr  [main-bottom]
 * / auto 1fr auto;
 * ```
 * **F#**
 * ```f#
 * style.gridTemplate "[header-top] 'a a a'      [header-bottom] " +
 * "[main-top] 'b b b' 1fr  [main-bottom] " +
 * "/ auto 1fr auto"
 * ```
 */
export function CssEngine$1__gridTemplate_Z721C83C5(_, value) {
    return _.mk("grid-template", value);
}

export function CssEngine$1__transition_Z721C83C5(_, value) {
    return _.mk("transition", value);
}

/**
 * Sets the length of time a transition animation should take to complete. By default, the
 * value is 0s, meaning that no animation will occur.
 */
export function CssEngine$1__transitionDuration_Z342822E9(_, timespan) {
    return _.mk("transition-duration", timespan.toString() + "ms");
}

/**
 * Sets the length of time a transition animation should take to complete. By default, the
 * value is 0s, meaning that no animation will occur.
 */
export function CssEngine$1__transitionDurationSeconds_5E38073B(_, n) {
    return _.mk("transition-duration", n.toString() + "s");
}

/**
 * Sets the length of time a transition animation should take to complete. By default, the
 * value is 0s, meaning that no animation will occur.
 */
export function CssEngine$1__transitionDurationMilliseconds_5E38073B(_, n) {
    return _.mk("transition-duration", n.toString() + "ms");
}

/**
 * Sets the length of time a transition animation should take to complete. By default, the
 * value is 0s, meaning that no animation will occur.
 */
export function CssEngine$1__transitionDurationSeconds_Z524259A4(_, n) {
    return _.mk("transition-duration", int32ToString(n) + "s");
}

/**
 * Sets the length of time a transition animation should take to complete. By default, the
 * value is 0s, meaning that no animation will occur.
 */
export function CssEngine$1__transitionDurationMilliseconds_Z524259A4(_, n) {
    return _.mk("transition-duration", int32ToString(n) + "ms");
}

/**
 * Specifies the duration to wait before starting a property's transition effect when its value changes.
 */
export function CssEngine$1__transitionDelay_Z342822E9(_, timespan) {
    return _.mk("transition-delay", timespan.toString() + "ms");
}

/**
 * Specifies the duration to wait before starting a property's transition effect when its value changes.
 */
export function CssEngine$1__transitionDelaySeconds_5E38073B(_, n) {
    return _.mk("transition-delay", n.toString() + "s");
}

/**
 * Specifies the duration to wait before starting a property's transition effect when its value changes.
 */
export function CssEngine$1__transitionDelayMilliseconds_5E38073B(_, n) {
    return _.mk("transition-delay", n.toString() + "ms");
}

/**
 * Specifies the duration to wait before starting a property's transition effect when its value changes.
 */
export function CssEngine$1__transitionDelaySeconds_Z524259A4(_, n) {
    return _.mk("transition-delay", int32ToString(n) + "s");
}

/**
 * Specifies the duration to wait before starting a property's transition effect when its value changes.
 */
export function CssEngine$1__transitionDelayMilliseconds_Z524259A4(_, n) {
    return _.mk("transition-delay", int32ToString(n) + "ms");
}

/**
 * Sets the CSS properties to which a transition effect should be applied.
 */
export function CssEngine$1__transitionProperty_B3344B7(_, ...properties) {
    return _.mk("transition-property", join(",", map_2((x) => x, properties)));
}

/**
 * Sets the CSS properties to which a transition effect should be applied.
 */
export function CssEngine$1__transitionProperty_7A924AFE(_, properties) {
    return _.mk("transition-property", join(",", map((x) => x, properties)));
}

/**
 * Sets the CSS properties to which a transition effect should be applied.
 */
export function CssEngine$1__transitionProperty_419E153C(_, property) {
    return _.mk("transition-property", property);
}

/**
 * Sets the CSS properties to which a transition effect should be applied.
 */
export function CssEngine$1__transitionProperty_Z721C83C5(_, property) {
    return _.mk("transition-property", property);
}

/**
 * Sets the size of the font.
 * 
 * This property is also used to compute the size of em, ex, and other relative <length> units.
 */
export function CssEngine$1__fontSize_Z524259A4(_, size) {
    return _.mk("font-size", int32ToString(size) + "px");
}

/**
 * Sets the size of the font.
 * 
 * This property is also used to compute the size of em, ex, and other relative <length> units.
 */
export function CssEngine$1__fontSize_Z445F6BAF(_, size) {
    return _.mk("font-size", size);
}

/**
 * Specifies the height of a text lines.
 * 
 * This property is also used to compute the size of em, ex, and other relative <length> units.
 * 
 * Note: Negative values are not allowed.
 */
export function CssEngine$1__lineHeight_Z524259A4(_, size) {
    return _.mk("line-height", int32ToString(size) + "px");
}

/**
 * Specifies the height of a text lines.
 * 
 * This property is also used to compute the size of em, ex, and other relative <length> units.
 * 
 * Note: Negative values are not allowed.
 */
export function CssEngine$1__lineHeight_Z445F6BAF(_, size) {
    return _.mk("line-height", size);
}

/**
 * Sets the background color of an element.
 */
export function CssEngine$1__backgroundColor_Z721C83C5(_, color) {
    return _.mk("background-color", color);
}

/**
 * Sets the color of the insertion caret, the visible marker where the next character typed will be inserted.
 * 
 * This is sometimes referred to as the text input cursor. The caret appears in elements such as <input> or
 * those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to
 * help make it more noticeable. By default, it is black, but its color can be altered with this property.
 */
export function CssEngine$1__caretColor_Z721C83C5(_, color) {
    return _.mk("caret-color", color);
}

/**
 * Sets the foreground color value of an element's text and text decorations, and sets the
 * `currentcolor` value. `currentcolor` may be used as an indirect value on other properties
 * and is the default for other color properties, such as border-color.
 */
export function CssEngine$1__color_Z721C83C5(_, color) {
    return _.mk("color", color);
}

/**
 * Specifies the vertical position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__top_Z524259A4(_, value) {
    return _.mk("top", int32ToString(value) + "px");
}

/**
 * Specifies the vertical position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__top_Z445F6BAF(_, value) {
    return _.mk("top", value);
}

/**
 * Specifies the vertical position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__bottom_Z524259A4(_, value) {
    return _.mk("bottom", int32ToString(value) + "px");
}

/**
 * Specifies the vertical position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__bottom_Z445F6BAF(_, value) {
    return _.mk("bottom", value);
}

/**
 * Specifies the horizontal position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__left_Z524259A4(_, value) {
    return _.mk("left", int32ToString(value) + "px");
}

/**
 * Specifies the horizontal position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__left_Z445F6BAF(_, value) {
    return _.mk("left", value);
}

/**
 * Specifies the horizontal position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__right_Z524259A4(_, value) {
    return _.mk("right", int32ToString(value) + "px");
}

/**
 * Specifies the horizontal position of a positioned element. It has no effect on non-positioned elements.
 */
export function CssEngine$1__right_Z445F6BAF(_, value) {
    return _.mk("right", value);
}

/**
 * Sets an element's bottom border. It sets the values of border-bottom-width,
 * border-bottom-style and border-bottom-color.
 */
export function CssEngine$1__borderBottom_Z6C024E7B(_, width, style, color) {
    return _.mk("border-bottom", (((width + " ") + style) + " ") + color);
}

/**
 * The outline-offset property adds space between an outline and the edge or border of an element.
 * 
 * The space between an element and its outline is transparent.
 * 
 * Outlines differ from borders in three ways:
 * 
 * - An outline is a line drawn around elements, outside the border edge
 * - An outline does not take up space
 * - An outline may be non-rectangular
 */
export function CssEngine$1__outlineOffset_Z524259A4(_, offset) {
    return _.mk("outline-width", int32ToString(offset) + "px");
}

/**
 * The outline-offset property adds space between an outline and the edge or border of an element.
 * 
 * The space between an element and its outline is transparent.
 * 
 * Outlines differ from borders in three ways:
 * 
 * - An outline is a line drawn around elements, outside the border edge
 * - An outline does not take up space
 * - An outline may be non-rectangular
 */
export function CssEngine$1__outlineOffset_Z445F6BAF(_, offset) {
    return _.mk("outline-width", offset);
}

/**
 * An outline is a line that is drawn around elements (outside the borders) to make the element "stand out".
 * 
 * The `outline-color` property specifies the color of an outline.
 * **Note**: Always declare the outline-style property before the outline-color property. An element must have an outline before you change the color of it.
 */
export function CssEngine$1__outlineColor_Z721C83C5(_, color) {
    return _.mk("outline-color", color);
}

/**
 * Set an element's left border.
 */
export function CssEngine$1__borderLeft_Z6C024E7B(_, width, style, color) {
    return _.mk("border-left", (((width + " ") + style) + " ") + color);
}

/**
 * Set an element's right border.
 */
export function CssEngine$1__borderRight_Z6C024E7B(_, width, style, color) {
    return _.mk("border-right", (((width + " ") + style) + " ") + color);
}

/**
 * Set an element's top border.
 */
export function CssEngine$1__borderTop_Z6C024E7B(_, width, style, color) {
    return _.mk("border-top", (((width + " ") + style) + " ") + color);
}

/**
 * Sets the line style of an element's bottom border.
 */
export function CssEngine$1__borderBottomStyle_61CE138F(_, style) {
    return _.mk("border-bottom-style", style);
}

/**
 * Sets the width of the bottom border of an element.
 */
export function CssEngine$1__borderBottomWidth_Z524259A4(_, width) {
    return _.mk("border-bottom-width", int32ToString(width) + "px");
}

/**
 * Sets the width of the bottom border of an element.
 */
export function CssEngine$1__borderBottomWidth_Z445F6BAF(_, width) {
    return _.mk("border-bottom-width", width);
}

/**
 * Sets the color of an element's bottom border.
 * 
 * It can also be set with the shorthand CSS properties border-color or border-bottom.
 */
export function CssEngine$1__borderBottomColor_Z721C83C5(_, color) {
    return _.mk("border-bottom-color", color);
}

/**
 * Sets the line style of an element's top border.
 */
export function CssEngine$1__borderTopStyle_61CE138F(_, style) {
    return _.mk("border-top-style", style);
}

/**
 * Sets the width of the top border of an element.
 */
export function CssEngine$1__borderTopWidth_Z524259A4(_, width) {
    return _.mk("border-top-width", int32ToString(width) + "px");
}

/**
 * Sets the width of the top border of an element.
 */
export function CssEngine$1__borderTopWidth_Z445F6BAF(_, width) {
    return _.mk("border-top-width", width);
}

/**
 * Sets the color of an element's top border.
 * 
 * It can also be set with the shorthand CSS properties border-color or border-bottom.
 */
export function CssEngine$1__borderTopColor_Z721C83C5(_, color) {
    return _.mk("border-top-color", color);
}

/**
 * Sets the line style of an element's right border.
 */
export function CssEngine$1__borderRightStyle_61CE138F(_, style) {
    return _.mk("border-right-style", style);
}

/**
 * Sets the width of the right border of an element.
 */
export function CssEngine$1__borderRightWidth_Z524259A4(_, width) {
    return _.mk("border-right-width", int32ToString(width) + "px");
}

/**
 * Sets the width of the right border of an element.
 */
export function CssEngine$1__borderRightWidth_Z445F6BAF(_, width) {
    return _.mk("border-right-width", width);
}

/**
 * Sets the color of an element's right border.
 * 
 * It can also be set with the shorthand CSS properties border-color or border-bottom.
 */
export function CssEngine$1__borderRightColor_Z721C83C5(_, color) {
    return _.mk("border-right-color", color);
}

/**
 * Sets the line style of an element's left border.
 */
export function CssEngine$1__borderLeftStyle_61CE138F(_, style) {
    return _.mk("border-left-style", style);
}

/**
 * Sets the width of the left border of an element.
 */
export function CssEngine$1__borderLeftWidth_Z524259A4(_, width) {
    return _.mk("border-left-width", int32ToString(width) + "px");
}

/**
 * Sets the width of the left border of an element.
 */
export function CssEngine$1__borderLeftWidth_Z445F6BAF(_, width) {
    return _.mk("border-left-width", width);
}

/**
 * Sets the color of an element's left border.
 * 
 * It can also be set with the shorthand CSS properties border-color or border-bottom.
 */
export function CssEngine$1__borderLeftColor_Z721C83C5(_, color) {
    return _.mk("border-left-color", color);
}

/**
 * Sets an element's border.
 * 
 * It sets the values of border-width, border-style, and border-color.
 */
export function CssEngine$1__border_Z6C024E7B(_, width, style, color) {
    return _.mk("border", (((width + " ") + style) + " ") + color);
}

/**
 * Sets an element's border.
 * 
 * It sets the values of border-width, border-style, and border-color.
 */
export function CssEngine$1__border_12DC6EAF(_, width, style, color) {
    return _.mk("border", (((width + " ") + style) + " ") + color);
}

/**
 * Sets the color of an element's border.
 */
export function CssEngine$1__borderColor_Z721C83C5(_, color) {
    return _.mk("border-color", color);
}

/**
 * Rounds the corners of an element's outer border edge. You can set a single radius to make
 * circular corners, or two radii to make elliptical corners.
 */
export function CssEngine$1__borderRadius_Z524259A4(_, radius) {
    return _.mk("border-radius", int32ToString(radius) + "px");
}

/**
 * Rounds the corners of an element's outer border edge. You can set a single radius to make
 * circular corners, or two radii to make elliptical corners.
 */
export function CssEngine$1__borderRadius_Z445F6BAF(_, radius) {
    return _.mk("border-radius", radius);
}

/**
 * Sets the width of an element's border.
 */
export function CssEngine$1__borderWidth_Z524259A4(_, width) {
    return _.mk("border-width", int32ToString(width) + "px");
}

/**
 * Sets the width of an element's border.
 */
export function CssEngine$1__borderWidth_Z3438B9D(_, top, right) {
    let x_1;
    return _.mk("border-width", top + ((right == null) ? "" : ((x_1 = right, " " + x_1))));
}

/**
 * Sets the width of an element's border.
 */
export function CssEngine$1__borderWidth_Z7D5F3D7D(_, top, right, bottom, left) {
    let x_3;
    return _.mk("border-width", ((((top + " ") + right) + " ") + bottom) + ((left == null) ? "" : ((x_3 = left, " " + x_3))));
}

/**
 * Sets one or more animations to apply to an element. Each name is an @keyframes at-rule that
 * sets the property values for the animation sequence.
 */
export function CssEngine$1__animationName_Z721C83C5(_, keyframeName) {
    return _.mk("animation-name", keyframeName);
}

/**
 * Sets the length of time that an animation takes to complete one cycle.
 */
export function CssEngine$1__animationDuration_Z342822E9(_, timespan) {
    return _.mk("animation-duration", timespan.toString() + "ms");
}

/**
 * Sets the length of time that an animation takes to complete one cycle.
 */
export function CssEngine$1__animationDuration_Z524259A4(_, seconds) {
    return _.mk("animation-duration", int32ToString(seconds) + "s");
}

/**
 * Sets when an animation starts.
 * 
 * The animation can start later, immediately from its beginning, or immediately and partway through the animation.
 */
export function CssEngine$1__animationDelay_Z342822E9(_, timespan) {
    return _.mk("animation-delay", timespan.toString() + "ms");
}

/**
 * Sets when an animation starts.
 * 
 * The animation can start later, immediately from its beginning, or immediately and partway through the animation.
 */
export function CssEngine$1__animationDelay_Z524259A4(_, seconds) {
    return _.mk("animation-delay", int32ToString(seconds) + "s");
}

/**
 * The number of times the animation runs.
 */
export function CssEngine$1__animationDurationCount_Z524259A4(_, count) {
    return _.mk("animation-duration-count", int32ToString(count));
}

/**
 * Sets the font family for the font specified in a @font-face rule.
 */
export function CssEngine$1__fontFamily_Z721C83C5(_, family) {
    return _.mk("font-family", family);
}

/**
 * Sets the color of decorations added to text by text-decoration-line.
 */
export function CssEngine$1__textDecorationColor_Z721C83C5(_, color) {
    return _.mk("text-decoration-color", color);
}

/**
 * Sets the length of empty space (indentation) that is put before lines of text in a block.
 */
export function CssEngine$1__textIndent_Z524259A4(_, value) {
    return _.mk("text-indent", int32ToString(value));
}

/**
 * Sets the length of empty space (indentation) that is put before lines of text in a block.
 */
export function CssEngine$1__textIndent_Z721C83C5(_, value) {
    return _.mk("text-indent", value);
}

/**
 * Sets the opacity of an element.
 * 
 * Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
 */
export function CssEngine$1__opacity_5E38073B(_, value) {
    return _.mk("opacity", value.toString());
}

/**
 * Sets the minimum width of an element.
 * 
 * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
 */
export function CssEngine$1__minWidth_Z524259A4(_, value) {
    return _.mk("min-width", int32ToString(value) + "px");
}

/**
 * Sets the minimum width of an element.
 * 
 * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
 */
export function CssEngine$1__minWidth_Z445F6BAF(_, value) {
    return _.mk("min-width", value);
}

/**
 * Sets the minimum width of an element.
 * 
 * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
 */
export function CssEngine$1__minWidth_Z721C83C5(_, value) {
    return _.mk("min-width", value);
}

/**
 * Sets the maximum width of an element.
 * 
 * It prevents the used value of the width property from becoming larger than the value specified by max-width.
 */
export function CssEngine$1__maxWidth_Z524259A4(_, value) {
    return _.mk("max-width", int32ToString(value) + "px");
}

/**
 * Sets the maximum width of an element.
 * 
 * It prevents the used value of the width property from becoming larger than the value specified by max-width.
 */
export function CssEngine$1__maxWidth_Z445F6BAF(_, value) {
    return _.mk("max-width", value);
}

/**
 * Sets the width of an element.
 * 
 * By default, the property defines the width of the content area.
 */
export function CssEngine$1__width_Z524259A4(_, value) {
    return _.mk("width", int32ToString(value) + "px");
}

/**
 * Sets the width of an element.
 * 
 * By default, the property defines the width of the content area.
 */
export function CssEngine$1__width_Z445F6BAF(_, value) {
    return _.mk("width", value);
}

/**
 * Sets one or more background images on an element.
 */
export function CssEngine$1__backgroundImage_Z721C83C5(_, value) {
    return _.mk("background-image", value);
}

/**
 * Short-hand for `style.backgroundImage(sprintf "url('%s')" value)` to set the backround image using a url.
 */
export function CssEngine$1__backgroundImageUrl_Z721C83C5(_, value) {
    return _.mk("background-image", ("url(\'" + value) + "\')");
}

/**
 * Sets the color of an SVG shape.
 */
export function CssEngine$1__fill_Z721C83C5(_, color) {
    return _.mk("fill", color);
}

/**
 * Creates a color from components [hue](https://en.wikipedia.org/wiki/Hue), [saturation](https://en.wikipedia.org/wiki/Colorfulness) and [lightness](https://en.wikipedia.org/wiki/Lightness) where hue is a number that goes from 0 to 360 and both
 * the `saturation` and `lightness` go from 0 to 100 as they are percentages.
 */
export function color_hsl(hue, saturation, lightness) {
    return ((((("hsl(" + hue.toString()) + ",") + saturation.toString()) + "%,") + lightness.toString()) + "%)";
}

export function color_rgb(r, g, b) {
    return ((((("rgb(" + int32ToString(r)) + ",") + int32ToString(g)) + ",") + int32ToString(b)) + ")";
}

export function color_rgba(r, g, b, a) {
    return ((((((("rgba(" + int32ToString(r)) + ",") + int32ToString(g)) + ",") + int32ToString(b)) + ",") + a.toString()) + ")";
}

export class length {
    constructor() {
    }
}

export function length_$reflection() {
    return class_type("Feliz.length", undefined, length);
}

export class borderStyle {
    constructor() {
    }
}

export function borderStyle_$reflection() {
    return class_type("Feliz.borderStyle", undefined, borderStyle);
}

export class gridColumn {
    constructor() {
    }
}

export function gridColumn_$reflection() {
    return class_type("Feliz.gridColumn", undefined, gridColumn);
}

export class gridRow {
    constructor() {
    }
}

export function gridRow_$reflection() {
    return class_type("Feliz.gridRow", undefined, gridRow);
}

export class grid {
    constructor() {
    }
}

export function grid_$reflection() {
    return class_type("Feliz.grid", undefined, grid);
}

export class textDecorationLine {
    constructor() {
    }
}

export function textDecorationLine_$reflection() {
    return class_type("Feliz.textDecorationLine", undefined, textDecorationLine);
}

export class textDecorationStyle {
    constructor() {
    }
}

export function textDecorationStyle_$reflection() {
    return class_type("Feliz.textDecorationStyle", undefined, textDecorationStyle);
}

export class transform {
    constructor() {
    }
}

export function transform_$reflection() {
    return class_type("Feliz.transform", undefined, transform);
}

export class transitionProperty {
    constructor() {
    }
}

export function transitionProperty_$reflection() {
    return class_type("Feliz.transitionProperty", undefined, transitionProperty);
}

