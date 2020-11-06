import { Component } from '@angular/core';

@Component({
  selector: 'ngx-contact-us',
  styleUrls: ['contact-us.component.scss'],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
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
