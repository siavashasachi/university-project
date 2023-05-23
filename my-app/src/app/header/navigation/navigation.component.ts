import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  implements OnInit{
  myvalue: number=0;
  mycolor:string='#fff';
  ErrorMessageNotFound:string='';
  ErrorDisplay:string='';
  ngOnInit() { this.router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      // Navigation is starting... show a loading spinner perhaps?
      this.myvalue=30;
      this.mycolor='#fff';//white
      this.ErrorDisplay='none';
    }
    if (event instanceof NavigationEnd) {
      // We've finished navigating
      this.myvalue=50;
      this.mycolor='rgb(0, 255, 34)';//green
      setTimeout(() => {
        this.myvalue=100;
      }, 1500);
      setTimeout(() => {
        this.myvalue=0;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      // something went wrong, log the error
      this.myvalue=100;
      this.mycolor='rgb(206, 34, 34)';//red
      this.ErrorMessageNotFound='صفحه مورد نظر یافت نشد با استفاده از منوی بالا به صفحه مورد نظر بازگردید';
      this.ErrorDisplay='display:block;'
    }
  });
}
constructor(private router: Router) {

}
}


