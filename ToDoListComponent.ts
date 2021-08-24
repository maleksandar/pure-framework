import { Component, componentFactory } from "./core";
import { button, div, header, inputText, italic, li, span, ul } from "./htmlElements";
import { BlockElement } from "./htmlElements/block-elements/BlockElement";
import { ButtonElement } from "./htmlElements/block-elements/ButtonElement";

import { store, ToDoState } from "./todo.store";

class ToDoListComponent extends Component<ToDoState> {
  template() {
    return div({ class: 'wrapper' }, [
      ...this.todoHeader(),
      this.todoSegment(),
      this.doneSegment()
    ]);
  }

  private addTaskBtnAttributes = {
    class: 'not-active',
    disabled: true
  }

  private removeAllTasksButtonAtributes = {
    class: this.state.todoList.length ? 'active': 'not-active',
    disabled: this.state.todoList.length? false : true
  }

  private addTodoItem(text: string) {
    this.state.todoList.unshift(text);

    this.addTaskBtnAttributes = {
      class: 'not-active',
      disabled: true
    };

    this.removeAllTasksButtonAtributes = {
      class: 'active',
      disabled: false
    };
    store.updateState(this.state);
  }

  private todoHeader(): BlockElement[] {
    const todoInput = inputText({ name: 'listItem', id: 'listInput', placeholder:"Add your new todo" })
      .on('keyup', () => {
        this.updateAddTaskBtnAttributes(todoInput.domElement.value)
        addTaskButton.forceReRender();
    });
    const addTaskButton = button(this.addTaskBtnAttributes, [italic({class:'fas fa-plus'}, [])]).on('click', () => {
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

  private updateAddTaskBtnAttributes(userEnteredValue: string) {
    if (userEnteredValue.trim() !== '') {
      this.addTaskBtnAttributes.class = 'active';
      this.addTaskBtnAttributes.disabled = false;

    } else {
      this.addTaskBtnAttributes.class = 'not-active';
      this.addTaskBtnAttributes.disabled = true;
    }
  }

  private todoSegment() {
      return ul({ class: 'todoList' },[
        ...this.state.todoList.map((item) =>
          li([
            item,
            span({ class: 'icon' }, [
              italic({ class: 'fas fa-trash' }, [])
            ]).on('click', () => {
              let index = this.state.todoList.findIndex(x => x === item);
              this.state.todoList.splice(index, 1);
              store.updateState(this.state)
            })
          ]))
      ]);
  }

  private doneSegment() {
      const clearBtn = button(this.removeAllTasksButtonAtributes, ['Clear All']);

      return div({class: 'footer'}, [
        span([
          "You have ",
          span({class:'pendingTasks'}, [
            `${this.state.todoList.length}`,
            ' pending tasks'
          ])
        ]),
        clearBtn.on('click', () => this.removeAllTasks(clearBtn))
      ]);
  }

  private removeAllTasks(clearBtn: ButtonElement) {
    this.removeAllTasksButtonAtributes.class = 'not-active';
    this.removeAllTasksButtonAtributes.disabled = true;
    store.updateState({todoList: []});
    clearBtn.forceReRender();
  }
}

export const todoList = componentFactory<ToDoListComponent, ToDoState>(ToDoListComponent);
