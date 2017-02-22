import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should acccept values in constructor', () => {
  	let todo = new Todo({
  		id: 1,
  		title: "First todo"
  	});
  	expect(todo.id).toEqual(1);
  	expect(todo.title).toEqual('First todo');
  });
  
});
