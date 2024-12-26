import { error, log as log_1, isEnabled } from "./Logging.fs.js";
import { SutilEffect__InsertAfter_Z129D0740, SutilGroup__get_PrevDomNode, SutilGroup__RemoveChild_2AD740C9, SutilEffect__InsertBefore_Z129D0740, ContextHelpers_withPrevious, ContextHelpers_withParent, SutilElement_$reflection, SutilEffect__AppendChild_171AE942, SutilEffect__get_Id, errorNode, SutilEffect__collectDomNodes, SutilEffect_$reflection, SutilEffect_RegisterDisposable_5FAE877D, SutilEffect_RegisterUnsubscribe_Z3FDC8A2C, SutilEffect_RegisterUnsubscribe_Z401BC241, BuildContext__get_ParentElement, BuildContext__get_ParentNode, SutilEffect__Dispose, SutilGroup__RegisterUnsubscribe_3A5B6456, ContextHelpers_withReplace, SutilGroup__get_NextDomNode, build, BuildContext, BuildContext__AddChild_2AD740C9, SutilGroup__get_Id, SutilEffect_MakeGroup_5BDBED5B, SutilEffect, SutilElement_Define_7B1F8004, SutilEffect_RegisterDisposable_2069CF16, SutilElement_Define_Z60F5000F } from "./Core.fs.js";
import { subscribe } from "../fable-library-js.4.21.0/Observable.js";
import { identityHash, uncurry3, curry3, defaultOf, stringHash, safeHash, structuralHash, getEnumerator, equals, disposeSafe, curry2 } from "../fable-library-js.4.21.0/Util.js";
import { declareResource, fragment, text, attr, el as el_3 } from "./CoreElements.fs.js";
import { Store_map, Store_make, Store_modify, Store_get, Store_set, StoreOperators_op_DotGreater, StoreOperators_op_LessTwiddle, Store_subscribe2, Store_current, Store_subscribe } from "./Store.fs.js";
import { bind, value as value_4, some } from "../fable-library-js.4.21.0/Option.js";
import { distinctUntilChanged, distinctUntilChangedCompare } from "./Observable.fs.js";
import { makeIdGenerator, unsubify } from "./Helpers.fs.js";
import { ObservablePromise$1_$ctor_56E03C9D } from "./Promise.fs.js";
import { tryFind, iterate, tail, filter, head, isEmpty, empty, exactlyOne, singleton, contains, map } from "../fable-library-js.4.21.0/List.js";
import { map as map_1, toList as toList_1 } from "../fable-library-js.4.21.0/Seq.js";
import { rangeDouble } from "../fable-library-js.4.21.0/Range.js";
import { isSameNode, fixPosition, nodeStr, nodeStrShort, svId, DomEdit_appendChild, isElementNode, findNodeWithSvId, rafu, setAttribute, ClassHelpers_addToClasslist, ClassHelpers_removeFromClasslist, documentOf, Event_ElementReady, once, listen } from "./DomHelpers.fs.js";
import { join, printf, toText, isNullOrEmpty } from "../fable-library-js.4.21.0/String.js";
import { Union, Record, toString } from "../fable-library-js.4.21.0/Types.js";
import { getResizer, ResizeObserver__Subscribe_3A5B6456 } from "./ResizeObserver.fs.js";
import { union_type, tuple_type, lambda_type, record_type, class_type, int32_type } from "../fable-library-js.4.21.0/Reflection.js";
import { Microsoft_FSharp_Collections_FSharpList$1__List$1_ToCollectionWrapper, CollectionWrapper_exists, CollectionWrapper_tryFind, CollectionWrapper_mapi, CollectionWrapper_length, System_Array__$005B$005D$1_ToCollectionWrapper } from "./Types.fs.js";
import { TransitionProp, transitionNode, animateNode, clearAnimations } from "./Transition.fs.js";

function logEnabled() {
    return isEnabled("bind");
}

function log(s) {
    log_1("bind", s);
}

export function logEachEnabled(key) {
    return isEnabled(key);
}

export function bindSub(source, handler) {
    return SutilElement_Define_Z60F5000F("bindSub", (ctx) => {
        const unsub = subscribe(curry2(handler)(ctx), source);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
    });
}

