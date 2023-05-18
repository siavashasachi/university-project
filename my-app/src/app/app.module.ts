import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import {SuccessHelpComponent} from './success-help/success-help.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { OurServiceComponent } from './our-service/our-service.component';

@NgModule({
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
  ],
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule,
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
