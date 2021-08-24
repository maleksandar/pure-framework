import { Store } from "../core";
import { ToDoState } from "../models";

export const store = new Store<ToDoState>({
  todoList: [
      'first',
      'second',
      'third',
      'forth',
  ]
});
