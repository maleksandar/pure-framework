/**
 * @jest-environment jsdom
 */

import { bootstrap, Component, componentFactory, Store } from "../core";
import { TestComponent, testElement } from "./testComponent";
import { TestStateModel } from "./testState";

let testState: Store<TestStateModel>;
let app: TestComponent;
beforeEach(() => {
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
    let mockApp = { render: jest.fn() }
    let domNode = { appendChild: jest.fn() }
    bootstrap(domNode, mockApp, testState.state$);
  
    expect(mockApp.render).toHaveBeenCalledTimes(1);
    testState.updateState({value: '1'});
    testState.updateState({value: '2'});
  
  
    expect(mockApp.render).toHaveBeenCalledTimes(3);
  
    
  });
  
  test('the subtree in which there is no state change reuses the old dom node', () => {
    let domNode = { appendChild: jest.fn() }
    bootstrap(domNode, app, testState.state$);
    let leftChildBeforeStateUpdate = app.leftChild;
    let rightChildBeforeStateUpdate = app.rightChild;
  
    testState.updateState({rightChild: {value: '42'}});
    let leftChildAfterStateUpdate = app.leftChild;
    let rightChildAfterStateUpdate = app.rightChild;
  
    expect(leftChildBeforeStateUpdate === leftChildAfterStateUpdate).toBeTruthy();
    expect(rightChildBeforeStateUpdate === rightChildAfterStateUpdate).toBeFalsy();
  });

})

