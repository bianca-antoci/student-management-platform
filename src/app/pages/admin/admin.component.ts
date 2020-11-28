import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  students = [];
  courses = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getUsersAndCoursesFromDB();
  }

  getUsersAndCoursesFromDB() {
    this.getListOfCoursesFromFirebase()
      .toPromise()
      .then((results) => {
        this.courses = results;
      });

    this.getListOfUsersFromFirebase()
      .toPromise()
      .then((results) => {
        this.students = results;
      });
  }
  getListOfUsersFromFirebase() {
    const query = this.firestore.collection('users');
    return query.get().pipe(
      map((snapshot) => {
        const items = [];
        snapshot.docs.map((a) => {
          const data = a.data();

          const id = a.id;
          items.push({ id, ...data });
        });
        return items.filter((item) => (!item.isAdmin || item.isAdmin === false));
      }),
    );
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
    student.isApproved = true;
    const db = this.firestore;
    db.collection('users').doc(student.id).update({ isApproved: true });
  }

  newCourse() {
    window.location.href = 'pages/create-course';
  }

  deleteCourse(course) {
    this.firestore
      .collection('courses')
      .doc(course.id)
      .delete()
      .then(() => {
        this.getUsersAndCoursesFromDB();
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  }

  editCourse(course) {
    window.location.href = '/pages/admin/edit/course/' + course.id;
  }
}
