import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageComponent } from 'src/app/pages/about/about-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [AboutPageComponent, DescriptionComponent, CertificatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPageComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class AboutPageModule {}
