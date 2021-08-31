import { FunctionalElement } from '../../core/functionalElement';
import { HTMLFunctionalElement } from '../../core/htmlFunctionalElement';

export abstract class BlockElement extends HTMLFunctionalElement {
    constructor(protected attributes: {}, protected _children: FunctionalElement[], protected _tag) {
        super(attributes,_children, _tag );
    }
}
