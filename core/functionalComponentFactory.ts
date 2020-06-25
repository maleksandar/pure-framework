import oh from 'object-hash';
import { FunctionalComponent } from './FunctionalComponent';
import { FunctionalElement } from './FunctionalElement';
type FunctionalComponentConstructor<ModelType> = { new (state: () => ModelType, funcEl?: FunctionalElement): FunctionalComponent<ModelType>; }

const dictionary = Object.create(null);

export function functionalComponentFactory<ModelType>(constructorFunction: FunctionalComponentConstructor<ModelType>)
    : (state: () => ModelType, id?: number | string, funcEl?) => FunctionalComponent<ModelType> {
    return (state: () => ModelType, id: number | string = 0, funcEl?) => {
        const hash = oh.MD5(state());
        const key =`${hash}_${id}`
        if(!dictionary[key]) {
            dictionary[key] = new constructorFunction(state, funcEl);
        }
        return dictionary[key] as FunctionalComponent<ModelType> ;
    };
};