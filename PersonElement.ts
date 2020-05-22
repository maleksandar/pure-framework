import { FunctionalComponent, produceElement } from "./FunctionalComponent";
import { text } from "./TextElement";
import { AppState } from "./appState";
import { address } from "./addressElement";
import { div, InputElement } from "./BasicElementsFactory";
import { getElementFactory } from "./functionalComponentFactory";

class Person extends FunctionalComponent<AppState> {
    template () {
        return div(null, [
            ...nameElement(this.state.firstName, this.state.lastName),
            address(() => this.state.address, 'glavna_adresa'),
            div('dodatna adresa:'),
            address(() => this.state.additionalAddress, 'sporedna_adresa'),
        ]);
    } 

    constructor(inputState:() => AppState) {
        super(inputState);
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

export const person = getElementFactory(Person); 
