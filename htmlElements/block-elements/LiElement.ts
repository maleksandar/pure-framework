import { FunctionalElement } from '../../core/FunctionalElement';
import { BlockElement } from './BlockElement';

export class LiElement extends BlockElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'li')
    }
}
