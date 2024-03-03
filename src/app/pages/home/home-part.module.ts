import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/pages/home/components/about/about.component';
import { BannerComponent } from 'src/app/pages/home/components/banner/banner.component';
import { CategoriesListComponent } from 'src/app/pages/home/components/catalog/categories-list.component';
import { PortfolioComponent } from 'src/app/pages/home/components/portfolio/portfolio.component';
import { ReviewsComponent } from 'src/app/pages/home/components/reviews/reviews.component';
import { SpecialOfferComponent } from 'src/app/pages/home/components/special-offer/special-offer.component';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvantagesComponent } from 'src/app/shared/static-blocks/advantages/advantages.component';

@NgModule({
  declarations: [
    HomePageComponent,

    AboutComponent,
    BannerComponent,
    CategoriesListComponent,
    PortfolioComponent,
    SpecialOfferComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
    SharedModule,
    ReactiveFormsModule,
    AdvantagesComponent
  ],
  providers: [],
  exports: [],
})
export class HomePartModule {}
