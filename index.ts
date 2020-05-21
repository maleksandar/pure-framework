import { BehaviorSubject } from 'rxjs';
import { appState, nameSelector, appState$, getState } from './appState';
import { bootstrap } from './bootstrap';
import { wrapper } from './WrapperElement';
import { person } from './PersonElement';
import { text } from './TextElement';
import { div, h1 } from './BasicElementsFactory';

const appRoot = document.getElementById('app');
const store$ = new BehaviorSubject(appState);

const app =
    div([
        h1([
            'Neki Veliki naslov',
            div('div usred naslova'),
            'Nastavak naslova'
        ]),
        wrapper(nameSelector),
        person(getState),
        div({class: 'red'}, [text('html'), div(text('izmedju')), text('opaa')]),
        div('Ovaj div ima samo text')
    ]);

bootstrap(appRoot, app, appState$);

window.store = store$;