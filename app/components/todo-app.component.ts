import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
@Component({
  selector: 'todo-app',
  template:
    `<todo-input (onAdd)="onAdd($event)"></todo-input>
     <ul>
      <li *ngFor="let todo of todos">{{todo.value}}</li>
     </ul>
    `,
  directives: [<any>TodoInputComponent]
})
export class TodoAppComponent {
  todos = [];

  onAdd(value) {
    this.todos.push({value});
  }
}
