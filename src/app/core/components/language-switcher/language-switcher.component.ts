import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
// import { NgClass } from '@angular/common';

@Component({
  // imports: [NgClass],
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  selectedLang: string;

  constructor(private languageService: LanguageService) {
    this.selectedLang = this.languageService.getLanguage();
  }

  // Метод для зміни мови
  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.selectedLang = language;
  }
}
