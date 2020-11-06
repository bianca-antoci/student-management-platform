import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { CoursesComponent } from "./courses/courses.component";
import { NbButtonModule, NbCardModule, NbLayoutModule } from "@nebular/theme";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "courses",
        component: CoursesComponent,
      },
      {
        path: "registration",
        component: RegistrationComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "admin",
        component: AdminComponent,
      },
      {
        path: "contact-us",
        component: ContactUsComponent,
      },


      {
        path: "",
        redirectTo: "courses",
        pathMatch: "full",
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
  ],
  exports: [RouterModule],
  declarations: [
    CoursesComponent,
    RegistrationComponent,
    LoginComponent,
    AdminComponent,
    ContactUsComponent,
  ],
})
export class PagesRoutingModule {}
