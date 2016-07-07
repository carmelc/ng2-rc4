import { Component } from '@angular/core';
import {TodoService} from "../services/todo.srv";
@Component({
  selector: 'todo-list',
  template:
    `
    <ul>
     <li *ngFor="let todo of getTodos()" [ngClass]="{'complete': todoService.isComplete(todo)}">
      <span>{{todo.value}}</span><button type="button" (click)="todoService.markComplete(todo)">Done</button>
     </li>
    </ul>
    `
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  getTodos() {
    return this.todoService.todos;
  }
}
