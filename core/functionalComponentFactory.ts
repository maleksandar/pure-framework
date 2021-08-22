import oh from 'object-hash';
import { FunctionalComponent } from './FunctionalComponent';
type FunctionalComponentConstructor<ModelType> = { new (state: () => ModelType): FunctionalComponent<ModelType>; }

const dictionary = Object.create(null);

export function functionalComponentFactory<ModelType>(constructorFunction: FunctionalComponentConstructor<ModelType>)
    : (state: () => ModelType, id?: number | string) => FunctionalComponent<ModelType> {
    return (state: () => ModelType, id: number | string = 0) => {
        const hash = oh.MD5(state());
        const key =`${hash}_${id}`
        if(!dictionary[constructorFunction.name]) {
            dictionary[constructorFunction.name] = Object.create(null);
        }

        if(!dictionary[constructorFunction.name][key]) {
            dictionary[constructorFunction.name][key] = new constructorFunction(state);
        }

        return dictionary[constructorFunction.name][key] as FunctionalComponent<ModelType> ;
    };
};