export function elementFromException(x) {
    return el_3("div", [attr("style", "color: #FF8888;"), attr("title", "See console for details"), text("sutil: exception in bind: " + x.message)]);
}

export function bindElementC(store, element, compare) {
    return SutilElement_Define_7B1F8004("bindElementC", (ctx) => {
        let node = new SutilEffect(0, []);
        const group = SutilEffect_MakeGroup_5BDBED5B("bindc", ctx.Parent, ctx.Previous);
        const bindNode = new SutilEffect(2, [group]);
        if (logEnabled()) {
            log(`bind: ${SutilGroup__get_Id(group)} ctx=${ctx.Action} prev=${ctx.Previous}`);
        }
        BuildContext__AddChild_2AD740C9(ctx, bindNode);
        const run = () => {
            const bindCtx = new BuildContext(ctx.Document, bindNode, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
            const disposable = Store_subscribe((next) => {
                let before_1, before;
                try {
                    if (logEnabled()) {
                        log(`bind: rebuild ${SutilGroup__get_Id(group)} with ${next}`);
                    }
                    node = build(element(next), (before = SutilGroup__get_NextDomNode(group), ContextHelpers_withReplace(node, before, bindCtx)));
                }
                catch (x) {
                    console.error(some(x));
                    node = build(elementFromException(x), (before_1 = SutilGroup__get_NextDomNode(group), ContextHelpers_withReplace(node, before_1, bindCtx)));
                }
            }, distinctUntilChangedCompare(compare, store));
            SutilGroup__RegisterUnsubscribe_3A5B6456(group, () => {
                if (logEnabled()) {
                    log(`dispose: Bind.el: ${group}`);
                }
                SutilEffect__Dispose(node);
                disposeSafe(disposable);
            });
        };
        run();
        return bindNode;
    });
}

export function bindElementCO(store, element, compare) {
    return SutilElement_Define_7B1F8004("bindElementCO", (ctx) => {
        let node = new SutilEffect(0, []);
        const group = SutilEffect_MakeGroup_5BDBED5B("bindco", ctx.Parent, ctx.Previous);
        const bindNode = new SutilEffect(2, [group]);
        if (logEnabled()) {
            log(`bind: ${SutilGroup__get_Id(group)} ctx=${ctx.Action} prev=${ctx.Previous}`);
        }
        BuildContext__AddChild_2AD740C9(ctx, bindNode);
        const run = () => {
            const bindCtx = new BuildContext(ctx.Document, bindNode, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
            const disposable = Store_subscribe((next) => {
                let before_1, before;
                try {
                    if (logEnabled()) {
                        log(`bind: rebuild ${SutilGroup__get_Id(group)} with ${next}`);
                    }
                    node = build(element(store), (before = SutilGroup__get_NextDomNode(group), ContextHelpers_withReplace(node, before, bindCtx)));
                }
                catch (x) {
                    console.error(some("sutil.bindElementCO:parentNode: "), BuildContext__get_ParentNode(ctx), "exception:", x);
                    node = build(elementFromException(x), (before_1 = SutilGroup__get_NextDomNode(group), ContextHelpers_withReplace(node, before_1, bindCtx)));
                }
            }, distinctUntilChangedCompare(compare, store));
            SutilGroup__RegisterUnsubscribe_3A5B6456(group, () => {
                if (logEnabled()) {
                    log(`dispose: Bind.el: ${group}`);
                }
                SutilEffect__Dispose(node);
                disposeSafe(disposable);
            });
        };
        run();
        return bindNode;
    });
}

export function bindElement(store, element) {
    return bindElementCO(store, (arg) => element(Store_current(arg)), (_arg, _arg_1) => false);
}

/**
 * Backwards compatibility
 */
export function bindFragment() {
    return (store) => ((element) => bindElement(store, element));
}

export function bindElement2(a, b, element) {
    return SutilElement_Define_7B1F8004("bindElement2", (ctx) => {
        let node = new SutilEffect(0, []);
        const group = SutilEffect_MakeGroup_5BDBED5B("bind2", ctx.Parent, ctx.Previous);
        const bindNode = new SutilEffect(2, [group]);
        BuildContext__AddChild_2AD740C9(ctx, bindNode);
        const bindCtx = new BuildContext(ctx.Document, bindNode, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
        const d = Store_subscribe2(a, b, (next) => {
            let before;
            try {
                node = build(element(next), (before = SutilGroup__get_NextDomNode(group), ContextHelpers_withReplace(node, before, bindCtx)));
            }
            catch (x) {
                error(`Exception in bind: ${x.message}`);
            }
        });
        SutilGroup__RegisterUnsubscribe_3A5B6456(group, () => {
            unsubify(d, undefined);
        });
        return bindNode;
    });
}

export function bindElementKO(store, element, key) {
    const compare = (a, b) => equals(key(a), key(b));
    return bindElementCO(store, element, compare);
}

export function bindElementK(store, element, key) {
    const compare = (a, b) => equals(key(a), key(b));
    return bindElementC(store, element, compare);
}

export function bindPromiseStore(p, waiting, result, fail) {
    return bindElement(p, (_arg) => {
        switch (_arg.tag) {
            case 1: {
                const r = _arg.fields[0];
                return result(r);
            }
            case 2: {
                const x = _arg.fields[0];
                return fail(x);
            }
            default:
                return waiting;
        }
    });
}

export function bindPromise(p, waiting, result, fail) {
    const x = ObservablePromise$1_$ctor_56E03C9D(p);
    return bindPromiseStore(x, waiting, result, fail);
}

function getInputChecked(el) {
    return el["checked"];
}

function setInputChecked(el, v) {
    el["checked"] = v;
}

function getInputValue(el) {
    return el["value"];
}

function setInputValue(el, v) {
    el["value"] = v;
}

export function bindSelected(selection, dispatch) {
    return SutilElement_Define_Z60F5000F("bindSelected", (ctx) => {
        const selectElement = BuildContext__get_ParentElement(ctx);
        const selOps = selectElement.selectedOptions;
        const op = (coll, i) => (coll[i]);
        const opValue = (op_1) => (op_1["__value"]);
        const getValueList = () => map((i_1) => opValue(op(selOps, i_1)), toList_1(rangeDouble(0, 1, selOps.length - 1)));
        const updateSelected = (v) => {
            const ops = selectElement.options;
            const enumerator = getEnumerator(toList_1(rangeDouble(0, 1, ops.length - 1)));
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const i_2 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]() | 0;
                    const o = op(ops, i_2);
                    o.selected = contains(opValue(o), v, {
                        Equals: equals,
                        GetHashCode: structuralHash,
                    });
                }
            }
            finally {
                disposeSafe(enumerator);
            }
        };
        let unsubInput;
        const clo = listen("input", selectElement, (_arg) => {
            dispatch(getValueList());
        });
        unsubInput = (() => {
            clo();
        });
        once(Event_ElementReady, selectElement, (_arg_1) => {
            const unsub = Store_subscribe(updateSelected, selection);
            SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
        });
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

export function bindSelectMultiple(store) {
    return bindSelected(store, (sln) => {
        StoreOperators_op_LessTwiddle(store, sln);
    });
}

export function bindSelectSingle(store) {
    return bindSelected(StoreOperators_op_DotGreater(store, singleton), (sln) => {
        Store_set(store, exactlyOne(sln));
    });
}

export function bindSelectOptional(store) {
    const toList = (topt) => {
        if (topt != null) {
            const t = value_4(topt);
            return singleton(t);
        }
        else {
            return empty();
        }
    };
    const fromList = (list) => {
        if (!isEmpty(list)) {
            const x = head(list);
            return some(x);
        }
        else {
            return undefined;
        }
    };
    return bindSelected(StoreOperators_op_DotGreater(store, toList), (sln) => {
        Store_set(store, fromList(sln));
    });
}

function isNullString(obj) {
    if (obj == null) {
        return true;
    }
    else {
        return isNullOrEmpty(obj);
    }
}

function getId(s) {
    return safeHash(s);
}

export function bindGroup(store) {
    return SutilElement_Define_Z60F5000F("bindGroup", (ctx) => {
        let s;
        const parent = BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        if ((s = matchValue, isNullString(s))) {
            const s_1 = matchValue;
            name = (`store-${getId(store)}`);
        }
        else {
            const s_2 = matchValue;
            name = s_2;
        }
        parent["name"] = name;
        const getValueList = () => {
            const inputs = documentOf(parent).querySelectorAll(`input[name="${name}"]`);
            return map(getInputValue, filter(getInputChecked, map((i) => (inputs[i]), toList_1(rangeDouble(0, 1, inputs.length - 1)))));
        };
        const updateChecked = (v) => {
            setInputChecked(parent, contains(getInputValue(parent), v, {
                Equals: (x, y) => (x === y),
                GetHashCode: stringHash,
            }));
        };
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            Store_set(store, getValueList());
        });
        unsubInput = (() => {
            clo();
        });
        once(Event_ElementReady, parent, (_arg_1) => {
            updateChecked(Store_get(store));
        });
        const unsub = Store_subscribe(updateChecked, store);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

export function bindRadioGroup(store) {
    return SutilElement_Define_Z60F5000F("bindRadioGroup", (ctx) => {
        let s;
        const parent = BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        if ((s = matchValue, isNullString(s))) {
            const s_1 = matchValue;
            name = (`store-${getId(store)}`);
        }
        else {
            const s_2 = matchValue;
            name = s_2;
        }
        parent["name"] = name;
        const updateChecked = (v) => {
            setInputChecked(parent, toString(v) === getInputValue(parent));
        };
        let inputUnsub;
        const clo = listen("input", parent, (_arg) => {
            Store_set(store, parent["value"]);
        });
        inputUnsub = (() => {
            clo();
        });
        once(Event_ElementReady, parent, (_arg_1) => {
            updateChecked(Store_get(store));
        });
        const unsub = Store_subscribe((arg_2) => {
            updateChecked(arg_2);
        }, store);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, inputUnsub);
    });
}

export function bindClassToggle(toggle, classesWhenTrue, classesWhenFalse) {
    return bindSub(toggle, (ctx, active) => {
        if (active) {
            ClassHelpers_removeFromClasslist(classesWhenFalse, BuildContext__get_ParentElement(ctx));
            ClassHelpers_addToClasslist(classesWhenTrue, BuildContext__get_ParentElement(ctx));
        }
        else {
            ClassHelpers_removeFromClasslist(classesWhenTrue, BuildContext__get_ParentElement(ctx));
            ClassHelpers_addToClasslist(classesWhenFalse, BuildContext__get_ParentElement(ctx));
        }
    });
}

export function bindBoolAttr(toggle, boolAttr) {
    return bindSub(toggle, (ctx, active) => {
        if (active) {
            BuildContext__get_ParentElement(ctx).setAttribute(boolAttr, boolAttr);
        }
        else {
            BuildContext__get_ParentElement(ctx).removeAttribute(boolAttr);
        }
    });
}

export function bindClass(toggle, classes) {
    return bindClassToggle(toggle, classes, "");
}

export function bindClassNames(classNames) {
    return bindSub(classNames, (ctx, current) => {
        BuildContext__get_ParentElement(ctx).className = "";
        BuildContext__get_ParentElement(ctx).classList.add(...Array.from(current));
    });
}

export function bindClassName(classNames) {
    return bindSub(classNames, (ctx, current) => {
        BuildContext__get_ParentElement(ctx).className = current;
    });
}

/**
 * Bind a store value to an element attribute. Updates to the element are unhandled
 */
export function bindAttrIn(attrName, store) {
    return SutilElement_Define_Z60F5000F("bindAttrIn", (ctx) => {
        let el;
        const unsub = (attrName === "class") ? Store_subscribe((cls) => {
            BuildContext__get_ParentElement(ctx).className = toString(cls);
        }, store) : Store_subscribe((el = BuildContext__get_ParentElement(ctx), (value) => {
            setAttribute(el, attrName, value);
        }), store);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
    });
}

export function bindAttrOut(attrName, onchange) {
    return SutilElement_Define_Z60F5000F("bindAttrOut", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            onchange(parent[attrName]);
        });
        unsubInput = (() => {
            clo();
        });
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

export function attrNotify(attrName, value, onchange) {
    return SutilElement_Define_Z60F5000F("attrNotify", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            onchange(parent[attrName]);
        });
        unsubInput = (() => {
            clo();
        });
        parent[attrName] = value;
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

export function bindAttrBoth(attrName, value, onchange) {
    return fragment([bindAttrIn(attrName, value), bindAttrOut(attrName, onchange)]);
}

export function bindListen(attrName, store, event, handler) {
    return SutilElement_Define_Z60F5000F("bindListen", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let unsubA;
        const clo = listen(event, parent, handler);
        unsubA = (() => {
            clo();
        });
        const unsubB = Store_subscribe((value) => {
            parent[attrName] = value;
        }, store);
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubA);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsubB);
    });
}

