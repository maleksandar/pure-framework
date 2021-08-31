import { ButtonElement } from "./elements/buttonElement";
import { DivElement } from "./elements/divElement";
import { H1Element } from "./elements/h1Element";
import { HeaderElement } from "./elements/headerElement";
import { LiElement } from "./elements/liElement";
import { UlElement } from "./elements/ulElement";
import { coreElementFactory } from "../../core/coreElementsFactory";
import { FunctionalElement } from "../../core/functionalElement";

type ChildrenInputType = FunctionalElement | string;
type BlockElementConstuructor<ChildrenNormalizedType extends FunctionalElement> =
  { new(attributes: {}, _children: ChildrenNormalizedType[]): ChildrenNormalizedType };


function blockElementFactory<ChildrenNormalizedType extends FunctionalElement>(blockElementConstuructor: BlockElementConstuructor<ChildrenNormalizedType>) {
  return coreElementFactory<ChildrenInputType, ChildrenNormalizedType>(blockElementConstuructor);
}

export const div = blockElementFactory<DivElement>(DivElement);
export const h1 = blockElementFactory<H1Element>(H1Element);
export const button = blockElementFactory<ButtonElement>(ButtonElement);
export const header = blockElementFactory<HeaderElement>(HeaderElement);
export const ul = blockElementFactory<UlElement>(UlElement);
export const li = blockElementFactory<LiElement>(LiElement);

