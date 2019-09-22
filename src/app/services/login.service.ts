import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  sendToFirebase(data) {
    console.log(data);

  }

}
