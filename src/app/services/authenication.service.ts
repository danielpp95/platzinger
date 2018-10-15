import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {

  constructor( private auth: AngularFireAuth ) { }

  loginWithEmail( mail: string, pass: string ) {
    return this.auth.auth.signInWithEmailAndPassword(mail, pass);
  }

  registerWithEmail( email: string, pass: string ) {
    return this.auth.auth.createUserWithEmailAndPassword(email, pass);
  }

  getStatus() {
    return this.auth.authState;
  }

  logout() {
    return this.auth.auth.signOut();
  }

}
