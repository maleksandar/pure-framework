import { InlineElement } from "../inline-elements/InlineElement";
import { InputElement } from "./InputElement";


export class InputTextElement extends InputElement {
  constructor(attributes) {
      super({...attributes, type: 'text'}, 'input');
  }
}
