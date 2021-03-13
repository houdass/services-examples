import { Component } from '@angular/core';
import { CounterService } from '../core/counter.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
