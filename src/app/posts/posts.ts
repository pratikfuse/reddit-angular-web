import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RedditState } from '../store/reddit.reducer';
import * as RedditActions from '../store/reddit.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './posts.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {
  posts$: Observable<any[]>;
  loading$: Observable<boolean>;

  subreddit?: string;
  sort = 'hot';

  constructor(private store: Store<{ reddit: RedditState }>, private route: ActivatedRoute) {
    this.posts$ = store.select((state) => state.reddit.posts);
    this.loading$ = store.select((state) => state.reddit.loading);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.subreddit = params.subreddit;
      this.loadPosts();
    });
  }

  loadPosts() {
    this.store.dispatch(RedditActions.loadPosts({ subreddit: this.subreddit, sort: this.sort }));
  }
}
