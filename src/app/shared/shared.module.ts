import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryTileComponent } from 'src/app/shared/components/category-tile/category-tile.component';
import { ReviewCardComponent } from 'src/app/shared/components/review-card/review-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@NgModule({
  imports: [
    RouterModule,
    NgForOf,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
  ],
})
export class SharedModule {}
