import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [JsonPipe, UserComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {

  @Input() childUser: any;

  userService: any;

  posts: Array<any> = [];

  constructor( private userServiceDI : UserService, private postService: PostService ) {
    // this.userService = userServiceDI;
    this.posts = postService.posts;
  }



}
