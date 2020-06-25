import { FunctionalComponent, produceElement } from "./core/FunctionalComponent";

import { div } from "./functional-templates/block-elements";
import { functionalComponentFactory } from "./core/functionalComponentFactory";
import { TestState } from "./TestState";


class Test extends FunctionalComponent<TestState> {
    
    constructor(inputState:() => TestState) {
        super(inputState);
        console.log('Test constructor called!');
    }

    template () {
        return div({class: 'content'},[
            div({class: 'header'},[
                'id: ', this.state.id,
                div(['Number of renders: ', `${this.state.timesReRendered}`]),
                div(['content: ', this.state.content]),
                div([' children: ', `${this.state.subState? this.state.subState.length : 0}`])
            ]),

            div({class: 'children'}, [
                ...this.renderChildren()
            ])

        ]);
    }
    
    renderChildren() {
        if(this.state.subState) {
            return this.state.subState.map((_, index) => {
                return testElement(() => this.state.subState[index])
                    .onClick(
                        (event) => { 
                            console.log('You clicked on TestElement!', this.state.subState[index].id);
                            event.stopPropagation();
                        },
                        (event) => {
                            console.log('Also this will execute')!
                        }
                    ).onClick(
                        () => {
                            console.log('And this as well!')!
                        }
                    )
            })
        } else {
            return [];
        }
    }
}

export const testElement: (state: () => TestState, id?: number | string, funcEl?) => FunctionalComponent<TestState> = functionalComponentFactory<TestState>(Test); 
