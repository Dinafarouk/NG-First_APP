import { Component } from '@angular/core';
import { DBservices } from './db.services';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {

  courseName="Angular 6";
  imageUrl ="https://itshareacademy.com/wp-content/uploads/2017/04/Logo_ITShare-99482-1.jpg";

  courses: Array<string>;

  constructor(TOTO: DBservices) {
    // this.courses = new Array<string>();

    this.courses = TOTO.getAll();
  }
} 