import { bootstrap } from './core';
import { todoList } from './ToDoListComponent';
import { store as todoStore } from './todo.store';
import { store as personStore } from './person.store';
import { person } from './PersonElement';

const todoDomRoot = document.getElementById('todoApp');
const todoApp = todoList(() => todoStore.state);
bootstrap(todoDomRoot, todoApp, todoStore.state$);



// const personDomRoot = document.getElementById('personApp');
// const personApp = person(() => personStore.state);
// bootstrap(personDomRoot, personApp, personStore.state$);