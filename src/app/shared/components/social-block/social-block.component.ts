import {Component} from '@angular/core';

type SocialLink = {
  name: string,
  link: string,
  icon: string
}

export const socialLinkList : SocialLink[] = [
  {
    name: 'vk',
    link: 'https://vk.com/',
    icon: 'assets/images/icons/vk-circle.svg'
  },
  {
    name: 'telegram',
    link: 'https://t.me/Drunk_Bear19',
    icon: 'assets/images/icons/telegram-circle.svg'
  },
  {
    name: 'whatsapp',
    link: 'https://wa.me/79000000000',
    icon: 'assets/images/icons/whatsapp-circle.svg'
  },
  {
    name: 'viber',
    link: 'viber://chat?number=%2B79372545419',
    icon: 'assets/images/icons/viber-circle.svg'
  }
]

@Component({
  selector: 'app-social-block',
  templateUrl: './social-block.component.html',
  styleUrls: ['./social-block.component.scss']
})
export class SocialBlockComponent {
  socialLinkList = socialLinkList;
}
