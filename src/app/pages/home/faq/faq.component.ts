import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  faqs = [
    {
      question: 'Чи потрібен дозвіл на встановлення?',
      answer: 'Для більшості випадків дозвіл не потрібен, але залежить від регіону та місцевих норм.',
      open: false,
    },
    {
      question: 'Які комунікації потрібні для будинку?',
      answer: 'Необхідно підключення до електрики, водопостачання та каналізації. Також можливе використання автономних систем.',
      open: false,
    },
    {
      question: 'Як швидко будинок окупається?',
      answer: 'Середній термін окупності залежить від вартості оренди, але зазвичай складає 3-5 років.',
      open: false,
    },
    {
      question: 'Як проходить доставка та встановлення?',
      answer: 'Будинок доставляється на спеціальній платформі, встановлення займає від 1 до 3 днів.',
      open: false,
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
