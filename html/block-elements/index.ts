import { ButtonElement } from "./buttonElement";
import { DivElement } from "./divElement";
import { H1Element } from "./h1Element";
import { HeaderElement } from "./headerElement";
import { LiElement } from "./liElement";
import { UlElement } from "./ulElement";
import { coreElementFactory } from "../../core/coreElementsFactory";

export const div = coreElementFactory(DivElement);
export const h1 = coreElementFactory(H1Element);
export const button = coreElementFactory(ButtonElement);
export const header = coreElementFactory(HeaderElement);
export const ul = coreElementFactory(UlElement);
export const li = coreElementFactory(LiElement);


