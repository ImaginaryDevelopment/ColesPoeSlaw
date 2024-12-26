import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { Window_matchMedia_Z721C83C5 } from "./Interop.fs.js";
import { listen } from "./DomHelpers.fs.js";
import { StoreOperators_op_DotGreater, StoreOperators_op_LessTwiddle, Store_make } from "./Store.fs.js";
import { disposeOnUnmount, fragment } from "./CoreElements.fs.js";
import { disposable } from "./Helpers.fs.js";
import { ofArray } from "../fable-library-js.4.21.0/List.js";
import { Bind_el_ZF0512D0 } from "./Bind.fs.js";
import { transition } from "./Transition.fs.js";
import { makeMediaRule } from "./Styling.fs.js";
import { toString } from "../fable-library-js.4.21.0/Types.js";
import { printf, toText } from "../fable-library-js.4.21.0/String.js";

export class Media {
    constructor() {
    }
}

export function Media_$reflection() {
    return class_type("Sutil.Media", undefined, Media);
}

/**
 * 
 */
export function Media_listenMedia_1AAA471B(query, handler) {
    const mql = Window_matchMedia_Z721C83C5(query);
    handler(mql.matches);
    const clo = listen("change", mql, (e) => {
        handler(e.matches);
    });
    return () => {
        clo();
    };
}

/**
 * 
 */
export function Media_bindMediaQuery_7FEBD4A7(query, view) {
    const s = Store_make(false);
    const u = Media_listenMedia_1AAA471B(query, (m) => {
        StoreOperators_op_LessTwiddle(s, m);
    });
    return fragment([disposeOnUnmount(ofArray([disposable(u), s])), Bind_el_ZF0512D0(s, view)]);
}

/**
 * 
 */
export function Media_showIfMedia_1867901(query, f, trans, view) {
    const s = Store_make(false);
    const u = Media_listenMedia_1AAA471B(query, (m) => {
        StoreOperators_op_LessTwiddle(s, m);
    });
    return fragment([disposeOnUnmount(ofArray([disposable(u), s])), transition(trans, StoreOperators_op_DotGreater(s, f), view)]);
}

/**
 * 
 */
export function Media_showIfMedia_5DF3B137(query, trans, view) {
    return Media_showIfMedia_1867901(query, (x) => x, trans, view);
}

/**
 * 
 */
export function Media_media_Z4DAEC249(query, map, app) {
    const s = Store_make(false);
    const u = Media_listenMedia_1AAA471B(query, (m) => {
        StoreOperators_op_LessTwiddle(s, m);
    });
    return fragment([disposeOnUnmount(ofArray([disposable(u), s])), app(StoreOperators_op_DotGreater(s, map))]);
}

export class CssMedia {
    constructor() {
    }
}

export function CssMedia_$reflection() {
    return class_type("Sutil.CssMedia", undefined, CssMedia);
}

/**
 * Create a <c>@media</c> CSS rule for a custom condition and stylesheet
 */
export function CssMedia_custom_788FC568(condition, rules) {
    return makeMediaRule(condition, rules);
}

/**
 * Create a <c>@media (min-width: <nnn>)</c> CSS rule
 */
export function CssMedia_minWidth_1D6FD882(minWidth, rules) {
    let arg;
    return makeMediaRule((arg = toString(minWidth), toText(printf("(min-width: %s)"))(arg)), rules);
}

/**
 * Create a <c>@media (max-width: <nnn>)</c> CSS rule
 */
export function CssMedia_maxWidth_1D6FD882(maxWidth, rules) {
    let arg;
    return makeMediaRule((arg = toString(maxWidth), toText(printf("(max-width: %s)"))(arg)), rules);
}

