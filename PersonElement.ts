import { FunctionalComponent, produceElement } from "./FunctionalComponent";
import { text } from "./TextElement";
import { AppState } from "./appState";
import { address } from "./addressElement";
import { div } from "./BasicElementsFactory";

class Person extends FunctionalComponent<AppState> {
    template () {
        return div(null, [
            div([text('Ime:')]),
            div([text(this.state.firstName)]),
            div([text('Prezime:')]),
            div([text(this.state.lastName)]),
            address(() => this.state.address),
        ]);
    } 

    constructor(inputState:() => AppState) {
        super(inputState);
    }
}

export const person = Person.produceElement<AppState>(); 
