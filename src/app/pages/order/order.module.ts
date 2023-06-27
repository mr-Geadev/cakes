import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderComponent } from "./order.component";
import { BannerComponent } from "./components/banner/banner.component";
import { TermsComponent } from "./components/terms/terms.component";
import { DescComponent } from "./components/desc/desc.component";


@NgModule({
  declarations: [
    OrderComponent,

    BannerComponent,
    TermsComponent,
    DescComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: OrderComponent,
    }]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class OrderModule {

}
