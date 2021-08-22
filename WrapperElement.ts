import { Component } from "./core/Component";
import { div } from "./htmlElements/block-elements";
import { text } from "./htmlElements/inline-elements";
import { componentFactory } from "./core/ComponentFactory";

class WrapperElement extends Component<string> {
    template () {
        return div(null, [
            div([ text('Header') ]),
            text( this.state ),
            div({ class: 'red' }, [
                text('Footer')
            ]),
        ]);
    } 
}

export const wrapper = componentFactory(WrapperElement);
