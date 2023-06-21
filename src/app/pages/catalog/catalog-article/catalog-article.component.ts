import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-catalog-article',
  templateUrl: './catalog-article.component.html',
  styleUrls: ['./catalog-article.component.scss']
})
export class CatalogArticleComponent {
  readonly content = this.route.data.pipe(
    map((data) => data['articleContent']),
  )

  constructor(private route: ActivatedRoute) {}
}
