import { Component, Input } from '@angular/core';
import { MaxLengthValidator, MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'app-bicycle-service',
  templateUrl: './bicycle-service.component.html',
  styleUrls: ['./bicycle-service.component.css'],
})
export class BicycleServiceComponent {
  @Input()
  appInputMaxLength!: number;
  myBorder:string='';

  constructor(){}
}
