import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'https://v2.jsonplaceholder.typicode.com',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// useValue / useClass / useExisting / useFactory
