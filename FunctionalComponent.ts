import { FunctionalElement } from "./FunctionalElement";
import oh from 'object-hash';
import { DomAttachments } from "./DomAttachments";
const clone = require('rfdc')()

 // Alternatively: Import just the clone methods from lodash
export abstract class FunctionalComponent<T> extends DomAttachments implements FunctionalElement {
    protected inputState: () => T = () =>null;
    previousState: T;
    _cachedTemplate: FunctionalElement = null;
    _template: FunctionalElement = null;
    get state() {
        return this.inputState();
    }
    render() {
        if (areEqual(this.inputState(), this.previousState) && this.domElement) {
            return this.domElement;
        }

        console.log('RENDERING ELEMENT WITH STATE: ', this.state)
        this.previousState = cloneDeep(this.inputState());
        this.domElement = this.template().render();

        if (this.clickHandlers) {
            this.clickHandlers.forEach(handler => this.domElement.addEventListener('click', handler));
        }
        return this.domElement;
    };

    cachedTemplate() {
        if(!this._template) {
            this._template = this.template();
        }
        return this._template;
    }

    constructor(state: () => T) {
        super();
        this.inputState = state;
    }

    parent: FunctionalElement;

    get children() {
        return this.template().children
    }

    domElement: HTMLElement | Text = null;

    abstract template(): FunctionalElement;

    static dictionary = Object.create(null);

    // static produceElement<ModelType>() {
    //     return (state: () => ModelType, id: number | string = 0) => {
    //         const hash = oh.MD5(state());
    //         const key =`${hash}_${id}`
    //         if(!this.dictionary[key]) {
    //             this.dictionary[key] = new this(state);
    //         }
    //         return this.dictionary[key];
    //     };
    // };
};

export function produceElement<ModelType>(constructorFunction: { new (state: () => ModelType): FunctionalComponent<ModelType>; }) {
    return (state) => {
        let wrapper = new constructorFunction(state);
        return wrapper.template();
    };
};

export function areEqual(state1: any, state2: any) {
    if(!state1 || !state2){ 
        return false;
    }
    return oh.MD5(state1) === oh.MD5(state2);

}

function cloneDeep(obj) {
    return clone(obj);
}
