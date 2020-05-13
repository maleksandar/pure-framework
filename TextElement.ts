import { FunctionalElement } from './FunctionalElement';
class TextElement implements FunctionalElement {
    domElement: Text;
    constructor(private text: string) {
        this.text = text;
    }
    render() {
        console.log('rendering, ', this.text);
        this.domElement = document.createTextNode(this.text);
        return this.domElement;
    }
}

export function text(string) {
    return new TextElement(string);
}