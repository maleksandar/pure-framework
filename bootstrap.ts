export function bootstrap(domRoot, app, store$) {
    store$.subscribe(state => {
        while (domRoot.firstChild) {
            domRoot.removeChild(domRoot.lastChild);
        }
        domRoot.appendChild(app.render());
    });
}
