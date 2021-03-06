import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { HttpClientModule } from '@angular/common/http';
import { Counter1Component } from './counter1.component';
import { Counter2Component } from './counter2.component';

@NgModule({
  declarations: [AppComponent, Counter1Component, Counter2Component],
  imports: [BrowserModule, HttpClientModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
