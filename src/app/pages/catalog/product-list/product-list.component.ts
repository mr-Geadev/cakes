import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

const MOCK_PRODUCT_LIST: Product[] = [
  { name: 'Наполеон ', price: 1000, priceUnit: 'кг', mainImageUrl: 'napoleon.png' },
  { name: 'Медовик  ', price: 990, priceUnit: 'кг', mainImageUrl: 'medovik.png' },
  { name: 'Три шоколада  ', price: 1100, priceUnit: 'кг', mainImageUrl: 'three-chocolate.png' },
  { name: 'Графские развалины  ', price: 1000, priceUnit: 'кг', mainImageUrl: 'graf.png' },
  { name: 'Птичье молоко  ', price: 1000, priceUnit: 'кг', mainImageUrl: 'bird-milk.png' },
  { name: 'Чизкейк  ', price: 1000, priceUnit: 'кг', mainImageUrl: 'chese-cake.png' },
  { name: 'Прага   ', price: 1200, priceUnit: 'кг', mainImageUrl: 'praga.png' },
  { name: 'Пьяная вишня ', price: 1100, priceUnit: 'кг', mainImageUrl: 'drunk-cherry.png' },
  { name: 'Сметанный торт  ', price: 990, priceUnit: 'кг', mainImageUrl: 'smetana.png' },
  { name: 'Карамельный торт ', price: 1150, priceUnit: 'кг', mainImageUrl: 'caramel.png' },
  { name: 'Тирамису  ', price: 1400, priceUnit: 'кг', mainImageUrl: 'tiramisu.png' },
  { name: 'Эстерхази ', price: 1000, priceUnit: 'кг', mainImageUrl: 'esterhazi.png' },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() productList: Product[] = MOCK_PRODUCT_LIST;
}
