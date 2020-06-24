import { BehaviorSubject } from 'rxjs';
import { appState, nameSelector, appState$, getState, appStateSubject } from './appState';
import { bootstrap } from './bootstrap';
import { wrapper } from './WrapperElement';
import { person } from './PersonElement';
import { div, h1 } from './BasicElementsFactory';
import { testElement } from './TestElement';
import { testState, testStateSubject, testState$ } from './TestState';

const appRoot = document.getElementById('app');
const store$ = new BehaviorSubject(appState());

const app = testElement(testState);
        // div([
        //     h1({class:'red'},[
        //         'Neki Veliki naslov',
        //         div('div usred naslova'),
        //         'Nastavak naslova',
        //     ]).onClick(() => console.log("klikn'o si na heder. bravo.")),
        //     wrapper(nameSelector),
        //     person(getState),
        //     div({class: 'red'}, [
        //         'html',
        //         div('izmedju'),
        //         'opaa',
        //     ]),
        //     div('Ovaj div ima samo text')
        // ]);

bootstrap(appRoot, app, testState$);

window.store = testStateSubject;