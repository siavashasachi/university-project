import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-bicycle-service',
  templateUrl: './bicycle-service.component.html',
  styleUrls: ['./bicycle-service.component.css'],
})
export class BicycleServiceComponent {
  ErrorMessage = '';
  ErrorControler='';
  constructor() {}
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
