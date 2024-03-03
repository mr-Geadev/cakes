import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryPageComponent } from 'src/app/pages/catalog/pages/bakery/bakery-page.component';
import { BreadPage } from 'src/app/pages/catalog/pages/bread/bread-page.component';
import { ClassicPageComponent } from 'src/app/pages/catalog/pages/classic/classic-page.component';
import { DessertsPageComponent } from 'src/app/pages/catalog/pages/desserts/desserts-page.component';
import { DietPageComponent } from 'src/app/pages/catalog/pages/diet/diet-page.component';

const routes: Routes = [
  {
    path: 'individual',
    loadChildren: () => import('src/app/pages/catalog/pages/individual/individual-cakes-page.module').then((m) => m.IndividualCakesPageModule),
  },
  {
    path: 'wedding',
    loadChildren: () => import('src/app/pages/catalog/pages/wedding/wedding-page.module').then((m) => m.WeddingPageModule),
  },
  {
    path: 'desserts',
    component: DessertsPageComponent,
  },
  {
    path: 'classic',
    component: ClassicPageComponent,
  },
  {
    path: 'bakery',
    component: BakeryPageComponent,
  },
  {
    path: 'bread',
    component: BreadPage,
  },
  {
    path: 'diet',
    component: DietPageComponent,
  },
  {
    path: '**',
    redirectTo: 'desserts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingPageModels {}
