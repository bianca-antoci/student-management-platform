import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'courses',
      component: CoursesComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    }, 
    {
      path: 'login',
      component: LoginComponent,
    },
       {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule],
  exports: [RouterModule],
  declarations: [
    CoursesComponent,
    RegistrationComponent,
    LoginComponent,
  ],
})
export class PagesRoutingModule {
}
