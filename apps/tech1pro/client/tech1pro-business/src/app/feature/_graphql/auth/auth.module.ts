import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { UIModule } from '../../../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputModule } from '../_input/input.module';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'signin',
            component: SigninComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
          {
            path: 'add-user-account',
            component: RegisterComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    AuthComponent,
    RegisterComponent,
    SigninComponent
  ]
})
export class AuthModule { }
