import { Component, Input } from '@angular/core';
import { ImageViewerService } from 'src/app/shared/components/image-viewer/image-viewer.service';

export type Photo = {
  preview: string;
  retinaSize?: string;
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() photoList: Photo[] = [];

  public showFull(index: number): void {
    this.imageViewerService.openViewer(index, this.photoList);
  }

  constructor(private imageViewerService: ImageViewerService) {}
}
