import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { ColumnModifiersEngine$1_$ctor_558DE2CD, ColumnsModifiersEngine$1_$ctor_558DE2CD, TileModifiersEngine$1_$ctor_558DE2CD, HeroModifiersEngine$1_$ctor_558DE2CD, SectionModifiersEngine$1_$ctor_558DE2CD, LevelModifiersEngine$1_$ctor_558DE2CD, ContainerModifiersEngine$1_$ctor_558DE2CD, DeleteModifiersEngine$1_$ctor_558DE2CD, ContentModifiersEngine$1_$ctor_558DE2CD, OlModifiersEngine$1_$ctor_558DE2CD, ControlModifiersEngine$1_$ctor_558DE2CD, SelectModifiersEngine$1_$ctor_558DE2CD, IconModifiersEngine$1_$ctor_558DE2CD, FieldModifiersEngine$1_$ctor_558DE2CD, TextareaModifiersEngine$1_$ctor_558DE2CD, FieldLabelModifiersEngine$1_$ctor_558DE2CD, ButtonsModifiersEngine$1_$ctor_558DE2CD, ButtonModifiersEngine$1_$ctor_558DE2CD, InputModifiersEngine$1_$ctor_558DE2CD, FileModifiersEngine$1_$ctor_558DE2CD, PaginationLinkModifiersEngine$1_$ctor_558DE2CD, NavbarItemModifiersEngine$1_$ctor_558DE2CD, NavbarLinkModifiersEngine$1_$ctor_558DE2CD, NavbarDropdownModifiersEngine$1_$ctor_558DE2CD, NavbarBurgerModifiersEngine$1_$ctor_558DE2CD, NavbarMenuModifiersEngine$1_$ctor_558DE2CD, NavbarModifiersEngine$1_$ctor_558DE2CD, ModalCloseModifiersEngine$1_$ctor_558DE2CD, ModalModifiersEngine$1_$ctor_558DE2CD, DropdownModifiersEngine$1_$ctor_558DE2CD, CardHeaderTitleModifiersEngine$1_$ctor_558DE2CD, BreadcrumbModifiersEngine$1_$ctor_558DE2CD, TabModifiersEngine$1_$ctor_558DE2CD, TabsModifiersEngine$1_$ctor_558DE2CD, TitleModifiersEngine$1_$ctor_558DE2CD, TagsModifiersEngine$1_$ctor_558DE2CD, TagModifiersEngine$1_$ctor_558DE2CD, TrModifiersEngine$1_$ctor_558DE2CD, TableModifiersEngine$1_$ctor_558DE2CD, ProgressModifiersEngine$1_$ctor_558DE2CD, ImageModifiersEngine$1_$ctor_558DE2CD, ColorModifiersEngine$1_$ctor_558DE2CD, TextModifiersEngine$1_$ctor_558DE2CD, SpacingModifiersEngine$1_$ctor_558DE2CD, SizeModifiersEngine$1_$ctor_558DE2CD, HelpersModifiersEngine$1_$ctor_558DE2CD } from "./Modifiers.fs.js";
import { HtmlEngine$1__custom_4AE854A1, HtmlEngine$1__text_Z721C83C5, HtmlEngine$1__text_Z524259A4, HtmlEngine$1__text_5E38073B } from "../Feliz.Engine.1.0.0-beta-004/HtmlEngine.fs.js";
import { append as append_1, ofSeq, singleton } from "../fable-library-js.4.21.0/List.js";
import { AttrEngine$1__type$0027_Z721C83C5, AttrEngine$1__className_Z721C83C5 } from "../Feliz.Engine.1.0.0-beta-004/AttrEngine.fs.js";
import { append } from "../fable-library-js.4.21.0/Seq.js";

export class BulmaModifiersEngine$1 {
    constructor(a) {
        this.a = a;
    }
}

