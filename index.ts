import { bootstrap } from './core';
import { todoList } from './ToDoListComponent';
import { store } from './stores/todo.store';

bootstrap(document.getElementById('app'), todoList, store);
