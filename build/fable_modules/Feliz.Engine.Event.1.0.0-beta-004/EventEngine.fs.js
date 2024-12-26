import { class_type } from "../fable-library-js.4.21.0/Reflection.js";
import { map, delay, toList } from "../fable-library-js.4.21.0/Seq.js";
import { rangeDouble } from "../fable-library-js.4.21.0/Range.js";

export class EventEngine$1 {
    constructor(mk) {
        this.mk = mk;
    }
}

export function EventEngine$1_$reflection(gen0) {
    return class_type("Feliz.EventEngine`1", [gen0], EventEngine$1);
}

export function EventEngine$1_$ctor_4C3D226A(mk) {
    return new EventEngine$1(mk);
}

/**
 * Fires when a media event is aborted.
 */
export function EventEngine$1__onAbort_7DDE0344(_, handler) {
    return _.mk("abort", handler);
}

/**
 * Fires when animation is aborted.
 */
export function EventEngine$1__onAnimationCancel_2312512(_, handler) {
    return _.mk("animationCancel", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when animation ends.
 */
export function EventEngine$1__onAnimationEnd_2312512(_, handler) {
    return _.mk("animationEnd", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when animation iterates.
 */
export function EventEngine$1__onAnimationIteration_2312512(_, handler) {
    return _.mk("animationIteration", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when animation starts.
 */
export function EventEngine$1__onAnimationStart_2312512(_, handler) {
    return _.mk("animationStart", (arg) => {
        handler(arg);
    });
}

/**
 * Fires the moment that the element loses focus.
 */
export function EventEngine$1__onBlur_13C15648(_, handler) {
    return _.mk("blur", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a user dismisses the current open dialog
 */
export function EventEngine$1__onCancel_7DDE0344(_, handler) {
    return _.mk("cancel", handler);
}

/**
 * Fires when a file is ready to start playing (when it has buffered enough to begin).
 */
export function EventEngine$1__onCanPlay_7DDE0344(_, handler) {
    return _.mk("canPlay", handler);
}

/**
 * Fires when a file can be played all the way to the end without pausing for buffering
 */
export function EventEngine$1__onCanPlayThrough_7DDE0344(_, handler) {
    return _.mk("canPlayThrough", handler);
}

/**
 * Fires the moment when the value of the element is changed
 */
export function EventEngine$1__onChange_7DDE0344(_, handler) {
    return _.mk("change", handler);
}

/**
 * Same as `onChange` that takes an event as input but instead let's you deal with the `checked` value changed from the `input` element
 * directly when it is defined as a checkbox with attribute `inputType.checkbox`.
 */
export function EventEngine$1__onChange_50F94480(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        handler(el.checked);
    });
}

/**
 * Same as `onChange` that takes an event as input but instead lets you deal with the selected file directly from the `input` element when it is defined as a checkbox with `prop.type'.file`.
 */
export function EventEngine$1__onChange_ZB305852(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        const files = el.files;
        if (!(files == null) && (files.length > 0)) {
            handler(files.item(0));
        }
    });
}

/**
 * Same as `onChange` that takes an event as input but instead lets you deal with the selected files directly from the `input` element when it is defined as a checkbox with `prop.type'.file` and `prop.multiple true`.
 */
export function EventEngine$1__onChange_Z2936DFD4(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        const fileList = el.files;
        if (!(fileList == null)) {
            handler(toList(delay(() => map((i) => fileList.item(i), rangeDouble(0, 1, fileList.length - 1)))));
        }
    });
}

/**
 * Same as `onChange` that takes an event as input but instead let's you deal with the text changed from the `input` element directly
 * instead of extracting it from the event arguments.
 */
export function EventEngine$1__onChange_41EFD311(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        handler(el.value);
    });
}

/**
 * Same as `onChange` but let's you deal with the `checked` value that has changed from the `input` element directly instead of extracting it from the event arguments.
 */
export function EventEngine$1__onCheckedChange_50F94480(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        handler(el.checked);
    });
}

/**
 * Fires on a mouse click on the element.
 */
