import { log as log_1, isEnabled } from "./Logging.fs.js";
import { concat, chunkBySize, item, map, collect } from "../fable-library-js.4.21.0/Array.js";
import { substring, printf, toText, join, split } from "../fable-library-js.4.21.0/String.js";
import { disposeSafe, getEnumerator, defaultOf } from "../fable-library-js.4.21.0/Util.js";
import { filter, map as map_1 } from "../fable-library-js.4.21.0/Seq.js";
import { filter as filter_1, choose, map as map_2 } from "../fable-library-js.4.21.0/List.js";
import { NamedStyleSheet, MediaRule, KeyFrames, KeyFrame, StyleSheetDefinition, StyleRule } from "./Types.fs.js";
import { NodeKey_StyleClass, applyIfElement, ClassHelpers_addToClasslist, rafu, Event_Hide, Event_Show } from "./DomHelpers.fs.js";
import { register } from "../ConstructStyleSheetsPolyfill.1.0.0-beta-001/ConstructStyleSheetsPolyfill.fs.js";
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
    return join("", map((tupledArg) => toText(printf("%s:%s;"))(tupledArg[0])(tupledArg[1]), keyValues));
}

export function filterStyleAttr(name, style) {
    let array;
    return emitStyleAttr((array = parseStyleAttr(style), array.filter((tupledArg) => (tupledArg[0] !== name))));
}

export function getStyleAttr(el) {
    const matchValue = el.getAttribute("style");
    if (matchValue === defaultOf()) {
        return "";
    }
    else {
        return matchValue;
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
        return splitMapJoin(",", (s_2) => splitMapJoin(" ", (s_1) => mapPseudo((s) => {
            if (isPseudo(s) ? true : isGlobal(s)) {
                return s;
            }
            else {
                return toText(printf("%s.%s"))(s)(styleName);
            }
        }, s_1), s_2), selectors);
    }
}

function styleListToText(css) {
    return (" {\n" + join("\n", map_1((tupledArg) => (`    ${tupledArg[0]}: ${tupledArg[1]};`), css))) + " }\n";
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

function ruleToText(styleName, rule_1) {
    const styleText = join("\n", map_1((tupledArg_1) => (`    ${tupledArg_1[0]}: ${tupledArg_1[1]};`), filter((arg) => {
        let tupledArg;
        return !((tupledArg = arg, isSutilRule(tupledArg[0], tupledArg[1])));
    }, rule_1.Style)));
    return join("", [specifySelector(styleName, rule_1.SelectorSpec), " {\n", styleText, "}\n"]);
}

export function mediaRuleToText(styleName, rule_1) {
    const arg_1 = join("\n", map_2((_arg) => entryToText(styleName, _arg), rule_1.Rules));
    return toText(printf("@media %s {\n%s\n}\n"))(rule_1.Condition)(arg_1);
}

export function entryToText(styleName, _arg) {
    switch (_arg.tag) {
        case 1:
            return framesToText(_arg.fields[0]);
        case 2:
            return mediaRuleToText(styleName, _arg.fields[0]);
        default:
            return ruleToText(styleName, _arg.fields[0]);
    }
}

function styleSheetAsText(styleSheet) {
    return join("\n", map_2((_arg) => entryToText("", _arg), styleSheet));
}

function addStyleSheet(doc, styleName, styleSheet) {
    let newChild, data;
    const style = newStyleElement(doc);
    const enumerator = getEnumerator(styleSheet);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            (newChild = ((data = entryToText(styleName, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()), doc.createTextNode(data))), style.appendChild(newChild));
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
    return new StyleSheetDefinition(0, [new StyleRule(selector, style)]);
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
            return _arg.fields[0];
        }
        else {
            return undefined;
        }
    }, styleSheet));
}

function applyCustomRulesToElement(rules, e) {
    const enumerator = getEnumerator(filter_1((rule_1) => ruleMatchEl(e, rule_1), rules));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const enumerator_1 = getEnumerator(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().Style);
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const custom = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    switch (custom[0]) {
                        case "sutil-use-global": {
                            throw new Error("sutil-use-global not supported");
                            break;
                        }
                        case "sutil-use-parent": {
                            break;
                        }
                        case "sutil-add-class": {
                            ClassHelpers_addToClasslist(toString(custom[1]), e);
                            break;
                        }
                        default:
                            (e.style).setProperty(custom[0], toString(custom[1]));
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
        applyIfElement((rules_1 = rulesOf(rules), (e) => {
            applyCustomRulesToElement(rules_1, e);
        }), result.fields[0]);
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

