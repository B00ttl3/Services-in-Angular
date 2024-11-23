import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';

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
  // we have imported the Post from the post.service.ts file and added it here to make sure that the component which we are adding from this file to that file's component, have the same type of data in it and no typos. This is another layer of checking

  addPost() {
    let postData:Post = {
      id: 7,
      title: 'post title 7',
      post: 'Dummy post 7'
    }

    this.postService.addPostService(postData);

  }

}
