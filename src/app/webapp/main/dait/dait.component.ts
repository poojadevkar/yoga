import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dait',
  templateUrl: './dait.component.html',
  styleUrls: ['./dait.component.css']
})
export class DaitComponent implements OnInit {

  constructor(
    private router: Router

  ) { }


  ngOnInit() {
  }
  gotoafteryoga() {
    this.router.navigate(['afteryoga']);
  }
  gotobeforeyoga() {
    this.router.navigate(['beforeyoga']);
  }

}
