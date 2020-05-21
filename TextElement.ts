import { FunctionalElement } from './FunctionalElement';
class TextElement implements FunctionalElement {
    domElement: Text;
    constructor(private text: string) {
        this.text = text;
    }
    parent: FunctionalElement = null;
    render() {
        console.log('rendering, ', this.text);
        this.domElement = document.createTextNode(this.text);
        return this.domElement;
    }

    get children() {
        return null;
    }
}

export function text(string) {
    return new TextElement(string);
}