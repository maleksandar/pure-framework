import { FunctionalElement } from '../../core/functionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './blockElement';

export class HeaderElement extends BlockElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'header')
    }
}