export function BulmaModifiersEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.BulmaModifiersEngine`1", [gen0], BulmaModifiersEngine$1);
}

export function BulmaModifiersEngine$1_$ctor_558DE2CD(a) {
    return new BulmaModifiersEngine$1(a);
}

export function BulmaModifiersEngine$1__get_helpers(_) {
    return HelpersModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_size(_) {
    return SizeModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_spacing(_) {
    return SpacingModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_text(_) {
    return TextModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_color(_) {
    return ColorModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_image(_) {
    return ImageModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_progress(_) {
    return ProgressModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_table(_) {
    return TableModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tr(_) {
    return TrModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tag(_) {
    return TagModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tags(_) {
    return TagsModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_title(_) {
    return TitleModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tabs(_) {
    return TabsModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tab(_) {
    return TabModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_breadcrumb(_) {
    return BreadcrumbModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_cardHeaderTitle(_) {
    return CardHeaderTitleModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_dropdown(_) {
    return DropdownModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_modal(_) {
    return ModalModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_modalClose(_) {
    return ModalCloseModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbar(_) {
    return NavbarModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbarMenu(_) {
    return NavbarMenuModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbarBurger(_) {
    return NavbarBurgerModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbarDropdown(_) {
    return NavbarDropdownModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbarLink(_) {
    return NavbarLinkModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_navbarItem(_) {
    return NavbarItemModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_paginationLink(_) {
    return PaginationLinkModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_file(_) {
    return FileModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_input(_) {
    return InputModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_button(_) {
    return ButtonModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_buttons(_) {
    return ButtonsModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_fieldLabel(_) {
    return FieldLabelModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_textarea(_) {
    return TextareaModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_field(_) {
    return FieldModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_icon(_) {
    return IconModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_select(_) {
    return SelectModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_control(_) {
    return ControlModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_ol(_) {
    return OlModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_content(_) {
    return ContentModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_delete(_) {
    return DeleteModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_container(_) {
    return ContainerModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_level(_) {
    return LevelModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_section(_) {
    return SectionModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_hero(_) {
    return HeroModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_tile(_) {
    return TileModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_columns(_) {
    return ColumnsModifiersEngine$1_$ctor_558DE2CD(_.a);
}

export function BulmaModifiersEngine$1__get_column(_) {
    return ColumnModifiersEngine$1_$ctor_558DE2CD(_.a);
}

class Helpers {
    constructor() {
    }
}

function Helpers_$reflection() {
    return class_type("Feliz.Engine.Bulma.Helpers", undefined, Helpers);
}

function Helpers_ToElems_Z447DEEF2(h, v) {
    return singleton(HtmlEngine$1__text_5E38073B(h, v));
}

function Helpers_ToElems_4807B069(h, v) {
    return singleton(HtmlEngine$1__text_Z524259A4(h, v));
}

function Helpers_ToElems_68596A0E(h, v) {
    return singleton(HtmlEngine$1__text_Z721C83C5(h, v));
}

function Helpers_ToElems_Z1A45FCD0(h, child) {
    return singleton(child);
}

function Helpers_ToElems_Z5A0A23C7(h, children) {
    return ofSeq(children);
}

function Helpers_MakeNode_2AE6EEB5(h, a, tag, cls, v) {
    return HtmlEngine$1__custom_4AE854A1(h, tag, [AttrEngine$1__className_Z721C83C5(a, cls), HtmlEngine$1__text_5E38073B(h, v)]);
}

function Helpers_MakeNode_Z269CB02E(h, a, tag, cls, v) {
    return HtmlEngine$1__custom_4AE854A1(h, tag, [AttrEngine$1__className_Z721C83C5(a, cls), HtmlEngine$1__text_Z524259A4(h, v)]);
}

function Helpers_MakeNode_74DEFC8B(h, a, tag, cls, child) {
    return HtmlEngine$1__custom_4AE854A1(h, tag, [AttrEngine$1__className_Z721C83C5(a, cls), child]);
}

function Helpers_MakeNode_Z6C26A4B(h, a, tag, cls, v) {
    return HtmlEngine$1__custom_4AE854A1(h, tag, [AttrEngine$1__className_Z721C83C5(a, cls), HtmlEngine$1__text_Z721C83C5(h, v)]);
}

function Helpers_MakeNode_34912382(h, a, tag, cls, children) {
    return HtmlEngine$1__custom_4AE854A1(h, tag, append(children, [AttrEngine$1__className_Z721C83C5(a, cls)]));
}

export class ButtonEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@94"] = a;
    }
}

export function ButtonEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.ButtonEngine`1", [gen0], ButtonEngine$1);
}

export function ButtonEngine$1_$ctor_Z65B44AD2(h, a) {
    return new ButtonEngine$1(h, a);
}

export function ButtonEngine$1__button_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "button", "button", Helpers_ToElems_68596A0E(_.h, value));
}

export function ButtonEngine$1__button_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "button", "button", Helpers_ToElems_4807B069(_.h, value));
}

export function ButtonEngine$1__button_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "button", "button", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function ButtonEngine$1__button_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "button", "button", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function ButtonEngine$1__button_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "button", "button", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function ButtonEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "a", "button", Helpers_ToElems_68596A0E(_.h, value));
}

export function ButtonEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "a", "button", Helpers_ToElems_4807B069(_.h, value));
}

export function ButtonEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "a", "button", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function ButtonEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "a", "button", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function ButtonEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "a", "button", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function ButtonEngine$1__span_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "span", "button", Helpers_ToElems_68596A0E(_.h, value));
}

export function ButtonEngine$1__span_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "span", "button", Helpers_ToElems_4807B069(_.h, value));
}

export function ButtonEngine$1__span_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "span", "button", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function ButtonEngine$1__span_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "span", "button", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function ButtonEngine$1__span_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "span", "button", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function ButtonEngine$1__submit_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "submit")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function ButtonEngine$1__submit_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "submit")), Helpers_ToElems_4807B069(_.h, value)));
}

export function ButtonEngine$1__submit_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "submit")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function ButtonEngine$1__submit_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "submit")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function ButtonEngine$1__submit_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "submit")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function ButtonEngine$1__reset_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "reset")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function ButtonEngine$1__reset_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "reset")), Helpers_ToElems_4807B069(_.h, value)));
}

export function ButtonEngine$1__reset_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "reset")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function ButtonEngine$1__reset_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "reset")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function ButtonEngine$1__reset_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@94"], "input", "button", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_["a@94"], "reset")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export class TitleEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function TitleEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.TitleEngine`1", [gen0], TitleEngine$1);
}

export function TitleEngine$1_$ctor_Z65B44AD2(h, a) {
    return new TitleEngine$1(h, a);
}

export function TitleEngine$1__h1_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h1_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h1_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h1_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h1_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h2_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h2_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h2_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h2_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h2_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h3_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h3_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h3_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h3_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h3_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h4_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h4_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h4_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h4_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h4_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h5_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h5_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h5_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h5_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h5_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h6_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h6_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h6_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h6_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h6_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h1Is1_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title is-1", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h1Is1_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title is-1", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h1Is1_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title is-1", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h1Is1_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title is-1", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h1Is1_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "title is-1", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h2Is2_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title is-2", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h2Is2_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title is-2", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h2Is2_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title is-2", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h2Is2_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title is-2", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h2Is2_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "title is-2", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h3Is3_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title is-3", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h3Is3_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title is-3", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h3Is3_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title is-3", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h3Is3_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title is-3", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h3Is3_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "title is-3", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h4Is4_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title is-4", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h4Is4_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title is-4", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h4Is4_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title is-4", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h4Is4_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title is-4", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h4Is4_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "title is-4", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h5Is5_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title is-5", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h5Is5_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title is-5", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h5Is5_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title is-5", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h5Is5_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title is-5", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h5Is5_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "title is-5", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__h6Is6_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title is-6", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__h6Is6_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title is-6", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__h6Is6_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title is-6", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__h6Is6_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title is-6", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__h6Is6_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "title is-6", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TitleEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "title", Helpers_ToElems_68596A0E(_.h, value));
}

