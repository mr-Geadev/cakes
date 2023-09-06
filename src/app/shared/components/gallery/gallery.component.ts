import { Component, Input } from '@angular/core';

export type Photo = {
  id: number;
  preview: string;
  retinaSize?: string;
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  isFull: boolean = false;
  idImage: number = 1;

  @Input() photoList: Photo[] = [];

  public showFull(id: number): void {
    console.log('sad');
    this.isFull = true;
    this.idImage = id;
  }

  public closeFull(targetName: string): void {
    if (this.isFull && targetName != 'button') this.isFull = false;
  }

  public nextImage(): void {
    let id = this.idImage;
    if (++id == this.photoList.length + 1) {
      this.idImage = 1;
    } else {
      ++this.idImage;
    }
  }

  public backImage(): void {
    let id = this.idImage;
    if (--id == 0) this.idImage = 3;
    else --this.idImage;
  }
}
