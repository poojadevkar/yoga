import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  authenticationError: boolean;
  credentials: {};

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    public activeModal: NgbActiveModal,
    private router: Router,
    private loginService: LoginService

  ) {
    this.credentials = {};
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []), 0);
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
      this.router.navigate(['main-home']);
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

}
