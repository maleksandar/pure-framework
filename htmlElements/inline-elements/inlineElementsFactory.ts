import { text } from ".";
import { FunctionalElement } from "../../core/functionalElement";
import { InlineElement } from "./inlineElement";
import { TextElement } from "./textElement";

export type InputElement = InlineElement | string | TextElement;

export function inlineElementFactory<T extends InlineElement>(HtmlConstructorType: { new(attributes: {}, _children: (InlineElement | TextElement)[]): T}) {
    return (function C (...args: [{}, InputElement[]] | [InputElement[]] | [InputElement]) {
        if (args.length === 2) {
            let args1 = args[1];
            let children = transformToTextNodes(args1);
            return new HtmlConstructorType(args[0], children);
        } else {
            if(Array.isArray(args[0])) {
                return new HtmlConstructorType(null, transformToTextNodes(args[0]));
            } else if(args) {
                return new HtmlConstructorType(null, transformToTextNodes([args[0]]))
            }
        }
    })
}

export function transformToTextNodes(args1: InputElement[]): (InlineElement| TextElement)[] {
    return args1.map(child => {
        if (typeof child === 'string') {
            return text(child);
        }
        return child;
    });
}

