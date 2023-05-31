import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BicycleServiceComponent } from './our-service/bicycle-service/bicycle-service.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { PlaceServiceComponent } from './our-service/place-service/place-service.component';
import { RentServiceComponent } from './our-service/rent-service/rent-service.component';
import {SuccessHelpComponent} from './success-help/success-help.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,data: { title: 'صفحه اصلی' }
  }, {
    path: 'services',
    component: OurServiceComponent,
    data: { title: 'خدمات' }
  },
  {
    path: 'submit-help',
    component: SuccessHelpComponent,
    data: { title: 'موفقیت آمیز' }
  },
  {
    path: 'rentplace',
    component: PlaceServiceComponent,
    data: { title: 'اجاره انبار' }
  },
  {
    path: 'rentbicycle',
    component: RentServiceComponent,
    data: { title: 'اجاره دوچرخه' }
  },
  {
    path: 'serviceb',
    component: BicycleServiceComponent,
    data: { title: ' سرویس دوچرخه' } 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full',  data: { title: 'صفحه اصلی' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
