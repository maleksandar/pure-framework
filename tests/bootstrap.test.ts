/**
 * @jest-environment jsdom
 */

import { bootstrap, Component, componentFactory, Store } from "../core";
import { TestComponent, testElement } from "./testComponent";
import { TestStateModel } from "./testState";
import { JSDOM } from 'jsdom';

let testState: Store<TestStateModel>;
let app: TestComponent;
beforeEach(() => {
  const DEFAULT_HTML = `<html><body><div id='test'></div></body></html>`;
  global.document = (new JSDOM(DEFAULT_HTML)) as unknown as Document;

  testState = new Store<TestStateModel>({
    value: '0',
    leftChild: {
      value: '01',
      leftChild: {
        value: '001'
      },
      rightChild: {
        value: '002'
      }
    },
    rightChild: {
      value: '02'
    }
  });

  app = testElement(() => testState.state); 
})

describe('bootstrap: ', () => {
  test('app is rerendered every time the state is changed', () => {
    let mockAppFactory = () => ({ render: jest.fn() })
    let domNode = { appendChild: jest.fn() }
    let mockApp = bootstrap<TestStateModel>(domNode as unknown as HTMLElement, mockAppFactory as unknown as (state: () => TestStateModel) => Component<TestStateModel>, testState);
  
    expect(mockApp.render).toHaveBeenCalledTimes(1);
    testState.updateState({value: '1'});
    testState.updateState({value: '2'});
  
  
    expect(mockApp.render).toHaveBeenCalledTimes(3);
  
    
  });
  
  test('the subtree in which there is no state change reuses the old dom node', () => {
    let domNode = document.getElementById('test')
    bootstrap(domNode, testElement, testState);
    let leftChildBeforeStateUpdate = app.leftChild;
    let rightChildBeforeStateUpdate = app.rightChild;
  
    testState.updateState({rightChild: {value: '42'}});
    let leftChildAfterStateUpdate = app.leftChild;
    let rightChildAfterStateUpdate = app.rightChild;
  
    expect(leftChildBeforeStateUpdate === leftChildAfterStateUpdate).toBeTruthy();
    expect(rightChildBeforeStateUpdate === rightChildAfterStateUpdate).toBeFalsy();
  });

})

