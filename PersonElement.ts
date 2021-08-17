import { FunctionalComponent } from "./core/FunctionalComponent";
import { div } from "./functional-templates/block-elements";
import { address } from "./addressElement";
import { functionalComponentFactory } from "./core/functionalComponentFactory";
import { AppState } from "./appState";
import { InputElement } from "./functional-templates/block-elements/blockElementsFactory";

class Person extends FunctionalComponent<AppState> {
    template () {
        return div(null, [
            ...nameElement(this.state.firstName, this.state.lastName),
            address(() => this.state.address,() => {}, 'glavna_adresa')
                .onClick(() => this.updateState({ 
                    // firstName: "Mitrandir",
                    // lastName: "Siva Lutalica",
                    // address: {number: 1, street: "VelikoPoljska"},
                    ...this.state,
                    additionalAddress: {number: 2, street: 'VelikoPoljska'}
                })
                ),
            div('dodatna adresa:'),
            address(() => this.state.additionalAddress,() => {}, 'sporedna_adresa'),
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

export const person = functionalComponentFactory(Person); 
