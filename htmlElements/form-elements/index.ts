import { InputElement } from "./InputElement";
import { InputTextElement } from "./InputTextElement";
import { SubmitElement } from "./SubmitElement";

export const input = (attributes?) => new InputTextElement(attributes);
export const submit = (attributes?) => new SubmitElement(attributes);