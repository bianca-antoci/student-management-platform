import { Component } from '@angular/core';

@Component({
  selector: 'ngx-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  courses = [
    {
      title: "course A",
      desc: "This is a test course A"
    },
    {
      title: "course B",
      desc: "This is a test course B"
    }
  ];

  constructor() {

  }
}
