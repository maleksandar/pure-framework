import { InputElement } from "html/form-elements/inputElement";
import { coreElementFactory } from "../../core/coreElementsFactory";
import { InlineElement } from "./inlineElement";
import { ItalicElement } from "./italicElement";
import { SpanElement } from "./spanElement";
import { TextElement } from "./textElement";

type O = InlineElement | TextElement;

export function text(string) {
    return new TextElement(string);
}
const inlineElementFactory = (iEl: { new(attributes: {}, _children: O[]): O} ) => { return coreElementFactory<InlineElement | string, O>(iEl)}

export const span = inlineElementFactory(SpanElement);
export const italic = inlineElementFactory(ItalicElement);
