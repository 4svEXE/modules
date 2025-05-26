import { Component } from '@angular/core';
import { MarqueeComponent } from "../../../shared/components/marquee/marquee.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from "../../../core/components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-hero-section',
  imports: [MarqueeComponent, CallToActionComponent, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  videoLoaded = false;

  onVideoLoaded() {
    this.videoLoaded = true;
  }
}
