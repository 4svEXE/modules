import { Component } from '@angular/core';
import { SwiperComponent } from "../../shared/components/swiper/swiper.component";
import { RouterLink } from '@angular/router';
import { BlogSuggestionsComponent } from "../../shared/components/blog-suggestions/blog-suggestions.component";

@Component({
  selector: 'app-module-house-launch',
  imports: [SwiperComponent, RouterLink, BlogSuggestionsComponent],
  templateUrl: './module-house-launch.component.html',
  styleUrl: './module-house-launch.component.scss'
})
export class ModuleHouseLaunchComponent {
  slides = [
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
}
