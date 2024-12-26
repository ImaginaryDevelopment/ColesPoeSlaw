import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { singleton } from "../fable-library-js.4.21.0/List.js";

export class SvgEngine$1 {
    constructor(mk, ofStr, empty) {
        this.mk = mk;
        this.ofStr = ofStr;
        this.empty = empty;
    }
}

export function SvgEngine$1_$reflection(gen0) {
    return class_type("Feliz.SvgEngine`1", [gen0], SvgEngine$1);
}

export function SvgEngine$1_$ctor_Z780DA98D(mk, ofStr, empty) {
    return new SvgEngine$1(mk, ofStr, empty);
}

/**
 * Create a custom element
 * 
 * You generally shouldn't need to use this, if you notice an element missing please submit an issue.
 */
export function SvgEngine$1__custom_4AE854A1(_, key, children) {
    return _.mk(key, children);
}

/**
 * The empty element, renders nothing on screen
 */
export function SvgEngine$1__get_none(_) {
    return _.empty();
}

/**
 * SVG Image element, not to be confused with HTML img alias.
 */
export function SvgEngine$1__image_BB573A(_, children) {
    return _.mk("image", children);
}

/**
 * The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 */
export function SvgEngine$1__svg_BB573A(_, children) {
    return _.mk("svg", children);
}

export function SvgEngine$1__circle_BB573A(_, children) {
    return _.mk("circle", children);
}

export function SvgEngine$1__clipPath_BB573A(_, children) {
    return _.mk("clipPath", children);
}

/**
 * The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example). https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
 */
export function SvgEngine$1__defs_BB573A(_, children) {
    return _.mk("defs", children);
}

/**
 * The <desc> element provides an accessible, long-text description of any SVG container element or graphics element.
 */
export function SvgEngine$1__desc_Z721C83C5(_, value) {
    const arg_1 = singleton(_.ofStr(value));
    return _.mk("desc", arg_1);
}

export function SvgEngine$1__ellipse_BB573A(_, children) {
    return _.mk("ellipse", children);
}

export function SvgEngine$1__feBlend_BB573A(_, children) {
    return _.mk("feBlend", children);
}

export function SvgEngine$1__feColorMatrix_BB573A(_, children) {
    return _.mk("feColorMatrix", children);
}

export function SvgEngine$1__feComponentTransfer_BB573A(_, children) {
    return _.mk("feComponentTransfer", children);
}

export function SvgEngine$1__feComposite_BB573A(_, children) {
    return _.mk("feComposite", children);
}

export function SvgEngine$1__feConvolveMatrix_BB573A(_, children) {
    return _.mk("feConvolveMatrix", children);
}

export function SvgEngine$1__feDiffuseLighting_BB573A(_, children) {
    return _.mk("feDiffuseLighting", children);
}

export function SvgEngine$1__feDisplacementMap_BB573A(_, children) {
    return _.mk("feDisplacementMap", children);
}

export function SvgEngine$1__feDistantLight_BB573A(_, children) {
    return _.mk("feDistantLight", children);
}

export function SvgEngine$1__feDropShadow_BB573A(_, children) {
    return _.mk("feDropShadow", children);
}

export function SvgEngine$1__feFlood_BB573A(_, children) {
    return _.mk("feFlood", children);
}

export function SvgEngine$1__feFuncA_BB573A(_, children) {
    return _.mk("feFuncA", children);
}

export function SvgEngine$1__feFuncB_BB573A(_, children) {
    return _.mk("feFuncB", children);
}

export function SvgEngine$1__feFuncG_BB573A(_, children) {
    return _.mk("feFuncG", children);
}

export function SvgEngine$1__feFuncR_BB573A(_, children) {
    return _.mk("feFuncR", children);
}

export function SvgEngine$1__feGaussianBlur_BB573A(_, children) {
    return _.mk("feGaussianBlur", children);
}

export function SvgEngine$1__feImage_BB573A(_, children) {
    return _.mk("feImage", children);
}

