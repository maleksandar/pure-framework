import { BehaviorSubject } from "rxjs";
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

export let _appState: AppState = {
    firstName: 'Aleksandar',
    lastName: 'Milosavljevic',
    address: {
        street: 'VP',
        number: 56
    },
    additionalAddress: {
        street: 'VP',
        number: 56
    }

};

export const appStateSubject = new BehaviorSubject(_appState);
export const appState$ = appStateSubject.asObservable();
export const appState = () => appStateSubject.getValue();

export function updateFirstName(name: string) {
    _appState = {..._appState, firstName: name }
    appStateSubject.next(_appState);
}

export function updateAddressStreet(street: string) {
    _appState = { ..._appState, address: {..._appState.address, street}};
    appStateSubject.next(_appState);
}

export function nameSelector() {
    return _appState.firstName;
}

export function getState() {
    return appStateSubject.getValue();
}
export function updateState(newState: AppState) {
    appStateSubject.next(newState);
}

window.updateFirstName = updateFirstName;
window.updateAddressStreet = updateAddressStreet;