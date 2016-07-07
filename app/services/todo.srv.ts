import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  todos: Array<TodoItem> = [];

  addTodo(value) {
    this.todos.push({value, isDone: false});
  }
}

export interface TodoItem {
  value: string;
  isDone: boolean;
}
