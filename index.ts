import { BehaviorSubject } from 'rxjs';
import { div } from './DivElement';
import { appState, nameSelector, appState$, getState } from './appState';
import { bootstrap } from './bootstrap';
import { wrapper } from './WrapperElement';
import { person } from './PersonElement';

const appRoot = document.getElementById('app');
const store$ = new BehaviorSubject(appState);
const app =
    div([
        wrapper(nameSelector),
        person(getState),
    ]);

bootstrap(appRoot, app, appState$);

window.store = store$;