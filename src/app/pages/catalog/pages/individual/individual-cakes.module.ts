import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndividualCakesComponent } from 'src/app/pages/catalog/pages/individual/individual-cakes.component';
import { BannerComponent } from 'src/app/pages/catalog/pages/individual/components/banner/banner.component';
import { DescriptionComponent } from 'src/app/pages/catalog/pages/individual/components/description/description.component';

@NgModule({
  declarations: [IndividualCakesComponent, BannerComponent, DescriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndividualCakesComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class IndividualCakesModule {}
