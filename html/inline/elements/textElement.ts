import { FunctionalElement } from '../../../core/functionalElement';
export class TextElement implements FunctionalElement {
    domElement: HTMLElement;
    parentDomElement: HTMLElement;

    constructor(private text: string) {
        this.text = text;
    }
    render() {
        this.domElement = document.createTextNode(this.text) as unknown as HTMLElement;
        return this.domElement;
    }

    get children() {
        return null;
    }
}
