import { Component } from '@angular/core';
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";

@Component({
  selector: 'app-modular-houses',
  standalone: true,
  templateUrl: './modular-houses.component.html',
  styleUrls: ['./modular-houses.component.scss'],
  imports: [CallToActionComponent, SwiperComponent]
})
export class ModularHousesComponent {
  slides = [
    './assets/img/gallery/modular-1.jpg',
    './assets/img/gallery/modular-2.jpg',
    './assets/img/gallery/modular-3.jpg'
  ];
}
