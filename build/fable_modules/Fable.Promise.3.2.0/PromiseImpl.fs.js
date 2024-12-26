import { PromiseBuilder_$ctor } from "./Promise.fs.js";
import { value } from "../fable-library-js.4.21.0/Option.js";
import { FSharpResult$2 } from "../fable-library-js.4.21.0/Result.js";

export const promise = PromiseBuilder_$ctor();

/**
 * Helper functionm to convert a settled result into an F# result
 */
export function SettledValue_toResult(p) {
    const matchValue = p.status;
    if (matchValue === "rejected") {
        return new FSharpResult$2(1, [value(p.reason)]);
    }
    else {
        return new FSharpResult$2(0, [value(p.value)]);
    }
}

