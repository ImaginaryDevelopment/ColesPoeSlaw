import { record_type, bool_type, array_type, obj_type, string_type, class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { Record } from "../fable-library-js.4.21.0/Types.js";

export class Storage_Sync {
    constructor() {
    }
}

export function Storage_Sync_$reflection() {
    return class_type("Chrome.Storage.Sync", undefined, Storage_Sync);
}

export function Storage_Sync_$ctor() {
    return new Storage_Sync();
}

export class Runtime {
    constructor() {
    }
}

export function Runtime_$reflection() {
    return class_type("Chrome.Runtime", undefined, Runtime);
}

export function Runtime_$ctor() {
    return new Runtime();
}

export class Devtools_InspectedWindow_EvalExceptionInfo extends Record {
    constructor(code, description, details, isError, isException, value) {
        super();
        this.code = code;
        this.description = description;
        this.details = details;
        this.isError = isError;
        this.isException = isException;
        this.value = value;
    }
}

export function Devtools_InspectedWindow_EvalExceptionInfo_$reflection() {
    return record_type("Chrome.Devtools.InspectedWindow.EvalExceptionInfo", [], Devtools_InspectedWindow_EvalExceptionInfo, () => [["code", string_type], ["description", string_type], ["details", array_type(obj_type)], ["isError", bool_type], ["isException", bool_type], ["value", string_type]]);
}

export function Helpers_inject(fn, arg) {
    return new Promise((fulfil, fail) => {
        chrome.devtools.inspectedWindow.eval((`(${fn})(${JSON.stringify(arg)})`),{},((result) => {
            if (typeof result === 'undefined') {
                fail(new Error("Unknown error"));
            }
            else {
                fulfil(result);
            }
        }));
    });
}

