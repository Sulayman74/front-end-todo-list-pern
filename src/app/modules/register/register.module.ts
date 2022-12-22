import { NgModule } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
