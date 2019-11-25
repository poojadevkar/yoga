import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dait',
  templateUrl: './dait.component.html',
  styleUrls: ['./dait.component.css']
})
export class DaitComponent implements OnInit {
  myVideo : any;
  //playPause : any;
  getElementById : any;
  document : any;
  pause:any;
  play:any;

  width:any;
  //makeSmall:any;
  //makeNormal:any;



  constructor(
    private router: Router

  ) { }


  ngOnInit() {


  }

playPause() {
  var myVideo=document.getElementById("video1");

  if (myVideo)
    this.myVideo.play();
  else
    this.myVideo.pause();
}
/*makeBig() {
  myVideo.width = 560;
}

 makeSmall() {
  myVideo.width = 320;
}

makeNormal() {
  myVideo.width = 420;
}
*/




  gotoafteryoga() {
    this.router.navigate(['afteryoga']);
  }
  gotobeforeyoga() {
    this.router.navigate(['beforeyoga']);
  }

}
