import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { run } from 'node:test';
@Component({
  selector: 'app-success-help',
  templateUrl: './success-help.component.html',
  styleUrls: ['./success-help.component.css'],
})
export class SuccessHelpComponent {
  progress: string = 'درحال اجرا';
  sendToSuporter: string = 'درحال ارسال اطلاعات به پشتیبانی';
  btnsubject: string = 'لغو';
  cansel() {
    if (this.btnsubject === 'بازگشت') {
      //it causes to disable cansel method
    } else process.exit();
  } //it causes to doesn't send information to server
  settimeout = setTimeout(() => {
    this.progress = 'با موفقیت انجام شد';
    this.sendToSuporter = 'جهت اطلاعات تکمیلی با شما تماس گرفته خواهد شد';
    this.btnsubject = 'بازگشت';
  }, 3000); //it changes information after 3 seconds
  constructor() {}
}
