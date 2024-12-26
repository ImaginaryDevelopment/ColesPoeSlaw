import { captures, matches, create, match } from "./fable_modules/fable-library-js.4.21.0/RegExp.js";
import { toFail, toConsole, interpolate, printf, toText } from "./fable_modules/fable-library-js.4.21.0/String.js";
import { parse } from "./fable_modules/fable-library-js.4.21.0/Double.js";
import { singleton, append, sum, map as map_2, ofSeq } from "./fable_modules/fable-library-js.4.21.0/List.js";
import { singleton as singleton_1, tryFind, iterate, empty, append as append_1, delay, toList, sum as sum_1, map } from "./fable_modules/fable-library-js.4.21.0/Seq.js";
import { defaultArg, map as map_1 } from "./fable_modules/fable-library-js.4.21.0/Option.js";
import { Record } from "./fable_modules/fable-library-js.4.21.0/Types.js";
import { record_type, list_type, tuple_type, string_type, float64_type } from "./fable_modules/fable-library-js.4.21.0/Reflection.js";

export function flip(f, x, y) {
    return f(y, x);
}

export function $007CRMatch$007C_$007C(p, x) {
    const r = match(create(p), x);
    if (r != null) {
        return r;
    }
    else {
        return undefined;
    }
}

export function $007CRMatches$007C_$007C(p, x) {
    const r = matches(create(p), x);
    if (r.length > 0) {
        return r;
    }
    else {
        return undefined;
    }
}

export const dmgPattern = (() => {
    const numRepeat = toText(printf("(%s%s)+"))("(\\d+-\\d+)")("\\s*(?:\\(augmented\\)\\s*,?)?\\s*");
    return toText(printf("%s%s"))("(\\w+) Damage:\\s*")(numRepeat);
})();

export function $007CAttackSpeed$007C_$007C(_arg) {
    const activePatternResult = $007CRMatch$007C_$007C("Attacks per Second\\s*:\\s*(\\d+\\.\\d+)", _arg);
    if (activePatternResult != null) {
        const rAps = activePatternResult;
        return parse(rAps[1] || "");
    }
    else {
        return undefined;
    }
}

export function $007CApsSpecial$007C_$007C(_arg) {
    const activePatternResult = $007CRMatch$007C_$007C("(\\d+)% increased Attack Speed while a Rare or Unique Enemy is Nearby", _arg);
    if (activePatternResult != null) {
        const rAps = activePatternResult;
        return parse(rAps[1] || "");
    }
    else {
        return undefined;
    }
}

export function $007CCritChance$007C_$007C(_arg) {
    const activePatternResult = $007CRMatch$007C_$007C("Critical Hit Chance: (\\d+\\.\\d+)%", _arg);
    if (activePatternResult != null) {
        const rCrit = activePatternResult;
        return parse(rCrit[1] || "");
    }
    else {
        return undefined;
    }
}

export function $007CCritBonus$007C_$007C(_arg) {
    const activePatternResult = $007CRMatch$007C_$007C("\\+(\\d+)% to Critical Damage Bonus", _arg);
    if (activePatternResult != null) {
        const rCb = activePatternResult;
        return parse(rCb[1] || "");
    }
    else {
        return undefined;
    }
}

export function getDamageEntries(_arg) {
    const activePatternResult = $007CRMatches$007C_$007C(dmgPattern, _arg);
    if (activePatternResult != null) {
        const rDmg = activePatternResult;
        return ofSeq(map((m) => [m[1] || "", ofSeq(map((c) => ofSeq(map(parse, c[0].split("-"))), captures(m[3])))], rDmg));
    }
    else {
        return undefined;
    }
}

export const $007CDamageEntries$007C_$007C = (arg_1) => map_1((list_3) => map_2((tupledArg) => [tupledArg[0], sum(map_2((arg) => flip((x_1, y_1) => (x_1 / y_1), 2, sum(arg, {
    GetZero: () => 0,
    Add: (x, y) => (x + y),
})), tupledArg[1]), {
    GetZero: () => 0,
    Add: (x_3, y_3) => (x_3 + y_3),
})], list_3), getDamageEntries(arg_1));

export function calc$0027(aps, dmgs) {
    const indiv = ofSeq(map((tupledArg) => [tupledArg[0], tupledArg[1] * aps], dmgs));
    return [sum_1(map_2((tuple) => tuple[1], indiv), {
        GetZero: () => 0,
        Add: (x, y) => (x + y),
    }), indiv];
}

