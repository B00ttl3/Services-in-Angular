import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [JsonPipe, UserComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {

  @Input() childUser: any;

}
