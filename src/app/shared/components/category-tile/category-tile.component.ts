import { Component, Input } from '@angular/core';
import { Category } from 'src/app/categories';

@Component({
  selector: 'app-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent {
  @Input() category!: Category;
  @Input() fullWidth = false;

  get imageUrl(): string {
    return `/assets/images/category-background/${this.category.image}`;
  }
}
