import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
  @Input() messages = [
    {
      text: 'MESSAGES.MSG_1',
      link: null
    },
    {
      text: 'MESSAGES.MSG_2',
    },
    {
      text: 'MESSAGES.MSG_3',
    },
    {
      text: 'MESSAGES.MSG_4',
    },
    {
      text: 'MESSAGES.MSG_5',
    },
    {
      text: 'MESSAGES.MSG_6',
    },
    {
      text: 'MESSAGES.MSG_7',
    },
    {
      text: 'MESSAGES.MSG_8',
    },
    {
      text: 'MESSAGES.MSG_9',
    }
  ];

  getLink(link: any) {
    return link ? link : '#contact-form'
  }
}
