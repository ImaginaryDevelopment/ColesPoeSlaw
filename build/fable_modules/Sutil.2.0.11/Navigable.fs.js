import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { Window_removeEventListener_378D00DF, Window_addEventListener_378D00DF, Window_get_location } from "./Interop.fs.js";
import { Store_set, Store_make } from "./Store.fs.js";
import { disposeOnUnmount, fragment } from "./CoreElements.fs.js";
import { disposable } from "./Helpers.fs.js";
import { ofArray } from "../fable-library-js.4.21.0/List.js";
import { Bind_el_ZF0512D0 } from "./Bind.fs.js";

export class Navigable {
    constructor() {
    }
}

export function Navigable_$reflection() {
    return class_type("Sutil.Navigable", undefined, Navigable);
}

/**
 * Call <c>dispatch</c> each time the window's location changes. The location is parsed into a <c>'T</c> with the given <c>parser</c>/
 */
export function Navigable_listenLocation_Z64CC954B(onChangeLocation) {
    let clo, clo_1;
    let onChangeRef = (_arg) => {
        throw new Error("`onChangeRef` has not been initialized.\nPlease make sure you used Elmish.Navigation.Program.Internal.subscribe");
    };
    let lastLocation = undefined;
    const onChange = (_arg_1) => {
        let value;
        let matchResult, href_1;
        if (lastLocation != null) {
            if (lastLocation === Window_get_location().href) {
                matchResult = 0;
                href_1 = lastLocation;
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
                value = undefined;
                break;
            }
            default: {
                lastLocation = Window_get_location().href;
                value = onChangeLocation(Window_get_location());
            }
        }
        return undefined;
    };
    onChangeRef = onChange;
    Window_addEventListener_378D00DF("popstate", (clo = onChangeRef, (arg) => {
        clo(arg);
    }));
    Window_addEventListener_378D00DF("hashchange", (clo_1 = onChangeRef, (arg_1) => {
        clo_1(arg_1);
    }));
    onChange();
    return () => {
        let clo_2, clo_3;
        Window_removeEventListener_378D00DF("popstate", (clo_2 = onChangeRef, (arg_2) => {
            clo_2(arg_2);
        }));
        Window_removeEventListener_378D00DF("hashchange", (clo_3 = onChangeRef, (arg_3) => {
            clo_3(arg_3);
        }));
    };
}

/**
 * Call <c>dispatch</c> each time the window's location changes. The location is parsed into a <c>'T</c> with the given <c>parser</c>/
 */
export function Navigable_listenLocation_5473E6E3(parser, dispatch) {
    return Navigable_listenLocation_Z64CC954B((arg) => {
        dispatch(parser(arg));
    });
}

/**
 * Bind the window location to a view
 */
export function Navigable_bindLocation_Z2BCB0B97(view) {
    const store = Store_make(Window_get_location());
    return fragment([disposeOnUnmount(ofArray([store, disposable(Navigable_listenLocation_5473E6E3((x) => x, (newValue) => {
        Store_set(store, newValue);
    }))])), Bind_el_ZF0512D0(store, view)]);
}

