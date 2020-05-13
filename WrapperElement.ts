import { StatefullElement } from "./StatefullElement";
import { div } from "./DivElement";
import { text } from "./TextElement";

class WrapperElement extends StatefullElement<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.state),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    }
    constructor(state: string) {
        super();
        this.state = state;
    }
}

export const wrapper = (state) => new WrapperElement(state); 