import { StatefullElement, produceElement } from "./StatefullElement";
import { div } from "./DivElement";
import { text } from "./TextElement";

class WrapperElement extends StatefullElement<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.inputState()),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    } 

    constructor(inputState:() => string) {
        super(inputState);
    }
}

export const wrapper = (state) => new WrapperElement(state); 

// function produceElement<ModelType>(constructorFunction: { new (state: ModelType): StatefullElement<ModelType>; }) {
//     return (state) => {
//         let wrapper = new constructorFunction(state);
//         return wrapper.template();
//     };
// }
