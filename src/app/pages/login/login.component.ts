import { Component } from '@angular/core';

@Component({
  selector: 'ngx-login',
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
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
