import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryPageComponent } from 'src/app/pages/delivery/delivery-page.component';
import { InformationComponent } from './components/information/information.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [DeliveryPageComponent, InformationComponent, PickupComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeliveryPageComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class DeliveryPageModule {}
