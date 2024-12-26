import { error, log as log_2, isEnabled } from "./Logging.fs.js";
import { unsubify, makeIdGenerator } from "./Helpers.fs.js";
import { SutilEffect__InsertAfter_Z129D0740, SutilGroup__get_PrevDomNode, SutilGroup__RemoveChild_2AD740C9, SutilEffect__InsertBefore_Z129D0740, ContextHelpers_withPrevious, ContextHelpers_withParent, SutilEffect__AppendChild_171AE942, SutilEffect__get_Id, errorNode, SutilEffect__collectDomNodes, SutilEffect_$reflection, SutilEffect_RegisterDisposable_5FAE877D, SutilEffect_RegisterUnsubscribe_Z3FDC8A2C, BuildContext__get_ParentNode, SutilEffect_RegisterUnsubscribe_Z401BC241, BuildContext__get_ParentElement, SutilEffect__Dispose, SutilGroup__RegisterUnsubscribe_3A5B6456, ContextHelpers_withReplace, SutilGroup__get_NextDomNode, build, BuildContext, BuildContext__AddChild_2AD740C9, SutilGroup__get_Id, SutilEffect_MakeGroup_5BDBED5B, SutilEffect, SutilElement_Define_7B1F8004, SutilEffect_RegisterDisposable_2069CF16, SutilElement_Define_Z60F5000F } from "./Core.fs.js";
import { subscribe } from "../fable-library-js.4.21.0/Observable.js";
import { identityHash, defaultOf, stringHash, safeHash, structuralHash, getEnumerator, equals, disposeSafe, curry2 } from "../fable-library-js.4.21.0/Util.js";
import { declareResource, fragment, text, attr, el as el_4 } from "./CoreElements.fs.js";
import { Store_map, Store_make, Store_modify, Store_get, Store_set, StoreOperators_op_DotGreater, StoreOperators_op_LessTwiddle, Store_subscribe2, Store_current, Store_subscribe } from "./Store.fs.js";
import { value as value_4, some } from "../fable-library-js.4.21.0/Option.js";
import { distinctUntilChanged, distinctUntilChangedCompare } from "./Observable.fs.js";
import { ObservablePromise$1_$ctor_56E03C9D } from "./Promise.fs.js";
import { isSameNode, fixPosition, nodeStr, nodeStrShort, svId, rectStr, DomEdit_appendChild, isElementNode, findNodeWithSvId, rafu, setAttribute, ClassHelpers_addToClasslist, ClassHelpers_removeFromClasslist, documentOf, Event_ElementReady, once, listen } from "./DomHelpers.fs.js";
import { iterate, tail, filter, head, isEmpty, empty, exactlyOne, singleton, contains, map } from "../fable-library-js.4.21.0/List.js";
import { map as map_1, toList as toList_1 } from "../fable-library-js.4.21.0/Seq.js";
import { rangeDouble } from "../fable-library-js.4.21.0/Range.js";
import { join, printf, toText, isNullOrEmpty } from "../fable-library-js.4.21.0/String.js";
import { Record, toString } from "../fable-library-js.4.21.0/Types.js";
import { getResizer, ResizeObserver__Subscribe_3A5B6456 } from "./ResizeObserver.fs.js";
import { record_type, class_type, int32_type } from "../fable-library-js.4.21.0/Reflection.js";
import { Microsoft_FSharp_Collections_FSharpList$1__List$1_ToCollectionWrapper, CollectionWrapper_exists, CollectionWrapper_tryFind, CollectionWrapper_mapi, CollectionWrapper_map, CollectionWrapper_length, System_Array__$005B$005D$1_ToCollectionWrapper } from "./Types.fs.js";
import { TransitionProp, transitionNode, animateNode, clearAnimations } from "./Transition.fs.js";

function logEnabled() {
    return isEnabled("bind");
}

function log(s) {
    log_2("bind", s);
}

const bindId = makeIdGenerator();

export function bindSub(source, handler) {
    return SutilElement_Define_Z60F5000F("bindSub", (ctx) => {
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, subscribe(curry2(handler)(ctx), source));
    });
}

export function elementFromException(x) {
    return el_4("div", [attr("style", "color: #FF8888;"), attr("title", "See console for details"), text("sutil: exception in bind: " + x.message)]);
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
    return bindElementCO(store, element, (a, b) => equals(key(a), key(b)));
}

