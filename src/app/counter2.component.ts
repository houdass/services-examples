import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter.component.html',
  providers: [CounterService]
})
export class Counter2Component {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
