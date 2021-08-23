import { Store } from "./core";

export interface Address {
    city: string;
    street: string,
    number: number;
}

export interface PersonModel {
    firstName: string,
    lastName: string,
    address: Address,
}

export const store = new Store<PersonModel>({
    firstName: 'Aleksandar',
    lastName: 'Milosavljevic',
    address: {
        city: 'Obrenovac',
        number: 56,
        street: 'Valjevski Put'
    },
  });
  