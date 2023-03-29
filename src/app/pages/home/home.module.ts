import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/pages/home/components/about/about.component';
import { AdvantagesComponent } from 'src/app/pages/home/components/advantages/advantages.component';
import { BannerComponent } from 'src/app/pages/home/components/banner/banner.component';
import { CallbackFormComponent } from 'src/app/pages/home/components/callback-form/callback-form.component';
import { CatalogComponent } from 'src/app/pages/home/components/catalog/catalog.component';
import { PortfolioComponent } from 'src/app/pages/home/components/portfolio/portfolio.component';
import { ReviewsComponent } from 'src/app/pages/home/components/reviews/reviews.component';
import { SpecialOfferComponent } from 'src/app/pages/home/components/special-offer/special-offer.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,

    AboutComponent,
    BannerComponent,
    CatalogComponent,
    AdvantagesComponent,
    PortfolioComponent,
    SpecialOfferComponent,
    ReviewsComponent,
    CallbackFormComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: HomeComponent,
        }]),
        SharedModule,
        ReactiveFormsModule,
    ],
  providers: [],
  exports: [],
})
export class HomeModule {

}
