import { Component } from '@angular/core';
import { CounterService } from '../core/counter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
