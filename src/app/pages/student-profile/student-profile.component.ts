import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ngx-student-profile',
  styleUrls: ['student-profile.component.scss'],
  templateUrl: './student-profile.component.html',
})
export class StudentProfileComponent {
  
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

    this.getListOfCoursesFromFirebase().toPromise().then((results) => {
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

    this.firestore.collection('users').doc(new Date().getTime().toString()).set(registrationRequest);
    this.continueButtonDisabled = false;
  }

  /**
   * This is the way we call Firebase to return the list of courses.
   *
   */
  getListOfCoursesFromFirebase() {
    const query = this.firestore.collection('courses');
    return query.get().pipe(map((snapshot) => {
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

