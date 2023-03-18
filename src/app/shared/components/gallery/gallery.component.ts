import { Component, Input } from '@angular/core';

export type Photo = {
 preview: string;
 retinaSize?: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() photoList: Photo[] = []
}
