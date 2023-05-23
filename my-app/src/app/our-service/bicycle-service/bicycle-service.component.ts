import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-bicycle-service',
  templateUrl: './bicycle-service.component.html',
  styleUrls: ['./bicycle-service.component.css'],
})
export class BicycleServiceComponent {
  name = new FormControl('');
  identifyCode = new FormControl(Number);
 lastName=new FormControl('');
 phoneNumber=new FormControl(Number);
  constructor(){}
}
