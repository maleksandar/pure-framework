import { InlineElement } from './inlineElement';

export class AElement extends InlineElement {
  constructor(protected attributes: {}, protected _children: InlineElement[]) {
      super(attributes, _children, 'a')
  }
}
