import { FunctionalElement } from '../../core/FunctionalElement';
import { DomAttachments } from '../../core/DomAttachments';

export abstract class BlockElement extends DomAttachments<BlockElement> implements FunctionalElement {
    domElement: HTMLElement;
    parent = null;

    // clickHandlers: (() => any)[] = [];
    constructor(protected attributes: {}, protected _children: FunctionalElement[], private _tag) {
        super();
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
        this.domElement = document.createElement(this._tag);
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

    // onClick(handler) {
    //     this.clickHandlers.push(handler);
    //     return this;
    // }

    addClass(_class: string) {
        if(this.attributes && this.attributes['class']) {
            this.attributes = {...this.attributes, class: `${(<any>this.attributes).class} ${_class}` };
            return this;
        }
        return this;
    }
}
