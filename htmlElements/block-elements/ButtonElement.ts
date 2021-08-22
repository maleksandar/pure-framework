import { FunctionalElement } from "../../core/FunctionalElement";
import { BlockElement } from "./BlockElement";

export class ButtonElement extends BlockElement {
  domElement: HTMLButtonElement;
  constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
      super(attributes, _children, 'button')
  }
}