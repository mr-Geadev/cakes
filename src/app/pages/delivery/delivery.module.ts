import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryComponent } from './delivery.component';
import { InformationComponent } from './components/information/information.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [DeliveryComponent, InformationComponent, PickupComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeliveryComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class DeliveryModule {}
