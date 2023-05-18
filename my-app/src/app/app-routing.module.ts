import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { Section2Component } from './section2/section2.component';
import {SuccessHelpComponent} from './success-help/success-help.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  }, {
    path: 'help',
    component: Section2Component,
  }, {
    path: 'services',
    component: OurServiceComponent,
  },
  {
    path: 'submit-help',
    component: SuccessHelpComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
