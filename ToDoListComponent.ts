import { Component, componentFactory } from "./core";
import { button, div, input, span } from "./htmlElements";

import { store, ToDoState } from "./store";

class ToDoListComponent extends Component<ToDoState> {
  template() {
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
