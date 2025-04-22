import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { MarqueeComponent } from '../../../shared/components/marquee/marquee.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-final-cta',
  imports: [ContactFormComponent, MarqueeComponent, TranslateModule],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss'
})
export class FinalCTAComponent {}