function bindAttrConvert(attrName, store, convert) {
    return SutilElement_Define_Z60F5000F("bindAttrConvert", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            Store_set(store, convert(parent[attrName]));
        });
        unsubInput = (() => {
            clo();
        });
        const unsub = Store_subscribe((value) => {
            parent[attrName] = value;
        }, store);
        SutilEffect_RegisterUnsubscribe_Z3FDC8A2C(parent, unsubInput);
        SutilEffect_RegisterDisposable_5FAE877D(parent, unsub);
    });
}

function convertObj(v) {
    return v;
}

export function bindAttrStoreBoth(attrName, store) {
    return bindAttrConvert(attrName, store, convertObj);
}

export function bindAttrStoreOut(attrName, store) {
    return SutilElement_Define_Z60F5000F("bindAttrStoreOut", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            Store_set(store, convertObj(parent[attrName]));
        });
        unsubInput = (() => {
            clo();
        });
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

function attrIsSizeRelated(attrName) {
    const upr = attrName.toLocaleUpperCase();
    if (upr.indexOf("WIDTH") >= 0) {
        return true;
    }
    else {
        return upr.indexOf("HEIGHT") >= 0;
    }
}

export function listenToProp(attrName, dispatch) {
    return SutilElement_Define_Z60F5000F(toText(printf("listenToProp %s"))(attrName), (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        const notify = () => {
            dispatch(convertObj(parent[attrName]));
        };
        once(Event_ElementReady, parent, (_arg) => {
            let clo_1;
            if (attrIsSizeRelated(attrName)) {
                SutilEffect_RegisterDisposable_5FAE877D(parent, ResizeObserver__Subscribe_3A5B6456(getResizer(parent), notify));
            }
            else {
                SutilEffect_RegisterUnsubscribe_Z3FDC8A2C(parent, (clo_1 = listen("input", parent, (_arg_1) => {
                    notify();
                }), () => {
                    clo_1();
                }));
            }
            rafu(notify);
        });
    });
}

