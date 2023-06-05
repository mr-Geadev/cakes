import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from "src/app/pages/product/product.component";


@NgModule({
  declarations: [
    ProductComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ProductComponent,
    }]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class ProductModule {

}
