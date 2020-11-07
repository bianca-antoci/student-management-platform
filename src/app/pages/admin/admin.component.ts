import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
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
  courses = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getListOfCoursesFromFirebase()
      .toPromise()
      .then((results) => {
        this.courses = results;
      });
  }
  getListOfCoursesFromFirebase() {
    const query = this.firestore.collection('courses');
    return query.get().pipe(
      map((snapshot) => {
        const items = [];
        snapshot.docs.map((a) => {
          const data = a.data();

          const id = a.id;
          items.push({ id, ...data });
        });
        return items;
      }),
    );
  }

  acceptStudent(student) {
    student.accepted = true;
  }
  newCourse() {
    window.location.href = 'pages/create-course';
  }
  editCourse(course) {}
}
