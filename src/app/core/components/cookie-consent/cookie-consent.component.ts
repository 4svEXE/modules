import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService } from './cookie-consent.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent {
  hasConsent = false;
  isVisible = true; // Початково банер відображається

  constructor(private cookieConsentService: CookieConsentService) {
    // Слухаємо зміни стану згоди
    this.cookieConsentService.consentStatus$.subscribe((consent) => {
      this.hasConsent = consent;
      this.isVisible = !consent; // Якщо є згода, приховуємо банер
    });
  }

  acceptCookies(): void {
    this.cookieConsentService.giveConsent();
    this.isVisible = false; // Приховуємо банер після згоди
    window.location.reload(); // Перезавантажуємо сторінку
  }

  rejectCookies(): void {
    this.cookieConsentService.revokeConsent();
    this.isVisible = false; // Приховуємо банер після відмови
  }
}
