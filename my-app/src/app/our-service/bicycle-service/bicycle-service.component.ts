import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-bicycle-service',
  templateUrl: './bicycle-service.component.html',
  styleUrls: ['./bicycle-service.component.css'],
})
export class BicycleServiceComponent {
  ErrorMessage = '';
  ErrorNumber='';
  ErrorControler='';
  ErrorControlerN='';
  phoneNumber:number=913;
  constructor() {
    if (this.phoneNumber.toLocaleString().length> 11) {
      this.ErrorNumber = 'شماره تلفن  شما بیشتر از حد مجاز است';
      this.ErrorControlerN=`color:var(--error-message);`;
    } else if (this.phoneNumber < 11) {
      this.ErrorNumber = 'شماره تلفن شما کمتر از حد مجاز است';
      this.ErrorControlerN=`color:var(--error-message);`;
    } else if (this.phoneNumber=== 11) {
      this.ErrorNumber= 'دارای اعتبار';
      this.ErrorControlerN=`color:var(--btn-success);`;
    }
  }
  isValid(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 10) {
      this.ErrorMessage = 'کد ملی شما بیشتر از حد مجاز است';
      this.ErrorControler=`color:var(--error-message);`;
    } else if ((<HTMLInputElement>event.target).value.length < 10) {
      this.ErrorMessage = 'کد ملی شما کمتر از حد مجاز است';
      this.ErrorControler=`color:var(--error-message);`;
    } else if ((<HTMLInputElement>event.target).value.length === 10) {
      this.ErrorMessage = 'دارای اعتبار';
      this.ErrorControler=`color:var(--btn-success);`;
    }
  }
  

  

}
