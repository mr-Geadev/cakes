import { Component, Input } from '@angular/core';
import { Review } from 'src/app/pages/home/components/reviews/reviews';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review!: Review;
  @Input() fullWidth = false;
}