export function calcCrit(aps, crit, critBonus, dmgs) {
    if ((crit < 0) ? true : (crit > 99)) {
        throw new Error(toText(interpolate("Invalid crit chance \'%f%P()\'", [crit])));
    }
    const indiv = ofSeq(map((tupledArg) => {
        const dmg = tupledArg[1] * aps;
        return [tupledArg[0], (((100 - crit) * dmg) + ((crit * dmg) * (1 + (defaultArg(map_1((y) => (100 + y), critBonus), 100) / 100)))) / 100];
    }, dmgs));
    return [sum_1(map_2((tuple) => tuple[1], indiv), {
        GetZero: () => 0,
        Add: (x, y_1) => (x + y_1),
    }), indiv];
}

export class WeaponDps extends Record {
    constructor(Dps, DpsTypes) {
        super();
        this.Dps = Dps;
        this.DpsTypes = DpsTypes;
    }
}

export function WeaponDps_$reflection() {
    return record_type("WeaponDps.WeaponDps", [], WeaponDps, () => [["Dps", float64_type], ["DpsTypes", list_type(tuple_type(string_type, float64_type))]]);
}

export function calcDps(aps, aps2Opt, dmgs, critOpt) {
    const patternInput = calc$0027(aps, dmgs);
    const total = patternInput[0];
    if (critOpt != null) {
        const patternInput_2 = calcCrit(aps, critOpt[0], critOpt[1], dmgs);
        return append(patternInput_2[1], singleton(["TotalCrit", patternInput_2[0]]));
    }
    else {
        toConsole(printf("dps calculated total %.2f"))(total);
        return toList(delay(() => append_1(append(patternInput[1], singleton(["Total", total])), delay(() => {
            const matchValue = aps2Opt;
            if (matchValue != null) {
                const patternInput_1 = calc$0027(aps * (1 + (matchValue / 100)), dmgs);
                const t2 = patternInput_1[0];
                const i2_1 = map_2((tupledArg) => [toText(printf("%s2"))(tupledArg[0]), tupledArg[1]], patternInput_1[1]);
                toConsole(printf("dps with Rare or Unique Nearby %.2f"))(t2);
                return append(i2_1, singleton(["Total2", t2]));
            }
            else {
                return empty();
            }
        }))));
    }
}

export const dpsLineTestCases = singleton(["Elemental Damage: 29-53 (augmented), 4-92 (augmented)", ~~(82 / 2) + ~~(96 / 2)]);

iterate((tupledArg) => {
    const text = tupledArg[0];
    const expected = tupledArg[1] | 0;
    const activePatternResult = $007CDamageEntries$007C_$007C(text);
    if (activePatternResult != null) {
        const dmgs = activePatternResult;
        if (text.startsWith("Elemental Damage")) {
            const _arg_1 = tryFind((tupledArg_1) => (tupledArg_1[0] === "Elemental"), dmgs);
            if (_arg_1 != null) {
                const v = _arg_1[1];
                if (v !== expected) {
                    toFail(printf("Actual %A, expected %i"))(v)(expected);
                }
            }
            else {
                toFail(printf("elemental not detected"));
            }
        }
    }
    else {
        throw new Error(`Damage entry unrecognized: '${text}'`);
    }
}, dpsLineTestCases);

export function runItem(text) {
    let activePatternResult_2, aps$0027;
    let matchResult, aps, dmgs;
    const activePatternResult = $007CAttackSpeed$007C_$007C(text);
    if (activePatternResult != null) {
        const activePatternResult_1 = $007CDamageEntries$007C_$007C(text);
        if (activePatternResult_1 != null) {
            matchResult = 0;
            aps = activePatternResult;
            dmgs = activePatternResult_1;
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
            const aps2Opt = (activePatternResult_2 = $007CApsSpecial$007C_$007C(text), (activePatternResult_2 != null) ? ((aps$0027 = activePatternResult_2, aps$0027)) : undefined);
            const dps = calcDps(aps, aps2Opt, dmgs, undefined);
            return toList(delay(() => append_1(singleton_1(toText(printf("Aps:%A, dps: %A"))(aps)(dps)), delay(() => {
                let activePatternResult_3, crit, critDps, activePatternResult_4, cb;
                return append_1((activePatternResult_3 = $007CCritChance$007C_$007C(text), (activePatternResult_3 != null) ? ((crit = activePatternResult_3, (critDps = calcDps(aps, aps2Opt, dmgs, [crit, (activePatternResult_4 = $007CCritBonus$007C_$007C(text), (activePatternResult_4 != null) ? ((cb = activePatternResult_4, cb)) : undefined)]), singleton_1(toText(printf("crit dps: %A"))(critDps))))) : (empty())), delay(() => {
                    return empty();
                }));
            }))));
        }
        default:
            if ($007CAttackSpeed$007C_$007C(text) != null) {
                return singleton("Couldn\'t find damage");
            }
            else if ($007CDamageEntries$007C_$007C(text) != null) {
                return singleton("Could find AttackSpeed");
            }
            else {
                return singleton("Couldn\'t find either");
            }
    }
}

