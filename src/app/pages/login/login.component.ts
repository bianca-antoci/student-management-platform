import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signForm: FormGroup;
  submitted = false;
  valid: any;
  showMessages = {
    error: false,
    success: false,
  };

  errors = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    window.localStorage.clear();

    this.signForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    const email = localStorage.getItem('email');
    if (email) {
      this.formRef['email'].setValue(email);
    }
  }

  get formRef() {
    return this.signForm.controls;
  }

  signIn() {
    this.submitted = true;

    if (this.signForm.invalid) {
      return;
    }

    this.showMessages.error = false;
    this.errors = [];

    const email = this.signForm.get('email').value;
    const pass = this.signForm.get('password').value;

    const dbRef = this.firestore.collection('users').ref;
    dbRef
      .where('email', '==', email)
      .get()
      .then((querySnapshot) => {

        // if no user exists
        if (!querySnapshot || querySnapshot.empty) {
          window.alert('Wrong email or password. Try again');
          this.submitted = false;
          return;
        }

        querySnapshot.forEach((doc) => {
          // if password is wrong
          if (doc.data().password === pass) {
            this.saveUserDetailes(doc.id, doc.data());

            if (doc.data().isAdmin === true) {
              window.location.href = 'pages/admin';
            } else {
              window.location.href = 'pages/student/home';
            }
          } else {
            window.alert('Wrong email or password. Try again');
            this.submitted = false;
          }
        });
      });
  }
  saveUserDetailes(id, user) {
    user.id = id;
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
