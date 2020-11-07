import { Component } from '@angular/core';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  students = [
    {
      name: 'Bianca',
      accepted: false,
    },
    {
      name: 'Adrian',
      accepted: false,
    },
    {
      name: 'Emilia',
      accepted: false,
    },
    {
      name: 'Florin',
      accepted: false,
    },
  ];

  constructor() {

  }

  acceptStudent(student) {
    student.accepted = true;
  }
}
