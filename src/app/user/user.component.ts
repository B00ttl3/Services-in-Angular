import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // userService: any;

  // constructor () {
  //   this.userService = new UserService();
  // }

workService: any;

constructor() {
  this.workService = new UserService();
}
  
}
