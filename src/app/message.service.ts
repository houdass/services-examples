import { Inject, Injectable } from '@angular/core';
import { Message2Service } from './message2.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url.token';

@Injectable({
  providedIn: 'root',
  useExisting: Message2Service,
  deps: [HttpClient],
})
export class MessageService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
  ) {}

  getMessage(): string {
    this.http.get(this.apiUrl).subscribe((users) => {
      console.log(users);
    });
    return 'Message from MessageService';
  }
}
