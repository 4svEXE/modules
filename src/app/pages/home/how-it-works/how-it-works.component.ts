import { Component } from '@angular/core';
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";

@Component({
  selector: 'app-how-it-works',
  imports: [SwiperComponent, CallToActionComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  slides = [
    // './assets/img/gallery/0.jpg',
    './assets/img/gallery/1.jpg',
    './assets/img/gallery/2.jpg',
    './assets/img/gallery/3.jpg',
    './assets/img/gallery/4.jpg',
    './assets/img/gallery/5.jpg',
    './assets/img/gallery/6.jpg',
    './assets/img/gallery/7.jpg',
    './assets/img/gallery/8.jpg',
    './assets/img/gallery/9.jpg',
  ]
}
