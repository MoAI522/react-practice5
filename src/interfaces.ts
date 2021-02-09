export interface User {
  id: string;
  name: string;
  iconSrc: string;
  bio: string;
}

export interface Tweet {
  id: number;
  user: User;
  date: Date;
  text: string;
  replies: Array<Tweet>;
  retweets: Array<User>;
  favorites: Array<User>;
}
