import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "main", loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule) },
  { path: "login", loadChildren:()=> import("./modules/login/login.module").then(m=>m.LoginModule) },
  { path: "register", loadChildren:()=> import("./modules/register/register.module").then(m=>m.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
