import { FunctionalElement } from '../../core/FunctionalElement';
import { DomAttachments } from '../../core/DomAttachments';
import { TextElement } from './TextElement';

export abstract class InlineElement extends DomAttachments<InlineElement> implements FunctionalElement {
    public domElement: HTMLElement;

    constructor(protected attributes?: {}, protected _children?: (InlineElement | TextElement)[], private _tag?) {
        super();
        if (arguments.length === 2) {
            // in case attributes object is provided as a first argument
            this.attributes = arguments[0];
            this._children = arguments[1];
        }
        else if (arguments.length === 1) {
            // in case only element cointains only children
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

    private assignAttributes(): void {
        if (this.attributes) {
            Object.keys(this.attributes).forEach(attribute => {
                this.domElement.setAttribute(attribute, this.attributes[attribute]);
            });
        }
    }

    private createDomElement(): void {
        this.domElement = document.createElement(this._tag);
        if(!this.children || this.children.length === 0) {
            return;
        }
        this.children.forEach(child => {
            this.domElement.appendChild(child.render());
        });
    }
}
