export interface FunctionalElement {
    render: () => HTMLElement | Text;
    domElement: HTMLElement | Text;
    parent: FunctionalElement;
    children: FunctionalElement[];
}
