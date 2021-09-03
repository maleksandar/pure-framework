import { HTMLFunctionalElement, FunctionalElement } from '../../../core';

export class H1Element extends HTMLFunctionalElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'h1')
    }
}
