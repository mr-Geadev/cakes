import { Component } from '@angular/core';
import { reviewList } from 'src/app/pages/home/components/reviews/reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  readonly reviewList = reviewList;
}
