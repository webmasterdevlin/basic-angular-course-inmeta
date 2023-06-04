import { Component, OnInit } from '@angular/core';
import { RxjsSamplesService } from './rxjs-samples.service';
import {
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, Validators } from '@angular/forms';

UntilDestroy();
@Component({
  selector: 'superheroes-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls: ['./rxjs-samples.component.css'],
})
export class RxjsSamplesComponent implements OnInit {
  myForm = this.formBuilder.group({
    querySearchTerm: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private sampleService: RxjsSamplesService
  ) {}

  mapOperator() {
    this.sampleService
      .getPosts()
      .pipe(
        // If there is an error, return an empty Observable
        // this prevents the entire stream from failing
        catchError((err) => EMPTY),
        // pipe is like a chain of middleware functions for processing data
        // chain can have as many functions as you want using different operators
        map((posts) => {
          // this log only runs once
          console.log('log');
          return posts.map((post) => {
            // this runs for each post
            return {
              id: post.id,
              headline: post.title,
              content: post.body,
            };
          });
        }),
        untilDestroyed(this)
      )
      .subscribe((results) => {
        // end result of the stream
        console.log(results);
        console.table(results);
      });
  }

  tapOperator() {
    this.sampleService
      .getAlbums()
      .pipe(
        catchError((err) => EMPTY),
        // tap ignores the return value of the function
        tap((albums) => {
          console.log('log');
          return albums.map((album) => {
            return {
              x: album.id,
              xx: album.title,
              xxx: album.userId,
            };
          });
        }),
        untilDestroyed(this)
      )
      .subscribe((results) => {
        console.log(results);
        console.table(results);
      });
  }

  switchMapOperator() {
    this.sampleService
      .getUserById(1)
      .pipe(
        catchError((err) => EMPTY),
        switchMap((user) => {
          return this.sampleService.getPostsByUserId(user.id);
        }),
        untilDestroyed(this)
      )
      .subscribe((results) => {
        console.log(results);
        console.table(results);
      });
  }

  combineLatestOperator() {
    combineLatest([
      this.sampleService.getPhotos(),
      this.sampleService.getAlbums(),
    ])
      .pipe(
        catchError((err) => EMPTY),
        untilDestroyed(this)
      )
      .subscribe(([photos, albums]) => {
        console.log('results:', { photos, albums });
      });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm.valueChanges
      .pipe(
        map((v) => v.querySearchTerm),
        debounceTime(2000),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((v) => {
        console.log(v);
      });
  }
}
