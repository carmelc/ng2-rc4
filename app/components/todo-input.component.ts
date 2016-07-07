import { Component } from '@angular/core';
import {TodoService} from "../services/todo.srv";
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' [(ngModel)]="value"/>
    <button type="button" (click)="onAddClicked()">Add</button>
    `
})
export class TodoInputComponent {
  value = 'please provide a value';
  constructor(private todoService: TodoService) {}

  onAddClicked() {
    this.todoService.addTodo(this.value);
    this.value = '';
  }
}
