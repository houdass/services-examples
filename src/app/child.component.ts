import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  message: string;

  /*constructor(public messageService: MessageService) {
    this.message = this.messageService?.getMessage();
  }*/
}
