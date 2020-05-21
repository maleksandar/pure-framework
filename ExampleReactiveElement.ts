import { ReactiveElement, produceReactiveElement } from "./ReactiveElement";
import { div } from "./DivElement";
import { text } from "./TextElement";
import { Observable, of } from "rxjs";

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

