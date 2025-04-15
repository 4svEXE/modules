import { Component } from '@angular/core';
import { MarqueeComponent } from "../../../shared/components/marquee/marquee.component";
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";

@Component({
  selector: 'app-hero-section',
  imports: [MarqueeComponent, CallToActionComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  videoLoaded = false;

  onVideoLoaded() {
    this.videoLoaded = true;
  }

  messages = [
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
    {
      text: 'Крихітний будинок для оренди: окупність від 2 років і стабільний прибуток!',
      route: '#contact-form',
    },
    {
      text: 'Завдяки швидкому встановленню вже через 5-7 днів ви починаєте заробляти!',
      route: '#contact-form',
    },
    {
      text: 'Крихітний будинок для бізнесу: легко встановлюється в лісі, біля річки або на подвір\'ї.',
      route: '#contact-form',
    },
    {
      text: 'Знижка на доставку та встановлення для перших 10 клієнтів – заощадьте до 30%!',
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
  ];

}
