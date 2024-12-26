import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { transition } from "./Transition.fs.js";
import { exactlyOne, singleton, empty } from "../fable-library-js.4.21.0/List.js";
import { arrayWrapO, eachio, eachi, EachItemRenderer$1, eachiko, eachk, listWrapO, each, bindElement2, bindElementKO, bindElementK, bindElement, bindClassNames, bindClassName, bindClassToggle, bindWidthHeight, bindLeftTop, bindElementEffect, bindStyle, bindBoolAttr, cssAttrsToString, bindAttrOut, bindAttrIn, bindAttrStoreBoth, bindAttrBoth, attrNotify, bindSelected, bindSelectSingle, bindSelectOptional, bindSelectMultiple, bindGroup, bindRadioGroup } from "./Bindings.fs.js";
import { Store_map, StoreOperators_op_DotGreater } from "./Store.fs.js";
import { Fable_Core_JS_Promise$1__Promise$1_ToObservable } from "./Promise.fs.js";
import { text, class$0027, el } from "./CoreElements.fs.js";

export class Bind {
    constructor() {
    }
}

export function Bind_$reflection() {
    return class_type("Sutil.Bind", undefined, Bind);
}

export function Bind_visibility_40BD454A(isVisible) {
    return (element) => transition(empty(), isVisible, element);
}

export function Bind_visibility_Z41F3D47A(isVisible, trans) {
    return (element) => transition(trans, isVisible, element);
}

/**
 * For <c>input[type='radio']</c>
 * Only the checkbox with store's current value will be checked at any one time.
 */
export function Bind_radioValue_7ACACBBB(store) {
    return bindRadioGroup(store);
}

/**
 * For multiple input elements. The input elements are grouped explicitly by name, or will be implicitly grouped by
 * the (internal) name of the binding store.
 * Each checkbox in the group is checked if its value is contained in the current <c>string list</c>
 */
export function Bind_checkboxGroup_Z722E19FF(store) {
    return bindGroup(store);
}

export function Bind_selectMultiple_61829297(store) {
    return bindSelectMultiple(store);
}

export function Bind_selectOptional_5B3E8C96(store) {
    return bindSelectOptional(store);
}

export function Bind_selectSingle_Z685FE8AB(store) {
    return bindSelectSingle(store);
}

export function Bind_selectSingle_3891390A(value, dispatch) {
    return bindSelected(StoreOperators_op_DotGreater(value, singleton), (arg) => {
        dispatch(exactlyOne(arg));
    });
}

export function Bind_selectMultiple_Z5D961756(value, dispatch) {
    return bindSelected(value, dispatch);
}

/**
 * Bind a scalar value to an element attribute. Listen for onchange events and dispatch the
 * attribute's current value to the given function. This form is useful for view templates
 * where v is invariant (for example, an each that already filters on the value of v, like Todo.Done)
 */
export function Bind_attrInit_16177AF1(attrName, initValue, dispatch) {
    return attrNotify(attrName, initValue, dispatch);
}

/**
 * Two-way binding from value to attribute and from attribute to dispatch function
 */
export function Bind_attr_Z5ECB44E9(name, value, dispatch) {
    return bindAttrBoth(name, value, dispatch);
}

/**
 * Dual-binding for a given attribute. Changes to value are written to the attribute, while
 * changes to the attribute are written back to the store. Note that an IStore is also
 * an IObservable, for which a separate overload exists.
 */
export function Bind_attr_3099C820(name, value) {
    return bindAttrStoreBoth(name, value);
}

/**
 * One-way binding from value to attribute. Note that passing store to this function will
 * select the more specific `attr<'T>( string, IStore<'T>)` overload.
 * If that looks to be a problem, we'll rename both of them to force a considered choice.
 */
export function Bind_attr_3F2394B8(name, value) {
    return bindAttrIn(name, value);
}

/**
 * One-way binding from attribute to dispatch function
 */
export function Bind_attr_Z370E6CCC(name, dispatch) {
    return bindAttrOut(name, dispatch);
}

/**
 * One way binding from style values into style attribute
 */
