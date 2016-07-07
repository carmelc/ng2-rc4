import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app';
import {TodoService} from "./services/todo.srv";
bootstrap(AppComponent, [TodoService]);
