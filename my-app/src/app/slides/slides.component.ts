import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent {

  imageObject: Array<object> = [{
    image: '../assets/images/slider-images/1.jpg',
    thumbImage: '../assets/images/slider-images/1.jpg',
    alt: 'alt of image',
    title: 'با دوچرخه به مقصد برسید و از مسیر لذت ببرید',
    id:1
  }, {
    image: '../assets/images/slider-images/2.jpg',
    thumbImage: '../assets/images/slider-images/1.jpg',
    title: 'با دوچرخه به مقصد برسید و از مسیر لذت ببرید',
    alt: 'Image alt'
  }, {
    image: '../assets/images/slider-images/3.jpg',
    thumbImage: '../assets/images/slider-images/1.jpg',
    title: 'با دوچرخه به مقصد برسید و از مسیر لذت ببرید',
    alt: 'Image alt'
  }
  ];
}