export function Bind_style_14B41C44(attrs) {
    return Bind_attr_3F2394B8("style", Store_map(cssAttrsToString, attrs));
}

export function Bind_booleanAttr_AEE46D1(name, isTrue) {
    return bindBoolAttr(isTrue, name);
}

/**
 * One way binding from custom values to style updater function. This allows updating of the element's <c>style</c> property rather than the style attribute string.
 */
export function Bind_style_2C84B00C(values, updater) {
    return bindStyle(values, updater);
}

export function Bind_effect_Z2CA06641(values, updater) {
    return bindElementEffect(values, updater);
}

export function Bind_leftTop_44BD5D2F(xy) {
    return bindLeftTop(xy);
}

export function Bind_widthHeight_44BD5D2F(xy) {
    return bindWidthHeight(xy);
}

export function Bind_toggleClass_BBB94EA(toggle, activeClass, inactiveClass) {
    return bindClassToggle(toggle, activeClass, inactiveClass);
}

export function Bind_toggleClass_Z2A796D4F(toggle, activeClass) {
    return bindClassToggle(toggle, activeClass, "");
}

export function Bind_className_Z686281E5(name) {
    return bindClassName(name);
}

export function Bind_classNames_Z7D5B9F70(name) {
    return bindClassNames(name);
}

/**
 * Binding from value to a DOM fragment. Each change in value replaces the current DOM fragment
 * with a new one.
 */
export function Bind_el_ZF0512D0(value, element) {
    return bindElement(value, element);
}

export function Bind_el_4DBB430E(value, key, element) {
    return bindElementK(value, element, key);
}

export function Bind_el_Z7444598(value, key, element) {
    return bindElementKO(value, element, key);
}

/**
 * Deprecated naming, use Bind.el
 */
export function Bind_fragment(value, element) {
    return bindElement(value, element);
}

/**
 * Binding from two values to a DOM fragment. See fragment<'T>
 */
export function Bind_el2(valueA, valueB, element) {
    return bindElement2(valueA, valueB, element);
}

/**
 * Deprecated naming, use Bind.el
 */
export function Bind_fragment2(valueA, valueB, element) {
    return bindElement2(valueA, valueB, element);
}

export function Bind_selected_Z5D961756(value, dispatch) {
    return bindSelected(value, dispatch);
}

export function Bind_selected_61829297(store) {
    return bindSelectMultiple(store);
}

export function Bind_selected_5B3E8C96(store) {
    return bindSelectOptional(store);
}

export function Bind_selected_Z685FE8AB(store) {
    return bindSelectSingle(store);
}

/**
 * Bind lists to a simple template, with transitions
 */
export function Bind_each_Z168C2DE8(items, view, trans) {
    return each(listWrapO(items), view, trans);
}

/**
 * Bind lists to a simple template
 */
export function Bind_each_Z2E167B6C(items, view) {
    return each(listWrapO(items), view, empty());
}

/**
 * Bind keyed lists to a simple template, with transitions
 * Deprecated: Use a view template that takes IObservable<'T>
 */
export function Bind_each_3424FD46(items, view, key, trans) {
    return eachk(listWrapO(items), view, key, trans);
}

/**
 * Bind keyed lists to a simple template
 * Deprecated: Use a view template that takes IObservable<'T>
 */
export function Bind_each_Z6DFDA8F6(items, view, key) {
    return eachk(listWrapO(items), view, key, empty());
}

/**
 * Bind keyed lists to a simple template, with transitions
 */
export function Bind_each_Z2C15E560(items, view, key, trans) {
    return eachiko()(listWrapO(items))(new EachItemRenderer$1(2, [view]))((arg) => key(arg[1]))(trans);
}

/**
 * Bind keyed lists to a simple template, with transitions
 */
export function Bind_each_47709A2C(items, view, key) {
    return eachiko()(listWrapO(items))(new EachItemRenderer$1(2, [view]))((arg) => key(arg[1]))(empty());
}

export function Bind_each_5A8EFD32(items, view, key) {
    return eachiko()(listWrapO(items))(new EachItemRenderer$1(1, [view]))((arg) => key(arg[1]))(empty());
}

