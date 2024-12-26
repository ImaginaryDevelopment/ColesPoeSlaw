import { log as log_1, isEnabled } from "./Logging.fs.js";
import { setHeadTitle, setHeadEmbedScript, setHeadScript, setHeadStylesheet, Event_Hide, Event_Show, Event_Unmount, Event_Mount, asElement, rafu, once, Browser_Types_NodeList__NodeList_toSeq, Event_notifyUpdated, NodeKey_StyleClass, visitElementChildren, applyIfElement, setAttribute, textNode, Event_ElementReady, CustomDispatch$1_dispatch_4FBB8B24, ClassHelpers_removeFromClasslist, ClassHelpers_addToClasslist, ClassHelpers_toggleClass, ClassHelpers_setClass, setSvId, domId } from "./DomHelpers.fs.js";
import { disposeSafe, getEnumerator, curry2, defaultOf, equals, int32ToString } from "../fable-library-js.4.21.0/Util.js";
import { BuildContext, DomAction, SutilEffect_RegisterUnsubscribe_Z3FDC8A2C, SutilEffect_RegisterDisposable_5FAE877D, SutilGroup__AddChild_2AD740C9, SutilEffect_MakeGroup_5BDBED5B, sutilResult, BuildContext__get_ParentNode, SutilEffect__get_AsDomNode, SutilEffect__collectDomNodes, BuildContext__AddChild_2AD740C9, SutilEffect, ContextHelpers_withParent, buildChildren, SutilElement_Define_1C1F44C0, BuildContext__get_ParentElement, build, SutilEffect__Clear, SutilElement_Define_7B1F8004, SutilEffect_RegisterUnsubscribe_Z401BC241, SutilEffect_RegisterDisposable_2069CF16, SutilElement_Define_Z60F5000F } from "./Core.fs.js";
import { singleton, iterate } from "../fable-library-js.4.21.0/List.js";
import { join, printf, toText } from "../fable-library-js.4.21.0/String.js";
import { Union, toString } from "../fable-library-js.4.21.0/Types.js";
import { map, toArray as toArray_1, iterate as iterate_1 } from "../fable-library-js.4.21.0/Seq.js";
import { some, toArray } from "../fable-library-js.4.21.0/Option.js";
import { item } from "../fable-library-js.4.21.0/Array.js";
import { getResizer, ResizeObserver__Subscribe_3A5B6456 } from "./ResizeObserver.fs.js";
import { subscribe as subscribe_1 } from "../fable-library-js.4.21.0/Observable.js";
import { class_type, union_type } from "../fable-library-js.4.21.0/Reflection.js";

function logEnabled() {
    return isEnabled("core-elements");
}

function log(s) {
    log_1("core-elements", s);
}

function makeElementWithSutilId(doc, tag, ns) {
    const e = (ns !== "") ? doc.createElementNS(ns, tag) : document.createElement(tag);
    const id = domId() | 0;
    if (logEnabled()) {
        log((("create <" + tag) + "> #") + int32ToString(id));
    }
    setSvId(e, id);
    return e;
}

/**
 * Dispose all given items when the parent <c>SutilElement</c> is unmounted. Each item should implement <c>System.IDisposable</c>.
 * 
 * See also: <seealso cref="M:Sutil.Core.unsubscribeOnUnmount"/>
 */
export function disposeOnUnmount(ds) {
    return SutilElement_Define_Z60F5000F("disposeOnUnmount", (ctx) => {
        iterate((d) => {
            SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, d);
        }, ds);
    });
}

/**
 * Call each function of type `(unit -> unit)` when the element is unmounted
 */
export function unsubscribeOnUnmount(ds) {
    return SutilElement_Define_Z60F5000F("unsubscribeOnUnmount", (ctx) => {
        iterate((d) => {
            SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, d);
        }, ds);
    });
}

/**
 * Remove all existing DOM children before constructing the given `SutilElement`
 */
export function exclusive(f) {
    return SutilElement_Define_7B1F8004("exclusive", (ctx) => {
        if (logEnabled()) {
            log(`exclusive ${ctx.Parent}`);
        }
        SutilEffect__Clear(ctx.Parent);
        return build(f, ctx);
    });
}

/**
 * Provides a hook for the build context. If you need to use this, please log an issue in the github repo for Sutil :-)
 */
export function hookContext(hook) {
    return SutilElement_Define_Z60F5000F("hookContext", hook);
}

function _hookParent(hook, ctx) {
    return hook(BuildContext__get_ParentElement(ctx));
}

/**
 * Provides a hook for the parent DOM Node
 */
