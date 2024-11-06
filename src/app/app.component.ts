import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'
  
  user: Array<any> = [
    {name: 'Umair', age: 26, email: 'umair@gmail.com'},
    {name: 'Babar', age: 24, email: 'babar@gmail.com'},
    {name: 'Kamran', age: 29, email: 'kamran@gmail.com'},
    {name: 'Rehan', age: 23, email: 'rehan@gmail.com'},
  ]

}
