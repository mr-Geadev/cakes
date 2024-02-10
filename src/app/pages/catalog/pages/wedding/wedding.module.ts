import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeddingComponent } from 'src/app/pages/catalog/pages/wedding/wedding.component';
import { BannerComponent } from 'src/app/pages/catalog/pages/wedding/components/banner/banner.component';
import { TermsComponent } from 'src/app/pages/catalog/pages/wedding/components/terms/terms.component';
import { ExamplesComponent } from 'src/app/pages/catalog/pages/wedding/components/examples/examples.component';

@NgModule({
  declarations: [WeddingComponent, BannerComponent, TermsComponent, ExamplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeddingComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class WeddingModule {}
