import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  letusuario1: User = {
    nick: 'Eduardo',
    age: 24,
    email: 'ed@aoe.aoe',
    friend: true,
    uid: 0
  };
  letusuario2: User = {
    nick: 'Freddy',
    age: 28,
    email: 'fred@aoe.aoe',
    friend: true,
    uid: 1
  };
  letusuario3: User = {
    nick: 'Yuliana',
    age: 18,
    email: 'yuli@aoe.aoe',
    friend: true,
    uid: 2
  };
  letusuario4: User = {
    nick: 'Ricardo',
    age: 17,
    email: 'rick@aoe.aoe',
    friend: false,
    uid: 3
  };
  letusuario5: User = {
    nick: 'Marcos',
    age: 30,
    email:'marcos@aoe.aoe',
    friend: false,
    uid: 4
  };

  users: User [] = [ this.letusuario1, this.letusuario2, this.letusuario3, this.letusuario4, this.letusuario5 ]
  
  constructor() {
  }

}
