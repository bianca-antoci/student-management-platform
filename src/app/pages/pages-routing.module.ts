import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'courses',
      component: CoursesComponent,
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
    CoursesComponent
  ],
})
export class PagesRoutingModule {
}
