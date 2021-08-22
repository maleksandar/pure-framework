import { text } from "./functional-templates/inline-elements";
import { div } from "./functional-templates/block-elements";
import { Component } from "./core/Component";
import { Address } from "./appState";
import { componentFactory } from "./core/componentFactory";

class AddressElement extends Component<Address> {
    template () {
        return div(null, [
            div([text('street:'), text(this.state.street)]),
            div([text('number:'), text(this.state.number)]),
        ]);
    } 
}

export const address = componentFactory(AddressElement);
