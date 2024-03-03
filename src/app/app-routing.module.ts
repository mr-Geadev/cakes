import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/pages/home/home-part.module').then((m) => m.HomePartModule),
  },
  {
    path: 'product',
    loadChildren: () => import('src/app/pages/product/product-page.module').then((m) => m.ProductPageModule),
  },
  {
    path: 'delivery',
    loadChildren: () => import('src/app/pages/delivery/delivery-page.module').then((m) => m.DeliveryPageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/pages/about/about.page.module').then((m) => m.AboutPageModule),
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
