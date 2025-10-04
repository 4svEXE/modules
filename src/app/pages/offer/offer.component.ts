import { Component } from '@angular/core';
import { FinalCTAComponent } from "../home/final-cta/final-cta.component";
import { CallToActionComponent } from "../../shared/components/call-to-action/call-to-action.component";
import { SwiperComponent } from "../../shared/components/swiper/swiper.component";
import { ReviewsComponent } from "../home/reviews/reviews.component";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [FinalCTAComponent, CallToActionComponent, SwiperComponent, ReviewsComponent]
})
export class OfferComponent {
  videoLoaded = false;

  features = [
    {
      title: 'Екстремальна Енергоефективність',
      description: `PIR-панелі (8 см стіни, підлога; 15 см стеля), будинок витримує -25°C до +40°C, рекуперація повітря, панорамні енергозберігаючі вікна.`,
    },
    {
      title: 'Швидкість та Гнучкість',
      description: `Від замовлення до першого гостя — 30 днів. Встановлення 1–4 години, легке підключення комунікацій, мобільність для зміни локації.`,
    },
    {
      title: 'Комплектація та Якість',
      description: `Душ, санвузол, кухня, Wi-Fi, кондиціонер, опалення. Довговічність понад 50 років. Преміум-опція: Hot-Tub при оптовій купівлі.`,
    },
  ];

  roiTable = [
    { metric: 'Середній Дохід', traditional: 'Низький', domivka: '€3,700–€3,800/місяць', advantage: 'Зростання доходу у 2–3 рази' },
    { metric: 'Ціна за Ніч', traditional: 'Низька', domivka: '€210–€320', advantage: 'Комфорт дозволяє підняти ціну' },
    { metric: 'Окупність (ROI)', traditional: 'Довга/Невизначена', domivka: '2–4 сезони', advantage: 'Швидка віддача інвестицій' },
    { metric: 'Тривалість Сезону', traditional: 'Тільки літо', domivka: 'Цілорічна', advantage: 'Зимові бронювання покривають частину річних витрат' },
  ];

  onVideoLoaded() {
    this.videoLoaded = true;
  }

  slides = [
    './assets/img/gallery/interior/1.webp',
    './assets/img/gallery/interior/2.webp',
    './assets/img/gallery/interior/3.webp',
    './assets/img/gallery/interior/4.webp',
    './assets/img/gallery/interior/5.webp',
    './assets/img/gallery/interior/6.webp',
    './assets/img/gallery/interior/7.webp',
    './assets/img/gallery/interior/8.webp',
    './assets/img/gallery/interior/9.webp',
    './assets/img/gallery/interior/10.webp',
  ]

  slides2 = [
    './assets/videos/instalation/1.MOV',
    './assets/videos/instalation/2.MOV',
    './assets/videos/instalation/3.MOV',
    './assets/videos/instalation/4.MOV',
    // './assets/videos/instalation/5.MOV',
    // './assets/videos/instalation/6.MOV',
    // './assets/videos/instalation/7.MOV',
    // './assets/videos/instalation/8.MOV',
    // './assets/videos/instalation/9.MOV',
    // './assets/videos/instalation/10.MOV',
  ]

   slides3 = [
    './assets/videos/avert/1.mp4',
    './assets/videos/avert/2.mp4',
    './assets/videos/avert/3.mp4',
  ]
}
