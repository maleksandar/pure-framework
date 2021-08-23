import { FunctionalElement } from '../../core/FunctionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './BlockElement';

export class UlElement extends BlockElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'ul')
    }
}
