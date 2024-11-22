import { Injectable } from '@angular/core';

// we use interface so that it can help us to be safe from the typos which we can make insdie our code, so now as we have added the interface with the name (Post in this case) and after that we have added the details which we want insid our array, which are id and its type and same with title and post, so if we make any typo or put any other data type instead of what we have defined in interface. it will give us error on the spot which will help us to correct the mistake on the spot.

interface Post {
  id: number,
  title: string,
  post: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {


  // the Post inside the <> is the Post from the interface above, we used it here si that we don't make any typos in our array.

  posts: Array<Post> = [
    {id: 1, title: 'Post Title 1', post: 'Dummy Post 1'},
    {id: 2, title: 'Post Title 2', post: 'Dummy Post 2'},
    {id: 3, title: 'Post Title 3', post: 'Dummy Post 3'},
    {id: 4, title: 'Post Title 4', post: 'Dummy Post 4'},
    {id: 5, title: 'Post Title 5', post: 'Dummy Post 5'},
    {id: 6, title: 'Post Title 6', post: 'Dummy Post 6'}
  ]

  constructor() { }


  // We are not suppose to directly access the variable inside the service, instead we will use a method to get the access, and the getPost() below is the method which we will use to access the variable insde the service
  getPost() {
    return this.posts;
  }

  addPostService(newPost: any) {
    this.posts.push(newPost);
  }

  adddPostService(newPost: any) {
    this.posts.push(newPost);
  }

}
