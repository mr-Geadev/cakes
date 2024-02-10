import { Inject, Injectable, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { OrderFormComponent } from 'src/app/shared/components/order-form/order-form.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

export interface OrderModalContext {
  product: string
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(
    private dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}

  createOrderForProduct(product: OrderModalContext['product']) {
    const component = new PolymorpheusComponent(OrderFormComponent, this.injector)

    this.dialogs.open(
      component,
      {
        appearance: 'taviko-modal',
        closeable: false,
        size: 'auto',
        data: {
          product
        }
      },
    ).subscribe();
  }

}
