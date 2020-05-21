import { BehaviorSubject, of, from } from 'rxjs';
import { div } from './DivElement';
import { appState, nameSelector, appState$, getState } from './appState';
import { bootstrap } from './bootstrap';
import { text } from './TextElement';
import { wrapper } from './WrapperElement';
import { er } from './ExampleReactiveElement';
import { map } from 'rxjs/operators';
import { person } from './PersonElement';

const appRoot = document.getElementById('app');
const store$ = new BehaviorSubject(appState);
// window.state = appState;
// window.getState = () => { return window.state; }
// const staticState = {firstName: "Nepromenljiva", lastName: "Componenta"};
const app =
    div([
    //     div([
    //     ]),
    //     div({ class: 'red' }, [
    //         text('Hello red'),

    //     ])  .onClick(() => console.log('click!')),
        wrapper(nameSelector),

        wrapper(() => 'nepromenljivo'),
        person(getState),

        // er(store$.asObservable().pipe(map(x => x.firstName)))
    ]);

bootstrap(appRoot, app, appState$);

// function functionalComponent() {
//     return div(
//         ['firstName', 'lastName'].map(prop => custom(prop)),
//     );
// }

// appState.firstName = 'Zoran';
// store$.next({...appState, firstName: 'Zoran' });

window.store = store$;