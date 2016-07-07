import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  todos: Array<TodoItem> = [];

  addTodo(value) {
    this.todos.push({value, isDone: false});
  }

  markComplete(item: TodoItem) {
    item.isDone = true;
  }

  isComplete(item: TodoItem) {
    return item.isDone;
  }
}

export interface TodoItem {
  value: string;
  isDone: boolean;
}
