import { Component } from '@angular/core';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
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
