import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Post } from '@superheroes/api-interfaces';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {}

  init(): void {
    this.http
      .get<Post[]>(
        'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50'
      )
      .subscribe((posts) => this.posts$.next(posts));
  }

  public getPosts(): Observable<Post[]> {
    return this.posts$;
  }

  public getNewPosts(): Observable<Post[]> {
    return this.posts$.pipe(
      map((posts) => posts.filter((post) => post.id > 20))
    );
  }
}
