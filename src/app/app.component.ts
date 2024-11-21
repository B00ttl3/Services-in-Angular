import { Component } from '@angular/core';
import { PostsListComponent } from './posts-list/posts-list.component';
import { JsonPipe } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'

  userService: any;

  constructor( private userServiceDI: UserService ) {
    this.userService = userServiceDI;
    // this.userService = new UserService();
    // console.log(this.userService);
  }

}
