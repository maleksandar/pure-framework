import { BehaviorSubject } from "rxjs";
export interface Address {
    street: string,
    number: number;
}

export interface AppState {
    firstName: string,
    lastName: string,
    address: Address
}

export let appState: AppState = {
    firstName: 'Aleksandar',
    lastName: 'Milosavljevic',
    address: {
        street: 'VP',
        number: 56
    }

};

const appStateSubject = new BehaviorSubject(appState);
export const appState$ = appStateSubject.asObservable();

export function updateFirstName(name: string) {
    appState = {...appState, firstName: name }
    appStateSubject.next(appState);
}

export function updateAddressStreet(street: string) {
    appState = { ...appState, address: {...appState.address, street}};
    appStateSubject.next(appState);
}

export function nameSelector() {
    return appState.firstName;
}

export function getState() {
    return appState;
}

window.updateFirstName = updateFirstName;
window.updateAddressStreet = updateAddressStreet;