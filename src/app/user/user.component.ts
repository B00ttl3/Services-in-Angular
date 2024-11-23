import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userService: any;

  constructor (private postService: PostService) {
    // this.userService = new UserService();
  }

  addPost() {
    let postData:Post = {
      id: 8,
      title: 'Post Title 8',
      post: 'dummy post 8'
    }

    this.postService.adddPostService(postData);
  }
  
}
