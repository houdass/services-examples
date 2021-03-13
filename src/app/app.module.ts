import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { API_URL } from './api-url.token';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com/posts',
    },
    {
      provide: 'API_URL',
      useValue: 'abbbcbcbcb',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// String Token / Type Token / Injection Token
