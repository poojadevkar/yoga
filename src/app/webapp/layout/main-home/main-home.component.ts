import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(
    private router: Router

) { }

  ngOnInit() {
  }

  gotoBMI() {
    this.router.navigate(['bmi']);
  }
  gotoHistory() {
    this.router.navigate(['history']);
  }
  gotoBenefit() {
    this.router.navigate(['benefit']);
  }
  gotoWhyYoga() {
    this.router.navigate(['why-yoga']);
  }
  gotoYogaclass() {
    this.router.navigate(['yogaclass']);
  }

  gotolearnYoga() {
    this.router.navigate(['learnyoga']);
  }
  gotoYogatype() {
    this.router.navigate(['yogatype']);
  }
  gotoDait() {
    this.router.navigate(['dait']);
  }

  eight() {

  }

}
