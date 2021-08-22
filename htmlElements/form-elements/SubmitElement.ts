import { InlineElement } from "../inline-elements/InlineElement";
import { InputElement } from "./InputElement";


export class SubmitElement extends InputElement {
  constructor(attributes) {
      super({...attributes, type: 'submit'}, 'input');
  }
}
