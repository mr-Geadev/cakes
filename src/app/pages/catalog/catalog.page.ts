import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage {
  readonly typeHeader = this.route.data.pipe(
    map((data) => data['typeHeader']),
  )

  constructor(private route: ActivatedRoute) {}
}
