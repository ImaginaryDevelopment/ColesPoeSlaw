import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { some, map2 } from "../fable-library-js.4.21.0/Option.js";
import { subscribe } from "../fable-library-js.4.21.0/Observable.js";
import { disposable } from "./Helpers.fs.js";
import { equals, defaultOf, disposeSafe } from "../fable-library-js.4.21.0/Util.js";

export class BasicObserver$1 {
    constructor() {
        this.stopped = false;
    }
    OnNext(value) {
        const x = this;
        if (!x.stopped) {
            x["Sutil.Observable.BasicObserver`1.Next2B595"](value);
        }
    }
    OnError(e) {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sutil.Observable.BasicObserver`1.Error229D3F39"](e);
        }
    }
    OnCompleted() {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sutil.Observable.BasicObserver`1.Completed"]();
        }
    }
}

export function BasicObserver$1_$reflection(gen0) {
    return class_type("Sutil.Observable.BasicObserver`1", [gen0], BasicObserver$1);
}

export function BasicObserver$1_$ctor() {
    return new BasicObserver$1();
}

export function zip(a, b) {
    return {
        Subscribe(h) {
            let valueA = undefined;
            let valueB = undefined;
            const notify = () => {
                map2((a_1, b_1) => {
                    h.OnNext([a_1, b_1]);
                }, valueA, valueB);
            };
            const disposeA = subscribe((v) => {
                valueA = some(v);
                notify();
            }, a);
            const disposeB = subscribe((v_1) => {
                valueB = some(v_1);
                notify();
            }, b);
            return disposable(() => {
                disposeSafe(disposeA);
                disposeSafe(disposeB);
            });
        },
    };
}

export function distinctUntilChangedCompare(eq, source) {
    return {
        Subscribe(h) {
            let value = defaultOf();
            let init = false;
            const disposeA = subscribe((next_1) => {
                if (!(init && eq(value, next_1))) {
                    h.OnNext(next_1);
                    value = next_1;
                    init = true;
                }
            }, source);
            return disposable(() => {
                disposeSafe(disposeA);
            });
        },
    };
}

export function distinctUntilChanged(source) {
    return distinctUntilChangedCompare(equals, source);
}

/**
 * Determines whether an observable sequence contains a specified value
 * which satisfies the given predicate
 */
export function exists(predicate, source) {
    return {
        Subscribe(h) {
            const disposeA = subscribe((x) => {
                try {
                    h.OnNext(predicate(x));
                }
                catch (ex) {
                    h.OnError(ex);
                }
            }, source);
            return disposable(() => {
                disposeSafe(disposeA);
            });
        },
    };
}

/**
 * Filters the observable elements of a sequence based on a predicate
 */
export function filter(predicate, source) {
    return {
        Subscribe(h) {
            const disposeA = subscribe((x) => {
                try {
                    if (predicate(x)) {
                        h.OnNext(x);
                    }
                }
                catch (ex) {
                    h.OnError(ex);
                }
            }, source);
            return disposable(() => {
                disposeSafe(disposeA);
            });
        },
    };
}

