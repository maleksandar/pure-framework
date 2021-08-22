export interface Address {
    street: string,
    number: number;
}

export interface AppState {
    firstName: string,
    lastName: string,
    address: Address,
    additionalAddress: Address;
}