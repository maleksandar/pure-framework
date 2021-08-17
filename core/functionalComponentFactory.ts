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
        if(!dictionary[constructorFunction.name]) {
            dictionary[constructorFunction.name] = Object.create(null);
        }

        if(!dictionary[constructorFunction.name][key]) {
            dictionary[constructorFunction.name][key] = new constructorFunction(state, funcEl);
        }

        return dictionary[constructorFunction.name][key] as FunctionalComponent<ModelType> ;
    };
};