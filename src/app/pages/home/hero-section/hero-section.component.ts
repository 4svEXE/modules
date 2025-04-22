import { messages } from './../../../../assets/i18n/marq_msgs';
import { Component } from '@angular/core';
import { MarqueeComponent } from "../../../shared/components/marquee/marquee.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [MarqueeComponent, CallToActionComponent, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  messages = messages;
  videoLoaded = false;

  onVideoLoaded() {
    this.videoLoaded = true;
  }
}
