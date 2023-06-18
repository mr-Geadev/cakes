import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogPage } from 'src/app/pages/catalog/catalog.page';
import { ProductItemComponent } from 'src/app/pages/catalog/product-item/product-item.component';
import { ProductListComponent } from 'src/app/pages/catalog/product-list/product-list.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '**',
      component: CatalogPage,
      children: []
    }]),
    SharedModule,
    ReactiveFormsModule,
    InputComponent,
  ],
  declarations: [
    CatalogPage,
    ProductListComponent,
    ProductItemComponent,
  ],
  providers: [],
  exports: [],
})
export class CatalogPageModule {

}
