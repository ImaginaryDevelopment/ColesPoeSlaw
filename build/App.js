import { Store_make } from "./fable_modules/Sutil.2.0.16/Store.fs.js";
import { HtmlEngine$1__pre_BB573A, HtmlEngine$1__textarea_BB573A, HtmlEngine$1__div_BB573A } from "./fable_modules/Feliz.Engine.1.0.0-beta-004/HtmlEngine.fs.js";
import { EngineHelpers_Html, EngineHelpers_text } from "./fable_modules/Sutil.2.0.16/Html.fs.js";
import { Bind_el_ZF0512D0, Bind_attr_3099C820 } from "./fable_modules/Sutil.2.0.16/Bind.fs.js";
import { join } from "./fable_modules/fable-library-js.4.21.0/String.js";
import { runItem } from "./WeaponDps.js";
import { genSample } from "./ItemDisplay.js";
import { Program_mount_6E602840 } from "./fable_modules/Sutil.2.0.16/Program.fs.js";

export function view() {
    const userText = Store_make("");
    return HtmlEngine$1__div_BB573A(EngineHelpers_Html, [HtmlEngine$1__div_BB573A(EngineHelpers_Html, [EngineHelpers_text("Hello World")]), HtmlEngine$1__div_BB573A(EngineHelpers_Html, [HtmlEngine$1__textarea_BB573A(EngineHelpers_Html, [Bind_attr_3099C820("value", userText)])]), HtmlEngine$1__div_BB573A(EngineHelpers_Html, [Bind_el_ZF0512D0(userText, (text$0027) => {
        const output = join("\r\n", runItem(text$0027));
        return HtmlEngine$1__pre_BB573A(EngineHelpers_Html, [EngineHelpers_text(output)]);
    })]), genSample.Value]);
}

Program_mount_6E602840(view());

