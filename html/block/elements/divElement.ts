import { FunctionalElement, HTMLFunctionalElement } from '../../../core';

export class DivElement extends HTMLFunctionalElement {
    domElement: HTMLDivElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'div')
    }
}
