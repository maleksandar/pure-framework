import { blockElementFactory } from "./blockElementsFactory";
import { ButtonElement } from "./buttonElement";
import { DivElement } from "./divElement";
import { H1Element } from "./h1Element";
import { HeaderElement } from "./headerElement";
import { LiElement } from "./liElement";
import { UlElement } from "./ulElement";

export const div = blockElementFactory(DivElement);
export const h1 = blockElementFactory(H1Element);
export const button = blockElementFactory(ButtonElement);
export const header = blockElementFactory(HeaderElement);
export const ul = blockElementFactory(UlElement);
export const li = blockElementFactory(LiElement);


