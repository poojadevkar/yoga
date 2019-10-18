import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beforeyoga',
  templateUrl: './beforeyoga.component.html',
  styleUrls: ['./beforeyoga.component.css']
})
export class BeforeyogaComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }
  //gotobeforeyoga() {
    //this.router.navigate(['beforeyoga']);
 // }

}