export function bindElementK(store, element, key) {
    return bindElementC(store, element, (a, b) => equals(key(a), key(b)));
}

export function bindPromiseStore(p, waiting, result, fail) {
    return bindElement(p, (_arg) => {
        switch (_arg.tag) {
            case 1:
                return result(_arg.fields[0]);
            case 2:
                return fail(_arg.fields[0]);
            default:
                return waiting;
        }
    });
}

export function bindPromise(p, waiting, result, fail) {
    return bindPromiseStore(ObservablePromise$1_$ctor_56E03C9D(p), waiting, result, fail);
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
        let unsubInput;
        const clo = listen("input", selectElement, (_arg) => {
            dispatch(map((i_1) => opValue(op(selOps, i_1)), toList_1(rangeDouble(0, 1, selOps.length - 1))));
        });
        unsubInput = (() => {
            clo();
        });
        once(Event_ElementReady, selectElement, (_arg_1) => {
            SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, Store_subscribe((v) => {
                const ops = selectElement.options;
                const enumerator = getEnumerator(toList_1(rangeDouble(0, 1, ops.length - 1)));
                try {
                    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                        const o = op(ops, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                        o.selected = contains(opValue(o), v, {
                            Equals: equals,
                            GetHashCode: structuralHash,
                        });
                    }
                }
                finally {
                    disposeSafe(enumerator);
                }
            }, selection));
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
    return bindSelected(StoreOperators_op_DotGreater(store, (topt) => {
        if (topt != null) {
            return singleton(value_4(topt));
        }
        else {
            return empty();
        }
    }), (sln) => {
        let list;
        Store_set(store, (list = sln, !isEmpty(list) ? some(head(list)) : undefined));
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
        const parent = BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        name = (isNullString(matchValue) ? (`store-${getId(store)}`) : matchValue);
        parent["name"] = name;
        const updateChecked = (v) => {
            setInputChecked(parent, contains(getInputValue(parent), v, {
                Equals: (x, y) => (x === y),
                GetHashCode: stringHash,
            }));
        };
        let unsubInput;
        const clo = listen("input", parent, (_arg) => {
            let inputs;
            Store_set(store, (inputs = documentOf(parent).querySelectorAll(`input[name="${name}"]`), map(getInputValue, filter(getInputChecked, map((i) => (inputs[i]), toList_1(rangeDouble(0, 1, inputs.length - 1)))))));
        });
        unsubInput = (() => {
            clo();
        });
        once(Event_ElementReady, parent, (_arg_1) => {
            updateChecked(Store_get(store));
        });
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, Store_subscribe(updateChecked, store));
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, unsubInput);
    });
}

export function bindRadioGroup(store) {
    return SutilElement_Define_Z60F5000F("bindRadioGroup", (ctx) => {
        const parent = BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        name = (isNullString(matchValue) ? (`store-${getId(store)}`) : matchValue);
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
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, Store_subscribe((arg_2) => {
            updateChecked(arg_2);
        }, store));
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
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, (attrName === "class") ? Store_subscribe((cls) => {
            BuildContext__get_ParentElement(ctx).className = toString(cls);
        }, store) : Store_subscribe((el = BuildContext__get_ParentElement(ctx), (value) => {
            setAttribute(el, attrName, value);
        }), store));
    });
}

