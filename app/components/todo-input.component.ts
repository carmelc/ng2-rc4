import { Component } from '@angular/core';
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' #todoInput />
    <button type="button" (contextmenu)="onAdd(todoInput.value, $event)">Add</button>
    `
})
export class TodoInputComponent {
  onAdd(value, event) {
    event.preventDefault();
    console.log(value)
  }
}
