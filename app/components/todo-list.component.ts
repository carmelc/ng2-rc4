import { Component } from '@angular/core';
import {TodoService} from "../services/todo.srv";
@Component({
  selector: 'todo-list',
  template:
    `
    <ul>
     <li *ngFor="let todo of getTodos()">{{todo.value}}</li>
    </ul>
    `
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  getTodos() {
    return this.todoService.todos;
  }
}
