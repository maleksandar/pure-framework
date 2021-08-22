import { FunctionalElement } from '../../core/FunctionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './BlockElement';

export class DivElement extends BlockElement {
    domElement: HTMLDivElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'div')
    }
}
