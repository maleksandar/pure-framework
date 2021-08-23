import { Component, componentFactory } from "./core";
import { button, div, header, inputText, italic, li, span, ul } from "./htmlElements";

import { store, ToDoState } from "./todo.store";

class ToDoListComponent extends Component<ToDoState> {
  template() {
    return div({ class: 'wrapper' }, [
      ...this.todoHeader(),
      this.todoSegment(),
      this.doneSegment()
    ]);
  }

  private addTodoItem(text: string) {
    this.state.todoList.push({text, done: false})
    store.updateState(this.state);
  }

  private todoHeader() {
    const todoInput = inputText({ name: 'listItem', id: 'listInput', placeholder:"Add your new todo" })
      .on('keyup', () => {
        console.log('keyup!')

      });
    
    return [
      header('TODO'),
      div({class:'inputField'},[
        todoInput,
        button({class: `active`},['+']).on('click', () => {
          console.log('adding todo item')
          this.addTodoItem(todoInput.domElement.value);
        }),
      ])
    ];
  }

  private todoSegment() {
      return ul({ class: 'todoList' },[
        ...this.state.todoList.filter(item => !item.done)
          .map((item) => li(item.text))
      ]);
  }

  private doneSegment() {
      return div({class: 'footer'}, [
        span(["You have ", span({class:'pendingTasks'},[`${this.state.todoList.filter(t => !t.done).length}`, ' pending tasks'])]),
        button(['Clear All']).on('click', (event) => {

        })
      // ...this.state.todoList.filter(item => item.done).map(item => this.doneItem(item))
      ]);
  }

  private setToDone(item) {
    let newState = this.state;

    let index = newState.todoList.findIndex(x => x.text === item.text);
    newState.todoList[index].done = true;

    store.updateState(newState);
  }
}

export const todoList = componentFactory<ToDoListComponent, ToDoState>(ToDoListComponent);
