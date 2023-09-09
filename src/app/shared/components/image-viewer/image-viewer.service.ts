import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from 'src/app/shared/components/gallery/gallery.component';
import { Image } from 'src/app/pages/about/components/certificates/certificates.component';

interface ImageViewerContext {
  startFrom: number;
  imageList: Photo[] | Image[];
}

@Injectable({
  providedIn: 'root',
})
export class ImageViewerService {
  public onOpenViewer = new Subject<ImageViewerContext>();

  openViewer(startFrom: number, imageList: Photo[] | Image[]) {
    this.onOpenViewer.next({ startFrom, imageList });
  }
}
