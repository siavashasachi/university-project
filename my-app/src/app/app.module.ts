import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AbstractControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlidesComponent } from './slides/slides.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { FooterComponent } from './footer/footer.component';
import { NgToastModule } from 'ng-angular-popup';
import { ModalComponent } from './_components/modal.component';
import { SuccessHelpComponent } from './success-help/success-help.component';
import { Router, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { OurServiceComponent } from './our-service/our-service.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { BicycleServiceComponent } from './our-service/bicycle-service/bicycle-service.component';
import { RentServiceComponent } from './our-service/rent-service/rent-service.component';
import { PlaceServiceComponent } from './our-service/place-service/place-service.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SlidesComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent,
    ModalComponent,
    SuccessHelpComponent,
    HomepageComponent,
    OurServiceComponent,
    BicycleServiceComponent,
    RentServiceComponent,
    PlaceServiceComponent,
  ],
  imports: [

    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgImageSliderModule,
    NgToastModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    HttpClientModule,
    RouterModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
  ],
  providers: [
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
