import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yogaclass',
  templateUrl: './yogaclass.component.html',
  styleUrls: ['./yogaclass.component.css']
})
export class YogaclassComponent implements OnInit {
  constructor(
    private router: Router
  ) { }


  ngOnInit() {
  }
  gotoonline() {
    this.router.navigate(['online']);
  }
  gotofreeclasses() {
    this.router.navigate(['free']);
  }
  gotosearch() {
    this.router.navigate(['search']);
  }
  gotocontacts() {
    this.router.navigate(['contacts']);
  }
}
