import { Component, Input } from '@angular/core';

export type Photo = {
 preview: string;
 retinaSize?: string;
}

@Component({
  selector: 'app-another-section',
  templateUrl: './another-section.component.html',
  styleUrls: ['./another-section.component.scss'],
})
export class AnotherSectionComponent {
  @Input() photoList: Photo[] = []
}
