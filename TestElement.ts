import { FunctionalComponent, produceElement } from "./FunctionalComponent";

import { div } from "./BasicElementsFactory";
import { getElementFactory } from "./functionalComponentFactory";
import { TestState } from "./TestState";

class Test extends FunctionalComponent<TestState> {
    template () {
        return div({class: 'content'},[
            div({class: 'header'},[
                'id: ', this.state.id,
                div(['content: ', this.state.content]),
                div([' children: ', `${this.state.subState? this.state.subState.length : 0}`])
            ]),

            div({class: 'children'}, [
                ...this.renderChildren()
            ])
            // .addClass('children')
            // testElement(() => this.state.subState[0]),
            // testElement(() => this.state.subState[1]),
        ]);
    } 

    constructor(inputState:() => TestState) {
        console.log('Test constructor called!');
        super(inputState);
    }
    
    renderChildren() {
        if(this.state.subState) {
            return this.state.subState.map((_, index) => {
                return testElement(() => this.state.subState[index]).onClick(
                    (event) => { 
                        console.log('You clicked on TestElement!', this.state.subState[index].id);
                        event.stopPropagation();
                    },
                    (event) => {
                        console.log('Also this will execute')!
                    }
                )
            })
        } else {
            return [];
        }
    }
}

export const testElement = getElementFactory(Test); 
