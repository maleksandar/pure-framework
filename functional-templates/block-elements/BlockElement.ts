import { FunctionalElement } from '../../core/FunctionalElement';
import { DomAttachments } from '../../core/DomAttachments';

export abstract class BlockElement extends DomAttachments<BlockElement> implements FunctionalElement {
    public domElement: HTMLElement;
    public parent = null;

    constructor(protected attributes: {}, protected _children: FunctionalElement[], private _tag) {
        super();
        if (arguments.length === 2) {
            this.attributes = arguments[0];
            this._children = arguments[1];
        }
        else if (arguments.length === 1) {
            this._children = arguments[0];
        }
        this._children.forEach(child => { child.parent = this; })

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

    private attachEventHandlers(): void {
        if (this.clickHandlers) {
            this.clickHandlers.forEach(handler => this.domElement.addEventListener('click', handler));
        }
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
        this.children.forEach(child => {
            this.domElement.appendChild(child.render());
        });
    }
}
