import { FunctionalElement } from "../../core/functionalElement";
import { BlockElement } from "./blockElement";

export class ButtonElement extends BlockElement {
  domElement: HTMLButtonElement;
  constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
      super(attributes, _children, 'button')
  }
}
