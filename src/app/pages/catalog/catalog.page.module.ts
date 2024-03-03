import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from 'src/app/entities/product/product.module';
import { CatalogArticleComponent } from 'src/app/pages/catalog/catalog-article/catalog-article.component';
import { CatalogHeaderComponent } from 'src/app/pages/catalog/catalog-header/catalog-header.component';
import { CatalogRoutingPageModels } from 'src/app/pages/catalog/catalog-routing.page.models';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdvantagesComponent } from 'src/app/shared/static-blocks/advantages/advantages.component';
import { BakeryPageComponent } from 'src/app/pages/catalog/pages/bakery/bakery-page.component';
import { BreadPage } from 'src/app/pages/catalog/pages/bread/bread-page.component';
import { ClassicPageComponent } from 'src/app/pages/catalog/pages/classic/classic-page.component';
import { DessertsPageComponent } from 'src/app/pages/catalog/pages/desserts/desserts-page.component';
import { DietPageComponent } from 'src/app/pages/catalog/pages/diet/diet-page.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingPageModels,
    SharedModule,
    ReactiveFormsModule,
    InputComponent,
    NgOptimizedImage,

    ProductModule,
    AdvantagesComponent,
  ],
  declarations: [
    CatalogHeaderComponent,
    CatalogArticleComponent,
    DessertsPageComponent,
    ClassicPageComponent,
    BakeryPageComponent,
    BreadPage,
    DietPageComponent,
  ],
  providers: [],
  exports: [],
})
export class CatalogPageModule {}
