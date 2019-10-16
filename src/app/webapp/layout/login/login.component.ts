import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;
  account: any;
  prod = true;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    public activeModal: NgbActiveModal,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private accountService: AccountService

  ) {
    this.credentials = {};
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []), 0);
  }

  login() {
    this.credentials = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    };

    if (!this.prod) {
      this.gotoLandingScreen();
      this.cancel();
    } else {
      this.authService.doEmailLogin(this.credentials)
        .then(response => {
          this.account = response;
          this.authenticationError = false;
          this.tellProject(this.account.user.uid);
          this.activeModal.dismiss('login success');
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
  }

  cancel() {
    this.credentials = {
      username: null,
      password: null,
      rememberMe: true
    };
    this.authenticationError = false;
    this.activeModal.dismiss('cancel');
  }

  register() {
    this.activeModal.dismiss('to state register');
    this.router.navigate(['/register']);
  }

  requestResetPassword() {
    this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/reset', 'request']);
  }

  googleLogin() {
    this.loginService.googleLogin().then(data => {
      console.log('Pratik Output: LoginComponent -> googleLogin -> data', data);
      this.activeModal.dismiss('login success');
      this.gotoLandingScreen();
    });
  }

  facebookLogin() {
    alert('not available in this version please wait for next version');
  }

  linkedinLogin() {
    alert('not available in this version please wait for next version');
  }

  twitterLogin() {
    alert('not available in this version please wait for next version');
  }

  tellProject(uid) {
    this.accountService.account.next(uid);
  }

  gotoLandingScreen() {
    this.router.navigate(['main-home']);
  }

}
