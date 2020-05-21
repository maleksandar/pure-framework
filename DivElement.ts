import { FunctionalElement } from './FunctionalElement';
import { Observable } from 'rxjs';

class DivElement implements FunctionalElement {
domElement: HTMLDivElement;
    parent = null;

    clickHandlers: (() => any)[] = [];
    constructor(private attributes: {}, private _children: FunctionalElement[]) {
        if (arguments.length === 2) {
            this.attributes = arguments[0];
            this._children = arguments[1];
        }
        else if (arguments.length === 1) {
            this._children = arguments[0];
        }
        this._children.forEach(child => { child.parent = this; })

    }

    get children() {
        return this._children;
    }
    render() {
        this.domElement = document.createElement('div');
        this.children.forEach(child => {
            this.domElement.appendChild(child.render());
        });
        if (this.attributes) {
            Object.keys(this.attributes).forEach(attribute => {
                this.domElement.setAttribute(attribute, this.attributes[attribute]);
            });
        }
        if (this.clickHandlers) {
            this.clickHandlers.forEach(handler => this.domElement.addEventListener('click', handler));
        }
        return this.domElement;
    }

    onClick(handler) {
        this.clickHandlers.push(handler);
        return this;
    }

    attachState(state$: Observable<any>) {
        state$.subscribe(newState => {
            this.render();
        })

    }

}

export function div(...args: [{}, FunctionalElement[]] | [FunctionalElement[]]) {
    if (args.length === 2) {
        return new DivElement(args[0], args[1]);
    } else {
        return new DivElement(null, args[0]);
    }
}