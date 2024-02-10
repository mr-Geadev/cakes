import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-article',
  templateUrl: './catalog-article.component.html',
  styleUrls: ['./catalog-article.component.scss'],
})
export class CatalogArticleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() text!: string;
  @Input() illustrationFileName!: string

  constructor() {}
}
