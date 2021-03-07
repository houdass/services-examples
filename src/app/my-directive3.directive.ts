import { Directive } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
  selector: '[appMyDirective3]',
})
export class MyDirective3Directive {
  constructor(public messageService: MessageService) {
    console.log('From Directive 3: ', this.messageService?.getMessage());
  }
}
