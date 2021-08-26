import { Store } from "../core";
import { ToDoState } from "../models";

export const store = new Store<ToDoState>({
  todoList: [
      'Kupi mleko',
      'Odvezi auto kod majstora',
      'Napiši master rad',
      'Odbrani master rad',
  ]
});
