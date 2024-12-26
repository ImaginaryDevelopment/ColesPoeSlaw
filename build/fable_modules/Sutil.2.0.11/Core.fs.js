import { log as log_2, isEnabled } from "./Logging.fs.js";
import { ClassHelpers_addToClasslist, applyIfElement, descendants, isElementNode, Event_Mount, Event_Connected, CustomDispatch$1_dispatch_4FBB8B24, assertTrue, clear, DomEdit_appendChild, DomEdit_insertAfter, DomEdit_insertBefore, DomEdit_removeChild, nodeStr, cleanupDeep, getDisposables, NodeKey_Disposables, unmount, setSvId, children as children_1, svId, isTextNode, NodeKey_clear, NodeKey_getCreate, NodeKey_Groups, NodeKey_get, nodeIsConnected, domId, nodeStrShort } from "./DomHelpers.fs.js";
import { Record, FSharpRef, Union, toString } from "../fable-library-js.4.21.0/Types.js";
import { record_type, tuple_type, bool_type, option_type, lambda_type, string_type, union_type, class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { printf, toText, join } from "../fable-library-js.4.21.0/String.js";
import { tryHead, exists, filter, fold, collect, last as last_1, head, tail, cons, iterateIndexed, length, singleton, append, isEmpty, iterate as iterate_1, empty, map } from "../fable-library-js.4.21.0/List.js";
import { disposeSafe, getEnumerator, equals, int32ToString, defaultOf } from "../fable-library-js.4.21.0/Util.js";
import { toList, filter as filter_1, iterate } from "../fable-library-js.4.21.0/Seq.js";
import { ofNullable, bind, some, toArray } from "../fable-library-js.4.21.0/Option.js";
import { makeIdGenerator, disposable } from "./Helpers.fs.js";
import { getOption } from "./Interop.fs.js";
import { rangeDouble } from "../fable-library-js.4.21.0/Range.js";
import { ElementRef__get_AsElement } from "./Types.fs.js";

function logEnabled() {
    return isEnabled("core");
}

function log(s) {
    log_2("core", s);
}

export class SutilEffect extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["SideEffect", "DomNode", "Group"];
    }
    toString() {
        const this$ = this;
        return (this$.tag === 1) ? nodeStrShort(this$.fields[0]) : ((this$.tag === 2) ? toString(this$.fields[0]) : "SideEffect");
    }
    Dispose() {
        const __ = this;
        SutilEffect__Dispose(__);
    }
}

export function SutilEffect_$reflection() {
    return union_type("Sutil.Core.SutilEffect", [], SutilEffect, () => [[], [["Item", class_type("Browser.Types.Node", undefined)]], [["Item", SutilGroup_$reflection()]]]);
}

export class SutilGroup {
    constructor(_name, _parent, _prevInit) {
        this.this = (new FSharpRef(defaultOf()));
        const this$ = this.this;
        this._name = _name;
        this._parent = _parent;
        this.this.contents = this;
        this.id = int32ToString(domId());
        this._dispose = empty();
        this._children = empty();
        this._prev = _prevInit;
        this._childGroups = empty();
        this["init@300"] = 1;
        SutilEffect__Register_5DF059C1(this._parent, this.this.contents);
    }
    toString() {
        const this$ = this;
        return (((this$._name + "[") + join(",", map(toString, this$._children))) + "]#") + this$.id;
    }
}

export function SutilGroup_$reflection() {
    return class_type("Sutil.Core.SutilGroup", undefined, SutilGroup);
}

function SutilGroup_$ctor_5BDBED5B(_name, _parent, _prevInit) {
    return new SutilGroup(_name, _parent, _prevInit);
}

function SutilEffect__mapDefault(this$, f, defaultValue) {
    switch (this$.tag) {
        case 1:
            return f(this$.fields[0]);
        case 2:
            return SutilGroup__MapParent_Z6EDD0E6F(this$.fields[0], f);
        default:
            return defaultValue;
    }
}

function SutilEffect__iter_42C48B28(this$, f) {
    SutilEffect__mapDefault(this$, f, undefined);
}

export function SutilEffect__IsConnected(this$) {
    switch (this$.tag) {
        case 1:
            return nodeIsConnected(this$.fields[0]);
        case 2:
            return SutilGroup__IsConnected(this$.fields[0]);
        default:
            return false;
    }
}

function SutilEffect_GetGroups_171AE942(node) {
    return NodeKey_get(node, NodeKey_Groups);
}

function SutilEffect_GetCreateGroups_171AE942(node) {
    return NodeKey_getCreate(node, NodeKey_Groups, empty);
}

function SutilEffect_CleanupGroups_171AE942(n) {
    iterate((list) => {
        iterate_1((g) => {
            SutilGroup__Dispose(g);
        }, list);
    }, toArray(SutilEffect_GetGroups_171AE942(n)));
    NodeKey_clear(n, NodeKey_Groups);
}

