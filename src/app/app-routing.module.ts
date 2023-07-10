import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery.module').then(m => m.DeliveryModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('src/app/pages/catalog/catalog.page.module').then(m => m.CatalogPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('src/app/pages/order/custom.module').then(m => m.CustomModule)
  }, {
    path: 'wedding',
    loadChildren: () => import('src/app/pages/wedding/wedding.module').then(m => m.WeddingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
