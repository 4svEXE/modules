import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperComponent } from '../swiper/swiper.component';
import { MarqueeComponent } from "../marquee/marquee.component";

@Component({
  selector: 'app-one-time-offer',
  templateUrl: './one-time-offer.component.html',
  styleUrls: ['./one-time-offer.component.scss'],
  imports: [CommonModule, FormsModule, TranslateModule, SwiperComponent, MarqueeComponent]
})
export class OneTimeOfferComponent implements OnInit {
  deadline = new Date('2025-05-31T23:59:59');
  timeLeft = '';

  slides = [
    './assets/img/gallery/1.jpg',
    './assets/img/gallery/2.jpg',
    './assets/img/gallery/3.jpg',
    './assets/img/gallery/6.jpg',
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

  ngOnInit(): void {
    this.updateTimeLeft();
    setInterval(() => this.updateTimeLeft(), 1000);
  }

  updateTimeLeft(): void {
    const now = new Date().getTime();
    const distance = this.deadline.getTime() - now;

    if (distance < 0) {
      this.timeLeft = 'unactive';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  submitForm(form: any): void {
    if (form.valid) {
      const { name, phone } = form.value;
      console.log('Форма надіслана:', { name, phone });
      form.reset();
    }
  }
}
