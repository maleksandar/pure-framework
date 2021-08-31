import { coreElementFactory } from "../../core/coreElementsFactory";
import { InlineElement } from "./elements/inlineElement";
import { ItalicElement } from "./elements/italicElement";
import { SpanElement } from "./elements/spanElement";
import { TextElement } from "./elements/textElement";

type ChildrenNormalizedType = InlineElement | TextElement;
type ChildrenInputType = InlineElement | TextElement | string;
type InlineElementConstuructor = { new(attributes: {}, _children: ChildrenNormalizedType[]): ChildrenNormalizedType };

const inlineElementFactory = (inlineElementConstructor: InlineElementConstuructor ) => {
    return coreElementFactory<ChildrenInputType, ChildrenNormalizedType>(inlineElementConstructor)
}

export function text(string) {
    return new TextElement(string);
}

export const span = inlineElementFactory(SpanElement);
export const italic = inlineElementFactory(ItalicElement);
