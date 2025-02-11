import { log as log_1, isEnabled } from "./Logging.fs.js";
import { concat, chunkBySize, item, map, collect } from "../fable-library-js.4.21.0/Array.js";
import { substring, printf, toText, join, split } from "../fable-library-js.4.21.0/String.js";
import { disposeSafe, getEnumerator, comparePrimitives, defaultOf } from "../fable-library-js.4.21.0/Util.js";
import { filter, map as map_1 } from "../fable-library-js.4.21.0/Seq.js";
import { filter as filter_1, choose, map as map_2 } from "../fable-library-js.4.21.0/List.js";
import { ofSeq, FSharpMap__TryFind } from "../fable-library-js.4.21.0/Map.js";
import { some } from "../fable-library-js.4.21.0/Option.js";
import { isLetterOrDigit } from "../fable-library-js.4.21.0/Char.js";
import { NamedStyleSheet, MediaRule, KeyFrames, KeyFrame, StyleSheetDefinition, StyleRule } from "./Types.fs.js";
import { NodeKey_StyleClass, applyIfElement, ClassHelpers_addToClasslist, rafu, Event_Hide, Event_Show } from "./DomHelpers.fs.js";
import { register } from "./ConstructStyleSheetsPolyfill.fs.js";
import { ContextHelpers_withPreProcess, SutilEffect__get_AsDomNode, ContextHelpers_withPostProcess, build, SutilElement_Define_7B1F8004, SutilEffect__IsConnected, BuildContext__get_ParentNode, SutilElement_Define_Z60F5000F } from "./Core.fs.js";
import { toString } from "../fable-library-js.4.21.0/Types.js";

function logEnabled() {
    return isEnabled("style");
}

function log(s) {
    log_1("style", s);
}

function findElement(doc, selector) {
    return doc.querySelector(selector);
}

export function parseStyleAttr(style) {
    return collect((entry) => map((pair) => [item(0, pair).trim(), item(1, pair).trim()], chunkBySize(2, split(entry, [":"], 2))), split(style, [";"], undefined, 1));
}

export function emitStyleAttr(keyValues) {
    return join("", map((tupledArg) => {
        const k = tupledArg[0];
        const v = tupledArg[1];
        return toText(printf("%s:%s;"))(k)(v);
    }, keyValues));
}

export function filterStyleAttr(name, style) {
    let array;
    return emitStyleAttr((array = parseStyleAttr(style), array.filter((tupledArg) => {
        const k = tupledArg[0];
        const v = tupledArg[1];
        return k !== name;
    })));
}

export function getStyleAttr(el) {
    const matchValue = el.getAttribute("style");
    if (matchValue === defaultOf()) {
        return "";
    }
    else {
        const s = matchValue;
        return s;
    }
}

export function addStyleAttr(el, name, value) {
    const style_1 = filterStyleAttr(name, getStyleAttr(el));
    el.setAttribute("style", toText(printf("%s%s:%s;"))(style_1)(name)(value));
}

export function removeStyleAttr(el, name) {
    let arg_1, arg_2;
    if (logEnabled()) {
        log((arg_1 = getStyleAttr(el), (arg_2 = filterStyleAttr(name, getStyleAttr(el)), toText(printf("filter by %s: %A -> %A"))(name)(arg_1)(arg_2))));
    }
    el.setAttribute("style", filterStyleAttr(name, getStyleAttr(el)));
}

export function newStyleElement(doc) {
    const head = findElement(doc, "head");
    const style = doc.createElement("style");
    head.appendChild(style);
    return style;
}

export function splitMapJoin(delim, f, s) {
    return join(delim, map(f, split(s, [delim], undefined, 1)));
}

export function mapPseudo(f, s) {
    const i = s.indexOf(":") | 0;
    if (i < 0) {
        return f(s);
    }
    else {
        return f(substring(s, 0, i)) + substring(s, i);
    }
}

export function isPseudo(s) {
    if (((((((s === "hover") ? true : (s === "active")) ? true : (s === "visited")) ? true : (s === "link")) ? true : (s === "before")) ? true : (s === "after")) ? true : (s === "checked")) {
        return true;
    }
    else {
        return s === "marker";
    }
}

export function isGlobal(s) {
    if (s === "body") {
        return true;
    }
    else {
        return s === "html";
    }
}

export function specifySelector(styleName, selectors) {
    if (styleName === "") {
        return selectors;
    }
    else {
        const trans = (s) => {
            if (isPseudo(s) ? true : isGlobal(s)) {
                return s;
            }
            else {
                return toText(printf("%s.%s"))(s)(styleName);
            }
        };
        return splitMapJoin(",", (s_2) => splitMapJoin(" ", (s_1) => mapPseudo(trans, s_1), s_2), selectors);
    }
}

