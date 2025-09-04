import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RedditService } from '../reddit';
import * as RedditActions from './reddit.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedditEffects {
  private actions$ = inject(Actions);
  private redditService = inject(RedditService);
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RedditActions.loadPosts),
      mergeMap(({ subreddit, sort }) =>
        this.redditService.getPosts(subreddit || "popular", sort).pipe(
          map((data: any) =>
            RedditActions.loadPostsSuccess({
              posts: data.data.children.map((c: any) => c.data),
            })
          ),
          catchError((error) => of(RedditActions.loadPostsFailure({ error })))
        )
      )
    )
  );


}
