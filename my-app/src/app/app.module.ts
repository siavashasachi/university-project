import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlidesComponent } from './slides/slides.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavigationComponent, SlidesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgImageSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
