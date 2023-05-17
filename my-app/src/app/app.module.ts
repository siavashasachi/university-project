import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { RouterModule } from '@angular/router';
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
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgImageSliderModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