export function bindPropOut(attrName, store) {
    return listenToProp(attrName, (newValue) => {
        Store_set(store, newValue);
    });
}

export class KeyedStoreItem$2 extends Record {
    constructor(Key, Node$, SvId, Position, Value) {
        super();
        this.Key = Key;
        this.Node = Node$;
        this.SvId = (SvId | 0);
        this.Position = Position;
        this.Value = Value;
    }
}

export function KeyedStoreItem$2_$reflection(gen0, gen1) {
    return record_type("Sutil.Bindings.KeyedStoreItem`2", [gen0, gen1], KeyedStoreItem$2, () => [["Key", gen1], ["Node", SutilEffect_$reflection()], ["SvId", int32_type], ["Position", class_type("Sutil.IStore`1", [int32_type])], ["Value", class_type("Sutil.IStore`1", [gen0])]]);
}

function findCurrentNode(doc, current, id) {
    if ((current == null) ? true : (current.parentNode == null)) {
        if (logEnabled()) {
            log(`each: Find node with id ${id}`);
        }
        const matchValue = findNodeWithSvId(doc, id);
        if (matchValue != null) {
            const n = matchValue;
            if (logEnabled()) {
                log(`each: Found it: ${n}`);
            }
            return n;
        }
        else {
            if (logEnabled()) {
                log("each: Disaster: cannot find node");
            }
            return defaultOf();
        }
    }
    else {
        return current;
    }
}

