import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef: NgbModalRef;

  name: string;
  sirname: string;
  color: string;

  public MyData: {
    name: string,
    sirname: string,
    color: string
  };

  public items: any;

  constructor(
    private loginService: LoginService,
    db: AngularFirestore,
    private router: Router,
    private loginModalService: LoginModalService,
    private translateService: TranslateService
  ) {
    db.collection('/names').valueChanges().subscribe(data => {
      this.items = data;
      console.log('TCL: HomeComponent -> constructor -> this.items', this.items);
    });

    translateService.use('en').then(() => {
      console.log(translateService.data);
    });
  }

  ngOnInit() {

  }

  submitLogin() {

    this.MyData = {
      name: this.name,
      sirname: this.sirname,
      color: this.color
    };

    this.loginService.sendToFirebase(this.MyData).then(data => {
      console.log('TCL: HomeComponent -> submitLogin -> data', data);
    });
  }

  login() {
    // this.router.navigate(['login']);
    this.modalRef = this.loginModalService.open();

  }
}
