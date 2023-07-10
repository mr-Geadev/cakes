import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomComponent } from "./custom.component";
import { BannerComponent } from "./components/banner/banner.component";
import { DescriptionComponent } from "./components/description/description.component";


@NgModule({
  declarations: [
    CustomComponent,

    BannerComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CustomComponent,
    }]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class CustomModule {

}
