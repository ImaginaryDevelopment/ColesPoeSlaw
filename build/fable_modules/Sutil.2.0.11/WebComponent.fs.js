import { Record } from "../fable-library-js.4.21.0/Types.js";
import { class_type, record_type, lambda_type, unit_type } from "../fable-library-js.4.21.0/Reflection.js";
import { makeWebComponent } from "./webcomponentinterop.js";
import { mountOnShadowRoot } from "./Core.fs.js";
import { Store_make, Store_set, Store_current } from "./Store.fs.js";
import { Event_Connected, CustomDispatch$1_dispatch_4FBB8B24 } from "./DomHelpers.fs.js";
import { disposeSafe } from "../fable-library-js.4.21.0/Util.js";

class WebComponentModule_Callbacks$1 extends Record {
    constructor(OnDisconnected, GetModel, SetModel, OnConnected) {
        super();
        this.OnDisconnected = OnDisconnected;
        this.GetModel = GetModel;
        this.SetModel = SetModel;
        this.OnConnected = OnConnected;
    }
}

function WebComponentModule_Callbacks$1_$reflection(gen0) {
    return record_type("Sutil.WebComponentModule.Callbacks`1", [gen0], WebComponentModule_Callbacks$1, () => [["OnDisconnected", lambda_type(unit_type, unit_type)], ["GetModel", lambda_type(unit_type, gen0)], ["SetModel", lambda_type(gen0, unit_type)], ["OnConnected", lambda_type(unit_type, unit_type)]]);
}

export class WebComponent {
    constructor() {
    }
}

export function WebComponent_$reflection() {
    return class_type("Sutil.WebComponent", undefined, WebComponent);
}

export function WebComponent_Register_419BD1A7(name, view, initValue, initModel, dispose) {
    makeWebComponent(name, (host) => {
        const model = initModel();
        const disposeElement = mountOnShadowRoot(view(model, host), host);
        return new WebComponentModule_Callbacks$1(() => {
            dispose(model);
            disposeElement();
        }, () => Store_current(model), (newValue) => {
            Store_set(model, newValue);
        }, () => {
            CustomDispatch$1_dispatch_4FBB8B24(host.shadowRoot.firstChild, Event_Connected);
        });
    }, initValue);
}

export function WebComponent_Register_2051C3C7(name, view, init) {
    WebComponent_Register_419BD1A7(name, view, init, () => Store_make(init), (s) => {
        disposeSafe(s);
    });
}

export function WebComponent_Register_Z5336476D(name, view, init) {
    WebComponent_Register_419BD1A7(name, (store, _arg) => view(store), init, () => Store_make(init), (s) => {
        disposeSafe(s);
    });
}

