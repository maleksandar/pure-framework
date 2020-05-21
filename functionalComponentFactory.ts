import oh from 'object-hash';
import { FunctionalComponent } from './FunctionalComponent';

const dictionary = Object.create(null);

export function getElementFactory<ModelType>(constructorFunction: { new (state: () => ModelType): FunctionalComponent<ModelType>; }) {
    return (state: () => ModelType, id: number | string = 0) => {
        const hash = oh.MD5(state());
        const key =`${hash}_${id}`
        if(!dictionary[key]) {
            dictionary[key] = new constructorFunction(state);
        }
        return dictionary[key];
    };
};