export function TitleEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "title", Helpers_ToElems_4807B069(_.h, value));
}

export function TitleEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function TitleEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TitleEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class SubtitleEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function SubtitleEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.SubtitleEngine`1", [gen0], SubtitleEngine$1);
}

export function SubtitleEngine$1_$ctor_Z65B44AD2(h, a) {
    return new SubtitleEngine$1(h, a);
}

export function SubtitleEngine$1__h1_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h1_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h1_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h1_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h1_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h2_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h2_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h2_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h2_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h2_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h3_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h3_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h3_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h3_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h3_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h4_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h4_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h4_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h4_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h4_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h5_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h5_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h5_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h5_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h5_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h6_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h6_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h6_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h6_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h6_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h1Is1_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle is-1", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h1Is1_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle is-1", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h1Is1_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle is-1", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h1Is1_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle is-1", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h1Is1_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h1", "subtitle is-1", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h2Is2_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle is-2", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h2Is2_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle is-2", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h2Is2_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle is-2", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h2Is2_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle is-2", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h2Is2_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h2", "subtitle is-2", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h3Is3_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle is-3", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h3Is3_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle is-3", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h3Is3_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle is-3", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h3Is3_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle is-3", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h3Is3_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h3", "subtitle is-3", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h4Is4_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle is-4", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h4Is4_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle is-4", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h4Is4_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle is-4", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h4Is4_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle is-4", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h4Is4_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h4", "subtitle is-4", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h5Is5_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle is-5", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h5Is5_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle is-5", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h5Is5_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle is-5", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h5Is5_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle is-5", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h5Is5_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h5", "subtitle is-5", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__h6Is6_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle is-6", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__h6Is6_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle is-6", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__h6Is6_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle is-6", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__h6Is6_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle is-6", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__h6Is6_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "h6", "subtitle is-6", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function SubtitleEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "subtitle", Helpers_ToElems_68596A0E(_.h, value));
}

export function SubtitleEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "subtitle", Helpers_ToElems_4807B069(_.h, value));
}

export function SubtitleEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "subtitle", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function SubtitleEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "subtitle", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function SubtitleEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "subtitle", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class ControlEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function ControlEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.ControlEngine`1", [gen0], ControlEngine$1);
}

export function ControlEngine$1_$ctor_Z65B44AD2(h, a) {
    return new ControlEngine$1(h, a);
}

export function ControlEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "control", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function ControlEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "control", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function ControlEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "control", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function ControlEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "control", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class FieldEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function FieldEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.FieldEngine`1", [gen0], FieldEngine$1);
}

export function FieldEngine$1_$ctor_Z65B44AD2(h, a) {
    return new FieldEngine$1(h, a);
}

export function FieldEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field", Helpers_ToElems_68596A0E(_.h, value));
}

export function FieldEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field", Helpers_ToElems_4807B069(_.h, value));
}

export function FieldEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function FieldEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function FieldEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function FieldEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "field", Helpers_ToElems_68596A0E(_.h, value));
}

export function FieldEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "field", Helpers_ToElems_4807B069(_.h, value));
}

export function FieldEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "field", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function FieldEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "field", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function FieldEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "field", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class FileLabelEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function FileLabelEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.FileLabelEngine`1", [gen0], FileLabelEngine$1);
}

export function FileLabelEngine$1_$ctor_Z65B44AD2(h, a) {
    return new FileLabelEngine$1(h, a);
}

export function FileLabelEngine$1__label_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "file-label", Helpers_ToElems_68596A0E(_.h, value));
}

export function FileLabelEngine$1__label_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "file-label", Helpers_ToElems_4807B069(_.h, value));
}

export function FileLabelEngine$1__label_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "file-label", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function FileLabelEngine$1__label_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "file-label", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function FileLabelEngine$1__label_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "file-label", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function FileLabelEngine$1__span_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-label", Helpers_ToElems_68596A0E(_.h, value));
}

export function FileLabelEngine$1__span_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-label", Helpers_ToElems_4807B069(_.h, value));
}

export function FileLabelEngine$1__span_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-label", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function FileLabelEngine$1__span_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-label", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function FileLabelEngine$1__span_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-label", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class CardHeaderTitleEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function CardHeaderTitleEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.CardHeaderTitleEngine`1", [gen0], CardHeaderTitleEngine$1);
}

export function CardHeaderTitleEngine$1_$ctor_Z65B44AD2(h, a) {
    return new CardHeaderTitleEngine$1(h, a);
}

export function CardHeaderTitleEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-header-title", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardHeaderTitleEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-header-title", Helpers_ToElems_4807B069(_.h, value));
}

export function CardHeaderTitleEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-header-title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardHeaderTitleEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-header-title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardHeaderTitleEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-header-title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function CardHeaderTitleEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "card-header-title", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardHeaderTitleEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "card-header-title", Helpers_ToElems_4807B069(_.h, value));
}

export function CardHeaderTitleEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "card-header-title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardHeaderTitleEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "card-header-title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardHeaderTitleEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "card-header-title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class CardHeaderIconEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@304"] = a;
    }
}

export function CardHeaderIconEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.CardHeaderIconEngine`1", [gen0], CardHeaderIconEngine$1);
}

export function CardHeaderIconEngine$1_$ctor_Z65B44AD2(h, a) {
    return new CardHeaderIconEngine$1(h, a);
}

export function CardHeaderIconEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "a", "card-header-icon", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardHeaderIconEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "a", "card-header-icon", Helpers_ToElems_4807B069(_.h, value));
}

export function CardHeaderIconEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "a", "card-header-icon", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardHeaderIconEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "a", "card-header-icon", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardHeaderIconEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "a", "card-header-icon", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function CardHeaderIconEngine$1__span_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "span", "card-header-icon", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardHeaderIconEngine$1__span_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "span", "card-header-icon", Helpers_ToElems_4807B069(_.h, value));
}

export function CardHeaderIconEngine$1__span_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "span", "card-header-icon", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardHeaderIconEngine$1__span_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "span", "card-header-icon", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardHeaderIconEngine$1__span_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@304"], "span", "card-header-icon", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class CardFooterItemEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@317"] = a;
    }
}

export function CardFooterItemEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.CardFooterItemEngine`1", [gen0], CardFooterItemEngine$1);
}

