import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {

  friendId: any;
  user: User;

  constructor( private activatedRoute: ActivatedRoute, private userService: UserService ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];

    this.user = userService.getFriends().find(record => record.uid == this.friendId);
  }


}
