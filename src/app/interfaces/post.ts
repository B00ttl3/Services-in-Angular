export interface Post {
    id: number,
  title: string,
  post: string,
  username?: string
}


// The ? after the username represents the Optional Field. Means its the users choice whether they want to add their name or not. by using this we are not making our previous arrays code wrong as we didn't add the username field there. but in here now if we want to get the username we can just type ? after that and it will become optional for the users and for us to use it in anyother code if we want to