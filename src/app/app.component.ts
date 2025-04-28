import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MobileMenuComponent } from './core/components/mobile-menu/mobile-menu.component';

import { LanguageService } from './core/services/language.service';
import { MarqueeComponent } from './shared/components/marquee/marquee.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { CookieConsentComponent } from "./core/components/cookie-consent/cookie-consent.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    MarqueeComponent,
    CookieConsentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  WATSAPP = environment.WATSAPP;

  scrollToContact() {
    const element = document.querySelector('#contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.loadLanguage();
  }
}
