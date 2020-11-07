import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course/create-course.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'student/profile',
        component: StudentProfileComponent,
      },

      {
        path: 'student/home',
        component: StudentHomeComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'create-course',
        component: CreateCourseComponent,
      },

      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbSelectModule,
    NbRadioModule,
    NbButtonModule,
    NbCheckboxModule,
    NbListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    NbCardModule,
    NbTabsetModule,
    NbAccordionModule,
  ],
  exports: [RouterModule],
  declarations: [
    CoursesComponent,
    RegistrationComponent,
    LoginComponent,
    AdminComponent,
    ContactUsComponent,
    StudentProfileComponent,
    StudentHomeComponent,
    CreateCourseComponent,
  ],
})
export class PagesRoutingModule {}
