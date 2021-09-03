export interface FunctionalElement {
    render: () => HTMLElement;
    domElement: HTMLElement;
    children?: FunctionalElement[];
    parentDomElement: HTMLElement;
}
