import { Component, componentFactory } from "../core";
import { FunctionalElement } from "../core/FunctionalElement";
import { div } from "../html";
import { TestStateModel } from "./testState";

export class TestComponent extends Component<TestStateModel> {
  template(): FunctionalElement {
    return div({class: 'content'},[
      `${this.state.value}`,
      ...this.renderChildren()
    ]);
  }

  get leftChild() {
    return this.children[1];
  }

  get rightChild() {
    return this.children[2];
  }

  renderChildren() {
    return [
      this.state.leftChild? testElement(() => this.state.leftChild): null,
      this.state.rightChild? testElement(() => this.state.rightChild): null,
    ]
  }
  
}

export const testElement = componentFactory<TestComponent, TestStateModel>(TestComponent); 
