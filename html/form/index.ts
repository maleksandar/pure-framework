import { InputTextElement } from "./elements/inputTextElement";
import { SubmitElement } from "./elements/submitElement";

export const inputText = (attributes?) => new InputTextElement(attributes);
export const submit = (attributes?) => new SubmitElement(attributes);