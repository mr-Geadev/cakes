import { Component } from '@angular/core';
import { socialLinkList } from 'src/app/shared/components/social-block/social-block.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinkList = socialLinkList;
}
