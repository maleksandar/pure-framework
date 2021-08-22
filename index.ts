import { AppState } from './appState';
import { bootstrap } from './core/bootstrap';
import { div, h1 } from './functional-templates/block-elements';
import { wrapper } from './WrapperElement';
import { person } from './PersonElement';
import { Store } from './core/store';
import { span } from './functional-templates/inline-elements';

const store = new Store<AppState>({
    firstName: 'Aleksandar',
    lastName: 'Milosavljevic',
    address: {
        street: 'VP',
        number: 56
    },
    additionalAddress: {
        street: 'VP',
        number: 56
    }
});

const domRoot = document.getElementById('app');
const app = 
        div([
            h1({class:'red'},[
                span(['neki tekst', span('neki novi')]),
                'Neki Veliki naslov',
                div('div usred naslova'),
                'Nastavak naslova',
            ]).onClick(() => {
                console.log("klikn'o si na heder. bravo.");
                store.updateState({lastName: "Petronijevic"})
            }),
            wrapper(() => store.state.firstName),
            person(() => store.state),
            div({class: 'red'}, [
                'html',
                div('izmedju'),
                'opaa',
            ]),
            div('Ovaj div ima samo text')
        ]);

bootstrap(domRoot, app, store.state$);

function updateFirstName(name: string) {
    store.updateState({firstName: name})
}

window.updateFirstName = updateFirstName;