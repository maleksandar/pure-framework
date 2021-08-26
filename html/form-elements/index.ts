import { InputElement } from "./inputElement";
import { InputTextElement } from "./inputTextElement";
import { SubmitElement } from "./submitElement";

export const inputText = (attributes?) => new InputTextElement(attributes);
export const submit = (attributes?) => new SubmitElement(attributes);