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
    this.state.todoList.unshift({text, done: false})
    store.updateState(this.state);
  }

  private todoHeader() {
    const AddTaskBtnAttributes = {
      class: 'non-active',
    }

    const todoInput = inputText({ name: 'listItem', id: 'listInput', placeholder:"Add your new todo" })
      .on('keyup', () => {
        let userEnteredValue = todoInput.domElement.value;

        if(userEnteredValue.trim() !== ''){
          AddTaskBtnAttributes.class = 'active';

        } else {
          AddTaskBtnAttributes.class = 'not-active';
        }
        addTaskButton.forceReRender();
    });
    const addTaskButton = button(AddTaskBtnAttributes, [italic({class:'fas fa-plus'}, [])]).on('click', () => {
      console.log('adding todo item')
      this.addTodoItem(todoInput.domElement.value);
    });
    
    return [
      header('TODO'),
      div({class:'inputField'},[
        todoInput,
        addTaskButton
      ])
    ];
  }

  private todoSegment() {
      return ul({ class: 'todoList' },[
          //<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
        ...this.state.todoList.filter(item => !item.done)
          .map((item) => li([
            item.text,
            span({ class: 'icon' }, [
              italic({ class: 'fas fa-trash' }, [])
            ]).on('click', () => {
              console.log('remove');
              let index = this.state.todoList.findIndex(x => x === item);
              this.state.todoList.splice(index, 1);
              store.updateState(this.state)
            })
          ]))
      ]);
  }

  private doneSegment() {
      return div({class: 'footer'}, [
        span(["You have ", span({class:'pendingTasks'},[`${this.state.todoList.filter(t => !t.done).length}`, ' pending tasks'])]),
        button(['Clear All']).on('click', (event) => {
          store.updateState({todoList: []});
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
