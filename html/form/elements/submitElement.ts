import { InputElement } from "./inputElement";

export class SubmitElement extends InputElement {
  constructor(attributes) {
      super({...attributes, type: 'submit'}, 'input');
  }
}
