import { Component, Input } from '@angular/core';

export type Photo = {
  preview: string;
  retinaSize?: string;
};

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss'],
  standalone: true
})
//TODO удалить это
export class RecommendationSectionComponent {
  @Input() photoList: Photo[] = [];
}
