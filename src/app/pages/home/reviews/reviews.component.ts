import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { reviewsJSON } from './review.db';
import { CallToActionComponent } from '../../../shared/components/call-to-action/call-to-action.component';
import { TranslateModule } from '@ngx-translate/core';

register(); // Реєструємо Swiper як Web Component

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, CallToActionComponent, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsComponent {
  isLoading = false;
  errorMessage = '';
  reviews = reviewsJSON;

  swiperConfig = {
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
    spaceBetween: 10,
    modules: [EffectCoverflow, Pagination, Navigation],
  };

  trackById(index: number, review: any): string {
    return `original-${review.id}-${index}`;
  }
}
