import { Union, Record } from "../fable-library-js.4.21.0/Types.js";
import { bool_type, class_type, union_type, int32_type, record_type, list_type, tuple_type, obj_type, string_type } from "../fable-library-js.4.21.0/Reflection.js";
import { ofArray, tryFind, exists, map, mapIndexed, length, toArray } from "../fable-library-js.4.21.0/List.js";
import { createAtom, toIterator, getEnumerator } from "../fable-library-js.4.21.0/Util.js";
import { ofArray as ofArray_1, ofList } from "../fable-library-js.4.21.0/Seq.js";
import { tryFind as tryFind_1, map as map_1, mapIndexed as mapIndexed_1 } from "../fable-library-js.4.21.0/Array.js";

export class StyleRule extends Record {
    constructor(SelectorSpec, Style) {
        super();
        this.SelectorSpec = SelectorSpec;
        this.Style = Style;
    }
}

export function StyleRule_$reflection() {
    return record_type("Sutil.StyleRule", [], StyleRule, () => [["SelectorSpec", string_type], ["Style", list_type(tuple_type(string_type, obj_type))]]);
}

export class KeyFrame extends Record {
    constructor(StartAt, Style) {
        super();
        this.StartAt = (StartAt | 0);
        this.Style = Style;
    }
}

export function KeyFrame_$reflection() {
    return record_type("Sutil.KeyFrame", [], KeyFrame, () => [["StartAt", int32_type], ["Style", list_type(tuple_type(string_type, obj_type))]]);
}

export class KeyFrames extends Record {
    constructor(Name, Frames) {
        super();
        this.Name = Name;
        this.Frames = Frames;
    }
}

export function KeyFrames_$reflection() {
    return record_type("Sutil.KeyFrames", [], KeyFrames, () => [["Name", string_type], ["Frames", list_type(KeyFrame_$reflection())]]);
}

export class MediaRule extends Record {
    constructor(Condition, Rules) {
        super();
        this.Condition = Condition;
        this.Rules = Rules;
    }
}

export function MediaRule_$reflection() {
    return record_type("Sutil.MediaRule", [], MediaRule, () => [["Condition", string_type], ["Rules", list_type(StyleSheetDefinition_$reflection())]]);
}

export class StyleSheetDefinition extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Rule", "KeyFrames", "MediaRule"];
    }
}

export function StyleSheetDefinition_$reflection() {
    return union_type("Sutil.StyleSheetDefinition", [], StyleSheetDefinition, () => [[["Item", StyleRule_$reflection()]], [["Item", KeyFrames_$reflection()]], [["Item", MediaRule_$reflection()]]]);
}

export class NamedStyleSheet extends Record {
    constructor(Name, StyleSheet) {
        super();
        this.Name = Name;
        this.StyleSheet = StyleSheet;
    }
}

export function NamedStyleSheet_$reflection() {
    return record_type("Sutil.NamedStyleSheet", [], NamedStyleSheet, () => [["Name", string_type], ["StyleSheet", list_type(StyleSheetDefinition_$reflection())]]);
}

class CollectionWrapperExt_ListW$1 {
    constructor(list) {
        this.list = list;
    }
    ToList() {
        const _ = this;
        return _.list;
    }
    ToArray() {
        const _ = this;
        return toArray(_.list);
    }
    get Length() {
        const _ = this;
        return length(_.list) | 0;
    }
    Mapi(f) {
        const _ = this;
        return CollectionWrapperExt_ListW$1_$ctor_Z1FA48BC9(mapIndexed(f, _.list));
    }
    Map(f) {
        const _ = this;
        return CollectionWrapperExt_ListW$1_$ctor_Z1FA48BC9(map(f, _.list));
    }
    Exists(p) {
        const _ = this;
        return exists(p, _.list);
    }
    TryFind(p) {
        const _ = this;
        return tryFind(p, _.list);
    }
    "System.Collections.IEnumerable.GetEnumerator"() {
        const _ = this;
        return getEnumerator(ofList(_.list));
    }
    GetEnumerator() {
        const _ = this;
        return getEnumerator(ofList(_.list));
    }
    [Symbol.iterator]() {
        return toIterator(getEnumerator(this));
    }
}

function CollectionWrapperExt_ListW$1_$reflection(gen0) {
    return class_type("Sutil.CollectionWrapperExt.ListW`1", [gen0], CollectionWrapperExt_ListW$1);
}

function CollectionWrapperExt_ListW$1_$ctor_Z1FA48BC9(list) {
    return new CollectionWrapperExt_ListW$1(list);
}

