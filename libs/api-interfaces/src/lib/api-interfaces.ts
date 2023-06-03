export interface Message {
  message: string;
}

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  editing: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
