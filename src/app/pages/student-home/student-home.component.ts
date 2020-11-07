import { Component } from '@angular/core';

@Component({
  selector: 'ngx-student-home',
  styleUrls: ['student-home.component.scss'],
  templateUrl: './student-home.component.html',
})
export class StudentHomeComponent {
  courses = [
    {
      title: 'CertHE in Skills',
      desc: 'this is a test',
    },
    {
      title: 'Health and Social Care',
      desc: 'this is a test',
    },
  ];

  constructor() {

  }

  onJoinClick(course) {
  }
}