export function hookParent(hook) {
    return SutilElement_Define_Z60F5000F("hookParent", (ctx) => {
        _hookParent((arg) => {
            hook(arg);
        }, ctx);
    });
}

function _hookElement(hook, ctx) {
    return hook(BuildContext__get_ParentElement(ctx));
}

/**
 * Provides a hook for the parent <c>HTMLElement</c>. This can be used, for example, to mount a React component. See https://sutil.dev/#documentation-hosting-react
 * This will throw an <c>InvalidCastException</c> if the parent node is not an <c>HTMLElement</c>
 */
export function hookElement(hook) {
    return SutilElement_Define_Z60F5000F("hookElement", (ctx) => {
        _hookElement(hook, ctx);
    });
}

export const host = hookElement;

export function setClass(name) {
    return SutilElement_Define_Z60F5000F("setClass", (ctx) => {
        _hookElement((e) => {
            ClassHelpers_setClass(name, e);
        }, ctx);
    });
}

export function toggleClass(name) {
    return SutilElement_Define_Z60F5000F("toggleClass", (ctx) => {
        _hookElement((e) => {
            ClassHelpers_toggleClass(name, e);
        }, ctx);
    });
}

export function addClass(name) {
    return SutilElement_Define_Z60F5000F("addClass", (ctx) => {
        _hookElement((e) => {
            ClassHelpers_addToClasslist(name, e);
        }, ctx);
    });
}

export function removeClass(name) {
    return SutilElement_Define_Z60F5000F("removeClass", (ctx) => {
        _hookElement((e) => {
            ClassHelpers_removeFromClasslist(name, e);
        }, ctx);
    });
}

export function elns(ns, tag, xs) {
    return SutilElement_Define_1C1F44C0(toText(printf("<%s>"))(tag), xs, (ctx) => {
        const e = makeElementWithSutilId(ctx.Document, tag, ns);
        buildChildren(xs, ContextHelpers_withParent(new SutilEffect(1, [e]), ctx));
        BuildContext__AddChild_2AD740C9(ctx, new SutilEffect(1, [e]));
        CustomDispatch$1_dispatch_4FBB8B24(e, Event_ElementReady);
        return e;
    });
}

export function el(tag, xs) {
    return elns("", tag, xs);
}

export function keyedEl(tag, key, init, update) {
    return SutilElement_Define_1C1F44C0("keyedEl", init, (ctx) => {
        let e;
        const existing = ctx.Document.getElementById(key);
        if (!equals(existing, defaultOf())) {
            e = existing;
        }
        else {
            const svid = domId() | 0;
            if (logEnabled()) {
                log((("create <" + tag) + "> #") + toString((x) => x));
            }
            const e$0027 = ctx.Document.createElement(tag);
            buildChildren(init, ContextHelpers_withParent(new SutilEffect(1, [e$0027]), ctx));
            setSvId(e$0027, svid);
            e$0027.setAttribute("id", key);
            e = e$0027;
        }
        buildChildren(update, ContextHelpers_withParent(new SutilEffect(1, [e]), ctx));
        if (equals(e.parentElement, defaultOf())) {
            BuildContext__AddChild_2AD740C9(ctx, new SutilEffect(1, [e]));
            CustomDispatch$1_dispatch_4FBB8B24(e, Event_ElementReady);
        }
        return e;
    });
}

export function elAppend(selector, xs) {
    return SutilElement_Define_Z60F5000F("elAppend", (ctx) => {
        const e = ctx.Document.querySelector(selector);
        if (e == null) {
            throw new Error("Not found " + selector);
        }
        const id = domId() | 0;
        if (logEnabled()) {
            log((("append <" + selector) + "> #") + int32ToString(id));
        }
        setSvId(e, id);
        buildChildren(xs, ContextHelpers_withParent(new SutilEffect(1, [e]), ctx));
    });
}

/**
 * Merge these `SutilElement`s with another `SutilElement`.
 */
export function inject(elements, element) {
    return SutilElement_Define_7B1F8004("inject", (ctx) => {
        const e = build(element, ctx);
        iterate((n) => {
            buildChildren(elements, ContextHelpers_withParent(new SutilEffect(1, [n]), ctx));
        }, SutilEffect__collectDomNodes(e));
        return e;
    });
}

/**
 * Create a TextNode
 */
export function text(value) {
    return SutilElement_Define_1C1F44C0("text", [], (ctx) => {
        const tn = textNode(ctx.Document, value);
        BuildContext__AddChild_2AD740C9(ctx, new SutilEffect(1, [tn]));
        return tn;
    });
}

/**
 * Set a property on the parent DOM Node
 */
