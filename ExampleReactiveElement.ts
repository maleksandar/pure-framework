import { ReactiveElement, produceReactiveElement } from "./ReactiveElement";
import { text } from "./TextElement";
import { Observable, of } from "rxjs";
import { div } from "./BasicElementsFactory";

class ExampleReactiveElement extends ReactiveElement<string> {
    template () {
        return div(null, [
            div([text('Header')]),
            text(this.state),
            div({class: 'red'}, [
                text('Footer')
            ]),
        ]);
    } 

    constructor(state$: Observable<string>) {
        super(state$);
    }
}

export const er = produceReactiveElement(ExampleReactiveElement) 

