import { FunctionalElement } from '../../core/functionalElement';
import { BaseFunctionalElement } from '../../core/baseFunctionalElement';

export abstract class BlockElement extends BaseFunctionalElement {
    constructor(protected attributes: {}, protected _children: FunctionalElement[], protected _tag) {
        super(attributes,_children, _tag );
    }
}
