import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Photo, Post, Todo, User } from './rxjs-samples.model';

@Injectable({
  providedIn: 'root',
})
export class RxjsSamplesService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments() {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  getAlbums() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getPhotos() {
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  getPostsByUserId(id: number) {
    return this.http.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
  }
}
