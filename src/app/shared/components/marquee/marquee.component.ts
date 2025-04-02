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
      text: 'Знайди баланс і спокій серед стресу.',
      route: '#contact-form',
    },
    {
      text: 'Віднови енергію для нових починань.',
      route: '#contact-form',
    },
    {
      text: 'Зроби перерву — знайди спокій і ясність.',
      route: '#contact-form',
    },
    {
      text: 'Позбудься тривоги і знайди спокій.',
      route: '#contact-form',
    },
    {
      text: 'Прийшов час зупинитись і відновитись.',
      route: '#contact-form',
    },
    {
      text: 'Позбудься стресу і знайди баланс.',
      route: '#contact-form',
    },
    {
      text: 'Покинь рутину і знайди ясність.',
      route: '#contact-form',
    },
    {
      text: 'Віднови сили, звільнившись від тиску.',
      route: '#contact-form',
    },
    {
      text: 'Приділи собі час для розслаблення і натхнення.',
      route: '#contact-form',
    },
    {
      text: 'Відновлення: спокій і гармонія.',
      route: '#contact-form',
    },
    {
      text: 'Тобі потрібен час для себе, щоб зрозуміти, що хочеш.',
      route: '#contact-form',
    },
    {
      text: 'Присвяти час розвитку і новим можливостям.',
      route: '#contact-form',
    },
    {
      text: 'Дай собі шанс відновитись і рухатись вперед.',
      route: '#contact-form',
    },
    {
      text: 'Знайди інструменти для спокою та рівноваги.',
      route: '#contact-form',
    },
    {
      text: 'Цей ретрит — шанс вийти з рутини і побачити нові можливості.',
      route: '#contact-form',
    },
  ];

}
