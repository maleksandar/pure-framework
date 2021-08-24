import { Store } from "./core";


export interface ToDoState {
  todoList: string[];
}

export const store = new Store<ToDoState>({
  todoList: [
      'first',
      'second',
      'third',
      'forth',
  ]
});
