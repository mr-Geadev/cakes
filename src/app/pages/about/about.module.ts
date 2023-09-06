import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about.component';
import { DescriptionComponent } from './components/description/description.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [AboutComponent, DescriptionComponent, CertificatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [],
  exports: [],
})
export class AboutModule {}
