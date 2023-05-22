import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'دوچرخه-اصفهان';
  mymode: ProgressBarMode = 'query';
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
