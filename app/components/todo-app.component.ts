import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';
import {TodoService} from "../services/todo.srv";
@Component({
  selector: 'todo-app',
  template:
    `<todo-input></todo-input>
     <todo-list></todo-list>
    `,
  directives: [<any>TodoInputComponent, <any>TodoListComponent]
})
export class TodoAppComponent {

}
