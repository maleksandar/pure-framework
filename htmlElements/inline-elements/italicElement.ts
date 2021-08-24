import { InlineElement } from './inlineElement';
import { TextElement } from './textElement';

export class ItalicElement extends InlineElement {
  domElement: HTMLHeadingElement;
  constructor(protected attributes: {}, protected _children: (InlineElement| TextElement)[]) {
      super(attributes, _children, 'i')
  }
}
