import { RouterModule, Routes } from '@angular/router';

import { HelperResolver } from 'src/app/resolvers/helper.resolver';
import { MainComponent } from './../../components/main/main.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { UsersResolver } from './../../resolvers/users.resolver';

const routes: Routes = [
  {
    path: "main", component: MainComponent, resolve: { todos: HelperResolver, users: UsersResolver },
    children: [
      {
        path: "todo-list", component: TodoListComponent,
        children: [
          { path: "todo", component: TodoComponent, }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
