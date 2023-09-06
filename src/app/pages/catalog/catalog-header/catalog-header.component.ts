import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.scss'],
})
export class CatalogHeaderComponent {
  readonly content = this.route.data.pipe(map((data) => data['headerContent']));

  constructor(private route: ActivatedRoute) {}
}
