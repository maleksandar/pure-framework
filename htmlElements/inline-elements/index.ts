import { inlineElementFactory } from "./inlineElementsFactory";
import { SpanElement } from "./SpanElement";
import { TextElement } from "./TextElement";

export function text(string) {
    return new TextElement(string);
}

export const span = inlineElementFactory(SpanElement);