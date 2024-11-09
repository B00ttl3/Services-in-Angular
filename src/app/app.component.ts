import { Component } from '@angular/core';
import { PostsListComponent } from './posts-list/posts-list.component';
import { JsonPipe } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsListComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'

  userService: any;

  constructor() {
    this.userService = new UserService();
  }
}
