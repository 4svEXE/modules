import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TranslateModule,
    CommonModule,
    HeroSectionComponent,
    ProblemSolutionComponent,
    HowItWorksComponent,
    ProfitCalculatorComponent,
    GalleryComponent,
    TrustSectionComponent,
    FAQComponent,
    FinalCTAComponent,
    ReviewsComponent
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

  onVideoLoaded() {
    this.videoLoaded = true;
  }

  // scroll
  @ViewChildren('animatedBlock') blocks!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('slide-in-blurred-left');
          }, 1000 * i);
        }
      });
    }, { threshold: 0.2 });

    this.blocks.forEach(block => observer.observe(block.nativeElement));
  }

}


