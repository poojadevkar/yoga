import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  sendToFirebase(data) {
    // const url = 'https://pdyoga.firebaseio.com/name.json';
    // console.log(data);
    // this.http.post(url, data);

    return this.db.collection('names').add({
      name: data.name,
      sirname: data.name,
      color: data.color
    });

  }

}
