import { FunctionalElement } from "./FunctionalElement";
import { DivElement } from "./DivElement";
import { text } from "./TextElement";
import { H1Element } from "./H1Element";

export type InputElement = FunctionalElement | string;

export function div(...args: [{}, InputElement[]] | [InputElement[]] | [InputElement]) {
    if (args.length === 2) {
        let args1 = args[1];
        let children = transformToTextNodes(args1);
        return new DivElement(args[0], children);
    } else {
        if(Array.isArray(args[0])) {
            return new DivElement(null, transformToTextNodes(args[0]));
        } else return new DivElement(null, transformToTextNodes([args[0]]))
    }
}

export function h1(...args: [{}, InputElement[]] | [InputElement[]] | [InputElement]) {
    if (args.length === 2) {
        let args1 = args[1];
        let children = transformToTextNodes(args1);
        return new H1Element(args[0], children);
    } else {
        if(Array.isArray(args[0])) {
            return new H1Element(null, transformToTextNodes(args[0]));
        } else return new H1Element(null, transformToTextNodes([args[0]]))
    }
}

function transformToTextNodes(args1: InputElement[]): FunctionalElement[] {
    return args1.map(child => {
        if (typeof child === 'string') {
            return text(child);
        }
        return child;
    });
}
