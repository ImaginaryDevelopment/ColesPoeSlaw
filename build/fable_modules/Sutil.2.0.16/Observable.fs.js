import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { some, value as value_1 } from "../fable-library-js.4.21.0/Option.js";
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

export function map2(f, a, b) {
    return {
        Subscribe(h) {
            let valueB = undefined;
            let valueA = undefined;
            const notify = () => {
                if ((valueA != null) && (valueB != null)) {
                    h.OnNext(f(value_1(valueA), value_1(valueB)));
                }
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

export function zip(a, b) {
    return map2((a_1, b_1) => [a_1, b_1], a, b);
}

export function distinctUntilChangedCompare(eq, source) {
    return {
        Subscribe(h) {
            let value = defaultOf();
            let init_1 = false;
            const safeEq = (next) => {
                if (init_1) {
                    return eq(value, next);
                }
                else {
                    return false;
                }
            };
            const disposeA = subscribe((next_1) => {
                if (!safeEq(next_1)) {
                    h.OnNext(next_1);
                    value = next_1;
                    init_1 = true;
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
 * Provide the initial value for a sequence so that new subscribers will receive an
 * immediate update of the current value
 */
export function init(v, source) {
    let current = v;
    return {
        Subscribe(h) {
            const notify = () => {
                try {
                    h.OnNext(current);
                }
                catch (ex) {
                    h.OnError(ex);
                }
            };
            const disposeA = subscribe((x) => {
                current = x;
                notify();
            }, source);
            notify();
            return disposable(() => {
                disposeSafe(disposeA);
            });
        },
    };
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

