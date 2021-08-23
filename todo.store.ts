import { Store } from "./core";

export interface ToDoItem {
  text: string;
  done: boolean;
}

export interface ToDoState {
  todoList: ToDoItem[];
}

export const store = new Store<ToDoState>({
  todoList: [
      { text: 'first', done: false },
      { text: 'second', done: false },
      { text: 'third', done: false },
      { text: 'forth', done: true },
  ]
});