function findCurrentElement(doc, current, id) {
    let n;
    const node = findCurrentNode(doc, current, id);
    if (equals(node, defaultOf())) {
        return defaultOf();
    }
    else if ((n = node, isElementNode(n))) {
        const n_1 = node;
        return n_1;
    }
    else {
        const x = node;
        if (logEnabled()) {
            log("each: Disaster: found node but it\'s not an HTMLElement");
        }
        return defaultOf();
    }
}

const genEachId = makeIdGenerator();

function asDomNode(element, ctx) {
    const matchValue = SutilEffect__collectDomNodes(element);
    if (isEmpty(matchValue)) {
        return errorNode(ctx.Parent, `Error: Empty node from ${element} #${SutilEffect__get_Id(element)}`);
    }
    else if (isEmpty(tail(matchValue))) {
        const n = head(matchValue);
        return n;
    }
    else {
        const xs = matchValue;
        const doc = ctx.Document;
        const tmpDiv = doc.createElement("div");
        const en = errorNode(new SutilEffect(1, [tmpDiv]), "\'fragment\' not allowed as root for \'each\' blocks");
        DomEdit_appendChild(tmpDiv, en);
        SutilEffect__AppendChild_171AE942(ctx.Parent, tmpDiv);
        iterate((x) => {
            DomEdit_appendChild(tmpDiv, x);
        }, xs);
        return tmpDiv;
    }
}

