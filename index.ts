import { BehaviorSubject } from 'rxjs';
import { appState, nameSelector, appState$, getState, updateState } from './appState';
import { bootstrap } from './core/bootstrap';
import { testElement } from './TestElement';
import { testState, testStateSubject, testState$ } from './TestState';
import { div, h1 } from './functional-templates/block-elements';
import { wrapper } from './WrapperElement';
import { person } from './PersonElement';

const appRoot = document.getElementById('app');
const app2Root = document.getElementById('app2');

const store$ = new BehaviorSubject(appState());

const app = testElement(testState);
const app2 = 
        div([
            h1({class:'red'},[
                'Neki Veliki naslov',
                div('div usred naslova'),
                'Nastavak naslova',
            ]).onClick(() => console.log("klikn'o si na heder. bravo.")),
            wrapper(nameSelector),
            person(getState),
            div({class: 'red'}, [
                'html',
                div('izmedju'),
                'opaa',
            ]),
            div('Ovaj div ima samo text')
        ]);

bootstrap(appRoot, app, testState$);
bootstrap(app2Root, app2, appState$);


window.store = testStateSubject;