import { StatefullElement } from "./StatefullElement";
import { div } from "./DivElement";
import { text } from "./TextElement";
import { Address } from "./appState";
class AddressElement extends StatefullElement<Address> {
    template () {
        return div(null, [
            div([text('street:'), text(this.state.street)]),
            div([text('number:'), text(this.state.number)]),
        ]);
    } 

    constructor(inputState:() => Address) {
        super(inputState);
        console.log('NEW ADDRESS EL CREATED');
    }
}

export const address = AddressElement.produceElement();