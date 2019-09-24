import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  sirname: string;
  color: string;

  MyData: {
    name: string,
    sirname: string,
    color: string
  };

  public items: Observable<any[]>;

  constructor(private loginService: LoginService, db: AngularFirestore) {
    this.items = db.collection('/names').valueChanges();

  }

  ngOnInit() {
  }

  submitLogin() {

    console.log('Pratik Output: HomeComponent -> submitLogin -> this.name', this.name);

    this.MyData = {
      name: this.name,
      sirname: this.sirname,
      color: this.color
    };

    this.loginService.sendToFirebase(this.MyData).then(() => {
      console.log('success');

    });
  }

}
