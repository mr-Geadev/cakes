import { Component } from '@angular/core';
import { OrderService } from 'src/app/pages/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  constructor(
    private orderService: OrderService,
  ) {}

  open() {
    this.orderService.createOrderForProduct('медовик');
  }

}