export function CardFooterItemEngine$1_$ctor_Z65B44AD2(h, a) {
    return new CardFooterItemEngine$1(h, a);
}

export function CardFooterItemEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "div", "card-footer-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardFooterItemEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "div", "card-footer-item", Helpers_ToElems_4807B069(_.h, value));
}

export function CardFooterItemEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "div", "card-footer-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardFooterItemEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "div", "card-footer-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardFooterItemEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "div", "card-footer-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function CardFooterItemEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "p", "card-footer-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardFooterItemEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "p", "card-footer-item", Helpers_ToElems_4807B069(_.h, value));
}

export function CardFooterItemEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "p", "card-footer-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardFooterItemEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "p", "card-footer-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardFooterItemEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "p", "card-footer-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function CardFooterItemEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "a", "card-footer-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function CardFooterItemEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "a", "card-footer-item", Helpers_ToElems_4807B069(_.h, value));
}

export function CardFooterItemEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "a", "card-footer-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function CardFooterItemEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "a", "card-footer-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function CardFooterItemEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@317"], "a", "card-footer-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class DropdownItemEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@335"] = a;
    }
}

export function DropdownItemEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.DropdownItemEngine`1", [gen0], DropdownItemEngine$1);
}

export function DropdownItemEngine$1_$ctor_Z65B44AD2(h, a) {
    return new DropdownItemEngine$1(h, a);
}

export function DropdownItemEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "a", "dropdown-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function DropdownItemEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "a", "dropdown-item", Helpers_ToElems_4807B069(_.h, value));
}

export function DropdownItemEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "a", "dropdown-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function DropdownItemEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "a", "dropdown-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function DropdownItemEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "a", "dropdown-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function DropdownItemEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "div", "dropdown-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function DropdownItemEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "div", "dropdown-item", Helpers_ToElems_4807B069(_.h, value));
}

export function DropdownItemEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "div", "dropdown-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function DropdownItemEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "div", "dropdown-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function DropdownItemEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "div", "dropdown-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function DropdownItemEngine$1__button_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "button", "dropdown-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function DropdownItemEngine$1__button_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "button", "dropdown-item", Helpers_ToElems_4807B069(_.h, value));
}

export function DropdownItemEngine$1__button_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "button", "dropdown-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function DropdownItemEngine$1__button_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "button", "dropdown-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function DropdownItemEngine$1__button_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@335"], "button", "dropdown-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class MenuItemEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@353"] = a;
    }
}

export function MenuItemEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.MenuItemEngine`1", [gen0], MenuItemEngine$1);
}

export function MenuItemEngine$1_$ctor_Z65B44AD2(h, a) {
    return new MenuItemEngine$1(h, a);
}

export function MenuItemEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@353"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@353"], "a", "", Helpers_ToElems_68596A0E(_.h, value))]);
}

export function MenuItemEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@353"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@353"], "a", "", Helpers_ToElems_4807B069(_.h, value))]);
}

export function MenuItemEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@353"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@353"], "a", "", Helpers_ToElems_Z447DEEF2(_.h, value))]);
}

export function MenuItemEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@353"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@353"], "a", "", Helpers_ToElems_Z1A45FCD0(_.h, value))]);
}

export function MenuItemEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@353"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@353"], "a", "", Helpers_ToElems_Z5A0A23C7(_.h, children))]);
}

export class NavbarBrandEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@361"] = a;
    }
}

export function NavbarBrandEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarBrandEngine`1", [gen0], NavbarBrandEngine$1);
}

export function NavbarBrandEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarBrandEngine$1(h, a);
}

export function NavbarBrandEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@361"], "div", "navbar-brand", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarBrandEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@361"], "div", "navbar-brand", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarBrandEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@361"], "a", "navbar-brand", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarBrandEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@361"], "a", "navbar-brand", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class NavbarStartEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@368"] = a;
    }
}

export function NavbarStartEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarStartEngine`1", [gen0], NavbarStartEngine$1);
}

export function NavbarStartEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarStartEngine$1(h, a);
}

export function NavbarStartEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@368"], "div", "navbar-start", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarStartEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@368"], "div", "navbar-start", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarStartEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@368"], "a", "navbar-start", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarStartEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@368"], "a", "navbar-start", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class NavbarEndEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@375"] = a;
    }
}

export function NavbarEndEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarEndEngine`1", [gen0], NavbarEndEngine$1);
}

export function NavbarEndEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarEndEngine$1(h, a);
}

export function NavbarEndEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@375"], "div", "navbar-end", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarEndEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@375"], "div", "navbar-end", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarEndEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@375"], "a", "navbar-end", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarEndEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@375"], "a", "navbar-end", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class NavbarItemEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@382"] = a;
    }
}

export function NavbarItemEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarItemEngine`1", [gen0], NavbarItemEngine$1);
}

export function NavbarItemEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarItemEngine$1(h, a);
}

export function NavbarItemEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@382"], "div", "navbar-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarItemEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@382"], "div", "navbar-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarItemEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@382"], "a", "navbar-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarItemEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@382"], "a", "navbar-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class NavbarLinkEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@389"] = a;
    }
}

