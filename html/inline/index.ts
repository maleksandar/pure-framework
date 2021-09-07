import { coreElementFactory } from "../../core/coreElementsFactory";
import { AElement } from "./elements/aElement";
import { InlineElement } from "./elements/inlineElement";
import { ItalicElement } from "./elements/italicElement";
import { SpanElement } from "./elements/spanElement";
import { TextElement } from "./elements/textElement";


type ChildrenInputType = InlineElement | string;
type InlineElementConstuructor<ChildrenNormalizedType extends InlineElement> =
  { new(attributes: {}, _children: ChildrenNormalizedType[]): ChildrenNormalizedType };

function inlineElementFactory<ChildrenNormalizedType extends InlineElement>(blockElementConstuructor: InlineElementConstuructor<ChildrenNormalizedType>) {
  return coreElementFactory<ChildrenInputType, ChildrenNormalizedType>(blockElementConstuructor);
}

export function text(string) {
    return new TextElement(string);
}

export const span = inlineElementFactory<SpanElement>(SpanElement);
export const a = inlineElementFactory<AElement>(AElement);
export const italic = inlineElementFactory<ItalicElement>(ItalicElement);
