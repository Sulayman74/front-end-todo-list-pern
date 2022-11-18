import { RouterModule, Routes } from '@angular/router';

import { HelperResolver } from 'src/app/resolvers/helper.resolver';
import { MainComponent } from './../../components/main/main.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: "", component: MainComponent, resolve: { todos: HelperResolver },
    children: [
      {
        path: "todo-list", component: TodoListComponent,
        children: [
          { path: "todo", component: TodoComponent, resolve: { todos: HelperResolver } }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
