import oh from 'object-hash';
import { Component } from './component';
type FunctionalComponentConstructor<ModelType> = { new(state: () => ModelType): Component<ModelType>; }

const dictionary = Object.create(null);

export function componentFactory<ConcreteComponent extends Component<ModelType>, ModelType>(constructorFunction: FunctionalComponentConstructor<ModelType>)
    : (state: () => ModelType, id?: number | string) => ConcreteComponent {
    return (state: () => ModelType, id: number | string = 0) => {
        const stateHash = oh.MD5(state());
        const key = `${stateHash}_${id}`
        if (!dictionary[constructorFunction.name]) {
            dictionary[constructorFunction.name] = Object.create(null);
        }

        if (!dictionary[constructorFunction.name][key]) {
            dictionary[constructorFunction.name][key] = new constructorFunction(state);
        }

        return dictionary[constructorFunction.name][key] as ConcreteComponent;
    };
};