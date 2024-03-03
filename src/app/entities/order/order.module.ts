import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CallbackFormComponent } from 'src/app/entities/order/components/callback-form/callback-form.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';

@NgModule({
  imports: [InputComponent, ReactiveFormsModule],
  declarations: [CallbackFormComponent],
  exports: [CallbackFormComponent]
})
export class OrderModule {}