export function EventEngine$1__onClick_58BC8925(_, handler) {
    return _.mk("click", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when composition ends.
 */
export function EventEngine$1__onCompositionEnd_2A4605FC(_, handler) {
    return _.mk("compositionEnd", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when composition starts.
 */
export function EventEngine$1__onCompositionStart_2A4605FC(_, handler) {
    return _.mk("compositionStart", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when composition changes.
 */
export function EventEngine$1__onCompositionUpdate_2A4605FC(_, handler) {
    return _.mk("compositionUpdate", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a context menu is triggered.
 */
export function EventEngine$1__onContextMenu_58BC8925(_, handler) {
    return _.mk("contextMenu", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a TextTrack has changed the currently displaying cues.
 */
export function EventEngine$1__onCueChange_7DDE0344(_, handler) {
    return _.mk("cueChange", handler);
}

/**
 * Fires when the user copies the content of an element.
 */
export function EventEngine$1__onCopy_650C9FE8(_, handler) {
    return _.mk("copy", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the user cuts the content of an element.
 */
export function EventEngine$1__onCut_650C9FE8(_, handler) {
    return _.mk("cut", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a mouse is double clicked on the element.
 */
export function EventEngine$1__onDblClick_58BC8925(_, handler) {
    return _.mk("dblClick", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element is dragged.
 */
export function EventEngine$1__onDrag_Z3384A56C(_, handler) {
    return _.mk("drag", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the a drag operation has ended.
 */
export function EventEngine$1__onDragEnd_Z3384A56C(_, handler) {
    return _.mk("dragEnd", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element has been dragged to a valid drop target.
 */
export function EventEngine$1__onDragEnter_Z3384A56C(_, handler) {
    return _.mk("dragEnter", (arg) => {
        handler(arg);
    });
}

export function EventEngine$1__onDragExit_Z3384A56C(_, handler) {
    return _.mk("dragExit", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element leaves a valid drop target.
 */
export function EventEngine$1__onDragLeave_Z3384A56C(_, handler) {
    return _.mk("dragLeave", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element is being dragged over a valid drop target.
 */
export function EventEngine$1__onDragOver_Z3384A56C(_, handler) {
    return _.mk("dragOver", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the a drag operation has begun.
 */
export function EventEngine$1__onDragStart_Z3384A56C(_, handler) {
    return _.mk("dragStart", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when dragged element is being dropped.
 */
export function EventEngine$1__onDrop_Z3384A56C(_, handler) {
    return _.mk("drop", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the length of the media changes.
 */
export function EventEngine$1__onDurationChange_7DDE0344(_, handler) {
    return _.mk("durationChange", handler);
}

/**
 * Fires when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects).
 */
export function EventEngine$1__onEmptied_7DDE0344(_, handler) {
    return _.mk("emptied", handler);
}

export function EventEngine$1__onEncrypted_7DDE0344(_, handler) {
    return _.mk("encrypted", handler);
}

/**
 * Fires when the media has reached the end (a useful event for messages like "thanks for listening").
 */
export function EventEngine$1__onEnded_7DDE0344(_, handler) {
    return _.mk("ended", handler);
}

/**
 * Fires when an error occurs.
 */
export function EventEngine$1__onError_7DDE0344(_, handler) {
    return _.mk("error", handler);
}

/**
 * Fires when an error occurs.
 */
export function EventEngine$1__onError_746D9E38(_, handler) {
    return _.mk("error", (arg) => {
        handler(arg);
    });
}

/**
 * Fires the moment when the element gets focus.
 */
export function EventEngine$1__onFocus_13C15648(_, handler) {
    return _.mk("focus", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element captures a pointer.
 */
export function EventEngine$1__onGotPointerCapture_20E144FF(_, handler) {
    return _.mk("gotPointerCapture", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element gets user input.
 */
export function EventEngine$1__onInput_7DDE0344(_, handler) {
    return _.mk("input", handler);
}

/**
 * Fires when a submittable element has been checked for validaty and doesn't satisfy its constraints.
 */
export function EventEngine$1__onInvalid_7DDE0344(_, handler) {
    return _.mk("invalid", handler);
}

/**
 * Fires when a user presses a key.
 */
export function EventEngine$1__onKeyDown_Z2153A397(_, handler) {
    return _.mk("keyDown", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a user presses a key.
 */
export function EventEngine$1__onKeyPress_Z2153A397(_, handler) {
    return _.mk("keyPress", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a user releases a key.
 */
export function EventEngine$1__onKeyUp_Z2153A397(_, handler) {
    return _.mk("keyUp", (arg) => {
        handler(arg);
    });
}

/**
 * Fires after the page is finished loading.
 */
export function EventEngine$1__onLoad_7DDE0344(_, handler) {
    return _.mk("load", handler);
}

/**
 * Fires when media data is loaded.
 */
export function EventEngine$1__onLoadedData_7DDE0344(_, handler) {
    return _.mk("loadedData", handler);
}

/**
 * Fires when meta data (like dimensions and duration) are loaded.
 */
export function EventEngine$1__onLoadedMetadata_7DDE0344(_, handler) {
    return _.mk("loadedMetadata", handler);
}

/**
 * Fires when a request has completed, irrespective of its success.
 */
export function EventEngine$1__onLoadEnd_7DDE0344(_, handler) {
    return _.mk("loadEnd", handler);
}

/**
 * Fires when the file begins to load before anything is actually loaded.
 */
export function EventEngine$1__onLoadStart_7DDE0344(_, handler) {
    return _.mk("loadStart", handler);
}

/**
 * Fires when a captured pointer is released.
 */
export function EventEngine$1__onLostPointerCapture_20E144FF(_, handler) {
    return _.mk("lostPointerCapture", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a mouse button is pressed down on an element.
 */
export function EventEngine$1__onMouseDown_58BC8925(_, handler) {
    return _.mk("mouseDown", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer enters an element.
 */
export function EventEngine$1__onMouseEnter_58BC8925(_, handler) {
    return _.mk("mouseEnter", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer leaves an element.
 */
export function EventEngine$1__onMouseLeave_58BC8925(_, handler) {
    return _.mk("mouseLeave", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the mouse pointer is moving while it is over an element.
 */
export function EventEngine$1__onMouseMove_58BC8925(_, handler) {
    return _.mk("mouseMove", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the mouse pointer moves out of an element.
 */
export function EventEngine$1__onMouseOut_58BC8925(_, handler) {
    return _.mk("mouseOut", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the mouse pointer moves over an element.
 */
export function EventEngine$1__onMouseOver_58BC8925(_, handler) {
    return _.mk("mouseOver", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a mouse button is released while it is over an element.
 */
export function EventEngine$1__onMouseUp_58BC8925(_, handler) {
    return _.mk("mouseUp", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the user pastes some content in an element.
 */
export function EventEngine$1__onPaste_650C9FE8(_, handler) {
    return _.mk("paste", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the media is paused either by the user or programmatically.
 */
export function EventEngine$1__onPause_7DDE0344(_, handler) {
    return _.mk("pause", handler);
}

/**
 * Fires when the media is ready to start playing.
 */
export function EventEngine$1__onPlay_7DDE0344(_, handler) {
    return _.mk("play", handler);
}

/**
 * Fires when the media actually has started playing
 */
export function EventEngine$1__onPlaying_7DDE0344(_, handler) {
    return _.mk("playing", handler);
}

/**
 * Fires when there are no more pointer events.
 */
export function EventEngine$1__onPointerCancel_20E144FF(_, handler) {
    return _.mk("pointerCancel", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer becomes active.
 */
export function EventEngine$1__onPointerDown_20E144FF(_, handler) {
    return _.mk("pointerDown", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer is moved into an elements boundaries or one of its descendants.
 */
export function EventEngine$1__onPointerEnter_20E144FF(_, handler) {
    return _.mk("pointerEnter", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer is moved out of an elements boundaries.
 */
export function EventEngine$1__onPointerLeave_20E144FF(_, handler) {
    return _.mk("pointerLeave", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer moves.
 */
export function EventEngine$1__onPointerMove_20E144FF(_, handler) {
    return _.mk("pointerMove", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer is no longer in an elements boundaries, such as moving it, or after a `pointerUp` or `pointerCancel` event.
 */
export function EventEngine$1__onPointerOut_20E144FF(_, handler) {
    return _.mk("pointerOut", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer is moved into an elements boundaries.
 */
export function EventEngine$1__onPointerOver_20E144FF(_, handler) {
    return _.mk("pointerOver", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when a pointer is no longer active.
 */
export function EventEngine$1__onPointerUp_20E144FF(_, handler) {
    return _.mk("pointerUp", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the browser is in the process of getting the media data.
 */
export function EventEngine$1__onProgress_7DDE0344(_, handler) {
    return _.mk("progress", handler);
}

/**
 * Fires when the playback rate changes (like when a user switches to a slow motion or fast forward mode).
 */
export function EventEngine$1__onRateChange_7DDE0344(_, handler) {
    return _.mk("rateChange", handler);
}

/**
 * Fires when the Reset button in a form is clicked.
 */
export function EventEngine$1__onReset_7DDE0344(_, handler) {
    return _.mk("reset", handler);
}

/**
 * Fires when the window has been resized.
 */
export function EventEngine$1__onResize_746D9E38(_, handler) {
    return _.mk("resize", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when an element's scrollbar is being scrolled.
 */
export function EventEngine$1__onScroll_7DDE0344(_, handler) {
    return _.mk("scroll", handler);
}

/**
 * Fires when the seeking attribute is set to false indicating that seeking has ended.
 */
export function EventEngine$1__onSeeked_7DDE0344(_, handler) {
    return _.mk("seeked", handler);
}

/**
 * Fires when the seeking attribute is set to true indicating that seeking is active.
 */
export function EventEngine$1__onSeeking_7DDE0344(_, handler) {
    return _.mk("seeking", handler);
}

/**
 * Fires after some text has been selected in an element.
 */
export function EventEngine$1__onSelect_7DDE0344(_, handler) {
    return _.mk("select", handler);
}

/**
 * Fires after some text has been selected in the user interface.
 */
export function EventEngine$1__onSelect_746D9E38(_, handler) {
    return _.mk("select", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the browser is unable to fetch the media data for whatever reason.
 */
export function EventEngine$1__onStalled_7DDE0344(_, handler) {
    return _.mk("stalled", handler);
}

/**
 * Fires when fetching the media data is stopped before it is completely loaded for whatever reason.
 */
export function EventEngine$1__onSuspend_7DDE0344(_, handler) {
    return _.mk("suspend", handler);
}

/**
 * Fires when a form is submitted.
 */
export function EventEngine$1__onSubmit_7DDE0344(_, handler) {
    return _.mk("submit", handler);
}

/**
 * Same as `onChange` but let's you deal with the text changed from the `input` element directly
 * instead of extracting it from the event arguments.
 */
export function EventEngine$1__onTextChange_41EFD311(_, handler) {
    return _.mk("change", (ev) => {
        const el = ev.target;
        handler(el.value);
    });
}

/**
 * Same as `onInput` but let's you deal with the text changed from the `input` element directly
 * instead of extracting it from the event arguments.
 */
export function EventEngine$1__onTextInput_41EFD311(_, handler) {
    return _.mk("input", (ev) => {
        const el = ev.target;
        handler(el.value);
    });
}

/**
 * Fires when the playing position has changed (like when the user fast forwards to a different point in the media).
 */
export function EventEngine$1__onTimeUpdate_7DDE0344(_, handler) {
    return _.mk("timeUpdate", handler);
}

export function EventEngine$1__onTouchCancel_Z2CA827DF(_, handler) {
    return _.mk("touchCancel", (arg) => {
        handler(arg);
    });
}

export function EventEngine$1__onTouchEnd_Z2CA827DF(_, handler) {
    return _.mk("touchEnd", (arg) => {
        handler(arg);
    });
}

export function EventEngine$1__onTouchMove_Z2CA827DF(_, handler) {
    return _.mk("touchMove", (arg) => {
        handler(arg);
    });
}

export function EventEngine$1__onTouchStart_Z2CA827DF(_, handler) {
    return _.mk("touchStart", (arg) => {
        handler(arg);
    });
}

export function EventEngine$1__onTransitionEnd_Z2B826A95(_, handler) {
    return _.mk("transitionEnd", (arg) => {
        handler(arg);
    });
}

/**
 * Fires when the volume is changed which (includes setting the volume to "mute").
 */
export function EventEngine$1__onVolumeChange_7DDE0344(_, handler) {
    return _.mk("volumeChange", handler);
}

/**
 * Fires when the media has paused but is expected to resume (like when the media pauses to buffer more data).
 */
export function EventEngine$1__onWaiting_7DDE0344(_, handler) {
    return _.mk("waiting", handler);
}

/**
 * Fires when the mouse wheel rolls up or down over an element.
 */
export function EventEngine$1__onWheel_4B7763D7(_, handler) {
    return _.mk("wheel", (arg) => {
        handler(arg);
    });
}

