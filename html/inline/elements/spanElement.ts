import { InlineElement } from './inlineElement';
import { TextElement } from './textElement';

export class SpanElement extends InlineElement {
  domElement: HTMLHeadingElement;
  constructor(protected attributes: {}, protected _children: InlineElement[]) {
      super(attributes, _children, 'span')
  }
}
