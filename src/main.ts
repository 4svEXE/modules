/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TranslateService, TranslateLoader, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import 'zone.js'; // Обов'язковий для роботи з Angular
import { register as registerSwiperElements } from 'swiper/element/bundle'; // Імпортуємо Swiper

// Фабрика для завантаження JSON-файлів з перекладами
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Реєструємо ngx-translate правильно
    TranslateStore, // ⚠️ Це ВИРІШУЄ помилку `No provider for TranslateStore!`
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    // Тут можна додати інші провайдери, якщо потрібно
  ]
})
  .then(appRef => {
    // Реєструємо Swiper елементи до старту Angular додатку
    registerSwiperElements(); // Реєстрація Swiper елементів

    // Отримуємо TranslateService після завантаження застосунку
    const translate = appRef.injector.get(TranslateService);
    translate.setDefaultLang('cz'); // За замовчуванням англійська
    translate.use('cz'); // Використовуємо англійську мову при старті
  })
  .catch((err) => console.error(err));
