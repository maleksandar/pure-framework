import { FunctionalElement } from "./functionalElement";
import { EventListeningBehaviour } from "./eventListeningBehaviour";
import { areEqual, cloneDeep } from "../utils";
import { EventListening } from "./eventListening";

export abstract class Component<ModelType>  implements FunctionalElement, EventListening {
    public domElement: HTMLElement = null;
    public parentDomElement: HTMLElement = null;

    protected inputState: () => ModelType = () => null;

    private _eventListeningExecutor: EventListeningBehaviour = null;
    private previousState: ModelType = null;

    constructor(inputState: () => ModelType) {
        this._eventListeningExecutor = new EventListeningBehaviour(this);
        this.inputState = inputState;
    }

    abstract template(): FunctionalElement;

    get state() {
        return this.inputState();
    }

    get children() {
        return this.template().children
    }

    public render() {
        if (this.stateIsUnchanged() && this.domElement) {
            return this.domElement;
        }

        this.savePreviousState();
        this.domElement = this.template().render();
        this.attachEventHandlers();

        return this.domElement;
    }

    public on(event: string, ...handlers: ((event: Event) => void)[]) {
        this._eventListeningExecutor.on(event, ...handlers);
        return this;
    }

    private attachEventHandlers() {
        this._eventListeningExecutor.attachEventHandlers();
    }
    
    private stateIsUnchanged() {
        return areEqual(this.inputState(), this.previousState);
    }

    private savePreviousState() {
        this.previousState = cloneDeep(this.inputState());
    }
};