export function NavbarLinkEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarLinkEngine`1", [gen0], NavbarLinkEngine$1);
}

export function NavbarLinkEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarLinkEngine$1(h, a);
}

export function NavbarLinkEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "div", "navbar-link", Helpers_ToElems_68596A0E(_.h, value));
}

export function NavbarLinkEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "div", "navbar-link", Helpers_ToElems_4807B069(_.h, value));
}

export function NavbarLinkEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "div", "navbar-link", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function NavbarLinkEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "div", "navbar-link", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarLinkEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "div", "navbar-link", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarLinkEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "a", "navbar-link", Helpers_ToElems_68596A0E(_.h, value));
}

export function NavbarLinkEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "a", "navbar-link", Helpers_ToElems_4807B069(_.h, value));
}

export function NavbarLinkEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "a", "navbar-link", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function NavbarLinkEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "a", "navbar-link", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarLinkEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@389"], "a", "navbar-link", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class NavbarDropdownEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@402"] = a;
    }
}

export function NavbarDropdownEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.NavbarDropdownEngine`1", [gen0], NavbarDropdownEngine$1);
}

export function NavbarDropdownEngine$1_$ctor_Z65B44AD2(h, a) {
    return new NavbarDropdownEngine$1(h, a);
}

export function NavbarDropdownEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@402"], "div", "navbar-dropdown", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarDropdownEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@402"], "div", "navbar-dropdown", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function NavbarDropdownEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@402"], "a", "navbar-dropdown", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function NavbarDropdownEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@402"], "a", "navbar-dropdown", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class PaginationPreviousEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@409"] = a;
    }
}

export function PaginationPreviousEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.PaginationPreviousEngine`1", [gen0], PaginationPreviousEngine$1);
}

export function PaginationPreviousEngine$1_$ctor_Z65B44AD2(h, a) {
    return new PaginationPreviousEngine$1(h, a);
}

export function PaginationPreviousEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "a", "pagination-previous", Helpers_ToElems_68596A0E(_.h, value));
}

export function PaginationPreviousEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "a", "pagination-previous", Helpers_ToElems_4807B069(_.h, value));
}

export function PaginationPreviousEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "a", "pagination-previous", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PaginationPreviousEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "a", "pagination-previous", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PaginationPreviousEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "a", "pagination-previous", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function PaginationPreviousEngine$1__button_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "button", "pagination-previous", Helpers_ToElems_68596A0E(_.h, value));
}

export function PaginationPreviousEngine$1__button_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "button", "pagination-previous", Helpers_ToElems_4807B069(_.h, value));
}

export function PaginationPreviousEngine$1__button_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "button", "pagination-previous", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PaginationPreviousEngine$1__button_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "button", "pagination-previous", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PaginationPreviousEngine$1__button_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@409"], "button", "pagination-previous", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class PaginationNextEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@422"] = a;
    }
}

export function PaginationNextEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.PaginationNextEngine`1", [gen0], PaginationNextEngine$1);
}

export function PaginationNextEngine$1_$ctor_Z65B44AD2(h, a) {
    return new PaginationNextEngine$1(h, a);
}

export function PaginationNextEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "a", "pagination-next", Helpers_ToElems_68596A0E(_.h, value));
}

export function PaginationNextEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "a", "pagination-next", Helpers_ToElems_4807B069(_.h, value));
}

export function PaginationNextEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "a", "pagination-next", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PaginationNextEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "a", "pagination-next", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PaginationNextEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "a", "pagination-next", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function PaginationNextEngine$1__button_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "button", "pagination-next", Helpers_ToElems_68596A0E(_.h, value));
}

export function PaginationNextEngine$1__button_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "button", "pagination-next", Helpers_ToElems_4807B069(_.h, value));
}

export function PaginationNextEngine$1__button_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "button", "pagination-next", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PaginationNextEngine$1__button_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "button", "pagination-next", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PaginationNextEngine$1__button_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@422"], "button", "pagination-next", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class PaginationLinkEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@435"] = a;
    }
}

export function PaginationLinkEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.PaginationLinkEngine`1", [gen0], PaginationLinkEngine$1);
}

export function PaginationLinkEngine$1_$ctor_Z65B44AD2(h, a) {
    return new PaginationLinkEngine$1(h, a);
}

export function PaginationLinkEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "a", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "a", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "a", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "a", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "a", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__button_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "button", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__button_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "button", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__button_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "button", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__button_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "button", "pagination-link", [])]);
}

export function PaginationLinkEngine$1__button_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@435"], "li", "", [Helpers_MakeNode_34912382(_.h, _["a@435"], "button", "pagination-link", [])]);
}

export class PanelBlockEngine$1 {
    constructor(h, a) {
        this.h = h;
        this["a@448"] = a;
    }
}

export function PanelBlockEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.PanelBlockEngine`1", [gen0], PanelBlockEngine$1);
}

export function PanelBlockEngine$1_$ctor_Z65B44AD2(h, a) {
    return new PanelBlockEngine$1(h, a);
}

export function PanelBlockEngine$1__div_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "div", "panel-block", Helpers_ToElems_68596A0E(_.h, value));
}

export function PanelBlockEngine$1__div_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "div", "panel-block", Helpers_ToElems_4807B069(_.h, value));
}

export function PanelBlockEngine$1__div_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "div", "panel-block", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PanelBlockEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "div", "panel-block", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PanelBlockEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "div", "panel-block", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function PanelBlockEngine$1__a_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "a", "panel-block", Helpers_ToElems_68596A0E(_.h, value));
}

export function PanelBlockEngine$1__a_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "a", "panel-block", Helpers_ToElems_4807B069(_.h, value));
}

export function PanelBlockEngine$1__a_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "a", "panel-block", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PanelBlockEngine$1__a_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "a", "panel-block", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PanelBlockEngine$1__a_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "a", "panel-block", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function PanelBlockEngine$1__label_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "label", "panel-block", Helpers_ToElems_68596A0E(_.h, value));
}

export function PanelBlockEngine$1__label_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "label", "panel-block", Helpers_ToElems_4807B069(_.h, value));
}

export function PanelBlockEngine$1__label_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "label", "panel-block", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PanelBlockEngine$1__label_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "label", "panel-block", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PanelBlockEngine$1__label_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "label", "panel-block", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function PanelBlockEngine$1__p_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "p", "panel-block", Helpers_ToElems_68596A0E(_.h, value));
}

