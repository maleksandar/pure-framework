import { div } from './DivElement';
import { text } from './TextElement';
import { appState } from './appState';
import { StatefullElement } from './StatefullElement';
class CustomElement extends StatefullElement<string> {
    constructor(private selector: string) {
        super();
    }
    get state() {
        return appState[this.selector];
    }
    template() {
        return div([text(this.state)]);
    }
}

export function custom($state) {
    return new CustomElement($state);
}