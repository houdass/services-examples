import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, CoreModule.forChild(), ProductRoutingModule],
})
export class ProductModule {}
