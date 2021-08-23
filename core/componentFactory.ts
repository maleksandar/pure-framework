import oh from 'object-hash';
import { Component } from './Component';
type FunctionalComponentConstructor<ModelType> = { new (state: () => ModelType): Component<ModelType>; }

const dictionary = Object.create(null);

export function componentFactory<ExtendedType extends Component<ModelType>, ModelType>(constructorFunction: FunctionalComponentConstructor<ModelType>)
    : (state: () => ModelType, id?: number | string) => ExtendedType  {
    return (state: () => ModelType, id: number | string = 0) => {
        const stateHash = oh.MD5(state());
        const key =`${stateHash}_${id}`
        if(!dictionary[constructorFunction.name]) {
            dictionary[constructorFunction.name] = Object.create(null);
        }

        if(!dictionary[constructorFunction.name][key]) {
            dictionary[constructorFunction.name][key] = new constructorFunction(state);
        }

        return dictionary[constructorFunction.name][key] as ExtendedType ;
    };
};