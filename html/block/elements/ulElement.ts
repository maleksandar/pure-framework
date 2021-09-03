import { HTMLFunctionalElement, FunctionalElement } from '../../../core';

export class UlElement extends HTMLFunctionalElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'ul')
    }
}
