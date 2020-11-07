import { NgModule } from '@angular/core';
import { NbAccordionModule, NbCardModule, NbMenuModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NbTabsetModule,
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbAccordionModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
