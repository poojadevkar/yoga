import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yogatype',
  templateUrl: './yogatype.component.html',
  styleUrls: ['./yogatype.component.css']
})
export class YogatypeComponent implements OnInit
{
   /*constructor(
    private router: Router
  ) { }


  ngOnInit() {
  }



    type = [
      {name: 'Leg Raise',gototype() {
        this.router.navigate(['ok']);
      },
    ];*/
    constructor(
      private router: Router
    ) { }


      ngOnInit() {
      }
  type=[
      {name: 'leg raise',poses:20},
      {name: 'Basic Breathing (Pranayama)',poses:20},
      {name:'The Plough (Hala Asana)',poses:20},
      {name:'The Shoulder Stand (Sarvang Asana)',poses:20},
      {name:'The Fish (Matsya Asana)',poses:20},
      {name:'The Bow (Dhanur Asana)',poses:20},
      {name:'The Lotus (Padma Asana)',poses:20},
      {name:'The Bridge (Sethu Bandh Asana)',poses:10},
      {name:'The Headstand (Shirsh Asana)',poses:10},
      {name:'Forwardbend (Paschimothana Asana)',poses:10},
      {name:'Cobra (Bhujanga Asana)',poses:10},
      {name:'The Locust (Salabha Asana)',poses:10},
      {name:'The Half Spinal Twist (Ardha Matsyendra Asana)',poses:10},
      {name:'The Crow (Kakasana)',poses:10},
      {name:'The Triangle (Trikona Asana)',poses:10},

      {name:'The Lion (Singhasana)',poses:10},
      {name:'The Half Wheel (Ardha Chakrasana)',poses:10},
      {name:'Yogamudra',poses:10},
      {name:'The Peacock (Mayurasana)',poses:10},
      {name:'The Knee to Chest (Pawanmuktasana)',poses:10},
      {name:'Hidden Lotus (Baddha padmasana)',poses:10},
      {name:'Knee Nose Pose (Supta Pawana Muktasana)',poses:10},
      {name:'Half Shoulder stand (Ardha Sarvangasana)',poses:10},
      {name:'Half Locust Pose (Ardha Shalabhasana)',poses:10},
      {name:'Vajrasana',poses:10},
      {name:'Janusirasana',poses:10},
      {name:'Anti Rheumaic Asana',poses:10},
      {name:'Vrikshasana (Ardha Chandrasana)',poses:10},
      {name:'Shoulder Socket Rotation (skandha chakra)',poses:10},
      {name:'Yoga Nidra ',poses:10},
      {name:'Siddhasana ',poses:10},
      {name:'Hastapadasana',poses:10},
      {name:'Gomukhasana',poses:10}
    ];
  selectedValue:string;

   gototype1()
   {
     this.router.navigate(['type1']);
   }






  //constructor() { }

  //ngOnInit() {
  //}
}

