import { HTMLFunctionalElement, FunctionalElement } from '../../../core';

export class LiElement extends HTMLFunctionalElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'li')
    }
}
