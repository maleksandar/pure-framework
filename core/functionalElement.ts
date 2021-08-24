export interface FunctionalElement {
    render: () => HTMLElement | Text;
    domElement: HTMLElement | Text;
    children?: FunctionalElement[];
    parentDomElement: HTMLElement | null;
}
