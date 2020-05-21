import { div } from './DivElement';
import { text } from './TextElement';
import { appState } from './appState';
import { StatefullElement } from './StatefullElement';
class CustomElement extends StatefullElement<string> {
    constructor(private selector: string) {
        super(selector);
    }
    get inputState() {
        return appState[this.selector];
    }
    template() {
        return div([text(this.inputState)]);
    }
}

// export function custom($state) {
//     return new CustomElement($state);
// }