import { FunctionalElement } from "../core/functionalElement";
import { TextElement } from "../html/inline-elements/textElement";

export function coreElementFactory<InputType extends FunctionalElement | string, OutputType extends FunctionalElement>(HtmlConstructorType: { new(attributes: {}, _children: OutputType[]): OutputType}) {
    return (function C (...args: [{}, InputType[]] | [InputType[]] | [InputType]) {
        if (args.length === 2) {
            let args1 = args[1];
            let children = transformToTextNodes<InputType, OutputType>(args1);
            return new HtmlConstructorType(args[0], children);
        } else {
            if(Array.isArray(args[0])) {
                return new HtmlConstructorType(null, transformToTextNodes(args[0]));
            } else if(args) {
                return new HtmlConstructorType(null, transformToTextNodes([args[0]]));
            }
        }
    })
}

export function transformToTextNodes<InputType extends FunctionalElement | string, OutputType extends FunctionalElement>(args1: InputType[]): OutputType[] {
    return <OutputType[]><unknown>(args1.map(child => {
        if (typeof child === 'string') {
            return new TextElement(child);
        }
        return child;
    }));
}

