import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'ngx-create-course',
  styleUrls: ['create-course.component.scss'],
  templateUrl: './create-course.component.html',
})
export class CreateCourseComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
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

    this.firestore
      .collection('courses')
      .doc(new Date().getTime().toString())
      .set(registrationRequest)
      .then(() => {
        window.location.href = 'pages/admin';
      });
  }
}
