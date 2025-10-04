import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperComponent } from "../../shared/components/swiper/swiper.component";
import { BlogSuggestionsComponent } from "../../shared/components/blog-suggestions/blog-suggestions.component";

@Component({
  selector: 'app-comfort',
  imports: [RouterLink, SwiperComponent, BlogSuggestionsComponent],
  templateUrl: './comfort.component.html',
  styleUrl: './comfort.component.scss'
})
export class ComfortComponent {
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
