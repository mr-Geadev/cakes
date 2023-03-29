import { Component } from '@angular/core';
import { ReviewList } from 'src/app/reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  readonly ReviewList = ReviewList;
}