export function PanelBlockEngine$1__p_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "p", "panel-block", Helpers_ToElems_4807B069(_.h, value));
}

export function PanelBlockEngine$1__p_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "p", "panel-block", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function PanelBlockEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "p", "panel-block", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function PanelBlockEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _["a@448"], "p", "panel-block", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class InputEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function InputEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.InputEngine`1", [gen0], InputEngine$1);
}

export function InputEngine$1_$ctor_Z65B44AD2(h, a) {
    return new InputEngine$1(h, a);
}

export function InputEngine$1__text_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "text")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__text_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "text")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__text_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "text")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__text_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "text")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__text_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "text")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__password_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "password")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__password_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "password")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__password_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "password")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__password_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "password")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__password_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "password")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__datetimeLocal_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "datetime-local")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__datetimeLocal_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "datetime-local")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__datetimeLocal_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "datetime-local")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__datetimeLocal_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "datetime-local")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__datetimeLocal_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "datetime-local")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__date_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "date")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__date_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "date")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__date_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "date")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__date_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "date")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__date_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "date")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__month_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "month")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__month_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "month")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__month_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "month")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__month_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "month")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__month_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "month")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__time_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "time")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__time_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "time")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__time_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "time")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__time_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "time")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__time_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "time")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__week_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "week")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__week_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "week")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__week_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "week")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__week_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "week")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__week_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "week")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__url_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "url")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__url_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "url")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__url_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "url")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__url_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "url")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__url_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "url")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__search_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "search")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__search_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "search")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__search_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "search")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__search_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "search")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__search_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "search")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__color_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "color")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__color_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "color")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__color_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "color")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__color_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "color")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__color_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "color")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__email_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "email")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__email_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "email")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__email_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "email")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__email_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "email")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__email_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "email")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__tel_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "tel")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__tel_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "tel")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__tel_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "tel")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__tel_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "tel")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__tel_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "tel")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__number_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "number")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__number_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "number")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__number_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "number")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__number_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "number")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__number_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "number")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__checkbox_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__checkbox_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__checkbox_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__checkbox_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__checkbox_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__radio_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "radio")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function InputEngine$1__radio_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "radio")), Helpers_ToElems_4807B069(_.h, value)));
}

export function InputEngine$1__radio_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "radio")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function InputEngine$1__radio_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "radio")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function InputEngine$1__radio_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "radio")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function InputEngine$1__labelCheckbox_Z384F8060(_, label, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", [Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_68596A0E(_.h, value))), HtmlEngine$1__text_Z721C83C5(_.h, label)]);
}

export function InputEngine$1__labelCheckbox_Z18115A39(_, label, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", [Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_4807B069(_.h, value))), HtmlEngine$1__text_Z721C83C5(_.h, label)]);
}

export function InputEngine$1__labelCheckbox_146B04A0(_, label, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", [Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z447DEEF2(_.h, value))), HtmlEngine$1__text_Z721C83C5(_.h, label)]);
}

export function InputEngine$1__labelCheckbox_4A51B60E(_, label, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", [Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z1A45FCD0(_.h, value))), HtmlEngine$1__text_Z721C83C5(_.h, label)]);
}

export function InputEngine$1__labelCheckbox_4AE854A1(_, label, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", [Helpers_MakeNode_34912382(_.h, _.a, "input", "", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "checkbox")), Helpers_ToElems_Z5A0A23C7(_.h, children))), HtmlEngine$1__text_Z721C83C5(_.h, label)]);
}

export class InputLabelsEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function InputLabelsEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.InputLabelsEngine`1", [gen0], InputLabelsEngine$1);
}

export function InputLabelsEngine$1_$ctor_Z65B44AD2(h, a) {
    return new InputLabelsEngine$1(h, a);
}

export function InputLabelsEngine$1__checkbox_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function InputLabelsEngine$1__checkbox_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "checkbox", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function InputLabelsEngine$1__radio_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "radio", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function InputLabelsEngine$1__radio_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "radio", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class TextEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
    }
}

export function TextEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.TextEngine`1", [gen0], TextEngine$1);
}

export function TextEngine$1_$ctor_Z65B44AD2(h, a) {
    return new TextEngine$1(h, a);
}

export function TextEngine$1__p_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "text", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TextEngine$1__p_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "text", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TextEngine$1__div_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "text", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TextEngine$1__div_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "text", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function TextEngine$1__span_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "text", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function TextEngine$1__span_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "text", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export class BulmaEngine$1 {
    constructor(h, a) {
        this.h = h;
        this.a = a;
        this._m = BulmaModifiersEngine$1_$ctor_558DE2CD(this.a);
        this._button = ButtonEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._title = TitleEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._subtitle = SubtitleEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._control = ControlEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._field = FieldEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._fileLabel = FileLabelEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._cardHeaderTitle = CardHeaderTitleEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._cardHeaderIcon = CardHeaderIconEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._cardFooterItem = CardFooterItemEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._dropdownItem = DropdownItemEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._menuItem = MenuItemEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarBrand = NavbarBrandEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarStart = NavbarStartEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarEnd = NavbarEndEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarItem = NavbarItemEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarLink = NavbarLinkEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._navbarDropdown = NavbarDropdownEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._paginationPrevious = PaginationPreviousEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._paginationNext = PaginationNextEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._paginationLink = PaginationLinkEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._panelBlock = PanelBlockEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._input = InputEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._inputLabels = InputLabelsEngine$1_$ctor_Z65B44AD2(this.h, this.a);
        this._text = TextEngine$1_$ctor_Z65B44AD2(this.h, this.a);
    }
}

export function BulmaEngine$1_$reflection(gen0) {
    return class_type("Feliz.Engine.Bulma.BulmaEngine`1", [gen0], BulmaEngine$1);
}

export function BulmaEngine$1_$ctor_Z65B44AD2(h, a) {
    return new BulmaEngine$1(h, a);
}

export function BulmaEngine$1__get_m(_) {
    return _._m;
}

