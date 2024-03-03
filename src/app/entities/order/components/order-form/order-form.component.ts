import { Component, Inject } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import { OrderModalContext } from 'src/app/entities/order/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: 'order-form.component.html',
  styleUrls: ['order-form.component.scss'],
})
export class OrderFormComponent {

  get productName() {
    return this.context.data.product;
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, OrderModalContext>,
  ) {}
}
