import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://pdyoga.firebaseio.com/';
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;
  flag = false;
  uid;
  isPlan;
  isPayment;

  PaymentArray: any = [];
  route: any;
  admin: any;
  account: any;

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService) {
    this.credentials = {};
  }

  sendToFirebase(data) {
    // const url = 'https://pdyoga.firebaseio.com/name.json';
    // console.log(data);
    // this.http.post(url, data);

    return this.db.collection('names').add({
      name: data.name,
      sirname: data.sirname,
      color: data.color
    });

    // this.http.get(this.url + 'allnames.json').subscribe(data => {
    //   console.log("TCL: LoginService -> sendToFirebase -> data", data)
    // })
    // return this.http.post(this.url + 'allnames/1.json', data)

  }

  getUserid() {

  }

  CheckPlanSelected() {

  }

  CheckPayment() {

  }

  routing() {
    const url = this.router.url;
  }

  login() {
    this.credentials = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    };
    this.authService.doEmailLogin(this.credentials)
      .then(response => {
        this.account = response;
        this.authenticationError = false;
        this.tellProject(this.account.user.uid);
      })
      .catch(error => {
        this.authenticationError = true;
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else
          if (errorCode === 'auth/invalid-email') {
            alert('Wrong email.');
          } else {
            alert(errorMessage);
          }
      });
  }

  emailLogin() {
    this.authService.doGoogleLogin()
      .then(response => {
        this.account = response;
        this.authenticationError = false;
        this.tellProject(this.account.user.uid);
      })
      .catch(error => {
        this.authenticationError = true;
      });
  }

  googleLogin() {
    return this.authService.doGoogleLogin()
      .then(response => {
        this.account = response;
        this.authenticationError = false;
        this.tellProject(this.account.user.uid);
        return this.account.user;
      })
      .catch(error => {
        this.authenticationError = true;
      });
  }

  tellProject(uid) {
    this.accountService.account.next(uid);
  }

}
