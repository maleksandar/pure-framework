import { FunctionalElement } from "./FunctionalElement";
import { text } from "./TextElement";

export class StatefullElement<T> implements FunctionalElement {
    state: T;
    previousState: T;
    render() {
        if (this.state === this.previousState && this.domElement) {
            return this.domElement;
        }
        this.previousState = this.state;
        this.domElement = this.template().render();
        return this.domElement;
    };

    domElement: HTMLElement | Text = null;

    template(): FunctionalElement{
        return text('Empty template element');
    };
} 