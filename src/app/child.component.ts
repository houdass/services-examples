import { Component, Host } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  message: string;

  constructor(@Host() public messageService: MessageService) {
    this.message = this.messageService?.getMessage();
  }
}
