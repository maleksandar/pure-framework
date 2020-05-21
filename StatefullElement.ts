import { FunctionalElement } from "./FunctionalElement";
const oh = require('object-hash');
export abstract class StatefullElement<T> implements FunctionalElement {
    inputState: () => T = () =>null;
    previousState: T;
    _cachedTemplate: FunctionalElement = null;
    _template: FunctionalElement = null;
    get state() {
        return this.inputState();
    }
    render() {
        if (this.inputState() === this.previousState && this.domElement) {
            return this.domElement;
        }
        this.previousState = this.inputState();
        this.domElement = this.template().render();
        return this.domElement;
    };

    cachedTemplate() {
        if(!this._template) {
            this._template = this.template();
        }
        return this._template;
    }

    constructor(state: () => T) {
        this.inputState = state;
    }
    parent: FunctionalElement;

    get children() {
        return this.template().children
    }

    domElement: HTMLElement | Text = null;

    abstract template(): FunctionalElement;

    static dictionary = Object.create(null);

    static produceElement() {
        return (state, id: number | string = 0) => {
            const hash = oh.MD5(state());
            const key =`${hash}_${id}`
            if(!this.dictionary[key]) {
                this.dictionary[key] = new this(state);
                debugger;
            }
            return this.dictionary[key];
        };
    };
};

export function produceElement<ModelType>(constructorFunction: { new (state: () => ModelType): StatefullElement<ModelType>; }) {
    return (state) => {
        let wrapper = new constructorFunction(state);
        return wrapper.template();
    };
};
