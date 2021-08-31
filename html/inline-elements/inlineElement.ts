import { BaseFunctionalElement } from '../../core/baseFunctionalElement';
import { TextElement } from './textElement';

export type InlineOutputElement = InlineElement | TextElement;
export type InlineInputElement = InlineElement | TextElement | string;
export type InlineElementConstructor = { new(attributes: {}, _children: InlineOutputElement[]): InlineOutputElement}

export abstract class InlineElement extends BaseFunctionalElement {
    constructor(protected attributes: {}, protected _children: InlineOutputElement[], protected _tag) {
        super(attributes,_children, _tag );
    }
}