export function bindAttrOut(attrName, onchange) {
    return SutilElement_Define_Z60F5000F("bindAttrOut", (ctx) => {
        let clo;
        const parent = BuildContext__get_ParentNode(ctx);
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, (clo = listen("input", parent, (_arg) => {
            onchange(parent[attrName]);
        }), () => {
            clo();
        }));
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
        let clo;
        const parent = BuildContext__get_ParentNode(ctx);
        SutilEffect_RegisterUnsubscribe_Z401BC241(ctx.Parent, (clo = listen("input", parent, (_arg) => {
            Store_set(store, convertObj(parent[attrName]));
        }), () => {
            clo();
        }));
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
    constructor(Key, Node$, SvId, Position, Value, Rect) {
        super();
        this.Key = Key;
        this.Node = Node$;
        this.SvId = (SvId | 0);
        this.Position = Position;
        this.Value = Value;
        this.Rect = Rect;
    }
}

export function KeyedStoreItem$2_$reflection(gen0, gen1) {
    return record_type("Sutil.Bindings.KeyedStoreItem`2", [gen0, gen1], KeyedStoreItem$2, () => [["Key", gen1], ["Node", SutilEffect_$reflection()], ["SvId", int32_type], ["Position", class_type("Sutil.IStore`1", [int32_type])], ["Value", class_type("Sutil.IStore`1", [gen0])], ["Rect", class_type("Browser.Types.ClientRect", undefined)]]);
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
    const node = findCurrentNode(doc, current, id);
    if (equals(node, defaultOf())) {
        return defaultOf();
    }
    else if (isElementNode(node)) {
        return node;
    }
    else {
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
        return head(matchValue);
    }
    else {
        const tmpDiv = ctx.Document.createElement("div");
        DomEdit_appendChild(tmpDiv, errorNode(new SutilEffect(1, [tmpDiv]), "\'fragment\' not allowed as root for \'each\' blocks"));
        SutilEffect__AppendChild_171AE942(ctx.Parent, tmpDiv);
        iterate((x) => {
            DomEdit_appendChild(tmpDiv, x);
        }, matchValue);
        return tmpDiv;
    }
}

function asDomElement(element, ctx) {
    const node = asDomNode(element, ctx);
    if (isElementNode(node)) {
        return node;
    }
    else {
        const span = ctx.Document.createElement("span");
        DomEdit_appendChild(span, node);
        SutilEffect__AppendChild_171AE942(ctx.Parent, span);
        return span;
    }
}

export function eachiko_wrapper(items, view, key, trans) {
    const log_1 = (s) => {
        log_2("each", s);
    };
    return SutilElement_Define_7B1F8004("eachiko_wrapper", (ctx) => {
        log_1(`eachiko: Previous = ${ctx.Previous}`);
        const eachGroup = SutilEffect_MakeGroup_5BDBED5B("each", ctx.Parent, ctx.Previous);
        const eachNode = new SutilEffect(2, [eachGroup]);
        BuildContext__AddChild_2AD740C9(ctx, eachNode);
        let state = System_Array__$005B$005D$1_ToCollectionWrapper([]);
        const eachId = (genEachId() + 1) | 0;
        const eachCtx = ContextHelpers_withParent(eachNode, ctx);
        const unsub = Store_subscribe((newItems) => {
            if (isEnabled("each")) {
                log_1("-- Each Block Render -------------------------------------");
                log_1(`caching rects for render. Previous: ${CollectionWrapper_length(state)} items. Current ${CollectionWrapper_length(newItems)} items`);
            }
            state = CollectionWrapper_map((ki) => {
                const el = findCurrentElement(ctx.Document, defaultOf(), ki.SvId);
                return new KeyedStoreItem$2(ki.Key, ki.Node, ki.SvId, ki.Position, ki.Value, el.getBoundingClientRect());
            }, state);
            if (isEnabled("each")) {
                log_1(`Previous = ${ctx.Previous}`);
            }
            let prevNode = new SutilEffect(0, []);
            const newState = CollectionWrapper_mapi((itemIndex, item) => {
                let tupledArg, n_1;
                const itemKey = key([itemIndex, item]);
                const optKi = CollectionWrapper_tryFind((x) => equals(x.Key, itemKey), state);
                if (optKi != null) {
                    const ki_1 = optKi;
                    Store_modify((_arg) => itemIndex, ki_1.Position);
                    Store_modify((_arg_1) => item, ki_1.Value);
                    const el_1 = findCurrentElement(ctx.Document, defaultOf(), ki_1.SvId);
                    if (isEnabled("each")) {
                        log_1(`existing item ${ki_1.SvId} ${ki_1.Key} ${rectStr(ki_1.Rect)}`);
                    }
                    clearAnimations(el_1);
                    animateNode(el_1, ki_1.Rect);
                    prevNode = ki_1.Node;
                    return ki_1;
                }
                else {
                    const storePos = Store_make(itemIndex);
                    const storeVal = Store_make(item);
                    const ctx2 = ContextHelpers_withPrevious(prevNode, eachCtx);
                    if (isEnabled("each")) {
                        log_1(`++ creating new item '${item}' (key=${itemKey}) with prev='${prevNode}' action=${ctx2.Action}`);
                    }
                    const sutilNode = build((tupledArg = [storePos, storeVal], view([tupledArg[0], tupledArg[1]])), ctx2);
                    const itemNode = asDomElement(sutilNode, ctx2);
                    if (isEnabled("each")) {
                        log_1(`-- created #${svId(itemNode)} with prev='${nodeStrShort(itemNode.previousSibling)}'`);
                    }
                    itemNode["svEachId"] = eachId;
                    SutilEffect_RegisterDisposable_2069CF16(sutilNode, storePos);
                    SutilEffect_RegisterDisposable_2069CF16(sutilNode, storeVal);
                    transitionNode(itemNode, trans, singleton(new TransitionProp(0, [toString(itemKey)])), true, (value) => {
                    }, (value_1) => {
                    });
                    const newKi = new KeyedStoreItem$2(itemKey, sutilNode, svId(itemNode), storePos, storeVal, itemNode.getBoundingClientRect());
                    const prevEl = itemNode.previousSibling;
                    if (isEnabled("each")) {
                        log_1(`new item #${newKi.SvId} eid=${(n_1 = itemNode, (n_1.hasOwnProperty("svEachId")) ? (n_1["svEachId"]) : -1)} ${itemKey} ${rectStr(newKi.Rect)} prevNode=${prevNode} prevSibling=${nodeStr(prevEl)}`);
                    }
                    prevNode = sutilNode;
                    return newKi;
                }
            }, newItems);
            if (isEnabled("each")) {
                log_1("Remove old items");
            }
            const enumerator = getEnumerator(state);
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const oldItem = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (!CollectionWrapper_exists((x_1) => equals(x_1.Key, oldItem.Key), newState)) {
                        if (isEnabled("each")) {
                            log_1(`removing key ${oldItem.Key}`);
                        }
                        const el_2 = findCurrentElement(ctx.Document, defaultOf(), oldItem.SvId);
                        fixPosition(el_2);
                        const value_2 = SutilEffect__InsertBefore_Z129D0740(ctx.Parent, el_2, defaultOf());
                        transitionNode(el_2, trans, singleton(new TransitionProp(0, [toString(oldItem.Key)])), false, (value_3) => {
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
                    const ki_2 = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (isEnabled("each")) {
                        log_1(`Checking order: #${ki_2.SvId}`);
                    }
                    const el_3 = findCurrentElement(ctx.Document, defaultOf(), ki_2.SvId);
                    if (!(el_3 == null)) {
                        if (!isSameNode(prevDomNode, el_3.previousSibling)) {
                            if (isEnabled("each")) {
                                log_1(`reordering: ki=${nodeStr(el_3)} prevNode=${nodeStr(prevDomNode)}`);
                            }
                            if (isEnabled("each")) {
                                log_1(`reordering key ${ki_2.Key} ${nodeStrShort(el_3)} parent=${el_3.parentNode}`);
                            }
                            SutilEffect__InsertAfter_Z129D0740(ctx.Parent, el_3, prevDomNode);
                        }
                        prevDomNode = el_3;
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
    return eachiko_wrapper(items, (tupledArg) => bindElement(duc()(tupledArg[1]), view), (tupledArg_1) => {
        let copyOfStruct;
        return [tupledArg_1[0], (copyOfStruct = tupledArg_1[1], identityHash(copyOfStruct))];
    }, trans);
}

export function eachi(items, view, trans) {
    return eachiko()(items)((tupledArg) => bindElement2(duc()(tupledArg[0]), duc()(tupledArg[1]), view))((tuple) => tuple[0])(trans);
}

export function eachio(items, view, trans) {
    return eachiko()(items)(view)((tuple) => tuple[0])(trans);
}

export function eachk(items, view, key, trans) {
    return eachiko()(items)((tupledArg) => bindElement(duc()(tupledArg[1]), view))((arg) => key(arg[1]))(trans);
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
        SutilEffect_RegisterDisposable_2069CF16(ctx.Parent, subscribe(curry2(f)(BuildContext__get_ParentElement(ctx).style), value));
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
    return join("", map_1((tupledArg) => (`${tupledArg[0]}: ${tupledArg[1]};`), cssAttrs));
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
