import { InputElement } from "./inputElement";

export class InputTextElement extends InputElement {
  constructor(attributes) {
      super({...attributes, type: 'text'}, 'input');
  }
}
