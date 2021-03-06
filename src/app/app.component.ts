import { Component } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }
}
