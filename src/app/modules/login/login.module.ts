import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
