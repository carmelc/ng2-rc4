import { Component, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'todo-list',
  template:
    `
    <ul>
     <li *ngFor="let todo of todos">{{todo.value}}</li>
    </ul>
    `
})
export class TodoListComponent {
  @Input() todos;
}
