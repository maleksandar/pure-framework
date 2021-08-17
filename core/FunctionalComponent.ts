import { FunctionalElement } from "./FunctionalElement";
import { DomAttachments } from "./DomAttachments";
import { areEqual, cloneDeep } from "./utils";

export abstract class FunctionalComponent<T> extends DomAttachments<FunctionalComponent<T>> implements FunctionalElement {
    abstract template(): FunctionalElement;
    protected inputState: () => T = () =>null;
    previousState: T;

    domElement: HTMLElement | Text = null;
    _template: FunctionalElement = null;

    get state() {
        return this.inputState();
    }

    render() {
        if (this.stateIsUnchanged()) {
            return this.domElement;
        }

        this.savePreviousState();
        this.rerenderDomElement();
        this.attachEventHandlers();

        return this.domElement;
    };


    private stateIsUnchanged() {
        return areEqual(this.inputState(), this.previousState) && this.domElement;
    }

    private attachEventHandlers() {
        if (this.clickHandlers) {
            this.clickHandlers.forEach(handler => this.domElement.addEventListener('click', handler));
        }
    }

    private rerenderDomElement() {
        console.log('RENDERING ELEMENT WITH STATE: ', this.state);
        this.domElement = this.template().render();
    }

    private savePreviousState() {
        this.previousState = cloneDeep(this.inputState());
    }

    constructor(state: () => T) {
        super();
        this.inputState = state;
    }

    parent: FunctionalElement;

    get children() {
        return this.template().children
    }
};
