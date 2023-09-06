import { ChangeDetectorRef, Component } from '@angular/core';

type Image = {
  id: number;
  preview: string;
  retinaSize: string;
};

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  constructor(private changeDetection: ChangeDetectorRef) {}
  isFull: boolean = false;
  idImage: number = 1;

  readonly imageList: Image[] = [
    { id: 1, preview: 'about-certificat-1@1x.png', retinaSize: 'about-certificat-1@1x.png' },
    { id: 2, preview: 'about-certificat-2@1x.png', retinaSize: 'about-certificat-2@1x.png' },
    { id: 3, preview: 'about-certificat-3@1x.png', retinaSize: 'about-certificat-3@1x.png' },
  ];

  public showFull(id: number): void {
    this.isFull = true;
    this.idImage = id;
  }

  public closeFull(): void {
    this.isFull = false;
  }

  public nextImage(): void {
    let id = this.idImage;
    if (++id == 4) {
      this.idImage = 1;
    } else {
      ++this.idImage;
    }
    this.changeDetection.detectChanges();
  }

  public backImage(): void {
    let id = this.idImage;
    if (--id == 0) this.idImage = 3;
    else --this.idImage;
    this.changeDetection.detectChanges();
  }
}
