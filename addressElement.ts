import { FunctionalComponent } from "./FunctionalComponent";
import { div } from "./DivElement";
import { text } from "./TextElement";
import { Address } from "./appState";
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