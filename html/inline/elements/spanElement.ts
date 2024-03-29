import { InlineElement } from './inlineElement';

export class SpanElement extends InlineElement {
  constructor(protected attributes: {}, protected _children: InlineElement[]) {
      super(attributes, _children, 'span')
  }
}
