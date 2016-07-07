import { Component } from '@angular/core';
import { TodoAppComponent } from './todo-app.component'
@Component({
  selector: 'main-app',
  template: `
  <h1>TODO App</h1>
  <todo-app></todo-app>`,
  directives: <Array<any>>[TodoAppComponent]
})
export class AppComponent { }
