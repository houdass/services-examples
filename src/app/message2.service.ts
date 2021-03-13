import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url.token';

@Injectable({
  providedIn: 'root',
})
export class Message2Service {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
  ) {
    console.log(this.apiUrl);
  }

  getMessage(): string {
    this.http.get(this.apiUrl).subscribe((users) => {
      console.log(users);
    });
    return 'Message from Message2Service';
  }
}
