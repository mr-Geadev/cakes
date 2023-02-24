import { Component } from '@angular/core';
import { CategoryList } from 'src/app/categories';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  readonly CategoryList = CategoryList;
  readonly test = []
}
