import { ModalComponent } from './../../core/components/modal/modal.component';
import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ReviewsComponent } from './reviews/reviews.component';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProblemSolutionComponent } from './problem-solution/problem-solution.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrustSectionComponent } from './trust-section/trust-section.component';
import { FAQComponent } from './faq/faq.component';
import { FinalCTAComponent } from './final-cta/final-cta.component';
import { ModalService } from '../../core/components/modal/modal.service';
import { OneTimeOfferComponent } from '../../shared/components/one-time-offer/one-time-offer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TranslateModule,
    CommonModule,
    ModalComponent,
    HeroSectionComponent,
    ProblemSolutionComponent,
    HowItWorksComponent,
    ProfitCalculatorComponent,
    GalleryComponent,
    TrustSectionComponent,
    FAQComponent,
    FinalCTAComponent,
    ReviewsComponent,
    OneTimeOfferComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements AfterViewInit {
  videoLoaded = false;

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
    modules: [EffectCoverflow, Pagination, Navigation],
  };

  constructor(private modalService: ModalService) { }

  onVideoLoaded() {
    this.videoLoaded = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalService.open();
    }, 35000); // автостарт модалки - 35c
  }
}


