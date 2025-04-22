import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, CallToActionComponent, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  faqs = [
    {
      question: 'HOME.FAQ.Q1',
      answer: 'HOME.FAQ.A1',
      open: false,
    },
    {
      question: 'HOME.FAQ.Q2',
      answer: 'HOME.FAQ.A2',
      open: false,
    },
    {
      question: 'HOME.FAQ.Q3',
      answer: 'HOME.FAQ.A3',
      open: false,
    },
    {
      question: 'HOME.FAQ.Q4',
      answer: 'HOME.FAQ.A4',
      open: false,
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

