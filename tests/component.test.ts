/**
 * @jest-environment jsdom
 */
import { bootstrap, componentFactory, Store } from "../core";
import { Component } from "../core/component";
import { FunctionalElement } from "../core/functionalElement";
import { div } from "../html/block";
import { JSDOM } from 'jsdom';
import { BehaviorSubject, Observable } from "rxjs";
import { coreElementFactory } from "../core/coreElementsFactory";
import { DivElement } from "../html/block/elements/divElement";
import { text } from "../html";

beforeEach(() => {
  const DEFAULT_HTML = `<html><body><div id="test"></div></body></html>`;

  global.document = (new JSDOM(DEFAULT_HTML)) as unknown as Document;
})
class ConcreteComponent extends Component<number> {
  template() {
    return div(['Value:', `${this.state}`])
  }
}

test('Component tests', () => {
  let c = new ConcreteComponent(() => 1);
  expect(c.children.length).toBe(2);

});


test('click handlers work', () => {
  let callback = jest.fn();
  let c = (new ConcreteComponent(() => 1)).on('click', callback);
  let componentFactory = (state: () => {}) => c;

  let domRoot = document.body;
  bootstrap<number>(domRoot, componentFactory, new Store<number>(12))

  let event = new Event('click');
  c.domElement.dispatchEvent(event);

  expect(callback).toHaveBeenLastCalledWith(event);
});

test('coreElementsFactory works', () => {
  let div = coreElementFactory<FunctionalElement, FunctionalElement>(DivElement);
  let divElement = div([text("text")]);

  divElement.render();
});

test('componentFactory works', () => {
  let cF = componentFactory<ConcreteComponent, number>(ConcreteComponent);
  let cE = cF(() => 1);

  cE.render();
});