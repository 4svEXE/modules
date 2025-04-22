import { Component } from '@angular/core';
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  imports: [SwiperComponent, CallToActionComponent, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
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
}
