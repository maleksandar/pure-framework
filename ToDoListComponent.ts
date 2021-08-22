import { Store } from "./core";
import { Component } from "./core/Component";
import { componentFactory } from "./core/ComponentFactory";
import { FunctionalElement } from "./core/FunctionalElement";
import { button, div } from "./htmlElements/block-elements";
import { input } from "./htmlElements/form-elements";
import { span } from "./htmlElements/inline-elements";
import { store, ToDoState } from "./store";


class ToDoListComponent extends Component<ToDoState> {
  template(): FunctionalElement {

    return div({ class: 'page-container' },[
      ...this.todoHeader(),
      ...this.todoSegment(),
      ...this.doneSegment()
  ]);
  }

  private addTodoItem(text: string) {
    this.state.todoList.push({text, done: false})
    store.updateState(this.state);
  }

  private todoHeader() {
    const todoInput = input({ name: 'listItem', id: 'listInput' });
    
    return [
      span('TODO'),
      todoInput,
      button('Add TODO').onClick(() => {
        this.addTodoItem(todoInput.domElement.value);
      }),
    ];
  }

  private todoSegment() {
    return [
      div('TODO:'),
      ...this.state.todoList.filter(item => !item.done)
        .map((item) => this.todoItem(item))
    ]
  }

  private doneSegment() {
    return [
      div('DONE:'),
      ...this.state.todoList.filter(item => item.done).map(item => this.doneItem(item))
    ];
  }

  private todoItem(item) {
    return div({ class: 'todo-item'}, [span(item.text), button([span('x')])]).onClick(() => {
      this.setToDone(item)
    });
  }

  private doneItem(item) {
    return div({ class: 'done-item'}, [span(item.text)])
  }

  private setToDone(item) {
    let newState = this.state;

    let index = newState.todoList.findIndex(x => x.text === item.text);
    newState.todoList[index].done = true;

    store.updateState(newState);
  }
}

export const todoList = componentFactory(ToDoListComponent);
