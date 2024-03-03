import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () => import('src/app/pages/product/product-page.module').then((m) => m.ProductPageModule),
  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery.module').then((m) => m.DeliveryModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('src/app/pages/catalog/catalog.page.module').then((m) => m.CatalogPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
