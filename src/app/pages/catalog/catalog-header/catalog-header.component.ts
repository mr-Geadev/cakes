import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.scss'],
})
export class CatalogHeaderComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() illustrationFileName!: string;
  @Input() illustrationMargin!: number;
  @Input() backgroundColor!: string;

  constructor() {}
}
