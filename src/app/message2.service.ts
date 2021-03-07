import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Message2Service {
  constructor(private http: HttpClient) {}

  getMessage(): string {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        console.log(users);
      });
    return 'Message from Message2Service';
  }
}

export function someFactory(http: HttpClient): any {
  return new Message2Service(http);
}
