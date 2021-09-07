import { InlineElement } from './inlineElement';

export class ItalicElement extends InlineElement {
  constructor(protected attributes: {}, protected _children: InlineElement[]) {
      super(attributes, _children, 'i')
  }
}
