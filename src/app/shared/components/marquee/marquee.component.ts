import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
  @Input() messages = [
    {
      text: 'Завдяки швидкому встановленню вже через 5 днів ви починаєте заробляти!',
      route: '#contact-form',
    },
    {
      text: 'Крихітний будинок для бізнесу: легко встановлюється в лісі, біля річки або на подвір\'ї.',
      route: '#contact-form',
    },
    {
      text: 'Вигідний старт: знижена вартість на перші одиниці до кінця місяця!',
      route: '#contact-form',
    },
    {
      text: 'Оформіть замовлення сьогодні і отримайте консультацію безкоштовно!',
      route: '#contact-form',
    },
    {
      text: 'Прозорі фінансові розрахунки окупності: дізнайтесь, скільки заробите на оренді!',
      route: '#contact-form',
    },
    {
      text: 'Почніть з невеликою інвестицією: ціна модульного будинку починається від €12,000!',
      route: '#contact-form',
    },
    {
      text: 'Інвестуйте в будинок і отримуйте стабільний прибуток навіть у перший рік експлуатації!',
      route: '#contact-form',
    },
    {
      text: 'Перші 10 будинків за знижкою до 20%!',
      route: '#contact-form',
    },
    {
      text: 'Заробляйте до €2,500 на місяць з оренди!',
      route: '#contact-form',
    },
    {
      text: 'Окупність від 2 років – отримуйте прибуток вже через 24 місяці!',
      route: '#contact-form',
    },
    {
      text: 'Встановлення будинку за 3-5 днів – без будівельних дозволів!',
      route: '#contact-form',
    },
    {
      text: 'Зекономте до 50% на витратах на будівництво порівняно з традиційними методами!',
      route: '#contact-form',
    },
    {
      text: 'Екологічний будинок площею 15 м², який працює на автономних системах.',
      route: '#contact-form',
    },
    {
      text: 'Пасивний дохід вже після першого місяця використання!',
      route: '#contact-form',
    },
    {
      text: 'Модульні будинки для оренди з середнім чеком оренди €100-150 на добу.',
      route: '#contact-form',
    },
    {
      text: '100% гарантія якості і сертифікація відповідно до чеських стандартів будівництва!',
      route: '#contact-form',
    },
    {
      text: 'Мінімальні витрати на обслуговування – економія до 40% на енергоносіях!',
      route: '#contact-form',
    },

  ];

}
