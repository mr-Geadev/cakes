import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entities/product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product!: Product;
}
