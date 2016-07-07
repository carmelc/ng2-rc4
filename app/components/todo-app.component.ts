import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
@Component({
  selector: 'todo-app',
  template: `<todo-input (onAdd)="onAdd($event)"></todo-input>`,
  directives: [<any>TodoInputComponent]
})
export class TodoAppComponent {
  onAdd(value) {
    console.log('parent component received', value);
  }
}
