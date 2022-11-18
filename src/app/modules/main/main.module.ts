import { MainComponent } from './../../components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
