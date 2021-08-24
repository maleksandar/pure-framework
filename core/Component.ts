import { FunctionalElement } from "./FunctionalElement";
import { DomAttachments } from "./DomAttachments";
import { areEqual, cloneDeep } from "../utils";
import { Store } from "./Store";

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
        if (this.stateIsUnchanged()) {
            return this.domElement;
        }

        this.savePreviousState();
        this.domElement = this.template().render();
        this.attachEventHandlers();

        return this.domElement;
    };

    private stateIsUnchanged() {
        return areEqual(this.inputState(), this.previousState) && this.domElement;
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
