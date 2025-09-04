import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction(
  '[Reddit] Load Posts',
  props<{ subreddit: string; sort: string }>()
);

export const loadPostsSuccess = createAction(
  '[Reddit] Load Posts Success',
  props<{ posts: any[] }>()
);

export const loadPostsFailure = createAction(
  '[Reddit] Load Posts Failure',
  props<{ error: any }>()
);