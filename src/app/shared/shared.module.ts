import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdvantagesComponent } from 'src/app/shared/components/advantages/advantages.component';
import { CallbackFormComponent } from 'src/app/shared/components/callback-form/callback-form.component';
import { CategoryTileComponent } from 'src/app/shared/components/category-tile/category-tile.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ReviewCardComponent } from 'src/app/shared/components/review-card/review-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { ProductComponent } from './components/product/product.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { AnotherSectionComponent } from './components/another-section/another-section.component';

@NgModule({
  imports: [RouterModule, InputComponent, ReactiveFormsModule, NgForOf, NgIf, CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
    SocialBlockComponent,
    CallbackFormComponent,
    AdvantagesComponent,
    ProductComponent,
    ProductGalleryComponent,
    AnotherSectionComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
    ReviewCardComponent,
    GalleryComponent,
    SocialBlockComponent,
    CallbackFormComponent,
    AdvantagesComponent,
    ProductComponent,
    AnotherSectionComponent,
  ],
})
export class SharedModule {}
