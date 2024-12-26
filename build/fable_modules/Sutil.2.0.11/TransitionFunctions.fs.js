import { log as log_1, isEnabled } from "./Logging.fs.js";
import { min, tryParse } from "../fable-library-js.4.21.0/Double.js";
import { join, printf, toText, replace } from "../fable-library-js.4.21.0/String.js";
import { FSharpRef } from "../fable-library-js.4.21.0/Types.js";
import { Transition, Transition_get_Default, applyProps } from "./Transition.fs.js";
import { cubicInOut, cubicOut, linear } from "./Easing.fs.js";
import { computedStyleOpacity } from "./DomHelpers.fs.js";
import { Window_getComputedStyle_Z5966C024 } from "./Interop.fs.js";
import { ofArray, map } from "../fable-library-js.4.21.0/List.js";
import { getItemFromDict } from "../fable-library-js.4.21.0/MapUtil.js";

function logEnabled() {
    return isEnabled("trfn");
}

const log = (message) => {
    log_1("trfn", message);
};

export function parseFloat$(s, name) {
    if (s == null) {
        return 0;
    }
    else {
        let patternInput;
        let outArg = 0;
        patternInput = [tryParse(replace(s, "px", ""), new FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (patternInput[0]) {
            return patternInput[1];
        }
        else {
            return 0;
        }
    }
}

export function fade(initProps, node, unitVar) {
    let bind$0040;
    const tr = applyProps(initProps, (bind$0040 = Transition_get_Default(), new Transition(bind$0040.Key, bind$0040.X, bind$0040.Y, bind$0040.Opacity, 0, 400, bind$0040.DurationFn, bind$0040.Speed, linear(), bind$0040.CssGen, bind$0040.Tick, bind$0040.Fallback)));
    return new Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t, _arg) => {
        const arg = t * computedStyleOpacity(node);
        return toText(printf("opacity: %f"))(arg);
    }, tr.Tick, tr.Fallback);
}

export function slide(props, node) {
    let bind$0040;
    const tr = applyProps(props, (bind$0040 = Transition_get_Default(), new Transition(bind$0040.Key, bind$0040.X, bind$0040.Y, bind$0040.Opacity, 0, 400, bind$0040.DurationFn, bind$0040.Speed, cubicOut, bind$0040.CssGen, bind$0040.Tick, bind$0040.Fallback)));
    const style = Window_getComputedStyle_Z5966C024(node);
    const opacity = parseFloat$(style.opacity, "opacity");
    const height = parseFloat$(style.height, "height");
    const padding_top = parseFloat$(style.paddingTop, "paddingTop");
    const padding_bottom = parseFloat$(style.paddingBottom, "paddingBottom");
    const margin_top = parseFloat$(style.marginTop, "marginTop");
    const margin_bottom = parseFloat$(style.marginBottom, "marginBottom");
    const border_top_width = parseFloat$(style.borderTopWidth, "borderTopWidth");
    const border_bottom_width = parseFloat$(style.borderBottomWidth, "borderBottomWidth");
    return () => (new Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, _arg) => {
        let value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8;
        return join("", map((tupledArg) => toText(printf("%s: %s%s;"))(tupledArg[0])(tupledArg[1])(tupledArg[2]), ofArray([["overflow", "hidden", ""], ["opacity", (value_1 = (min(t_1 * 20, 1) * opacity), value_1.toString()), ""], ["height", (value_2 = (t_1 * height), value_2.toString()), "px"], ["padding-top", (value_3 = (t_1 * padding_top), value_3.toString()), "px"], ["padding-bottom", (value_4 = (t_1 * padding_bottom), value_4.toString()), "px"], ["margin-top", (value_5 = (t_1 * margin_top), value_5.toString()), "px"], ["margin-bottom", (value_6 = (t_1 * margin_bottom), value_6.toString()), "px"], ["border-top-width", (value_7 = (t_1 * border_top_width), value_7.toString()), "px"], ["border-bottom-width", (value_8 = (t_1 * border_bottom_width), value_8.toString()), "px"]])));
    }, tr.Tick, tr.Fallback));
}

export function draw(props, node) {
    let bind$0040;
    const tr = applyProps(props, (bind$0040 = Transition_get_Default(), new Transition(bind$0040.Key, bind$0040.X, bind$0040.Y, bind$0040.Opacity, 0, 800, bind$0040.DurationFn, bind$0040.Speed, cubicInOut, bind$0040.CssGen, bind$0040.Tick, bind$0040.Fallback)));
    const len = node.getTotalLength();
    let duration;
    const matchValue = tr.Duration;
    duration = ((matchValue === 0) ? ((tr.Speed === 0) ? 800 : (len / tr.Speed)) : matchValue);
    return () => (new Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg = t_1 * len;
        const arg_1 = u * len;
        return toText(printf("stroke-dasharray: %f %f"))(arg)(arg_1);
    }, tr.Tick, tr.Fallback));
}

