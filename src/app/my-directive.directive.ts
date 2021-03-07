import { Directive, Host, Self } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
  selector: '[appMyDirective]',
  providers: [MessageService]
})
export class MyDirectiveDirective {
  constructor(public messageService: MessageService) {
    console.log('From Directive 1: ', this.messageService?.getMessage());
  }
}
