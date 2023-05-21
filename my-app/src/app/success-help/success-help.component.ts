import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-success-help',
  templateUrl: './success-help.component.html',
  styleUrls: ['./success-help.component.css'],
})
export class SuccessHelpComponent implements OnInit {
  mymode: ProgressBarMode = 'query';
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
    this.mymode='determinate'
  }, 3000); //it changes information after 3 seconds
  constructor() {}
  ngOnInit() {}
}
