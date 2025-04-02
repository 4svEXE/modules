import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReviewsComponent } from './reviews/reviews.component';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ContactFormComponent } from "../../shared/components/contact-form/contact-form.component";
import { SwiperComponent } from "../../shared/components/swiper/swiper.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TranslateModule,
    CommonModule,
    ReviewsComponent,
    ContactFormComponent,
    SwiperComponent
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


