import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { MarqueeComponent } from '../../../shared/components/marquee/marquee.component';

@Component({
  selector: 'app-final-cta',
  imports: [ContactFormComponent, MarqueeComponent],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss'
})
export class FinalCTAComponent {
  msg = { text: 'Залиште заявку – ми допоможемо зробити перший крок!', route: '', }
  messages: typeof this.msg [] = []

  ngOnInit() {
    for (let i = 0; i < 99; i++) {
      this.messages.push(this.msg)
    }
  }
}