export function SutilEffect__Register_5DF059C1(this$, childGroup) {
    switch (this$.tag) {
        case 1: {
            const n = this$.fields[0];
            const groups = SutilEffect_GetCreateGroups_171AE942(n);
            if (isEmpty(groups)) {
                SutilEffect_RegisterUnsubscribe_Z3FDC8A2C(n, () => {
                    SutilEffect_CleanupGroups_171AE942(n);
                });
            }
            n[NodeKey_Groups] = append(groups, singleton(childGroup));
            break;
        }
        case 2: {
            SutilGroup__Register_5DF059C1(this$.fields[0], childGroup);
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect__PrettyPrint_Z721C83C5(this$, label) {
    console.groupCollapsed(label);
    const node = this$;
    const log_1 = (l_1, s) => {
        log((Array((l_1 * 4) + 1).join(" ")) + s);
    };
    const prDomNode = (l_2) => ((dn) => {
        const groups = SutilGroup_GroupsOf_171AE942(dn);
        const l$0027 = (l_2 + length(groups)) | 0;
        iterateIndexed((i, g) => {
            log_1(l_2 + i, `<'${SutilGroup__get_Name(g)}'> #${SutilGroup__get_Id(g)}`);
        }, groups);
        if (equals(dn, defaultOf())) {
            log_1(l_2, "(null)");
        }
        else if (isTextNode(dn)) {
            log_1(l_2, `'${dn.textContent}'`);
        }
        else {
            const e = dn;
            log_1(l$0027, (("<" + e.tagName) + "> #") + toString(svId(e)));
            const source = children_1(e);
            iterate(prDomNode(l$0027 + 1), source);
            if (e.hasOwnProperty(NodeKey_Groups)) {
                const enumerator = getEnumerator(e[NodeKey_Groups]);
                try {
                    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                        prVNode(l$0027 + 1)(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    }
                }
                finally {
                    disposeSafe(enumerator);
                }
            }
        }
    });
    const prVNode = (level_1) => ((v) => {
        const ch = join(",", map((c) => ("#" + SutilEffect__get_Id(c)), SutilGroup__get_Children(v)));
        log_1(level_1, ((((("group \'" + SutilGroup__get_Name(v)) + "\' #") + SutilGroup__get_Id(v)) + " children=[") + ch) + "]");
    });
    switch (node.tag) {
        case 1: {
            prDomNode(0)(node.fields[0]);
            break;
        }
        case 2: {
            prVNode(0)(node.fields[0]);
            break;
        }
        default:
            log_1(0, "-");
    }
    console.groupEnd();
}

export function SutilEffect__get_Id(this$) {
    switch (this$.tag) {
        case 1:
            return svId(this$.fields[0]);
        case 2:
            return SutilGroup__get_Id(this$.fields[0]);
        default:
            return "-";
    }
}

export function SutilEffect__set_Id_Z721C83C5(this$, id) {
    switch (this$.tag) {
        case 1: {
            setSvId(this$.fields[0], id);
            break;
        }
        case 2: {
            SutilGroup__set_Id_Z721C83C5(this$.fields[0], id);
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect__IsSameNode_2AD740C9(this$, node) {
    let matchResult, a, b, a_1, b_1;
    switch (this$.tag) {
        case 1: {
            if (node.tag === 1) {
                matchResult = 1;
                a = this$.fields[0];
                b = node.fields[0];
            }
            else {
                matchResult = 3;
            }
            break;
        }
        case 2: {
            if (node.tag === 2) {
                matchResult = 2;
                a_1 = this$.fields[0];
                b_1 = node.fields[0];
            }
            else {
                matchResult = 3;
            }
            break;
        }
        default:
            if (node.tag === 0) {
                matchResult = 0;
            }
            else {
                matchResult = 3;
            }
    }
    switch (matchResult) {
        case 0:
            return true;
        case 1:
            return a.isSameNode(b);
        case 2:
            return SutilGroup__get_Id(a_1) === SutilGroup__get_Id(b_1);
        default:
            return false;
    }
}

export function SutilEffect__get_Document(this$) {
    switch (this$.tag) {
        case 1:
            return this$.fields[0].ownerDocument;
        case 2:
            return SutilGroup__get_Document(this$.fields[0]);
        default:
            return window.document;
    }
}

export function SutilEffect__get_IsEmpty(this$) {
    return equals(this$, new SutilEffect(0, []));
}

export function SutilEffect__get_PrevNode(this$) {
    switch (this$.tag) {
        case 1:
            return new SutilEffect(1, [this$.fields[0].previousSibling]);
        case 2:
            return SutilGroup__get_PrevNode(this$.fields[0]);
        default:
            return new SutilEffect(0, []);
    }
}

function SutilEffect__get_NextDomNode(this$) {
    switch (this$.tag) {
        case 1: {
            const node = this$.fields[0];
            if (node == null) {
                return defaultOf();
            }
            else {
                return node.nextSibling;
            }
        }
        case 2:
            return SutilGroup__get_NextDomNode(this$.fields[0]);
        default:
            return defaultOf();
    }
}

export function SutilEffect__collectDomNodes(this$) {
    return SutilEffect__DomNodes(this$);
}

export function SutilEffect__DomNodes(this$) {
    switch (this$.tag) {
        case 1:
            return singleton(this$.fields[0]);
        case 2:
            return SutilGroup__DomNodes(this$.fields[0]);
        default:
            return empty();
    }
}

export function SutilEffect__get_AsDomNode(this$) {
    return SutilEffect__mapDefault(this$, (x) => x, defaultOf());
}

export function SutilEffect__Dispose(node) {
    switch (node.tag) {
        case 2: {
            SutilGroup__Dispose(node.fields[0]);
            break;
        }
        case 1: {
            unmount(node.fields[0]);
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect_RegisterDisposable_5FAE877D(node, d) {
    node[NodeKey_Disposables] = cons(d, getDisposables(node));
}

export function SutilEffect_RegisterDisposable_2069CF16(node, d) {
    if (logEnabled()) {
        log(`register disposable on ${node}`);
    }
    switch (node.tag) {
        case 1: {
            SutilEffect_RegisterDisposable_5FAE877D(node.fields[0], d);
            break;
        }
        case 2: {
            SutilGroup__RegisterUnsubscribe_3A5B6456(node.fields[0], () => {
                disposeSafe(d);
            });
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect_RegisterUnsubscribe_Z3FDC8A2C(node, d) {
    SutilEffect_RegisterDisposable_5FAE877D(node, disposable(d));
}

export function SutilEffect_RegisterUnsubscribe_Z401BC241(node, d) {
    SutilEffect_RegisterDisposable_2069CF16(node, disposable(d));
}

function SutilEffect_ReplaceGroup_Z79764E3E(parent, nodes, existing) {
    if (logEnabled()) {
        log(`ReplaceGroup: nodes ${length(nodes)} existing ${length(existing)}`);
    }
    const insertBefore = !isEmpty(existing) ? (isEmpty(tail(existing)) ? head(existing).nextSibling : last_1(existing).nextSibling) : defaultOf();
    iterate_1((n) => {
        let copyOfStruct, copyOfStruct_1, copyOfStruct_2;
        cleanupDeep(n);
        if (((copyOfStruct = n, copyOfStruct.parentNode)) == null) {
            if (logEnabled()) {
                log(`Warning: Node ${nodeStr(n)} was unmounted unexpectedly`);
            }
        }
        else {
            if (!parent.isSameNode((copyOfStruct_1 = n, copyOfStruct_1.parentNode))) {
                if (logEnabled()) {
                    log(`Warning: Node ${nodeStr(n)} has unexpected parent`);
                }
            }
            DomEdit_removeChild((copyOfStruct_2 = n, copyOfStruct_2.parentNode), n);
        }
    }, existing);
    iterate_1((n_1) => {
        DomEdit_insertBefore(parent, n_1, insertBefore);
    }, nodes);
}

export function SutilEffect__InsertBefore_Z129D0740(this$, node, refNode) {
    SutilEffect__iter_42C48B28(this$, (parent) => {
        DomEdit_insertBefore(parent, node, refNode);
    });
}

export function SutilEffect__InsertAfter_Z5097E6E0(this$, node, refNode) {
    switch (this$.tag) {
        case 1: {
            if (logEnabled()) {
                log(`InsertAfter (parent = ${this$}: refNode=${refNode} refNode.NextDomNode=${nodeStr(SutilEffect__get_NextDomNode(refNode))}`);
            }
            const refDomNode = SutilEffect__get_NextDomNode(refNode);
            iterate_1((child) => {
                DomEdit_insertBefore(this$.fields[0], child, refDomNode);
            }, SutilEffect__collectDomNodes(node));
            break;
        }
        case 2: {
            SutilGroup__InsertAfter_Z5097E6E0(this$.fields[0], node, refNode);
            break;
        }
        default: {
            console.warn(some("InsertAfter called for empty node - disposing child"));
            SutilEffect__Dispose(node);
        }
    }
}

export function SutilEffect__InsertAfter_Z129D0740(this$, node, refNode) {
    SutilEffect__iter_42C48B28(this$, (parent) => {
        DomEdit_insertAfter(parent, node, refNode);
    });
}

export function SutilEffect__ReplaceGroup_Z748E2B9E(this$, node, existing, insertBefore) {
    if (logEnabled()) {
        log(`ReplaceGroup(${node}, ${existing})`);
    }
    switch (this$.tag) {
        case 1: {
            SutilEffect_ReplaceGroup_Z79764E3E(this$.fields[0], SutilEffect__collectDomNodes(node), SutilEffect__collectDomNodes(existing));
            break;
        }
        case 2: {
            SutilGroup__ReplaceChild_Z748E2B9E(this$.fields[0], node, existing, insertBefore);
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect__AppendChild_171AE942(this$, child) {
    switch (this$.tag) {
        case 1: {
            DomEdit_appendChild(this$.fields[0], child);
            break;
        }
        case 2: {
            SutilGroup__AppendChild_2AD740C9(this$.fields[0], new SutilEffect(1, [child]));
            break;
        }
        default:
            undefined;
    }
}

export function SutilEffect__get_FirstDomNodeInOrAfter(this$) {
    switch (this$.tag) {
        case 1:
            return this$.fields[0];
        case 2:
            return SutilGroup__get_FirstDomNodeInOrAfter(this$.fields[0]);
        default:
            return defaultOf();
    }
}

export function SutilEffect__Clear(this$) {
    SutilEffect__iter_42C48B28(this$, (node) => {
        clear(node);
    });
}

export function SutilEffect_MakeGroup_5BDBED5B(name, parent, prevInit) {
    return SutilGroup_Create_5BDBED5B(name, parent, prevInit);
}

export function SutilGroup__get_Document(this$) {
    return SutilGroup__parentDomNode(this$).ownerDocument;
}

export function SutilGroup_Create_5BDBED5B(name, parent, prevInit) {
    return SutilGroup_$ctor_5BDBED5B(name, parent, prevInit);
}

export function SutilGroup__IsConnected(this$) {
    return nodeIsConnected(SutilGroup__parentDomNode(this$));
}

export function SutilGroup__AssertIsConnected(this$) {
    if (!SutilGroup__IsConnected(this$)) {
        throw new Error(`Not connected: ${this$}`);
    }
}

export function SutilGroup__get_Parent(this$) {
    return this$._parent;
}

export function SutilGroup__Register_5DF059C1(this$, childGroup) {
    this$._childGroups = cons(childGroup, this$._childGroups);
}

export function SutilGroup__get_PrevNode(this$) {
    return this$._prev;
}

export function SutilGroup__set_PrevNode_2AD740C9(this$, v) {
    this$._prev = v;
}

export function SutilGroup__DomNodes(this$) {
    return collect(SutilEffect__DomNodes, SutilGroup__get_Children(this$));
}

export function SutilGroup__get_PrevDomNode(this$) {
    let result;
    const matchValue = SutilGroup__get_PrevNode(this$);
    switch (matchValue.tag) {
        case 2: {
            const v = matchValue.fields[0];
            const matchValue_1 = SutilGroup__get_LastDomNode(v);
            result = (equals(matchValue_1, defaultOf()) ? SutilGroup__get_PrevDomNode(v) : matchValue_1);
            break;
        }
        case 0: {
            const matchValue_2 = SutilGroup__get_Parent(this$);
            result = ((matchValue_2.tag === 2) ? SutilGroup__get_PrevDomNode(matchValue_2.fields[0]) : defaultOf());
            break;
        }
        default:
            result = matchValue.fields[0];
    }
    if (logEnabled()) {
        log(`PrevDomNode of ${this$} -> '${nodeStr(result)}' PrevNode=${SutilGroup__get_PrevNode(this$)}`);
    }
    return result;
}

export function SutilGroup__get_NextDomNode(this$) {
    const matchValue = SutilGroup__DomNodes(this$);
    if (isEmpty(matchValue)) {
        const matchValue_1 = SutilGroup__get_PrevDomNode(this$);
        if (equals(matchValue_1, defaultOf())) {
            const matchValue_2 = SutilGroup__parentDomNode(this$);
            if (equals(matchValue_2, defaultOf())) {
                return defaultOf();
            }
            else {
                return matchValue_2.firstChild;
            }
        }
        else {
            return matchValue_1.nextSibling;
        }
    }
    else {
        const matchValue_3 = last_1(matchValue);
        if (equals(matchValue_3, defaultOf())) {
            return defaultOf();
        }
        else {
            return matchValue_3.nextSibling;
        }
    }
}

export function SutilGroup__get_FirstDomNode(this$) {
    const matchValue = SutilGroup__DomNodes(this$);
    if (!isEmpty(matchValue)) {
        return head(matchValue);
    }
    else {
        return defaultOf();
    }
}

export function SutilGroup__get_LastDomNode(this$) {
    const matchValue = SutilGroup__DomNodes(this$);
    if (isEmpty(matchValue)) {
        return defaultOf();
    }
    else {
        return last_1(matchValue);
    }
}

export function SutilGroup__get_FirstDomNodeInOrAfter(this$) {
    const matchValue = SutilGroup__get_FirstDomNode(this$);
    if (equals(matchValue, defaultOf())) {
        return SutilGroup__get_NextDomNode(this$);
    }
    else {
        return matchValue;
    }
}

export function SutilGroup__MapParent_Z6EDD0E6F(this$, f) {
    return f(SutilGroup__parentDomNode(this$));
}

function SutilGroup__OwnX_171AE942(this$, n) {
    n["__sutil_snode"] = this$;
}

function SutilGroup__OwnX_2AD740C9(this$, child) {
    if (child.tag === 1) {
        SutilGroup__OwnX_171AE942(this$, child.fields[0]);
    }
}

export function SutilGroup_GroupOf_171AE942(n) {
    return getOption(n, "__sutil_snode");
}

export function SutilGroup_GroupsOf_171AE942(n) {
    let matchValue_1;
    const parentsOf = (r_mut) => {
        parentsOf:
        while (true) {
            const r = r_mut;
            if (!isEmpty(r)) {
                const matchValue = SutilGroup__get_Parent(head(r));
                if (matchValue.tag === 2) {
                    r_mut = cons(matchValue.fields[0], r);
                    continue parentsOf;
                }
                else {
                    return r;
                }
            }
            else {
                return r;
            }
            break;
        }
    };
    return parentsOf((matchValue_1 = getOption(n, "__sutil_snode"), (matchValue_1 != null) ? singleton(matchValue_1) : empty()));
}

export function SutilGroup__Clear(this$) {
    this$._children = empty();
}

export function SutilGroup__AddChild_2AD740C9(this$, child) {
    SutilGroup__OwnX_2AD740C9(this$, child);
    this$._children = append(this$._children, singleton(child));
    SutilGroup__updateChildrenPrev(this$);
}

export function SutilGroup__AppendChild_2AD740C9(this$, child) {
    if (SutilGroup__get_Parent(this$).tag === 0) {
    }
    else {
        const cn = map(nodeStrShort, SutilGroup__DomNodes(this$));
        const pn = map(nodeStrShort, SutilEffect__DomNodes(SutilGroup__get_PrevNode(this$)));
        const parent = SutilGroup__parentDomNode(this$);
        const before = SutilGroup__get_NextDomNode(this$);
        iterate_1((ch) => {
            DomEdit_insertBefore(parent, ch, before);
        }, SutilEffect__collectDomNodes(child));
    }
    SutilGroup__OwnX_2AD740C9(this$, child);
    this$._children = append(this$._children, singleton(child));
    SutilGroup__updateChildrenPrev(this$);
}

function SutilGroup__get_FirstChild(this$) {
    const matchValue = this$._children;
    if (!isEmpty(matchValue)) {
        return head(matchValue);
    }
    else {
        return new SutilEffect(0, []);
    }
}

function SutilGroup__ChildAfter_2AD740C9(this$, prev) {
    if (prev.tag === 0) {
        return SutilGroup__get_FirstChild(this$);
    }
    else {
        const find = (list_mut) => {
            find:
            while (true) {
                const list = list_mut;
                let matchResult, x_2, x_3, y_1, x_4, xs;
                if (!isEmpty(list)) {
                    if (!isEmpty(tail(list))) {
                        if (SutilEffect__IsSameNode_2AD740C9(head(list), prev)) {
                            matchResult = 2;
                            x_3 = head(list);
                            y_1 = head(tail(list));
                        }
                        else {
                            matchResult = 3;
                            x_4 = head(list);
                            xs = tail(list);
                        }
                    }
                    else if (SutilEffect__IsSameNode_2AD740C9(head(list), prev)) {
                        matchResult = 1;
                        x_2 = head(list);
                    }
                    else {
                        matchResult = 3;
                        x_4 = head(list);
                        xs = tail(list);
                    }
                }
                else {
                    matchResult = 0;
                }
                switch (matchResult) {
                    case 0:
                        return new SutilEffect(0, []);
                    case 1:
                        return new SutilEffect(0, []);
                    case 2:
                        return y_1;
                    default: {
                        list_mut = xs;
                        continue find;
                    }
                }
                break;
            }
        };
        return find(this$._children);
    }
}

export function SutilGroup__InsertAfter_Z5097E6E0(this$, child, prev) {
    SutilGroup__InsertBefore_Z5097E6E0(this$, child, SutilGroup__ChildAfter_2AD740C9(this$, prev));
}

function SutilGroup__InsertBefore_Z5097E6E0(this$, child, refNode) {
    const refDomNode = (refNode.tag === 0) ? SutilGroup__get_NextDomNode(this$) : SutilEffect__get_FirstDomNodeInOrAfter(refNode);
    if (logEnabled()) {
        log(`InsertBefore: child='${child}' before '${refNode}' refDomNode='${nodeStrShort(refDomNode)}' child.PrevNode='${SutilEffect__get_PrevNode(child)}'`);
    }
    const parent = SutilGroup__parentDomNode(this$);
    const len = length(this$._children) | 0;
    const enumerator = getEnumerator(SutilEffect__collectDomNodes(child));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            DomEdit_insertBefore(parent, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), refDomNode);
        }
    }
    finally {
        disposeSafe(enumerator);
    }
    if (equals(refNode, new SutilEffect(0, []))) {
        SutilGroup__AddChild_2AD740C9(this$, child);
    }
    else {
        this$._children = fold((list, ch) => {
            if (SutilEffect__IsSameNode_2AD740C9(ch, refNode)) {
                return append(list, append(singleton(child), singleton(ch)));
            }
            else {
                return append(list, singleton(ch));
            }
        }, empty(), this$._children);
        SutilGroup__OwnX_2AD740C9(this$, child);
    }
    SutilGroup__updateChildrenPrev(this$);
    if (length(this$._children) === len) {
        if (logEnabled()) {
            log("Error: Child was not added");
        }
    }
}

export function SutilGroup__RemoveChild_2AD740C9(_, child) {
    const newChildren = filter((n_1) => !equals(n_1, child), _._children);
    const p = _.this.contents;
    const c = child;
    switch (c.tag) {
        case 1: {
            unmount(c.fields[0]);
            break;
        }
        case 2: {
            const g = c.fields[0];
            iterate_1((gc) => {
                SutilGroup__RemoveChild_2AD740C9(g, gc);
            }, SutilGroup__get_Children(g));
            SutilGroup__Dispose(g);
            break;
        }
        default:
            undefined;
    }
    _._children = newChildren;
    SutilGroup__updateChildrenPrev(_);
}

export function SutilGroup__ReplaceChild_Z748E2B9E(this$, child, oldChild, insertBefore) {
    const nodes = SutilEffect__collectDomNodes(child);
    assertTrue(!equals(child, new SutilEffect(0, [])), "Empty child for replace child");
    if (!equals(oldChild, new SutilEffect(0, []))) {
        assertTrue(exists((c_1) => (SutilEffect__get_Id(c_1) === SutilEffect__get_Id(oldChild)), this$._children), "Child not found");
        SutilEffect__set_Id_Z721C83C5(child, SutilEffect__get_Id(oldChild));
    }
    const parent = SutilGroup__parentDomNode(this$);
    iterate_1((n) => {
        DomEdit_insertBefore(parent, n, insertBefore);
    }, nodes);
    iterate_1((c) => {
        if (c.parentNode == null) {
            if (logEnabled()) {
                log(`Node has no parent: ${nodeStrShort(c)}`);
            }
        }
        else {
            DomEdit_removeChild(c.parentNode, c);
        }
    }, SutilEffect__collectDomNodes(oldChild));
    if (oldChild.tag === 2) {
        SutilGroup__Dispose(oldChild.fields[0]);
    }
    if ((insertBefore == null) ? true : equals(oldChild, new SutilEffect(0, []))) {
        SutilGroup__AddChild_2AD740C9(this$, child);
    }
    else {
        SutilGroup__OwnX_2AD740C9(this$, child);
        this$._children = map((n_1) => {
            if (SutilEffect__get_Id(n_1) === SutilEffect__get_Id(oldChild)) {
                return child;
            }
            else {
                return n_1;
            }
        }, this$._children);
    }
    SutilGroup__updateChildrenPrev(this$);
}

export function SutilGroup__get_Name(_) {
    return _._name;
}

export function SutilGroup__get_Id(_) {
    return _.id;
}

export function SutilGroup__set_Id_Z721C83C5(_, id$0027) {
    _.id = id$0027;
}

export function SutilGroup__get_Children(_) {
    return _._children;
}

export function SutilGroup__RegisterUnsubscribe_3A5B6456(_, d) {
    _._dispose = append(_._dispose, singleton(d));
}

export function SutilGroup__Dispose(_) {
    iterate_1((c) => {
        SutilGroup__Dispose(c);
    }, _._childGroups);
    iterate_1((d) => {
        d();
    }, _._dispose);
    _._dispose = empty();
}

export function SutilGroup__updateChildrenPrev(this$) {
    let p = new SutilEffect(0, []);
    const enumerator = getEnumerator(this$._children);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const c = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (c.tag === 2) {
                SutilGroup__set_PrevNode_2AD740C9(c.fields[0], p);
            }
            p = c;
        }
    }
    finally {
        disposeSafe(enumerator);
    }
}

export function SutilGroup__parentDomNode(this$) {
    const findParent = (p_mut) => {
        findParent:
        while (true) {
            const p = p_mut;
            switch (p.tag) {
                case 1:
                    return p.fields[0];
                case 2: {
                    p_mut = SutilGroup__get_Parent(p.fields[0]);
                    continue findParent;
                }
                default:
                    return defaultOf();
            }
            break;
        }
    };
    return findParent(this$._parent);
}

function notifySutilEvents(parent, node) {
    if (SutilEffect__IsConnected(parent)) {
        iterate_1((n) => {
            CustomDispatch$1_dispatch_4FBB8B24(n, Event_Connected);
            CustomDispatch$1_dispatch_4FBB8B24(n, Event_Mount);
            iterate((n_2) => {
                CustomDispatch$1_dispatch_4FBB8B24(n_2, Event_Mount);
            }, filter_1(isElementNode, descendants(n)));
        }, SutilEffect__collectDomNodes(node));
    }
}

export class DomAction extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Append", "Replace", "Nothing"];
    }
}

export function DomAction_$reflection() {
    return union_type("Sutil.Core.DomAction", [], DomAction, () => [[], [["Item1", SutilEffect_$reflection()], ["Item2", class_type("Browser.Types.Node", undefined)]], []]);
}

export class BuildContext extends Record {
    constructor(Document$, Parent, Previous, Action, MakeName, Class, Debug, Pipeline) {
        super();
        this.Document = Document$;
        this.Parent = Parent;
        this.Previous = Previous;
        this.Action = Action;
        this.MakeName = MakeName;
        this.Class = Class;
        this.Debug = Debug;
        this.Pipeline = Pipeline;
    }
}

export function BuildContext_$reflection() {
    return record_type("Sutil.Core.BuildContext", [], BuildContext, () => [["Document", class_type("Browser.Types.Document", undefined)], ["Parent", SutilEffect_$reflection()], ["Previous", SutilEffect_$reflection()], ["Action", DomAction_$reflection()], ["MakeName", lambda_type(string_type, string_type)], ["Class", option_type(string_type)], ["Debug", bool_type], ["Pipeline", lambda_type(tuple_type(BuildContext_$reflection(), SutilEffect_$reflection()), tuple_type(BuildContext_$reflection(), SutilEffect_$reflection()))]]);
}

export function BuildContext__get_ParentElement(this$) {
    return SutilEffect__get_AsDomNode(this$.Parent);
}

export function BuildContext__get_ParentNode(this$) {
    return SutilEffect__get_AsDomNode(this$.Parent);
}

export function BuildContext__AddChild_2AD740C9(ctx, node) {
    const matchValue = ctx.Action;
    switch (matchValue.tag) {
        case 0: {
            if (logEnabled()) {
                log(`ctx.Append '${node}' to '${ctx.Parent}' after ${ctx.Previous}`);
            }
            SutilEffect__InsertAfter_Z5097E6E0(ctx.Parent, node, ctx.Previous);
            notifySutilEvents(ctx.Parent, node);
            break;
        }
        case 1: {
            const insertBefore = matchValue.fields[1];
            const existing = matchValue.fields[0];
            if (logEnabled()) {
                log(`ctx.Replace '${existing}' with '${node}' before '${nodeStrShort(insertBefore)}'`);
            }
            SutilEffect__ReplaceGroup_Z748E2B9E(ctx.Parent, node, existing, insertBefore);
            notifySutilEvents(ctx.Parent, node);
            break;
        }
        default:
            undefined;
    }
}

export function domResult(node) {
    return new SutilEffect(1, [node]);
}

export function sutilResult(node) {
    return node;
}

export function sideEffect(ctx, name) {
    let tn, d;
    if (ctx.Debug) {
        return new SutilEffect(1, [(tn = ctx.Document.createTextNode(name), (d = ctx.Document.createElement("div"), (DomEdit_appendChild(d, tn), (BuildContext__AddChild_2AD740C9(ctx, new SutilEffect(1, [d])), d))))]);
    }
    else {
        return new SutilEffect(0, []);
    }
}

export class SutilElement {
    constructor(name, children, builder) {
        this.builder = builder;
    }
}

export function SutilElement_$reflection() {
    return class_type("Sutil.Core.SutilElement", undefined, SutilElement);
}

function SutilElement_$ctor_71ED6ECB(name, children, builder) {
    return new SutilElement(name, children, builder);
}

export function SutilElement_Define_314C839F(builder) {
    return SutilElement_$ctor_71ED6ECB("", [], builder);
}

export function SutilElement_Define_7B1F8004(name, builder) {
    return SutilElement_$ctor_71ED6ECB(name, [], builder);
}

export function SutilElement_Define_Z60F5000F(name, builder) {
    return SutilElement_$ctor_71ED6ECB(name, [], (ctx) => {
        builder(ctx);
        return sideEffect(ctx, name);
    });
}

export function SutilElement_Define_1C1F44C0(name, children, builder) {
    return SutilElement_$ctor_71ED6ECB(name, children, (ctx) => (new SutilEffect(1, [builder(ctx)])));
}

export function SutilElement__get_Builder(__) {
    return __.builder;
}

function defaultContext(parent) {
    const gen = makeIdGenerator();
    return new BuildContext(parent.ownerDocument, new SutilEffect(1, [parent]), new SutilEffect(0, []), new DomAction(0, []), (baseName) => {
        const arg_1 = gen() | 0;
        return toText(printf("%s-%d"))(baseName)(arg_1);
    }, undefined, false, (x) => x);
}

function makeContext(parent) {
    const bind$0040 = defaultContext(parent);
    return new BuildContext(bind$0040.Document, bind$0040.Parent, bind$0040.Previous, bind$0040.Action, bind$0040.MakeName, bind((e_1) => {
        let e;
        return tryHead((e = e_1, filter((cls) => cls.startsWith("sutil"), map((i) => (e.classList[i]), toList(rangeDouble(0, 1, e.classList.length - 1))))));
    }, ofNullable(parent)), bind$0040.Debug, bind$0040.Pipeline);
}

function makeShadowContext(customElement) {
    const bind$0040 = defaultContext(customElement);
    return new BuildContext(bind$0040.Document, bind$0040.Parent, bind$0040.Previous, new DomAction(2, []), bind$0040.MakeName, bind$0040.Class, bind$0040.Debug, bind$0040.Pipeline);
}

export function ContextHelpers_withStyleSheet(sheet, ctx) {
    return ctx;
}

export function ContextHelpers_withDebug(ctx) {
    return new BuildContext(ctx.Document, ctx.Parent, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, true, ctx.Pipeline);
}

export function ContextHelpers_withPreProcess(f, ctx) {
    return new BuildContext(ctx.Document, ctx.Parent, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, (arg) => ctx.Pipeline(f(arg)));
}

export function ContextHelpers_withPostProcess(f, ctx) {
    return new BuildContext(ctx.Document, ctx.Parent, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, (arg) => f(ctx.Pipeline(arg)));
}

export function ContextHelpers_withParent(parent, ctx) {
    return new BuildContext(ctx.Document, parent, ctx.Previous, new DomAction(0, []), ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
}

export function ContextHelpers_withPrevious(prev, ctx) {
    return new BuildContext(ctx.Document, ctx.Parent, prev, ctx.Action, ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
}

export function ContextHelpers_withParentNode(parent, ctx) {
    return ContextHelpers_withParent(new SutilEffect(1, [parent]), ctx);
}

export function ContextHelpers_withReplace(toReplace, before, ctx) {
    return new BuildContext(ctx.Document, ctx.Parent, ctx.Previous, new DomAction(1, [toReplace, before]), ctx.MakeName, ctx.Class, ctx.Debug, ctx.Pipeline);
}

export function errorNode(parent, message) {
    const doc = SutilEffect__get_Document(parent);
    const d = doc.createElement("div");
    DomEdit_appendChild(d, doc.createTextNode(`sutil-error: ${message}`));
    SutilEffect__AppendChild_171AE942(parent, d);
    d.setAttribute("style", "color: red; padding: 4px; font-size: 10px;");
    return d;
}

/**
 * Instantiate a <c>SutilElement</c>.
 */
export function build(f, ctx) {
    return ctx.Pipeline([ctx, SutilElement__get_Builder(f)(ctx)])[1];
}

export function buildOnly(f, ctx) {
    return SutilElement__get_Builder(f)(ctx);
}

function pipelineDispatchMount(ctx, result) {
    if (result.tag === 1) {
        CustomDispatch$1_dispatch_4FBB8B24(result.fields[0], Event_Mount);
    }
    return [ctx, result];
}

function pipelineAddClass(ctx, result) {
    const matchValue = ctx.Class;
    let matchResult, cls;
    if (matchValue != null) {
        if (result.tag === 1) {
            matchResult = 0;
            cls = matchValue;
        }
        else {
            matchResult = 1;
        }
    }
    else {
        matchResult = 1;
    }
    switch (matchResult) {
        case 0: {
            applyIfElement((e) => {
                ClassHelpers_addToClasslist(cls, e);
            }, SutilEffect__get_AsDomNode(result));
            break;
        }
    }
    return [ctx, result];
}

export function buildChildren(xs, ctx) {
    let prev = new SutilEffect(0, []);
    const enumerator = getEnumerator(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const matchValue = build(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), ContextHelpers_withPrevious(prev, ctx));
            if (matchValue.tag === 0) {
            }
            else {
                prev = matchValue;
            }
        }
    }
    finally {
        disposeSafe(enumerator);
    }
}

export function mountOnShadowRoot(app, host) {
    const el = build(app, makeShadowContext(host));
    switch (el.tag) {
        case 2: {
            const shadowRoot_1 = host.shadowRoot;
            const enumerator = getEnumerator(SutilGroup__DomNodes(el.fields[0]));
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const node_1 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    shadowRoot_1.appendChild(node_1);
                }
            }
            finally {
                disposeSafe(enumerator);
            }
            break;
        }
        case 0: {
            throw new Error("Custom components must return at least one node");
            break;
        }
        default: {
            const shadowRoot = host.shadowRoot;
            shadowRoot.appendChild(el.fields[0]);
        }
    }
    return () => {
        SutilEffect__Dispose(el);
    };
}

export function mount(app, _arg1_, _arg1__1) {
    let bind$0040;
    const _arg = [_arg1_, _arg1__1];
    const node = ElementRef__get_AsElement(_arg[1]);
    if (_arg[0].tag === 1) {
        return build(app, (bind$0040 = makeContext(node.parentElement), new BuildContext(bind$0040.Document, bind$0040.Parent, new SutilEffect(1, [node]), bind$0040.Action, bind$0040.MakeName, bind$0040.Class, bind$0040.Debug, bind$0040.Pipeline)));
    }
    else {
        return build(app, makeContext(node));
    }
}

