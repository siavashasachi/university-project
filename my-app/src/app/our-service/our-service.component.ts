import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css'],
})
export class OurServiceComponent {
  services = [
    {
      src: '../assets/images/ourservice/place.jpg',
      alt: 'this is place for renting bycicles',
      header: 'اجاره دادن مکان نگه داری ',
      title:'اجاره انبار برای منطقه های پیشنهادی شهرداری' ,
    route:'/rentplace'   },
    {
      src: '../assets/images/ourservice/bycicle.jpg',
      alt: 'this is a bycicle',
      header: 'اجاره دادن دوچرخه',
      title: 'اجاره دادن دوچرخه مناسب به شهرداری ',
      route:'/rentbicycle'
    },
    {
      src: '../assets/images/ourservice/repair.jpg',
      alt: 'it repairs bycicle',
      header: 'سرویس دوچرخه',
      title: 'سرویس دوچرخه در نزدیکی انبارهای دوچرخه',
      route:'/serviceb'
    },
  ];
}
