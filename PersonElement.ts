import { Component } from "./core/Component";
import { div } from "./htmlElements/block-elements";
import { address } from "./addressElement";
import { componentFactory } from "./core/ComponentFactory";
import { AppState } from "./appState";
import { InputElement } from "./htmlElements/block-elements/blockElementsFactory";

class Person extends Component<AppState> {
    template () {
        return div(null, [
            ...nameElement(this.state.firstName, this.state.lastName),
            address(() => this.state.address, 'glavna_adresa')
                .onClick(() => {
                    console.log("Address clicked: ", this.state.address.street, " ", this.state.address.number)
                }
                ),
            div('dodatna adresa:'),
            address(() => this.state.additionalAddress, 'sporedna_adresa'),
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

export const person = componentFactory(Person); 