export function BulmaEngine$1__container_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "container", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__container_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "container", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__container_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "container", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__container_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "container", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__container_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "container", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__level_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "level", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__level_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "level", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__levelLeft_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-left", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__levelLeft_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-left", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__levelLeft_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-left", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__levelLeft_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-left", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__levelLeft_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-left", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__levelRight_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-right", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__levelRight_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-right", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__levelRight_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-right", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__levelRight_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-right", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__levelRight_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-right", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__levelItem_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-item", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__levelItem_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-item", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__levelItem_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-item", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__levelItem_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-item", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__levelItem_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "level-item", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__media_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "media", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__media_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "media", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__media_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "media", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__media_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "media", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__media_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "media", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__mediaLeft_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-left", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__mediaLeft_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-left", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__mediaLeft_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-left", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__mediaLeft_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-left", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__mediaLeft_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-left", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__mediaRight_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-right", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__mediaRight_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-right", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__mediaRight_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-right", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__mediaRight_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-right", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__mediaRight_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-right", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__mediaContent_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-content", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__mediaContent_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-content", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__mediaContent_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-content", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__mediaContent_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-content", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__mediaContent_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "media-content", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__hero_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "hero", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__hero_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "hero", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__heroBody_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-body", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__heroBody_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-body", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__heroBody_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-body", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__heroBody_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-body", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__heroBody_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-body", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__heroHead_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-head", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__heroHead_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-head", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__heroHead_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-head", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__heroHead_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-head", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__heroHead_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-head", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__heroFoot_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-foot", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__heroFoot_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-foot", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__heroFoot_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-foot", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__heroFoot_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-foot", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__heroFoot_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "hero-foot", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__fieldLabel_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-label", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__fieldLabel_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-label", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__fieldLabel_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-label", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__fieldLabel_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-label", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__fieldLabel_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-label", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__fieldBody_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-body", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__fieldBody_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-body", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__fieldBody_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-body", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__fieldBody_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-body", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__fieldBody_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "field-body", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__fileInput_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "file-input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "file")), Helpers_ToElems_68596A0E(_.h, value)));
}

export function BulmaEngine$1__fileInput_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "file-input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "file")), Helpers_ToElems_4807B069(_.h, value)));
}

export function BulmaEngine$1__fileInput_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "file-input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "file")), Helpers_ToElems_Z447DEEF2(_.h, value)));
}

export function BulmaEngine$1__fileInput_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "file-input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "file")), Helpers_ToElems_Z1A45FCD0(_.h, value)));
}

export function BulmaEngine$1__fileInput_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "input", "file-input", append_1(singleton(AttrEngine$1__type$0027_Z721C83C5(_.a, "file")), Helpers_ToElems_Z5A0A23C7(_.h, children)));
}

export function BulmaEngine$1__fileCta_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-cta", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__fileCta_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-cta", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__fileName_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-name", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__fileName_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-name", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__fileName_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-name", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__fileName_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-name", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__fileName_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-name", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__fileIcon_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-icon", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__fileIcon_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "file-icon", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__section_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "section", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__section_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "section", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__footer_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "footer", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__footer_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "footer", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tile_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tile", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__tile_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tile", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__tile_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tile", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__tile_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tile", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tile_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tile", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__columns_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "columns", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__columns_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "columns", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__columns_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "columns", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__columns_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "columns", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__columns_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "columns", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__column_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "column", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__column_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "column", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__column_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "column", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__column_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "column", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__column_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "column", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__label_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "label", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__label_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "label", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__label_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "label", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__label_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "label", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__label_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "label", "label", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__textarea_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "textarea", "textarea", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__textarea_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "textarea", "textarea", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__select_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "select", [Helpers_MakeNode_34912382(_.h, _.a, "select", "", Helpers_ToElems_Z1A45FCD0(_.h, value))]);
}

export function BulmaEngine$1__select_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "select", [Helpers_MakeNode_34912382(_.h, _.a, "select", "", Helpers_ToElems_Z5A0A23C7(_.h, children))]);
}

