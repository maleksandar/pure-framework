import { FunctionalElement } from './FunctionalElement';
 
class DivElement implements FunctionalElement {
    domElement: HTMLDivElement;
    clickHandlers: (() => any)[] = [];
    constructor(private attributes: {}, private children: FunctionalElement[]) {
        if (arguments.length === 2) {
            this.attributes = arguments[0];
            this.children = arguments[1];
        }
        else if (arguments.length === 1) {
            this.children = arguments[0];
        }
    }
    render() {
        this.domElement = document.createElement('div');
        this.children.forEach(child => { this.domElement.appendChild(child.render()); });
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
}

export function div(...args: [{}, FunctionalElement[]] | [FunctionalElement[]]) {
    if (args.length === 2) {
        return new DivElement(args[0], args[1]);
    } else {
        return new DivElement(null, args[0]);
    }
}