import { FunctionalElement } from '../../core/functionalElement';
import { DomAttachments } from '../../core/domAttachments';

export abstract class BlockElement extends DomAttachments<BlockElement> implements FunctionalElement {
    public domElement: HTMLElement;
    public parentDomElement: HTMLElement;
    
    constructor(protected attributes: {}, protected _children: FunctionalElement[], private _tag) {
        super();
        if (arguments.length === 2) {
            // in case attributes object is provided as a first argument
            this.attributes = arguments[0];
            this._children = arguments[1];
        }
        else if (arguments.length === 1) {
            // in case we are provided with only one argument - we asume it is the array of children or a single child
            this._children = arguments[0];
        }
    }

    get children(): FunctionalElement[] {
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

    private assignAttributes(): void {
        if (this.attributes) {
            Object.keys(this.attributes).forEach(attribute => {
                if(this.attributes[attribute]) {
                    this.domElement.setAttribute(attribute, this.attributes[attribute]);
                }
            });
        }
    }

    private createDomElement(): void {
        this.domElement = document.createElement(this._tag);
        if(!this.children || this.children.length === 0) {
            return;
        }
        this.children.forEach(child => {
            child.parentDomElement = this.domElement;
            this.domElement.appendChild(child.render());
        });
    }
}
