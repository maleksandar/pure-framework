import { FunctionalComponent, produceElement } from "./FunctionalComponent";
import { text } from "./TextElement";
import { getElementFactory } from "./functionalComponentFactory";
import { div } from "./BasicElementsFactory";

class WrapperElement extends FunctionalComponent<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.inputState()),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    } 

    constructor(inputState:() => string) {
        super(inputState);
    }
}

export const wrapper = getElementFactory(WrapperElement);
