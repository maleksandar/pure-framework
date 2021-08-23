import { FunctionalElement } from '../../core/FunctionalElement';
import { DomAttachments } from '../../core/DomAttachments';

export class InputElement extends DomAttachments<InputElement> implements FunctionalElement {
    public domElement: HTMLInputElement;

    constructor(protected attributes: {}, private _tag?) {
        super();
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

    }
}
