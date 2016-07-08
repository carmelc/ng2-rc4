import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';
@Component({
  selector: 'todo-app',
  template:
    `
     <todo-input></todo-input>
     <h2>items</h2>
     <div class="complete">example todo</div>
     <todo-list></todo-list>
    `,
  directives: [<any>TodoInputComponent, <any>TodoListComponent]
})
export class TodoAppComponent {

}
