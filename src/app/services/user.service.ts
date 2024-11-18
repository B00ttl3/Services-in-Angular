import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
    users: Array<any> = [
        {name: 'Umair', age: 26, email: 'umair@gmail.com'},
        {name: 'Babar', age: 24, email: 'babar@gmail.com'},
        {name: 'Kamran', age: 29, email: 'kamran@gmail.com'},
        {name: 'Rehan', age: 23, email: 'rehan@gmail.com'},
      ]

      constructor() {
        console.log('user service new instance created');
      }
    
    work: Array<any> = [
      {check: 'checked', age: 25, work: 'done'},
      {check: 'checked', age: 25, work: 'done'},
      {check: 'checked', age: 25, work: 'done'},
    ]
}