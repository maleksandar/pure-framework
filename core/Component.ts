import { FunctionalElement } from "./functionalElement";
import { DomAttachments } from "./domAttachments";
import { areEqual, cloneDeep } from "../utils";
import { Store } from "./store";

export abstract class Component<ModelType> extends DomAttachments<Component<ModelType>> implements FunctionalElement {
    abstract template(): FunctionalElement;
    protected inputState: () => ModelType = () =>null;
    previousState: ModelType;
    
    domElement: HTMLElement | Text = null;
    parentDomElement: HTMLElement;

    get state() {
        return this.inputState();
    }

    render() {
        if (this.stateIsUnchanged() && this.domElement) {
            return this.domElement;
        }

        this.savePreviousState();
        this.domElement = this.template().render();
        this.attachEventHandlers();

        return this.domElement;
    };

    private stateIsUnchanged() {
        return areEqual(this.inputState(), this.previousState);
    }

    private savePreviousState() {
        this.previousState = cloneDeep(this.inputState());
    }

    constructor(inputState: () => ModelType) {
        super();
        this.inputState = inputState;
    }

    get children() {
        return this.template().children
    }
};
