import { Component } from '@angular/core';
import { OrderService } from 'src/app/entities/order/order.service';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.scss'],
})
export class ProductDetailedComponent {

  constructor(
    private orderService: OrderService,
  ) {}

  open() {
    this.orderService.createOrderForProduct('медовик');
  }

}

