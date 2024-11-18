import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

// to mkae it injectable we first will add the @Injectable and select it to auto complete it with imports. and then we will makea paramter inside the @Injectable useing the {which is providedIn: 'root'} and we set it's value to root becasue we are saying to inject this service at the root level of our application.

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