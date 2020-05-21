export function bootstrap(domRoot, app, store$) {
    store$.subscribe(state => {
        // window.state = state;
        // console.log('store changed', state.firstName)
        while (domRoot.firstChild) {
            domRoot.removeChild(domRoot.lastChild);
        }
        domRoot.appendChild(app.render());
    });
}