function styleListToText(css) {
    return (" {\n" + join("\n", map_1((tupledArg) => {
        const nm = tupledArg[0];
        const v = tupledArg[1];
        return `    ${nm}: ${v};`;
    }, css))) + " }\n";
}

function frameToText(f) {
    const arg_1 = styleListToText(f.Style);
    return toText(printf("%d%% %s"))(f.StartAt)(arg_1);
}

function framesToText(frames) {
    const arg_1 = join("\n", map_2(frameToText, frames.Frames));
    return toText(printf("@keyframes %s {\n%s\n}\n"))(frames.Name)(arg_1);
}

function isSutilRule(nm, v) {
    return nm.startsWith("sutil");
}

function ruleToText(classMap, styleName, rule_1) {
    const styleText = (r) => join("\n", map_1((tupledArg_1) => {
        const nm_1 = tupledArg_1[0];
        const v_1 = tupledArg_1[1];
        if (nm_1.endsWith("()")) {
            const matchValue = FSharpMap__TryFind(classMap, nm_1.slice(0, -3 + 1));
            if (matchValue != null) {
                const subrule = matchValue;
                return styleText(subrule);
            }
            else {
                console.warn(some("No class found for substitution: "), nm_1.slice(0, -3 + 1));
                return "";
            }
        }
        else {
            return `    ${nm_1}: ${v_1};`;
        }
    }, filter((arg) => {
        let tupledArg;
        return !((tupledArg = arg, isSutilRule(tupledArg[0], tupledArg[1])));
    }, r.Style)));
    return join("", [specifySelector(styleName, rule_1.SelectorSpec), " {\n", styleText(rule_1), "}\n"]);
}

export function mediaRuleToText(classMap, styleName, rule_1) {
    const arg_1 = join("\n", map_2((_arg) => entryToText(classMap, styleName, _arg), rule_1.Rules));
    return toText(printf("@media %s {\n%s\n}\n"))(rule_1.Condition)(arg_1);
}

export function entryToText(classMap, styleName, _arg) {
    switch (_arg.tag) {
        case 1: {
            const frames = _arg.fields[0];
            return framesToText(frames);
        }
        case 2: {
            const rule_2 = _arg.fields[0];
            return mediaRuleToText(classMap, styleName, rule_2);
        }
        default: {
            const rule_1 = _arg.fields[0];
            return ruleToText(classMap, styleName, rule_1);
        }
    }
}

function isClassChar(c) {
    if (isLetterOrDigit(c) ? true : (c === "-")) {
        return true;
    }
    else {
        return c === "_";
    }
}

function isClassName(s) {
    const array = s.split("");
    return array.every(isClassChar);
}

function isClassOnly(s) {
    if ((s.length >= 2) && (s[0] === ".")) {
        return isClassName(substring(s, 1));
    }
    else {
        return false;
    }
}

export function getClassMap(styleSheet) {
    return ofSeq(choose((d) => {
        let r;
        let matchResult, r_1;
        if (d.tag === 0) {
            if ((r = d.fields[0], isClassOnly(r.SelectorSpec))) {
                matchResult = 0;
                r_1 = d.fields[0];
            }
            else {
                matchResult = 1;
            }
        }
        else {
            matchResult = 1;
        }
        switch (matchResult) {
            case 0:
                return [substring(r_1.SelectorSpec, 1), r_1];
            default:
                return undefined;
        }
    }, styleSheet), {
        Compare: comparePrimitives,
    });
}

export function includeRule(name) {
    return [name + "()", ""];
}

function styleSheetAsText(styleSheet) {
    const classMap = getClassMap(styleSheet);
    return join("\n", map_2((_arg) => entryToText(classMap, "", _arg), styleSheet));
}

function addStyleSheet(doc, styleName, styleSheet) {
    let newChild, data;
    const style = newStyleElement(doc);
    const enumerator = getEnumerator(styleSheet);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const entry = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            (newChild = ((data = entryToText(getClassMap(styleSheet), styleName, entry), doc.createTextNode(data))), style.appendChild(newChild));
        }
    }
    finally {
        disposeSafe(enumerator);
    }
    return () => {
        style.parentElement.removeChild(style);
    };
}

export function addGlobalStyleSheet(doc, styleSheet) {
    return addStyleSheet(doc, "", styleSheet);
}

/**
 * Define a CSS styling rule
 */
export function rule(selector, style) {
    const result = new StyleSheetDefinition(0, [new StyleRule(selector, style)]);
    return result;
}

/**
 * Define a CSS keyframe as part of a keyframes sequence
 * See also: <seealso cref="M:Sutil.Styling.keyframes"/>
 */
