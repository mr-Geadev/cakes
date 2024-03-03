import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModule } from 'src/app/entities/product/product.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPageComponent } from 'src/app/pages/product/product-page.component';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductPageComponent,
      },
    ]),
    SharedModule,
    ProductModule,
  ],
  providers: [],
  exports: [],
})
export class ProductPageModule {}
