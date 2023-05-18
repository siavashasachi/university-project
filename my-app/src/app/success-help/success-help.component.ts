import { Component } from '@angular/core';
@Component({
  selector: 'app-success-help',
  templateUrl: './success-help.component.html',
  styleUrls: ['./success-help.component.css'],
})
export class SuccessHelpComponent {
 progress:string='درحال اجرا';
 sendToSuporter:string='درحال ارسال اطلاعات به پشتیبانی';

 constructor(){

 }
cansel(){
process.exit()}//it causes to doesn't send information to server
// showSucess(): any = setTimeout(() => {
//   this.progress='ّبا موفقیت انجام شد';
//   this.sendToSuporter="جهت اطلاعات تکمیلی با شما تماس گرفته خواهد شد";
// }, 5000);
}
