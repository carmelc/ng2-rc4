import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
@Component({
  selector: 'todo-app',
  template: `<todo-input></todo-input>`,
  directives: [<any>TodoInputComponent]
})
export class TodoAppComponent { }
