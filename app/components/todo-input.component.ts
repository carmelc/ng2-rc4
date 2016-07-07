import { Component } from '@angular/core';
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' [(ngModel)]="value"/>
    <button type="button" (click)="onAdd()">Add</button>
    <div>{{value}}</div>
    `
})
export class TodoInputComponent {
  value = 'please provide a value';

  onAdd() {
    console.log('value is:\'', this.value, '\'');
  }
}
