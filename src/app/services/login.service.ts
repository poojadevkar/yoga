import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'https://pdyoga.firebaseio.com/';

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  sendToFirebase(data) {
    // const url = 'https://pdyoga.firebaseio.com/name.json';
    // console.log(data);
    // this.http.post(url, data);

    return this.db.collection('names').add({
      name: data.name,
      sirname: data.sirname,
      color: data.color
    });

    // this.http.get(this.url + 'allnames.json').subscribe(data => {
    //   console.log("TCL: LoginService -> sendToFirebase -> data", data)
    // })
    // return this.http.post(this.url + 'allnames/1.json', data)

  }

}