export function Bind_eachi_3D64A0AB(items, view, trans) {
    return eachi(listWrapO(items), view, trans);
}

export function Bind_eachi_Z376C3339(items, view) {
    return eachi(listWrapO(items), view, empty());
}

export function Bind_eachi_Z7C9BAF13(items, view, trans) {
    return eachio(listWrapO(items), view, trans);
}

export function Bind_eachi_AD1DDC1(items, view) {
    return eachio(listWrapO(items), view, empty());
}

export function Bind_eachi_72C00F40(items, view, key, trans) {
    return eachiko()(listWrapO(items))(new EachItemRenderer$1(4, [view]))(key)(trans);
}

export function Bind_eachi_Z31CC4F34(items, view, key) {
    return eachiko()(listWrapO(items))(new EachItemRenderer$1(4, [view]))(key)(empty());
}

export function Bind_promises_B7F7BB7(items, view, waiting, error) {
    return Bind_el_ZF0512D0(items, (p) => Bind_promise_ZD6A6129(p, view, waiting, error));
}

export function Bind_promise_ZD6A6129(p, view, waiting, error) {
    return Bind_el_ZF0512D0(Fable_Core_JS_Promise$1__Promise$1_ToObservable(p), (state) => {
        switch (state.tag) {
            case 2: {
                const x = state.fields[0];
                return error(x);
            }
            case 1: {
                const r = state.fields[0];
                return view(r);
            }
            default:
                return waiting;
        }
    });
}

export function Bind_promise_Z6B94AFE8(p, view) {
    const w = el("div", [class$0027("promise-waiting"), text("waiting...")]);
    const e = (x) => el("div", [class$0027("promise-error"), text(x.message)]);
    return Bind_promise_ZD6A6129(p, view, w, e);
}

export class BindArray {
    constructor() {
    }
}

export function BindArray_$reflection() {
    return class_type("Sutil.BindArray", undefined, BindArray);
}

/**
 * Bind arrays to a simple template, with transitions
 */
export function BindArray_each_Z1BB36BCF(items, view, trans) {
    return each(arrayWrapO(items), view, trans);
}

/**
 * Bind arrays to a simple template
 */
export function BindArray_each_Z7C0E6263(items, view) {
    return each(arrayWrapO(items), view, empty());
}

/**
 * Bind keyed arrays to a simple template, with transitions
 * Deprecated: Use a view template that takes IObservable<'T>
 */
export function BindArray_each_94AD30F(items, view, key, trans) {
    return eachk(arrayWrapO(items), view, key, trans);
}

/**
 * Bind keyed arrays to a simple template
 * Deprecated: Use a view template that takes IObservable<'T>
 */
export function BindArray_each_2646E1A3(items, view, key) {
    return eachk(arrayWrapO(items), view, key, empty());
}

/**
 * Bind keyed arrays to a simple template, with transitions
 */
export function BindArray_each_Z4B560797(items, view, key, trans) {
    return eachiko()(arrayWrapO(items))(new EachItemRenderer$1(2, [view]))((arg) => key(arg[1]))(trans);
}

/**
 * Bind keyed arrays to a simple template, with transitions
 */
export function BindArray_each_294BA4C5(items, view, key) {
    return eachiko()(arrayWrapO(items))(new EachItemRenderer$1(2, [view]))((arg) => key(arg[1]))(empty());
}

/**
 * Bind keyed arrays to a simple template, with transitions
 */
export function BindArray_eachs_223BB5DB(items, view, key) {
    return eachiko()(arrayWrapO(items))(new EachItemRenderer$1(1, [view]))((arg) => key(arg[1]))(empty());
}

export function BindArray_eachi_61B9CB02(items, view, trans) {
    return eachi(arrayWrapO(items), view, trans);
}

export function BindArray_eachi_BDF844E(items, view) {
    return eachi(arrayWrapO(items), view, empty());
}

/**
 * An alias for <c>Bind.el</c>
 */
export function BindOperators_op_GreaterDivide(a, b) {
    return Bind_el_ZF0512D0(a, b);
}

