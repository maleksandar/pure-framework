import { HTMLFunctionalElement, FunctionalElement } from '../../../core';

export class HeaderElement extends HTMLFunctionalElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'header')
    }
}
