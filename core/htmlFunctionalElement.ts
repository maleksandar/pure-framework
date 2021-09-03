import { EventListening } from "./eventListening";
import { EventListeningBehaviour } from "./eventListeningBehaviour";
import { FunctionalElement } from "./functionalElement";

export abstract class HTMLFunctionalElement implements FunctionalElement, EventListening {
  public domElement: HTMLElement;
  public parentDomElement: HTMLElement;
  private _eventListeningExecutor: EventListeningBehaviour = null;

  constructor(protected attributes: {}, protected _children: FunctionalElement[], protected _tag: string) {
    if (arguments.length === 2) {
      // in case attributes object is provided as a first argument
      this.attributes = arguments[0];
      this._children = arguments[1];
    }
    else if (arguments.length === 1) {
      // in case we are provided with only one argument - we asume it is the array of children or a single child
      this._children = arguments[0];
    }
    this._eventListeningExecutor = new EventListeningBehaviour(this);
  }

  on(event: string, ...handlers: ((event: Event) => void)[]) {
    this._eventListeningExecutor.on(event, ...handlers);
    return this;
  }

  private attachEventHandlers() {
      this._eventListeningExecutor.attachEventHandlers();
  }

  get children(): (FunctionalElement)[] {
    return this._children;
  }

  render(): HTMLElement {
    this.createDomElement();
    this.assignAttributes();
    this.attachEventHandlers();
    return this.domElement;
  }

  forceReRender() {
    let domElementToReplace = this.domElement;
    this.parentDomElement.replaceChild(this.render(), domElementToReplace);
  }

  protected assignAttributes(): void {
    if (this.attributes) {
      Object.keys(this.attributes).forEach(attribute => {
        if (this.attributes[attribute]) {
          this.domElement.setAttribute(attribute, this.attributes[attribute]);
        }
      });
    }
  }

  protected createDomElement(): void {
    this.domElement = document.createElement(this._tag);
    if (!this.children || this.children.length === 0) {
      return;
    }
    this.children.forEach(child => {
      child.parentDomElement = this.domElement;
      this.domElement.appendChild(child.render());
    });
  }
}
