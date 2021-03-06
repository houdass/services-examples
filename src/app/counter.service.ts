export class CounterService {
  currentValue: number;
  constructor() {
    this.currentValue = 0;
  }

  increment(): number {
    return this.currentValue++;
  }
}
