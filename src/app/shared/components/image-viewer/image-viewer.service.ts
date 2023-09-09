import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from 'src/app/shared/components/gallery/gallery.component';

interface ImageViewerContext {
  startFrom: number;
  imageList: Photo[];
}

@Injectable({
  providedIn: 'root',
})
export class ImageViewerService {
  public onOpenViewer = new Subject<ImageViewerContext>();

  openViewer(startFrom: number, imageList: Photo[]) {
    this.onOpenViewer.next({ startFrom, imageList });
  }
}
