import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-registration',
  styleUrls: ['registration.component.scss'],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;
  selectedItem = 1;
  firestoreCourses = [];

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.getListOfCoursesFromFirebase()
      .toPromise()
      .then((results) => {
        this.firestoreCourses = results;
      });
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmitBtn() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.continueButtonDisabled = true;
    const registrationRequest = Object.assign(this.form.value);
    registrationRequest.selectedCourse = this.selectedItem;
    registrationRequest.isApproved = false;
    this.firestore
      .collection('users')
      .doc(new Date().getTime().toString())
      .set(registrationRequest)
      .then(() => {
        window.location.href = 'pages/student/home';
      });
    this.continueButtonDisabled = false;
  }

  /**
   * This is the way we call Firebase to return the list of courses.
   *
   */
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
}
