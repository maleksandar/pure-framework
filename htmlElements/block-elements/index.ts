import { blockElementFactory } from "./blockElementsFactory";
import { ButtonElement } from "./ButtonElement";
import { DivElement } from "./DivElement";
import { H1Element } from "./H1Element";
import { HeaderElement } from "./HeaderElement";
import { LiElement } from "./LiElement";
import { UlElement } from "./UlElement";

export const div = blockElementFactory(DivElement);
export const h1 = blockElementFactory(H1Element);
export const button = blockElementFactory(ButtonElement);
export const header = blockElementFactory(HeaderElement);
export const ul = blockElementFactory(UlElement);
export const li = blockElementFactory(LiElement);


