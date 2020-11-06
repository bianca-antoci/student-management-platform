import { Component } from '@angular/core';

@Component({
  selector: 'ngx-courses',
  styleUrls: ['courses.component.scss'],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  courses = [
    {
      title: "CertHE in Skills",
      desc: "this is a test"
    },
    {
      title: "Health and Social Care",
      desc: "this is a test"
    }
  ];

  constructor() {

  }

  onJoinClick(course) {
    console.log(course)
  }
}
