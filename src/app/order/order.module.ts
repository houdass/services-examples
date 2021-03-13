import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { CoreModule } from '../core/core.module';
import {OrderRoutingModule} from './order-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, CoreModule.forChild(), OrderRoutingModule],
})
export class OrderModule {}
