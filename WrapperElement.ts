import { FunctionalComponent } from "./core/FunctionalComponent";
import { div } from "./functional-templates/block-elements";
import { text } from "./functional-templates/inline-elements";
import { functionalComponentFactory } from "./core/functionalComponentFactory";

class WrapperElement extends FunctionalComponent<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.state),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    } 

    constructor(inputState:() => string) {
        super(inputState);
    }
}

export const wrapper = functionalComponentFactory(WrapperElement);
