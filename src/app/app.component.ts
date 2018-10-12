import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  constructor() {
    
    let myUser: User = {
      nick: 'hola',
      age: 12,
      email: 'as',
      uid: 2,
      friend: false
    }

    console.log(myUser)
  }

}
