import { FunctionalElement } from '../../core/functionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './blockElement';

export class DivElement extends BlockElement {
    domElement: HTMLDivElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'div')
    }
}
