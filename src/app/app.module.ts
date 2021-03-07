import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyDirective2Directive } from './my-directive2.directive';
import { MyDirective3Directive } from './my-directive3.directive';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, MyDirectiveDirective, MyDirective2Directive, MyDirective3Directive],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

// @Self() @Optional() @SkipSelf() @Host()

// 1. <app-parent><app-child></app-child></app-parent>
// 2. <app-parent appMyDirective></app-parent>

