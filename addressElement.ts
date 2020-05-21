import { FunctionalComponent } from "./FunctionalComponent";
import { text } from "./TextElement";
import { Address } from "./appState";
import { div } from "./BasicElementsFactory";
class AddressElement extends FunctionalComponent<Address> {
    template () {
        return div(null, [
            div([text('street:'), text(this.state.street)]),
            div([text('number:'), text(this.state.number)]),
        ]);
    } 

    constructor(inputState:() => Address) {
        super(inputState);
    }
}

export const address = AddressElement.produceElement();