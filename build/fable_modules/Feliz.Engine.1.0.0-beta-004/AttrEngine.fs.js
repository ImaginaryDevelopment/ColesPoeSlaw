import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { int32ToString } from "../fable-library-js.4.21.0/Util.js";
import { replace, join } from "../fable-library-js.4.21.0/String.js";
import { map, choose } from "../fable-library-js.4.21.0/Seq.js";
import { toString } from "../fable-library-js.4.21.0/Date.js";
import { ofArray, fold } from "../fable-library-js.4.21.0/List.js";

export class AttrEngine$1 {
    constructor(mk, mkBool) {
        this.mk = mk;
        this.mkBool = mkBool;
    }
}

export function AttrEngine$1_$reflection(gen0) {
    return class_type("Feliz.AttrEngine`1", [gen0], AttrEngine$1);
}

export function AttrEngine$1_$ctor_22B537B1(mk, mkBool) {
    return new AttrEngine$1(mk, mkBool);
}

/**
 * Create a custom attribute
 * 
 * You generally shouldn't need to use this, if you notice an attribute missing please submit an issue.
 */
export function AttrEngine$1__custom_Z384F8060(_, key, value) {
    return _.mk(key, value);
}

/**
 * List of types the server accepts, typically a file type.
 */
export function AttrEngine$1__accept_Z721C83C5(_, value) {
    return _.mk("accept", value);
}

/**
 * List of supported charsets.
 */
export function AttrEngine$1__acceptCharset_Z721C83C5(_, value) {
    return _.mk("accept-charset", value);
}

/**
 * Defines a keyboard shortcut to activate or add focus to the element.
 */
export function AttrEngine$1__accessKey_Z721C83C5(_, value) {
    return _.mk("accesskey", value);
}

/**
 * The URI of a program that processes the information submitted via the form.
 */
export function AttrEngine$1__action_Z721C83C5(_, value) {
    return _.mk("action", value);
}

/**
 * Alternative text in case an image can't be displayed.
 */
export function AttrEngine$1__alt_Z721C83C5(_, value) {
    return _.mk("alt", value);
}

/**
 * Controls the amplitude of the gamma function of a component transfer element when
 * its type attribute is gamma.
 */
export function AttrEngine$1__amplitude_5E38073B(_, value) {
    return _.mk("amplitude", value.toString());
}

/**
 * Controls the amplitude of the gamma function of a component transfer element when
 * its type attribute is gamma.
 */
export function AttrEngine$1__amplitude_Z524259A4(_, value) {
    return _.mk("amplitude", int32ToString(value));
}

/**
 * Identifies the currently active descendant of a `composite` widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-activedescendant
 */
export function AttrEngine$1__ariaActiveDescendant_Z721C83C5(_, id) {
    return _.mk("aria-activedescendant", id);
}

/**
 * Indicates whether assistive technologies will present all, or only parts
 * of, the changed region based on the change notifications defined by the
 * `aria-relevant` attribute.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-atomic
 */
export function AttrEngine$1__ariaAtomic_Z1FBCCD16(_, value) {
    return _.mkBool("aria-atomic", value);
}

/**
 * Indicates whether an element, and its subtree, are currently being
 * updated.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-busy
 */
export function AttrEngine$1__ariaBusy_Z1FBCCD16(_, value) {
    return _.mkBool("aria-busy", value);
}

/**
 * Indicates the current "checked" state of checkboxes, radio buttons, and
 * other widgets. See related `aria-pressed` and `aria-selected`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-checked
 */
export function AttrEngine$1__ariaChecked_Z1FBCCD16(_, value) {
    return _.mkBool("aria-checked", value);
}

/**
 * Identifies the element (or elements) whose contents or presence are
 * controlled by the current element. See related `aria-owns`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-controls
 */
export function AttrEngine$1__ariaControls_Z35CD86D0(_, ...ids) {
    return _.mk("aria-controls", join(" ", ids));
}

/**
 * Specifies a URI referencing content that describes the object. See
 * related `aria-describedby`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-describedat
 */
export function AttrEngine$1__ariaDescribedAt_Z721C83C5(_, uri) {
    return _.mk("aria-describedat", uri);
}

/**
 * Identifies the element (or elements) that describes the object. See
 * related `aria-describedat` and `aria-labelledby`.
 * 
 * The `aria-labelledby` attribute is similar to `aria-describedby` in that
 * both reference other elements to calculate a text alternative, but a
 * label should be concise, where a description is intended to provide more
 * verbose information.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-describedby
 */
export function AttrEngine$1__ariaDescribedBy_Z35CD86D0(_, ...ids) {
    return _.mk("aria-describedby", join(" ", ids));
}

/**
 * Indicates that the element is perceivable but disabled, so it is not
 * editable or otherwise operable. See related `aria-hidden` and
 * `aria-readonly`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-disabled
 */
export function AttrEngine$1__ariaDisabled_Z1FBCCD16(_, value) {
    return _.mkBool("aria-disabled", value);
}

/**
 * Indicates whether the element, or another grouping element it controls,
 * is currently expanded or collapsed.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-expanded
 */
export function AttrEngine$1__ariaExpanded_Z1FBCCD16(_, value) {
    return _.mkBool("aria-expanded", value);
}

/**
 * Identifies the next element (or elements) in an alternate reading order
 * of content which, at the user's discretion, allows assistive technology
 * to override the general default of reading in document source order.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-flowto
 */
export function AttrEngine$1__ariaFlowTo_Z35CD86D0(_, ...ids) {
    return _.mk("aria-flowto", join(" ", ids));
}

/**
 * Indicates an element's "grabbed" state in a drag-and-drop operation.
 * 
 * When it is set to true it has been selected for dragging, false
 * indicates that the element can be grabbed for a drag-and-drop operation,
 * but is not currently grabbed, and undefined (or no value) indicates the
 * element cannot be grabbed (default).
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-grabbed
 */
export function AttrEngine$1__ariaGrabbed_Z1FBCCD16(_, value) {
    return _.mkBool("aria-grabbed", value);
}

/**
 * Indicates that the element has a popup context menu or sub-level menu.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-haspopup
 */
export function AttrEngine$1__ariaHasPopup_Z1FBCCD16(_, value) {
    return _.mkBool("aria-haspopup", value);
}

/**
 * Indicates that the element and all of its descendants are not visible or
 * perceivable to any user as implemented by the author. See related
 * `aria-disabled`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-hidden
 */
export function AttrEngine$1__ariaHidden_Z1FBCCD16(_, value) {
    return _.mkBool("aria-hidden", value);
}

/**
 * Indicates the entered value does not conform to the format expected by
 * the application.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-invalid
 */
export function AttrEngine$1__ariaInvalid_Z1FBCCD16(_, value) {
    return _.mkBool("aria-invalid", value);
}

/**
 * Defines a (Util.asString value) that labels the current element. See related
 * `aria-labelledby`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-label
 */
export function AttrEngine$1__ariaLabel_Z721C83C5(_, value) {
    return _.mk("aria-label", value);
}

/**
 * Defines the hierarchical level of an element within a structure.
 * 
 * This can be applied inside trees to tree items, to headings inside a
 * document, to nested grids, nested tablists and to other structural items
 * that may appear inside a container or participate in an ownership
 * hierarchy. The value for `aria-level` is an integer greater than or
 * equal to 1.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-level
 */
export function AttrEngine$1__ariaLevel_Z524259A4(_, value) {
    return _.mk("aria-level", int32ToString(value));
}

/**
 * Identifies the element (or elements) that labels the current element.
 * See related `aria-label` and `aria-describedby`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-labelledby
 */
export function AttrEngine$1__ariaLabelledBy_Z35CD86D0(_, ...ids) {
    return _.mk("aria-labelledby", join(" ", ids));
}

/**
 * Indicates whether a text box accepts multiple lines of input or only a
 * single line.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiline
 */
export function AttrEngine$1__ariaMultiLine_Z1FBCCD16(_, value) {
    return _.mkBool("aria-multiline", value);
}

/**
 * Indicates that the user may select more than one item from the current
 * selectable descendants.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiselectable
 */
export function AttrEngine$1__ariaMultiSelectable_Z1FBCCD16(_, value) {
    return _.mkBool("aria-multiselectable", value);
}

/**
 * Identifies an element (or elements) in order to define a visual,
 * functional, or contextual parent/child relationship between DOM elements
 * where the DOM hierarchy cannot be used to represent the relationship.
 * See related `aria-controls`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-owns
 */
export function AttrEngine$1__ariaOwns_Z35CD86D0(_, ...ids) {
    return _.mk("aria-owns", join(" ", ids));
}

/**
 * Indicates the current "pressed" state of toggle buttons. See related
 * `aria-checked` and `aria-selected`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-pressed
 */
export function AttrEngine$1__ariaPressed_Z1FBCCD16(_, value) {
    return _.mkBool("aria-pressed", value);
}

/**
 * Defines an element's number or position in the current set of listitems
 * or treeitems. Not required if all elements in the set are present in the
 * DOM. See related `aria-setsize`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-posinset
 */
export function AttrEngine$1__ariaPosInSet_Z524259A4(_, value) {
    return _.mk("aria-posinset", int32ToString(value));
}

/**
 * Indicates that the element is not editable, but is otherwise operable.
 * See related `aria-disabled`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-readonly
 */
export function AttrEngine$1__ariaReadOnly_Z1FBCCD16(_, value) {
    return _.mkBool("aria-readonly", value);
}

/**
 * Indicates that user input is required on the element before a form may
 * be submitted.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-required
 */
export function AttrEngine$1__ariaRequired_Z1FBCCD16(_, value) {
    return _.mkBool("aria-required", value);
}

/**
 * Indicates the current "selected" state of various widgets. See related
 * `aria-checked` and `aria-pressed`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-selected
 */
export function AttrEngine$1__ariaSelected_Z1FBCCD16(_, value) {
    return _.mkBool("aria-selected", value);
}

/**
 * Defines the maximum allowed value for a range widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemax
 */
export function AttrEngine$1__ariaValueMax_5E38073B(_, value) {
    return _.mk("aria-valuemax", value.toString());
}

/**
 * Defines the maximum allowed value for a range widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemax
 */
export function AttrEngine$1__ariaValueMax_Z524259A4(_, value) {
    return _.mk("aria-valuemax", int32ToString(value));
}

/**
 * Defines the minimum allowed value for a range widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemin
 */
export function AttrEngine$1__ariaValueMin_5E38073B(_, value) {
    return _.mk("aria-valuemin", value.toString());
}

/**
 * Defines the minimum allowed value for a range widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemin
 */
export function AttrEngine$1__ariaValueMin_Z524259A4(_, value) {
    return _.mk("aria-valuemin", int32ToString(value));
}

/**
 * Defines the current value for a range widget. See related
 * `aria-valuetext`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuenow
 */
export function AttrEngine$1__ariaValueNow_5E38073B(_, value) {
    return _.mk("aria-valuenow", value.toString());
}

/**
 * Defines the current value for a range widget. See related
 * `aria-valuetext`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuenow
 */
export function AttrEngine$1__ariaValueNow_Z524259A4(_, value) {
    return _.mk("aria-valuenow", int32ToString(value));
}

/**
 * Defines the human readable text alternative of `aria-valuenow` for a
 * range widget.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuetext
 */
export function AttrEngine$1__ariaValueText_Z721C83C5(_, value) {
    return _.mk("aria-valuetext", value);
}

/**
 * Defines the number of items in the current set of listitems or
 * treeitems. Not required if all elements in the set are present in the
 * DOM. See related `aria-posinset`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-setsize
 */
export function AttrEngine$1__ariaSetSize_Z524259A4(_, value) {
    return _.mk("aria-setsize", int32ToString(value));
}

/**
 * Indicates that the script should be executed asynchronously.
 */
export function AttrEngine$1__async_Z1FBCCD16(_, value) {
    return _.mkBool("async", value);
}

/**
 * Indicates the name of the CSS property or attribute of the target element
 * that is going to be changed during an animation.
 */
export function AttrEngine$1__attributeName_Z721C83C5(_, value) {
    return _.mk("attributeName", value);
}

/**
 * Indicates whether controls in this form can by default have their values
 * automatically completed by the browser.
 */
export function AttrEngine$1__autoComplete_Z721C83C5(_, value) {
    return _.mk("autocomplete", value);
}

/**
 * The element should be automatically focused after the page loaded.
 */
export function AttrEngine$1__autoFocus_Z1FBCCD16(_, value) {
    return _.mkBool("autofocus", value);
}

/**
 * The audio or video should play as soon as possible.
 */
export function AttrEngine$1__autoPlay_Z1FBCCD16(_, value) {
    return _.mkBool("autoplay", value);
}

/**
 * Specifies the direction angle for the light source on the XY plane (clockwise),
 * in degrees from the x axis.
 */
export function AttrEngine$1__azimuth_5E38073B(_, value) {
    return _.mk("azimuth", value.toString());
}

/**
 * Specifies the direction angle for the light source on the XY plane (clockwise),
 * in degrees from the x axis.
 */
export function AttrEngine$1__azimuth_Z524259A4(_, value) {
    return _.mk("azimuth", int32ToString(value));
}

/**
 * Represents the base frequency parameter for the noise function of the
 * <feTurbulence> filter primitive.
 */
export function AttrEngine$1__baseFrequency_5E38073B(_, value) {
    return _.mk("baseFrequency", value.toString());
}

/**
 * Represents the base frequency parameter for the noise function of the
 * <feTurbulence> filter primitive.
 */
export function AttrEngine$1__baseFrequency_Z524259A4(_, value) {
    return _.mk("baseFrequency", int32ToString(value));
}

/**
 * Represents the base frequency parameter for the noise function of the
 * <feTurbulence> filter primitive.
 */
export function AttrEngine$1__baseFrequency_7B00E9A0(_, horizontal, vertical) {
    return _.mk("baseFrequency", (horizontal.toString() + ",") + vertical.toString());
}

/**
 * Represents the base frequency parameter for the noise function of the
 * <feTurbulence> filter primitive.
 */
export function AttrEngine$1__baseFrequency_Z37302880(_, horizontal, vertical) {
    return _.mk("baseFrequency", (int32ToString(horizontal) + ",") + int32ToString(vertical));
}

/**
 * Represents the base frequency parameter for the noise function of the
 * <feTurbulence> filter primitive.
 * Defines when an animation should begin or when an element should be discarded.
 */
export function AttrEngine$1__begin$0027_Z721C83C5(_, value) {
    return _.mk("begin", value);
}

/**
 * Shifts the range of the filter. After applying the kernelMatrix of the <feConvolveMatrix>
 * element to the input image to yield a number and applied the divisor attribute, the bias
 * attribute is added to each component. This allows representation of values that would
 * otherwise be clamped to 0 or 1.
 */
export function AttrEngine$1__bias_5E38073B(_, value) {
    return _.mk("bias", value.toString());
}

/**
 * Shifts the range of the filter. After applying the kernelMatrix of the <feConvolveMatrix>
 * element to the input image to yield a number and applied the divisor attribute, the bias
 * attribute is added to each component. This allows representation of values that would
 * otherwise be clamped to 0 or 1.
 */
export function AttrEngine$1__bias_Z524259A4(_, value) {
    return _.mk("bias", int32ToString(value));
}

/**
 * Specifies a relative offset value for an attribute that will be modified during an animation.
 */
export function AttrEngine$1__by_5E38073B(_, value) {
    return _.mk("by", value.toString());
}

/**
 * Specifies a relative offset value for an attribute that will be modified during an animation.
 */
export function AttrEngine$1__by_Z524259A4(_, value) {
    return _.mk("by", int32ToString(value));
}

/**
 * Specifies a relative offset value for an attribute that will be modified during an animation.
 */
export function AttrEngine$1__by_Z721C83C5(_, value) {
    return _.mk("by", value);
}

export function AttrEngine$1__capture_Z1FBCCD16(_, value) {
    return _.mkBool("capture", value);
}

/**
 * This attribute declares the document's character encoding. Must be used in the meta tag.
 */
export function AttrEngine$1__charset_Z721C83C5(_, value) {
    return _.mk("charset", value);
}

/**
 * A URL that designates a source document or message for the information quoted. This attribute is intended to
 * point to information explaining the context or the reference for the quote.
 */
export function AttrEngine$1__cite_Z721C83C5(_, value) {
    return _.mk("cite", value);
}

/**
 * Specifies a CSS class for this element.
 */
export function AttrEngine$1__className_Z721C83C5(_, value) {
    return _.mk("class", value);
}

/**
 * Takes a `seq<string>` and joins them using a space to combine the classses into a single class property.
 * 
 * `prop.className [ "one"; "two" ]`
 * 
 * is the same as
 * 
 * `prop.className "one two"`
 */
export function AttrEngine$1__className_5D66A394(_, names) {
    return _.mk("class", join(" ", names));
}

/**
 * Takes a `seq<string>` and joins them using a space to combine the classses into a single class property.
 * 
 * `prop.classes [ "one"; "two" ]` => `prop.className "one two"`
 */
export function AttrEngine$1__classes_5D66A394(_, names) {
    return _.mk("class", join(" ", names));
}

export function AttrEngine$1__classes_Z5EF0466F(_, names) {
    return _.mk("class", join(" ", choose((_arg) => {
        if (_arg[0]) {
            return _arg[1];
        }
        else {
            return undefined;
        }
    }, names)));
}

/**
 * Defines the number of columns in a textarea.
 */
export function AttrEngine$1__cols_Z524259A4(_, value) {
    return _.mk("cols", int32ToString(value));
}

/**
 * Defines the number of columns a cell should span.
 */
export function AttrEngine$1__colSpan_Z524259A4(_, value) {
    return _.mk("colspan", int32ToString(value));
}

/**
 * A value associated with http-equiv or name depending on the context.
 */
export function AttrEngine$1__content_Z721C83C5(_, value) {
    return _.mk("content", value);
}

/**
 * Indicates whether the element's content is editable.
 */
export function AttrEngine$1__contentEditable_Z1FBCCD16(_, value) {
    return _.mkBool("contenteditable", value);
}

/**
 * If true, the browser will offer controls to allow the user to control video playback,
 * including volume, seeking, and pause/resume playback.
 */
export function AttrEngine$1__controls_Z1FBCCD16(_, value) {
    return _.mkBool("controls", value);
}

/**
 * The SVG cx attribute define the x-axis coordinate of a center point.
 * 
 * Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
 */
export function AttrEngine$1__cx_Z445F6BAF(_, value) {
    return _.mk("cx", value);
}

/**
 * The SVG cx attribute define the x-axis coordinate of a center point.
 * 
 * Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
 */
export function AttrEngine$1__cx_Z524259A4(_, value) {
    return _.mk("cx", int32ToString(value));
}

/**
 * The SVG cy attribute define the y-axis coordinate of a center point.
 * 
 * Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
 */
export function AttrEngine$1__cy_Z445F6BAF(_, value) {
    return _.mk("cy", value);
}

/**
 * The SVG cy attribute define the y-axis coordinate of a center point.
 * 
 * Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
 */
export function AttrEngine$1__cy_Z524259A4(_, value) {
    return _.mk("cy", int32ToString(value));
}

