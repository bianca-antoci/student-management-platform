import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  courseData: any;
  showMessages = {
    error: false,
    success: false,
  };

  continueButtonDisabled = false;
  selectedItem = 2;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(7)]],
      email: ["", [Validators.required, Validators.email]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.continueButtonDisabled = true;
    const registrationRequest = Object.assign(this.courseData, this.form.value);
  }

  viewTerms(): void {}
}
