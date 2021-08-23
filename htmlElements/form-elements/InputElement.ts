import { FunctionalElement } from '../../core/FunctionalElement';
import { DomAttachments } from '../../core/DomAttachments';

export class InputElement extends DomAttachments<InputElement> implements FunctionalElement {
    public domElement: HTMLInputElement;
    public parentDomElement: HTMLElement;

    constructor(protected attributes: {}, private _tag?) {
        super();
    }
    children?: FunctionalElement[];

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
                this.domElement.setAttribute(attribute, this.attributes[attribute]);
            });
        }
    }

    private createDomElement(): void {
        this.domElement = document.createElement(this._tag);
    }
}
