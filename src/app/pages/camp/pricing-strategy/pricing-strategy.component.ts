import { Component } from '@angular/core';
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pricing-strategy',
  imports: [SwiperComponent, CallToActionComponent, RouterLink],
  templateUrl: './pricing-strategy.component.html',
  styleUrl: './pricing-strategy.component.scss'
})
export class PricingStrategyComponent {
  slides = [
    './assets/img/camp/airbnb-1.jpg',
    './assets/img/camp/airbnb-2.jpg',
  ];
}
