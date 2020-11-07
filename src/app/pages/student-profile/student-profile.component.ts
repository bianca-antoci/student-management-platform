import { Component } from '@angular/core';

@Component({
  selector: 'ngx-student-profile',
  styleUrls: ['student-profile.component.scss'],
  templateUrl: './student-profile.component.html',
})
export class StudentProfileComponent {
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
