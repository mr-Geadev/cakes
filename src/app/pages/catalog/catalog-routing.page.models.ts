import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from 'src/app/pages/catalog/pages/bakery/bakery.component';
import { BreadComponent } from 'src/app/pages/catalog/pages/bread/bread.component';
import { ClassicComponent } from 'src/app/pages/catalog/pages/classic/classic.component';
import { DessertsComponent } from 'src/app/pages/catalog/pages/desserts/desserts.component';
import { DietComponent } from 'src/app/pages/catalog/pages/diet/diet.component';

const routes: Routes = [
  {
    path: 'individual',
    loadChildren: () => import('src/app/pages/catalog/pages/individual/individual-cakes.module').then((m) => m.IndividualCakesModule),
  },
  {
    path: 'wedding',
    loadChildren: () => import('./pages/wedding/wedding.module').then((m) => m.WeddingModule),
  },
  {
    path: 'desserts',
    component: DessertsComponent,
  },
  {
    path: 'classic',
    component: ClassicComponent,
  },
  {
    path: 'bakery',
    component: BakeryComponent,
  },
  {
    path: 'bread',
    component: BreadComponent,
  },
  {
    path: 'diet',
    component: DietComponent,
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
