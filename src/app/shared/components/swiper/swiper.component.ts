import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

register(); // Реєструємо Swiper як Web Component

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  @Input() slides: string[] = ['1', '2']; // Масив слайдів
  @Input() swiperConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 80,
      depth: 200,
      modifier: 1.5,
      slideShadows: false,
    },
    modules: [EffectCoverflow, Pagination, Navigation],
  };

}
