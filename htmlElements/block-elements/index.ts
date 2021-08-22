import { blockElementFactory } from "./blockElementsFactory";
import { DivElement } from "./DivElement";
import { H1Element } from "./H1Element";

export const div = blockElementFactory(DivElement);
export const h1 = blockElementFactory(H1Element);