/**
 * Defines a SVG path to be drawn.
 */
export function AttrEngine$1__d_Z721C83C5(_, path) {
    return _.mk("d", path);
}

/**
 * This attribute indicates the time and/or date of the element.
 */
export function AttrEngine$1__dateTime_Z721C83C5(_, value) {
    return _.mk("datetime", value);
}

/**
 * Indicates to a browser that the script is meant to be executed after the document
 * has been parsed, but before firing DOMContentLoaded.
 * 
 * Scripts with the defer attribute will prevent the DOMContentLoaded event from
 * firing until the script has loaded and finished evaluating.
 * 
 * This attribute must not be used if the src attribute is absent (i.e. for inline scripts),
 * in this case it would have no effect.
 */
export function AttrEngine$1__defer_Z1FBCCD16(_, value) {
    return _.mkBool("defer", value);
}

/**
 * Represents the kd value in the Phong lighting model.
 * 
 * In SVG, this can be any non-negative number.
 */
export function AttrEngine$1__diffuseConstant_5E38073B(_, value) {
    return _.mk("diffuseConstant", value.toString());
}

/**
 * Represents the kd value in the Phong lighting model.
 * 
 * In SVG, this can be any non-negative number.
 */
export function AttrEngine$1__diffuseConstant_Z524259A4(_, value) {
    return _.mk("diffuseConstant", int32ToString(value));
}

/**
 * Sets the directionality of the element.
 */
export function AttrEngine$1__dirName_Z721C83C5(_, value) {
    return _.mk("dirName", value);
}

/**
 * Indicates whether the user can interact with the element.
 */
export function AttrEngine$1__disabled_Z1FBCCD16(_, value) {
    return _.mkBool("disabled", value);
}

/**
 * Specifies the value by which the resulting number of applying the kernelMatrix
 * of a <feConvolveMatrix> element to the input image color value is divided to
 * yield the destination color value.
 * 
 * A divisor that is the sum of all the matrix values tends to have an evening
 * effect on the overall color intensity of the result.
 */
export function AttrEngine$1__divisor_5E38073B(_, value) {
    return _.mk("divisor", value.toString());
}

/**
 * Specifies the value by which the resulting number of applying the kernelMatrix
 * of a <feConvolveMatrix> element to the input image color value is divided to
 * yield the destination color value.
 * 
 * A divisor that is the sum of all the matrix values tends to have an evening
 * effect on the overall color intensity of the result.
 */
export function AttrEngine$1__divisor_Z524259A4(_, value) {
    return _.mk("divisor", int32ToString(value));
}

/**
 * This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource.
 */
export function AttrEngine$1__download_Z1FBCCD16(_, value) {
    return _.mkBool("download", value);
}

/**
 * Indicates whether the the element can be dragged.
 */
export function AttrEngine$1__draggable_Z1FBCCD16(_, value) {
    return _.mkBool("draggable", value);
}

/**
 * SVG attribute to indicate a shift along the x-axis on the position of an element or its content.
 */
export function AttrEngine$1__dx_5E38073B(_, value) {
    return _.mk("dx", value.toString());
}

/**
 * SVG attribute to indicate a shift along the x-axis on the position of an element or its content.
 */
export function AttrEngine$1__dx_Z524259A4(_, value) {
    return _.mk("dx", int32ToString(value));
}

/**
 * SVG attribute to indicate a shift along the y-axis on the position of an element or its content.
 */
export function AttrEngine$1__dy_5E38073B(_, value) {
    return _.mk("dy", value.toString());
}

/**
 * SVG attribute to indicate a shift along the y-axis on the position of an element or its content.
 */
export function AttrEngine$1__dy_Z524259A4(_, value) {
    return _.mk("dy", int32ToString(value));
}

/**
 * SVG attribute that specifies the direction angle for the light source from the XY plane towards
 * the Z-axis, in degrees.
 * 
 * Note that the positive Z-axis points towards the viewer of the content.
 */
export function AttrEngine$1__elevation_5E38073B(_, value) {
    return _.mk("elevation", value.toString());
}

/**
 * SVG attribute that specifies the direction angle for the light source from the XY plane towards
 * the Z-axis, in degrees.
 * 
 * Note that the positive Z-axis points towards the viewer of the content.
 */
export function AttrEngine$1__elevation_Z524259A4(_, value) {
    return _.mk("elevation", int32ToString(value));
}

/**
 * Defines an end value for the animation that can constrain the active duration.
 */
export function AttrEngine$1__end$0027_Z721C83C5(_, value) {
    return _.mk("end", value);
}

/**
 * Defines an end value for the animation that can constrain the active duration.
 */
export function AttrEngine$1__end$0027_5D66A394(_, values) {
    return _.mk("end", join(";", values));
}

/**
 * Defines the exponent of the gamma function.
 */
export function AttrEngine$1__exponent_5E38073B(_, value) {
    return _.mk("exponent", value.toString());
}

/**
 * Defines the exponent of the gamma function.
 */
export function AttrEngine$1__exponent_Z524259A4(_, value) {
    return _.mk("exponent", int32ToString(value));
}

/**
 * SVG attribute to define the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.
 */
export function AttrEngine$1__fillOpacity_5E38073B(_, value) {
    return _.mk("fill-opacity", value.toString());
}

/**
 * SVG attribute to define the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.
 */
export function AttrEngine$1__fillOpacity_Z524259A4(_, value) {
    return _.mk("fill-opacity", int32ToString(value));
}

/**
 * SVG attribute to define the size of the font from baseline to baseline when multiple
 * lines of text are set solid in a multiline layout environment.
 */
export function AttrEngine$1__fontSize_5E38073B(_, value) {
    return _.mk("font-size", value.toString());
}

/**
 * SVG attribute to define the size of the font from baseline to baseline when multiple
 * lines of text are set solid in a multiline layout environment.
 */
export function AttrEngine$1__fontSize_Z524259A4(_, value) {
    return _.mk("font-size", int32ToString(value));
}

/**
 * A space-separated list of other elements’ ids, indicating that those elements contributed input
 * values to (or otherwise affected) the calculation.
 */
export function AttrEngine$1__for$0027_Z721C83C5(_, value) {
    return _.mk("for", value);
}

/**
 * A space-separated list of other elements’ ids, indicating that those elements contributed input
 * values to (or otherwise affected) the calculation.
 */
export function AttrEngine$1__for$0027_30810B50(_, ids) {
    return _.mk("for", join(" ", ids));
}

/**
 * The <form> element to associate the <meter> element with (its form owner). The value of this
 * attribute must be the id of a <form> in the same document. If this attribute is not set, the
 * <button> is associated with its ancestor <form> element, if any. This attribute is only used
 * if the <meter> element is being used as a form-associated element, such as one displaying a
 * range corresponding to an <input type="number">.
 */
