import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

@Component({
  selector: "ngx-registration",
  styleUrls: ["registration.component.scss"],
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent {

  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;
  selectedItem = 1;
  firestoreCourses = [];

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(7)]],
      email: ["", [Validators.required, Validators.email]],
    });

    this.getListOfCoursesFromFirebase().toPromise().then((results)=>{
      this.firestoreCourses = results;
    });
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
  getListOfCoursesFromFirebase() {
    let query = this.firestore.collection("courses");
    return query.get().pipe(map((snapshot) => {
        let items = [];
        snapshot.docs.map((a) => {
          const data = a.data();
          const id = a.id;
          items.push({ id, ...data });
        });
        return items;
      })
    );
  }
}