export function keyframe(startAt, style) {
    return new KeyFrame(startAt, style);
}

/**
 * Define a CSS keyframes sequence
 */
export function keyframes(name, frames) {
    return new StyleSheetDefinition(1, [new KeyFrames(name, frames)]);
}

export function showEl(el, isVisible) {
    if (isVisible) {
        if (el.hasOwnProperty("_display")) {
            addStyleAttr(el, "display", el["_display"]);
        }
        else {
            removeStyleAttr(el, "display");
        }
    }
    else {
        addStyleAttr(el, "display", "none");
    }
    const ev = new CustomEvent((isVisible ? Event_Show : Event_Hide), {});
    el.dispatchEvent(ev);
}

export function makeMediaRule(condition, rules) {
    return new StyleSheetDefinition(2, [new MediaRule(condition, rules)]);
}

register();

export function adoptStyleSheet(styleSheet) {
    return SutilElement_Define_Z60F5000F("adoptStyleSheet", (ctx) => {
        const run = () => {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(styleSheetAsText(styleSheet));
            const rootNode = BuildContext__get_ParentNode(ctx).getRootNode();
            rootNode.adoptedStyleSheets=concat([rootNode.adoptedStyleSheets, [sheet]]);
        };
        if (SutilEffect__IsConnected(ctx.Parent)) {
            run();
        }
        else {
            rafu(run);
        }
    });
}

function ruleMatchEl(el, rule_1) {
    return el.matches(rule_1.SelectorSpec);
}

function rulesOf(styleSheet) {
    return choose((x) => x, map_2((_arg) => {
        if (_arg.tag === 0) {
            const r = _arg.fields[0];
            return r;
        }
        else {
            return undefined;
        }
    }, styleSheet));
}

function applyCustomRulesToElement(rules, e) {
    let v, nm, v_1, nm_1, v_2, nm_2;
    const enumerator = getEnumerator(filter_1((rule_1) => ruleMatchEl(e, rule_1), rules));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const rule_2 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const enumerator_1 = getEnumerator(rule_2.Style);
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const custom = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if ((v = custom[1], (nm = custom[0], nm === "sutil-use-global"))) {
                        const v_3 = custom[1];
                        const nm_3 = custom[0];
                        throw new Error("sutil-use-global not supported");
                    }
                    else if ((v_1 = custom[1], (nm_1 = custom[0], nm_1 === "sutil-use-parent"))) {
                        const v_4 = custom[1];
                        const nm_4 = custom[0];
                    }
                    else if ((v_2 = custom[1], (nm_2 = custom[0], nm_2 === "sutil-add-class"))) {
                        const v_5 = custom[1];
                        const nm_5 = custom[0];
                        ClassHelpers_addToClasslist(toString(v_5), e);
                    }
                    else {
                        const v_6 = custom[1];
                        const nm_6 = custom[0];
                        (e.style).setProperty(nm_6, toString(v_6));
                    }
                }
            }
            finally {
                disposeSafe(enumerator_1);
            }
        }
    }
    finally {
        disposeSafe(enumerator);
    }
}

function applyCustomRules(rules, ctx, result) {
    let rules_1;
    if (result.tag === 1) {
        const n = result.fields[0];
        applyIfElement((rules_1 = rulesOf(rules), (e) => {
            applyCustomRulesToElement(rules_1, e);
        }), n);
    }
    return [ctx, result];
}

/**
 * Support for the custom rules "sutil-add-class". They're clever but also difficult to understand. See their usage in Sutil.Bulma
 */
export function withCustomRules(rules, element) {
    return SutilElement_Define_7B1F8004("withCustomRules", (ctx) => build(element, ContextHelpers_withPostProcess((tupledArg) => applyCustomRules(rules, tupledArg[0], tupledArg[1]), ctx)));
}

function applyStyleSheet(namedSheet, ctx, result) {
    if (result.tag === 1) {
        applyIfElement((el) => {
            if (!(el.hasOwnProperty(NodeKey_StyleClass))) {
                el[NodeKey_StyleClass] = namedSheet.Name;
                ClassHelpers_addToClasslist(namedSheet.Name, el);
            }
        }, SutilEffect__get_AsDomNode(result));
    }
    return [ctx, result];
}

export function withStyle(styleSheet, element) {
    return SutilElement_Define_7B1F8004("withStyle", (ctx) => {
        const name = ctx.MakeName("sutil");
        const namedSheet = new NamedStyleSheet(name, styleSheet);
        addStyleSheet(ctx.Document, name, styleSheet);
        return build(element, ContextHelpers_withPreProcess((tupledArg) => applyStyleSheet(namedSheet, tupledArg[0], tupledArg[1]), ctx));
    });
}

