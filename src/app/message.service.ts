import { Injectable } from '@angular/core';
import { someFactory } from './message2.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  // useExisting: Message2Service,
  useFactory: someFactory,
  deps: [HttpClient]
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessage(): string {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        console.log(users);
      });
    return 'Message from MessageService';
  }
}
