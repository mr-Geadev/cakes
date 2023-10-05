import { Component } from '@angular/core';
import { ImageViewerService } from '../../../../shared/components/image-viewer/image-viewer.service';

export type Image = {
  preview: string;
  retinaSize?: string;
};

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  readonly imageList: Image[] = [
    {
      preview: '/assets/images/about/about-certificat-1@1x.png',
      retinaSize: '/assets/images/about/about-certificat-1@1x.png',
    },
    {
      preview: '/assets/images/about/about-certificat-2@1x.png',
      retinaSize: '/assets/images/about/about-certificat-2@1x.png',
    },
    {
      preview: '/assets/images/about/about-certificat-3@1x.png',
      retinaSize: '/assets/images/about/about-certificat-3@1x.png',
    },
  ];

  public showFull(index: number): void {
    this.imageViewerService.openViewer(index, this.imageList);
  }

  constructor(private imageViewerService: ImageViewerService) {}
}
