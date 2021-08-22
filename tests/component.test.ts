import { Component } from "../core/Component";
import { FunctionalElement } from "../core/FunctionalElement";
import { div } from "../htmlElements/block-elements";

class ConcreteComponent extends Component<number> {
  template() {
    return div(['Value:', `${this.state}`])
  }
}

test('Component tests', () => {
  let c = new ConcreteComponent(() => 1);
  expect(c.children.length).toBe(2);

});