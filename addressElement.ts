import { text } from "./functional-templates/inline-elements";
import { div } from "./functional-templates/block-elements";
import { FunctionalComponent } from "./core/FunctionalComponent";
import { Address } from "./appState";
import { functionalComponentFactory } from "./core/functionalComponentFactory";

class AddressElement extends FunctionalComponent<Address> {
    template () {
        return div(null, [
            div([text('street:'), text(this.state.street)]),
            div([text('number:'), text(this.state.number)]),
        ]);
    } 

    // constructor(inputState:() => Address, updateState: (newState: Address) => void) {
    //     console.log('Created address element');
    //     super(inputState, updateState);
    // }
}

export const address = functionalComponentFactory(AddressElement);
