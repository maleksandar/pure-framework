import { bootstrap } from './core';
import { todoList } from './ToDoListComponent';
import { store } from './store';

const domRoot = document.getElementById('app');
const app = todoList(() => store.state)

bootstrap(domRoot, app, store.state$);

