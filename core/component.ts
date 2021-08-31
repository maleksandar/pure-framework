import { FunctionalElement } from "./functionalElement";
import { EventListeningBehaviour } from "./eventListeningBehaviour";
import { areEqual, cloneDeep } from "../utils";
import { EventListening } from "./eventListening";

export abstract class Component<ModelType>  implements FunctionalElement, EventListening {
    abstract template(): FunctionalElement;
    protected inputState: () => ModelType = () => null;
    private _eventListeningExecutor: EventListeningBehaviour = null;
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
    }
    
    private stateIsUnchanged() {
        return areEqual(this.inputState(), this.previousState);
    }

    private savePreviousState() {
        this.previousState = cloneDeep(this.inputState());
    }

    constructor(inputState: () => ModelType) {
        this._eventListeningExecutor = new EventListeningBehaviour(this);
        this.inputState = inputState;
    }

    on(event: keyof HTMLElementEventMap, ...handlers: ((event: Event) => void)[]) {
        this._eventListeningExecutor.on(event, ...handlers);
        return this;
    }

    private attachEventHandlers() {
        this._eventListeningExecutor.attachEventHandlers();
    }

    get children() {
        return this.template().children
    }
};
