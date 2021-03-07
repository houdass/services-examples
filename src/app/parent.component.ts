import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  providers: [MessageService],
})
export class ParentComponent {}
