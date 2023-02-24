import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryTileComponent } from 'src/app/shared/components/category-tile/category-tile.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoryTileComponent,
  ],
})
export class SharedModule {}
