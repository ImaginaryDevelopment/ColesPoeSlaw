import Timer from "../fable-library-js.4.21.0/Timer.js";
import { add } from "../fable-library-js.4.21.0/Observable.js";
import { concat, map, singleton, empty } from "../fable-library-js.4.21.0/List.js";
import { singleton as singleton_1 } from "../fable-library-js.4.21.0/AsyncBuilder.js";
import { startImmediate, catchAsync } from "../fable-library-js.4.21.0/Async.js";

export function Timer_delay(interval, callback) {
    let t;
    let returnVal = new Timer(interval);
    returnVal.AutoReset = false;
    t = returnVal;
    add(callback, t.Elapsed());
    t.Enabled = true;
    t.Start();
}

export function Cmd_none() {
    return empty();
}

/**
 * Command to call the effect
 */
export function Cmd_ofEffect(effect) {
    return singleton(effect);
}

export function Cmd_map(f, cmd) {
    return map((g) => ((arg_1) => {
        g((arg) => {
            arg_1(f(arg));
        });
    }), cmd);
}

export function Cmd_ofMsg(msg) {
    return singleton((d) => {
        d(msg);
    });
}

export function Cmd_batch(cmds) {
    return concat(cmds);
}

export function Cmd_OfFunc_either(task, a, success, error) {
    return singleton((d) => {
        try {
            return d(success(task(a)));
        }
        catch (x) {
            return d(error(x));
        }
    });
}

export function Cmd_OfFunc_perform(task, a, success) {
    return singleton((d) => {
        try {
            d(success(task(a)));
        }
        catch (matchValue) {
        }
    });
}

export function Cmd_OfFunc_attempt(task, a, error) {
    return singleton((d) => {
        try {
            task(a);
        }
        catch (x) {
            d(error(x));
        }
    });
}

export function Cmd_OfFunc_exec(task, a) {
    return singleton((d) => {
        try {
            task(a);
        }
        catch (matchValue) {
        }
    });
}

/**
 * Command that will evaluate an async block and map the result
 * into success or error (of exception)
 */
export function Cmd_OfAsyncWith_either(start, task, arg, ofSuccess, ofError) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg) => {
            const r = _arg;
            arg_1((r.tag === 1) ? ofError(r.fields[0]) : ofSuccess(r.fields[0]));
            return singleton_1.Zero();
        })));
    });
}

/**
 * Command that will evaluate an async block and map the success
 */
export function Cmd_OfAsyncWith_perform(start, task, arg, ofSuccess) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg) => {
            const r = _arg;
            if (r.tag === 0) {
                arg_1(ofSuccess(r.fields[0]));
                return singleton_1.Zero();
            }
            else {
                return singleton_1.Zero();
            }
        })));
    });
}

/**
 * Command that will evaluate an async block and map the error (of exception)
 */
export function Cmd_OfAsyncWith_attempt(start, task, arg, ofError) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg) => {
            const r = _arg;
            if (r.tag === 1) {
                arg_1(ofError(r.fields[0]));
                return singleton_1.Zero();
            }
            else {
                return singleton_1.Zero();
            }
        })));
    });
}

/**
 * Command that will evaluate an async block to the message
 */
export function Cmd_OfAsyncWith_result(start, task) {
    return singleton((arg) => {
        start(singleton_1.Delay(() => singleton_1.Bind(task, (_arg) => {
            arg(_arg);
            return singleton_1.Zero();
        })));
    });
}

export function Cmd_OfAsync_start(x) {
    Timer_delay(0, (_arg) => {
        startImmediate(x);
    });
}

/**
 * Command to call `promise` block and map the results
 */
export function Cmd_OfPromise_either(task, arg, ofSuccess, ofError) {
    return singleton((dispatch) => {
        task(arg).then((arg_3) => {
            dispatch(ofSuccess(arg_3));
        }).catch((arg_2) => {
            dispatch(ofError(arg_2));
        });
    });
}

/**
 * Command to call `promise` block and map the success
 */
export function Cmd_OfPromise_perform(task, arg, ofSuccess) {
    return singleton((dispatch) => {
        task(arg).then((arg_1) => dispatch(ofSuccess(arg_1)));
    });
}

/**
 * Command to call `promise` block and map the error
 */
export function Cmd_OfPromise_attempt(task, arg, ofError) {
    return singleton((dispatch) => {
        task(arg).catch((arg_2) => {
            dispatch(ofError(arg_2));
        });
    });
}

/**
 * Command to dispatch the `promise` result
 */
export function Cmd_OfPromise_result(task) {
    return singleton((dispatch) => {
        task.then(dispatch);
    });
}

