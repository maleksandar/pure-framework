import { FunctionalElement } from '../../core/FunctionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './BlockElement';

export class H1Element extends BlockElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'h1')
    }
}
