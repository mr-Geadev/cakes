import { Component } from '@angular/core';
import { Photo } from 'src/app/shared/components/gallery/gallery.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  readonly photoList: Photo[] = [
    { id: 1, preview: 'photo_1.png', retinaSize: 'photo_1@2x.png' },
    { id: 2, preview: 'photo_2.png', retinaSize: 'photo_2@2x.png' },
    { id: 3, preview: 'photo_3.png', retinaSize: 'photo_3@2x.png' },
    { id: 4, preview: 'photo_4.png', retinaSize: 'photo_4@2x.png' },
    { id: 5, preview: 'photo_5.png', retinaSize: 'photo_5@2x.png' },
    { id: 6, preview: 'photo_6.png', retinaSize: 'photo_6@2x.png' },
    { id: 7, preview: 'photo_7.png', retinaSize: 'photo_7@2x.png' },
    { id: 8, preview: 'photo_8.png', retinaSize: 'photo_8@2x.png' },
  ];
}
