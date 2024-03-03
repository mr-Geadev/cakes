import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CallbackFormComponent } from 'src/app/entities/order/components/callback-form/callback-form.component';
import { OrderFormComponent } from 'src/app/entities/order/components/order-form/order-form.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';

@NgModule({
  imports: [InputComponent, ReactiveFormsModule],
  declarations: [
    CallbackFormComponent,
    OrderFormComponent
  ],
  exports: [
    CallbackFormComponent,
    OrderFormComponent
  ]
})
export class OrderModule {}