export function BulmaEngine$1__icon_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "icon", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__icon_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "icon", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__file_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "file", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__file_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "file", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__block_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "block", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__block_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "block", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__block_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "block", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__block_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "block", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__block_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "block", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__box_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "box", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__box_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "box", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__box_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "box", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__box_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "box", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__box_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "box", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__buttons_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "buttons", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__buttons_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "buttons", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__content_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "content", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__content_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "content", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__content_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "content", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__content_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "content", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__content_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "content", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__delete_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "button", "delete", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__delete_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "button", "delete", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__image_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "figure", "image", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__image_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "figure", "image", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__notification_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "notification", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__notification_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "notification", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__notification_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "notification", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__notification_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "notification", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__notification_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "notification", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__progress_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "progress", "progress", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__progress_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "progress", "progress", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__progress_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "progress", "progress", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__progress_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "progress", "progress", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__progress_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "progress", "progress", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__table_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "table", "table", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__table_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "table", "table", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tableContainer_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "table-container", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tableContainer_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "table-container", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tag_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "tag", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__tag_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "tag", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__tag_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "tag", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__tag_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "tag", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tag_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "tag", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tags_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tags", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tags_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tags", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__breadcrumb_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "breadcrumb", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__breadcrumb_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "breadcrumb", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__card_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__card_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__cardHeader_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "header", "card-header", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__cardHeader_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "header", "card-header", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__cardImage_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-image", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__cardImage_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-image", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__cardContent_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-content", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__cardContent_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-content", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__cardContent_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-content", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__cardContent_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-content", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__cardContent_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "card-content", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__cardFooter_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "card-footer", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__cardFooter_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "card-footer", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__dropdown_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__dropdown_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__dropdownTrigger_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-trigger", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__dropdownTrigger_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-trigger", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__dropdownMenu_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-menu", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__dropdownMenu_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-menu", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__dropdownContent_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-content", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__dropdownContent_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "dropdown-content", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__dropdownDivider_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "hr", "dropdown-divider", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__dropdownDivider_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "hr", "dropdown-divider", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__menu_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "aside", "menu", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__menu_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "aside", "menu", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__menuLabel_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "menu-label", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__menuLabel_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "menu-label", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__menuLabel_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "menu-label", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__menuLabel_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "menu-label", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__menuLabel_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "menu-label", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__menuList_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "ul", "menu-list", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__menuList_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "ul", "menu-list", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__message_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "message", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__message_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "article", "message", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__messageHeader_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-header", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__messageHeader_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-header", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__messageBody_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-body", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__messageBody_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-body", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__messageBody_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-body", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__messageBody_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-body", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__messageBody_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "message-body", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modal_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modal_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalBackground_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-background", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalBackground_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-background", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalClose_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "button", "modal-close", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalClose_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "button", "modal-close", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalContent_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-content", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__modalContent_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-content", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__modalContent_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-content", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__modalContent_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-content", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalContent_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-content", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalCard_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-card", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalCard_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "modal-card", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalCardHead_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "header", "modal-card-head", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalCardHead_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "header", "modal-card-head", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalCardBody_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "modal-card-body", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalCardBody_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "section", "modal-card-body", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalCardFoot_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "modal-card-foot", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalCardFoot_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "footer", "modal-card-foot", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__modalCardTitle_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "modal-card-title", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__modalCardTitle_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "modal-card-title", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__modalCardTitle_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "modal-card-title", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__modalCardTitle_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "modal-card-title", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__modalCardTitle_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "modal-card-title", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__navbar_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "navbar", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__navbar_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "navbar", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__navbarDivider_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "hr", "navbar-divider", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__navbarDivider_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "hr", "navbar-divider", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__navbarMenu_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "navbar-menu", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__navbarMenu_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "navbar-menu", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__navbarBurger_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "a", "navbar-burger", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__navbarBurger_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "a", "navbar-burger", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__pagination_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "pagination", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__pagination_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "pagination", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__paginationList_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "ul", "pagination-list", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__paginationList_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "ul", "pagination-list", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__paginationEllipsis_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "li", "", [Helpers_MakeNode_34912382(_.h, _.a, "span", "pagination-ellipsis", append_1(singleton(HtmlEngine$1__text_Z721C83C5(_.h, "…")), Helpers_ToElems_Z1A45FCD0(_.h, value)))]);
}

export function BulmaEngine$1__paginationEllipsis_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "li", "", [Helpers_MakeNode_34912382(_.h, _.a, "span", "pagination-ellipsis", append_1(singleton(HtmlEngine$1__text_Z721C83C5(_.h, "…")), Helpers_ToElems_Z5A0A23C7(_.h, children)))]);
}

export function BulmaEngine$1__panel_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "panel", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__panel_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "nav", "panel", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__panelHeading_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "panel-heading", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__panelHeading_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "panel-heading", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__panelTabs_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "panel-tabs", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__panelTabs_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "panel-tabs", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__panelIcon_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "panel-icon", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__panelIcon_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "span", "panel-icon", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tabs_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tabs", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tabs_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "div", "tabs", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__tab_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "li", "tab", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__tab_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "li", "tab", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__help_Z721C83C5(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "help", Helpers_ToElems_68596A0E(_.h, value));
}

export function BulmaEngine$1__help_Z524259A4(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "help", Helpers_ToElems_4807B069(_.h, value));
}

export function BulmaEngine$1__help_5E38073B(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "help", Helpers_ToElems_Z447DEEF2(_.h, value));
}

export function BulmaEngine$1__help_2B595(_, value) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "help", Helpers_ToElems_Z1A45FCD0(_.h, value));
}

export function BulmaEngine$1__help_BB573A(_, children) {
    return Helpers_MakeNode_34912382(_.h, _.a, "p", "help", Helpers_ToElems_Z5A0A23C7(_.h, children));
}

export function BulmaEngine$1__get_button(_) {
    return _._button;
}

export function BulmaEngine$1__get_title(_) {
    return _._title;
}

export function BulmaEngine$1__get_subtitle(_) {
    return _._subtitle;
}

export function BulmaEngine$1__get_control(_) {
    return _._control;
}

export function BulmaEngine$1__get_field(_) {
    return _._field;
}

export function BulmaEngine$1__get_fileLabel(_) {
    return _._fileLabel;
}

export function BulmaEngine$1__get_cardHeaderTitle(_) {
    return _._cardHeaderTitle;
}

export function BulmaEngine$1__get_cardHeaderIcon(_) {
    return _._cardHeaderIcon;
}

export function BulmaEngine$1__get_cardFooterItem(_) {
    return _._cardFooterItem;
}

export function BulmaEngine$1__get_dropdownItem(_) {
    return _._dropdownItem;
}

export function BulmaEngine$1__get_menuItem(_) {
    return _._menuItem;
}

export function BulmaEngine$1__get_navbarBrand(_) {
    return _._navbarBrand;
}

export function BulmaEngine$1__get_navbarStart(_) {
    return _._navbarStart;
}

export function BulmaEngine$1__get_navbarEnd(_) {
    return _._navbarEnd;
}

export function BulmaEngine$1__get_navbarItem(_) {
    return _._navbarItem;
}

export function BulmaEngine$1__get_navbarLink(_) {
    return _._navbarLink;
}

export function BulmaEngine$1__get_navbarDropdown(_) {
    return _._navbarDropdown;
}

export function BulmaEngine$1__get_paginationPrevious(_) {
    return _._paginationPrevious;
}

export function BulmaEngine$1__get_paginationNext(_) {
    return _._paginationNext;
}

export function BulmaEngine$1__get_paginationLink(_) {
    return _._paginationLink;
}

export function BulmaEngine$1__get_panelBlock(_) {
    return _._panelBlock;
}

export function BulmaEngine$1__get_input(_) {
    return _._input;
}

export function BulmaEngine$1__get_inputLabels(_) {
    return _._inputLabels;
}

export function BulmaEngine$1__get_text(_) {
    return _._text;
}

