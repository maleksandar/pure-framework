import { inlineElementFactory } from "./inlineElementsFactory";
import { ItalicElement } from "./italicElement";
import { SpanElement } from "./spanElement";
import { TextElement } from "./textElement";

export function text(string) {
    return new TextElement(string);
}

export const span = inlineElementFactory(SpanElement);
export const italic = inlineElementFactory(ItalicElement);