export function AttrEngine$1__form_Z721C83C5(_, value) {
    return _.mk("form", value);
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_5E38073B(_, value) {
    return _.mk("from", value.toString());
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_508CA214(_, values) {
    return _.mk("from", join(" ", map((x) => x.toString(), values)));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_Z524259A4(_, value) {
    return _.mk("from", int32ToString(value));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_Z5D8246D(_, values) {
    return _.mk("from", join(" ", map(int32ToString, values)));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_Z721C83C5(_, value) {
    return _.mk("from", value);
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__from_5D66A394(_, values) {
    return _.mk("from", join(" ", values));
}

/**
 * Defines the radius of the focal point for the radial gradient.
 */
export function AttrEngine$1__fr_Z524259A4(_, value) {
    return _.mk("fr", int32ToString(value));
}

/**
 * Defines the radius of the focal point for the radial gradient.
 */
export function AttrEngine$1__fr_Z445F6BAF(_, value) {
    return _.mk("fr", value);
}

/**
 * Defines the x-axis coordinate of the focal point for a radial gradient.
 */
export function AttrEngine$1__fx_Z524259A4(_, value) {
    return _.mk("fx", int32ToString(value));
}

/**
 * Defines the x-axis coordinate of the focal point for a radial gradient.
 */
export function AttrEngine$1__fx_Z445F6BAF(_, value) {
    return _.mk("fx", value);
}

/**
 * Defines the y-axis coordinate of the focal point for a radial gradient.
 */
export function AttrEngine$1__fy_Z524259A4(_, value) {
    return _.mk("fy", int32ToString(value));
}

/**
 * Defines the y-axis coordinate of the focal point for a radial gradient.
 */
export function AttrEngine$1__fy_Z445F6BAF(_, value) {
    return _.mk("fy", value);
}

/**
 * Defines an optional additional transformation from the gradient coordinate system
 * onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox).
 * 
 * This allows for things such as skewing the gradient. This additional transformation
 * matrix is post-multiplied to (i.e., inserted to the right of) any previously defined
 * transformations, including the implicit transformation necessary to convert from object
 * bounding box units to user space.
 */
export function AttrEngine$1__gradientTransform_124E45BF(_, transform) {
    return _.mk("gradientTransform", transform);
}

/**
 * Defines optional additional transformation(s) from the gradient coordinate system
 * onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox).
 * 
 * This allows for things such as skewing the gradient. This additional transformation
 * matrix is post-multiplied to (i.e., inserted to the right of) any previously defined
 * transformations, including the implicit transformation necessary to convert from object
 * bounding box units to user space.
 */
export function AttrEngine$1__gradientTransform_45017D10(_, transforms) {
    return _.mk("gradientTransform", join(" ", map((x) => x, transforms)));
}

/**
 * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
 */
export function AttrEngine$1__hidden_Z1FBCCD16(_, value) {
    return _.mkBool("hidden", value);
}

/**
 * Specifies the height of elements listed here. For all other elements, use the CSS height property.
 * 
 * HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
 * 
 * SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
 * <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
 * <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
 * <mask>, <pattern>
 */
export function AttrEngine$1__height_Z445F6BAF(_, value) {
    return _.mk("height", value);
}

/**
 * Specifies the height of elements listed here. For all other elements, use the CSS height property.
 * 
 * HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
 * 
 * SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
 * <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
 * <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
 * <mask>, <pattern>
 */
export function AttrEngine$1__height_Z524259A4(_, value) {
    return _.mk("height", int32ToString(value));
}

/**
 * The lower numeric bound of the high end of the measured range. This must be less than the
 * maximum value (max attribute), and it also must be greater than the low value and minimum
 * value (low attribute and min attribute, respectively), if any are specified. If unspecified,
 * or if greater than the maximum value, the high value is equal to the maximum value.
 */
export function AttrEngine$1__high_5E38073B(_, value) {
    return _.mk("high", value.toString());
}

/**
 * The lower numeric bound of the high end of the measured range. This must be less than the
 * maximum value (max attribute), and it also must be greater than the low value and minimum
 * value (low attribute and min attribute, respectively), if any are specified. If unspecified,
 * or if greater than the maximum value, the high value is equal to the maximum value.
 */
export function AttrEngine$1__high_Z524259A4(_, value) {
    return _.mk("high", int32ToString(value));
}

/**
 * The URL of a linked resource.
 */
export function AttrEngine$1__href_Z721C83C5(_, value) {
    return _.mk("href", value);
}

/**
 * Indicates the language of the linked resource. Allowed values are determined by BCP47.
 * 
 * Use this attribute only if the href attribute is present.
 */
export function AttrEngine$1__hrefLang_Z721C83C5(_, value) {
    return _.mk("hreflang", value);
}

export function AttrEngine$1__htmlFor_Z721C83C5(_, value) {
    return _.mk("for", value);
}

/**
 * Often used with CSS to style a specific element. The value of this attribute must be unique.
 */
export function AttrEngine$1__id_Z524259A4(_, value) {
    return _.mk("id", int32ToString(value));
}

/**
 * Often used with CSS to style a specific element. The value of this attribute must be unique.
 */
export function AttrEngine$1__id_Z721C83C5(_, value) {
    return _.mk("id", value);
}

/**
 * Contains inline metadata that a user agent can use to verify that a fetched resource
 * has been delivered free of unexpected manipulation.
 */
export function AttrEngine$1__integrity_Z721C83C5(_, value) {
    return _.mk("integrity", value);
}

/**
 * Defines the intercept of the linear function of color component transfers when the type
 * attribute is set to linear.
 */
export function AttrEngine$1__intercept_5E38073B(_, value) {
    return _.mk("intercept", value.toString());
}

/**
 * Defines the intercept of the linear function of color component transfers when the type
 * attribute is set to linear.
 */
export function AttrEngine$1__intercept_Z524259A4(_, value) {
    return _.mk("intercept", int32ToString(value));
}

/**
 * Sets the checked attribute for an element.
 */
export function AttrEngine$1__isChecked_Z1FBCCD16(_, value) {
    return _.mkBool("checked", value);
}

/**
 * Sets the open attribute for an element.
 */
export function AttrEngine$1__isOpen_Z1FBCCD16(_, value) {
    return _.mkBool("open", value);
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k1_5E38073B(_, value) {
    return _.mk("k1", value.toString());
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k1_Z524259A4(_, value) {
    return _.mk("k1", int32ToString(value));
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k2_5E38073B(_, value) {
    return _.mk("k2", value.toString());
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k2_Z524259A4(_, value) {
    return _.mk("k2", int32ToString(value));
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k3_5E38073B(_, value) {
    return _.mk("k3", value.toString());
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k3_Z524259A4(_, value) {
    return _.mk("k3", int32ToString(value));
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k4_5E38073B(_, value) {
    return _.mk("k4", value.toString());
}

/**
 * Defines one of the values to be used within the the arithmetic operation of the
 * <feComposite> filter primitive.
 */
export function AttrEngine$1__k4_Z524259A4(_, value) {
    return _.mk("k4", int32ToString(value));
}

/**
 * Defines the list of numbers that make up the kernel matrix for the
 * <feConvolveMatrix> element.
 */
export function AttrEngine$1__kernelMatrix_508CA214(_, values) {
    return _.mk("kernelMatrix", join(" ", map((x) => x.toString(), values)));
}

/**
 * Defines the list of numbers that make up the kernel matrix for the
 * <feConvolveMatrix> element.
 */
export function AttrEngine$1__kernelMatrix_Z5D8246D(_, values) {
    return _.mk("kernelMatrix", join(" ", map(int32ToString, values)));
}

/**
 * Indicates the simple duration of an animation.
 */
export function AttrEngine$1__keyPoints_508CA214(_, values) {
    return _.mk("keyPoints", join(";", map((x) => x.toString(), values)));
}

/**
 * Indicates the simple duration of an animation.
 */
export function AttrEngine$1__keyTimes_508CA214(_, values) {
    return _.mk("keyTimes", join(";", map((x) => x.toString(), values)));
}

/**
 * Helps define the language of an element: the language that non-editable elements are
 * written in, or the language that the editable elements should be written in by the user.
 */
export function AttrEngine$1__lang_Z721C83C5(_, value) {
    return _.mk("lang", value);
}

/**
 * Defines the color of the light source for lighting filter primitives.
 */
export function AttrEngine$1__lightingColor_Z721C83C5(_, value) {
    return _.mk("lighting-color", value);
}

/**
 * Represents the angle in degrees between the spot light axis (i.e. the axis between the
 * light source and the point to which it is pointing at) and the spot light cone. So it
 * defines a limiting cone which restricts the region where the light is projected.
 * 
 * No light is projected outside the cone.
 */
export function AttrEngine$1__limitingConeAngle_5E38073B(_, value) {
    return _.mk("limitingConeAngle", value.toString());
}

/**
 * Represents the angle in degrees between the spot light axis (i.e. the axis between the
 * light source and the point to which it is pointing at) and the spot light cone. So it
 * defines a limiting cone which restricts the region where the light is projected.
 * 
 * No light is projected outside the cone.
 */
export function AttrEngine$1__limitingConeAngle_Z524259A4(_, value) {
    return _.mk("limitingConeAngle", int32ToString(value));
}

/**
 * If true, the browser will automatically seek back to the start upon reaching the end of the video.
 */
export function AttrEngine$1__loop_Z1FBCCD16(_, value) {
    return _.mkBool("loop", value);
}

/**
 * The upper numeric bound of the low end of the measured range. This must be greater than
 * the minimum value (min attribute), and it also must be less than the high value and
 * maximum value (high attribute and max attribute, respectively), if any are specified.
 * If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
 */
export function AttrEngine$1__low_5E38073B(_, value) {
    return _.mk("low", value.toString());
}

/**
 * The upper numeric bound of the low end of the measured range. This must be greater than
 * the minimum value (min attribute), and it also must be less than the high value and
 * maximum value (high attribute and max attribute, respectively), if any are specified.
 * If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
 */
export function AttrEngine$1__low_Z524259A4(_, value) {
    return _.mk("low", int32ToString(value));
}

/**
 * Indicates the maximum value allowed.
 */
export function AttrEngine$1__max_5E38073B(_, value) {
    return _.mk("max", value.toString());
}

/**
 * Indicates the maximum value allowed.
 */
export function AttrEngine$1__max_Z524259A4(_, value) {
    return _.mk("max", int32ToString(value));
}

/**
 * Indicates the maximum value allowed.
 */
export function AttrEngine$1__max_7F9DDECF(_, value) {
    return _.mk("max", toString(value, "yyyy-MM-dd"));
}

/**
 * Defines the maximum number of characters allowed in the element.
 */
export function AttrEngine$1__maxLength_Z524259A4(_, value) {
    return _.mk("maxlength", int32ToString(value));
}

/**
 * This attribute specifies the media that the linked resource applies to.
 * Its value must be a media type / media query. This attribute is mainly useful
 * when linking to external stylesheets — it allows the user agent to pick the
 * best adapted one for the device it runs on.
 * 
 * In HTML 4, this can only be a simple white-space-separated list of media
 * description literals, i.e., media types and groups, where defined and allowed
 * as values for this attribute, such as print, screen, aural, braille. HTML5
 * extended this to any kind of media queries, which are a superset of the allowed
 * values of HTML 4.
 * 
 * Browsers not supporting CSS3 Media Queries won't necessarily recognize the adequate
 * link; do not forget to set fallback links, the restricted set of media queries
 * defined in HTML 4.
 */
export function AttrEngine$1__media_Z721C83C5(_, value) {
    return _.mk("media", value);
}

/**
 * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
 */
export function AttrEngine$1__method_Z721C83C5(_, value) {
    return _.mk("method", value);
}

/**
 * Indicates the minimum value allowed.
 */
export function AttrEngine$1__min_5E38073B(_, value) {
    return _.mk("min", value.toString());
}

/**
 * Indicates the minimum value allowed.
 */
export function AttrEngine$1__min_Z524259A4(_, value) {
    return _.mk("min", int32ToString(value));
}

/**
 * Indicates the minimum value allowed.
 */
export function AttrEngine$1__min_7F9DDECF(_, value) {
    return _.mk("min", toString(value, "yyyy-MM-dd"));
}

/**
 * Defines the minimum number of characters allowed in the element.
 */
export function AttrEngine$1__minLength_Z524259A4(_, value) {
    return _.mk("minlength", int32ToString(value));
}

/**
 * Indicates whether multiple values can be entered in an input of the type email or file.
 */
export function AttrEngine$1__multiple_Z1FBCCD16(_, value) {
    return _.mkBool("multiple", value);
}

/**
 * Indicates whether the audio will be initially silenced on page load.
 */
export function AttrEngine$1__muted_Z1FBCCD16(_, value) {
    return _.mkBool("muted", value);
}

/**
 * Name of the element.
 * 
 * For example used by the server to identify the fields in form submits.
 */
export function AttrEngine$1__name_Z721C83C5(_, value) {
    return _.mk("name", value);
}

/**
 * This Boolean attribute is set to indicate that the script should not be executed in
 * browsers that support ES2015 modules — in effect, this can be used to serve fallback
 * scripts to older browsers that do not support modular JavaScript code.
 */
export function AttrEngine$1__nomodule_Z1FBCCD16(_, value) {
    return _.mkBool("nomodule", value);
}

/**
 * A cryptographic nonce (number used once) to whitelist scripts in a script-src
 * Content-Security-Policy. The server must generate a unique nonce value each time
 * it transmits a policy. It is critical to provide a nonce that cannot be guessed
 * as bypassing a resource's policy is otherwise trivial.
 */
export function AttrEngine$1__nonce_Z721C83C5(_, value) {
    return _.mk("nonce", value);
}

/**
 * Defines the number of octaves for the noise function of the <feTurbulence> primitive.
 */
export function AttrEngine$1__numOctaves_Z524259A4(_, value) {
    return _.mk("numOctaves", int32ToString(value));
}

/**
 * SVG attribute to define where the gradient color will begin or end.
 */
export function AttrEngine$1__offset_Z445F6BAF(_, value) {
    return _.mk("offset", value);
}

/**
 * SVG attribute to define where the gradient color will begin or end.
 */
export function AttrEngine$1__offset_Z524259A4(_, value) {
    return _.mk("offset", int32ToString(value));
}

/**
 * This attribute indicates the optimal numeric value. It must be within the range (as defined by the min
 * attribute and max attribute). When used with the low attribute and high attribute, it gives an indication
 * where along the range is considered preferable. For example, if it is between the min attribute and the
 * low attribute, then the lower range is considered preferred.
 */
export function AttrEngine$1__optimum_5E38073B(_, value) {
    return _.mk("optimum", value.toString());
}

/**
 * This attribute indicates the optimal numeric value. It must be within the range (as defined by the min
 * attribute and max attribute). When used with the low attribute and high attribute, it gives an indication
 * where along the range is considered preferable. For example, if it is between the min attribute and the
 * low attribute, then the lower range is considered preferred.
 */
export function AttrEngine$1__optimum_Z524259A4(_, value) {
    return _.mk("optimum", int32ToString(value));
}

/**
 * Indicates the minimum value allowed.
 */
export function AttrEngine$1__order_Z524259A4(_, value) {
    return _.mk("order", int32ToString(value));
}

/**
 * Indicates the minimum value allowed.
 */
export function AttrEngine$1__order_Z5D8246D(_, values) {
    return _.mk("order", join(" ", map(int32ToString, values)));
}

/**
 * Represents the ideal vertical position of the overline.
 * 
 * The overline position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__overlinePosition_5E38073B(_, value) {
    return _.mk("overline-position", value.toString());
}

/**
 * Represents the ideal vertical position of the overline.
 * 
 * The overline position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__overlinePosition_Z524259A4(_, value) {
    return _.mk("overline-position", int32ToString(value));
}

/**
 * Represents the ideal thickness of the overline.
 * 
 * The overline thickness is expressed in the font's coordinate system.
 */
export function AttrEngine$1__overlineThickness_5E38073B(_, value) {
    return _.mk("overline-thickness", value.toString());
}

/**
 * Represents the ideal thickness of the overline.
 * 
 * The overline thickness is expressed in the font's coordinate system.
 */
export function AttrEngine$1__overlineThickness_Z524259A4(_, value) {
    return _.mk("overline-thickness", int32ToString(value));
}

/**
 * It either defines a text path along which the characters of a text are rendered, or a motion
 * path along which a referenced element is animated.
 */
export function AttrEngine$1__path_Z721C83C5(_, path) {
    return _.mk("path", path);
}

/**
 * The part global attribute contains a space-separated list of the part names of the element.
 * Part names allows CSS to select and style specific elements in a shadow tree
 */
export function AttrEngine$1__part_Z721C83C5(_, value) {
    return _.mk("part", value);
}

/**
 * The part global attribute contains a space-separated list of the part names of the element.
 * Part names allows CSS to select and style specific elements in a shadow tree
 */
export function AttrEngine$1__part_30810B50(_, values) {
    return _.mk("part", join(" ", values));
}

/**
 * Specifies a total length for the path, in user units.
 * 
 * This value is then used to calibrate the browser's distance calculations with those of the
 * author, by scaling all distance computations using the ratio pathLength/(computed value of
 * path length).
 * 
 * This can affect the actual rendered lengths of paths; including text paths, animation paths,
 * and various stroke operations. Basically, all computations that require the length of the path.
 */
export function AttrEngine$1__pathLength_Z524259A4(_, value) {
    return _.mk("pathLength", int32ToString(value));
}

/**
 * Sets the input field allowed input.
 * 
 * This attribute only applies when the value of the type attribute is text, search, tel, url or email.
 */
export function AttrEngine$1__pattern_Z721C83C5(_, value) {
    return _.mk("pattern", value);
}

/**
 * Defines a list of transform definitions that are applied to a pattern tile.
 */
export function AttrEngine$1__patternTransform_124E45BF(_, transform) {
    return _.mk("patternTransform", transform);
}

/**
 * Defines a list of transform definitions that are applied to a pattern tile.
 */
export function AttrEngine$1__patternTransform_45017D10(_, transforms) {
    return _.mk("patternTransform", join(" ", map((x) => x, transforms)));
}

/**
 * Provides a hint to the user of what can be entered in the field.
 */
export function AttrEngine$1__placeholder_Z721C83C5(_, value) {
    return _.mk("placeholder", value);
}

/**
 * Indicating that the video is to be played "inline", that is within the element's playback area.
 * 
 * Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
 */
export function AttrEngine$1__playsInline_Z1FBCCD16(_, value) {
    return _.mkBool("playsinline", value);
}

/**
 * Contains a space-separated list of URLs to which, when the hyperlink is followed,
 * POST requests with the body PING will be sent by the browser (in the background).
 * 
 * Typically used for tracking.
 */
export function AttrEngine$1__ping_Z721C83C5(_, value) {
    return _.mk("ping", value);
}

/**
 * Contains a space-separated list of URLs to which, when the hyperlink is followed,
 * POST requests with the body PING will be sent by the browser (in the background).
 * 
 * Typically used for tracking.
 */
export function AttrEngine$1__ping_30810B50(_, urls) {
    return _.mk("ping", join(" ", urls));
}

/**
 * Defines a list of points.
 * 
 * Each point is defined by a pair of numbers representing a X and a Y coordinate in
 * the user coordinate system.
 */
export function AttrEngine$1__points_Z721C83C5(_, coordinates) {
    return _.mk("points", coordinates);
}

/**
 * Represents the x location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing.
 */
export function AttrEngine$1__pointsAtX_5E38073B(_, value) {
    return _.mk("pointsAtX", value.toString());
}

/**
 * Represents the x location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing.
 */
export function AttrEngine$1__pointsAtX_Z524259A4(_, value) {
    return _.mk("pointsAtX", int32ToString(value));
}

/**
 * Represents the y location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing.
 */
export function AttrEngine$1__pointsAtY_5E38073B(_, value) {
    return _.mk("pointsAtY", value.toString());
}

/**
 * Represents the y location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing.
 */
export function AttrEngine$1__pointsAtY_Z524259A4(_, value) {
    return _.mk("pointsAtY", int32ToString(value));
}

/**
 * Represents the y location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing, assuming that,
 * in the initial local coordinate system, the positive z-axis comes out towards the person
 * viewing the content and assuming that one unit along the z-axis equals one unit in x and y.
 */
export function AttrEngine$1__pointsAtZ_5E38073B(_, value) {
    return _.mk("pointsAtZ", value.toString());
}

/**
 * Represents the y location in the coordinate system established by attribute primitiveUnits
 * on the <filter> element of the point at which the light source is pointing, assuming that,
 * in the initial local coordinate system, the positive z-axis comes out towards the person
 * viewing the content and assuming that one unit along the z-axis equals one unit in x and y.
 */
export function AttrEngine$1__pointsAtZ_Z524259A4(_, value) {
    return _.mk("pointsAtZ", int32ToString(value));
}

/**
 * Indicates how a <feConvolveMatrix> element handles alpha transparency.
 */
export function AttrEngine$1__preserveAlpha_Z1FBCCD16(_, value) {
    return _.mkBool("preserveAlpha", value);
}

/**
 * A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing
 * is displayed until the first frame is available, then the first frame is shown as the poster frame.
 */
export function AttrEngine$1__poster_Z721C83C5(_, value) {
    return _.mk("poster", value);
}

/**
 * SVG attribute to define the radius of a circle.
 */
export function AttrEngine$1__r_Z445F6BAF(_, value) {
    return _.mk("r", value);
}

/**
 * SVG attribute to define the radius of a circle.
 */
export function AttrEngine$1__r_Z524259A4(_, value) {
    return _.mk("r", int32ToString(value));
}

/**
 * Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
 */
export function AttrEngine$1__radius_5E38073B(_, value) {
    return _.mk("radius", value.toString());
}

/**
 * Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
 */
export function AttrEngine$1__radius_Z524259A4(_, value) {
    return _.mk("radius", int32ToString(value));
}

/**
 * Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
 */
export function AttrEngine$1__radius_7B00E9A0(_, xRadius, yRadius) {
    return _.mk("radius", (xRadius.toString() + ",") + yRadius.toString());
}

/**
 * Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
 */
export function AttrEngine$1__radius_Z37302880(_, xRadius, yRadius) {
    return _.mk("radius", (int32ToString(xRadius) + ",") + int32ToString(yRadius));
}

/**
 * Indicates whether the element can be edited.
 */
export function AttrEngine$1__readOnly_Z1FBCCD16(_, value) {
    return _.mkBool("readOnly", value);
}

/**
 * For anchors containing the href attribute, this attribute specifies the relationship
 * of the target object to the link object. The value is a space-separated list of link
 * types values. The values and their semantics will be registered by some authority that
 * might have meaning to the document author. The default relationship, if no other is
 * given, is void.
 * 
 * Use this attribute only if the href attribute is present.
 */
export function AttrEngine$1__rel_Z721C83C5(_, value) {
    return _.mk("rel", value);
}

/**
 * Indicates whether this element is required to fill out or not.
 */
export function AttrEngine$1__required_Z1FBCCD16(_, value) {
    return _.mkBool("required", value);
}

/**
 * Defines the assigned name for this filter primitive.
 * 
 * If supplied, then graphics that result from processing this filter primitive can be
 * referenced by an in attribute on a subsequent filter primitive within the same
 * <filter> element.
 * 
 * If no value is provided, the output will only be available for re-use as the implicit
 * input into the next filter primitive if that filter primitive provides no value for
 * its in attribute.
 */
export function AttrEngine$1__result_Z721C83C5(_, value) {
    return _.mk("result", value);
}

/**
 * Sets the aria role
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles
 */
export function AttrEngine$1__role_Z35CD86D0(_, ...roles) {
    return _.mk("role", join(" ", roles));
}

/**
 * Defines the number of rows in a text area.
 */
export function AttrEngine$1__rows_Z524259A4(_, value) {
    return _.mk("rows", int32ToString(value));
}

/**
 * Defines the number of rows a table cell should span over.
 */
export function AttrEngine$1__rowSpan_Z524259A4(_, value) {
    return _.mk("rowspan", int32ToString(value));
}

/**
 * The SVG rx attribute defines a radius on the x-axis.
 * 
 * Two elements are using this attribute: <ellipse>, and <rect>
 */
export function AttrEngine$1__rx_Z445F6BAF(_, value) {
    return _.mk("rx", value);
}

/**
 * The SVG rx attribute defines a radius on the x-axis.
 * 
 * Two elements are using this attribute: <ellipse>, and <rect>
 */
export function AttrEngine$1__rx_Z524259A4(_, value) {
    return _.mk("rx", int32ToString(value));
}

/**
 * The SVG ry attribute defines a radius on the y-axis.
 * 
 * Two elements are using this attribute: <ellipse>, and <rect>
 */
export function AttrEngine$1__ry_Z445F6BAF(_, value) {
    return _.mk("ry", value);
}

/**
 * The SVG ry attribute defines a radius on the y-axis.
 * 
 * Two elements are using this attribute: <ellipse>, and <rect>
 */
export function AttrEngine$1__ry_Z524259A4(_, value) {
    return _.mk("ry", int32ToString(value));
}

/**
 * Applies extra restrictions to the content in the frame.
 * 
 * The value of the attribute can either be empty to apply all restrictions,
 * or space-separated tokens to lift particular restrictions
 */
export function AttrEngine$1__sandbox_30810B50(_, values) {
    return _.mk("sandbox", join(" ", values));
}

/**
 * Defines the displacement scale factor to be used on a <feDisplacementMap> filter primitive.
 * 
 * The amount is expressed in the coordinate system established by the primitiveUnits attribute
 * on the <filter> element.
 */
export function AttrEngine$1__scale_5E38073B(_, value) {
    return _.mk("scale", value.toString());
}

/**
 * Defines the displacement scale factor to be used on a <feDisplacementMap> filter primitive.
 * 
 * The amount is expressed in the coordinate system established by the primitiveUnits attribute
 * on the <filter> element.
 */
export function AttrEngine$1__scale_Z524259A4(_, value) {
    return _.mk("scale", int32ToString(value));
}

/**
 * Represents the starting number for the pseudo random number generator of the <feTurbulence>
 * filter primitive.
 */
export function AttrEngine$1__seed_5E38073B(_, value) {
    return _.mk("seed", value.toString());
}

/**
 * Represents the starting number for the pseudo random number generator of the <feTurbulence>
 * filter primitive.
 */
export function AttrEngine$1__seed_Z524259A4(_, value) {
    return _.mk("seed", int32ToString(value));
}

/**
 * Defines a value which will be selected on page load.
 */
export function AttrEngine$1__selected_Z1FBCCD16(_, value) {
    return _.mkBool("selected", value);
}

/**
 * Sets the beginning index of the selected text.
 * 
 * When nothing is selected, this returns the position of the text input cursor (caret) inside of the <input> element.
 */
export function AttrEngine$1__selectionStart_Z524259A4(_, value) {
    return _.mk("selectionStart", int32ToString(value));
}

/**
 * Sets the end index of the selected text.
 * 
 * When there's no selection, this returns the offset of the character immediately following the current text input cursor position.
 */
export function AttrEngine$1__selectionEnd_Z524259A4(_, value) {
    return _.mk("selectionStart", int32ToString(value));
}

/**
 * Sets the *visual* size of the control.
 * 
 * The value is in pixels unless the value of type is text or password, in which case, it is the number of characters.
 * 
 * This attribute only applies when type is set to text, search, tel, url, email, or password.
 */
export function AttrEngine$1__size_Z524259A4(_, value) {
    return _.mk("size", int32ToString(value));
}

/**
 * Defines the sizes of the icons for visual media contained in the resource.
 * It must be present only if the rel contains a value of icon or a non-standard
 * type such as Apple's apple-touch-icon.
 * 
 * It may have the following values:
 * 
 * `any`, meaning that the icon can be scaled to any size as it is in a vector
 * format, like image/svg+xml.
 * 
 * A white-space separated list of sizes, each in the format `<width in pixels>x<height in pixels>`
 * or `<width in pixels>X<height in pixels>`. Each of these sizes must be contained in the resource.
 */
export function AttrEngine$1__sizes_Z721C83C5(_, value) {
    return _.mk("sizes", value);
}

/**
 * This attribute contains a positive integer indicating the number of consecutive
 * columns the <col> element spans. If not present, its default value is 1.
 */
export function AttrEngine$1__spam_Z524259A4(_, value) {
    return _.mk("span", int32ToString(value));
}

/**
 * Defines whether the element may be checked for spelling errors.
 */
export function AttrEngine$1__spellcheck_Z1FBCCD16(_, value) {
    return _.mkBool("spellcheck", value);
}

/**
 * Controls the ratio of reflection of the specular lighting.
 * 
 * It represents the ks value in the Phong lighting model. The bigger the value the stronger the reflection.
 */
export function AttrEngine$1__specularConstant_5E38073B(_, value) {
    return _.mk("specularConstant", value.toString());
}

/**
 * Controls the ratio of reflection of the specular lighting.
 * 
 * It represents the ks value in the Phong lighting model. The bigger the value the stronger the reflection.
 */
export function AttrEngine$1__specularConstant_Z524259A4(_, value) {
    return _.mk("specularConstant", int32ToString(value));
}

/**
 * For <feSpecularLighting>, specularExponent defines the exponent value for the specular term.
 * 
 * For <feSpotLight>, specularExponent defines the exponent value controlling the focus for the light source.
 */
export function AttrEngine$1__specularExponent_5E38073B(_, value) {
    return _.mk("specularExponent", value.toString());
}

/**
 * For <feSpecularLighting>, specularExponent defines the exponent value for the specular term.
 * 
 * For <feSpotLight>, specularExponent defines the exponent value controlling the focus for the light source.
 */
export function AttrEngine$1__specularExponent_Z524259A4(_, value) {
    return _.mk("specularExponent", int32ToString(value));
}

/**
 * The URL of the embeddable content.
 */
export function AttrEngine$1__src_Z721C83C5(_, value) {
    return _.mk("src", value);
}

/**
 * Language of the track text data. It must be a valid BCP 47 language tag.
 * 
 * If the kind attribute is set to subtitles, then srclang must be defined.
 */
export function AttrEngine$1__srcLang_Z721C83C5(_, value) {
    return _.mk("srclang", value);
}

/**
 * One or more responsive image candidates.
 */
export function AttrEngine$1__srcset_Z721C83C5(_, value) {
    return _.mk("srcset", value);
}

/**
 * Defines the first number if other than 1.
 */
export function AttrEngine$1__start_Z721C83C5(_, value) {
    return _.mk("start", value);
}

/**
 * Defines the standard deviation for the blur operation.
 */
export function AttrEngine$1__stdDeviation_5E38073B(_, value) {
    return _.mk("stdDeviation", value.toString());
}

/**
 * Defines the standard deviation for the blur operation.
 */
export function AttrEngine$1__stdDeviation_Z524259A4(_, value) {
    return _.mk("stdDeviation", int32ToString(value));
}

/**
 * Defines the standard deviation for the blur operation.
 */
export function AttrEngine$1__stdDeviation_7B00E9A0(_, xAxis, yAxis) {
    return _.mk("stdDeviation", (xAxis.toString() + ",") + yAxis.toString());
}

/**
 * Defines the standard deviation for the blur operation.
 */
export function AttrEngine$1__stdDeviation_Z37302880(_, xAxis, yAxis) {
    return _.mk("stdDeviation", (int32ToString(xAxis) + ",") + int32ToString(yAxis));
}

/**
 * Indicates the stepping interval.
 */
export function AttrEngine$1__step_5E38073B(_, value) {
    return _.mk("step", value.toString());
}

/**
 * Indicates the stepping interval.
 */
export function AttrEngine$1__step_Z524259A4(_, value) {
    return _.mk("step", int32ToString(value));
}

/**
 * The slot global attribute assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the slot element whose name attribute's value matches that slot attribute's value.
 */
export function AttrEngine$1__slot_Z721C83C5(_, value) {
    return _.mk("slot", value);
}

/**
 * SVG attribute to indicate what color to use at a gradient stop.
 */
export function AttrEngine$1__stopColor_Z721C83C5(_, value) {
    return _.mk("stop-color", value);
}

/**
 * SVG attribute to define the opacity of a given color gradient stop.
 */
export function AttrEngine$1__stopOpacity_5E38073B(_, value) {
    return _.mk("stop-opacity", value.toString());
}

/**
 * SVG attribute to define the opacity of a given color gradient stop.
 */
export function AttrEngine$1__stopOpacity_Z524259A4(_, value) {
    return _.mk("stop-opacity", int32ToString(value));
}

/**
 * Represents the ideal vertical position of the strikethrough.
 * 
 * The strikethrough position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__strikethroughPosition_5E38073B(_, value) {
    return _.mk("strikethrough-position", value.toString());
}

/**
 * Represents the ideal vertical position of the strikethrough.
 * 
 * The strikethrough position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__strikethroughPosition_Z524259A4(_, value) {
    return _.mk("strikethrough-position", int32ToString(value));
}

/**
 * Represents the ideal vertical position of the strikethrough.
 * 
 * The strikethrough position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__strikethroughThickness_5E38073B(_, value) {
    return _.mk("strikethrough-thickness", value.toString());
}

/**
 * Represents the ideal thickness of the strikethrough.
 * 
 * The strikethrough thickness is expressed in the font's coordinate system.
 */
export function AttrEngine$1__strikethroughThickness_Z524259A4(_, value) {
    return _.mk("strikethrough-thickness", int32ToString(value));
}

/**
 * SVG attribute to define the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
 */
export function AttrEngine$1__stroke_Z721C83C5(_, color) {
    return _.mk("stroke", color);
}

/**
 * SVG attribute to define the width of the stroke to be applied to the shape.
 */
export function AttrEngine$1__strokeWidth_Z445F6BAF(_, value) {
    return _.mk("stroke-width", value);
}

/**
 * SVG attribute to define the width of the stroke to be applied to the shape.
 */
export function AttrEngine$1__strokeWidth_Z524259A4(_, value) {
    return _.mk("stroke-width", int32ToString(value) + "px");
}

export function AttrEngine$1__style_Z721C83C5(_, css) {
    return _.mk("style", css);
}

/**
 * Represents the height of the surface for a light filter primitive.
 */
export function AttrEngine$1__surfaceScale_5E38073B(_, value) {
    return _.mk("surfaceScale", value.toString());
}

/**
 * Represents the height of the surface for a light filter primitive.
 */
export function AttrEngine$1__surfaceScale_Z524259A4(_, value) {
    return _.mk("surfaceScale", int32ToString(value));
}

/**
 * Represents a list of supported language tags.
 * 
 * This list is matched against the language defined in the user preferences.
 */
export function AttrEngine$1__systemLanguage_Z721C83C5(_, value) {
    return _.mk("systemLanguage", value);
}

/**
 * The `tabindex` global attribute indicates that its element can be focused,
 * and where it participates in sequential keyboard navigation (usually with the Tab key, hence the name).
 */
export function AttrEngine$1__tabIndex_Z524259A4(_, index) {
    return _.mk("tabindex", int32ToString(index));
}

/**
 * Controls browser behavior when opening a link.
 */
export function AttrEngine$1__target_Z721C83C5(_, frameName) {
    return _.mk("target", frameName);
}

/**
 * Determines the positioning in horizontal direction of the convolution matrix relative to a
 * given target pixel in the input image.
 * 
 * The leftmost column of the matrix is column number zero.
 * 
 * The value must be such that:
 * 
 * 0 <= targetX < orderX.
 */
export function AttrEngine$1__targetX_Z524259A4(_, index) {
    return _.mk("targetX", int32ToString(index));
}

/**
 * Determines the positioning in vertical direction of the convolution matrix relative to a
 * given target pixel in the input image.
 * 
 * The topmost row of the matrix is row number zero.
 * 
 * The value must be such that:
 * 
 * 0 <= targetY < orderY.
 */
export function AttrEngine$1__targetY_Z524259A4(_, index) {
    return _.mk("targetY", int32ToString(index));
}

/**
 * A shorthand for using custom("data-testid", value). Useful for referencing elements when testing code.
 */
export function AttrEngine$1__testId_Z721C83C5(_, value) {
    return _.mk("data-testid", value);
}

/**
 * Specifies the width of the space into which the text will draw.
 * 
 * The user agent will ensure that the text does not extend farther than that distance, using the method or methods
 * specified by the lengthAdjust attribute.
 */
export function AttrEngine$1__textLength_Z445F6BAF(_, value) {
    return _.mk("textLength", value);
}

/**
 * Specifies the width of the space into which the text will draw.
 * 
 * The user agent will ensure that the text does not extend farther than that distance, using the method or methods
 * specified by the lengthAdjust attribute.
 */
export function AttrEngine$1__textLength_Z524259A4(_, value) {
    return _.mk("textLength", int32ToString(value));
}

/**
 * The title global attribute contains text representing advisory information related to the element it belongs to.
 */
export function AttrEngine$1__title_Z721C83C5(_, value) {
    return _.mk("title", value);
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_5E38073B(_, value) {
    return _.mk("to", value.toString());
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_508CA214(_, values) {
    return _.mk("to", join(" ", map((x) => x.toString(), values)));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_Z524259A4(_, value) {
    return _.mk("to", int32ToString(value));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_Z5D8246D(_, values) {
    return _.mk("to", join(" ", map(int32ToString, values)));
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_Z721C83C5(_, value) {
    return _.mk("to", value);
}

/**
 * Indicates the initial value of the attribute that will be modified during the animation.
 * 
 * When used with the `to` attribute, the animation will change the modified attribute from
 * the from value to the to value.
 * 
 * When used with the `by` attribute, the animation will change the attribute relatively
 * from the from value by the value specified in by.
 */
export function AttrEngine$1__to$0027_5D66A394(_, values) {
    return _.mk("to", join(" ", values));
}

/**
 * Defines a list of transform definitions that are applied to an element and the element's children.
 */
export function AttrEngine$1__transform_124E45BF(_, transform) {
    return _.mk("transform", transform);
}

/**
 * Defines a list of transform definitions that are applied to an element and the element's children.
 */
export function AttrEngine$1__transform_45017D10(_, transforms) {
    return _.mk("transform", join(" ", map((s) => fold((ins, toReplace) => replace(ins, toReplace, ""), s, ofArray(["px", "deg"])), map((x) => x, transforms))));
}

/**
 * Sets the `type` attribute for the element.
 */
export function AttrEngine$1__type$0027_Z721C83C5(_, value) {
    return _.mk("type", value);
}

/**
 * Represents the ideal vertical position of the underline.
 * 
 * The underline position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__underlinePosition_5E38073B(_, value) {
    return _.mk("underline-position", value.toString());
}

/**
 * Represents the ideal vertical position of the underline.
 * 
 * The underline position is expressed in the font's coordinate system.
 */
export function AttrEngine$1__underlinePosition_Z524259A4(_, value) {
    return _.mk("underline-position", int32ToString(value));
}

/**
 * Represents the ideal thickness of the underline.
 * 
 * The underline thickness is expressed in the font's coordinate system.
 */
export function AttrEngine$1__underlineThickness_5E38073B(_, value) {
    return _.mk("underline-thickness", value.toString());
}

/**
 * Represents the ideal thickness of the underline.
 * 
 * The underline thickness is expressed in the font's coordinate system.
 */
export function AttrEngine$1__underlineThickness_Z524259A4(_, value) {
    return _.mk("underline-thickness", int32ToString(value));
}

/**
 * A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element.
 */
export function AttrEngine$1__usemap_Z721C83C5(_, value) {
    return _.mk("usemap", value);
}

export function AttrEngine$1__value_Z721C83C5(_, value) {
    return _.mk("value", value);
}

/**
 * The values attribute has different meanings, depending upon the context where itʼs used,
 * either it defines a sequence of values used over the course of an animation, or itʼs a
 * list of numbers for a color matrix, which is interpreted differently depending on the
 * type of color change to be performed. See: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
 */
export function AttrEngine$1__values_Z721C83C5(_, value) {
    return _.mk("values", value);
}

/**
 * Specifies the width of elements listed here. For all other elements, use the CSS height property.
 * 
 * HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
 * 
 * SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
 * <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
 * <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
 * <mask>, <pattern>
 */
export function AttrEngine$1__width_Z445F6BAF(_, value) {
    return _.mk("width", value);
}

/**
 * Specifies the width of elements listed here. For all other elements, use the CSS height property.
 * 
 * HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
 * 
 * SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
 * <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
 * <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
 * <mask>, <pattern>
 */
export function AttrEngine$1__width_Z524259A4(_, value) {
    return _.mk("width", int32ToString(value));
}

/**
 * SVG attribute to define a x-axis coordinate in the user coordinate system.
 */
export function AttrEngine$1__x_Z445F6BAF(_, value) {
    return _.mk("x", value);
}

/**
 * SVG attribute to define a x-axis coordinate in the user coordinate system.
 */
export function AttrEngine$1__x_Z524259A4(_, value) {
    return _.mk("x", int32ToString(value));
}

/**
 * The x1 attribute is used to specify the first x-coordinate for drawing an SVG element that
 * requires more than one coordinate. Elements that only need one coordinate use the x attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__x1_Z445F6BAF(_, value) {
    return _.mk("x1", value);
}

/**
 * The x1 attribute is used to specify the first x-coordinate for drawing an SVG element that
 * requires more than one coordinate. Elements that only need one coordinate use the x attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__x1_Z524259A4(_, value) {
    return _.mk("x1", int32ToString(value));
}

/**
 * The x2 attribute is used to specify the second x-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the x attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__x2_Z445F6BAF(_, value) {
    return _.mk("x2", value);
}

/**
 * The x2 attribute is used to specify the second x-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the x attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__x2_Z524259A4(_, value) {
    return _.mk("x2", int32ToString(value));
}

/**
 * Specifies the XML Namespace of the document.
 * 
 * Default value is "http://www.w3.org/1999/xhtml".
 * 
 * This is required in documents parsed with XML parsers, and optional in text/html documents.
 */
export function AttrEngine$1__xmlns_Z721C83C5(_, value) {
    return _.mk("xmlns", value);
}

/**
 * SVG attribute to define a y-axis coordinate in the user coordinate system.
 */
export function AttrEngine$1__y_Z445F6BAF(_, value) {
    return _.mk("y", value);
}

/**
 * SVG attribute to define a y-axis coordinate in the user coordinate system.
 */
export function AttrEngine$1__y_Z524259A4(_, value) {
    return _.mk("y", int32ToString(value));
}

/**
 * The y1 attribute is used to specify the first y-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the y attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__y1_Z445F6BAF(_, value) {
    return _.mk("y1", value);
}

/**
 * The y1 attribute is used to specify the first y-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the y attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__y1_Z524259A4(_, value) {
    return _.mk("y1", int32ToString(value));
}

/**
 * The y2 attribute is used to specify the second y-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the y attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__y2_Z445F6BAF(_, value) {
    return _.mk("y2", value);
}

/**
 * The y2 attribute is used to specify the second y-coordinate for drawing an SVG element that requires
 * more than one coordinate. Elements that only need one coordinate use the y attribute instead.
 * 
 * Two elements are using this attribute: <line>, and <linearGradient>
 */
export function AttrEngine$1__y2_Z524259A4(_, value) {
    return _.mk("y2", int32ToString(value));
}

/**
 * Defines the location along the z-axis for a light source in the coordinate system established by the
 * primitiveUnits attribute on the <filter> element, assuming that, in the initial coordinate system,
 * the positive z-axis comes out towards the person viewing the content and assuming that one unit along
 * the z-axis equals one unit in x and y.
 */
export function AttrEngine$1__z_Z445F6BAF(_, value) {
    return _.mk("z", value);
}

/**
 * Defines the location along the z-axis for a light source in the coordinate system established by the
 * primitiveUnits attribute on the <filter> element, assuming that, in the initial coordinate system,
 * the positive z-axis comes out towards the person viewing the content and assuming that one unit along
 * the z-axis equals one unit in x and y.
 */
export function AttrEngine$1__z_Z524259A4(_, value) {
    return _.mk("z", int32ToString(value));
}

/**
 * Specifies that repeat iterations are not cumulative.
 */
export function AttrEngine$1__get_accumulateNone(_) {
    return _.mk("accumulate", "none");
}

/**
 * Specifies that each repeat iteration after the first builds upon
 * the last value of the previous iteration.
 */
export function AttrEngine$1__get_accumulateSum(_) {
    return _.mk("accumulate", "sum");
}

/**
 * Specifies that the animation will override the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_additiveReplace(_) {
    return _.mk("additive", "replace");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_additiveSum(_) {
    return _.mk("additive", "sum");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineAlphabetic(_) {
    return _.mk("alignment-baseline", "alphabetic");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineBaseline(_) {
    return _.mk("alignment-baseline", "baseline");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineBottom(_) {
    return _.mk("alignment-baseline", "bottom");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineCenter(_) {
    return _.mk("alignment-baseline", "center");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineCentral(_) {
    return _.mk("alignment-baseline", "central");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineHanging(_) {
    return _.mk("alignment-baseline", "hanging");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineIdeographic(_) {
    return _.mk("alignment-baseline", "ideographic");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineMathematical(_) {
    return _.mk("alignment-baseline", "mathematical");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineMiddle(_) {
    return _.mk("alignment-baseline", "middle");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineTextAfterEdge(_) {
    return _.mk("alignment-baseline", "text-after-edge");
}

/**
 * Uses the dominant baseline choice of the parent. Matches the box’s
 * corresponding baseline to that of its parent.
 */
export function AttrEngine$1__get_alignmentBaselineTextBeforeEdge(_) {
    return _.mk("alignment-baseline", "text-before-edge");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineTextBottom(_) {
    return _.mk("alignment-baseline", "text-bottom");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineTextTop(_) {
    return _.mk("alignment-baseline", "text-top");
}

/**
 * Specifies that the animation will add to the underlying value of
 * the attribute and other lower priority animations.
 */
export function AttrEngine$1__get_alignmentBaselineTop(_) {
    return _.mk("alignment-baseline", "top");
}

/**
 * Controls whether the current document is allowed to gather information about the acceleration of
 * the device through the Accelerometer interface.
 */
export function AttrEngine$1__get_allowAccelerometer(_) {
    return _.mk("allow", "accelerometer");
}

/**
 * Controls whether the current document is allowed to gather information about the amount of light
 * in the environment around the device through the AmbientLightSensor interface.
 */
export function AttrEngine$1__get_allowAmbientLightSensor(_) {
    return _.mk("allow", "ambient-light-sensor");
}

/**
 * Controls whether the current document is allowed to autoplay media requested through the
 * HTMLMediaElement interface.
 * 
 * When this policy is disabled and there were no user gestures, the Promise returned by
 * HTMLMediaElement.play() will reject with a DOMException. The autoplay attribute on <audio> and
 * <video> elements will be ignored.
 */
export function AttrEngine$1__get_allowAutoplay(_) {
    return _.mk("allow", "autoplay");
}

/**
 * Controls whether the use of the Battery Status API is allowed.
 * 
 * When this policy is disabled, the  Promise returned by Navigator.getBattery() will reject with
 * a NotAllowedError DOMException.
 */
export function AttrEngine$1__get_allowBattery(_) {
    return _.mk("allow", "battery");
}

/**
 * Controls whether the current document is allowed to use video input devices.
 * 
 * When this policy is disabled, the Promise returned by getUserMedia() will reject with a
 * NotAllowedError DOMException.
 */
export function AttrEngine$1__get_allowCamera(_) {
    return _.mk("allow", "camera");
}

/**
 * Controls whether or not the current document is permitted to use the getDisplayMedia() method to
 * capture screen contents.
 * 
 * When this policy is disabled, the promise returned by getDisplayMedia() will reject with a
 * NotAllowedError if permission is not obtained to capture the display's contents.
 */
export function AttrEngine$1__get_allowDisplayCapture(_) {
    return _.mk("allow", "display-capture");
}

/**
 * Controls whether the current document is allowed to set document.domain.
 * 
 * When this policy is disabled, attempting to set document.domain will fail and cause a SecurityError
 * DOMException to be be thrown.
 */
export function AttrEngine$1__get_allowDocumentDomain(_) {
    return _.mk("allow", "document-domain");
}

/**
 * Controls whether the current document is allowed to use the Encrypted Media Extensions API (EME).
 * 
 * When this policy is disabled, the Promise returned by Navigator.requestMediaKeySystemAccess() will
 * reject with a DOMException.
 */
export function AttrEngine$1__get_allowEncryptedMedia(_) {
    return _.mk("allow", "encrypted-media");
}

/**
 * Controls whether tasks should execute in frames while they're not being rendered (e.g. if an iframe
 * is hidden or display: none).
 */
export function AttrEngine$1__get_allowExecutionWhileNotRendered(_) {
    return _.mk("allow", "execution-while-not-rendered");
}

/**
 * Controls whether tasks should execute in frames while they're outside of the visible viewport.
 */
export function AttrEngine$1__get_allowExecutionWhileOutOfViewport(_) {
    return _.mk("allow", "execution-while-out-of-viewport");
}

/**
 * Controls whether the current document is allowed to use Element.requestFullScreen().
 * 
 * When this policy is disabled, the returned Promise rejects with a TypeError DOMException.
 */
export function AttrEngine$1__get_allowFullscreen(_) {
    return _.mk("allow", "fullscreen");
}

/**
 * Controls whether the current document is allowed to use the Geolocation Interface.
 * 
 * When this policy is disabled, calls to getCurrentPosition() and watchPosition() will cause those
 * functions' callbacks to be invoked with a PositionError code of PERMISSION_DENIED.
 */
export function AttrEngine$1__get_allowGeolocation(_) {
    return _.mk("allow", "geolocation");
}

/**
 * Controls whether the current document is allowed to gather information about the orientation of the
 * device through the Gyroscope interface.
 */
export function AttrEngine$1__get_allowGyroscope(_) {
    return _.mk("allow", "gyroscope");
}

/**
 * Controls whether the current document is allowed to show layout animations.
 */
export function AttrEngine$1__get_allowLayoutAnimations(_) {
    return _.mk("allow", "layout-animations");
}

/**
 * Controls whether the current document is allowed to display images in legacy formats.
 */
export function AttrEngine$1__get_allowLegacyImageFormats(_) {
    return _.mk("allow", "legacy-image-formats");
}

/**
 * Controls whether the current document is allowed to gather information about the orientation of the
 * device through the Magnetometer interface.
 */
export function AttrEngine$1__get_allowMagnetometer(_) {
    return _.mk("allow", "magnetometer");
}

/**
 * Controls whether the current document is allowed to use audio input devices.
 * 
 * When this policy is disabled, the Promise returned by MediaDevices.getUserMedia() will reject
 * with a NotAllowedError.
 */
export function AttrEngine$1__get_allowMicrophone(_) {
    return _.mk("allow", "microphone");
}

/**
 * Controls whether the current document is allowed to use the Web MIDI API.
 * 
 * When this policy is disabled, the Promise returned by Navigator.requestMIDIAccess() will reject
 * with a DOMException.
 */
export function AttrEngine$1__get_allowMidi(_) {
    return _.mk("allow", "midi");
}

/**
 * Controls the availability of mechanisms that enables the page author to take control over the behavior
 * of spatial navigation, or to cancel it outright.
 */
export function AttrEngine$1__get_allowNavigationOverride(_) {
    return _.mk("allow", "navigation-override");
}

/**
 * Controls whether the current document is allowed to download and display large images.
 */
export function AttrEngine$1__get_allowOversizedImages(_) {
    return _.mk("allow", "oversized-images");
}

/**
 * Controls whether the current document is allowed to use the Payment Request API.
 * 
 * When this policy is enabled, the PaymentRequest() constructor will throw a SecurityError DOMException.
 */
export function AttrEngine$1__get_allowPayment(_) {
    return _.mk("allow", "payment");
}

/**
 * Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via
 * the corresponding API.
 */
export function AttrEngine$1__get_allowPictureInPicture(_) {
    return _.mk("allow", "picture-in-picture");
}

/**
 * Controls whether the current document is allowed to use the Web Authentication API to create, store,
 * and retreive public-key credentials.
 */
export function AttrEngine$1__get_allowPublickeyCredentials(_) {
    return _.mk("allow", "publickey-credentials");
}

/**
 * Controls whether the current document is allowed to make synchronous XMLHttpRequest requests.
 */
export function AttrEngine$1__get_allowSyncXhr(_) {
    return _.mk("allow", "sync-xhr");
}

/**
 * Controls whether the current document is allowed to use the WebUSB API.
 */
export function AttrEngine$1__get_allowUsb(_) {
    return _.mk("allow", "usb");
}

/**
 * Controls whether the current document is allowed to use Wake Lock API to indicate that
 * device should not enter power-saving mode.
 */
export function AttrEngine$1__get_allowWakeLock(_) {
    return _.mk("allow", "wake-lock");
}

/**
 * Controls whether or not the current document is allowed to use the WebXR Device API to interact
 * with a WebXR session.
 */
export function AttrEngine$1__get_allowXrSpatialTracking(_) {
    return _.mk("allow", "xr-spatial-tracking");
}

/**
 * A list of choices appears and the currently selected suggestion also
 * appears inline.
 */
export function AttrEngine$1__get_ariaAutocompleteBoth(_) {
    return _.mk("aria-autocomplete", "both");
}

/**
 * The system provides text after the caret as a suggestion for how to
 * complete the field.
 */
export function AttrEngine$1__get_ariaAutocompleteInlinedAfterCaret(_) {
    return _.mk("aria-autocomplete", "inline");
}

/**
 * A list of choices appears from which the user can choose.
 */
export function AttrEngine$1__get_ariaAutocompleteList(_) {
    return _.mk("aria-autocomplete", "list");
}

/**
 * No input completion suggestions are provided.
 */
export function AttrEngine$1__get_ariaAutocompleteNone(_) {
    return _.mk("aria-autocomplete", "none");
}

/**
 * Indicates a mixed mode value for a tri-state checkbox or
 * `menuitemcheckbox`.
 */
export function AttrEngine$1__get_ariaCheckedMixed(_) {
    return _.mk("aria-checked", "mixed");
}

/**
 * A duplicate of the source object will be dropped into the target.
 */
export function AttrEngine$1__get_ariaDropEffectCopy(_) {
    return _.mk("aria-dropeffect", "copy");
}

/**
 * A function supported by the drop target is executed, using the drag
 * source as an input.
 */
export function AttrEngine$1__get_ariaDropEffectExecute(_) {
    return _.mk("aria-dropeffect", "execute");
}

/**
 * A reference or shortcut to the dragged object will be created in the
 * target object.
 */
export function AttrEngine$1__get_ariaDropEffectLink(_) {
    return _.mk("aria-dropeffect", "link");
}

/**
 * The source object will be removed from its current location and
 * dropped into the target.
 */
export function AttrEngine$1__get_ariaDropEffectMove(_) {
    return _.mk("aria-dropeffect", "move");
}

/**
 * No operation can be performed; effectively cancels the drag
 * operation if an attempt is made to drop on this object. Ignored if
 * combined with any other token value. e.g. 'none copy' is equivalent
 * to a 'copy' value.
 */
export function AttrEngine$1__get_ariaDropEffectNone(_) {
    return _.mk("aria-dropeffect", "none");
}

/**
 * There is a popup menu or dialog that allows the user to choose one
 * of the drag operations (copy, move, link, execute) and any other
 * drag functionality, such as cancel.
 */
export function AttrEngine$1__get_ariaDropEffectPopup(_) {
    return _.mk("aria-dropeffect", "popup");
}

/**
 * A grammatical error was detected.
 */
export function AttrEngine$1__get_ariaInvalidGrammar(_) {
    return _.mk("aria-invalid", "grammar");
}

/**
 * A spelling error was detected.
 */
export function AttrEngine$1__get_ariaInvalidSpelling(_) {
    return _.mk("aria-invalid", "spelling");
}

/**
 * Indicates that updates to the region have the highest priority and
 * should be presented the user immediately.
 */
export function AttrEngine$1__get_ariaLiveAssertive(_) {
    return _.mk("aria-live", "assertive");
}

/**
 * Indicates that updates to the region should not be presented to the
 * user unless the used is currently focused on that region.
 */
export function AttrEngine$1__get_ariaLiveOff(_) {
    return _.mk("aria-live", "off");
}

/**
 * Indicates that updates to the region should be presented at the next
 * graceful opportunity, such as at the end of speaking the current
 * sentence or when the user pauses typing.
 */
export function AttrEngine$1__get_ariaLivePolite(_) {
    return _.mk("aria-live", "polite");
}

/**
 * The element is oriented horizontally.
 */
export function AttrEngine$1__get_ariaOrientationHorizontal(_) {
    return _.mk("aria-orientation", "horizontal");
}

/**
 * The element is oriented vertically.
 */
export function AttrEngine$1__get_ariaOrientationVertical(_) {
    return _.mk("aria-orientation", "vertical");
}

/**
 * Indicates a mixed mode value for a tri-state toggle button.
 */
export function AttrEngine$1__get_ariaPressedMixed(_) {
    return _.mk("aria-pressed", "mixed");
}

/**
 * Element nodes are added to the DOM within the live region.
 */
export function AttrEngine$1__get_ariaRelevantAdditions(_) {
    return _.mk("aria-relevant", "additions");
}

/**
 * Equivalent to the combination of all values, "additions removals
 * text".
 */
export function AttrEngine$1__get_ariaRelevantAll(_) {
    return _.mk("aria-relevant", "all");
}

/**
 * Text or element nodes within the live region are removed from the
 * DOM.
 */
export function AttrEngine$1__get_ariaRelevantRemovals(_) {
    return _.mk("aria-relevant", "removals");
}

/**
 * Text is added to any DOM descendant nodes of the live region.
 */
export function AttrEngine$1__get_ariaRelevantText(_) {
    return _.mk("aria-relevant", "text");
}

/**
 * Items are sorted in ascending order by this column.
 */
export function AttrEngine$1__get_ariaSortAscending(_) {
    return _.mk("aria-sort", "ascending");
}

/**
 * Items are sorted in descending order by this column.
 */
export function AttrEngine$1__get_ariaSortDescending(_) {
    return _.mk("aria-sort", "descending");
}

/**
 * There is no defined sort applied to the column.
 */
export function AttrEngine$1__get_ariaSortNone(_) {
    return _.mk("aria-sort", "none");
}

/**
 * A sort algorithm other than ascending or descending has been
 * applied.
 */
export function AttrEngine$1__get_ariaSortOther(_) {
    return _.mk("aria-sort", "other");
}

/**
 * Applies to <audio> elements.
 */
export function AttrEngine$1__get_asAudio(_) {
    return _.mk("as", "audio");
}

/**
 * Applies to <iframe> and <frame> elements.
 */
export function AttrEngine$1__get_asDocument(_) {
    return _.mk("as", "document");
}

/**
 * Applies to <embed> elements.
 */
export function AttrEngine$1__get_asEmbed(_) {
    return _.mk("as", "embed");
}

/**
 * Applies to fetch and XHR.
 * 
 * This value also requires <link> to contain the crossorigin attribute.
 */
export function AttrEngine$1__get_asFetch(_) {
    return _.mk("as", "fetch");
}

/**
 * Applies to CSS @font-face.
 */
export function AttrEngine$1__get_asFont(_) {
    return _.mk("as", "font");
}

/**
 * Applies to <img> and <picture> elements with srcset or imageset attributes,
 * SVG <image> elements, and CSS *-image rules.
 */
export function AttrEngine$1__get_asImage(_) {
    return _.mk("as", "image");
}

/**
 * Applies to <object> elements.
 */
export function AttrEngine$1__get_asObject(_) {
    return _.mk("as", "object");
}

/**
 * Applies to <script> elements, Worker importScripts.
 */
export function AttrEngine$1__get_asScript(_) {
    return _.mk("as", "script");
}

/**
 * Applies to <link rel=stylesheet> elements, and CSS @import.
 */
export function AttrEngine$1__get_asStyle(_) {
    return _.mk("as", "style");
}

/**
 * Applies to <track> elements.
 */
export function AttrEngine$1__get_asTrack(_) {
    return _.mk("as", "track");
}

/**
 * Applies to <video> elements.
 */
export function AttrEngine$1__get_asVideo(_) {
    return _.mk("as", "video");
}

/**
 * Applies to Worker and SharedWorker.
 */
export function AttrEngine$1__get_asWorker(_) {
    return _.mk("as", "worker");
}

/**
 * All letters should default to uppercase
 */
export function AttrEngine$1__get_autoCapitalizeCharacters(_) {
    return _.mk("autocapitalize", "characters");
}

/**
 * No autocapitalization is applied (all letters default to lowercase)
 */
export function AttrEngine$1__get_autoCapitalizeOff(_) {
    return _.mk("autocapitalize", "off");
}

/**
 * The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
 */
export function AttrEngine$1__get_autoCapitalizeOn$0027(_) {
    return _.mk("autocapitalize", "on");
}

/**
 * The first letter of each word defaults to a capital letter; all other letters default to lowercase
 */
export function AttrEngine$1__get_autoCapitalizeWords(_) {
    return _.mk("autocapitalize", "words");
}

/**
 * Specifies that the animation function will jump from one value to the next
 * without any interpolation.
 */
export function AttrEngine$1__get_calcModeDiscrete(_) {
    return _.mk("calcMode", "discrete");
}

/**
 * Simple linear interpolation between values is used to calculate the animation
 * function. Except for <animateMotion>, this is the default value.
 */
export function AttrEngine$1__get_calcModeLinear(_) {
    return _.mk("calcMode", "linear");
}

/**
 * Defines interpolation to produce an even pace of change across the animation.
 * 
 * This is only supported for values that define a linear numeric range, and for
 * which some notion of "distance" between points can be calculated (e.g. position,
 * width, height, etc.).
 * 
 * If paced is specified, any keyTimes or keySplines will be ignored.
 * 
 * For <animateMotion>, this is the default value.
 */
export function AttrEngine$1__get_calcModePaced(_) {
    return _.mk("calcMode", "paced");
}

/**
 * Interpolates from one value in the values list to the next according to a time
 * function defined by a cubic Bézier spline.
 * 
 * The points of the spline are defined in the keyTimes attribute, and the control
 * points for each interval are defined in the keySplines attribute.
 */
export function AttrEngine$1__get_calcModeSpline(_) {
    return _.mk("calcMode", "spline");
}

export function AttrEngine$1__get_charsetUtf8(_) {
    return _.mk("charset", "UTF-8");
}

/**
 * Indicates that all coordinates inside the <clipPath> element refer to the user
 * coordinate system as defined when the clipping path was created.
 */
export function AttrEngine$1__get_clipPathUserSpaceOnUse(_) {
    return _.mk("clip-path", "userSpaceOnUse");
}

/**
 * Indicates that all coordinates inside the <clipPath> element are relative to
 * the bounding box of the element the clipping path is applied to.
 * 
 * It means that the origin of the coordinate system is the top left corner of the
 * object bounding box and the width and height of the object bounding box are
 * considered to have a length of 1 unit value.
 */
export function AttrEngine$1__get_clipPathObjectBoundingBox(_) {
    return _.mk("clip-path", "objectBoundingBox");
}

/**
 * Determines the "insideness" of a point in the shape by drawing a ray from that
 * point to infinity in any direction and counting the number of path segments
 * from the given shape that the ray crosses.
 * 
 * If this number is odd, the point is inside; if even, the point is outside.
 */
export function AttrEngine$1__get_clipRuleEvenodd(_) {
    return _.mk("clip-rule", "evenodd");
}

export function AttrEngine$1__get_clipRuleInheritFromParent(_) {
    return _.mk("clip-rule", "inherit");
}

/**
 * Determines the "insideness" of a point in the shape by drawing a ray from that
 * point to infinity in any direction, and then examining the places where a
 * segment of the shape crosses the ray.
 */
export function AttrEngine$1__get_clipRuleNonzero(_) {
    return _.mk("clip-rule", "nonzero");
}

/**
 * Indicates that the user agent can choose either the sRGB or linearRGB spaces
 * for color interpolation. This option indicates that the author doesn't require
 * that color interpolation occur in a particular color space.
 */
export function AttrEngine$1__get_colorInterpolationAuto(_) {
    return _.mk("color-interpolation", "auto");
}

/**
 * Indicates that color interpolation should occur in the linearized RGB color
 * space as described in the sRGB specification.
 */
export function AttrEngine$1__get_colorInterpolationLinearRGB(_) {
    return _.mk("color-interpolation", "linearRGB");
}

/**
 * Indicates that color interpolation should occur in the sRGB color space.
 */
export function AttrEngine$1__get_colorInterpolationSRGB(_) {
    return _.mk("color-interpolation", "sRGB");
}

/**
 * Indicates that the user agent can choose either the sRGB or linearRGB spaces
 * for color interpolation. This option indicates that the author doesn't require
 * that color interpolation occur in a particular color space.
 */
export function AttrEngine$1__get_colorInterpolationFiltersAuto(_) {
    return _.mk("color-interpolation-filters", "auto");
}

/**
 * Indicates that color interpolation should occur in the linearized RGB color
 * space as described in the sRGB specification.
 */
export function AttrEngine$1__get_colorInterpolationFiltersLinearRGB(_) {
    return _.mk("color-interpolation-filters", "linearRGB");
}

/**
 * Indicates that color interpolation should occur in the sRGB color space.
 */
export function AttrEngine$1__get_colorInterpolationFiltersSRGB(_) {
    return _.mk("color-interpolation-filters", "sRGB");
}

export function AttrEngine$1__coordsRect_Z6C21C500(_, left, top, right, bottom) {
    return _.mk("coords", (((((int32ToString(left) + ",") + int32ToString(top)) + ",") + int32ToString(right)) + ",") + int32ToString(bottom));
}

export function AttrEngine$1__coordsCircle_4F7761DC(_, x, y, r) {
    return _.mk("coords", (((int32ToString(x) + ",") + int32ToString(y)) + ",") + int32ToString(r));
}

export function AttrEngine$1__coordsPoly_48A24E80(_, x1, y1, x2, y2, x3, y3) {
    return _.mk("coords", (((((((((int32ToString(x1) + ",") + int32ToString(y1)) + ",") + int32ToString(x2)) + ",") + int32ToString(y2)) + ",") + int32ToString(x3)) + ",") + int32ToString(y3));
}

/**
 * A cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential
 * is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server
 * does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin
 * HTTP header) the resource will be tainted and its usage restricted.
 */
export function AttrEngine$1__get_crossOriginAnonymous(_) {
    return _.mk("crossorigin", "anonymous");
}

/**
 * A cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential
 * sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server
 * does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP
 * header), the resource will be tainted and its usage restricted.
 */
export function AttrEngine$1__get_crossOriginUseCredentials(_) {
    return _.mk("crossorigin", "use-credentials");
}

/**
 * Lets the user agent decide.
 */
export function AttrEngine$1__get_dirAuto(_) {
    return _.mk("dir", "auto");
}

/**
 * Left to right - for languages that are written from left to right.
 */
export function AttrEngine$1__get_dirLtr(_) {
    return _.mk("dir", "ltr");
}

/**
 * Right to left - for languages that are written from right to left.
 */
export function AttrEngine$1__get_dirRtl(_) {
    return _.mk("dir", "rtl");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be alphabetic, the derived baseline-table is constructed
 * using the alphabetic baseline-table in the font, and the baseline-table font-size is changed to the value of the
 * font-size attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineAlphabetic(_) {
    return _.mk("dominant-baseline", "alphabetic");
}

/**
 * If this property occurs on a <text> element, then the computed value depends on the value of the writing-mode attribute.
 * 
 * If the writing-mode is horizontal, then the value of the dominant-baseline component is alphabetic, else if the writing-mode
 * is vertical, then the value of the dominant-baseline component is central.
 * 
 * If this property occurs on a <tspan>, <tref>,
 * <altGlyph> or <textPath> element, then the dominant-baseline and the baseline-table components remain the same as those of
 * the parent text content element.
 * 
 * If the computed baseline-shift value actually shifts the baseline, then the baseline-table
 * font-size component is set to the value of the font-size attribute on the element on which the dominant-baseline attribute
 * occurs, otherwise the baseline-table font-size remains the same as that of the element.
 * 
 * If there is no parent text content
 * element, the scaled-baseline-table value is constructed as above for <text> elements.
 */
export function AttrEngine$1__get_dominantBaselineAuto(_) {
    return _.mk("dominant-baseline", "auto");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be central. The derived baseline-table is constructed from the
 * defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of
 * baseline-table names: ideographic, alphabetic, hanging, mathematical. The baseline-table font-size is changed to the value
 * of the font-size attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineCentral(_) {
    return _.mk("dominant-baseline", "central");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be hanging, the derived baseline-table is constructed using the
 * hanging baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size attribute on
 * this element.
 */
export function AttrEngine$1__get_dominantBaselineHanging(_) {
    return _.mk("dominant-baseline", "hanging");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be ideographic, the derived baseline-table is constructed using
 * the ideographic baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size
 * attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineIdeographic(_) {
    return _.mk("dominant-baseline", "ideographic");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be mathematical, the derived baseline-table is constructed using
 * the mathematical baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size
 * attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineMathematical(_) {
    return _.mk("dominant-baseline", "mathematical");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be middle. The derived baseline-table is constructed from the
 * defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order
 * of baseline-table names: alphabetic, ideographic, hanging, mathematical. The baseline-table font-size is changed to the value
 * of the font-size attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineMiddle(_) {
    return _.mk("dominant-baseline", "middle");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be text-after-edge. The derived baseline-table is constructed
 * from the defined baselines in a baseline-table in the font. The choice of which font baseline-table to use from the
 * baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the font-size
 * attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineTextAfterEdge(_) {
    return _.mk("dominant-baseline", "text-after-edge");
}

/**
 * The baseline-identifier for the dominant-baseline is set to be text-before-edge. The derived baseline-table is constructed
 * from the defined baselines in a baseline-table in the font. The choice of which baseline-table to use from the baseline-tables
 * in the font is browser dependent. The baseline-table font-size is changed to the value of the font-size attribute on this element.
 */
export function AttrEngine$1__get_dominantBaselineTextBeforeEdge(_) {
    return _.mk("dominant-baseline", "text-before-edge");
}

/**
 * This value uses the top of the em box as the baseline.
 */
export function AttrEngine$1__get_dominantBaselineTextTop(_) {
    return _.mk("dominant-baseline", "text-top");
}

/**
 * This value specifies the simple duration as indefinite.
 */
export function AttrEngine$1__get_durIndefinite(_) {
    return _.mk("dur", "indefinite");
}

/**
 * This value specifies the simple duration as the intrinsic media duration.
 * 
 * This is only valid for elements that define media.
 */
export function AttrEngine$1__get_durMedia(_) {
    return _.mk("dur", "media");
}

/**
 * Indicates that the input image is extended along each of its borders as
 * necessary by duplicating the color values at the given edge of the input image.
 */
export function AttrEngine$1__get_edgeModeDuplicate(_) {
    return _.mk("edgeMode", "duplicate");
}

/**
 * Indicates that the input image is extended with pixel values of zero for
 * R, G, B and A.
 */
export function AttrEngine$1__get_edgeModeNone(_) {
    return _.mk("edgeMode", "none");
}

/**
 * Indicates that the input image is extended by taking the color values
 * from the opposite edge of the image.
 */
export function AttrEngine$1__get_edgeModeWrap(_) {
    return _.mk("edgeMode", "wrap");
}

/**
 * Keep the state of the last animation frame.
 */
export function AttrEngine$1__get_fillFreeze(_) {
    return _.mk("fill", "freeze");
}

/**
 * Keep the state of the first animation frame.
 */
export function AttrEngine$1__get_fillRemove(_) {
    return _.mk("fill", "remove");
}

/**
 * x, y, width and height represent values in the current coordinate system that results from
 * taking the current user coordinate system in place at the time when the <filter> element is
 * referenced (i.e., the user coordinate system for the element referencing the <filter> element
 * via a filter attribute).
 */
export function AttrEngine$1__get_filterUnitsUserSpaceOnUse(_) {
    return _.mk("filterUnits", "userSpaceOnUse");
}

/**
 * x, y, width and height represent fractions or percentages of the bounding box on the referencing
 * element.
 */
export function AttrEngine$1__get_filterUnitsObjectBoundingBox(_) {
    return _.mk("filterUnits", "objectBoundingBox");
}

/**
 * Indicates that the attributes represent values in the coordinate system that results from
 * taking the current user coordinate system in place at the time when the gradient element
 * is referenced (i.e., the user coordinate system for the element referencing the gradient
 * element via a fill or stroke property) and then applying the transform specified by
 * attribute gradientTransform.
 * 
 * Percentages represent values relative to the current SVG viewport.
 */
export function AttrEngine$1__get_gradientUnitsUserSpaceOnUse(_) {
    return _.mk("gradientUnits", "userSpaceOnUse");
}

/**
 * Indicates that the user coordinate system for the attributes is established using the
 * bounding box of the element to which the gradient is applied and then applying the
 * transform specified by attribute gradientTransform.
 * 
 * Percentages represent values relative to the bounding box for the object.
 */
export function AttrEngine$1__get_gradientUnitsObjectBoundingBox(_) {
    return _.mk("gradientUnits", "objectBoundingBox");
}

/**
 * Allows page authors to define a content policy for the current page.
 * 
 * Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site
 * scripting attacks.
 */
export function AttrEngine$1__get_httpEquivContentSecurityPolicy(_) {
    return _.mk("http-equiv", "content-security-policy");
}

/**
 * If specified, the content attribute must have the value "text/html; charset=utf-8".
 * 
 * Note: Can only be used in documents served with a text/html MIME type — not in documents served with an XML MIME type.
 */
export function AttrEngine$1__get_httpEquivContentType(_) {
    return _.mk("http-equiv", "content-type");
}

/**
 * Sets the name of the default CSS style sheet set.
 */
export function AttrEngine$1__get_httpEquivDefaultStyle(_) {
    return _.mk("http-equiv", "default-style");
}

/**
 * This instruction specifies:
 * 
 * The number of seconds until the page should be reloaded - only if the content attribute contains a positive integer.
 * 
 * The number of seconds until the page should redirect to another - only if the content attribute contains a positive integer followed by the string ';url=', and a valid URL.
 */
export function AttrEngine$1__get_httpEquivRefresh(_) {
    return _.mk("http-equiv", "refresh");
}

/**
 * If specified, the content attribute must have the value "IE=edge". User agents are required to ignore this pragma.
 */
export function AttrEngine$1__get_httpEquivXUaCompatible(_) {
    return _.mk("http-equiv", "x-ua-compatible");
}

/**
 * Represents an image snapshot of the SVG document under the filter region at the time that the
 * <filter> element was invoked, except only the alpha channel is used.
 */
export function AttrEngine$1__get_inBackgroundAlpha(_) {
    return _.mk("in", "BackgroundAlpha");
}

/**
 * Represents an image snapshot of the SVG document under the filter region at the time that the
 * <filter> element was invoked.
 */
export function AttrEngine$1__get_inBackgroundImage(_) {
    return _.mk("in", "BackgroundImage");
}

/**
 * An assigned name for the filter primitive.
 * 
 * If supplied, then graphics that result from processing this filter primitive can be referenced
 * by an in attribute on a subsequent filter primitive within the same filter element.
 */
export function AttrEngine$1__inCustom_Z721C83C5(_, name) {
    return _.mk("in", name);
}

/**
 * Represents the value of the fill property on the target element for the filter effect.
 * 
 * In many cases, the FillPaint is opaque everywhere, but that might not be the case if a shape is
 * painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
 */
export function AttrEngine$1__get_inFillPaint(_) {
    return _.mk("in", "FillPaint");
}

/**
 * Represents the graphics elements that were the original input into the <filter> element, except
 * that only the alpha channel is used.
 */
export function AttrEngine$1__get_inSourceAlpha(_) {
    return _.mk("in", "SourceAlpha");
}

/**
 * Represents the graphics elements that were the original input into the <filter> element.
 */
export function AttrEngine$1__get_inSourceGraphic(_) {
    return _.mk("in", "SourceGraphic");
}

/**
 * Represents the value of the stroke property on the target element for the filter effect.
 * 
 * In many cases, the StrokePaint is opaque everywhere, but that might not be the case if a shape
 * is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
 */
export function AttrEngine$1__get_inStrokePaint(_) {
    return _.mk("in", "StrokePaint");
}

/**
 * Represents an image snapshot of the SVG document under the filter region at the time that the
 * <filter> element was invoked, except only the alpha channel is used.
 */
export function AttrEngine$1__get_in2BackgroundAlpha(_) {
    return _.mk("in2", "BackgroundAlpha");
}

/**
 * Represents an image snapshot of the SVG document under the filter region at the time that the
 * <filter> element was invoked.
 */
export function AttrEngine$1__get_in2BackgroundImage(_) {
    return _.mk("in2", "BackgroundImage");
}

/**
 * An assigned name for the filter primitive.
 * 
 * If supplied, then graphics that result from processing this filter primitive can be referenced
 * by an in attribute on a subsequent filter primitive within the same filter element.
 */
export function AttrEngine$1__in2Custom_Z721C83C5(_, name) {
    return _.mk("in2", name);
}

/**
 * Represents the value of the fill property on the target element for the filter effect.
 * 
 * In many cases, the FillPaint is opaque everywhere, but that might not be the case if a shape is
 * painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
 */
export function AttrEngine$1__get_in2FillPaint(_) {
    return _.mk("in2", "FillPaint");
}

/**
 * Represents the graphics elements that were the original input into the <filter> element, except
 * that only the alpha channel is used.
 */
export function AttrEngine$1__get_in2SourceAlpha(_) {
    return _.mk("in2", "SourceAlpha");
}

/**
 * Represents the graphics elements that were the original input into the <filter> element.
 */
export function AttrEngine$1__get_in2SourceGraphic(_) {
    return _.mk("in2", "SourceGraphic");
}

/**
 * Represents the value of the stroke property on the target element for the filter effect.
 * 
 * In many cases, the StrokePaint is opaque everywhere, but that might not be the case if a shape
 * is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
 */
export function AttrEngine$1__get_in2StrokePaint(_) {
    return _.mk("in2", "StrokePaint");
}

export function AttrEngine$1__get_inputModeDecimal(_) {
    return _.mk("inputmode", "decimal");
}

export function AttrEngine$1__get_inputModeEmail(_) {
    return _.mk("inputmode", "email");
}

export function AttrEngine$1__get_inputModeNone(_) {
    return _.mk("inputmode", "none");
}

export function AttrEngine$1__get_inputModeNumeric(_) {
    return _.mk("inputmode", "numeric");
}

export function AttrEngine$1__get_inputModeSearch(_) {
    return _.mk("inputmode", "search");
}

export function AttrEngine$1__get_inputModeTel(_) {
    return _.mk("inputmode", "tel");
}

export function AttrEngine$1__get_inputModeUrl(_) {
    return _.mk("inputmode", "url");
}

/**
 * Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue
 * or text that is not English in an English language film.
 * 
 * Subtitles may contain additional content, usually extra background information. For example the text
 * at the beginning of the Star Wars films, or the date, time, and location of a scene.
 */
export function AttrEngine$1__get_kindSubtitles(_) {
    return _.mk("kind", "subtitles");
}

/**
 * Closed captions provide a transcription and possibly a translation of audio.
 * 
 * It may include important non-verbal information such as music cues or sound effects.
 * It may indicate the cue's source (e.g. music, text, character).
 * 
 * Suitable for users who are deaf or when the sound is muted.
 */
export function AttrEngine$1__get_kindCaptions(_) {
    return _.mk("kind", "captions");
}

/**
 * Textual description of the video content.
 * 
 * Suitable for users who are blind or where the video cannot be seen.
 */
export function AttrEngine$1__get_kindDescriptions(_) {
    return _.mk("kind", "descriptions");
}

/**
 * Chapter titles are intended to be used when the user is navigating the media resource.
 */
export function AttrEngine$1__get_kindChapters(_) {
    return _.mk("kind", "chapters");
}

/**
 * Tracks used by scripts. Not visible to the user.
 */
export function AttrEngine$1__get_kindMetadata(_) {
    return _.mk("kind", "metadata");
}

export function AttrEngine$1__get_lengthAdjustSpacing(_) {
    return _.mk("lengthAdjust", "spacing");
}

export function AttrEngine$1__get_lengthAdjustSpacingAndGlyphs(_) {
    return _.mk("lengthAdjust", "spacingAndGlyphs");
}

/**
 * Specifies that the markerWidth and markerUnits attributes and the contents of the <marker> element represent
 * values in a coordinate system which has a single unit equal the size in user units of the current stroke width
 * (see the stroke-width attribute) in place for the graphic object referencing the marker.
 */
export function AttrEngine$1__get_markerUnitsStrokeWidth(_) {
    return _.mk("markerUnits", "strokeWidth");
}

/**
 * Specifies that the markerWidth and markerUnits attributes and the contents of the <marker> element represent
 * values in the current user coordinate system in place for the graphic object referencing the marker (i.e.,
 * the user coordinate system for the element referencing the <marker> element via a marker, marker-start,
 * marker-mid, or marker-end property).
 */
export function AttrEngine$1__get_markerUnitsUserSpaceOnUse(_) {
    return _.mk("markerUnits", "userSpaceOnUse");
}

/**
 * Indicates that all coordinates inside the <mask> element are relative to the bounding box of the element the
 * mask is applied to.
 * 
 * A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
 */
export function AttrEngine$1__get_maskContentUnitsObjectBoundingBox(_) {
    return _.mk("maskContentUnits", "strokeWidth");
}

/**
 * Indicates that all coordinates inside the <mask> element refer to the user coordinate system as defined
 * when the mask was created.
 */
export function AttrEngine$1__get_maskContentUnitsUserSpaceOnUse(_) {
    return _.mk("maskContentUnits", "userSpaceOnUse");
}

/**
 * Indicates that all coordinates for the geometry attributes represent fractions or percentages of the bounding box
 * of the element to which the mask is applied.
 * 
 * A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
 */
export function AttrEngine$1__get_maskUnitsObjectBoundingBox(_) {
    return _.mk("maskUnits", "strokeWidth");
}

/**
 * Indicates that all coordinates for the geometry attributes refer to the user coordinate system as defined
 * when the mask was created.
 */
export function AttrEngine$1__get_maskUnitsUserSpaceOnUse(_) {
    return _.mk("maskUnits", "userSpaceOnUse");
}

/**
 * The final color has the hue and saturation of the top color, while using the luminosity of the
 * bottom color.
 * 
 * The effect preserves gray levels and can be used to colorize the foreground.
 */
export function AttrEngine$1__get_modeColor(_) {
    return _.mk("mode", "color");
}

/**
 * The final color is the result of inverting the bottom color, dividing the value by the top
 * color, and inverting that value.
 * 
 * A white foreground leads to no change. A foreground with the inverse color of the backdrop
 * leads to a black final image.
 * 
 * This blend mode is similar to multiply, but the foreground need only be as dark as the inverse
 * of the backdrop to make the final image black.
 */
export function AttrEngine$1__get_modeColorBurn(_) {
    return _.mk("mode", "color-burn");
}

/**
 * The final color is the result of dividing the bottom color by the inverse of the top color.
 * 
 * A black foreground leads to no change. A foreground with the inverse color of the backdrop
 * leads to a fully lit color.
 * 
 * This blend mode is similar to screen, but the foreground need only be as light as the inverse
 * of the backdrop to create a fully lit color.
 */
export function AttrEngine$1__get_modeColorDodge(_) {
    return _.mk("mode", "color-dodge");
}

/**
 * The final color is composed of the darkest values of each color channel.
 */
export function AttrEngine$1__get_modeDarken(_) {
    return _.mk("mode", "darken");
}

/**
 * The final color is the result of subtracting the darker of the two colors from the lighter
 * one.
 * 
 * A black layer has no effect, while a white layer inverts the other layer's color.
 */
export function AttrEngine$1__get_modeDifference(_) {
    return _.mk("mode", "difference");
}

/**
 * The final color is similar to difference, but with less contrast.
 * 
 * As with difference, a black layer has no effect, while a white layer inverts the other
 * layer's color.
 */
export function AttrEngine$1__get_modeExclusion(_) {
    return _.mk("mode", "exclusion");
}

/**
 * The final color is the result of multiply if the top color is darker, or screen if the top
 * color is lighter.
 * 
 * This blend mode is equivalent to overlay but with the layers swapped.
 * 
 * The effect is similar to shining a harsh spotlight on the backdrop.
 */
export function AttrEngine$1__get_modeHardLight(_) {
    return _.mk("mode", "hard-light");
}

/**
 * The final color has the hue of the top color, while using the saturation and luminosity of the
 * bottom color.
 */
export function AttrEngine$1__get_modeHue(_) {
    return _.mk("mode", "hue");
}

/**
 * The final color is composed of the lightest values of each color channel.
 */
export function AttrEngine$1__get_modeLighten(_) {
    return _.mk("mode", "lighten");
}

/**
 * The final color has the luminosity of the top color, while using the hue and saturation of the
 * bottom color.
 * 
 * This blend mode is equivalent to color, but with the layers swapped.
 */
export function AttrEngine$1__get_modeLuminosity(_) {
    return _.mk("mode", "luminosity");
}

/**
 * The final color is the result of multiplying the top and bottom colors.
 * 
 * A black layer leads to a black final layer, and a white layer leads to no change.
 * 
 * The effect is like two images printed on transparent film overlapping.
 */
export function AttrEngine$1__get_modeMultiply(_) {
    return _.mk("mode", "multiply");
}

/**
 * The final color is the top color, regardless of what the bottom color is.
 * 
 * The effect is like two opaque pieces of paper overlapping.
 */
export function AttrEngine$1__get_modeNormal(_) {
    return _.mk("mode", "normal");
}

/**
 * The final color is the result of multiply if the bottom color is darker, or screen if the
 * bottom color is lighter.
 * 
 * This blend mode is equivalent to hard-light but with the layers swapped.
 */
export function AttrEngine$1__get_modeOverlay(_) {
    return _.mk("mode", "overlay");
}

/**
 * The final color has the saturation of the top color, while using the hue and luminosity of the
 * bottom color.
 * 
 * A pure gray backdrop, having no saturation, will have no effect.
 */
export function AttrEngine$1__get_modeSaturation(_) {
    return _.mk("mode", "saturation");
}

/**
 * The final color is the result of inverting the colors, multiplying them, and inverting
 * that value.
 * 
 * A black layer leads to no change, and a white layer leads to a white final layer.
 * 
 * The effect is like two images shone onto a projection screen.
 */
export function AttrEngine$1__get_modeScreen(_) {
    return _.mk("mode", "screen");
}

/**
 * The final color is similar to hard-light, but softer.
 * 
 * This blend mode behaves similar to hard-light.
 * 
 * The effect is similar to shining a diffused spotlight on the backdrop.
 */
export function AttrEngine$1__get_modeSoftLight(_) {
    return _.mk("mode", "soft-light");
}

/**
 * This value indicates that the source graphic defined in the in attribute and the
 * destination graphic defined in the in2 attribute are combined using the following
 * formula:
 * 
 * result = k1*i1*i2 + k2*i1 + k3*i2 + k4
 * 
 * where:
 * 
 * i1 and i2 indicate the corresponding pixel channel values of the input image, which
 * map to in and in2 respectively, and k1,k2,k3,and k4 indicate the values of the
 * attributes with the same name.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorArithmetic(_) {
    return _.mk("operator", "arithmetic");
}

/**
 * Indicates that the parts of the source graphic defined in the in attribute, which overlap
 * the destination graphic defined in the in2 attribute, replace the destination graphic.
 * 
 * The parts of the destination graphic that do not overlap with the source graphic stay untouched.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorAtop(_) {
    return _.mk("operator", "atop");
}

/**
 * Fattens the source graphic defined in the in attribute.
 * 
 * Used with <feMorphology>
 */
export function AttrEngine$1__get_operatorDilate(_) {
    return _.mk("operator", "dilate");
}

/**
 * Thins the source graphic defined in the in attribute.
 * 
 * Used with <feMorphology>
 */
export function AttrEngine$1__get_operatorErode(_) {
    return _.mk("operator", "erode");
}

/**
 * Indicates that the parts of the source graphic defined in the in attribute that overlap the
 * destination graphic defined in the in2 attribute, replace the destination graphic.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorIn$0027(_) {
    return _.mk("operator", "in");
}

/**
 * Indicates that the sum of the source graphic defined in the in attribute and the destination
 * graphic defined in the in2 attribute is displayed.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorLighter(_) {
    return _.mk("operator", "lighter");
}

/**
 * Indicates that the parts of the source graphic defined in the in attribute that fall outside
 * the destination graphic defined in the in2 attribute, are displayed.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorOut(_) {
    return _.mk("operator", "out");
}

/**
 * Indicates that the source graphic defined in the in attribute is placed over the destination
 * graphic defined in the in2 attribute.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorOver(_) {
    return _.mk("operator", "over");
}

/**
 * Indicates that the non-overlapping regions of the source graphic defined in the in attribute
 * and the destination graphic defined in the in2 attribute are combined.
 * 
 * Used with <feComposite>
 */
export function AttrEngine$1__get_operatorXor(_) {
    return _.mk("operator", "xor");
}

/**
 * Indicates that all coordinates inside the <pattern> element are relative to the bounding box of the element
 * the pattern is applied to.
 * 
 * A bounding box could be considered the same as if the content of the <pattern> were bound to mk "0 0 1 1"
 * viewbox for a pattern tile of width and height of 100%.
 */
export function AttrEngine$1__get_patternContentUnitsObjectBoundingBox(_) {
    return _.mk("patternContentUnits", "objectBoundingBox");
}

/**
 * Indicates that all coordinates inside the <pattern> element refer to the user coordinate system as defined
 * when the pattern tile was created.
 */
export function AttrEngine$1__get_patternContentUnitsUserSpaceOnUse(_) {
    return _.mk("patternContentUnits", "userSpaceOnUse");
}

/**
 * Indicates that all coordinates for the geometry properties represent fractions or percentages of the bounding
 * box of the element to which the mask is applied.
 * 
 * A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
 */
export function AttrEngine$1__get_patternUnitsObjectBoundingBox(_) {
    return _.mk("patternUnits", "objectBoundingBox");
}

/**
 * Indicates that all coordinates for the geometry properties refer to the user coordinate system as defined
 * when the pattern was applied.
 */
export function AttrEngine$1__get_patternUnitsUserSpaceOnUse(_) {
    return _.mk("patternUnits", "userSpaceOnUse");
}

/**
 * Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
 */
export function AttrEngine$1__get_preloadAuto(_) {
    return _.mk("preload", "auto");
}

/**
 * Indicates that only video metadata (e.g. length) is fetched.
 */
export function AttrEngine$1__get_preloadMetadata(_) {
    return _.mk("preload", "metadata");
}

/**
 * Indicates that the video should not be preloaded.
 */
export function AttrEngine$1__get_preloadNone(_) {
    return _.mk("preload", "none");
}

/**
 * Do not force uniform scaling.
 * 
 * Scale the graphic content of the given element non-uniformly if necessary such that the element's
 * bounding box exactly matches the viewport rectangle. Note that if <align> is none, then the optional
 * <meetOrSlice> value is ignored.
 */
export function AttrEngine$1__get_preserveAspectRatioNone(_) {
    return _.mk("preserveAspectRatio", "none");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMin meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMin slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMin meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMin slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMin meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMin slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMid meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMid slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMid meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMid slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMid meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMid slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMax meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMinYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMax slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMax meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMidYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMax slice");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewBox is visible within the viewport.
 * 
 * The viewBox is scaled up as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the graphic does not match the viewport, some of
 * the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
 * the viewBox will draw will be smaller than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMax meet");
}

/**
 * Scale the graphic such that:
 * 
 * Aspect ratio is preserved.
 * 
 * The entire viewport is covered by the viewBox.
 * 
 * The viewBox is scaled down as much as possible, while still meeting the other criteria.
 * 
 * In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
 * viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
 * viewBox will draw is larger than the viewport).
 */
export function AttrEngine$1__get_preserveAspectRatioXMaxYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMax slice");
}

/**
 * Indicates that any length values within the filter definitions represent fractions or
 * percentages of the bounding box on the referencing element.
 */
export function AttrEngine$1__get_primitiveUnitsObjectBoundingBox(_) {
    return _.mk("primitiveUnits", "objectBoundingBox");
}

/**
 * Indicates that any length values within the filter definitions represent values in the current user coordinate
 * system in place at the time when the <filter> element is referenced (i.e., the user coordinate system for the
 * element referencing the <filter> element via a filter attribute).
 */
export function AttrEngine$1__get_primitiveUnitsUserSpaceOnUse(_) {
    return _.mk("primitiveUnits", "userSpaceOnUse");
}

/**
 * The Referer header will not be sent.
 */
export function AttrEngine$1__get_referrerPolicyNoReferrer(_) {
    return _.mk("referrerpolicy", "no-referrer");
}

/**
 * The Referer header will not be sent to origins without TLS (HTTPS).
 */
export function AttrEngine$1__get_referrerPolicyNoReferrerWhenDowngrade(_) {
    return _.mk("referrerpolicy", "no-referrer-when-downgrade");
}

/**
 * The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
 */
export function AttrEngine$1__get_referrerPolicyOrigin(_) {
    return _.mk("referrerpolicy", "origin");
}

/**
 * The referrer sent to other origins will be limited to the scheme, the host, and the port.
 * Navigations on the same origin will still include the path.
 */
export function AttrEngine$1__get_referrerPolicyOriginWhenCrossOrigin(_) {
    return _.mk("referrerpolicy", "origin-when-cross-origin");
}

/**
 * A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
 */
export function AttrEngine$1__get_referrerPolicySameOrigin(_) {
    return _.mk("referrerpolicy", "same-origin");
}

/**
 * Only send the origin of the document as the referrer when the protocol security level stays the same
 * (e.g. HTTPS→HTTPS), but don't send it to a less secure destination (e.g. HTTPS→HTTP).
 */
export function AttrEngine$1__get_referrerPolicyStrictOrigin(_) {
    return _.mk("referrerpolicy", "strict-origin");
}

/**
 * Send a full URL when performing a same-origin request, but only send the origin when the protocol security
 * level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).
 */
export function AttrEngine$1__get_referrerPolicyStrictOriginWhenCrossOrigin(_) {
    return _.mk("referrerpolicy", "strict-origin-when-cross-origin");
}

/**
 * The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe,
 * because it leaks origins and paths from TLS-protected resources to insecure origins.
 */
export function AttrEngine$1__get_referrerPolicyUnsafeUrl(_) {
    return _.mk("referrerpolicy", "unsafe-url");
}

/**
 * Lengths are interpreted as being in the coordinate system of the marker contents, after application
 * of the viewBox and preserveAspectRatio attributes.
 */
export function AttrEngine$1__refXLength_Z445F6BAF(_, value) {
    return _.mk("refX", value);
}

/**
 * Numbers are interpreted as being in the coordinate system of the marker contents, after application of the
 * viewBox and preserveAspectRatio attributes.
 */
export function AttrEngine$1__refXLength_Z524259A4(_, value) {
    return _.mk("refX", int32ToString(value));
}

/**
 * The reference point of the marker is placed at the left edge of the shape.
 */
export function AttrEngine$1__get_refXLeft(_) {
    return _.mk("refX", "left");
}

/**
 * The reference point of the marker is placed at the horizontal center of the shape.
 */
export function AttrEngine$1__get_refXCenter(_) {
    return _.mk("refX", "center");
}

/**
 * The reference point of the marker is placed at the right edge of the shape.
 */
export function AttrEngine$1__get_refXRight(_) {
    return _.mk("refX", "right");
}

/**
 * Lengths are interpreted as being in the coordinate system of the marker contents, after application of the
 * viewBox and preserveAspectRatio attributes.
 * 
 * Percentage values are interpreted as being a percentage of the viewBox height.
 */
export function AttrEngine$1__refYLength_Z445F6BAF(_, value) {
    return _.mk("refY", value);
}

/**
 * Numbers are interpreted as being in the coordinate system of the marker contents, after application of the
 * viewBox and preserveAspectRatio attributes.
 */
export function AttrEngine$1__refYLength_Z524259A4(_, value) {
    return _.mk("refY", int32ToString(value));
}

/**
 * The reference point of the marker is placed at the top edge of the shape.
 */
export function AttrEngine$1__get_refYTop(_) {
    return _.mk("refY", "top");
}

/**
 * The reference point of the marker is placed at the vertical center of the shape.
 */
export function AttrEngine$1__get_refYCenter(_) {
    return _.mk("refY", "center");
}

/**
 * The reference point of the marker is placed at the bottom edge of the shape.
 */
export function AttrEngine$1__get_refYBottom(_) {
    return _.mk("refY", "bottom");
}

/**
 * Provides a link to an alternate version of the document (i.e. print page, translated or mirror).
 * 
 * Example: <link rel="alternate" type="application/atom+xml" title="W3Schools News" href="/blog/news/atom">
 */
export function AttrEngine$1__get_relAlternate(_) {
    return _.mk("rel", "alternate");
}

/**
 * Provides a link to the author of the document.
 */
export function AttrEngine$1__get_relAuthor(_) {
    return _.mk("rel", "author");
}

/**
 * Permalink for the nearest ancestor section.
 */
export function AttrEngine$1__get_relBookmark(_) {
    return _.mk("rel", "bookmark");
}

/**
 * Preferred URL for the current document.
 */
export function AttrEngine$1__get_relCanonical(_) {
    return _.mk("rel", "canonical");
}

/**
 * Specifies that the browser should preemptively perform DNS resolution for the target resource's origin.
 */
export function AttrEngine$1__get_relDnsPrefetch(_) {
    return _.mk("rel", "dns-prefetch");
}

/**
 * The referenced document is not part of the same site as the current document.
 */
export function AttrEngine$1__get_relExternal(_) {
    return _.mk("rel", "external");
}

/**
 * Provides a link to a help document. Example: <link rel="help" href="/help/">
 */
export function AttrEngine$1__get_relHelp(_) {
    return _.mk("rel", "help");
}

/**
 * Imports an icon to represent the document.
 * 
 * Example: <link rel="icon" href="/favicon.ico" type="image/x-icon">
 */
export function AttrEngine$1__get_relIcon(_) {
    return _.mk("rel", "icon");
}

/**
 * Provides a link to copyright information for the document.
 */
export function AttrEngine$1__get_relLicense(_) {
    return _.mk("rel", "license");
}

/**
 * Web app manifest.
 */
export function AttrEngine$1__get_relManifest(_) {
    return _.mk("rel", "manifest");
}

/**
 * Tells to browser to preemptively fetch the script and store it in the document's module map for later
 * evaluation. Optionally, the module's dependencies can be fetched as well.
 */
export function AttrEngine$1__get_relModulepreload(_) {
    return _.mk("rel", "modulepreload");
}

/**
 * Provides a link to the next document in the series.
 */
export function AttrEngine$1__get_relNext(_) {
    return _.mk("rel", "next");
}

/**
 * Indicates that the current document's original author or publisher does not endorse the referenced document.
 */
export function AttrEngine$1__get_relNofollow(_) {
    return _.mk("rel", "nofollow");
}

/**
 * Creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create
 * either of those, to begin with (i.e., has an appropriate target attribute value).
 */
export function AttrEngine$1__get_relNoopener(_) {
    return _.mk("rel", "noopener");
}

/**
 * No Referer header will be included. Additionally, has the same effect as noopener.
 */
export function AttrEngine$1__get_relNoreferrer(_) {
    return _.mk("rel", "noreferrer");
}

/**
 * Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context
 * that is not an auxiliary browsing context (i.e., has "_blank" as target attribute value).
 */
export function AttrEngine$1__get_relOpener(_) {
    return _.mk("rel", "opener");
}

/**
 * Provides the address of the pingback server that handles pingbacks to the current document.
 */
export function AttrEngine$1__get_relPingback(_) {
    return _.mk("rel", "pingback");
}

/**
 * Specifies that the browser should preemptively connect to the target resource's origin.
 */
export function AttrEngine$1__get_relPreconnect(_) {
    return _.mk("rel", "preconnect");
}

/**
 * Specifies that the browser should preemptively fetch and cache the target resource as it is likely to be
 * required for a follow-up navigation.
 */
export function AttrEngine$1__get_relPrefetch(_) {
    return _.mk("rel", "prefetch");
}

/**
 * Specifies that the browser agent must preemptively fetch and cache the target resource for current navigation
 * according to the destination given by the "as" attribute (and the priority associated with that destination).
 */
export function AttrEngine$1__get_relPreload(_) {
    return _.mk("rel", "preload");
}

/**
 * Specifies that the browser should pre-render (load) the specified webpage in the background. So, if the user
 * navigates to this page, it speeds up the page load (because the page is already loaded).
 * 
 * Warning! This wastes the user's bandwidth!
 * 
 * Only use prerender if it is absolutely sure that the webpage is required at some point in the user journey.
 */
export function AttrEngine$1__get_relPrerender(_) {
    return _.mk("rel", "prerender");
}

/**
 * Indicates that the document is a part of a series, and that the previous document in the series is the referenced document.
 */
export function AttrEngine$1__get_relPrev(_) {
    return _.mk("rel", "prev");
}

/**
 * Provides a link to a resource that can be used to search through the current document and its related pages.
 */
export function AttrEngine$1__get_relSearch(_) {
    return _.mk("rel", "search");
}

/**
 * Imports a style sheet.
 */
export function AttrEngine$1__get_relStylesheet(_) {
    return _.mk("rel", "stylesheet");
}

/**
 * Gives a tag (identified by the given address) that applies to the current document.
 */
export function AttrEngine$1__get_relTag(_) {
    return _.mk("rel", "tag");
}

/**
 * Specifies the number of iterations.
 * 
 * It can include partial iterations expressed as fraction values.
 * 
 * A fractional value describes a portion of the simple duration.
 * 
 * Values must be greater than 0.
 */
export function AttrEngine$1__repeatCountIterations_5E38073B(_, value) {
    return _.mk("repeatCount", value.toString());
}

/**
 * Specifies the number of iterations.
 * 
 * It can include partial iterations expressed as fraction values.
 * 
 * A fractional value describes a portion of the simple duration.
 * 
 * Values must be greater than 0.
 */
export function AttrEngine$1__repeatCountIterations_Z524259A4(_, value) {
    return _.mk("repeatCount", int32ToString(value));
}

/**
 * Indicates that the animation will be repeated indefinitely (i.e. until the document ends).
 */
export function AttrEngine$1__get_repeatCountIndefinite(_) {
    return _.mk("repeatCount", "indefinite");
}

/**
 * Indicates that the animation will be repeated indefinitely (i.e. until the document ends).
 */
export function AttrEngine$1__get_repeatDurIndefinite(_) {
    return _.mk("repeatDur", "indefinite");
}

/**
 * Indicates that the animation can be restarted at any time.
 */
export function AttrEngine$1__get_restartAlways(_) {
    return _.mk("restart", "always");
}

/**
 * Indicates that the animation cannot be restarted for the time the document is loaded.
 */
export function AttrEngine$1__get_restartNever(_) {
    return _.mk("restart", "never");
}

/**
 * Indicates that the animation can only be restarted when it is not active (i.e. after the active end).
 * 
 * Attempts to restart the animation during its active duration are ignored.
 */
export function AttrEngine$1__get_restartWhenNotActive(_) {
    return _.mk("restart", "whenNotActive");
}

/**
 * A message with important, and usually time-sensitive, information.
 * See related `alertdialog` and `status`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#alert
 */
export function AttrEngine$1__get_roleAlert(_) {
    return _.mk("role", "alert");
}

/**
 * A type of dialog that contains an alert message, where initial focus
 * goes to an element within the dialog. See related `alert` and
 * `dialog`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#alertdialog
 */
export function AttrEngine$1__get_roleAlertDialog(_) {
    return _.mk("role", "alertdialog");
}

/**
 * A region declared as a web application, as opposed to a web
 * `document`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#application
 */
export function AttrEngine$1__get_roleApplication(_) {
    return _.mk("role", "application");
}

/**
 * A section of a page that consists of a composition that forms an
 * independent part of a document, page, or site.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#article
 */
export function AttrEngine$1__get_roleArticle(_) {
    return _.mk("role", "article");
}

/**
 * A region that contains mostly site-oriented content, rather than
 * page-specific content.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#banner
 */
export function AttrEngine$1__get_roleBanner(_) {
    return _.mk("role", "banner");
}

/**
 * An input that allows for user-triggered actions when clicked or
 * pressed. See related `link`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#button
 */
export function AttrEngine$1__get_roleButton(_) {
    return _.mk("role", "button");
}

/**
 * A checkable input that has three possible values: `true`, `false`,
 * or `mixed`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#checkbox
 */
export function AttrEngine$1__get_roleCheckbox(_) {
    return _.mk("role", "checkbox");
}

/**
 * A cell containing header information for a column.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#columnheader
 */
export function AttrEngine$1__get_roleColumnHeader(_) {
    return _.mk("role", "columnheader");
}

/**
 * A presentation of a `select`; usually similar to a `textbox` where
 * users can type ahead to select an option, or type to enter arbitrary
 * text as a new item in the list. See related `listbox`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#combobox
 */
export function AttrEngine$1__get_roleComboBox(_) {
    return _.mk("role", "combobox");
}

/**
 * A supporting section of the document, designed to be complementary
 * to the main content at a similar level in the DOM hierarchy, but
 * remains meaningful when separated from the main content.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#complementary
 */
export function AttrEngine$1__get_roleComplementary(_) {
    return _.mk("role", "complementary");
}

/**
 * A large perceivable region that contains information about the
 * parent document.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#contentinfo
 */
export function AttrEngine$1__get_roleContentInfo(_) {
    return _.mk("role", "contentinfo");
}

/**
 * A definition of a term or concept.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#definition
 */
export function AttrEngine$1__get_roleDefinition(_) {
    return _.mk("role", "definition");
}

/**
 * A dialog is an application window that is designed to interrupt the
 * current processing of an application in order to prompt the user to
 * enter information or require a response. See related `alertdialog`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#dialog
 */
export function AttrEngine$1__get_roleDialog(_) {
    return _.mk("role", "dialog");
}

/**
 * A list of references to members of a group, such as a static table
 * of contents.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#directory
 */
export function AttrEngine$1__get_roleDirectory(_) {
    return _.mk("role", "directory");
}

/**
 * A region containing related information that is declared as document
 * content, as opposed to a web application.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#document
 */
export function AttrEngine$1__get_roleDocument(_) {
    return _.mk("role", "document");
}

/**
 * A `landmark` region that contains a collection of items and objects
 * that, as a whole, combine to create a form. See related search.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#form
 */
export function AttrEngine$1__get_roleForm(_) {
    return _.mk("role", "form");
}

/**
 * A grid is an interactive control which contains cells of tabular
 * data arranged in rows and columns, like a table.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#grid
 */
export function AttrEngine$1__get_roleGrid(_) {
    return _.mk("role", "grid");
}

/**
 * A cell in a grid or treegrid.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#gridcell
 */
export function AttrEngine$1__get_roleGridCell(_) {
    return _.mk("role", "gridcell");
}

/**
 * A set of user interface objects which are not intended to be
 * included in a page summary or table of contents by assistive
 * technologies.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#group
 */
export function AttrEngine$1__get_roleGroup(_) {
    return _.mk("role", "group");
}

/**
 * A heading for a section of the page.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#heading
 */
export function AttrEngine$1__get_roleHeading(_) {
    return _.mk("role", "heading");
}

/**
 * A container for a collection of elements that form an image.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#img
 */
export function AttrEngine$1__get_roleImg(_) {
    return _.mk("role", "img");
}

/**
 * An interactive reference to an internal or external resource that,
 * when activated, causes the user agent to navigate to that resource.
 * See related `button`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#link
 */
export function AttrEngine$1__get_roleLink(_) {
    return _.mk("role", "link");
}

/**
 * A group of non-interactive list items. See related `listbox`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#list
 */
export function AttrEngine$1__get_roleList(_) {
    return _.mk("role", "list");
}

/**
 * A widget that allows the user to select one or more items from a
 * list of choices. See related `combobox` and `list`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#listbox
 */
export function AttrEngine$1__get_roleListBox(_) {
    return _.mk("role", "listbox");
}

/**
 * A single item in a list or directory.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#listitem
 */
export function AttrEngine$1__get_roleListItem(_) {
    return _.mk("role", "listitem");
}

/**
 * A type of live region where new information is added in meaningful
 * order and old information may disappear. See related `marquee`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#log
 */
export function AttrEngine$1__get_roleLog(_) {
    return _.mk("role", "log");
}

/**
 * The main content of a document.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#main
 */
export function AttrEngine$1__get_roleMain(_) {
    return _.mk("role", "main");
}

/**
 * A type of live region where non-essential information changes
 * frequently. See related `log`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#marquee
 */
export function AttrEngine$1__get_roleMarquee(_) {
    return _.mk("role", "marquee");
}

/**
 * Content that represents a mathematical expression.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#math
 */
export function AttrEngine$1__get_roleMath(_) {
    return _.mk("role", "math");
}

/**
 * A type of widget that offers a list of choices to the user.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#menu
 */
export function AttrEngine$1__get_roleMenu(_) {
    return _.mk("role", "menu");
}

/**
 * A presentation of `menu` that usually remains visible and is usually
 * presented horizontally.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#menubar
 */
export function AttrEngine$1__get_roleMenuBar(_) {
    return _.mk("role", "menubar");
}

/**
 * An option in a set of choices contained by a `menu` or `menubar`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#menuitem
 */
export function AttrEngine$1__get_roleMenuItem(_) {
    return _.mk("role", "menuitem");
}

/**
 * A `menuitem` with a checkable state whose possible values are
 * `true`, `false`, or `mixed`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#menuitemcheckbox
 */
export function AttrEngine$1__get_roleMenuItemCheckbox(_) {
    return _.mk("role", "menuitemcheckbox");
}

/**
 * A checkable menuitem in a set of elements with role `menuitemradio`,
 * only one of which can be checked at a time.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#menuitemradio
 */
export function AttrEngine$1__get_roleMenuItemRadio(_) {
    return _.mk("role", "menuitemradio");
}

/**
 * A collection of navigational elements (usually links) for navigating
 * the document or related documents.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#navigation
 */
export function AttrEngine$1__get_roleNavigation(_) {
    return _.mk("role", "navigation");
}

/**
 * A section whose content is parenthetic or ancillary to the main
 * content of the resource.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#note
 */
export function AttrEngine$1__get_roleNote(_) {
    return _.mk("role", "note");
}

/**
 * A selectable item in a `select` list.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#option
 */
export function AttrEngine$1__get_roleOption(_) {
    return _.mk("role", "option");
}

/**
 * An element whose implicit native role semantics will not be mapped
 * to the accessibility API.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#presentation
 */
export function AttrEngine$1__get_rolePresentation(_) {
    return _.mk("role", "presentation");
}

/**
 * An element that displays the progress status for tasks that take a
 * long time.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#progressbar
 */
export function AttrEngine$1__get_roleProgressBar(_) {
    return _.mk("role", "progressbar");
}

/**
 * A checkable input in a group of elements with role radio, only one
 * of which can be checked at a time.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#radio
 */
export function AttrEngine$1__get_roleRadio(_) {
    return _.mk("role", "radio");
}

/**
 * A group of radio buttons.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#radiogroup
 */
export function AttrEngine$1__get_roleRadioGroup(_) {
    return _.mk("role", "radiogroup");
}

/**
 * A large perceivable section of a web page or document, that is
 * important enough to be included in a page summary or table of
 * contents, for example, an area of the page containing live sporting
 * event statistics.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#region
 */
export function AttrEngine$1__get_roleRegion(_) {
    return _.mk("role", "region");
}

/**
 * A row of cells in a grid.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#row
 */
export function AttrEngine$1__get_roleRow(_) {
    return _.mk("role", "row");
}

/**
 * A group containing one or more row elements in a grid.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#rowgroup
 */
export function AttrEngine$1__get_roleRowGroup(_) {
    return _.mk("role", "rowgroup");
}

/**
 * A cell containing header information for a row in a grid.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#rowheader
 */
export function AttrEngine$1__get_roleRowHeader(_) {
    return _.mk("role", "rowheader");
}

/**
 * A graphical object that controls the scrolling of content within a
 * viewing area, regardless of whether the content is fully displayed
 * within the viewing area.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#scrollbar
 */
export function AttrEngine$1__get_roleScrollBar(_) {
    return _.mk("role", "scrollbar");
}

/**
 * A divider that separates and distinguishes sections of content or
 * groups of menuitems.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#separator
 */
export function AttrEngine$1__get_roleSeparator(_) {
    return _.mk("role", "separator");
}

/**
 * A `landmark` region that contains a collection of items and objects
 * that, as a whole, combine to create a search facility. See related
 * `form`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#search
 */
export function AttrEngine$1__get_roleSearch(_) {
    return _.mk("role", "search");
}

/**
 * A user input where the user selects a value from within a given
 * range.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#slider
 */
export function AttrEngine$1__get_roleSlider(_) {
    return _.mk("role", "slider");
}

/**
 * A form of `range` that expects the user to select from among
 * discrete choices.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#spinbutton
 */
export function AttrEngine$1__get_roleSpinButton(_) {
    return _.mk("role", "spinbutton");
}

/**
 * A container whose content is advisory information for the user but
 * is not important enough to justify an alert, often but not
 * necessarily presented as a status bar. See related `alert`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#status
 */
export function AttrEngine$1__get_roleStatus(_) {
    return _.mk("role", "status");
}

/**
 * A grouping label providing a mechanism for selecting the tab content
 * that is to be rendered to the user.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#tab
 */
export function AttrEngine$1__get_roleTab(_) {
    return _.mk("role", "tab");
}

/**
 * A list of `tab` elements, which are references to `tabpanel`
 * elements.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#tablist
 */
export function AttrEngine$1__get_roleTabList(_) {
    return _.mk("role", "tablist");
}

/**
 * A container for the resources associated with a `tab`, where each
 * `tab` is contained in a `tablist`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#tabpanel
 */
export function AttrEngine$1__get_roleTabPanel(_) {
    return _.mk("role", "tabpanel");
}

/**
 * Input that allows free-form text as its value.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#textbox
 */
export function AttrEngine$1__get_roleTextBox(_) {
    return _.mk("role", "textbox");
}

/**
 * A type of live region containing a numerical counter which indicates
 * an amount of elapsed time from a start point, or the time remaining
 * until an end point.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#timer
 */
export function AttrEngine$1__get_roleTimer(_) {
    return _.mk("role", "timer");
}

/**
 * A collection of commonly used function buttons or controls
 * represented in compact visual form.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#toolbar
 */
export function AttrEngine$1__get_roleToolbar(_) {
    return _.mk("role", "toolbar");
}

/**
 * A contextual popup that displays a description for an element.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#tooltip
 */
export function AttrEngine$1__get_roleTooltip(_) {
    return _.mk("role", "tooltip");
}

/**
 * A type of `list` that may contain sub-level nested groups that can
 * be collapsed and expanded.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#tree
 */
export function AttrEngine$1__get_roleTree(_) {
    return _.mk("role", "tree");
}

/**
 * A `grid` whose rows can be expanded and collapsed in the same manner
 * as for a `tree`.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#treegrid
 */
export function AttrEngine$1__get_roleTreeGrid(_) {
    return _.mk("role", "treegrid");
}

/**
 * An option item of a `tree`. This is an element within a tree that
 * may be expanded or collapsed if it contains a sub-level group of
 * `treeitem` elements.
 * 
 * https://www.w3.org/WAI/PF/aria-1.1/roles#treeitem
 */
export function AttrEngine$1__get_roleTreeItem(_) {
    return _.mk("role", "treeitem");
}

export function AttrEngine$1__get_shapeRect(_) {
    return _.mk("shape", "rect");
}

export function AttrEngine$1__get_shapeCircle(_) {
    return _.mk("shape", "circle");
}

export function AttrEngine$1__get_shapePoly(_) {
    return _.mk("shape", "poly");
}

/**
 * Indicates that the user agent should use text-on-a-path layout algorithms to adjust
 * the spacing between typographic characters in order to achieve visually appealing results.
 */
export function AttrEngine$1__get_spacingAuto(_) {
    return _.mk("spacing", "auto");
}

/**
 * Indicates that the typographic characters should be rendered exactly according to the
 * spacing rules as specified by the layout rules for text-on-a-path.
 */
export function AttrEngine$1__get_spacingExact(_) {
    return _.mk("spacing", "exact");
}

/**
 * Indicates that the final color of the gradient fills the shape beyond the gradient's edges.
 */
export function AttrEngine$1__get_spreadMethodPad(_) {
    return _.mk("spreadMethod", "pad");
}

/**
 * Indicates that the gradient repeats in reverse beyond its edges.
 */
export function AttrEngine$1__get_spreadMethodReflect(_) {
    return _.mk("spreadMethod", "reflect");
}

/**
 * Specifies that the gradient repeats in the original order beyond its edges.
 */
export function AttrEngine$1__get_spreadMethodRepeat(_) {
    return _.mk("spreadMethod", "repeat");
}

/**
 * Indicates that no attempt is made to achieve smooth transitions at the border of tiles which
 * contain a turbulence function.
 * 
 * Sometimes the result will show clear discontinuities at the tile borders.
 */
export function AttrEngine$1__get_stitchTilesNoStitch(_) {
    return _.mk("stitchTiles", "noStitch");
}

/**
 * Indicates that the user agent will automatically adjust the x and y values of the base
 * frequency such that the <feTurbulence> node’s width and height (i.e., the width and
 * height of the current subregion) contain an integral number of the tile width and height
 * for the first octave.
 */
export function AttrEngine$1__get_stitchTilesStitch(_) {
    return _.mk("stitchTiles", "stitch");
}

/**
 * Opens the linked document in a new window or tab.
 */
export function AttrEngine$1__get_targetBlank(_) {
    return _.mk("target", "_blank");
}

/**
 * Opens the linked document in the parent frame.
 */
export function AttrEngine$1__get_targetParent(_) {
    return _.mk("target", "_parent");
}

/**
 * Opens the linked document in the same frame as it was clicked (this is default).
 */
export function AttrEngine$1__get_targetSelf(_) {
    return _.mk("target", "_self");
}

/**
 * Opens the linked document in the full body of the window.
 */
export function AttrEngine$1__get_targetTop(_) {
    return _.mk("target", "_top");
}

/**
 * The rendered characters are shifted such that the end of the
 * resulting rendered text (final current text position before applying
 * the `text-anchor` property) is at the initial current text position.
 * For an element with a `direction` property value of `ltr` (typical
 * for most European languages), the right side of the text is rendered
 * at the initial text position. For an element with a `direction`
 * property value of `rtl` (typical for Arabic and Hebrew), the left
 * side of the text is rendered at the initial text position. For an
 * element with a vertical primary text direction (often typical for
 * Asian text), the bottom of the text is rendered at the initial text
 * position.
 */
export function AttrEngine$1__get_textAnchorEndOfText(_) {
    return _.mk("text-anchor", "end");
}

/**
 * The rendered characters are aligned such that the middle of the text
 * string is at the current text position. (For text on a path,
 * conceptually the text string is first laid out in a straight line.
 * The midpoint between the start of the text string and the end of the
 * text string is determined. Then, the text string is mapped onto the
 * path with this midpoint placed at the current text position.)
 */
export function AttrEngine$1__get_textAnchorMiddle(_) {
    return _.mk("text-anchor", "middle");
}

/**
 * The rendered characters are aligned such that the start of the text
 * string is at the initial current text position. For an element with
 * a `direction` property value of `ltr` (typical for most European
 * languages), the left side of the text is rendered at the initial
 * text position. For an element with a `direction` property value of
 * `rtl` (typical for Arabic and Hebrew), the right side of the text is
 * rendered at the initial text position. For an element with a
 * vertical primary text direction (often typical for Asian text), the
 * top side of the text is rendered at the initial text position.
 */
export function AttrEngine$1__get_textAnchorStartOfText(_) {
    return _.mk("text-anchor", "start");
}

/**
 * Defines a clickable button (mostly used with a JavaScript code to activate a script)
 */
export function AttrEngine$1__get_typeButton(_) {
    return _.mk("type", "button");
}

/**
 * Defines a checkbox
 */
export function AttrEngine$1__get_typeCheckbox(_) {
    return _.mk("type", "checkbox");
}

/**
 * Defines a color picker
 */
export function AttrEngine$1__get_typeColor(_) {
    return _.mk("type", "color");
}

/**
 * Defines a date control with year, month and day (no time)
 */
export function AttrEngine$1__get_typeDate(_) {
    return _.mk("type", "date");
}

/**
 * Defines a date and time control (year, month, day, time (no timezone)
 */
export function AttrEngine$1__get_typeDateTimeLocal(_) {
    return _.mk("type", "datetime-local");
}

/**
 * Defines a field for an e-mail address
 */
export function AttrEngine$1__get_typeEmail(_) {
    return _.mk("type", "email");
}

/**
 * Defines a file-select field and mk "Browse" button (for file uploads)
 */
export function AttrEngine$1__get_typeFile(_) {
    return _.mk("type", "file");
}

/**
 * Defines a hidden input field
 */
export function AttrEngine$1__get_typeHidden(_) {
    return _.mk("type", "hidden");
}

/**
 * Defines an image as the submit button
 */
export function AttrEngine$1__get_typeImage(_) {
    return _.mk("type", "image");
}

/**
 * Defines a month and year control (no timezone)
 */
export function AttrEngine$1__get_typeMonth(_) {
    return _.mk("type", "month");
}

/**
 * Defines a field for entering a number
 */
export function AttrEngine$1__get_typeNumber(_) {
    return _.mk("type", "number");
}

/**
 * Defines a password field
 */
export function AttrEngine$1__get_typePassword(_) {
    return _.mk("type", "password");
}

/**
 * Defines a radio button
 */
export function AttrEngine$1__get_typeRadio(_) {
    return _.mk("type", "radio");
}

/**
 * Defines a range control (like a slider control)
 */
export function AttrEngine$1__get_typeRange(_) {
    return _.mk("type", "range");
}

/**
 * Defines a reset button
 */
export function AttrEngine$1__get_typeReset(_) {
    return _.mk("type", "reset");
}

/**
 * Defines a text field for entering a search string
 */
export function AttrEngine$1__get_typeSearch(_) {
    return _.mk("type", "search");
}

/**
 * Defines a submit button
 */
export function AttrEngine$1__get_typeSubmit(_) {
    return _.mk("type", "submit");
}

/**
 * Defines a field for entering a telephone number
 */
export function AttrEngine$1__get_typeTel(_) {
    return _.mk("type", "tel");
}

/**
 * Default. Defines a single-line text field
 */
export function AttrEngine$1__get_typeText(_) {
    return _.mk("type", "text");
}

/**
 * Defines a control for entering a time (no timezone)
 */
export function AttrEngine$1__get_typeTime(_) {
    return _.mk("type", "time");
}

/**
 * Defines a field for entering a URL
 */
export function AttrEngine$1__get_typeUrl(_) {
    return _.mk("type", "url");
}

/**
 * Defines a week and year control (no timezone)
 */
export function AttrEngine$1__get_typeWeek(_) {
    return _.mk("type", "week");
}

/**
 * The browser ensures that all line breaks in the value consist of a CR+LF pair,
 * but does not insert any additional line breaks.
 */
export function AttrEngine$1__get_wrapSoft(_) {
    return _.mk("wrap", "soft");
}

/**
 * The browser automatically inserts line breaks (CR+LF)
 * so that each line has no more than the width of the control;
 * the cols attribute must also be specified for this to take effect.
 */
export function AttrEngine$1__get_wrapHard(_) {
    return _.mk("wrap", "hard");
}

/**
 * Like soft but changes appearance to white-space: pre
 * so line segments exceeding cols are not wrapped and the `<textarea>` becomes horizontally scrollable.
 * WARNING: This API has not been standardized.
 */
export function AttrEngine$1__get_wrapOff(_) {
    return _.mk("wrap", "off");
}

/**
 * Specifies that the alpha channel of the input image defined in in2 will be used to displace
 * the pixels of the input image defined in in along the x-axis.
 */
export function AttrEngine$1__get_xChannelSelectorA(_) {
    return _.mk("xChannelSelector", "A");
}

/**
 * Specifies that the blue color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the x-axis.
 */
export function AttrEngine$1__get_xChannelSelectorB(_) {
    return _.mk("xChannelSelector", "B");
}

/**
 * Specifies that the green color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the x-axis.
 */
export function AttrEngine$1__get_xChannelSelectorG(_) {
    return _.mk("xChannelSelector", "G");
}

/**
 * Specifies that the red color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the x-axis.
 */
export function AttrEngine$1__get_xChannelSelectorR(_) {
    return _.mk("xChannelSelector", "R");
}

/**
 * Specifies that the alpha channel of the input image defined in in2 will be used to displace
 * the pixels of the input image defined in in along the y-axis.
 */
export function AttrEngine$1__get_yChannelSelectorA(_) {
    return _.mk("yChannelSelector", "A");
}

/**
 * Specifies that the blue color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the y-axis.
 */
export function AttrEngine$1__get_yChannelSelectorB(_) {
    return _.mk("yChannelSelector", "B");
}

/**
 * Specifies that the green color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the y-axis.
 */
export function AttrEngine$1__get_yChannelSelectorG(_) {
    return _.mk("yChannelSelector", "G");
}

/**
 * Specifies that the red color channel of the input image defined in in2 will be used to
 * displace the pixels of the input image defined in in along the y-axis.
 */
export function AttrEngine$1__get_yChannelSelectorR(_) {
    return _.mk("yChannelSelector", "R");
}

