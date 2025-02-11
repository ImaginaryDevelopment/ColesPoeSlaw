import { DevToolsControl_Options } from "./Types.fs.js";
import { disposeSafe, getEnumerator, createAtom } from "../fable-library-js.4.21.0/Util.js";
import { some } from "../fable-library-js.4.21.0/Option.js";
import { toFloat64 } from "../fable-library-js.4.21.0/BigInt.js";
import { getTicks, now } from "../fable-library-js.4.21.0/Date.js";
import { printf, toText } from "../fable-library-js.4.21.0/String.js";
import { getItemFromDict } from "../fable-library-js.4.21.0/MapUtil.js";

export const enabled = new Map([]);

export function le() {
    return DevToolsControl_Options().LoggingEnabled;
}

export let initialized = createAtom(false);

export const init = !initialized() ? ((console.log(some("logging:init defaults")), (initialized(true), (enabled.set("store", false), (enabled.set("trans", false), (enabled.set("dom", true), (enabled.set("core", true), (enabled.set("core-elements", true), (enabled.set("style", false), (enabled.set("bind", true), (enabled.set("each", true), enabled.set("tick", false)))))))))))) : undefined;

export function initWith(states) {
    console.log(some("logging:init with states"));
    initialized(true);
    const enumerator = getEnumerator(states);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const state = forLoopVar[1];
            const name = forLoopVar[0];
            console.log(some(`logging:${name}: ${state}`));
            enabled.set(name, state);
        }
    }
    finally {
        disposeSafe(enumerator);
    }
}

export function timestamp() {
    let copyOfStruct;
    const arg = (toFloat64((copyOfStruct = now(), getTicks(copyOfStruct))) / 10000000) % 60;
    return toText(printf("%0.3f"))(arg);
}

export function isEnabled(source) {
    if (le()) {
        if (!enabled.has(source)) {
            return true;
        }
        else {
            return getItemFromDict(enabled, source);
        }
    }
    else {
        return false;
    }
}

export function log(source, message) {
    let arg;
    if (isEnabled(source)) {
        console.log(some((arg = timestamp(), toText(printf("%s: %s: %s"))(arg)(source)(message))));
    }
}

export function warning(message) {
    console.log(some(toText(printf("warning: %s"))(message)));
}

export function error(message) {
    console.log(some(toText(printf("error: %s"))(message)));
}

