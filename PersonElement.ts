import { StatefullElement, produceElement } from "./StatefullElement";
import { div } from "./DivElement";
import { text } from "./TextElement";
import { AppState } from "./appState";
import { address } from "./addressElement";

class Person extends StatefullElement<AppState> {
    template () {
        return div(null, [
            div([text('Ime:')]),
            text(this.state.firstName),
            div([text('Prezime:'), text(this.state.lastName)]),
            address(() => this.state.address, 1),
            div({class: 'red'}, [text('ADRESSAA OPET'), address(() => this.state.address, 2)])
        ]);
    } 

    constructor(inputState:() => AppState) {
        super(inputState);
        console.log('PERSON EL CREATED')
    }
}

export const person = (state) => new Person(state); 

// function produceElement<ModelType>(constructorFunction: { new (state: ModelType): StatefullElement<ModelType>; }) {
//     return (state) => {
//         let wrapper = new constructorFunction(state);
//         return wrapper.template();
//     };
// }
