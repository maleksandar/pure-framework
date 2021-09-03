import { FunctionalElement, HTMLFunctionalElement } from "../../../core";

export class ButtonElement extends HTMLFunctionalElement {
  domElement: HTMLButtonElement;
  constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
      super(attributes, _children, 'button')
  }
}