function asDomElement(element, ctx) {
    const node = asDomNode(element, ctx);
    if (isElementNode(node)) {
        return node;
    }
    else {
        const doc = ctx.Document;
        const span = doc.createElement("span");
        DomEdit_appendChild(span, node);
        SutilEffect__AppendChild_171AE942(ctx.Parent, span);
        return span;
    }
}

export class EachItemRenderer$1 extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Static", "LiveStore", "Live", "StaticIndexed", "LiveIndexed"];
    }
}

export function EachItemRenderer$1_$reflection(gen0) {
    return union_type("Sutil.Bindings.EachItemRenderer`1", [gen0], EachItemRenderer$1, () => [[["Item", lambda_type(gen0, SutilElement_$reflection())]], [["Item", lambda_type(class_type("Sutil.IReadOnlyStore`1", [gen0]), SutilElement_$reflection())]], [["Item", lambda_type(class_type("System.IObservable`1", [gen0]), SutilElement_$reflection())]], [["Item", lambda_type(tuple_type(int32_type, gen0), SutilElement_$reflection())]], [["Item", lambda_type(tuple_type(class_type("System.IObservable`1", [int32_type]), class_type("System.IObservable`1", [gen0])), SutilElement_$reflection())]]]);
}

function eachItemRender(renderer, index, item) {
    switch (renderer.tag) {
        case 3: {
            const v_1 = renderer.fields[0];
            return v_1([index.Value, item.Value]);
        }
        case 2: {
            const v_2 = renderer.fields[0];
            return v_2(item);
        }
        case 1: {
            const v_3 = renderer.fields[0];
            return v_3(item);
        }
        case 4: {
            const v_4 = renderer.fields[0];
            const tupledArg = [index, item];
            return v_4([tupledArg[0], tupledArg[1]]);
        }
        default: {
            const v = renderer.fields[0];
            return v(item.Value);
        }
    }
}

export function getAnimator(trans) {
    return bind((x) => {
        if (x.tag === 3) {
            const a_1 = x.fields[0];
            return (arg) => {
                const clo = curry3(a_1)(arg);
                return (arg_1) => {
                    const clo_1 = clo(arg_1);
                    return clo_1;
                };
            };
        }
        else {
            return undefined;
        }
    }, tryFind((p) => {
        if (p.tag === 3) {
            const a = p.fields[0];
            return true;
        }
        else {
            return false;
        }
    }, trans));
}

