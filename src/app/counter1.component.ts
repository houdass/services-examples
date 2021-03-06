import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter.component.html',
  providers: [CounterService],
})
export class Counter1Component {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