export function SvgEngine$1__feMerge_BB573A(_, children) {
    return _.mk("feMerge", children);
}

export function SvgEngine$1__feMergeNode_BB573A(_, children) {
    return _.mk("feMergeNode", children);
}

export function SvgEngine$1__feMorphology_BB573A(_, children) {
    return _.mk("feMorphology", children);
}

export function SvgEngine$1__feOffset_BB573A(_, children) {
    return _.mk("feOffset", children);
}

export function SvgEngine$1__fePointLight_BB573A(_, children) {
    return _.mk("fePointLight", children);
}

export function SvgEngine$1__feSpecularLighting_BB573A(_, children) {
    return _.mk("feSpecularLighting", children);
}

export function SvgEngine$1__feSpotLight_BB573A(_, children) {
    return _.mk("feSpotLight", children);
}

export function SvgEngine$1__feTile_BB573A(_, children) {
    return _.mk("feTile", children);
}

export function SvgEngine$1__feTurbulence_BB573A(_, children) {
    return _.mk("feTurbulence", children);
}

export function SvgEngine$1__filter_BB573A(_, children) {
    return _.mk("filter", children);
}

export function SvgEngine$1__foreignObject_BB573A(_, children) {
    return _.mk("foreignObject", children);
}

/**
 * The <g> SVG element is a container used to group other SVG elements.
 * 
 * Transformations applied to the <g> element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the <use> element.
 */
export function SvgEngine$1__g_BB573A(_, children) {
    return _.mk("g", children);
}

export function SvgEngine$1__line_BB573A(_, children) {
    return _.mk("line", children);
}

export function SvgEngine$1__linearGradient_BB573A(_, children) {
    return _.mk("linearGradient", children);
}

/**
 * The <marker> element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
 */
export function SvgEngine$1__marker_BB573A(_, children) {
    return _.mk("marker", children);
}

export function SvgEngine$1__mask_BB573A(_, children) {
    return _.mk("marker", children);
}

export function SvgEngine$1__mpath_BB573A(_, children) {
    return _.mk("mpath", children);
}

export function SvgEngine$1__path_BB573A(_, children) {
    return _.mk("path", children);
}

export function SvgEngine$1__pattern_BB573A(_, children) {
    return _.mk("pattern", children);
}

export function SvgEngine$1__polygon_BB573A(_, children) {
    return _.mk("polygon", children);
}

export function SvgEngine$1__polyline_BB573A(_, children) {
    return _.mk("polyline", children);
}

export function SvgEngine$1__set_BB573A(_, children) {
    return _.mk("set", children);
}

export function SvgEngine$1__stop_BB573A(_, children) {
    return _.mk("stop", children);
}

export function SvgEngine$1__style_Z721C83C5(_, value) {
    const arg_1 = singleton(_.ofStr(value));
    return _.mk("style", arg_1);
}

export function SvgEngine$1__switch_BB573A(_, children) {
    return _.mk("switch", children);
}

export function SvgEngine$1__symbol_BB573A(_, children) {
    return _.mk("symbol", children);
}

export function SvgEngine$1__text_Z721C83C5(_, content) {
    const arg_1 = singleton(_.ofStr(content));
    return _.mk("text", arg_1);
}

export function SvgEngine$1__title_Z721C83C5(_, content) {
    const arg_1 = singleton(_.ofStr(content));
    return _.mk("title", arg_1);
}

export function SvgEngine$1__textPath_BB573A(_, children) {
    return _.mk("textPath", children);
}

export function SvgEngine$1__tspan_BB573A(_, children) {
    return _.mk("tspan", children);
}

export function SvgEngine$1__use$0027_BB573A(_, children) {
    return _.mk("use", children);
}

export function SvgEngine$1__radialGradient_BB573A(_, children) {
    return _.mk("radialGradient", children);
}

export function SvgEngine$1__rect_BB573A(_, children) {
    return _.mk("rect", children);
}

export function SvgEngine$1__view_BB573A(_, children) {
    return _.mk("view", children);
}