export function eachiko_wrapper(items, view, key, trans) {
    const animator = getAnimator(trans);
    return SutilElement_Define_7B1F8004("eachiko_wrapper", (ctx) => {
        log(`eachiko: Previous = ${ctx.Previous}`);
        const eachGroup = SutilEffect_MakeGroup_5BDBED5B("each", ctx.Parent, ctx.Previous);
        const eachNode = new SutilEffect(2, [eachGroup]);
        BuildContext__AddChild_2AD740C9(ctx, eachNode);
        let state = System_Array__$005B$005D$1_ToCollectionWrapper([]);
        const eachId = (genEachId() + 1) | 0;
        const idKey = "svEachId";
        const hasEid = (n) => (n.hasOwnProperty(idKey));
        const eachIdOf = (n_1) => {
            if (hasEid(n_1)) {
                return (n_1[idKey]) | 0;
            }
            else {
                return -1;
            }
        };
        const setEid = (n_2) => {
            n_2[idKey] = eachId;
        };
        const eachCtx = ContextHelpers_withParent(eachNode, ctx);
        const unsub = Store_subscribe((newItems) => {
            if (logEachEnabled("each")) {
                log("-- Each Block Render -------------------------------------");
                log(`caching rects for render. Previous: ${CollectionWrapper_length(state)} items. Current ${CollectionWrapper_length(newItems)} items`);
            }
            if (logEachEnabled("each")) {
                log(`Previous = ${ctx.Previous}`);
            }
            let prevNode = new SutilEffect(0, []);
            const newState = CollectionWrapper_mapi((itemIndex, item) => {
                const itemKey = key([itemIndex, item]);
                const optKi = CollectionWrapper_tryFind((x) => equals(x.Key, itemKey), state);
                if (optKi != null) {
                    const ki = optKi;
                    Store_modify((_arg) => itemIndex, ki.Position);
                    Store_modify((_arg_1) => item, ki.Value);
                    const el = findCurrentElement(ctx.Document, defaultOf(), ki.SvId);
                    if (logEachEnabled("each")) {
                        log(`existing item ${ki.SvId} ${ki.Key}`);
                    }
                    if (animator == null) {
                    }
                    else {
                        const a = animator;
                        clearAnimations(el);
                        animateNode(el, el.getBoundingClientRect(), uncurry3(a));
                    }
                    prevNode = ki.Node;
                    return ki;
                }
                else {
                    const storePos = Store_make(itemIndex);
                    const storeVal = Store_make(item);
                    const ctx2 = ContextHelpers_withPrevious(prevNode, eachCtx);
                    if (logEachEnabled("each")) {
                        log(`++ creating new item '${item}' (key=${itemKey}) with prev='${prevNode}' action=${ctx2.Action}`);
                    }
                    const sutilNode = build(eachItemRender(view, storePos, storeVal), ctx2);
                    const itemNode = asDomElement(sutilNode, ctx2);
                    if (logEachEnabled("each")) {
                        log(`-- created #${svId(itemNode)} with prev='${nodeStrShort(itemNode.previousSibling)}'`);
                    }
                    setEid(itemNode);
                    SutilEffect_RegisterDisposable_2069CF16(sutilNode, storePos);
                    SutilEffect_RegisterDisposable_2069CF16(sutilNode, storeVal);
                    transitionNode(itemNode, trans, singleton(new TransitionProp(0, [toString(itemKey)])), true, (value) => {
                    }, (value_1) => {
                    });
                    const newKi = new KeyedStoreItem$2(itemKey, sutilNode, svId(itemNode), storePos, storeVal);
                    const prevEl = itemNode.previousSibling;
                    if (logEachEnabled("each")) {
                        log(`new item #${newKi.SvId} eid=${eachIdOf(itemNode)} ${itemKey} prevNode=${prevNode} prevSibling=${nodeStr(prevEl)}`);
                    }
                    prevNode = sutilNode;
                    return newKi;
                }
            }, newItems);
            if (logEachEnabled("each")) {
                log("Remove old items");
            }
            const enumerator = getEnumerator(state);
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const oldItem = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (!CollectionWrapper_exists((x_1) => equals(x_1.Key, oldItem.Key), newState)) {
                        if (logEachEnabled("each")) {
                            log(`removing key ${oldItem.Key}`);
                        }
                        const el_1 = findCurrentElement(ctx.Document, defaultOf(), oldItem.SvId);
                        fixPosition(el_1);
                        const value_2 = SutilEffect__InsertBefore_Z129D0740(ctx.Parent, el_1, defaultOf());
                        transitionNode(el_1, trans, singleton(new TransitionProp(0, [toString(oldItem.Key)])), false, (value_3) => {
                        }, (e) => {
                            SutilGroup__RemoveChild_2AD740C9(eachGroup, oldItem.Node);
                        });
                    }
                }
            }
            finally {
                disposeSafe(enumerator);
            }
            let prevDomNode = SutilGroup__get_PrevDomNode(eachGroup);
            const enumerator_1 = getEnumerator(newState);
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const ki_1 = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (logEachEnabled("each")) {
                        log(`Checking order: #${ki_1.SvId}`);
                    }
                    const el_2 = findCurrentElement(ctx.Document, defaultOf(), ki_1.SvId);
                    if (!(el_2 == null)) {
                        if (!isSameNode(prevDomNode, el_2.previousSibling)) {
                            if (logEachEnabled("each")) {
                                log(`reordering: ki=${nodeStr(el_2)} prevNode=${nodeStr(prevDomNode)}`);
                            }
                            if (logEachEnabled("each")) {
                                log(`reordering key ${ki_1.Key} ${nodeStrShort(el_2)} parent=${el_2.parentNode}`);
                            }
                            SutilEffect__InsertAfter_Z129D0740(ctx.Parent, el_2, prevDomNode);
                        }
                        prevDomNode = el_2;
                    }
                }
            }
            finally {
                disposeSafe(enumerator_1);
            }
            state = newState;
        }, items);
        SutilGroup__RegisterUnsubscribe_3A5B6456(eachGroup, () => {
            unsubify(unsub, undefined);
        });
        return eachNode;
    });
}

