import { Component } from '@angular/core';
import { CategoryList } from 'src/app/categories';

@Component({
  selector: 'app-catalog',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  readonly CategoryList = CategoryList;
  readonly test = []
}
