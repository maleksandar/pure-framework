import { FunctionalComponent, produceElement } from "./FunctionalComponent";
import { text } from "./TextElement";
import { AppState } from "./appState";
import { address } from "./addressElement";
import { div } from "./BasicElementsFactory";
import { getElementFactory } from "./functionalComponentFactory";
import { FunctionalElement } from "./FunctionalElement";

export class Page extends FunctionalComponent<AppState> {
    template () {
        return this.rootElement;
    } 

    constructor(inputState:() => AppState, private rootElement?: FunctionalElement) {
        super(inputState);
    }
}

export const page = getElementFactory(Page); 
