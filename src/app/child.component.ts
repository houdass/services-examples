import { Component } from '@angular/core';
import { MessageService } from './message.service';
import {Message2Service} from './message2.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  message: string;

  constructor(private messageService: MessageService, private message2Service: Message2Service) {
    // console.log(messageService === message2Service);
    this.message = this.messageService?.getMessage();
  }
}
