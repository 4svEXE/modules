import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  imports: [],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {
  @Input() link = '#contact-form'
  @Input() title = 'Дізнатися вартість'
  @Input() text = 'та розрахувати прибуток'
}
