import { Component } from "./core/Component";
import { div } from "./functional-templates/block-elements";
import { text } from "./functional-templates/inline-elements";
import { componentFactory } from "./core/componentFactory";

class WrapperElement extends Component<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.state),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    } 
}

export const wrapper = componentFactory(WrapperElement);
