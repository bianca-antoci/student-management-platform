import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-student-profile',
  styleUrls: ['student-profile.component.scss'],
  templateUrl: './student-profile.component.html',
})
export class StudentProfileComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  continueButtonDisabled = false;
  firestoreUser: any = {};
  currentUserId = '';

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit() {
    // we read the user from storage
    let currentUserFromStorage: any = window.localStorage.getItem('user');
    currentUserFromStorage = JSON.parse(currentUserFromStorage);
    this.currentUserId = currentUserFromStorage.id;

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.getListOfUserFromFirebase()
      .then((user) => {
        this.firestoreUser = user;
        this.form.patchValue({email: user.email});
        this.form.patchValue({firstName: user.firstName});
        this.form.patchValue({lastName: user.lastName});
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
    this.firestoreUser.firstName = registrationRequest.firstName;
    this.firestoreUser.lastName = registrationRequest.lastName;
    this.firestoreUser.email = registrationRequest.email;

    this.firestore
      .collection('users')
      .doc(this.currentUserId)
      .set(this.firestoreUser);
    this.continueButtonDisabled = false;
  }

  getListOfUserFromFirebase() {
    const query = this.firestore.collection('users').ref;
    return query.doc(this.currentUserId).get()
      .then((result) => {
        return result.data();
      });
  }
}
