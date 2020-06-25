import { FunctionalElement } from '../../core/FunctionalElement';
export class TextElement implements FunctionalElement {
    domElement: Text;
    constructor(private text: string) {
        this.text = text;
    }
    parent: FunctionalElement = null;
    render() {
        this.domElement = document.createTextNode(this.text);
        return this.domElement;
    }

    get children() {
        return null;
    }
}
