import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';
@Component({
  selector: 'todo-app',
  template:
    `<todo-input (onAdd)="onAdd($event)"></todo-input>
     <todo-list [todos]="todos"></todo-list>
    `,
  directives: [<any>TodoInputComponent, <any>TodoListComponent]
})
export class TodoAppComponent {
  todos = [];

  onAdd(value) {
    this.todos.push({value});
  }
}
