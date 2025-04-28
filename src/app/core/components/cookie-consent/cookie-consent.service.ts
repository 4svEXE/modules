import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private consentStatus = new BehaviorSubject<boolean>(this.getConsentFromStorage());

  consentStatus$ = this.consentStatus.asObservable();

  constructor() {
    console.log('[CookieConsentService] Initialized with consent =', this.consentStatus.value);
  }

  private getConsentFromStorage(): boolean {
    return localStorage.getItem('cookieConsent') === 'true';
  }

  giveConsent(): void {
    console.log('[CookieConsentService] User gave consent.');
    localStorage.setItem('cookieConsent', 'true');
    this.consentStatus.next(true);
  }

  revokeConsent(): void {
    console.log('[CookieConsentService] User revoked consent.');
    localStorage.setItem('cookieConsent', 'false');
    this.consentStatus.next(false);
  }
}
