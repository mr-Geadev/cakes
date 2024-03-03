import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiDialogModule } from '@taiga-ui/core';
import { CategoryTileComponent } from 'src/app/shared/components/category-tile/category-tile.component';
import { IconsDefinitionComponent } from 'src/app/shared/components/icons-definition/icons-definition.component';
import { ImageViewerComponent } from 'src/app/shared/components/image-viewer/image-viewer.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { OrderFormComponent } from 'src/app/entities/order/components/order-form/order-form.component';
import { ReviewCardComponent } from 'src/app/shared/components/review-card/review-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SvgIconComponent } from 'src/app/shared/components/svg-icon/svg-icon.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';

@NgModule({
  imports: [RouterModule, InputComponent, SvgIconComponent, ReactiveFormsModule, TuiDialogModule, NgForOf, NgIf, CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
    SocialBlockComponent,
    ProductGalleryComponent,

    ImageViewerComponent,
    IconsDefinitionComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
    SocialBlockComponent,
    ProductGalleryComponent,

    ImageViewerComponent,
    IconsDefinitionComponent,
  ],
})
export class SharedModule {}
