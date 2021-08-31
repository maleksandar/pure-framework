import { EventListening } from '../../core/eventListening';
import { EventListeningBehaviour } from '../../core/eventListeningBehaviour';
import { FunctionalElement } from '../../core/functionalElement';

export class InputElement implements FunctionalElement, EventListening {
    public domElement: HTMLInputElement;
    public parentDomElement: HTMLElement;
    private _eventListeningExecutor: EventListeningBehaviour = null;

    constructor(protected attributes: {}, private _tag?) {
        this._eventListeningExecutor = new EventListeningBehaviour(this);
    }
    children?: FunctionalElement[];

    render(): HTMLElement {
        this.createDomElement();
        this.assignAttributes();
        this.attachEventHandlers();
        return this.domElement;
    }

    on(event: keyof HTMLElementEventMap, ...handlers: ((event: Event) => void)[]) {
        this._eventListeningExecutor.on(event, ...handlers);
        return this;
      }
    
      private attachEventHandlers() {
          this._eventListeningExecutor.attachEventHandlers();
      }
    

    forceReRender() {
        let domElementToReplace = this.domElement;
        this.parentDomElement.replaceChild(this.render(), domElementToReplace);
    }

    private assignAttributes(): void {
        if (this.attributes) {
            Object.keys(this.attributes).forEach(attribute => {
                this.domElement.setAttribute(attribute, this.attributes[attribute]);
            });
        }
    }

    private createDomElement(): void {
        this.domElement = document.createElement(this._tag);
    }
}
