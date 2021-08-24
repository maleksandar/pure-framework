import { Component } from "./component";
import { Store } from "./store";
/**
 * 
 * @param domRoot DOM root node to attach your Pure app to. 
 * @param rootComponentFactory factory function for root component
 * @param store storage instance
 */
export function bootstrap<AppModel>(
    domRoot: HTMLElement,
    rootComponentFactory: (state: () => AppModel) => Component<AppModel>,
    store: Store<AppModel>,
): Component<AppModel> {

    const appRoot = rootComponentFactory(() => store.state);

    store.state$.subscribe(state => {
        while (domRoot.firstChild) {
            domRoot.removeChild(domRoot.lastChild);
        }
        domRoot.appendChild(appRoot.render());
    });

    return appRoot;
}
