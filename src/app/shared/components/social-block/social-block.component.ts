import { Component, Input } from '@angular/core';

type SocialLink = {
  name: string;
  link: string;
  iconName: string;
};

export const socialLinkList: SocialLink[] = [
  {
    name: 'vk',
    link: 'https://vk.com/',
    iconName: 'vk-circle',
  },
  {
    name: 'telegram',
    link: 'https://t.me/Drunk_Bear19',
    iconName: 'telegram-circle',
  },
  {
    name: 'whatsapp',
    link: 'https://wa.me/79000000000',
    iconName: 'whatsapp-circle',
  },
  {
    name: 'viber',
    link: 'viber://chat?number=%2B79372545419',
    iconName: 'viber-circle',
  },
];

@Component({
  selector: 'app-social-block',
  templateUrl: './social-block.component.html',
  styleUrls: ['./social-block.component.scss'],
})
export class SocialBlockComponent {
  @Input() horizontal = false;
  @Input() type: 'glass' | 'plain' = 'plain';

  socialLinkList = socialLinkList;
}
