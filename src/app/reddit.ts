import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
    private baseUrl = 'https://www.reddit.com/r';

  constructor(private http: HttpClient) {}

  getPosts(subreddit: string, sort: string = 'hot'): Observable<any> {
    return this.http.get(`${this.baseUrl}/${subreddit}/${sort}.json?limit=10`);
  }
  
}
