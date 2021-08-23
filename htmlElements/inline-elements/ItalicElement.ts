import { InlineElement } from './InlineElement';
import { TextElement } from './TextElement';

export class ItalicElement extends InlineElement {
  domElement: HTMLHeadingElement;
  constructor(protected attributes: {}, protected _children: (InlineElement| TextElement)[]) {
      super(attributes, _children, 'i')
  }
}
