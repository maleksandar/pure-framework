import { BehaviorSubject } from 'rxjs';
import { div } from './DivElement';
import { custom } from './CustomElement';
import { appState } from './appState';
import { bootstrap } from './bootstrap';
import { text } from './TextElement';
import { wrapper } from './WrapperElement';

const appRoot = document.getElementById('app');
const store$ = new BehaviorSubject(appState);

const app =
    div([
        div([
            functionalComponent()
        ]),
        div({class: 'red'}, [text('Hello red')]).onClick(() => console.log('click!')),
        wrapper('Wrapped text'),
    ]);

bootstrap(appRoot, app, store$);

function functionalComponent() {
    return div(
        ['firstName', 'lastName'].map(prop => custom(prop)),
    );
}

appState.firstName = 'Zoran';
store$.next({...appState, firstName: 'Zoran' });

window.store = store$;