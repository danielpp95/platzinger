import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  friends: User []
  
  constructor( private userService: UserService ) {
    this.friends = userService.getFriends()
  }

}
