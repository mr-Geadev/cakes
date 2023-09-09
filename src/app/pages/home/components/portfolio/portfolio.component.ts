import { Component } from '@angular/core';
import { Photo } from 'src/app/shared/components/gallery/gallery.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  readonly photoList: Photo[] = [
    {
      preview: '/assets/images/home/portfolio/photo_1.png',
      retinaSize: '/assets/images/home/portfolio/photo_1@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_2.png',
      retinaSize: '/assets/images/home/portfolio/photo_2@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_3.png',
      retinaSize: '/assets/images/home/portfolio/photo_3@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_4.png',
      retinaSize: '/assets/images/home/portfolio/photo_4@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_5.png',
      retinaSize: '/assets/images/home/portfolio/photo_5@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_6.png',
      retinaSize: '/assets/images/home/portfolio/photo_6@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_7.png',
      retinaSize: '/assets/images/home/portfolio/photo_7@2x.png',
    },
    {
      preview: '/assets/images/home/portfolio/photo_8.png',
      retinaSize: '/assets/images/home/portfolio/photo_8@2x.png',
    },
  ];
}
