import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-edit-course',
  styleUrls: ['edit-course.component.scss'],
  templateUrl: './edit-course.component.html',
})
export class EditCourseComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;
  firebaseCourse: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    const courseIdFromURL = this.route.snapshot.paramMap.get('id');

    this.getCourseDetailsFromDB(courseIdFromURL).then((course) => {
      this.firebaseCourse = course;
      this.form.patchValue({ title: course.title });
      this.form.patchValue({ description: course.description });
    });
  }

  getCourseDetailsFromDB(courseId: string) {
    const query = this.firestore.collection('courses').ref;
    return query
      .doc(courseId)
      .get()
      .then((result) => {
        const course =  result.data();
        course.id = result.id;
        return course;
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
    const dataToBeSentToDB = Object.assign(this.form.value);

    this.firebaseCourse.title = dataToBeSentToDB.title;
    this.firebaseCourse.description = dataToBeSentToDB.description;
    this.firestore
      .collection('courses')
      .doc(this.firebaseCourse.id)
      .set(this.firebaseCourse) .then(() => {
        window.location.href = 'pages/admin';
      });
  }
}
