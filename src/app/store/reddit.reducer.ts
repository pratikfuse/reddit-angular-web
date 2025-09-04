import { createReducer, on } from '@ngrx/store';
import * as RedditActions from './reddit.actions';

export interface RedditState {
  posts: any[];
  loading: boolean;
  error: any;
}

export const initialState: RedditState = {
  posts: [],
  loading: false,
  error: null,
};

export const redditReducer = createReducer(
  initialState,
  on(RedditActions.loadPosts, (state) => ({ ...state, loading: true })),
  on(RedditActions.loadPostsSuccess, (state, { posts }) => ({
    error: null,
    posts,
    loading: false,
  })),
  on(RedditActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);