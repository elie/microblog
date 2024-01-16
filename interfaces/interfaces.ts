export interface IPost {
  id: number;
  title: string;
  body: string;
  description: string;
  comments: IComment[]
  votes: number;
}

export interface IComment {
  id: number;
  text: string;
}