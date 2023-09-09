import { Component } from '@angular/core';
import { ImageViewerService } from 'src/app/shared/components/image-viewer/image-viewer.service';

import { Photo } from 'src/app/shared/components/gallery/gallery.component';
import { Image } from '../../../pages/about/components/certificates/certificates.component';

@Component({
  selector: 'app-image-viewer',
  templateUrl: 'image-viewer.component.html',
  styleUrls: ['image-viewer.component.scss'],
})
export class ImageViewerComponent {
  public imageList: Photo[] | Image[] = [];
  public currentImageIndex: number = 0;

  isShowImageViewer: boolean = false;

  public closeFull(): void {
    this.isShowImageViewer = false;
  }

  public nextImage(): void {
    this.currentImageIndex += 1;
    if (this.currentImageIndex === this.imageList.length) {
      this.currentImageIndex = 0;
    }
  }

  public backImage(): void {
    this.currentImageIndex -= 1;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.imageList.length - 1;
    }
  }

  constructor(private imageViewerService: ImageViewerService) {
    this.imageViewerService.onOpenViewer.subscribe((imageViewerContext) => {
      this.imageList = imageViewerContext.imageList;
      this.currentImageIndex = imageViewerContext.startFrom;

      this.isShowImageViewer = true;
    });
  }
}
