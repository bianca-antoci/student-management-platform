import { Component } from '@angular/core';

@Component({
  selector: 'ngx-registration',
  styleUrls: ['registration.component.scss'],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
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
