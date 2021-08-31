import { FunctionalElement } from '../../core/functionalElement';
export class TextElement implements FunctionalElement {
    domElement: Text;
    parentDomElement: HTMLElement | null;

    constructor(private text: string) {
        this.text = text;
    }
    render() {
        this.domElement = document.createTextNode(this.text);
        return this.domElement;
    }

    get children() {
        return null;
    }
}
