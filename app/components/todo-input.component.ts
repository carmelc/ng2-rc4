import { Component } from '@angular/core';
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' #todoInput />
    <button type="button" (click)="onAdd(todoInput.value)">Add</button>
    `
})
export class TodoInputComponent {
  onAdd(value) {
    console.log(value)
  }
}
