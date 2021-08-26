import { FunctionalElement } from '../../core/functionalElement';
import { BlockElement } from './blockElement';

export class LiElement extends BlockElement {
    domElement: HTMLHeadingElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'li')
    }
}
