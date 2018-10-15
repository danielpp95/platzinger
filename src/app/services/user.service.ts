import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  letusuario1: User = {
    nick: 'Eduardo',
    age: 24,
    email: 'ed@aoe.aoe',
    friend: true,
    uid: 0,
    status: 'online',
    subnick: 'estoy activo'
  };
  letusuario2: User = {
    nick: 'Freddy',
    age: 28,
    email: 'fred@aoe.aoe',
    friend: true,
    uid: 1,
    status: 'online'
  };
  letusuario3: User = {
    nick: 'Yuliana',
    age: 18,
    email: 'yuli@aoe.aoe',
    friend: true,
    uid: 2,
    status: 'busy'
  };
  letusuario4: User = {
    nick: 'Ricardo',
    age: 17,
    email: 'rick@aoe.aoe',
    friend: false,
    uid: 3,
    status: 'offline'
  };
  letusuario5: User = {
    nick: 'Marcos',
    age: 30,
    email:'marcos@aoe.aoe',
    friend: false,
    uid: 4,
    status: 'away'
  };

  friends: User [] = [ this.letusuario1, this.letusuario2, this.letusuario3, this.letusuario4, this.letusuario5 ]

  constructor() { }

  getFriends() {
    return this.friends
  }
}