export function setProperty(key, value) {
    return SutilElement_Define_Z60F5000F(toText(printf("setProperty %s = %A"))(key)(value), (ctx) => {
        _hookParent((n) => {
            n[key] = value;
        }, ctx);
    });
}

/**
 * Backwards compatibility. Obsolete
 */
export function setValue() {
    return (key) => ((value) => setProperty(key, value));
}

export const nothing = SutilElement_Define_Z60F5000F("nothing", (value) => {
});

export function attr(name, value) {
    return SutilElement_Define_Z60F5000F(toText(printf("attr %s=%A"))(name)(value), (ctx) => {
        let arg_5, arg_6;
        const parent = SutilEffect__get_AsDomNode(ctx.Parent);
        try {
            setAttribute(parent, name, value);
        }
        catch (matchValue) {
            throw new Error((arg_5 = parent.nodeType, (arg_6 = parent.tagName, toText(printf("Cannot set attribute \'%s\' = \'%A\' on a %A %f %s"))(name)(value)(parent)(arg_5)(arg_6))));
        }
    });
}

/**
 * Raw html that will be parsed and added as a child of the parent element
 */
export function html(text_1) {
    return SutilElement_Define_7B1F8004("html", (ctx) => {
        applyIfElement((el_1) => {
            el_1.innerHTML = text_1.trim();
            iterate_1((cls) => {
                visitElementChildren(el_1, (ch) => {
                    ClassHelpers_addToClasslist(cls, ch);
                });
            }, toArray(ctx.Class));
            const matchValue = BuildContext__get_ParentElement(ctx)[NodeKey_StyleClass];
            if (matchValue != null) {
                const styleClass = matchValue;
                visitElementChildren(el_1, (ch_1) => {
                    ClassHelpers_addToClasslist(styleClass, ch_1);
                });
            }
            Event_notifyUpdated(ctx.Document);
        }, SutilEffect__get_AsDomNode(ctx.Parent));
        const nodes = toArray_1(Browser_Types_NodeList__NodeList_toSeq(BuildContext__get_ParentNode(ctx).childNodes));
        if (nodes.length === 1) {
            return sutilResult(new SutilEffect(1, [item(0, nodes)]));
        }
        else {
            const group = SutilEffect_MakeGroup_5BDBED5B("html", ctx.Parent, ctx.Previous);
            iterate_1((n_1) => {
                SutilGroup__AddChild_2AD740C9(group, new SutilEffect(1, [n_1]));
            }, nodes);
            return sutilResult(new SutilEffect(2, [group]));
        }
    });
}

export function postProcess(f, view) {
    return SutilElement_Define_7B1F8004("postProcess", (ctx) => f(build(view, ctx)));
}

export function postProcessElements(f, view) {
    return postProcess((se) => {
        console.log(some("post"), toString(se));
        applyIfElement(f, SutilEffect__get_AsDomNode(se));
        return se;
    }, view);
}

export function listenToResize(dispatch) {
    return SutilElement_Define_Z60F5000F("listenToResize", (ctx) => {
        const parent = BuildContext__get_ParentElement(ctx);
        const notify = () => {
            dispatch(parent);
        };
        once(Event_ElementReady, parent, (_arg) => {
            SutilEffect_RegisterDisposable_5FAE877D(parent, ResizeObserver__Subscribe_3A5B6456(getResizer(parent), notify));
            rafu(notify);
        });
    });
}

export function subscribe(source, handler) {
    return SutilElement_Define_Z60F5000F("subscribe", (ctx) => {
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, subscribe_1(curry2(handler)(ctx), source));
    });
}

export const autofocus = SutilElement_Define_Z60F5000F("autofocus", (ctx) => {
    const e = BuildContext__get_ParentElement(ctx);
    rafu(() => {
        e.focus();
        e.setSelectionRange(99999, 99999);
    });
});

export function id$0027(n) {
    return attr("id", n);
}

export function type$0027(n) {
    return attr("type", n);
}

export function for$0027(n) {
    return attr("for", n);
}

export function class$0027(n) {
    return attr("class", n);
}

export function unclass(n) {
    return attr("class-", n);
}

export function unclass$0027(n) {
    return attr("class-", n);
}

export function style(cssAttrs) {
    return attr("style", join("", map((tupledArg) => (`${tupledArg[0]}: ${tupledArg[1]};`), cssAttrs)));
}

export function styleAppend(cssAttrs) {
    return attr("style+", join("", map((tupledArg) => (`${tupledArg[0]}: ${tupledArg[1]};`), cssAttrs)));
}

