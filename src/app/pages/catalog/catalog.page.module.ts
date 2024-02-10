import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogArticleComponent } from 'src/app/pages/catalog/catalog-article/catalog-article.component';
import { CatalogHeaderComponent } from 'src/app/pages/catalog/catalog-header/catalog-header.component';
import { CatalogRoutingPageModels } from 'src/app/pages/catalog/catalog-routing.page.models';
import { ProductItemComponent } from 'src/app/pages/catalog/product-item/product-item.component';
import { ProductListComponent } from 'src/app/pages/catalog/product-list/product-list.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvantagesComponent } from 'src/app/shared/static-blocks/advantages/advantages.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { ClassicComponent } from './pages/classic/classic.component';
import { BakeryComponent } from './pages/bakery/bakery.component';
import { BreadComponent } from './pages/bread/bread.component';
import { DietComponent } from './pages/diet/diet.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingPageModels,
    SharedModule,
    ReactiveFormsModule,
    InputComponent,
    NgOptimizedImage,
    AdvantagesComponent
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    CatalogHeaderComponent,
    CatalogArticleComponent,
    DessertsComponent,
    ClassicComponent,
    BakeryComponent,
    BreadComponent,
    DietComponent,
  ],
  providers: [],
  exports: [],
})
export class CatalogPageModule {}
