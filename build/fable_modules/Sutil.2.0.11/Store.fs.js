import { makeElmish, makeElmishSimple, makeStore } from "./ObservableStore.fs.js";
import { map as map_1, subscribe } from "../fable-library-js.4.21.0/Observable.js";
import { zip, distinctUntilChanged, filter } from "./Observable.fs.js";
import { disposeSafe, defaultOf } from "../fable-library-js.4.21.0/Util.js";
import { some } from "../fable-library-js.4.21.0/Option.js";
import { iterateIndexed } from "../fable-library-js.4.21.0/List.js";
import { addToSet } from "../fable-library-js.4.21.0/MapUtil.js";
import { fold } from "../fable-library-js.4.21.0/Seq.js";

export function StoreHelpers_disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

/**
 * Create a new store
 */
export function Store_make(modelInit) {
    return makeStore(() => modelInit, (value) => {
    });
}

/**
 * Obtains the current value of the store
 */
export function Store_get(store) {
    return store.Value;
}

/**
 * Replaces the current value of the store
 */
export function Store_set(store, newValue) {
    store.Update((_arg) => newValue);
}

/**
 * Provides a subscription that invokes a callback
 * every time the store value is updated
 */
export function Store_subscribe(callback, store) {
    return subscribe(callback, store);
}

/**
 * Returns an observable that will resolve to the result of said callback
 */
export function Store_map(callback, store) {
    return map_1(callback, store);
}

/**
 * Applies a predicate function to obtain an observable of the elements that evaluated to true
 */
export function Store_filter(predicate, store) {
    return filter(predicate, store);
}

/**
 * Provides an observable that will emit a value only when the updated store value is different from the previous one
 */
export function Store_distinct(source) {
    return distinctUntilChanged(source);
}

/**
 * Helper function for commonly used form
 * <code>
 * store |> Store.map (fun s -> s.Thing) |> Observable.distinctUntilChanged
 * </code>
 */
export function Store_mapDistinct(callback, store) {
    return Store_distinct(Store_map(callback, store));
}

/**
 * Merges two stores into a single tupled observable
 */
export function Store_zip(source1, source2) {
    return zip(source1, source2);
}

export function Store_current(store) {
    let value = defaultOf();
    disposeSafe(subscribe((v) => {
        value = v;
    }, store));
    return value;
}

/**
 * Takes a store and applies a mapping function then returns the value from the evaluated function
 */
export function Store_getMap(callback, store) {
    return callback(Store_get(store));
}

/**
 * Invoke callback for each observed value from source
 */
export function Store_iter(callback, source) {
    return Store_subscribe(callback, source);
}

export function Store_write(callback, store) {
    Store_iter(callback, store);
}

/**
 * Modify the store by mapping its current value with a callback
 */
export function Store_modify(callback, store) {
    Store_set(store, Store_getMap(callback, store));
}

/**
 * Takes two observables and subscribes to both with a single callback,
 * both values will be cached individually and
 * on every notify they will be updated and emitted,
 * every notification can come from any of the observables
 */
export function Store_subscribe2(source1, source2, callback) {
    let initState = 0;
    let cachea = defaultOf();
    let cacheb = defaultOf();
    const notify = () => {
        if (initState === 2) {
            callback([cachea, cacheb]);
        }
    };
    const unsuba = Store_subscribe((v) => {
        if (initState === 0) {
            initState = 1;
        }
        cachea = v;
        notify();
    }, source1);
    const unsubb = Store_subscribe((v_1) => {
        if (initState === 1) {
            initState = 2;
        }
        cacheb = v_1;
        notify();
    }, source2);
    if (initState !== 2) {
        console.log(some("Error: subscribe didn\'t initialize us"));
        throw new Error("Subscribe didn\'t initialize us");
    }
    return StoreHelpers_disposable(() => {
        disposeSafe(unsuba);
        disposeSafe(unsubb);
    });
}

/**
 * Creates a store and a dispatch method commonly used
 * in elmish programs, this can be used to model more complex views that require better
 * control flow and a predictable state.
 */
export function Store_makeElmishSimple(init, update, dispose) {
    return makeElmishSimple(init, update, dispose);
}

/**
 * Creates a store and a dispatch function as <c>Store.makeElmishSimple</c>
 * the difference being that this version handles [Elmish commands](https://elmish.github.io/elmish/index.html#Commands)
 * as well, generally used in more complex UIs given that with commands you can also handle
 * asynchronous code like fetching resources from a server or calling any
 * function that returns a promise or async
 */
export function Store_makeElmish(init, update, dispose) {
    return makeElmish(init, update, dispose);
}

/**
 * Alias for <c>Store.getMap</c>, takes a store and applies a mapping function then returns the value from the evaluated function
 */
export function StoreOperators_op_BarMinusGreater(s, f) {
    return Store_getMap(f, s);
}

/**
 * Alias for <c>Store.map</c>, returns an observable that will resolve to the result of said callback
 */
export function StoreOperators_op_DotGreater(s, f) {
    return Store_map(f, s);
}

/**
 * Alias for <c>Store.mapDistinct</c>
 */
export function StoreOperators_op_DotGreaterGreater(s, f) {
    return Store_mapDistinct(f, s);
}

/**
 * Alias for <c>Store.set</c>,  replaces the current value of the store
 */
export function StoreOperators_op_LessTwiddle(s, v) {
    Store_set(s, v);
}

/**
 * Alias for <c>Store.set</c>, replaces the current value of the store
 */
export function StoreOperators_op_LessTwiddleMinus(s, v) {
    Store_set(s, v);
}

/**
 * Alias for <c>Store.set</c>,  replaces the current value of the store
 */
export function StoreOperators_op_MinusTwiddleGreater(v, s) {
    Store_set(s, v);
}

/**
 * Alias for <c>Store.modify</c>. Modify the store by mapping its current value with a callback
 */
export function StoreOperators_op_LessTwiddleEquals(store, map) {
    Store_modify(map, store);
}

/**
 * Alias for <c>Store.modify</c> Modify the store by mapping its current value with a callback
 */
export function StoreOperators_op_EqualsTwiddleGreater(map, store) {
    Store_modify(map, store);
}

export function StoreExtensions_firstOf(selectors) {
    const matches = new Set([]);
    let current = -1;
    const s = Store_make(current);
    iterateIndexed((i_2, pred) => {
        const u = subscribe((state_2) => {
            const i = i_2 | 0;
            if (state_2) {
                addToSet(i, matches);
            }
            else {
                matches.delete(i);
            }
            const next = fold((a, i_1) => {
                if ((a < 0) ? true : (i_1 < a)) {
                    return i_1 | 0;
                }
                else {
                    return a | 0;
                }
            }, -1, matches) | 0;
            if (next !== current) {
                StoreOperators_op_LessTwiddle(s, next);
                current = (next | 0);
            }
        }, pred);
    }, selectors);
    return s;
}

