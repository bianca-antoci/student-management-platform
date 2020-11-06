import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "ngx-registration",
  styleUrls: ["registration.component.scss"],
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent {
  courses = [
    {
      title: "CertHE in Skills",
      desc: "this is a test",
    },
    {
      title: "Health and Social Care",
      desc: "this is a test",
    },
  ];

  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;
  selectedItem = 1;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(7)]],
      email: ["", [Validators.required, Validators.email]],
    });

    this.getListOfCoursesFromFirebase();
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmitBtn() {
   
    this.submitted = true;

    for (var i in this.form.controls) {
      this.form.controls[i].markAsTouched();
    }

    if (this.form.invalid) {
      return;
    }
    this.continueButtonDisabled = true;
    const registrationRequest = Object.assign(this.form.value);
    registrationRequest.selectedCourse = this.selectedItem;

    console.log(registrationRequest);
    this.continueButtonDisabled = false;
  }

/**
 * This is the way we call Firebase to return the list of courses.
 *
 */
  getListOfCoursesFromFirebase(){ 
    return this.firestore.collection("courses") 
 }
}
