import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
