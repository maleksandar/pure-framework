import { FunctionalElement } from "./FunctionalElement";
import { div } from "./DivElement";
import { Observable } from "rxjs";

export abstract class ReactiveElement<T>{
    inputState$: Observable<T> = null;
    state: T;
    render() {
        this.domElement = this.template().render();
        return this.domElement;
        
    };

    constructor(state$: Observable<T>) {
        this.inputState$ = state$;
        this.inputState$.subscribe(state => {
            this.updateState(state);
            this.render();
        })
    }

    updateState(state) {
        this.state = state;
    }

    domElement: HTMLElement | Text = null;

    abstract template(): FunctionalElement;

};

// export const reactive = produceElement(ReactiveElement);

export function produceReactiveElement<ModelType>(constructorFunction: { new (state$: Observable<ModelType>): ReactiveElement<ModelType>; }) {
    return (state$) => {
        let wrapper = new constructorFunction(state$);
        return wrapper.template();
    };
};