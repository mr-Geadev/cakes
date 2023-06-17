import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogPage } from 'src/app/pages/catalog/catalog.page';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '**',
      component: CatalogPage,
      children: []
    }]),
    SharedModule,
    ReactiveFormsModule,
    InputComponent,
  ],
  declarations: [
    CatalogPage
  ],
  providers: [],
  exports: [],
})
export class CatalogPageModule {

}
