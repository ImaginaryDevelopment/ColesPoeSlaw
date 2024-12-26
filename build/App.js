import { HtmlEngine$1__div_BB573A } from "./fable_modules/Feliz.Engine.1.0.0-beta-004/HtmlEngine.fs.js";
import { EngineHelpers_Html, EngineHelpers_text } from "./fable_modules/Sutil.2.0.11/Html.fs.js";
import { Program_mount_6E602840 } from "./fable_modules/Sutil.2.0.11/Program.fs.js";

export function view() {
    return HtmlEngine$1__div_BB573A(EngineHelpers_Html, [EngineHelpers_text("Hello World")]);
}

Program_mount_6E602840(view());

