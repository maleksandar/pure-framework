import { ButtonElement } from "./elements/buttonElement";
import { DivElement } from "./elements/divElement";
import { H1Element } from "./elements/h1Element";
import { HeaderElement } from "./elements/headerElement";
import { LiElement } from "./elements/liElement";
import { UlElement } from "./elements/ulElement";
import { coreElementFactory } from "../../core/coreElementsFactory";
import { FunctionalElement } from "../../core/functionalElement";

type ChildrenNormalizedType = FunctionalElement 
type ChildrenInputType = FunctionalElement | string;
type BlockElementConstuructor = { new(attributes: {}, _children: ChildrenNormalizedType[]): ChildrenNormalizedType };


const blockElementFactory = (blockElementConstuructor: BlockElementConstuructor ) => {
  return coreElementFactory<ChildrenInputType, ChildrenNormalizedType>(blockElementConstuructor);
}

export const div = blockElementFactory(DivElement);
export const h1 = blockElementFactory(H1Element);
export const button = blockElementFactory(ButtonElement);
export const header = blockElementFactory(HeaderElement);
export const ul = blockElementFactory(UlElement);
export const li = blockElementFactory(LiElement);


