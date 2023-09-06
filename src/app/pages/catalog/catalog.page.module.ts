import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogArticleComponent } from 'src/app/pages/catalog/catalog-article/catalog-article.component';
import { CatalogHeaderComponent } from 'src/app/pages/catalog/catalog-header/catalog-header.component';
import { CatalogRoutingPageModels } from 'src/app/pages/catalog/catalog-routing.page.models';
import { CatalogPage } from 'src/app/pages/catalog/catalog.page';
import { ProductItemComponent } from 'src/app/pages/catalog/product-item/product-item.component';
import { ProductListComponent } from 'src/app/pages/catalog/product-list/product-list.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingPageModels,
    SharedModule,
    ReactiveFormsModule,
    InputComponent,
    NgOptimizedImage,
  ],
  declarations: [
    CatalogPage,
    ProductListComponent,
    ProductItemComponent,
    CatalogHeaderComponent,
    CatalogArticleComponent,
  ],
  providers: [],
  exports: [],
})
export class CatalogPageModule {}
