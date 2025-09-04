import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './posts/posts';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { redditReducer } from './store/reddit.reducer';
import { RedditEffects } from './store/reddit.effect';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Posts, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('reddit-client');
}
