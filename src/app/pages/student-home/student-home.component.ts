import { Component } from '@angular/core';

@Component({
  selector: 'ngx-student-home',
  styleUrls: ['student-home.component.scss'],
  templateUrl: './student-home.component.html',
})
export class StudentHomeComponent {
  modules = [
    {
      title: 'Module 1',
      grade: '60/100',
    },
    {
      title: 'Module 2',
      grade: '60/100',
    },
    {
      title: 'Module 3',
      grade: '60/100',
    },
    {
      title: 'Module 4',
      grade: '60/100',
    },
    {
      title: 'Module 5',
      grade: '60/100',
    },
    {
      title: 'Module 6',
      grade: '60/100',
    },
    {
      title: 'Module 7',
      grade: '60/100',
    },
    {
      title: 'Module 8',
      grade: '60/100',
    },
  ];

  constructor() {

  }

}
