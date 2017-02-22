import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
	

	// http://intra.plbformation.com/
	// 170197A
	lastId = 0;
	todos: Todo[] = [];

  constructor() { 
  	let todo1 = new Todo({
  		id:1,
  		title: "first todo"
  	});
  	let todo2 = new Todo({
  		id:2,
  		title: "Second todo"
  	});
  	this.todos.push(todo1);
  	this.todos.push(todo2);
  }

  addTodo(todo: Todo): TodoDataService {
  	if(!todo.id) {
  		todo.id = ++this.lastId;
  	}
  	this.todos.push(todo);
  	return this;
  };

  getAllTodos(): Todo[] {
  	return this.todos;
  }

}
