import { Directive } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
  selector: '[appMyDirective2]',
})
export class MyDirective2Directive {
  constructor(public messageService: MessageService) {
    console.log('From Directive 2: ', this.messageService?.getMessage());
  }
}
