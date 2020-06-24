import { FunctionalComponent, produceElement } from "./FunctionalComponent";

import { div } from "./BasicElementsFactory";
import { getElementFactory } from "./functionalComponentFactory";
import { TestState } from "./TestState";

class Test extends FunctionalComponent<TestState> {
    template () {
        return div([
            div([
                'id: ', this.state.id,
                'content: ', this.state.content,
            ]),

            div(['children:',
                ...this.renderChildren()
            ])
            // testElement(() => this.state.subState[0]),
            // testElement(() => this.state.subState[1]),
        ]);
    } 

    constructor(inputState:() => TestState) {
        super(inputState);
    }
    
    renderChildren() {
        if(this.state.subState) {
            return this.state.subState.map((_, index) => {
                return testElement(() => this.state.subState[index])
            })
        } else {
            return [];
        }
    }
}

export const testElement = getElementFactory(Test); 
