import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-underweight',
  templateUrl: './underweight.component.html',
  styleUrls: ['./underweight.component.css']
})
export class UnderweightComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }
  gotounderweight1()
  {

  this.router.navigate(['underweight1']);}
  gotonormal()
  {

  this.router.navigate(['normal']);}
  gotoObese()
  {

  this.router.navigate(['obese']);}
  gotooverweight()
  {

  this.router.navigate(['overweight']);}
}