function duc() {
    return distinctUntilChanged;
}

export function eachiko() {
    return (items) => ((view) => ((key) => ((trans) => eachiko_wrapper(items, view, key, trans))));
}

export function each(items, view, trans) {
    return eachiko_wrapper(items, new EachItemRenderer$1(0, [view]), (tupledArg) => {
        let copyOfStruct;
        const i = tupledArg[0] | 0;
        const v = tupledArg[1];
        return [i, (copyOfStruct = v, identityHash(copyOfStruct))];
    }, trans);
}

export function eachi(items, view, trans) {
    return eachiko()(items)(new EachItemRenderer$1(3, [view]))((tuple) => tuple[0])(trans);
}

export function eachio(items, view, trans) {
    return eachiko()(items)(new EachItemRenderer$1(4, [view]))((tuple) => tuple[0])(trans);
}

export function eachk(items, view, key, trans) {
    return eachiko()(items)(new EachItemRenderer$1(0, [view]))((arg) => key(arg[1]))(trans);
}

export function bindStore(init, app) {
    return SutilElement_Define_7B1F8004("bindStore", (ctx) => {
        const s = Store_make(init);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, s);
        return build(app(s), ctx);
    });
}

export function declareStore(init, f) {
    return declareResource(() => Store_make(init), f);
}

export function bindStyle(value, f) {
    return SutilElement_Define_Z60F5000F("bindStyle", (ctx) => {
        const style = BuildContext__get_ParentElement(ctx).style;
        const unsub = subscribe(curry2(f)(style), value);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
    });
}

export function bindElementEffect(value, f) {
    return SutilElement_Define_Z60F5000F("bindElementEffect", (ctx) => {
        const el = BuildContext__get_ParentElement(ctx);
        const unsub = subscribe(curry2(f)(el), value);
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, unsub);
    });
}

export function bindWidthHeight(wh) {
    return bindStyle(wh, (style, tupledArg) => {
        const w = tupledArg[0];
        const h = tupledArg[1];
        if ((w !== 0) && (h !== 0)) {
            style.width = (w.toString() + "px");
            style.height = (h.toString() + "px");
        }
    });
}

export function bindLeftTop(xy) {
    return bindStyle(xy, (style, tupledArg) => {
        const x = tupledArg[0];
        const y = tupledArg[1];
        if ((x !== 0) && (y !== 0)) {
            style.left = (x.toString() + "px");
            style.top = (y.toString() + "px");
        }
    });
}

export function op_BarEqualsGreater(store, element) {
    return bindElement(store, element);
}

export function cssAttrsToString(cssAttrs) {
    return join("", map_1((tupledArg) => {
        const n = tupledArg[0];
        const v = tupledArg[1];
        return `${n}: ${v};`;
    }, cssAttrs));
}

export function listWrap(list) {
    return Microsoft_FSharp_Collections_FSharpList$1__List$1_ToCollectionWrapper(list);
}

export function listWrapO(list) {
    return Store_map(listWrap, list);
}

export function arrayWrap(arr) {
    return System_Array__$005B$005D$1_ToCollectionWrapper(arr);
}

export function arrayWrapO(arr) {
    return Store_map(arrayWrap, arr);
}

