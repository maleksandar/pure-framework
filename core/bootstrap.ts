import { Observable } from "rxjs";
import { Component } from "./Component";

export function bootstrap<T>(domRoot: HTMLElement, app: Component<T>, store$: Observable<T>) {
    store$.subscribe(state => {
        while (domRoot.firstChild) {
            domRoot.removeChild(domRoot.lastChild);
        }
        domRoot.appendChild(app.render());
    });
}
