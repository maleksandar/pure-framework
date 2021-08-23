import { Component } from "./core/Component";
import { div } from "./htmlElements/block-elements";
import { address } from "./addressElement";
import { PersonModel } from "./person.store";
import { InputElement } from "./htmlElements/block-elements/blockElementsFactory";
import { componentFactory } from "./core";

class PersonComponent extends Component<PersonModel> {
    template () {
        return div(null, [
            ...nameElement(this.state.firstName, this.state.lastName),
            address(() => this.state.address, 'glavna_adresa')
                .on('click', () => {
                    console.log("Address clicked: ", this.state.address.street, " ", this.state.address.number)
                }
                ),
        ]);
    }
}

function nameElement(firstName: string, lastName: string): InputElement[] {
    return [
        div('Ime:'),
        div(firstName),
        div('Prezime:'),
        div(lastName)
    ];
}

export const person = componentFactory<PersonComponent, PersonModel>(PersonComponent); 
