import { text } from "./htmlElements/inline-elements";
import { div } from "./htmlElements/block-elements";
import { Component } from "./core/Component";
import { Address } from "./person.store";
import { componentFactory } from "./core/ComponentFactory";

class AddressElement extends Component<Address> {
    template () {
        return div(null, [
            div([text('street:'), text(this.state.street)]),
            div([text('number:'), text(this.state.number)]),
        ]);
    } 
}

export const address = componentFactory(AddressElement);