export function fly(props, node) {
    let bind$0040;
    const tr = applyProps(props, (bind$0040 = Transition_get_Default(), new Transition(bind$0040.Key, 0, 0, bind$0040.Opacity, 0, 400, bind$0040.DurationFn, bind$0040.Speed, cubicOut, bind$0040.CssGen, bind$0040.Tick, bind$0040.Fallback)));
    const style = Window_getComputedStyle_Z5966C024(node);
    const targetOpacity = computedStyleOpacity(node);
    const transform = (style.transform === "none") ? "" : style.transform;
    const od = targetOpacity * (1 - tr.Opacity);
    return () => (new Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg_1 = (1 - t_1) * tr.X;
        const arg_2 = (1 - t_1) * tr.Y;
        const arg_3 = targetOpacity - (od * u);
        return toText(printf("transform: %s translate(%fpx, %fpx); opacity: %f;"))(transform)(arg_1)(arg_2)(arg_3);
    }, tr.Tick, tr.Fallback));
}

export function crossfade(userProps) {
    let tupledArg_3, clo_11, tupledArg_4, clo_14;
    const fallback = applyProps(userProps, Transition_get_Default()).Fallback;
    const toReceive = new Map([]);
    const toSend = new Map([]);
    const transition = (tupledArg_1) => ((props_1) => {
        const items = tupledArg_1[0];
        const counterparts = tupledArg_1[1];
        const intro_1 = tupledArg_1[2];
        return (node_1) => {
            const key = applyProps(props_1, Transition_get_Default()).Key;
            const r = node_1.getBoundingClientRect();
            const action = intro_1 ? "receiving" : "sending";
            if (logEnabled()) {
                log(`${action} ${key} (adding)`);
            }
            items.set(key, r);
            return () => {
                let bind$0040, arg, arg_1, arg_2, arg_3, matchValue;
                const finalProps = props_1;
                if (counterparts.has(key)) {
                    const rect = getItemFromDict(counterparts, key);
                    if (logEnabled()) {
                        log(`${action} ${key} (removing from counterparts)`);
                    }
                    counterparts.delete(key);
                    const tupledArg_2 = [rect, node_1, finalProps, intro_1];
                    const tupledArg = [tupledArg_2[0], tupledArg_2[1], tupledArg_2[2], tupledArg_2[3]];
                    const from = tupledArg[0];
                    const node = tupledArg[1];
                    const tr_2 = applyProps(userProps, applyProps(tupledArg[2], (bind$0040 = Transition_get_Default(), new Transition(bind$0040.Key, bind$0040.X, bind$0040.Y, bind$0040.Opacity, bind$0040.Delay, bind$0040.Duration, (d_1) => (Math.sqrt(d_1) * 30), bind$0040.Speed, cubicOut, bind$0040.CssGen, bind$0040.Tick, bind$0040.Fallback))));
                    const tgt = node.getBoundingClientRect();
                    const dx = from.left - tgt.left;
                    const dy = from.top - tgt.top;
                    const dw = from.width / tgt.width;
                    const dh = from.height / tgt.height;
                    if (logEnabled()) {
                        log((arg = from.left, (arg_1 = from.top, (arg_2 = tgt.left, (arg_3 = tgt.top, toText(printf("crossfade from %f,%f -> %f,%f"))(arg)(arg_1)(arg_2)(arg_3))))));
                    }
                    const d_2 = Math.sqrt((dx * dx) + (dy * dy));
                    const style = Window_getComputedStyle_Z5966C024(node);
                    const transform = (style.transform === "none") ? "" : style.transform;
                    const opacity = computedStyleOpacity(node);
                    return new Transition(tr_2.Key, tr_2.X, tr_2.Y, tr_2.Opacity, tr_2.Delay, (matchValue = tr_2.DurationFn, (matchValue == null) ? tr_2.Duration : matchValue(d_2)), undefined, tr_2.Speed, tr_2.Ease, (t_1, u) => {
                        const arg_4 = t_1 * opacity;
                        const arg_6 = u * dx;
                        const arg_7 = u * dy;
                        const arg_8 = t_1 + ((1 - t_1) * dw);
                        const arg_9 = t_1 + ((1 - t_1) * dh);
                        return toText(printf("\n                      opacity: %f;\n                      transform-origin: top left;\n                      transform: %s translate(%fpx,%fpx) scale(%f, %f);"))(arg_4)(transform)(arg_6)(arg_7)(arg_8)(arg_9);
                    }, tr_2.Tick, tr_2.Fallback);
                }
                else {
                    items.delete(key);
                    if (logEnabled()) {
                        log(`${action} falling back for ${key}`);
                    }
                    if (fallback == null) {
                        return fade(finalProps, node_1, undefined);
                    }
                    else {
                        return fallback(finalProps, node_1, undefined);
                    }
                }
            };
        };
    });
    return [(tupledArg_3 = [toSend, toReceive, false], (clo_11 = transition([tupledArg_3[0], tupledArg_3[1], tupledArg_3[2]]), (arg_17) => {
        const clo_12 = clo_11(arg_17);
        return (arg_18) => {
            const clo_13 = clo_12(arg_18);
            return clo_13;
        };
    })), (tupledArg_4 = [toReceive, toSend, true], (clo_14 = transition([tupledArg_4[0], tupledArg_4[1], tupledArg_4[2]]), (arg_23) => {
        const clo_15 = clo_14(arg_23);
        return (arg_24) => {
            const clo_16 = clo_15(arg_24);
            return clo_16;
        };
    }))];
}

