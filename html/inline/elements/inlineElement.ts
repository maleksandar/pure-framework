import { HTMLFunctionalElement } from '../../../core/htmlFunctionalElement';

export type InlineInputElement = InlineElement | string;
export type InlineElementConstructor = { new(attributes: {}, _children: InlineElement[]): InlineElement}

export abstract class InlineElement extends HTMLFunctionalElement {
    constructor(protected attributes: {}, protected _children: InlineElement[], protected _tag) {
        super(attributes,_children, _tag );
    }
}
