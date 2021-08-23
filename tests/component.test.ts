/**
 * @jest-environment jsdom
 */
import { bootstrap } from "../core";
import { Component } from "../core/Component";
import { FunctionalElement } from "../core/FunctionalElement";
import { div } from "../htmlElements/block-elements";
import { JSDOM } from 'jsdom';
import { BehaviorSubject, Observable } from "rxjs";

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

  let domRoot = document.body;
  bootstrap<number>(domRoot, c, new BehaviorSubject<number>(1))

  let event = new Event('click');
  c.domElement.dispatchEvent(event);

  expect(callback).toHaveBeenLastCalledWith(event);
})