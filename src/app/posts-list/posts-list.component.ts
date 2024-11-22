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
    this.posts = postService.getPost();
  }

  // in this code inside the post.service.ts file   addPostService(newPost: Post) we have changed the data type from any to Post which we are using from the interface in the same file. it will help us to not make any typos or other mistake in the post which we are pushing inside the array of post.service.ts files. 

  addPost() {
    let postData = {
      id: 7,
      title: 'post title 7',
      post: 'Dummy post 7'
    }

    this.postService.addPostService(postData);

  }

}
