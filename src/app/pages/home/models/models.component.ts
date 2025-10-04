import { Component } from '@angular/core';
import { SwiperComponent } from "../../../shared/components/swiper/swiper.component";

@Component({
  selector: 'app-models',
  imports: [SwiperComponent],
  templateUrl: './models.component.html',
  styleUrl: './models.component.scss'
})
export class ModelsComponent {
  model1Light = [
    './assets/img/models/m1/1.jpg',
    './assets/img/models/m1/2.jpg',
    './assets/img/models/m1/3.jpg',
    './assets/img/models/m1/4.jpg',
    './assets/img/models/m1/5.jpg',
    './assets/img/models/m1/6.jpg',
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

  model1Dark = [
    './assets/img/models/m2/1.jpg',
    './assets/img/models/m/2.jpg',
    './assets/img/models/m2/3.jpg',
    './assets/img/models/m2/4.jpg',

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

  model2Dark = [

    './assets/img/models/m3/4.jpg',
    './assets/img/models/m3/5.jpg',
    './assets/img/models/m3/6.jpg',
    './assets/img/models/m3/7.jpg',
    './assets/img/models/m3/8.jpg',
    './assets/img/models/m3/1.jpg',
    './assets/img/models/m3/2.jpg',
    './assets/img/models/m3/3.jpg',

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

  modelStealth = [
    './assets/img/models/m4/1.jpg',
    './assets/img/models/m4/2.jpg',
    './assets/img/models/m4/3.jpg',
  ]

  videos = [
    './assets/videos/avert/1.mp4',
    './assets/videos/avert/2.mp4',
    './assets/videos/avert/3.mp4',
  ]
}
