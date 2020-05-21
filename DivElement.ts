import { FunctionalElement } from './FunctionalElement';
import { Observable } from 'rxjs';
import { BlockElement } from './BlockElement';

export class DivElement extends BlockElement {
    domElement: HTMLDivElement;
    constructor(protected attributes: {}, protected _children: FunctionalElement[]) {
        super(attributes, _children, 'div')
    }
}

// export function div(...args: [{}, FunctionalElement[]] | [FunctionalElement[]]) {
//     if (args.length === 2) {
//         return new DivElement(args[0], args[1]);
//     } else {
//         return new DivElement(null, args[0]);
//     }
// }