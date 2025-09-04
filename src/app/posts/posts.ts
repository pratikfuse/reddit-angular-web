import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RedditState } from '../store/reddit.reducer';
import * as RedditActions from '../store/reddit.actions';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {
  posts$: Observable<any[]>;
  loading$: Observable<boolean>;

  subreddit: string = 'angular';
  sort: string = 'hot';

  constructor(private store: Store<{ reddit: RedditState }>) {
    this.posts$ = store.select((state) => state.reddit.posts);
    this.loading$ = store.select((state) => state.reddit.loading);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.store.dispatch(RedditActions.loadPosts({ subreddit: this.subreddit, sort: this.sort }));
  }
}