class CollectionWrapperExt_ArrayW$1 {
    constructor(a) {
        this.a = a;
    }
    ToList() {
        const _ = this;
        return ofArray(_.a);
    }
    ToArray() {
        const _ = this;
        return _.a;
    }
    get Length() {
        const _ = this;
        return _.a.length | 0;
    }
    Mapi(f) {
        const _ = this;
        return CollectionWrapperExt_ArrayW$1_$ctor_32EFB1E(mapIndexed_1(f, _.a));
    }
    Map(f) {
        const _ = this;
        return CollectionWrapperExt_ArrayW$1_$ctor_32EFB1E(map_1(f, _.a));
    }
    Exists(p) {
        const _ = this;
        return _.a.some(p);
    }
    TryFind(p) {
        const _ = this;
        return tryFind_1(p, _.a);
    }
    "System.Collections.IEnumerable.GetEnumerator"() {
        const _ = this;
        return getEnumerator(ofArray_1(_.a));
    }
    GetEnumerator() {
        const _ = this;
        return getEnumerator(ofArray_1(_.a));
    }
    [Symbol.iterator]() {
        return toIterator(getEnumerator(this));
    }
}

function CollectionWrapperExt_ArrayW$1_$reflection(gen0) {
    return class_type("Sutil.CollectionWrapperExt.ArrayW`1", [gen0], CollectionWrapperExt_ArrayW$1);
}

function CollectionWrapperExt_ArrayW$1_$ctor_32EFB1E(a) {
    return new CollectionWrapperExt_ArrayW$1(a);
}

export function Microsoft_FSharp_Collections_FSharpList$1__List$1_ToCollectionWrapper(__) {
    return CollectionWrapperExt_ListW$1_$ctor_Z1FA48BC9(__);
}

export function System_Array__$005B$005D$1_ToCollectionWrapper(__) {
    return CollectionWrapperExt_ArrayW$1_$ctor_32EFB1E(__);
}

export function CollectionWrapper_length(c) {
    return c.Length;
}

export function CollectionWrapper_mapi(f, c) {
    return c.Mapi(f);
}

export function CollectionWrapper_map(f, c) {
    return c.Map(f);
}

export function CollectionWrapper_exists(f, c) {
    return c.Exists(f);
}

export function CollectionWrapper_tryFind(f, c) {
    return c.TryFind(f);
}

export class DevToolsControl_SutilOptions extends Record {
    constructor(SlowAnimations, LoggingEnabled) {
        super();
        this.SlowAnimations = SlowAnimations;
        this.LoggingEnabled = LoggingEnabled;
    }
}

export function DevToolsControl_SutilOptions_$reflection() {
    return record_type("Sutil.DevToolsControl.SutilOptions", [], DevToolsControl_SutilOptions, () => [["SlowAnimations", bool_type], ["LoggingEnabled", bool_type]]);
}

export let DevToolsControl_Options = createAtom(new DevToolsControl_SutilOptions(false, false));

export class DevToolsControl_Version extends Record {
    constructor(Major, Minor, Patch) {
        super();
        this.Major = (Major | 0);
        this.Minor = (Minor | 0);
        this.Patch = (Patch | 0);
    }
    toString() {
        const v = this;
        return `${v.Major}.${v.Minor}.${v.Patch}`;
    }
}

export function DevToolsControl_Version_$reflection() {
    return record_type("Sutil.DevToolsControl.Version", [], DevToolsControl_Version, () => [["Major", int32_type], ["Minor", int32_type], ["Patch", int32_type]]);
}

export function DevToolsControl_getControlBlock(doc) {
    return doc["__sutil_cb"];
}

export function DevToolsControl_setControlBlock(doc, cb) {
    doc["__sutil_cb"] = cb;
}

export function DevToolsControl_initialise(doc, controlBlock) {
    DevToolsControl_setControlBlock(doc, controlBlock);
}

export class ElementRef extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Id", "Selector", "Element"];
    }
}

export function ElementRef_$reflection() {
    return union_type("Sutil.ElementRef", [], ElementRef, () => [[["Item", string_type]], [["Item", string_type]], [["Item", class_type("Browser.Types.HTMLElement", undefined)]]]);
}

export function ElementRef__get_AsElement(__) {
    switch (__.tag) {
        case 1: {
            const s_1 = __.fields[0];
            return document.querySelector(s_1);
        }
        case 2: {
            const e = __.fields[0];
            return e;
        }
        default: {
            const s = __.fields[0];
            return document.querySelector("#" + s);
        }
    }
}

export class MountOp extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["AppendTo", "InsertAfter"];
    }
}

export function MountOp_$reflection() {
    return union_type("Sutil.MountOp", [], MountOp, () => [[], []]);
}

