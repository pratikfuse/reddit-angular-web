import { Routes } from '@angular/router';
import { Posts } from './posts/posts';

export const routes: Routes = [{ path: 'r/:subreddit', component: Posts}, {path: '**', redirectTo: 'r/angular'}];
