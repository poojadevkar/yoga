import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  height: any;
  heightunits: any;
  weight: any;
  weightunits: any;
  totalBMI: any;
  comment: any;

  constructor() { }

  ngOnInit() {
    this.totalBMI = 0;
  }

  computeBMI() {
    console.log(this.height, this.heightunits, this.weight, this.weightunits);

    // Convert all units to metric
    if (this.heightunits === 'inches') {
      this.height /= 39.3700787;
    }
    if (this.weightunits === 'lb') {
      this.weight /= 2.20462;
    }

    // //Perform calculation
    let BMI = this.weight / Math.pow(this.height, 2);

    // //Display result of calculation
    BMI = Math.round(BMI * 100) / 100;

    this.totalBMI = BMI;

    // var output = Math.round(BMI * 100) / 100
    if (BMI < 18.5) {
      this.comment = 'Underweight';
    } else if (BMI >= 18.5 && BMI <= 25) {
      this.comment = 'Normal';
    } else if (BMI >= 25 && BMI <= 30) {
      this.comment = 'Obese';
    } else if (BMI > 30) {
      this.comment = 'Overweight';
    }
  }

}
