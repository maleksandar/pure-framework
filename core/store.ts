import { BehaviorSubject, Observable } from "rxjs";

export class Store<Model> {
    private _stateSubject: BehaviorSubject<Model>;
    private _state$: Observable<Model>;

    constructor(defaultState: Model) {
        this._stateSubject = new BehaviorSubject(defaultState);
        this._state$ = this._stateSubject.asObservable();
    }

    updateState(newState: Partial<Model>) {
        this._stateSubject.next({...this._stateSubject.getValue(), ...newState });
    }

    get state() {
        return this._stateSubject.getValue();
    }

    get state$() {
        return this._state$;
    }
}