import { Registry_initialise } from "./ObservableStore.fs.js";
import { ElementRef, MountOp, ElementRef__get_AsElement } from "./Types.fs.js";
import { mount } from "./Core.fs.js";
import { exclusive } from "./CoreElements.fs.js";
import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { unmount } from "./DomHelpers.fs.js";

export function ProgramModule__mount(mp_, mp__1, view) {
    const mp = [mp_, mp__1];
    const mp_1 = mp;
    const eref = mp_1[1];
    Registry_initialise(ElementRef__get_AsElement(eref).ownerDocument);
    return mount(view, mp_1[0], mp_1[1]);
}

export function ProgramModule_mountElementOnDocumentElement(host, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(2, [host]), app);
}

export function ProgramModule_mountElementOnDocument(doc, id, app) {
    const host = doc.querySelector(`#${id}`);
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(2, [host]), app);
}

export function ProgramModule_mountDomElement(host, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(2, [host]), app);
}

export function ProgramModule_mountElement(id, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(0, [id]), exclusive(app));
}

export function ProgramModule_mountElementAfter(prev, app) {
    return ProgramModule__mount(new MountOp(1, []), new ElementRef(2, [prev]), app);
}

export class Program {
    constructor() {
    }
}

export function Program_$reflection() {
    return class_type("Sutil.Program", undefined, Program);
}

export function Program_$ctor() {
    return new Program();
}

/**
 * Mount application on element with given id. Existing children at that node will be removed. Return value can be disposed to unmount and clean up.
 */
export function Program_mount_24332BDB(id, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(0, [id]), exclusive(app));
}

/**
 * Mount application on given HTMLElement. Existing children at that node will be removed. Return value can be disposed to unmount and clean up.
 */
export function Program_mount_Z427DD8DF(host, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(2, [host]), exclusive(app));
}

/**
 * Mount application on element with id "sutil-app". Existing children at that node will be removed. Return value is <c>unit</c>, so use alternate version <c>mount( id, app )</c>
 * if you need to unmount explicitly.
 */
export function Program_mount_6E602840(app) {
    Program_mount_24332BDB("sutil-app", app);
}

/**
 * Mount application on element with given id from specific document. Existing children at that node will be removed. Return value can be disposed to unmount and clean up.
 */
export function Program_mount_37443D56(doc, id, app) {
    const host = doc.querySelector(`#${id}`);
    return Program_mount_Z427DD8DF(host, app);
}

/**
 * Mount application after given HTMLElement as a sibling. Return value can be disposed to unmount and clean up.
 */
export function Program_mountAfter_Z427DD8DF(prev, app) {
    return ProgramModule__mount(new MountOp(1, []), new ElementRef(2, [prev]), app);
}

/**
 * Mount application at given element, appending as last child and preserving existing children. Return value can be disposed to unmount and clean up.
 */
export function Program_mountAppend_Z427DD8DF(prev, app) {
    return ProgramModule__mount(new MountOp(0, []), new ElementRef(2, [prev]), app);
}

/**
 * Remove this node, cleaning up all related Sutil resources. By design, it should be rare that you need to use this, but it provides
 * a Sutil-safe way to remove nodes from the DOM. One use case is a Modal component that could be appended to the body element, and then
 * unmounted upon close. Even in that case, you might find it's neater to use a Bind.el() or Bind.visible() (or a combination) to control
 * the content and visibility of the modal.
 */
export function Program_unmount_171AE942(node) {
    unmount(node);
}

