import { Component } from '@angular/core';
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-how-it-works',
  imports: [SwiperComponent, CallToActionComponent, TranslateModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  isActiveAlert = false
  slides = [
    './assets/img/gallery/1.jpg',
  ]

  activateAlert(){
    this.isActiveAlert = true
  }
}
