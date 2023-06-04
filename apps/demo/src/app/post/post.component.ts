import { Component, OnInit } from '@angular/core';
import type { Post } from '@superheroes/api-interfaces';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'superheroes-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();

    this.postService.init();
  }

  getNewPosts() {
    this.posts$ = this.postService.getNewPosts();
  }
}
