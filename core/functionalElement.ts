export interface FunctionalElement {
    render: () => HTMLElement | Text;
    domElement: HTMLElement | Text;
    children?: (FunctionalElement | Text)[];
    parentDomElement: HTMLElement | null;
}