export class EventModifier extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Once", "PreventDefault", "StopPropagation", "StopImmediatePropagation"];
    }
}

export function EventModifier_$reflection() {
    return union_type("Sutil.CoreElements.EventModifier", [], EventModifier, () => [[], [], [], []]);
}

function _on(event, fn, options, ctx) {
    const el_1 = BuildContext__get_ParentNode(ctx);
    const h = (e) => {
        const enumerator = getEnumerator(options);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const opt = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                switch (opt.tag) {
                    case 1: {
                        e.preventDefault();
                        break;
                    }
                    case 2: {
                        e.stopPropagation();
                        break;
                    }
                    case 3: {
                        e.stopImmediatePropagation();
                        break;
                    }
                    default:
                        el_1.removeEventListener(event, h);
                }
            }
        }
        finally {
            disposeSafe(enumerator);
        }
        fn(e);
    };
    el_1.addEventListener(event, h);
    SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, () => {
        el_1.removeEventListener(event, h);
    });
}

export function on(event, fn, options) {
    return SutilElement_Define_Z60F5000F(toText(printf("on%s"))(event), (ctx) => {
        _on(event, fn, options, ctx);
    });
}

export function onCustomEvent(event, fn, options) {
    return on(event, (arg) => {
        fn(arg);
    }, options);
}

export function onKeyboard(event, fn, options) {
    return on(event, (arg) => {
        fn(arg);
    }, options);
}

export function onMouse(event, fn, options) {
    return on(event, (arg) => {
        fn(arg);
    }, options);
}

export class InputEvent {
    constructor() {
    }
}

export function InputEvent_$reflection() {
    return class_type("Sutil.CoreElements.InputEvent", undefined, InputEvent);
}

export function InputEvent_$ctor() {
    return new InputEvent();
}

export function InputEvent__get_event(x) {
    return x;
}

export function InputEvent__get_inputElement(x) {
    return asElement(x.target);
}

export function onInput(fn, options) {
    return on("input", (arg) => {
        fn(arg);
    }, options);
}

export function onClick(fn, options) {
    return on("click", fn, options);
}

export function onElementReady(fn, options) {
    return on(Event_ElementReady, fn, options);
}

export function onMount(fn, options) {
    return on(Event_Mount, fn, options);
}

export function onUnmount(fn, options) {
    return on(Event_Unmount, fn, options);
}

export function onShow(fn, options) {
    return on(Event_Show, fn, options);
}

export function onHide(fn, options) {
    return on(Event_Hide, fn, options);
}

export function onKeyDown(fn, options) {
    return onKeyboard("keydown", fn, options);
}

export function onMouseMove(fn, options) {
    return onMouse("mousemove", fn, options);
}

export function subscribeOnMount(f) {
    return onMount((e) => {
        SutilEffect_RegisterUnsubscribe_Z3FDC8A2C(asElement(e.target), curry2(f)());
    }, singleton(new EventModifier(0, [])));
}

/**
 * A collection of <c>SutilElement</c>s as a single <c>SutilElement</c>. This is useful when we have a collection of
 * <c>SutilElements</c> that we don't want to wrap in their own containing DOM element.
 * 
 * Compare with <seealso cref="P:Sutil.Core.nothing"/>.
 */
export function fragment(elements) {
    return SutilElement_Define_7B1F8004("fragment", (ctx) => {
        const fragmentNode = new SutilEffect(2, [SutilEffect_MakeGroup_5BDBED5B("fragment", ctx.Parent, ctx.Previous)]);
        BuildContext__AddChild_2AD740C9(ctx, fragmentNode);
        buildChildren(elements, new BuildContext(ctx.Document, fragmentNode, ctx.Previous, new DomAction(0, []), ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline));
        return fragmentNode;
    });
}

export function declareResource(init, f) {
    return SutilElement_Define_Z60F5000F("declareResource", (ctx) => {
        const r = init();
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, r);
        f(r);
    });
}

export function headStylesheet(url) {
    return SutilElement_Define_Z60F5000F("headStyleSheet", (ctx) => {
        setHeadStylesheet(ctx.Document, url);
    });
}

export function headScript(url) {
    return SutilElement_Define_Z60F5000F("headScript", (ctx) => {
        setHeadScript(ctx.Document, url);
    });
}

export function headEmbedScript(source) {
    return SutilElement_Define_Z60F5000F("headEmbedScript", (ctx) => {
        setHeadEmbedScript(ctx.Document, source);
    });
}

export function headTitle(title) {
    return SutilElement_Define_Z60F5000F("headTitle", (ctx) => {
        setHeadTitle(ctx.Document, title);
    });
}

