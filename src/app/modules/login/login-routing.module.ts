import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
