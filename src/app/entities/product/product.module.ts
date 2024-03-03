import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from 'src/app/entities/product/components/product-item/product-item.component';
import { ProductListComponent } from 'src/app/entities/product/components/product-list/product-list.component';
import { ProductDetailedComponent } from 'src/app/entities/product/components/product/product-detailed.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductItemComponent, ProductDetailedComponent],
  providers: [],
  exports: [ProductListComponent, ProductItemComponent, ProductDetailedComponent],
})
export class ProductModule {}
